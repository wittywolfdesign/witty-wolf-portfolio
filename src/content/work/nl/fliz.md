---
title: "Verkoop het verschil"
client: "FLIZpay"
tagline: "Verkoop het verschil, niet de checklist"
summary: "Het merchant-dashboard en de betaalapp van FLIZpay opnieuw ontworpen, rond de cashback die ze onderscheidt."
year: "2026"
role: "Product Designer, UX/UI · 12 weken, met het design- en engineeringteam van FLIZ"
discipline: ["Research", "Product design", "Design system", "QA"]
thumb: "/thumbs/fliz.svg"
accent: "#80ed99"
ink: "#001f3f"
order: 1.5
featured: true
status: "published"
metrics:
  - value: "2 producten"
    label: "Merchant-dashboard en consumenten-betaalapp"
  - value: "Research → QA"
    label: "Strategie, UX/UI, design system, testing"
  - value: "5+ UX-taken"
    label: "Post-release fixes, ongevraagd ingediend"
---

FLIZpay is een Duits open-banking betaalbedrijf. De consumenten-app is het
betaalsysteem zelf: je betaalt een winkel direct vanaf je bank, en FLIZ betaalt je
daarna een percentage terug als cashback. Merchants bieden die cashback aan om
betalingen naar FLIZ te trekken. Een apart merchant-dashboard is waar ze het
instellen en volgen. Ik werkte twaalf weken binnen het FLIZ-team, dicht onder de
design lead en dagelijks samen met de developers. Twee producten met heel
verschillende taken. Het tempo lag hoog, met constante releases. De grootste was
de overhaul van het merchant-dashboard. Onderweg pakte ik productstrategie, het
design system en QA op.

<p class="note">01 · Het onderscheid</p>

## Het onderscheid dat verstopt zat

Elk betaalproduct concurreert op dezelfde checklist: facturatie, rapportage,
rechten, rollen. Nuttig, verwacht, en nooit de reden om over te stappen. In de
eerste weken pluisde ik dat veld uit, feature voor feature. Eerst zelf goed
kijken naar de naaste concurrenten. Daarna vulde AI de vergelijkingsmatrix, op
parameters die ik had vastgelegd, en zag ik welke ik zelf had gemist. Als
laatste liep ik zelf de apps en sites van de concurrentie door. Geen blind
vertrouwen. Overal hetzelfde patroon. De checklist was instapniveau. Nooit het
slagveld.

> Wat FLIZpay uniek maakte, was precies waar het product het minst over sprak.

De echte kracht is de cashback: FLIZ betaalt klanten terug voor betalen via open
banking, en merchants stellen het percentage in om kopers binnen te halen. Dat
mechanisme zat verstopt, één verhaal tussen een dozijn parity-features. Dus
herschreef de opdracht zichzelf: stop met de checklist volgen, en zet het
onderscheid waar niemand het kan missen.

<div class="fz-cards" data-fz-in>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-discount-system.png" alt="FLIZpay-marketingkaart: het discount-systeem, dat nieuwe klanten binnenhaalt met een welkomstpercentage en ze vasthoudt met een terugkerend percentage" loading="lazy" /><figcaption>Discount system</figcaption></figure>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-self-service.png" alt="FLIZpay-marketingkaart: self-service opzet, discounts instellen en betalingen aannemen zonder onboardingsgesprekken" loading="lazy" /><figcaption>Self service</figcaption></figure>
</div>

<p class="note">02 · De overhaul</p>

## Het bedrijfsaccount, herbouwd rond de cashback

Een merchant moet niet inloggen om naar het account te *kijken*. Hij moet inloggen
om het te *runnen*. Het dashboard heeft één taak, en dat is niet betalingen
aannemen, dat doet de app. Het is waar een merchant de cashback instelt, de
prestaties volgt en de winkel verbonden houdt. Dus bouwden we het FLIZ Company
Account om rond precies die taak: de cashback, de prestaties en de instelling
ervan, allemaal in één oogopslag. Ik deed veel van het vroege werk, de research,
de structuur en de MVP die de richting bewees, steeds onder leiding van de design
lead en met engineering aan tafel. (De interface noemt het percentage een
*discount*; de klant krijgt het als cashback.)

