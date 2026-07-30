---
# Facts sourced from HANDOVER.md only.
# Title, tagline, accent and publish-as-closer approved by Marco, 10 July 2026.
# Old-site imagery ("Someone else's vessel"): the LAST Framer state (light + dark)
# plus one historical pair (landing + stock work-page hero). Corrected 30 July 2026,
# because the earlier version wrongly used November 2025 archive screenshots of a
# design that had already been replaced.
title: "Kill your template"
client: "Witty Wolf"
tagline: "The site you are reading is the case study"
summary: "The portfolio itself: a Framer template retired in favour of an Astro site built with AI, directed by me. Same copy soul, new vessel, every call mine."
year: "2026"
role: "Product designer & developer"
discipline: ["Art direction", "Front-end", "Design system"]
thumb: "/thumbs/witty-wolf.svg"
accent: "#E3993D"
ink: "#1A1714"
# Curation decided (10 July 2026, revised): the case OPENS the set as the
# statement; the rest follow by recency.
order: 1
featured: true
status: "published"
context: "The portfolio you are looking at, rebuilt from a Framer template into an Astro site built with AI under my direction."
problem: "A template can host your work, but it cannot speak for you."
outcome: "A static Astro site in the field-notes direction, AI-developed with me directing; every detail this case describes is live on the page you are reading."
metrics:
  - value: "Static"
    label: "Astro, built with AI, template retired"
  - value: "2"
    label: "Typefaces, both self-hosted"
  - value: "1"
    label: "Accent colour, spent carefully"
---

The old portfolio lived in a Framer template. It did the job the way a
rented flat does: everything works, nothing is yours. The copy was worth
keeping; the platform was a monthly bill.

<p class="note">The vessel problem</p>

## Someone else's vessel

It began as a template full of stock. My own Houthavens sunset sat in the
hero, but the work page opened on a 3D render from a photo library and
contact hid behind a city skyline that could have sold anything. Under it
sat a wordmark in a rounded display face that has since been retired from
the brand entirely.

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-landing.png" alt="The 2025 Framer landing page: Marco's own sunset photo of sailing boats in the Houthavens, Amsterdam, with Witty Wolf Design set in the old rounded display face" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-work-stock.jpg" alt="The 2025 work page hero: a generic stock 3D render of atoms and orbiting spheres" loading="lazy" /></span>
  <figcaption>Where it started: my own sunset in the hero, stock atoms introducing the case studies.</figcaption>
</figure>

So I redesigned it inside Framer: my own imagery instead of the stock, the
rounded face dropped, a statement in the hero and a proper light and dark
theme.

<figure class="fig fig--paper fig--duo">
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-final-light.png" alt="The last Framer design in the light theme: the line-art wolf mark, and the hero reading I don't care about your product, I care about the people trying to use it" loading="lazy" /></span>
  <span class="fig__tile"><img src="/work/witty-wolf-site/framer-final-dark.png" alt="The same last Framer design in the dark theme: the same hero on near-black, the second line in amber" loading="lazy" /></span>
  <figcaption>The last Framer state, both themes: no stock left anywhere.</figcaption>
</figure>

The brand thinking was real and worth keeping: wit as a working principle,
plain language, personality in service of clarity. What it could not get
from Framer was ownership.

<figure class="fig fig--mid fig--pin">
  <img src="/work/witty-wolf-site/framer-brand-sheet.png" alt="The old brand guidelines sheet: branding vision, tone of voice and imagery principles for Witty Wolf Design" loading="lazy" />
  <figcaption>The old brand sheet: the tone of voice survived the move, the typeface did not.</figcaption>
</figure>

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/framer-editor.png" alt="The Witty Wolf site open inside the Framer editor, variant panels and an Upgrade Now button visible" loading="lazy" />
  <figcaption>My site in someone else's editor, an upgrade button where a commit should be.</figcaption>
</figure>

<p class="note">The move</p>

## Same soul, new vessel

