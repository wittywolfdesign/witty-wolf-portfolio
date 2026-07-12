---
title: "Fixing trust issues"
client: "Urbiqo"
tagline: "Verifying hosts and tenants before anything goes wrong"
summary: "How excluded tenants and risk-averse hosts end up on the same platform."
year: "Since 2025"
role: "Product Designer, Co-founder & Developer"
discipline: ["Research", "Product design", "Design system", "Front-end"]
thumb: "/thumbs/urbiqo.svg"
accent: "#C25A3C"
ink: "#ffffff"
order: 2
featured: true
status: "published"
# STAGING URL — swap to the production URL at launch. Single source for the "live" CTA.
liveUrl: "https://staging.urbiqo.com/en"
context: "A two-sided SaaS marketplace for urban rentals, in active development."
problem: "Room rentals run on blind trust. Hosts and tenants commit before anyone knows who they are dealing with."
outcome: "Designed end to end, then built by me on Next.js. The platform is live on staging; launch still ahead, no user metrics yet."
metrics:
  - value: "On staging"
    label: "Built and live, launch ahead"
  - value: "4 months"
    label: "Research to production UI"
  - value: "2-sided"
    label: "Tenants and hosts, one platform"
---

Madrid is booming and its rental market has not caught up. The filters are
stuck in another decade: no permanent contract, no flat. That locks out
solvent tenants and leaves hosts choosing from a smaller, samey pool.

<p class="note">The paperwork wall</p>

## Solvent, and still locked out

Freelancers and expats hit closed doors, blocked for lacking a standard
payslip however solvent they are. Hosts are stuck too:
rigid paperwork is the only risk tool on offer, so they use it. Urbiqo does
not throw that paperwork away; it adds more ways in. A tenant can name a
guarantor, family help counts as a real answer to how the rent gets
covered, and an optional background step lets them tell hosts who they
are: why they are moving, how they live, how they rented before. Hosts
decide on more evidence, and solvent non-traditional tenants get through
the door.

> The problem was never the listing. It was the leap of faith on both sides of it.

<p class="note">Groundwork</p>

## Mapping the full journey

Before any screens, I mapped the complete flow for both sides: every
decision point from first login through verification, application and
payment. It became the source of truth for what to design first. It also
fixed three rules the product had to honour: browsing stays open without an
account, verification becomes mandatory at the point of applying or
listing, and a verified profile is reusable across applications.

<figure class="fig fig--bleed fig--sheet">
  <img src="/work/urbiqo/urbiqo-user-flow.png" alt="Swim-lane user flow for tenants and hosts, from first login through verification, application and payment" loading="lazy" />
  <figcaption>The full flow, both sides, from first login to payment.</figcaption>
</figure>

<figure class="fig fig--mid fig--pin">
  <img src="/work/urbiqo/urbiqo-user-flow-detail.png" alt="Detail of the user flow at reading size: the host chooses freemium or premium, pays by Visa, Bizum or PayPal, passes the verification check and only then reaches the verified host state" loading="lazy" />
  <figcaption>The same map at reading size: hosts pick freemium or premium, pay, and only a verified host gets to list.</figcaption>
</figure>

## Two sides, one problem

The product has to hold two realities at once.

<div class="board">
  <div>
    <p class="persona__k">THE TENANT · freelancer, solvent, no payslip</p>
    <p>Stable annual income, no fixed monthly contract. They stall at the
    upload screen because the form expects a payslip that does not exist.
    They need alternative proofs read as legitimate evidence.</p>
  </div>
  <div>
    <p class="persona__k">THE HOST · one empty month vs one unpaid month</p>
    <p>An empty month costs money; an unpaid month costs more. Paperwork is
    their proxy for reliability because nothing better is on offer. They
    need a signal that does not filter out good tenants for the wrong
    reasons.</p>
  </div>
</div>

The difference Urbiqo bets on: validating reliability, not just salary.

<p class="note">01 · Verification</p>

## Fairer screening

I added alternative proofs beside the classic payslip: bank statements and
invoices. Employer letters and tax returns were considered and dropped,
both lag actual cash flow. Bank statements and invoices reflect it in real
time, and validate through OCR with manual review for the edge cases.

A service blueprint maps the backend logic that adapts verification
requirements to the user's status, accepting invoices for freelancers,
for example.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/urbiqo/urbiqo-service-blueprint.png" alt="Service blueprint mapping frontstage screens against backstage system logic, with conditional workflows for freelancers, OCR validation and risk scoring that triggers manual review" loading="lazy" />
  <figcaption>The service blueprint: frontstage screens against backstage logic, with conditional workflows for freelancers, OCR validation and risk scoring that triggers manual review.</figcaption>