Het begon als de **MVP voor de overhaul**: het herontwerp teruggebracht tot de
structuur, genoeg om de richting te bewijzen voor de high-fidelity-slag.

<figure class="fig fig--bare fz-shot fz-shot--wire" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>dashboard · MVP</b></span>
    <img src="/work/fliz/fliz-dashboard-wireframe.png" alt="De MVP voor de overhaul van het FLIZpay-dashboard: de dashboardstructuur, een KPI-rij, een transactietabel en de discount-onderdelen, opgezet voor de high-fidelity-slag" loading="lazy" />
  </span>
  <figcaption>De MVP voor de overhaul: de dashboardstructuur, voor de high-fidelity-slag.</figcaption>
</figure>

De echte onderdelen doen het werk: een KPI-strip, een filterbare transactietabel,
discount-prestaties, een installatiegids en een live platform-statusregel. Het hele
account leesbaar en bestuurbaar vanaf één scherm.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>FLIZ Company Account · Dashboard</b></span>
    <img src="/work/fliz/fliz-dashboard.png" alt="Het high-fidelity FLIZpay merchant-dashboard: een KPI-strip met vier kaarten, een doorzoekbare en filterbare transactietabel met status-pills, een discount-instelpaneel, een discount-prestatiegrafiek en een installatiegids" loading="lazy" />
  </span>
  <figcaption>Het dashboard in high fidelity: KPI's, transacties, discount instellen en prestaties, één scherm om vanuit te werken.</figcaption>
</figure>

<p class="note">Het KPI-moment</p>

## Een getal, voor al het andere

Het eerste wat het dashboard toont is geen menu. Het zijn vier getallen. Dat was de
ontwerpkeuze: één eerlijk getal moet de merchant begroeten voor hij iets doet,
zodat het account meteen antwoordt op *hoe gaat het?*

<div class="fz-kpi-pin" data-fz-kpi>
  <div class="fz-kpi">
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Revenue this month</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="12480.5" data-count-dec="2" data-count-euro="1">€ 12.480,50</span>
      <span class="fz-kpi__sub">+8.3% vs last month</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Transactions today</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="47" data-count-dec="0">47</span>
      <span class="fz-kpi__sub">€1,240.00 total</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">Active discount</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="3.5" data-count-dec="1" data-count-suffix="%">3.5%</span>
      <span class="fz-kpi__sub">First purchase: 5%</span>
    </div>
    <div class="fz-kpi__card">
      <span class="fz-kpi__label">New customers (30d)</span>
      <span class="fz-kpi__value" data-fz-count data-count-to="89" data-count-dec="0">89</span>
      <span class="fz-kpi__sub">Via discount incentive</span>
    </div>
  </div>
  <p class="fz-kpi-note">De getoonde voorbeeldwaarden zijn placeholder-cijfers uit het designbestand, geen bedrijfsresultaten.</p>
</div>

<p class="note">03 · Status</p>

## Status die je in één oogopslag vertrouwt

Een betaling gebeurde of niet, en een merchant zou nooit moeten gokken welke. De
transactietabel draait op één statussysteem met een vaste kleurmapping, zodat een
staat elke keer hetzelfde betekent: groen afgerond, amber wachtend, rood mislukt,
grijs gestopt.

<div class="fz-status" data-fz-in>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--done">Completed</span>
    <p>Betaling succesvol verwerkt en op je account bijgeschreven.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--pending">Pending</span>
    <p>Betaling gestart, wacht op bevestiging van de bank.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--failed">Failed</span>
    <p>Betaling kon niet worden verwerkt. Controleer de transactiegegevens.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--canceled">Canceled</span>
    <p>Transactie geannuleerd door de gebruiker of het systeem.</p>
  </div>
</div>

<p class="note">04 · Discount instellen</p>

## Discount, gepromoveerd tot een eigen plek