The decision was to retire the template and build a static Astro site, AI
writing the code, me directing it: keep the copy's voice, replace
everything it stood on. The art direction became
field notes: warm paper, ink, a faint guide grid, thin line work and one
amber accent, spent carefully. Two typefaces, both self-hosted: Geist Mono
as the voice for headings, navigation, labels and numbers, Work Sans for
long-form reading only. The old rounded display face was retired
everywhere, including the brand itself.

The build ran the same way: AI wrote the code, I directed it. Every
component was briefed, reviewed and sent back until it behaved, and every
decision this case describes, from the typewriter's mistake to the wolf's
spook, was mine.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-home-light.png" alt="The new Astro home page in the light theme: typewriter hero with pixels struck through, the line-art wolf drawn in on warm paper" loading="lazy" />
  <figcaption>After the move: paper, ink, the mono voice and the wolf drawn in strokes.</figcaption>
</figure>

<p class="note">01 · The craft</p>

## Details that earn their keep

The hero types itself, makes a deliberate mistake, strikes it through and
carries on: pixels becomes people. The wolf beside it is the real logo
drawn as stroke-only line art that sketches itself in, no fills except the
amber tongue. An amber scent trail draws down the page as you scroll, a
live clock keeps Madrid time in the meta line and the footer answers in
terminal. Dark mode arrives without a flash of the wrong theme, honours
the system preference, and flipping it plays one short sequence: the wolf
leans in, trembles, flashes an amber eye, then the lamp flickers and the
theme switches. Every animation is disabled when reduced motion is on.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-home-dark.png" alt="The new Astro home page in the dark theme: the same hero with the wolf line work in paper tone on near-black" loading="lazy" />
  <figcaption>Dark mode is drawn as its own theme: the wolf's line work switches to paper tone.</figcaption>
</figure>

<p class="note">02 · The system</p>

## One source of truth

The case pages run on a small system. The margin labels on this page are
the single source of truth for the section index: the scroll-spy rail on
desktop, the floating pill on mobile and the anchor links that keep
working with JavaScript off, stamped in at build by a rehype plugin.
Figures share one field-notes treatment, tape and pins for images only,
never for type. Each case opens under a rubber stamp of its client's mark,
punched in after the title finishes typing.

<figure class="fig fig--paper">
  <img src="/work/witty-wolf-site/astro-case-index.png" alt="A case-study spread on the new site: the section index rail on the left, a margin label and heading, and a live product screenshot below" loading="lazy" />
  <figcaption>The section rail on a case page, generated from the margin labels at build.</figcaption>
</figure>

<p class="note">My worst client</p>

## I am my worst client

Shipping for yourself means answering to your own critical self, and mine
is the hardest client I have: there is no brief to hide behind and nobody
else to blame. A showcase also keeps you restrained, because the design has
to stay out of the way of the work it presents.

The Framer site took nearly four months. Most of that was deciding rather
than building: what to show, what to cut, which images deserved a place,
where the balance sat. This rebuild went faster because those decisions
were already made. What remained was cutting, both the excess and a few
things I was still attached to.

Criticism from a client or an employer is easier to take than my own. I am
merciless when reviewing my own work, and the polish on this site comes out
of that.

<p class="note">Use of AI</p>

## Use of AI

The code was AI-written from start to finish, with me directing every
step; that story is above. The words are the exception: every text on this
site is written by hand, most of the hours go into them, and I want it
that way. The brand lives in a skill file that teaches the AI the house
style once, tone, type, the wolf's rules, so no session starts from zero.
The rebuild took days rather than months, because the thinking was already
done and the code was the fast part.

<p class="note">Honestly, though</p>

## The most honest test there is

<!-- CLOSING, options for Marco (current text is option A):
  B ending: "Urbiqo taught me that building your own design is the most
  honest usability test it gets. This site made it personal: the designer,
  the developer and the client finally share one desk, and none of them
  can blame the template."
-->

A portfolio has no conversion numbers worth quoting, so I will not invent
any. The outcome is ownership: every line of this site is mine to change,
and a change takes minutes, not a support thread. Urbiqo taught me that
building your own design is the most honest usability test there is. This
time the client was me, and I notice everything.
