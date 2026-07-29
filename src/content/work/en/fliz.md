---
title: "Sell the difference"
client: "FLIZpay"
tagline: "Sell the difference, not the checklist"
summary: "Redesigning FLIZpay's merchant dashboard and payment app around the cashback that sets them apart."
year: "2026"
role: "Product Designer, UX/UI · 12-week engagement, with the FLIZ design and engineering team"
discipline: ["Research", "Product design", "Design system", "QA"]
thumb: "/thumbs/fliz.svg"
accent: "#80ed99"
ink: "#001f3f"
order: 1.5
featured: true
status: "published"
metrics:
  - value: "2 surfaces"
    label: "Merchant dashboard and consumer payment app"
  - value: "Research → QA"
    label: "Strategy, UX/UI, design system, testing"
  - value: "5+ UX tasks"
    label: "Post-release fixes filed unprompted"
---

FLIZpay is a German open-banking payment company. The consumer app is the payment
system itself: you pay a shop straight from your bank, and FLIZ pays you a
percentage back as cashback afterwards. Merchants offer that cashback to pull
payments onto FLIZ, and a separate merchant dashboard is where they set it up and
watch it work. I spent twelve weeks inside the FLIZ team, working closely under
the design lead and in daily collaboration with the developers, across both
surfaces, two products with very different jobs. The pace was set by constant
releases. The largest of them was the overhaul of the merchant dashboard, and
along the way I took on product strategy, the design system and QA.

<p class="note">01 · The differentiator</p>

## The differentiator that was hiding

Every payment tool competes on the same checklist: invoicing, reporting,
permissions, roles. Useful, expected, and never the reason anyone switches. I
spent the early weeks pulling that field apart feature by feature: first my own
close look at the nearest rivals, then AI filling the comparison matrix against
parameters I had fixed, which showed me the ones I had missed, then a last pass
where I walked the competitors' apps and sites myself, because an unverified
matrix is an opinion. The pattern was the same everywhere. The checklist was
table stakes. It was never the battleground.

> The one thing FLIZpay did that nobody else did was the thing the product talked
> about least.

The edge is the cashback: FLIZ pays customers back for paying by open banking, and
merchants set the rate to bring shoppers in. That mechanic was buried, one value
story lost among a dozen parity features. So the brief rewrote itself: stop
matching the checklist, and put the difference where it cannot be missed.

<div class="fz-cards" data-fz-in>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-discount-system.png" alt="FLIZpay marketing card: the discount system, attracting first-time buyers with a welcome discount and keeping them with a recurring rate" loading="lazy" /><figcaption>Discount system</figcaption></figure>
  <figure class="fz-card"><img src="/work/fliz/fliz-card-self-service.png" alt="FLIZpay marketing card: self-service setup, configuring discounts and accepting payments without onboarding calls" loading="lazy" /><figcaption>Self service</figcaption></figure>
</div>

<p class="note">02 · The overhaul</p>

## The company account, rebuilt around the cashback

A merchant should not log in to *look* at their account. They should log in to
*run* it. The dashboard has one job, and it is not taking payments, the app does
that. It is where a merchant sets their cashback rate, watches it perform and
keeps the shop connected. So we rebuilt the FLIZ Company
Account around that one job: the cashback, its performance and its setup all one glance away. I owned
much of the early work, the research, the structure and the MVP that proved the
direction, always under the design lead's guidance and with engineering at the
table. (The interface labels the rate a *discount*; the customer receives it as
cashback.)

It started as the **MVP for the overhaul**: the redesign pared back to its
structure, enough to prove the direction before the high-fidelity pass.

<figure class="fig fig--bare fz-shot fz-shot--wire" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>dashboard · MVP</b></span>
    <img src="/work/fliz/fliz-dashboard-wireframe.png" alt="The MVP for the FLIZpay dashboard overhaul: the dashboard structure: a KPI row, a transactions table and the discount areas, laid out before the high-fidelity pass" loading="lazy" />
  </span>
  <figcaption>The MVP for the overhaul: the dashboard structure, before the high-fidelity pass.</figcaption>
</figure>