Het mechanisme dat FLIZ anders maakt, stond waar niemand kijkt: een regel in de
instellingen. Ik stelde voor het naar een eigen plek op het dashboard te
halen, en daar kwam het. Een merchant stelt twee percentages in, een
first-purchase-cashback om nieuwe klanten binnen te halen en een
standaardpercentage voor daarna, ziet het effect in een live preview, en
publiceert. Waar het bedrijf het best in is, is nu het makkelijkst te doen in het
dashboard.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Set discount</b></span>
    <img src="/work/fliz/fliz-set-discount.png" alt="Het FLIZpay Set Discount-scherm: aparte controls voor first-purchase- en standaard-discount met percentage-invoer en toggles, en een live preview van de aanbieding voor de klant" loading="lazy" />
  </span>
  <figcaption>Discount instellen als een eigen plek: first-purchase versus standaard, met een live preview voor publiceren.</figcaption>
</figure>

<p class="note">05 · Merchant-gids</p>

## Een merchant-gids die het lezen waard is

Een winkel onboarden was een zware, overslaanbare tutorial. Vanuit de richting van
de design lead ontwierp ik het opnieuw als een goed gemaakte, low-tech statische
gids, het soort documentatie dat je echt leest, met de docs van Stripe als visuele
referentie: rustig, stap voor stap, geen video om door te zitten. Het werd eerst
als wireframe getekend en pas daarna naar high fidelity gebracht, zodat de
structuur klopte voor de afwerking erop ging.

<figure class="fig fig--bare fz-shot fz-shot--tall" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Help center · Installation guide</b></span>
    <img src="/work/fliz/fliz-installation-guide.png" alt="De FLIZpay-installatiegids: een strakke, stapsgewijze statische documentatielayout die een merchant door platform kiezen, plugin installeren, API-key genereren, discount instellen en logo uploaden loodst" loading="lazy" />
  </span>
  <figcaption>De installatiegids: statische, stapsgewijze documentatie in plaats van een tutorial die niemand afmaakte.</figcaption>
</figure>

<p class="note">06 · De consumenten-app</p>

## De consumenten-app: saved offers vindbaar maken

De app is het betaalsysteem van FLIZpay: het is hoe mensen echt betalen, direct
vanaf hun bank. De cashback-offers liggen daar bovenop, en die laag zat verstopt.
De catalogus, saved offers en filters zaten twee of drie taps diep, zonder ingang
vanaf de homepage. De beste reden om de app te openen was zo het moeilijkst te
bereiken. De claim had bewijs nodig, dus bouwde ik de volledige userflow van de app
in FigJam en maakte er een ticket van: de belangrijkste functie zat te diep
verstopt. De CEO, de CTO en de design lead beaamden het alle drie. Het naar
de voorgrond halen werd het werk: op het homescreen, en prominent in een
menu.

Mijn eerste voorstel was een hub-knop. Ik kilde mijn eigen concept voor een
bottom nav (**Balance · Catalogue · QR · Send**), met de saaie functies,
settings en profiel, achter een profielknop bovenin. Daaromheen: ingangen
op de homepage die offers op het eerste scherm zetten (categorie-chips, een
saved-offers-tegel, een deal-of-the-week-kaart), een cataloguhub, en een
*keep browsing?*-flow na aankoop, zodat een afgeronde betaling ergens heen
leidt in plaats van te eindigen. De richting werd onafhankelijk gevalideerd
door de lead engineer, en groeide later door naar een iteratie met
glass-effect. De scherpste snee was niet van mij: de productmanager en de
CEO schrapten de verstuur- en ontvangstfuncties volledig uit de app.

