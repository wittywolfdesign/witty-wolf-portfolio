---
title: "9 fonts, one flow. Why?"
client: "Airbnb"
tagline: "What cloning Airbnb screen by screen actually reveals"
summary: "A screen-by-screen clone of Airbnb's iOS app: a study in what drifts at scale and whether strict atomic design could hold it together."
year: "2024"
role: "Solo exercise · Heuristic audit and concept redesign (not a client project)"
discipline: ["UI", "Design systems", "Audit"]
thumb: "/thumbs/airbnb.svg"
accent: "#1C2B3A"
ink: "#ffffff"
order: 5
featured: true
status: "published"
context: "A self-initiated teardown and rebuild of the Airbnb iOS app."
problem: "Cloning Airbnb screen by screen shows how much inconsistency even a polished product can absorb."
outcome: "A documented audit and a concept rebuild with full atomic consistency, offered as a study, not a correction."
metrics:
  - value: "40 hours"
    label: "Sprint, clone to concept"
  - value: "9+"
    label: "Font styles in one flow (audit)"
  - value: "12+"
    label: "Corner radius variants (audit)"
---

I wanted to know what a design system looks like at Airbnb's scale, up
close. So I cloned the iOS app screen by screen in a 40-hour sprint. Up
close it is messier than the polish suggests. Most systems that have
shipped fast for a decade probably are.

<p class="note">What the clone revealed</p>

## The audit

Cloning the current app was a nightmare, in the useful sense. Over 9 font
styles in a single flow. Corner radii that vary at random. Back arrows and
cancel buttons that change style and position between screens, so users
keep re-orienting themselves. That visual drift costs attention and
weakens the sense of control.

<figure class="fig fig--paper fig--bleed">
  <img src="/work/airbnb/airbnb-heuristic-audit-board.png" alt="Heuristic evaluation board of the full original Airbnb iOS journey, annotated with the inconsistencies found" loading="lazy" />
  <figcaption>The full journey, cloned and annotated. Every flag is an inconsistency.</figcaption>
</figure>

<div class="stats">
  <div><span>9+</span><span>font weight and size combinations in one journey</span></div>
  <div><span>12+</span><span>corner radius variants across cards and buttons</span></div>
  <div><span>Shifting</span><span>back and cancel controls between screens</span></div>
</div>

> Inconsistency at this scale isn't sloppiness. It's what a decade of shipping fast looks like up close.

<p class="note">Groundwork</p>

## From atoms to pages

With the problems documented, I tested whether strict atomic design could
resolve them. A modular system from scratch: a strict icon grid, uniform
8px corner radii, a standardised palette. Every screen shares the same
foundation. The redesign is a concept, not a shipped product; one possible
answer to what the audit surfaced.

<figure class="fig">
  <img src="/work/airbnb/airbnb-atomic-design-board.png" alt="Atomic design board organising the new system from atoms like icons and colours up to full pages" loading="lazy" />
  <figcaption>Atoms to pages: the concept system in one board.</figcaption>
</figure>

<p class="note">01 · Typography</p>

## Legible typography

Lexend as the primary typeface. Rounded forms, generous spacing, better
readability for a broader range of travellers.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-typography-lexend.png" alt="Type specimen of Lexend against the old mixed styles, showing its rounded forms" loading="lazy" />
  <figcaption>Lexend against the old mix: one voice instead of nine.</figcaption>
</figure>

<p class="note">02 · Consistency</p>

## Unified components

One icon grid, one button system. Every interactive element shares the
same stroke weight and corner radius, so nothing has to be relearned
between screens.

<figure class="fig fig--mid fig--pin">
  <img src="/work/airbnb/airbnb-icon-button-system.png" alt="The standardised icon grid and button system with shared stroke weight and corner radius" loading="lazy" />
  <figcaption>One grid, one radius, one stroke weight.</figcaption>
</figure>

<p class="note">03 · Experience</p>

## Calmer discovery

Removing visual noise and aligning the grid lets users focus on what
matters: the properties and experiences themselves.

<figure class="fig fig--duo">
  <span class="fig__tile fig__tile--offset"><img src="/work/airbnb/airbnb-discovery-flow.png" alt="The stays and experiences discovery flow with a decluttered layout" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/airbnb/airbnb-final-mockup.png" alt="The redesigned Airbnb app on an iPhone, showing the unified visual language" loading="lazy" /></span>
  <figcaption>The concept in place: calmer discovery, consistent chrome.</figcaption>
</figure>

<p class="note">Honestly, though</p>

## What this exercise showed

This was an exercise, and Airbnb ships under constraints a 40-hour clone
never meets: legacy, experiments, teams moving in parallel. That is exactly
what made it worth studying. The rebuild showed full standardisation is
possible: icons, buttons, radii and type under one system, controls that
stay put, a modular structure that could expand quickly. What I took with
me: consistency isn't a coat of polish applied at the end. It's a structure
you commit to at the start, or pay to retrofit later.