The real areas do the work: a KPI strip, a filterable transactions table, discount
performance, an installation guide, and a live platform-status line, the whole
account readable and runnable from one screen.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>FLIZ Company Account · Dashboard</b></span>
    <img src="/work/fliz/fliz-dashboard.png" alt="The high-fidelity FLIZpay merchant dashboard: a four-card KPI strip, a searchable and filterable transactions table with status pills, a discount setup panel, a discount-performance chart, and an installation guide" loading="lazy" />
  </span>
  <figcaption>The dashboard in high fidelity: KPIs, transactions, discount setup and performance, one screen you act from.</figcaption>
</figure>

<p class="note">The KPI moment</p>

## A number, before anything else

The first thing the dashboard shows is not a menu. It is four numbers. That was
the design decision: a single, honest value should greet the merchant before they
do anything, so the account answers *how are we doing?* on sight.

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
  <p class="fz-kpi-note">The sample values shown are the placeholder figures from the design file, not business results.</p>
</div>

<p class="note">03 · Status</p>

## Status you can trust at a glance

A payment either happened or it did not, and a merchant should never have to guess
which. The transactions table runs on one status system with a fixed colour
mapping, so a state means the same thing every time you see it: green settled,
amber waiting, red failed, grey stopped.

<div class="fz-status" data-fz-in>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--done">Completed</span>
    <p>Payment successfully processed and settled into your account.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--pending">Pending</span>
    <p>Payment initiated, awaiting bank confirmation.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--failed">Failed</span>
    <p>Payment could not be processed. Check transaction details.</p>
  </div>
  <div class="fz-status__card">
    <span class="fz-pill fz-pill--canceled">Canceled</span>
    <p>Transaction was canceled by the user or system.</p>
  </div>
</div>

<p class="note">04 · Discount setup</p>

## Discount, promoted to a first-class area

The mechanic that makes FLIZ different used to live where nobody looks: a row
inside settings. I proposed pulling it out into its own space on the
dashboard, and that is where it went. A
merchant sets two rates, a **first-purchase** cashback to pull new customers in
and a **standard** rate for everyone after, sees the effect in a live preview, and
publishes. What the company is best at is now the easiest thing to do in the
dashboard.

<figure class="fig fig--bare fz-shot" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Set discount</b></span>
    <img src="/work/fliz/fliz-set-discount.png" alt="The FLIZpay Set Discount area: separate first-purchase and standard discount controls with percentage inputs and toggles, and a live preview of the customer-facing offer" loading="lazy" />
  </span>
  <figcaption>Discount setup as its own area: first-purchase versus standard, with a live preview before publish.</figcaption>
</figure>

<p class="note">05 · Merchant guide</p>

## A merchant guide worth reading

Onboarding a shop was a heavy, skippable tutorial. Working from the design
lead's direction, I redesigned it as a well-made, low-tech static guide, the kind
of documentation you actually read, with Stripe's docs as the visual reference:
calm, sequential, no video to sit through. It was drawn as wireframes first and only then raised to high fidelity,
so the structure was right before the polish went on.

<figure class="fig fig--bare fz-shot fz-shot--tall" data-fz-parallax>
  <span class="fz-browser">
    <span class="fz-browser__bar" aria-hidden="true"><i></i><i></i><i></i><b>Help center · Installation guide</b></span>
    <img src="/work/fliz/fliz-installation-guide.png" alt="The FLIZpay installation guide: a clean, sequential static documentation layout stepping a merchant through selecting a platform, installing the plugin, generating an API key, setting a discount and uploading a logo" loading="lazy" />
  </span>
  <figcaption>The installation guide: static, sequential documentation over a tutorial nobody finished.</figcaption>
</figure>

<p class="note">06 · The consumer app</p>

## The consumer app: making saved offers findable

The app is FLIZpay's payment system: it is how people actually pay, straight from
their bank. The cashback offers ride on top of it, and that layer was buried. The
catalogue, saved offers and filters all sat two or three taps deep, with no way in
from the homepage, so the best reason to open the app was the hardest thing to
reach. The claim needed proof, so I built the app's full user flow in FigJam and
turned it into a ticket: the most important function sat too deep to find.
The CEO, the CTO and the design lead all confirmed it, and bringing it to
the foreground became the work: on the homescreen, and prominent in a menu.