</figure>

<p class="note">02 · Trust</p>

## Humanising the transaction

A verified profile travels ahead of the tenant. The host sees the same
verification card before any meeting: email, phone, ID and background
check. Hosts declare their relationship to the listing too, owner, tenant
or intermediary, so applicants know who they are dealing with. Trust is
visible on both sides before anyone books a viewing.

<figure class="fig fig--paper fig--card">
  <img src="/work/urbiqo/urbiqo-live-trust-step.png" alt="Trust and Safety card on a live Urbiqo listing: Email verified, Phone pending, Identity pending" loading="lazy" />
  <figcaption>The verification card the host sees before any meeting: one state per signal.</figcaption>
</figure>

<p class="note">03 · Clarifying</p>

## Demystifying the process

Renting is overwhelming enough. The landing page works as a calming
filter: the verification journey compressed into four linear steps,
understood before anyone creates an account.

<p class="note">Positioning</p>

## Where Urbiqo sits

I mapped the Madrid market on two axes: complexity of service and target
specialisation. The gap: nobody combines trust-based verification with
accessible pricing for freelancers, expats and non-traditional tenants.

<figure class="fig">
  <img class="fig__theme fig__theme--light" src="/work/urbiqo/urbiqo-positioning-light.png" alt="Market positioning map placing Urbiqo as the most specialised player against mass-market platforms like Idealista and full-service providers like Vitalhouse. The legend still says Arcano, taped over and corrected to Urbiqo by hand" loading="lazy" />
  <img class="fig__theme fig__theme--dark" src="/work/urbiqo/urbiqo-positioning-dark.png" alt="Market positioning map placing Urbiqo as the most specialised player against mass-market platforms like Idealista and full-service providers like Vitalhouse. The legend still says Arcano, taped over and corrected to Urbiqo by hand" loading="lazy" />
  <figcaption>The positioning map predates the rename, hence the tape: Arcano then, Urbiqo now, holding the niche between mass market and full service.</figcaption>
</figure>

<p class="note">The craft layer</p>

## Behind the screens

The system underneath: tokens, components and variable theming for dark
mode and English/Spanish localisation. Built alongside the product, kept
as its own reference.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-design-system.png" alt="Urbiqo design system reference sheet with brand identity, typography, colour palette and mobile UI screens" loading="lazy" />
  <figcaption>The design system: identity, type, colour and components in one reference.</figcaption>
</figure>

<p class="note">Third act</p>

## Designing it was the easy part

The design was defined, the system documented, the flows mapped. Then I
built it, on Next.js. Building your own design is the most honest usability
test it will ever get. Every screen I signed off as a designer had to earn
its way through real components, real data and real states.

Some decisions did not survive contact with code. A flow that looked clean
in Figma met loading states, empty states and awkward real content. I was
the designer who had to admit it and the developer who had to fix it, so
the iteration loop ran in minutes, not sprints. The product on staging is
the result.

One detail only appeared once there was a front end to run it: every section
heading draws itself in from the left, behind the terracotta skyline. A motion
decision made in code, not in the static design file.

<div class="skyline-head" data-skyline>
  <span class="skyline-break" aria-hidden="true">
    <svg viewBox="0 0 275 124" fill="none" preserveAspectRatio="xMidYMid meet">
      <path d="M0 121H22.218V103.532H40.2439V77.5423H73.3613V121H90.968V60.9261L108.155 38.7711L127.02 60.9261V121H153.849V23.8592H167.264M167.264 23.8592V0M167.264 23.8592H183.194V121H207.088V55.8134H235.595V121H275" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
  <p class="skyline-break-title">Why <span>Urbiqo</span></p>
</div>

Live on staging today: featured listings; search with type, price and size
filters beside a map; listing pages with gallery, amenities and
neighbourhood notes; apply and contact host; freemium and premium tiers for
hosts, tenants always free; full English and Spanish; a help centre, FAQs
and a contact form that routes by topic. The listings are sample data for
now, placeholders to exercise the flows end to end until real inventory
arrives at launch.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-search.png" alt="Urbiqo search page: title, with Type, price and size filters above the results grid of six Madrid listings" loading="lazy" />
  <figcaption>Search on staging: type, price and size filters over the results.</figcaption>
