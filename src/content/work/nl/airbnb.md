---
title: "9 fonts, één flow. Waarom?"
client: "Airbnb"
tagline: "Wat Airbnb scherm voor scherm naklonen echt blootlegt"
summary: "Een scherm-voor-scherm-kloon van Airbnb's iOS-app: een studie in wat er op schaal gaat schuiven en of strikt atomic design het bijeen kan houden."
year: "2024"
role: "Solo-oefening · Heuristische audit en conceptherontwerp (geen klantproject)"
discipline: ["UI", "Design systems", "Audit"]
thumb: "/thumbs/airbnb.svg"
accent: "#1C2B3A"
ink: "#ffffff"
order: 5
featured: true
status: "published"
context: "Een zelf gestarte ontleding en herbouw van de Airbnb iOS-app."
problem: "Airbnb scherm voor scherm naklonen laat zien hoeveel inconsistentie zelfs een gepolijst product kan absorberen."
outcome: "Een gedocumenteerde audit en een conceptherbouw met volledige atomic-consistentie, aangeboden als studie, niet als correctie."
metrics:
  - value: "40 uur"
    label: "Sprint, van kloon tot concept"
  - value: "9+"
    label: "Letterstijlen in één flow (audit)"
  - value: "12+"
    label: "Varianten hoekradius (audit)"
---

Ik wilde weten hoe een design system er op Airbnb-schaal van dichtbij
uitziet. Dus kloonde ik de iOS-app scherm voor scherm in een sprint van 40
uur. Van dichtbij is het rommeliger dan de gepolijstheid doet vermoeden.
Dat zijn de meeste systemen die tien jaar snel hebben geshipt
waarschijnlijk.

<p class="note">Wat de kloon blootlegde</p>

## De audit

De huidige app naklonen was een nachtmerrie, in de nuttige zin. Meer dan 9
letterstijlen in één flow. Hoekradii die willekeurig verschillen.
Terugpijlen en annuleerknoppen die per scherm van stijl en plek wisselen,
zodat gebruikers zich steeds opnieuw moeten oriënteren. Die visuele drift
kost aandacht en verzwakt het gevoel van controle.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/airbnb/airbnb-heuristic-audit-board.png" alt="Heuristisch evaluatiebord van de volledige oorspronkelijke Airbnb iOS-reis, geannoteerd met de gevonden inconsistenties" loading="lazy" />
  <figcaption>De volledige reis, gekloond en geannoteerd. Elke vlag is een inconsistentie.</figcaption>
</figure>

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-audit-detail.png" alt="Detail van het auditbord op leesformaat: drie hoekradiusvarianten gemarkeerd op aangrenzende schermen, klein, groter en amper rond, met de voorgestelde standaardisatienotities" loading="lazy" />
  <figcaption>Eén kolom op leesformaat: drie hoekradii op aangrenzende schermen, en de notitie die de fix werd.</figcaption>
</figure>

<div class="stats">
  <div><span>9+</span><span>combinaties van lettergewicht en -grootte in één reis</span></div>
  <div><span>12+</span><span>varianten hoekradius over kaarten en knoppen</span></div>
  <div><span>Zwervend</span><span>terug- en annuleerknoppen tussen schermen</span></div>
</div>

> Inconsistentie op deze schaal is geen slordigheid. Zo ziet tien jaar snel shippen er van dichtbij uit.

<p class="note">Grondwerk</p>

## Van atomen naar pagina's

Met de problemen gedocumenteerd testte ik of strikt atomic design ze kon
oplossen. Een modulair systeem vanaf nul: een strak icoonraster, uniforme
hoekradii van 8px, een gestandaardiseerd palet. Elk scherm deelt dezelfde
fundering. Het herontwerp is een concept, geen geshipt product; één
mogelijk antwoord op wat de audit blootlegde.

<figure class="fig">
  <img src="/work/airbnb/airbnb-atomic-design-board.png" alt="Atomic-designbord dat het nieuwe systeem ordent van atomen als iconen en kleuren tot volledige pagina's" loading="lazy" />
  <figcaption>Van atomen naar pagina's: het conceptsysteem op één bord.</figcaption>
</figure>

<p class="note">01 · Typografie</p>

## Leesbare typografie

Lexend als primair lettertype. Ronde vormen, royale spatiëring, betere
leesbaarheid voor een bredere groep reizigers.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-typography-lexend.png" alt="Letterproef van Lexend tegenover de oude gemengde stijlen, met de ronde vormen zichtbaar" loading="lazy" />
  <figcaption>Lexend tegenover de oude mix: één stem in plaats van negen.</figcaption>
</figure>

<p class="note">02 · Consistentie</p>

## Uniforme componenten

Eén icoonraster, één knoppensysteem. Elk interactief element deelt
dezelfde lijndikte en hoekradius, zodat niets tussen schermen opnieuw
geleerd hoeft te worden.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-icon-button-system.png" alt="Het gestandaardiseerde icoonraster en knoppensysteem met gedeelde lijndikte en hoekradius" loading="lazy" />
  <figcaption>Eén raster, één radius, één lijndikte.</figcaption>
</figure>

<p class="note">03 · Ervaring</p>

## Rustiger ontdekken

<figure class="fig fig--duo">
  <span class="fig__tile fig__tile--offset"><img src="/work/airbnb/airbnb-discovery-flow.png" alt="De ontdekflow voor verblijven en ervaringen met een opgeruimde layout" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/airbnb/airbnb-final-mockup.png" alt="De herontworpen Airbnb-app op een iPhone, met de uniforme beeldtaal" loading="lazy" /></span>
  <figcaption>Het concept op zijn plek: rustiger ontdekken, consistente chrome.</figcaption>
</figure>

<p class="note">Eerlijk gezegd</p>

## Wat deze oefening liet zien

Dit was een oefening, en Airbnb shipt onder beperkingen die een kloon van
40 uur nooit tegenkomt: legacy, experimenten, teams die parallel bewegen.
Precies dat maakte het de studie waard. De herbouw liet zien dat volledige
standaardisatie kan: iconen, knoppen, radii en typografie onder één
systeem, knoppen die blijven staan, een modulaire structuur die snel kan
groeien. Wat ik meenam: consistentie is geen laklaag die er aan het eind
overheen gaat. Het is een structuur waar je aan het begin voor kiest, of
waar je later voor betaalt om haar in te bouwen.
