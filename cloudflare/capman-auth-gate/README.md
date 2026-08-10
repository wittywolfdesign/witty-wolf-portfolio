# Capman auth gate

Cloudflare Worker that adds basic auth in front of `wittywolf.design/clients/capman/*`, the private Capman.es client presentation. GitHub Pages (the site's host) cannot do host-layer auth or custom headers on its own, so this Worker sits in front of it via Cloudflare. It only intercepts this one route; the rest of the site keeps flowing straight through to GitHub Pages untouched.

Credentials are never stored in this repo. They are set as Worker secrets in the Cloudflare dashboard or CLI.

## One-off account setup (do this yourself, not scriptable)

1. Create a Cloudflare account if you do not already have one, at cloudflare.com.
2. Add `wittywolf.design` as a site in Cloudflare (free plan is enough). Cloudflare will scan the existing DNS records, which should be the four GitHub Pages A records and the `www` CNAME.
3. Cloudflare gives you two nameservers. Go to the domain at domains.squarespace.com (this is where wittywolf.design is registered, formerly Google Domains) and replace the current nameservers with the two Cloudflare ones. This can take anywhere from a few minutes to a few hours to propagate.
4. Once Cloudflare shows the zone as active, in the DNS tab make sure the four A records (185.199.108.153, .109.153, .110.153, .111.153) and the `www` CNAME are all set to Proxied (orange cloud), not DNS only. The Worker route will not fire on records that are DNS only.
5. In SSL/TLS settings for the zone, set the encryption mode to Full. GitHub Pages already serves a valid certificate on the custom domain, so Full works without needing Full (strict).

## Deploying the Worker

From this folder:

```
npx wrangler login
npx wrangler secret put BASIC_AUTH_USER
npx wrangler secret put BASIC_AUTH_PASS
npx wrangler deploy
```

`wrangler login` opens a browser window to authorise against your Cloudflare account. The two `secret put` commands prompt for a value and store it encrypted against the Worker, this is where the client's username and password go, pick something you have not used elsewhere.

Re-run `npx wrangler deploy` any time `worker.js` changes. Re-run `secret put` to rotate credentials.

## Verifying

Once deployed and DNS has propagated, `https://wittywolf.design/clients/capman/` should return 401 with no credentials, and load the deck after entering the username and password from the secrets above. Every other route on the site should be unaffected.
