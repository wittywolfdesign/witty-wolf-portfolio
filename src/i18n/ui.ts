/* Every UI string and every page's copy, per locale. The case-study bodies
   live as markdown in src/content/work/<locale>/; this file carries the
   furniture and the page copy. Adding a fourth locale = one more object here
   plus content, never a rebuild.

   Deliberately NOT translated (brand voice and industry furniture): the
   wordmark, Witty's name, every address, client names, the footer lines
   "still awake, still designing" and "Designed & built in Madrid. Pencils
   kept close.", and job titles / industry terms (Product Designer,
   Co-founder, Developer, Design system, Front-end, UX, UI, staging,
   Toolkit, DM). */

export type Locale = "en" | "nl" | "es";
export const locales: Locale[] = ["en", "nl", "es"];
export const ogLocale: Record<Locale, string> = {
  en: "en_GB",
  nl: "nl_NL",
  es: "es_ES",
};

/* typewriter segment shapes reused by TypeLine */
type Seg = { text?: string; strike?: boolean; cls?: string; br?: boolean };

const en = {
  meta: {
    homeTitle: "Marco Ramos · Product Designer · Witty Wolf Design",
    homeDesc:
      "Product designer for products that don't need a manual. Clear systems, calm interfaces, real outcomes. Based in Madrid.",
    workTitle: "Work · Witty Wolf Design",
    workDesc: "Five case studies. Five real problems. No discover-define-deliver templates.",
    aboutTitle: "About · Marco Ramos · Witty Wolf Design",
    aboutDesc:
      "From selling vintage clothes in Amsterdam to product design in Madrid. 15 years of making sense of messy systems, now applied to digital products.",
    contactTitle: "Contact · Witty Wolf Design",
    contactDesc:
      "A project, a collaboration or just an idea worth talking through. The inbox is open, and I answer.",
    notFoundTitle: "Lost the scent · Witty Wolf Design",
  },
  a11y: { skip: "Skip to content", brandHome: "Witty Wolf Design, home" },
  nav: {
    work: "Work",
    gagWord: "Attempts",
    about: "About",
    contact: "Contact",
    themeDark: "dark",
    themeLight: "light",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    langLabel: "Language",
  },
  footer: {
    contact: "Contact",
    location: "Location",
    status: "Status",
    local: "local",
    cookies: "Cookies",
  },
  home: {
    heroLine: [
      { text: "Your product isn’t the point. The " },
      { text: "pixels", strike: true },
      { text: " people using it are." },
    ] as Seg[],
    lead: "I design products, then build them in real code. The second half keeps the first half honest.",
    selectedWork: "Selected work",
    projects: "projects",
    approachNote: "The short version",
    approachLine: [
      { text: "Good design is not decoration. It is structure that lets a product explain itself in seconds. Making it look good comes after making it " },
      { text: "work", cls: "hl" },
      { text: "." },
    ] as Seg[],
    approachBody:
      "I design for products that don’t require a manual, for the user who’s already frustrated. Clear systems, simple language and interfaces that feel calm instead of overwhelming. I use AI every day but keep my pencils close. The direction has to come from me.",
    moreAboutMe: "More about me",
  },
  work: {
    heading: [
      { text: "Five case studies." },
      { br: true },
      { text: "Five real problems." },
    ] as Seg[],
    lead: "No discover–define–deliver templates. Just the problem, what I did about it and what changed.",
    allWork: "All work",
    projects: "projects",
  },
  caseUi: {
    back: "All work",
    role: "Role",
    discipline: "Discipline",
    year: "Year",
    liveCta: "See it live on staging",
    onThisPage: "On this page",
    nextCase: "Next case study",
    lookCloser: "Look closer",
    close: "Close",
    sectionsLabel: "Sections",
  },
  about: {
    hero: "Fifteen years of making sense of messy systems.",
    facts: [
      { k: "Based in", v: "Madrid" },
      { k: "Focus", v: "Two-sided SaaS · consumer fintech" },
      { k: "Toolkit", v: "Research → production UI → front-end" },
      { k: "Also", v: "Co-founder & developer" },
    ],
    shortLabel: "The short version",
    short1:
      "I am a product designer for products that don’t require a manual, designing for the user who’s already frustrated.",
    short2:
      "Good design is not decoration. It is structure that lets a product explain itself in seconds. Making it look good comes after making it work.",
    longLabel: "The longer version",
    photoAlt: "Marco Ramos, product designer and developer",
    photoCaption: "Madrid, most days",
    photoCredit: "Shot on a sunny day in the studio of Lisa Ball in Amsterdam.",
    photoCreditLabel: "Photography:",
    photoFlipLabel: "Portrait of Marco Ramos. Flip for the photo credit.",
    long: [
      "I started in visual design and stayed comfortable there for years. Then I noticed the work I cared about was never how things looked, it was why they didn’t work. So I retrained in UX/UI, moved from Amsterdam to Madrid and started again on purpose. These days I am developing like I never have before, building the products I design in real code and finding out within hours which of my own decisions survive contact with a browser.",
      "The path was not straight. I sold vintage clothes at Waterlooplein while studying business, spent years at an architecture firm where my role kept drifting toward design, then made it official. That detour is the point: I think in systems because I have run them, not because a course told me to.",
      "And yes, I use AI every day. Mostly to argue with it. It types fast and thinks average, so the direction has to come from me or what comes back is confident, generic and beige. Fighting that is half the craft now. The other half is what it buys me time for: product logic, accessibility and interfaces that feel calm instead of overwhelming.",
      "Almost three years into UX/UI, and nobody has to hold my hand. Urbiqo started as a napkin idea; I turned it into a defined product, a design system and the code now running on staging, as co-founder, designer and developer. At FLIZpay I walked into the overhaul of their merchant dashboard and owned much of the early work that set up the project, pulling context from engineering, business and design into clear, shippable decisions.",
    ],
    seeWork: "See my work",
  },
  contact: {
    title: "Let’s connect.",
    lead: "A project, a collaboration or just an idea worth talking through. The inbox is open, and I answer.",
    nameLabel: "Your name",
    namePh: "First name is fine",
    emailLabel: "Email",
    emailPh: "Where my reply should land",
    msgLabel: "What’s on your mind?",
    msgPh: "A project, a question, a half-formed idea. Rough is fine.",
    send: "Send message",
    preferEmail: "Prefer email?",
    errName: "A name, even just the first one.",
    errEmailMissing: "Need an email so I can write back.",
    errEmailBad: "That address looks off. Check the @ and the part after it.",
    errMsg: "Tell me a little about it. Rough is fine.",
    sending: "Sending...",
    sent: "Sent.",
    failed: "Didn't send. Try howl@wittywolf.design",
  },
  consent: {
    label: "COOKIES, SORT OF",
    body: "Mind if I watch how you move around? Clarity keeps anonymised heatmaps and the odd session replay, so I can see what works here and fix what doesn't. It runs through Microsoft, not ad networks. Say no and nothing loads.",
    allow: "Allow",
    deny: "No thanks",
    ariaLabel: "Cookie consent",
  },
  witty: {
    ariaLabel: "Witty, the site mascot",
    dismiss: "Dismiss Witty",
    /* the standard refusal; {form} marks where the /contact link goes */
    lineBefore: "Hi, I’m Witty. I can’t actually help you. But send me a DM through ",
    lineLink: "the form",
    lineAfter: " and the human will.",
    /* the language offer Witty makes ABOUT this locale, written IN it */
    offer: "Your browser speaks English. So do I, if you’d rather.",
    offerYes: "Yes, switch",
    offerNo: "No, I’m fine",
  },
  notFound: {
    title: "This page lost the scent.",
    sub: "The link is broken or the page moved on.",
    home: "Back home",
  },
};

