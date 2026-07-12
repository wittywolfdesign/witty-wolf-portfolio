---
title: "Vertrouwensproblemen oplossen"
client: "Urbiqo"
tagline: "Hosts en huurders verifiëren voordat er iets misgaat"
summary: "Hoe buitengesloten huurders en risicomijdende hosts op hetzelfde platform belanden."
year: "Sinds 2025"
role: "Product Designer, Co-founder & Developer"
discipline: ["Research", "Product design", "Design system", "Front-end"]
thumb: "/thumbs/urbiqo.svg"
accent: "#C25A3C"
ink: "#ffffff"
order: 2
featured: true
status: "published"
# STAGING URL — bij launch omzetten naar productie. Eén bron voor de live-CTA.
liveUrl: "https://staging.urbiqo.com/en"
context: "Een tweezijdige SaaS-marktplaats voor stedelijke verhuur, in actieve ontwikkeling."
problem: "Kamerverhuur draait op blind vertrouwen. Hosts en huurders committeren zich voordat iemand weet met wie ze te maken hebben."
outcome: "End-to-end ontworpen en daarna zelf gebouwd op Next.js. Het platform draait live op staging; de launch komt nog, gebruikersdata dus ook."
metrics:
  - value: "Op staging"
    label: "Gebouwd en live, launch komt nog"
  - value: "4 maanden"
    label: "Van research tot productie-UI"
  - value: "Tweezijdig"
    label: "Huurders en hosts, één platform"
---

Madrid groeit hard en de huurmarkt komt niet mee. De filters hangen in een
ander decennium: geen vast contract, geen woning. Dat sluit solvente
huurders buiten en laat hosts kiezen uit een kleinere, eenvormige groep.

<p class="note">De papiermuur</p>

## Solvent, en toch buitengesloten

Freelancers en expats lopen tegen dichte deuren aan, afgewezen omdat een
standaard loonstrook ontbreekt, hoe solvent ze ook zijn. Hosts zitten ook
klem: strakke papierwinkel is het enige risicogereedschap dat er is, dus
gebruiken ze het. Urbiqo gooit die papieren niet weg; het voegt extra
ingangen toe. Een huurder kan een garantsteller opgeven, hulp van ouders
telt als een echt antwoord op hoe de huur wordt betaald, en een optionele
achtergrondstap laat ze aan hosts vertellen wie ze zijn: waarom ze
verhuizen, hoe ze wonen, hoe ze eerder huurden. Hosts beslissen op meer
bewijs, en solvente niet-traditionele huurders komen door de deur.

> Het probleem was nooit de advertentie. Het was de sprong in het diepe aan beide kanten ervan.

<p class="note">Grondwerk</p>

## De hele reis in kaart

Voor er ook maar één scherm bestond, bracht ik de complete flow voor beide
kanten in kaart: elk beslismoment van eerste login tot verificatie,
aanvraag en betaling. Het werd de bron van waarheid voor wat er eerst
ontworpen moest worden. Het legde ook drie regels vast die het product
moest respecteren: rondkijken blijft open zonder account, verificatie
wordt verplicht op het moment van aanvragen of verhuren, en een
geverifieerd profiel is herbruikbaar over aanvragen heen.

<figure class="fig fig--bleed fig--sheet">
  <img src="/work/urbiqo/urbiqo-user-flow.png" alt="Swimlane-userflow voor huurders en hosts, van eerste login via verificatie en aanvraag tot betaling" loading="lazy" />
  <figcaption>De volledige flow, beide kanten, van eerste login tot betaling.</figcaption>
</figure>

<figure class="fig fig--mid fig--pin">
  <img src="/work/urbiqo/urbiqo-user-flow-detail.png" alt="Detail van de userflow op leesformaat: de host kiest freemium of premium, betaalt via Visa, Bizum of PayPal, doorloopt de verificatiecheck en bereikt pas daarna de status geverifieerde host" loading="lazy" />
  <figcaption>Dezelfde kaart op leesformaat: hosts kiezen freemium of premium, betalen, en alleen een geverifieerde host mag verhuren.</figcaption>
</figure>

## Twee kanten, één probleem

Het product moet twee werkelijkheden tegelijk vasthouden.