My first proposal was a hub button. I killed my own concept for a bottom
nav (**Balance · Catalogue · QR · Send**), with the boring functions,
settings and profile, tucked behind a profile button up top. Around it:
homepage entry points that put offers on the first screen (category chips,
a saved-offers tile, a deal-of-the-week card), a catalogue hub, and a
post-purchase *keep browsing?* return flow so a completed payment leads
somewhere instead of ending. The direction was independently validated by
the lead engineer, and later evolved toward a glass-effect iteration. The
sharpest cut was not mine: the product manager and the CEO scrapped the
app's send and receive functions entirely.

<div class="fz-gallery" data-fz-gallery>
  <div class="fz-gallery__track" data-fz-track>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-a-bottom-nav.png" alt="Consumer app concept A: a homescreen with category chips, a saved-offers row, a deal-of-the-week card and a bottom navigation bar" loading="lazy" /></span><figcaption>Concept A · homepage entry points + bottom nav, the direction that won</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-b-hub-button.png" alt="Consumer app concept B: a central hub button navigation pattern" loading="lazy" /></span><figcaption>Concept B · the hub button, my first proposal, killed by me</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-concept-c-gift-card.png" alt="Consumer app concept C: a gift-card-world browsing pattern" loading="lazy" /></span><figcaption>Concept C · gift-card world</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-app-homescreen.png" alt="The consumer app homescreen with send-funds and offers surfaced on entry" loading="lazy" /></span><figcaption>Homescreen · offers surfaced on entry</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-deal-of-the-week.png" alt="The deal-of-the-week card with a time-left badge marked by a flame for urgency" loading="lazy" /></span><figcaption>Deal of the week · time-left badge</figcaption></figure>
    <figure class="fz-slide"><span class="fz-phone"><img src="/work/fliz/fliz-nav-glass.png" alt="The later glass-effect iteration of the app homescreen: transactions, prepaid deals and a floating glass bottom menu over the content" loading="lazy" /></span><figcaption>The glass iteration · where the direction landed</figcaption></figure>
  </div>
  <p class="fz-gallery__hint" aria-hidden="true">Scroll →</p>
</div>

<p class="note">07 · Small decisions</p>

## Small decisions, real friction

The big structure only works if the small signals are honest. Saving an offer was
marked with a paperclip, which reads as *attach*, not *keep*, so it became a
heart. That freed up the urgency signal the paperclip had been muddying, and the
deal of the week took a flame to say *this expires*.

<p class="note">Under the hood</p>

## Under the hood

Under the visible work sat the unglamorous kind, and it is where my division of
labour with AI was sharpest. Roughly **1,150 layers** renamed to sentence case
and around **50 localisation strings** fixed across EN/DE, with a pass over
capitalisation throughout: AI did the bulk on a precise brief and proposed the
language variants, I chose between them and checked the result layer by layer,
so the design system read as one voice instead of five. And so it would stay
that way without me, I wrote the guides to go with it: how to work with the
variables, how to handle localisation. Documentation that makes the next
designer faster with nobody in the room. The same split carried
the brand work. The identity had just taken a new direction under the design
lead, and I worked with her to push it through everywhere, iconography included,
Gemini generating, me curating. I did hands-on QA on TestFlight and ran Clarity tests end to end: the
research, the interpretation, the reporting. And I filed **five-plus post-release UX tasks
unprompted**, each framed not as a bug but as a retention or activation problem
worth fixing.

<p class="note">Use of AI</p>

## Use of AI

AI ran through almost every part of this work, from research to QA. The
clearest examples: it filled the competitive matrix on parameters I fixed,
and I verified every conclusion in the rivals' own apps. It did the bulk
of the 1,150-layer rename and the localisation fixes on precise briefs,
and I chose between its variants and checked the result layer by layer.
Gemini generated iconography for the brand's new direction, and the design
lead and I directed and curated. Nothing AI produced shipped unreviewed.

<p class="note">What it taught me</p>

## What it taught me

- **Sell the difference, not the checklist.** Nobody switches because you have
  the same features as everyone else. The design job was to move the one true
  differentiator from the footnotes to the headline.
- **For an already-onboarded audience, show value, don't repeat the pitch.** A
  merchant who has signed up does not need convincing again; they need the payoff
  made easy to reach and easy to read.
- **Promote the core mechanic into its own place.** The thing a product is best at
  should never live in a settings row. Give it a surface, and the whole product
  points at what makes it different.