</figure>

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-live-listing.png" alt="Urbiqo listing for a private room in Salamanca: gallery, amenities and a neighbourhood map" loading="lazy" />
  <figcaption>A live listing: gallery, amenities, neighbourhood notes and map.</figcaption>
</figure>

Three decisions from the build earned their own labels.

<p class="note">Build 01 · The restless card</p>

## The card that could not sit still

Real descriptions vary in length, so the 'More details' button pinned after
the text could never sit still. The title now clamps to one line, the
description to three and the whole card became the click target.

<figure class="fig fig--paper fig--duo">
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-design.png" alt="A designed Urbiqo listing card: image, price, title, a location row with a pin, room type and size, amenities, then a description and a More details button" loading="lazy" /><figcaption>As designed: a location row and a button after a description of unknown length.</figcaption></figure>
  <figure class="fig__tile"><img src="/work/urbiqo/urbiqo-card-rebuilt.png" alt="The rebuilt Urbiqo listing card: image, price, a one-line title, room type and size and a clamped description, with no button" loading="lazy" /><figcaption>As built: one-line title, three-line description, the card itself is the target.</figcaption></figure>
</figure>

<p class="note">Build 02 · Honest pills</p>

## A pill should never lie about why it is red

The verification thinking survived into code as the trust and safety card
on every listing. Each signal has its own state: a profile can show email
verified while phone and identity are still pending. Honest states, not
one binary badge.

In the design file the four states were a legend: Active, Pending, Attention
and Issue, one pill per signal. In code every pill needed a source of truth
and a failure story. A signed-out user stopped being treated as an error,
and one blanket 'something went wrong' was split into its distinct causes,
so a red pill always means one specific thing.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-host-dashboard.png" alt="The Urbiqo host dashboard: the signals Email, Phone, Identity, Payout and Agreement each carry their own state, beside a legend of Active, Pending, Attention and Issue" loading="lazy" />
  <figcaption>The host dashboard: five signals, five independent states, one legend.</figcaption>
</figure>

<p class="note">Build 03 · Half the words</p>

## Only half the words are mine

Localisation was designed as a variable mode and shipped as one. The same
screens run in English and Spanish end to end.

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-en.png" alt="The same Urbiqo listing, in English" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/urbiqo/urbiqo-live-es.png" alt="The same Urbiqo listing, in Spanish" loading="lazy" /></span>
  <figcaption>The same listing, English and Spanish, one variable build.</figcaption>
</figure>

The design file flips every string with one variable mode. The build
corrected me: interface copy translates, but listing content lives in the
database, so a Spanish page can still speak English wherever the data does.
And Spanish runs long enough to truncate cards the English never stressed.

<figure class="fig fig--paper">
  <img src="/work/urbiqo/urbiqo-card-es-truncated.png" alt="A Spanish Urbiqo listing card with its title truncated by an ellipsis where the shorter English title fit" loading="lazy" />
  <figcaption>Spanish runs longer: the same card component, truncated where the English title fit.</figcaption>
</figure>

## What I learned

Designed end to end, then built end to end, by one person, on Next.js.
That is the outcome: a two-sided platform running on staging in two
languages, from search to application. No user metrics yet, the launch is
still ahead, so what follows is what shipping it taught, not what the
market said.

Three things Urbiqo taught me:

- Two-sided trust is its own discipline. Everything that removes friction
  for tenants, fewer documents, faster checks, adds perceived risk for
  hosts. Balancing that tension shaped the whole product structure.
- The gap between a founder's concept and a buildable product is bigger
  than it looks. The vision was clear. The design work was turning it into
  conditional verification logic, system states and edge cases.
- The visual layer carries more trust than I gave it credit for. People
  hand over personal documents here; every colour, interaction and line of
  copy either builds confidence or erodes it. I would budget more time for
  that layer next time.

<p class="note">Honestly, though</p>

## Status and next steps

Staging went live on 6 July 2026 and the platform runs at
staging.urbiqo.com, in English and Spanish. It is in active QA now, the
day-to-day is correcting what real screens, states and content expose before
launch. The bet: put verifiable trust signals beside the rigid contract
requirements and the market opens on both sides. Unproven until launch, but
the logic holds. If you can verify reliability without demanding a
permanent contract, hosts get confidence and tenants get access.

<div class="stats">
  <div><span>Built</span><span>live on staging, by me, on Next.js</span></div>
  <div><span>6 Jul 2026</span><span>went live on staging, now in QA</span></div>
  <div><span>Q3 2026</span><span>targeted live release</span></div>
</div>