const nl: typeof en = {
  meta: {
    homeTitle: "Marco Ramos · Product Designer · Witty Wolf Design",
    homeDesc:
      "Product designer voor producten die geen handleiding nodig hebben. Heldere systemen, kalme interfaces, echte uitkomsten. Vanuit Madrid.",
    workTitle: "Werk · Witty Wolf Design",
    workDesc: "Vijf cases. Vijf echte problemen. Geen discover-define-deliver-sjablonen.",
    aboutTitle: "Over · Marco Ramos · Witty Wolf Design",
    aboutDesc:
      "Van vintage kleding verkopen in Amsterdam naar product design in Madrid. Vijftien jaar orde scheppen in rommelige systemen, nu toegepast op digitale producten.",
    contactTitle: "Contact · Witty Wolf Design",
    contactDesc:
      "Een project, een samenwerking of gewoon een idee dat het bespreken waard is. De inbox staat open, en ik antwoord.",
    notFoundTitle: "Spoor kwijt · Witty Wolf Design",
  },
  a11y: { skip: "Direct naar de inhoud", brandHome: "Witty Wolf Design, home" },
  nav: {
    work: "Werk",
    gagWord: "Pogingen",
    about: "Over",
    contact: "Contact",
    themeDark: "donker",
    themeLight: "licht",
    themeToDark: "Schakel naar donkere modus",
    themeToLight: "Schakel naar lichte modus",
    langLabel: "Taal",
  },
  footer: {
    contact: "Contact",
    location: "Locatie",
    status: "Status",
    local: "lokaal",
    cookies: "Cookies",
  },
  home: {
    heroLine: [
      { text: "Je product is het punt niet. De " },
      { text: "pixels", strike: true },
      { text: " mensen die het gebruiken wel." },
    ] as Seg[],
    lead: "Ik ontwerp producten en bouw ze daarna in echte code. De tweede helft houdt de eerste helft eerlijk.",
    selectedWork: "Geselecteerd werk",
    projects: "projecten",
    approachNote: "De korte versie",
    approachLine: [
      { text: "Goed ontwerp is geen decoratie. Het is structuur waarmee een product zichzelf in seconden uitlegt. Mooi maken komt pas na laten " },
      { text: "werken", cls: "hl" },
      { text: "." },
    ] as Seg[],
    approachBody:
      "Ik ontwerp voor producten die geen handleiding nodig hebben, voor de gebruiker die al gefrustreerd is. Heldere systemen, simpele taal en interfaces die rust geven in plaats van overweldigen. Ik gebruik AI elke dag, maar mijn potloden liggen binnen handbereik. De richting moet van mij komen.",
    moreAboutMe: "Meer over mij",
  },
  work: {
    heading: [
      { text: "Vijf cases." },
      { br: true },
      { text: "Vijf echte problemen." },
    ] as Seg[],
    lead: "Geen discover–define–deliver-sjablonen. Gewoon het probleem, wat ik eraan deed en wat er veranderde.",
    allWork: "Al het werk",
    projects: "projecten",
  },
  caseUi: {
    back: "Al het werk",
    role: "Rol",
    discipline: "Discipline",
    year: "Jaar",
    liveCta: "Bekijk het live op staging",
    onThisPage: "Op deze pagina",
    nextCase: "Volgende case",
    lookCloser: "Van dichtbij",
    close: "Sluiten",
    sectionsLabel: "Secties",
  },
  about: {
    hero: "Vijftien jaar orde scheppen in rommelige systemen.",
    facts: [
      { k: "Gevestigd in", v: "Madrid" },
      { k: "Focus", v: "Two-sided SaaS · consumer fintech" },
      { k: "Toolkit", v: "Research → production UI → front-end" },
      { k: "Ook", v: "Co-founder & developer" },
    ],
    shortLabel: "De korte versie",
    short1:
      "Ik ben product designer voor producten die geen handleiding nodig hebben, en ontwerp voor de gebruiker die al gefrustreerd is.",
    short2:
      "Goed ontwerp is geen decoratie. Het is structuur waarmee een product zichzelf in seconden uitlegt. Mooi maken komt pas na laten werken.",
    longLabel: "De lange versie",
    photoAlt: "Marco Ramos, product designer en developer",
    photoCaption: "Madrid, meestal",
    photoCredit: "Geschoten op een zonnige dag in de studio van Lisa Ball in Amsterdam.",
    photoCreditLabel: "Fotografie:",
    photoFlipLabel: "Portret van Marco Ramos. Draai om voor de fotocredit.",
    long: [
      "Ik begon in visueel ontwerp en bleef daar jaren comfortabel hangen. Tot ik doorhad dat het werk waar ik om gaf nooit ging over hoe iets eruitzag, maar over waarom het niet werkte. Dus ik schoolde me om naar UX/UI, verhuisde van Amsterdam naar Madrid en begon opnieuw, expres. Inmiddels ontwikkel ik meer dan ooit: ik bouw de producten die ik ontwerp in echte code en ontdek binnen een paar uur welke van mijn eigen beslissingen contact met een browser overleven.",
      "De route was niet recht. Ik verkocht vintage kleding op het Waterlooplein terwijl ik bedrijfskunde studeerde, werkte jaren bij een architectenbureau waar mijn rol steeds verder richting ontwerp schoof, en maakte het toen officieel. Die omweg is precies het punt: ik denk in systemen omdat ik ze zelf heb gerund, niet omdat een cursus het me vertelde.",
      "En ja, ik gebruik AI elke dag. Vooral om ermee in discussie te gaan. Het typt snel en denkt middelmatig, dus de richting moet van mij komen, anders komt er iets terug dat zelfverzekerd, generiek en beige is. Daartegen vechten is inmiddels het halve vak. De andere helft is wat het me aan tijd oplevert: productlogica, toegankelijkheid en interfaces die rust geven in plaats van overweldigen.",
      "Bijna drie jaar in UX/UI, en niemand hoeft mijn hand vast te houden. Urbiqo begon als een idee op een servet; ik maakte er een gedefinieerd product van, een design system en de code die nu op staging draait, als co-founder, ontwerper en developer. Bij FLIZpay stapte ik in de vernieuwing van hun merchant-dashboard en droeg ik veel van het vroege werk dat het project neerzette, door context uit engineering, business en design samen te brengen tot heldere, bouwbare beslissingen.",
    ],
    seeWork: "Bekijk mijn werk",
  },
  contact: {
    title: "Zeg het maar.",
    lead: "Een project, een samenwerking of gewoon een idee dat het bespreken waard is. De inbox staat open, en ik antwoord.",
    nameLabel: "Je naam",
    namePh: "Voornaam is prima",
    emailLabel: "E-mail",
    emailPh: "Waar mijn antwoord moet landen",
    msgLabel: "Wat speelt er?",
    msgPh: "Een project, een vraag, een half idee. Ruw is prima.",
    send: "Verstuur bericht",
    preferEmail: "Liever mailen?",
    errName: "Een naam, al is het maar je voornaam.",
    errEmailMissing: "Ik heb een e-mailadres nodig om terug te schrijven.",
    errEmailBad: "Dat adres klopt niet helemaal. Check de @ en wat erna komt.",
    errMsg: "Vertel er iets over. Ruw is prima.",
    sending: "Versturen...",
    sent: "Verstuurd.",
    failed: "Niet gelukt. Probeer howl@wittywolf.design",
  },
  consent: {
    label: "COOKIES, MIN OF MEER",
    body: "Vind je het goed als ik meekijk hoe je je hier beweegt? Clarity bewaart geanonimiseerde heatmaps en af en toe een sessie-opname, zodat ik zie wat werkt en repareer wat niet werkt. Het loopt via Microsoft, niet via advertentienetwerken. Zeg nee en er wordt niets geladen.",
    allow: "Prima",
    deny: "Nee, bedankt",
    ariaLabel: "Cookietoestemming",
  },
  witty: {
    ariaLabel: "Witty, de mascotte van deze site",
    dismiss: "Witty wegsturen",
    lineBefore: "Hoi, ik ben Witty. Ik kan je echt niet helpen. Maar stuur een DM via ",
    lineLink: "het formulier",
    lineAfter: ", dan doet de mens het wel.",
    offer: "Je browser praat Nederlands. Ik ook, als je wilt.",
    offerYes: "Ja, doe maar",
    offerNo: "Nee, laat maar",
  },
  notFound: {
    title: "Deze pagina is het spoor kwijt.",
    sub: "De link is kapot of de pagina is verder getrokken.",
    home: "Terug naar huis",
  },
};