<div class="board">
  <div>
    <p class="persona__k">DE HUURDER · freelancer, solvent, geen loonstrook</p>
    <p>Stabiel jaarinkomen, geen vast maandcontract. Ze stranden bij het
    uploadscherm omdat het formulier een loonstrook verwacht die niet
    bestaat. Ze hebben alternatieve bewijzen nodig die als volwaardig
    gelden.</p>
  </div>
  <div>
    <p class="persona__k">DE HOST · één lege maand vs één onbetaalde maand</p>
    <p>Een lege maand kost geld; een onbetaalde maand kost meer. Papierwerk
    is hun maatstaf voor betrouwbaarheid omdat er niets beters is. Ze
    hebben een signaal nodig dat goede huurders niet om de verkeerde
    redenen wegfiltert.</p>
  </div>
</div>

De weddenschap van Urbiqo: betrouwbaarheid valideren, niet alleen salaris.

<p class="note">01 · Verificatie</p>

## Eerlijker screenen

Ik zette alternatieve bewijzen naast de klassieke loonstrook:
bankafschriften en facturen. Werkgeversverklaringen en belastingaangiftes
zijn overwogen en geschrapt, beide lopen achter op de werkelijke cashflow.
Bankafschriften en facturen tonen die in realtime, en valideren via OCR
met handmatige controle voor de randgevallen.

Een service blueprint brengt de backend-logica in kaart die de
verificatie-eisen aanpast aan de status van de gebruiker, bijvoorbeeld
facturen accepteren voor freelancers.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/urbiqo/urbiqo-service-blueprint.png" alt="Service blueprint met frontstage-schermen tegenover backstage-systeemlogica, met conditionele workflows voor freelancers, OCR-validatie en risicoscores die handmatige controle triggeren" loading="lazy" />
  <figcaption>De service blueprint: frontstage-schermen tegenover backstage-logica, met conditionele workflows voor freelancers, OCR-validatie en risicoscores die handmatige controle triggeren.</figcaption>
</figure>

<p class="note">02 · Vertrouwen</p>

## De transactie menselijk maken

Een geverifieerd profiel reist voor de huurder uit. De host ziet dezelfde
verificatiekaart vóór elke afspraak: e-mail, telefoon, ID en
achtergrondcheck. Hosts geven ook hun relatie tot de woning op, eigenaar,
huurder of tussenpersoon, zodat aanvragers weten met wie ze te maken
hebben. Vertrouwen is aan beide kanten zichtbaar voordat iemand een
bezichtiging boekt.

<figure class="fig fig--paper fig--card">
  <img src="/work/urbiqo/urbiqo-live-trust-step.png" alt="Trust & Safety-kaart op een live Urbiqo-advertentie: e-mail geverifieerd, telefoon in behandeling, identiteit in behandeling" loading="lazy" />
  <figcaption>De verificatiekaart die de host vóór elke afspraak ziet: één status per signaal.</figcaption>
</figure>

<p class="note">03 · Verhelderen</p>

## Het proces ontrafelen

Huren is al overweldigend genoeg. De landingspagina werkt als een kalm
filter: de verificatiereis samengevat in vier lineaire stappen, begrepen
voordat iemand een account aanmaakt.

<p class="note">Positionering</p>

## Waar Urbiqo staat

Ik bracht de Madrileense markt in kaart op twee assen: complexiteit van de
dienst en specialisatie van de doelgroep. Het gat: niemand combineert
verificatie op basis van vertrouwen met toegankelijke prijzen voor
freelancers, expats en niet-traditionele huurders.

<figure class="fig">
  <img class="fig__theme fig__theme--light" src="/work/urbiqo/urbiqo-positioning-light.png" alt="Marktpositioneringskaart die Urbiqo neerzet als de meest gespecialiseerde speler tegenover massaplatforms als Idealista en full-serviceaanbieders als Vitalhouse. In de legenda staat nog Arcano, afgeplakt en met de hand gecorrigeerd naar Urbiqo" loading="lazy" />
  <img class="fig__theme fig__theme--dark" src="/work/urbiqo/urbiqo-positioning-dark.png" alt="Marktpositioneringskaart die Urbiqo neerzet als de meest gespecialiseerde speler tegenover massaplatforms als Idealista en full-serviceaanbieders als Vitalhouse. In de legenda staat nog Arcano, afgeplakt en met de hand gecorrigeerd naar Urbiqo" loading="lazy" />
  <figcaption>De positioneringskaart is ouder dan de nieuwe naam, vandaar de tape: toen Arcano, nu Urbiqo, in de niche tussen massa en full service.</figcaption>
</figure>

<p class="note">De vaklaag</p>

## Achter de schermen