<div class="fz-gallery" data-fz-gallery>
  <div class="fz-gallery__track" data-fz-track>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-a-bottom-nav.png" alt="Consumenten-app concept A: een homescreen met categorie-chips, een saved-offers-rij, een deal-of-the-week-kaart en een bottom nav" loading="lazy" /></span><figcaption>Concept A · ingangen op de homepage + bottom nav, de richting die won</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-b-hub-button.png" alt="Consumenten-app concept B: een navigatiepatroon met een centrale hub-knop" loading="lazy" /></span><figcaption>Concept B · de hub-knop, mijn eerste voorstel, zelf gekild</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-c-gift-card.png" alt="Consumenten-app concept C: een browse-patroon in de vorm van een gift-card-wereld" loading="lazy" /></span><figcaption>Concept C · gift-card-wereld</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-app-homescreen.png" alt="Het homescreen van de consumenten-app met send funds en offers meteen zichtbaar" loading="lazy" /></span><figcaption>Homescreen · offers meteen zichtbaar</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-deal-of-the-week.png" alt="De deal-of-the-week-kaart met een tijd-resterend-badge, gemarkeerd met een vlam voor urgentie" loading="lazy" /></span><figcaption>Deal of the week · tijd-resterend-badge</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-nav-glass.png" alt="De latere glass-effect-iteratie van het app-homescreen: transacties, prepaid deals en een zwevend glazen bottom-menu over de content" loading="lazy" /></span><figcaption>De glass-iteratie · waar de richting landde</figcaption></figure>
  </div>
  <p class="fz-gallery__hint" aria-hidden="true">Scroll →</p>
</div>

<p class="note">07 · Kleine beslissingen</p>

## Kleine beslissingen, echte frictie

De grote structuur werkt alleen als de kleine signalen eerlijk zijn. Een offer
bewaren stond met een paperclip, wat leest als *bijlage*, niet *bewaren*, dus werd
het een hart. Dat maakte het urgentiesignaal vrij dat de paperclip vertroebelde,
en de deal of the week kreeg een vlam om te zeggen *dit verloopt*.

<p class="note">Onder de motorkap</p>

## Onder de motorkap

Onder het zichtbare werk zat het ongrappige soort. Daar was mijn taakverdeling
met AI ook het scherpst. Ruwweg **1.150 lagen** hernoemd naar sentence case en
zo'n **50 localisation strings** gefixt in EN/DE, met een pass over de
capitalisatie: AI deed het bulkwerk op een precieze opdracht en stelde
taalvarianten voor, ik koos en controleerde het resultaat laag voor laag. Zo las
het design system als één stem in plaats van vijf. En zodat dat zo bleef zonder
mij, schreef ik er de handleidingen bij: hoe je met de variabelen werkt, hoe je
met localisation omgaat. Documentatie die de volgende designer sneller maakt
zonder iemand ernaast. Dezelfde verdeling gold voor
het brandwerk. De identiteit had net een nieuwe richting gekregen onder de
design lead. Ik werkte met haar om die overal door te voeren, iconografie
meegerekend, vaak met Gemini als generator en mij als filter. Ik deed hands-on QA op TestFlight en draaide Clarity-tests van begin tot
eind: de research, de interpretatie, de rapportage. En ik diende
**vijf-plus post-release UX-taken ongevraagd** in, elk niet als bug maar als een
retentie- of activatieprobleem dat het oplossen waard was.

<p class="note">AI-gebruik</p>

## AI-gebruik

AI liep door bijna elk deel van dit werk, van research tot QA. De
duidelijkste voorbeelden: het vulde de concurrentiematrix op parameters
die ik vastlegde, en ik controleerde elke conclusie in de apps van de
concurrenten zelf. Het deed het bulkwerk van de 1.150 hernoemde lagen en
de localisation-fixes, op precieze opdrachten, en ik koos uit de varianten
en controleerde laag voor laag. Gemini genereerde iconografie voor de
nieuwe merkrichting, en de design lead en ik stuurden en cureerden. Niets
van AI ging ongecontroleerd live.

<p class="note">Wat ik ervan leerde</p>

## Wat ik ervan leerde

- **Verkoop het verschil, niet de checklist.** Niemand stapt over omdat je dezelfde
  features hebt als de rest. De ontwerptaak was om de echte onderscheidende
  factor van de voetnoten naar de kop te halen.
- **Voor een publiek dat al binnen is, laat waarde zien, herhaal de pitch niet.** Een
  merchant die zich heeft aangemeld, hoef je niet opnieuw te overtuigen. Hij wil de
  opbrengst makkelijk bereikbaar en makkelijk leesbaar.
- **Til het kernmechanisme naar een eigen plek.** Waar een product het best in is,
  hoort nooit in een instellingenregel. Geef het een oppervlak, en het hele product
  wijst naar wat het anders maakt.