const es: typeof en = {
  meta: {
    homeTitle: "Marco Ramos · Product Designer · Witty Wolf Design",
    homeDesc:
      "Product designer para productos que no necesitan manual. Sistemas claros, interfaces que dan calma, resultados reales. Desde Madrid.",
    workTitle: "Trabajo · Witty Wolf Design",
    workDesc: "Cinco casos. Cinco problemas reales. Nada de plantillas discover-define-deliver.",
    aboutTitle: "Sobre mí · Marco Ramos · Witty Wolf Design",
    aboutDesc:
      "De vender ropa vintage en Ámsterdam al diseño de producto en Madrid. Quince años poniendo orden en sistemas caóticos, ahora aplicados a productos digitales.",
    contactTitle: "Contacto · Witty Wolf Design",
    contactDesc:
      "Un proyecto, una colaboración o una idea a medio hacer que valga la pena comentar. El buzón está abierto, y contesto.",
    notFoundTitle: "Rastro perdido · Witty Wolf Design",
  },
  a11y: { skip: "Saltar al contenido", brandHome: "Witty Wolf Design, inicio" },
  nav: {
    work: "Trabajo",
    gagWord: "Intentos",
    about: "Sobre mí",
    contact: "Contacto",
    themeDark: "oscuro",
    themeLight: "claro",
    themeToDark: "Cambiar a modo oscuro",
    themeToLight: "Cambiar a modo claro",
    langLabel: "Idioma",
  },
  footer: {
    contact: "Contacto",
    location: "Ubicación",
    status: "Estado",
    local: "local",
    cookies: "Cookies",
  },
  home: {
    heroLine: [
      { text: "Tu producto no es el punto. El punto son las " },
      { text: "pantallas", strike: true },
      { text: " personas que lo usan." },
    ] as Seg[],
    lead: "Diseño productos y luego los construyo en código real. La segunda mitad mantiene honesta a la primera.",
    selectedWork: "Trabajo seleccionado",
    projects: "proyectos",
    approachNote: "La versión corta",
    approachLine: [
      { text: "El buen diseño no es decoración. Es estructura que deja que un producto se explique solo en segundos. Hacerlo bonito viene después de hacerlo " },
      { text: "funcionar", cls: "hl" },
      { text: "." },
    ] as Seg[],
    approachBody:
      "Diseño para productos que no necesitan manual, para la persona que ya llegó frustrada. Sistemas claros, lenguaje simple e interfaces que dan calma en vez de agobiar. Uso IA todos los días, pero con los lápices a mano. La dirección tiene que salir de mí.",
    moreAboutMe: "Más sobre mí",
  },
  work: {
    heading: [
      { text: "Cinco casos." },
      { br: true },
      { text: "Cinco problemas reales." },
    ] as Seg[],
    lead: "Nada de plantillas discover–define–deliver. El problema, lo que hice y lo que cambió.",
    allWork: "Todo el trabajo",
    projects: "proyectos",
  },
  caseUi: {
    back: "Todo el trabajo",
    role: "Rol",
    discipline: "Disciplina",
    year: "Año",
    liveCta: "Míralo vivo en staging",
    onThisPage: "En esta página",
    nextCase: "Siguiente caso",
    lookCloser: "De cerca",
    close: "Cerrar",
    sectionsLabel: "Secciones",
  },
  about: {
    hero: "Quince años poniendo orden en sistemas caóticos.",
    facts: [
      { k: "Base", v: "Madrid" },
      { k: "Foco", v: "Two-sided SaaS · consumer fintech" },
      { k: "Toolkit", v: "Research → production UI → front-end" },
      { k: "Además", v: "Co-founder & developer" },
    ],
    shortLabel: "La versión corta",
    short1:
      "Soy product designer para productos que no necesitan manual, y diseño para la persona que ya llegó frustrada.",
    short2:
      "El buen diseño no es decoración. Es estructura que deja que un producto se explique solo en segundos. Hacerlo bonito viene después de hacerlo funcionar.",
    longLabel: "La versión larga",
    photoAlt: "Marco Ramos, product designer y developer",
    photoCaption: "Madrid, casi siempre",
    photoCredit: "Hecha un día de sol en el estudio de Lisa Ball, en Ámsterdam.",
    photoCreditLabel: "Fotografía:",
    photoFlipLabel: "Retrato de Marco Ramos. Gira para ver el crédito de la foto.",
    long: [
      "Empecé en diseño visual y me quedé años en esa zona cómoda. Hasta que noté que el trabajo que me importaba nunca era cómo se veían las cosas, sino por qué no funcionaban. Así que me reciclé en UX/UI, me mudé de Ámsterdam a Madrid y empecé de nuevo, a propósito. Ahora desarrollo como nunca: construyo en código real los productos que diseño y descubro en horas cuáles de mis propias decisiones sobreviven al contacto con un navegador.",
      "El camino no fue recto. Vendí ropa vintage en el Waterlooplein mientras estudiaba empresariales, pasé años en un estudio de arquitectura donde mi rol se iba deslizando hacia el diseño, y luego lo hice oficial. Ese desvío es el punto: pienso en sistemas porque los he llevado, no porque me lo dijera un curso.",
      "Y sí, uso IA todos los días. Sobre todo para discutir con ella. Teclea rápido y piensa regular, así que la dirección tiene que salir de mí o lo que vuelve es seguro de sí mismo, genérico y beige. Pelear contra eso ya es la mitad del oficio. La otra mitad es el tiempo que me compra: lógica de producto, accesibilidad e interfaces que dan calma en vez de agobiar.",
      "Casi tres años en UX/UI, y nadie tiene que llevarme de la mano. Urbiqo empezó como una idea en una servilleta; la convertí en un producto definido, un design system y el código que ahora corre en staging, como co-founder, diseñador y developer. En FLIZpay entré en la renovación de su panel para comercios y llevé buena parte del trabajo inicial que montó el proyecto, juntando contexto de ingeniería, negocio y diseño en decisiones claras y construibles.",
    ],
    seeWork: "Ver mi trabajo",
  },
  contact: {
    title: "Hablemos.",
    lead: "Un proyecto, una colaboración o una idea a medio hacer que valga la pena comentar. El buzón está abierto, y contesto.",
    nameLabel: "Tu nombre",
    namePh: "Con el nombre de pila vale",
    emailLabel: "Email",
    emailPh: "Donde debería aterrizar mi respuesta",
    msgLabel: "¿Qué tienes en mente?",
    msgPh: "Un proyecto, una duda, una idea a medias. En bruto está bien.",
    send: "Enviar mensaje",
    preferEmail: "¿Prefieres email?",
    errName: "Un nombre, aunque sea solo el de pila.",
    errEmailMissing: "Necesito un email para poder contestarte.",
    errEmailBad: "Esa dirección no cuadra. Revisa la @ y lo que viene después.",
    errMsg: "Cuéntame un poco. En bruto está bien.",
    sending: "Enviando...",
    sent: "Enviado.",
    failed: "No se envió. Prueba howl@wittywolf.design",
  },
  consent: {
    label: "COOKIES, MÁS O MENOS",
    body: "¿Te importa si miro cómo te mueves por aquí? Clarity guarda heatmaps anonimizados y alguna grabación de sesión, para que yo vea qué funciona y arregle lo que no. Va por Microsoft, no por redes de anuncios. Di que no y no se carga nada.",
    allow: "Vale",
    deny: "No, gracias",
    ariaLabel: "Consentimiento de cookies",
  },
  witty: {
    ariaLabel: "Witty, la mascota de esta web",
    dismiss: "Despedir a Witty",
    lineBefore: "Hola, soy Witty. La verdad es que no puedo ayudarte. Pero mándame un DM por ",
    lineLink: "el formulario",
    lineAfter: " y el humano sí.",
    offer: "Tu navegador habla español. Yo también, si quieres.",
    offerYes: "Sí, cambia",
    offerNo: "No, déjalo",
  },
  notFound: {
    title: "Esta página perdió el rastro.",
    sub: "El enlace está roto o la página siguió su camino.",
    home: "Volver a casa",
  },
};

export const ui = { en, nl, es };
export type Ui = typeof en;

export function t(locale: string | undefined): Ui {
  return ui[(locale as Locale) ?? "en"] ?? ui.en;
}

/* the path of `pathname` with its locale prefix stripped (the "en shape") */
export function basePath(pathname: string): string {
  const m = pathname.match(/^\/(nl|es)(\/.*|$)/);
  return m ? m[2] || "/" : pathname;
}

/* the same page's path in another locale; slugs are shared across locales */
export function localePath(pathname: string, target: Locale): string {
  const base = basePath(pathname);
  return target === "en" ? base : `/${target}${base === "/" ? "/" : base}`;
}