Het systeem eronder: tokens, componenten en variabele theming voor dark
mode en Engels/Spaanse lokalisatie. Naast het product gebouwd, bewaard als
eigen referentie.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-design-system.png" alt="Referentieblad van het Urbiqo design system met merkidentiteit, typografie, kleurenpalet en mobiele UI-schermen" loading="lazy" />
  <figcaption>Het design system: identiteit, typografie, kleur en componenten in één referentie.</figcaption>
</figure>

<p class="note">Derde akte</p>

## Ontwerpen was het makkelijke deel

Het ontwerp stond, het systeem was gedocumenteerd, de flows in kaart. Toen
bouwde ik het, op Next.js. Je eigen ontwerp bouwen is de eerlijkste
usabilitytest die het ooit zal krijgen. Elk scherm dat ik als ontwerper had
afgetekend, moest zich bewijzen in echte componenten, echte data en echte
states.

Sommige beslissingen overleefden het contact met code niet. Een flow die er
in Figma strak uitzag, kwam loading states, lege states en weerbarstige
echte content tegen. Ik was de ontwerper die het moest toegeven en de
developer die het moest repareren, dus de iteratieslag draaide in minuten,
niet in sprints. Het product op staging is het resultaat.

Eén detail verscheen pas toen er een front-end was om het op te draaien:
elke sectiekop tekent zichzelf van links in, achter de terracotta skyline.
Een bewegingsbeslissing genomen in code, niet in het statische
ontwerpbestand.

<div class="skyline-head" data-skyline>
  <span class="skyline-break" aria-hidden="true">
    <svg viewBox="0 0 275 124" fill="none" preserveAspectRatio="xMidYMid meet">
      <path d="M0 121H22.218V103.532H40.2439V77.5423H73.3613V121H90.968V60.9261L108.155 38.7711L127.02 60.9261V121H153.849V23.8592H167.264M167.264 23.8592V0M167.264 23.8592H183.194V121H207.088V55.8134H235.595V121H275" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
  <p class="skyline-break-title">Waarom <span>Urbiqo</span></p>
</div>

Vandaag live op staging: uitgelichte advertenties; zoeken met type-,
prijs- en oppervlaktefilters naast een kaart; advertentiepagina's met
galerij, voorzieningen en buurtnotities; aanvragen en host contacteren;
freemium- en premium-tiers voor hosts, huurders altijd gratis; volledig
Engels en Spaans; een helpcentrum, FAQ's en een contactformulier dat op
onderwerp routeert. De advertenties zijn voorlopig voorbeelddata,
plaatshouders om de flows end-to-end te testen tot er bij launch echte
woningen instromen.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-search.png" alt="Urbiqo-zoekpagina: titel, met type-, prijs- en oppervlaktefilters boven het resultatenraster met zes Madrileense advertenties" loading="lazy" />
  <figcaption>Zoeken op staging: type-, prijs- en oppervlaktefilters boven de resultaten.</figcaption>
</figure>

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-listing.png" alt="Urbiqo-advertentie voor een privékamer in Salamanca: galerij, voorzieningen en een buurtkaart" loading="lazy" />
  <figcaption>Een live advertentie: galerij, voorzieningen, buurtnotities en kaart.</figcaption>
</figure>

Drie beslissingen uit de bouw verdienden hun eigen labels.

<p class="note">Build 01 · De onrustige kaart</p>

## De kaart die niet stil kon zitten

Echte omschrijvingen verschillen in lengte, dus de knop 'Meer details' die
achter de tekst hing, kon nooit stilzitten. De titel klemt nu op één regel,
de omschrijving op drie en de hele kaart werd het klikdoel.

<figure class="fig fig--paper fig--duo">
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-design.png" alt="Een ontworpen Urbiqo-advertentiekaart: foto, prijs, titel, een locatieregel met speld, kamertype en oppervlakte, voorzieningen, daarna een omschrijving en een knop Meer details" loading="lazy" /><figcaption>Zoals ontworpen: een locatieregel en een knop na een omschrijving van onbekende lengte.</figcaption></figure>
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-rebuilt.png" alt="De herbouwde Urbiqo-advertentiekaart: foto, prijs, een titel van één regel, kamertype en oppervlakte en een afgekapte omschrijving, zonder knop" loading="lazy" /><figcaption>Zoals gebouwd: titel op één regel, omschrijving op drie, de kaart zelf is het doel.</figcaption></figure>
</figure>

<p class="note">Build 02 · Eerlijke pillen</p>

## Een pil mag nooit liegen over waarom hij rood is

