const PROTECTED_PREFIX = '/clients/capman/';

function timingSafeEqual(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let result = a.length === b.length ? 0 : 1;
  for (let i = 0; i < maxLength; i++) {
    const charA = i < a.length ? a.charCodeAt(i) : 0;
    const charB = i < b.length ? b.charCodeAt(i) : 0;
    result |= charA ^ charB;
  }
  return result === 0;
}

function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Capman review", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}

async function withNoindexHeader(response) {
  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith(PROTECTED_PREFIX)) {
      return fetch(request);
    }

    const auth = request.headers.get('Authorization');
    if (!auth || !auth.startsWith('Basic ')) {
      return unauthorized();
    }

    let decoded;
    try {
      decoded = atob(auth.slice(6));
    } catch {
      return unauthorized();
    }

    const separatorIndex = decoded.indexOf(':');
    if (separatorIndex === -1) {
      return unauthorized();
    }

    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);

    const validUser = timingSafeEqual(user, env.BASIC_AUTH_USER || '');
    const validPass = timingSafeEqual(pass, env.BASIC_AUTH_PASS || '');

    if (!validUser || !validPass) {
      return unauthorized();
    }

    const response = await fetch(request);
    return withNoindexHeader(response);
  },
};