Het verificatiedenken overleefde in code als de trust & safety-kaart op
elke advertentie. Elk signaal heeft zijn eigen status: een profiel kan
e-mail geverifieerd tonen terwijl telefoon en identiteit nog in behandeling
zijn. Eerlijke states, geen binaire badge.

In het ontwerpbestand waren de vier states een legenda: Active, Pending,
Attention en Issue, één pil per signaal. In code had elke pil een bron van
waarheid en een faalverhaal nodig. Een uitgelogde gebruiker werd niet
langer als fout behandeld, en één alomvattend 'er ging iets mis' werd
opgesplitst in zijn aparte oorzaken, zodat een rode pil altijd één
specifiek ding betekent.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-host-dashboard.png" alt="Het Urbiqo-hostdashboard: de signalen e-mail, telefoon, identiteit, uitbetaling en overeenkomst dragen elk hun eigen status, naast een legenda met Active, Pending, Attention en Issue" loading="lazy" />
  <figcaption>Het hostdashboard: vijf signalen, vijf onafhankelijke states, één legenda.</figcaption>
</figure>

<p class="note">Build 03 · De helft van de woorden</p>

## Maar de helft van de woorden is van mij

Lokalisatie was ontworpen als een variable mode en shipte er ook als één.
Dezelfde schermen draaien end-to-end in het Engels en het Spaans.

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-en.png" alt="Dezelfde Urbiqo-advertentie, in het Engels" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-es.png" alt="Dezelfde Urbiqo-advertentie, in het Spaans" loading="lazy" /></span>
  <figcaption>Dezelfde advertentie, Engels en Spaans, één variabele build.</figcaption>
</figure>

Het ontwerpbestand wisselt elke string met één variable mode. De build
corrigeerde me: interfaceteksten vertalen mee, maar advertentie-inhoud
leeft in de database, dus een Spaanse pagina kan nog steeds Engels spreken
waar de data dat doet. En Spaans loopt lang genoeg uit om kaarten af te
kappen die het Engels nooit onder druk zette.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-card-es-truncated.png" alt="Een Spaanse Urbiqo-advertentiekaart waarvan de titel is afgekapt met een beletselteken waar de kortere Engelse titel wel paste" loading="lazy" />
  <figcaption>Spaans loopt langer uit: dezelfde kaartcomponent, afgekapt waar de Engelse titel paste.</figcaption>
</figure>

## Wat ik ervan leerde

End-to-end ontworpen en daarna end-to-end gebouwd, door één persoon, op
Next.js. Dat is de uitkomst: een tweezijdig platform dat in twee talen op
staging draait, van zoeken tot aanvraag. Nog geen gebruikersdata, de launch
komt nog, dus wat volgt is wat het bouwen me leerde, niet wat de markt zei.

Drie dingen die Urbiqo me leerde:

- Tweezijdig vertrouwen is een vak apart. Alles wat frictie weghaalt voor
  huurders, minder documenten, snellere checks, voegt gevoelsmatig risico
  toe voor hosts. Die spanning in balans houden vormde de hele
  productstructuur.
- Het gat tussen het concept van een founder en een bouwbaar product is
  groter dan het lijkt. De visie was helder. Het ontwerpwerk was haar
  omzetten in conditionele verificatielogica, systeemstates en
  randgevallen.
- De visuele laag draagt meer vertrouwen dan ik dacht. Mensen leveren hier
  persoonlijke documenten in; elke kleur, interactie en regel tekst bouwt
  vertrouwen op of breekt het af. Daar zou ik de volgende keer meer tijd
  voor inruimen.

<p class="note">Eerlijk gezegd</p>

## Status en volgende stappen

Staging ging live op 6 juli 2026 en het platform draait op
staging.urbiqo.com, in het Engels en het Spaans. Het zit nu in actieve QA;
het dagelijkse werk is repareren wat echte schermen, states en content
blootleggen vóór de launch. De weddenschap: zet verifieerbare
vertrouwenssignalen naast de starre contracteisen en de markt gaat aan
beide kanten open. Onbewezen tot de launch, maar de logica klopt. Als je
betrouwbaarheid kunt verifiëren zonder een vast contract te eisen, krijgen
hosts zekerheid en huurders toegang.

<div class="stats">
  <div><span>Gebouwd</span><span>live op staging, door mij, op Next.js</span></div>
  <div><span>6 jul 2026</span><span>live op staging, nu in QA</span></div>
  <div><span>Q3 2026</span><span>beoogde live-release</span></div>
</div>
