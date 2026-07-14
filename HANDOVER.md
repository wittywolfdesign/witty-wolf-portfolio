# Witty Wolf portfolio — build handover

A running record of the redesign, so a fresh session (Claude Code or Cowork)
can pick up without losing context. Written for Marco Ramos, Witty Wolf Design.
Last updated: 14 July 2026, after the Figma design system + brand guidelines
rebuild (see the entry at the end).

## Marco's working preferences (apply to everything)
- UK English. Metric units. No Oxford comma. No em-dashes, use commas or full stops.
- Sentence case. Direct, practical, dry wit, no marketing fluff.
- Do not invent facts or case-study content. Ask if unsure. Never fabricate
  metrics, anecdotes or copy claims.
- Restraint: personality concentrated in a few signature moments. He hates
  card grids, marquees, eyebrows, pills with shadows, anything "AI slop".
- When reviewing: show desktop AND 360px, both themes.

## The goal
Coded Astro site replacing the Framer template. Keep the copy's soul, refresh
the vessel. Field-notes art direction: warm paper, ink, guide grid, thin
lines, one amber accent, mono voice.

## Stack & tokens
- Astro, static output. Fonts self-hosted (Fontsource): Geist Mono (primary
  voice: headings, nav, labels, meta, numbers, wordmark) + Work Sans (reading
  only). Bricolage Grotesque is retired everywhere, including the brand.
- Tokens: paper #F4F2EC, ink #1A1714, muted #6B655C, amber #E3993D
  (#FFB347 on dark), dark surface #16130F, wolf charcoal #2C3E50.
- Dark mode: data-theme attribute on <html>, CSS custom properties,
  localStorage + prefers-color-scheme, no FOUC. Footer identical in both
  themes. Wolf line work has its own paper-tone colour in dark.

## Settled signature elements (do not break)
- Typewriter hero with the pixels→people strike-through gag (TypeLine.astro,
  reused for the approach statement, case titles, /work and /about headings.
  Plain typing everywhere except the hero; the gag lives only there).
- Hero wolf: stroke-only line drawing of the real logo wolf (no fills except
  amber tongue), huge (~70-90vh), anchored top right, bleeds off the right
  edge, left ear fully visible overlapping the nav, pointer-events none.
  Behind text at low opacity on mobile. Draw-on animation settles into
  strokes, no fill fade.
- Scent trail (amber line drawing down the page on scroll).
- Case-accent curtain on navigation into case studies.
- Live Madrid clock in meta line and footer; terminal-style footer.
- Dark mode toggle in nav: spooky wolf beat (~600-800ms, trembling lines,
  lean-in, amber eye flash, lamp flicker) then theme flip.
- Nav: full lockup "Witty Wolf Design" in Geist Mono Medium + wolf mark,
  total width aligned with the meta line under it. Meta line reads
  "Marco Ramos · Product designer & developer".
- WORK nav link hover gag: types "ATTEMPTS", strikes it, settles back
  (hover only, 2-3s cooldown, only WORK).
- Case-study hero stamps: each project's brand mark as a faded rubber stamp
  (accent colour, low opacity, rough edges, curly ink flourishes), top left
  behind the header block, punches in after the title types. Done and
  verified on all four pages.
- Approach section: statement in the content column, "The short version" as
  a tilted mono margin note with a curly amber self-drawing arrow that
  pulses gently.
- Work index (home + /work): pure type rows, no images, shared component
  with compact/detailed variants. Number and year outside, client, tagline
  (+ summary on /work), role as quiet meta. "Selected work / 04 projects"
  margin labels.
- CTAs: hairline ink rectangles, mono uppercase, amber sweep on hover, 1px
  stamp press on active. Secondary: mono link with self-drawing underline.
  Contact send button retypes SENDING... / SENT. terminal-style. No pills,
  no shadows, no radius.

## Pages
- Home: settled (hero, wolf, work index, approach, footer).
- /work: rebuilt pure-type, typewriter heading "Four case studies. Four
  real problems.". /about: typewriter heading, new body copy (four
  paragraphs, verbatim from Marco, ends "New to the field, yes. Rookie,
  no."). Portraits: public/about/marco-light.jpg (light theme) and
  marco-dark.jpg (dark theme), field-notes treatment, caption "Madrid,
  most days". A Lilly/FLIZpay quote block may be added later once she
  approves (message drafted, not yet sent).
- /contact: dark-mode form fixed to tokens; LinkedIn links to
  linkedin.com/in/marcorramos; WHATSAPP / NL +31 653 215 989 (wa.me link),
  PHONE / ES +34 624 225 011; public email is howl@wittywolf.design
  everywhere; placeholders: "First name is fine" / "Where my reply should
  land" / "A project, a question, a half-formed idea. Rough is fine."
- Case studies: story-arc rebuilds sourced from the live Framer site
  (wittywolf.design/work/*), real images downloaded to public/work/<slug>/,
  styled placeholder blocks ("PLACEHOLDER · name · what goes here") where
  assets are missing. Urbiqo has a third act about Marco building the site
  himself (live at staging.urbiqo.com/en) with up to three "TODO MARCO"
  slots for his real iteration stories. Do not fill those, only Marco can.

## DONE: image treatment + copy voice pass (8 July 2026)
Completed and verified on all four case pages, desktop and 360, both
themes. What shipped:
- Figure system in src/pages/work/[slug].astro (one system, no per-page
  CSS). Default .fig = "taped": image sits straight on the paper (the old
  white border + white background on .fig img are deleted), two tape
  strips across the top corners (::before/::after, --tape token, faint
  amber-paper in light, lightened translucent in dark), alternating
  0.45/-0.55deg tilt via nth-of-type. Variants: .fig--bleed = deliberate
  spread, full viewport width BOTH sides (width:100vw + margin-left:
  calc(50% - 50vw) + max-width:none — the old broken one-sided formula is
  gone), untaped, untilted, capped 70vh; .fig--mid (620px); .fig--small
  (220px, phone screens); .fig--margin (float right); .fig--sheet = light
  paper backing on the img in DARK theme only, for transparent-ink
  diagrams that would vanish (urbiqo positioning map, evvo happy path).
  All case images get filter: brightness(0.88) in dark so white artboards
  do not glow. Every .fig is width: fit-content, images capped at 70vh.
- Bulletin board (.board in the same file): darker zone (--board-bg),
  grid of pinned cards (round --pin dot, tiny shadow, alternating tilt),
  one per page max. Used once so far: the two Urbiqo persona text cards
  (.persona__k mono one-liner + reading-face description). The Urbiqo
  stock persona portraits are DELETED from public/work/urbiqo/.
- airbnb-heuristic-audit-board.png was centre-cropped in place (4000x2312
  to 3920x2248) to cut off its baked rounded-mat corners; the original
  only survives in the session scratchpad (temporary!). Other assets keep
  their own white artboard surfaces — that is the artefact, not chrome.
- All four case .md files rewritten in Marco's voice: same facts, claims,
  structure and honesty, duplicate explanations cut, no invented numbers,
  TODO MARCO and PLACEHOLDER blocks untouched. Alt text normalised,
  descriptive, no "image of".
- Test gotchas: .prose is position: relative, so offsetTop of figures is
  prose-relative — use getBoundingClientRect().top + scrollY for scroll
  maths. Lazy images inside expanded test iframes only load once the
  OUTER viewport reaches them; re-check before judging images "missing".

## DONE: nav lockup wink (8 July 2026)
Wolf mark scaled up (wolf-mark.svg viewBox cropped to the artwork,
"13 8 38 48" — the export had huge transparent padding), renders ~32x40px.
Hover wink: rest rotate(-8deg), transform-origin bottom centre, hover
straightens to 0deg in 0.25s ease-out-back, relaxes home over 0.35s; CSS
only, guarded by (hover: hover) and (pointer: fine), disabled under
reduced motion. The old pointer-tracking initWolf was deleted from
Base.astro — do not reintroduce inline transforms on the nav img.

## DONE: title-tape rollback (verified in code 8 July 2026)
Earlier the tape/highlight blocks had crept onto the case-study TITLES and
meta lines (orange tiles behind every word, worst in dark mode). That was
never in scope: the tape/pin system is for IMAGES ONLY. Verified resolved
in the current code: in src/pages/work/[slug].astro the tape (--tape,
::before/::after) is confined to the .fig image system; .case-title,
.case-meta and the markdown headings carry no tape, highlight or
background behind the type, and none of the four case .md files contain
highlight markup. Titles render as plain ink typewriter on bare paper in
both themes. Not yet checked pixel-by-pixel in a browser, but the code is
in the intended state.
Lesson for future prompts: creative treatments must be scoped with an
explicit "images only, not type" line, Claude Code generalises enthusiasm.

## Outstanding setup (Marco's five-minute jobs)
- Contact form endpoint (web3forms.com or formspree.io id into the action).
- Send the drafted permission message to Lilly (FLIZpay) about quoting her
  post on /about.
- Case-study TODO MARCO slots need his real build anecdotes.

## Brand decision (July 2026)
The wordmark typeface changed: "Witty Wolf Design" is now set in Geist Mono
Medium everywhere (site, banners, design system). The old rounded display
face is retired; legacy assets restricted. The Figma design system
(file YbibMITCEMiqsigj8ox4gr, page "Witty Wolf Design - Branding & Design
system") was partially updated by Cowork: palette core-token row, typography
section, weight scale, live Geist Mono banner lockups (old rasters hidden,
not deleted), Typography Logo spec. Still to update there: Component
Examples section (new CTA system) and the guideline prose sections (Brand
Overview, Tone of Voice, Digital Presence, Spacing & Sizing, Incorrect
Usage, Colour Palette Logo).

## Case-study section index + screenshot titles (9 July 2026)
Case pages ([slug].astro) now carry a scroll-spy section index and shortened
titles, both driven off one source of truth: the `<p class="note">` labels
already authored in each case's markdown, in document order.
- New component `src/components/CaseIndex.astro`. Its sections are parsed from
  `entry.body` in [slug].astro (regex over the .note labels) and slugged with
  the shared `src/scripts/slug.mjs`. Desktop (>=1024px): a sticky rail in the
  left margin, active section lit in the case accent, driven by a rAF-throttled
  scroll handler (reads getBoundingClientRect, activate line 120px). Mobile
  (<1024px): a floating pill showing the current section that taps open to the
  full list; revealed after the first section, hidden again at the next-case
  card. No-JS: the same nav renders server-side as a plain in-flow list of
  working anchor links (not sticky).
- Anchors resolve with JS off because a tiny inline rehype plugin in
  astro.config.mjs (`rehypeNoteIds`) stamps `id="<slug>"` onto each note at
  build. GOTCHA: the notes are authored as inline HTML, which Astro carries as
  raw string nodes (no tagName), so the plugin rewrites the raw string, not an
  element. GOTCHA: changing markdown/rehype config does not bust the content
  cache — `rm -rf node_modules/.astro .astro` before rebuilding or ids look
  missing.
- The reading section is a `.prose-wrap` that becomes a `[rail | body]` grid on
  desktop ONLY once the script adds `.case-has-index` (grid + rail vars live in
  [slug].astro; prose indents into the body column, hero above stays full
  width). The >=1520px `.note` hang-left is cancelled when the index owns the
  margin. GOTCHA: Astro scopes every compound selector, so a component's scoped
  CSS cannot target the parent `.prose-wrap` — the rail styles are gated on the
  nav's own `.case-index--js` class instead.
- Screenshot-friendly titles: Base title shortened to `${client} · ${title} ·
  Witty Wolf` (middle dot, not em-dash). With `DYNAMIC_TITLE = true` in
  CaseIndex, document.title tracks the active section (`client · label · Witty
  Wolf`), restores to base above the first section, and is reset on
  astro:before-swap so SPA navigation keeps the next page's title. Only helps
  macOS window captures (Shift-Cmd-4 then Space); region/full-screen/iOS
  captures stay generic — do not claim otherwise. The script guards against the
  first-load double-init (direct call + astro:page-load) with an `inited` flag,
  same pattern as the stamp/boot scripts, else the pill toggle cancels itself.
- Verified with a Playwright script (25 checks: desktop rail/active/title,
  mobile pill reveal/expand/collapse/hide, reduced motion, no-JS SSR anchors,
  title restore on nav). Test gotchas that are NOT component bugs: `.prose` is
  position:relative so note.offsetTop is prose-relative (use rect.top+scrollY);
  images are loading="lazy" so pre-scroll to load them before measuring; global
  `html{scroll-behavior:smooth}` means test scrolls must use behavior:'instant';
  the Chrome extension can't scroll an occluded window (rAF frozen) so drive it
  with headless Playwright, not the browser tools.

## DONE: six reimagined logo concepts (10 July 2026)
public/brand/concepts/ holds wolf-01.svg to wolf-06.svg (same wolf, six
treatments: solid successor, line heir, draftsman construction, coin,
heavyweight, one-line wildcard), PNG exports in png/ (512 + 40, paper +
charcoal), a concepts.html preview sheet (Geist Mono embedded, both themes
inline) and concepts.md with per-concept notes. All marks are driven by
--wolf-ink / --wolf-accent custom properties with charcoal and amber
fallbacks; wolf-02.svg carries the master geometry the others reuse.
Nothing on the live site references these yet; no site files were touched.

## Senior polish pass — APPROVED AND APPLIED (10 July 2026, evening)
Marco picked all column-A options and they are committed: hero H1 is now
"Your product isn't the point. The ~~pixels~~ people using it are." (strike
gag intact), hero lead "I design products, then build them in real code.
The second half keeps the first half honest.", the about closing line
"New to the field, yes. Rookie, no." is cut (paragraph ends on "clear,
shippable decisions."), EVVO title is "Sell the story, not the spec sheet".
EVVO's 33%/70% deltas were REMOVED entirely (no n/method exists); a
one-line TODO MARCO comment in evvo.md marks where they may return if the
method is ever documented. The fifth case gained a verbatim Marco beat
("My worst client / I am my worst client") before the closing section, and
the astro-home-*.png after-shots were retaken with the new hero. The fifth
case is PUBLISHED and, since Marco's revised call later the same evening,
OPENS the set at order 1 with the rest by recency (Urbiqo 2, EVVO 3,
Shelly 4, Airbnb 5). /work heading and meta description read "Five case
studies. Five real problems.", the "projects" count labels are computed
from work.length, and the next-case ring runs Witty Wolf → Urbiqo → EVVO
→ Shelly → Airbnb → back to Witty Wolf. Urbiqo
staging room-photo swap (shortlist at "04 Website & portfolio/
urbiqo-room-shortlist.png") remains open.

## Original pass notes (same day, superseded where the above says so)
Editorial and art-direction pass over the four cases plus a new fifth case.
COMMITTED: Ironhack removed from the EVVO/Shelly role lines (now "6-week
team sprint, with Jacopo and Rodrigo" / "4-week team sprint, with Anna");
the Urbiqo positioning maps (light + dark PNGs) now carry a baked-in white
tape strip over the old "Arcano" legend label with a hand-marker "Urbiqo"
correction (Marker Felt, done in the pixels so it survives every
breakpoint), caption and alt updated to make the rename read deliberate.
UNCOMMITTED, awaiting Marco's approval: every case closing now ends on a
judgement instead of a disclaimer; the three "The problem is a human
situation" headings are now unique per case; Urbiqo's third act has three
labelled build beats (Build 01 · The restless card / Build 02 · Honest
pills / Build 03 · Half the words) which also feed the section index; the
EVVO 33%/70% usability deltas were demoted out of the metric blocks into
caveated prose (Marco still owes n + method, or they come out); Airbnb was
reframed from correction to study; the EVVO design-system board and Shelly
identity boards were demoted to fig--small (Shelly's visual-identity tile
cut, mascot/type kept); [slug].astro's next-case rotation now skips drafts.
NEW: src/content/work/witty-wolf-site.md, the Framer-to-Astro rebuild case,
status DRAFT, order 5, title/tagline/accent carry options in comments for
Marco. Assets in public/work/witty-wolf-site/ (framer-* before shots pulled
from "../Framer website/", astro-* after shots captured from the built site;
retake astro-home-*.png once the new hero copy lands). Stamp:
public/brand/stamps/witty-wolf-site.svg is the hero wolf as STROKE line
art (wolf-vector paths, fill none, stroke 9, padded viewBox 102 59 1240
856 so the width-fitting stamp system renders it small and short, in
family with the other four; the first solid wax-seal version overpowered
the title and was replaced 10 July 2026 evening). Placeholder thumb
public/thumbs/witty-wolf.svg. NOTE for launch of this case: home/work still say
"04 projects" and "Four case studies. Four real problems.", and consider a
liveUrl only after the DNS swap (wittywolf.design still serves the Framer
site). Open options Marco must pick: EVVO title, hero H1 + lead rewrite,
about closing line replacement ("New to the field, yes. Rookie, no." still
in place until then). Urbiqo room-photo Unsplash shortlist for the staging
listings sits at "04 Website & portfolio/urbiqo-room-shortlist.png".

## Witty, the corner agent that refuses to help (10 July 2026)
src/components/Witty.astro, rendered by Base on every page except /contact.
The gag: the assistant-position mascot is Marco's own wolf (the same
/brand/wolf-mark.svg the nav uses, one file for both themes) and its only
message is that it cannot help, with an amber self-drawing link to the
form. Copy shipped (option A, decided): "Hi, I'm Witty. I can't actually
help you. But send me a DM through the form and the human will." Bubble is
the decided option 1: paper-token card, 1.5px ink border, 2px radius,
pointer tail, mono, no shadow.
Behaviour (reworked 10 July 2026 evening, Marco's call): a proper chatbot
wait, 6s after load the wolf slides up, then the message TYPES into the
bubble (block caret, ~22ms/char, straight through the amber link; the
bubble is frozen at final size during typing so nothing reflows). First
appearance per session performs; later pages show it already settled via
sessionStorage "ww-witty-seen". The 6s beat also lands after the hero
typewriter finishes, fixing the audit's timing collision. Reduced motion
renders it static, immediately, full message, no caret; dismiss X stores
"ww-witty" = "dismissed" in localStorage so it never re-nags; an
IntersectionObserver slides it away while the footer is on screen (the
corner belongs to the Cookies link); hidden under 640px, and under 1024px
on case pages where the floating section pill owns the bottom edge (via
body:has([data-case-index])); z-index 55 (below pill 60, consent 70, wash
140); pointer-events only on bubble and wolf. Verified: entrance both
themes, dismissal persists across reloads, absent on /contact, steps aside
at footer and returns, hidden at 360 and on tablet case pages, reduced
motion static. Trope-y shadowed variant deliberately not built (it would
be the site's only rounded shadowed element); revisit only if Marco asks.

## Deployment (documented 10 July 2026)
GitHub Pages via .github/workflows/deploy.yml, which builds and deploys on
every push to main (remote: github.com/wittywolfdesign/witty-wolf-portfolio).
wittywolf.design already points at Pages, so a push IS a deploy. Pages sits
behind Fastly with cache-control max-age=600: after a deploy the old page
can linger up to 10 minutes and there is no manual purge, a hard refresh
plus patience covers it. Sessions on this machine CANNOT push (no GitHub
credential in the keychain, no SSH key, no gh CLI): Marco pushes himself.

## Audit fixes, items 2-6 (12 July 2026)
From the rendered design audit: nav links and the theme toggle now carry
the 2px amber focus outline (the hairline-underline-only focus was
invisible; the "no boxed outline" comment was overruled on purpose). The
home approach note tucks above the statement by default and only hangs
into the left margin at >=1560px (it used to clip to "hort version" at
1440). The case-index active line is now the upper third of the viewport
(Math.max(140, innerHeight * 0.35)) so the lit rail label matches the
heading the reader sees. TypeLine got a `.tw[hidden]{display:none}` guard:
its display:block was defeating the hidden attribute, so reduced-motion
and pre-JS renders reserved an invisible duplicate line under every typed
heading. Witty's bubble moved BESIDE the wolf (flex row, tail on the
bubble's right edge) and sits low, so the ensemble stays in the bottom
~150px strip instead of climbing over metric cards and the about
paragraph.
CONTACT FORM: WORKS. Confirmed on the live domain 12 July 2026 with a
real send (API 200, success true, mail delivered to Marco's inbox). An
earlier session wrongly declared the key an unregistered placeholder:
Web3Forms' spam protection blocks AUTOMATED/HEADLESS browsers and that
block surfaces as a failed CORS preflight, which looks exactly like a bad
key. GOTCHA for future sessions: never diagnose this form from a default
Playwright/headless context; test with a normal browser fingerprint
(regular Chrome UA, webdriver flag hidden) or ask Marco to send one. The
setup comment above the access_key in contact.astro is stale, the real
key is already in place.
Also fixed 12 July: Urbiqo's three "replace" claims corrected to the
truth, the product ADDS routes (guarantor, family help as a real answer,
optional background step where tenants tell hosts who they are), it never
replaced the paperwork; grounded in the verification screens in the Figma
design file (nodes 40002084-7467 and -7254).
Second audit (12 July 2026) applied wholesale on Marco's "fix everything":
evidence honesty pass (Shelly counts instead of percentages of sixteen,
the eight-word quote no longer miscounted, Urbiqo's unsourced 70% and the
10k/50k projection rows cut, tenure now "almost three years"), stock
persona portraits replaced by a Maria text card (board) and EVVO's
participant quote, detail crops at reading size added beside the Urbiqo
user flow (the freemium/premium + verification fork) and the Airbnb board
(the corner-radius column), slogan/brochure filler cut, two Urbiqo figures
pruned (verification-options, live-landing; assets kept on disk), contact
form restyled to field-notes (hairline ink, 2px corners, amber focus),
contact meta description now reuses the page's own line, the fifth case's
tab title de-stuttered ("Kill your template · Witty Wolf"), Witty tucked
into the corner (200px bubble, 12px off the edge, a touch higher).
KEPT by Marco's call: Witty itself and the WORK→ATTEMPTS gag. The
worst-client beat was softened on his follow-up (12 July): "I am kind of
an asshole when I have to criticise myself" became "I am merciless when I
have to criticise my own work"; the rest of the beat stands verbatim.
PENDING: FLIZpay case, Marco first asks them what he may show; Urbiqo
room-photo swap.

## Three locales (12 July 2026): EN root, /nl, /es
Astro built-in i18n (defaultLocale en, prefixDefaultLocale false), no
library, no geolocation. Structure: src/i18n/ui.ts holds every UI string
and page copy per locale (a fourth locale = one object + one content
folder + five thin wrappers); case markdown lives in
src/content/work/<locale>/ with SHARED public slugs (never translated), so
/work/urbiqo, /nl/work/urbiqo and /es/work/urbiqo are the same page;
pages derive locale from Astro.currentLocale and the /nl + /es wrappers
just re-render them ([slug] wrappers carry their own getStaticPaths via
src/i18n/casePaths.ts). Base emits lang, hreflang alternates + x-default
and og:locale(:alternate) on every page. slug.mjs now folds diacritics
(Año -> ano) and CaseIndex bundles the same module, so per-locale note
anchors work with JS off (verified 12/12 in all three locales). Nav: quiet
EN/NL/ES switcher (mono, active in ink, same page, stores ww-locale +
stands the offer down); WORK gag word per locale (Attempts / Pogingen /
Intentos). Witty is the language easter egg: browser language != page
language (first visit only, navigator.language, SUPPORTED list in
Witty.astro) -> the bubble types the offer in the browser's language with
two buttons; yes navigates + stores, no reverts to the standard line;
ww-lang-offer=done means never ask again. NEVER hard-redirect. The 404 is
one EN file that swaps itself client-side from the broken URL's locale
prefix (nav/footer stay EN there, known limit; no-JS gets EN). NOT
translated by design: wordmark, Witty's name, addresses, client names,
footer brand lines, job titles/industry terms, channel labels on contact,
the metaline. NL uses Marco's approved verbatim lines INCLUDING the eikel
worst-client line (edgier than the softened EN, his explicit instruction;
flag if he wants parity). ES shipped with paired options in the session
report and NEEDS A NATIVE-SPEAKER PASS before Marco calls it final.

## Online-meeting background rebuilt (14 July 2026)
In the Figma branding file (YbibMITCEMiqsigj8ox4gr, page "Witty Wolf Design -
Branding & Design system"), the frame "Witty Wolf Background Online Meetings
NEW" (3079x1920, node 4841:986) was rebuilt from the old blue-gradient
version into the site-header language: paper bg, 44px guide grid at 6%
dissolving radially into the paper (built as lines + an inverse paper-fade
rectangle ON TOP inside the 6% group — Figma silently ignored an ALPHA
gradient mask that was set up correctly, do not retry masks for this),
stroke-only hero wolf from wolf-vector.svg (stroke #2C3E50 at 0.4, amber
tongue) bleeding off the right edge with ear tips cropped, lockup top-left
(colour mark + Geist Mono Medium wordmark) with the tagline "design that
survives contact with real code" (Marco's pick 14 July 2026, replacing
"designing for the user who's already frustrated") in muted mono
sized/letter-spaced to be flush left AND right with the lockup (Marco's
block-alignment preference),
and the kept LinkedIn QR image restyled as a field-notes card (paper fill,
2px ink hairline, 3px radius, mono uppercase "FIND ME ON LINKEDIN").
GOTCHA: Figma groups auto-dissolve when emptied — never touch a group node
after removing its children (atomic script dies on the dead ID).
DARK TWIN: frame "Witty Wolf Background Online Meetings DARK" (4841:1014)
is the same build rethemed with the site's dark tokens: page #14110D, grid
lines + wolf strokes in the paper tone #F4F2EC (same 0.4 opacity), fade
overlay dark, wordmark paper, tagline #A9A294 (dark muted), tongue stays
#E3993D exactly like WolfMark.astro (never theme-swapped). The colour wolf
mark in the lockup is untouched, one mark for both themes like the nav.
QR sits on a 16px-padded paper sheet (the .fig--sheet trick) inside a
#201C16 elevated card with a paper hairline, so it stays scannable.
UPDATE (14 July 2026, later): Marco removed the QR from both frames (a QR
does not survive video compression and nobody scans off a Zoom tile). The
wolf moved down so the whole head is in frame, and the line work was lifted
for legibility (stroke ~3.3, opacity 0.58 light / 0.7 dark, since paper
lines on the dark surface read fainter than charcoal on paper). Contact now
a quiet bottom-left footer mirroring the header block: "Marco Ramos" (mono
medium, ink/paper) over "linkedin.com/in/marcorramos" (mono muted). Layout
reads as a frame: brand top-left, person bottom-left, wolf right.

## Nav lockup alignment + logo package (14 July 2026)
Two jobs, both done.
- Nav lockup / meta line alignment: the top row (wolf + "Witty Wolf Design")
  and the meta line under it ("Marco Ramos · Product designer & developer")
  now read as one block, flush left AND right. Left edges were already flush
  in .wrap (both at the gutter). The right edge was 10px out ("Design" overran
  "developer"). Fix in src/components/Nav.astro: .nav__brand font-size 1.6rem →
  1.544rem, so the lockup's right edge lands on the end of the meta line (the
  wolf tracks the type at 2.1em, so the whole lockup scales as one). Verified
  by measuring bounding boxes with Playwright against the built preview
  (brand.right 368.81 vs marcoName.right 368.83). This is tuned to the current
  wordmark + meta-line strings; if either copy changes, re-tune the font-size.
- Logo package: public/brand/logo-package/ (README + svg/ + png/). Two
  colourways, transparent: light = ink wordmark for light backgrounds, dark =
  paper wordmark for dark backgrounds; the wolf mark is IDENTICAL in both (only
  the letters change colour). Built from the clean vector favicon-mark.svg
  (charcoal silhouette #2C3E50, white face, amber tongue #E3993D, -8° tilt),
  NOT the heavy raster public/brand/wolf-mark.svg the nav still uses. Wordmark
  is live text: Geist Mono Medium, -0.01em, wolf height = 1.5em, gap 0.42em.
  The lockup SVGs embed the Geist Mono webfont (base64) so they render without
  the font installed; PNGs at heights 400/200/100/50 (lockups) and
  512/256/128/64/32 (mark). GOTCHA that cost time: measure text width with the
  font ACTUALLY loaded (a file:// URL with %20/%26 in the path silently fails
  to load → proportional fallback → wrong width → clipped viewBox). Geist Mono
  advance is ~0.59em; the correct "Witty Wolf Design" width at 100px is ~1003,
  not 736.
- Figma: page "Witty Wolf Design - Branding & Design system", section
  "Witty wolf logo 2026" (node 4830:46) now holds two live-text lockup tiles
  (light node 4834:58, dark 4834:71) — wolf via createNodeFromSvg + real Geist
  Mono Medium text, on paper / #14110D cards. GOTCHA: appending auto-layout
  cards (born at 0,0) to a Section balloons the section to include the origin;
  set the children's absolute x/y inside the section, then
  resizeWithoutConstraints the section back. The Figma screenshot service
  cached the ballooned bounds afterwards — screenshot the tiles directly to
  verify, trust node metadata for the section.

## Figma design system + brand guidelines rebuilt in place (14 July 2026)
File YbibMITCEMiqsigj8ox4gr, page "Witty Wolf Design - Branding & Design system".

WHICH NODES. The brief named 1644:699 and 819:2504 and called them copies of
the old system. They are not: they are the untouched Bricolage ORIGINALS. The
copies carrying Cowork's earlier Geist Mono pass are the "- July 2026" frames,
4783:370 (design system) and 4783:75 (brand guidelines). Marco confirmed the
July 2026 copies are the live ones, so ALL work below is in 4783:370 and
4783:75. The two originals were not touched and remain the historical record.
If a future session is handed the old IDs again, check this first.

### 4783:370 — Design System for Witty Wolf - July 2026 (now 7576 tall)
- Colour palette. The five surviving 50-900 ramps are gone. Now: a 10-swatch
  core token row (--ink, --paper, --white, --dark, --orange, --amber,
  --grey-100/200/400/600), a semantic token row on a paper panel (light) and
  its twin on a #14110D panel (dark), each swatch labelled with the CSS custom
  property, the hex and its real role. --slate gets one swatch plus a usage
  note, no ramp. Grey Neutrals became the light semantic row, Charcoal Primary
  the dark one, Orange Accent the slate row; the Amber and Blue Slate ramp
  containers were deleted (they still exist in the untouched original).
- Contrast. "Color Combinations" is now "Contrast · what actually passes AA",
  a measured table for both themes. Ratios were computed, not estimated.
  HONEST FINDING, NOT FIXED IN CODE: the light-theme CTA hover puts a --paper
  label on --accent and measures 2.11:1, so the shipped hover fails AA. The
  dark hover is fine at 10.57:1. --accent on --bg is also 2.11:1 in light,
  which is why amber never carries text on paper. Stated plainly on the page.
- Typography. H1-H4, body and label specimens rebuilt from global.css with the
  real clamps, line-heights and tracking. Specimen copy is real site copy.
  Documented finding: h4 has NO font-size of its own, it inherits --step-0.
  Two documented overrides: the home hero h1 is Geist Mono 500 at
  clamp(1.4rem, 2.6vw, 2.35rem)/1.45, and .case-title is clamp(1.8rem, 3.6vw,
  2.9rem)/1.3, so the --step-4/700 base only applies to /contact, /about, /404.
  The "Button Text" specimen became the .mono Label specimen (buttons belong in
  components).
- Weight scale. Cowork's descriptions were wrong (it called 500 "headings"
  when headings are 700, and listed Work Sans Light 300 and Black 900, which
  the site never uses). Now: Geist Mono 400/500/600/650/700 and Work Sans
  400/600, each with where it is actually used. Both are variable fonts so the
  full 100-900 axis exists in the browser; Figma only has static cuts, so 650
  is drawn at SemiBold and the page says so.
- Caveat is documented as a restricted third face (Marco's call): used only for
  the handwritten photo credit on the back of the about portrait.
- Component examples. Pills, radii, shadows and the three-card grid are gone.
  Now: CTA (.btn) with rest/hover/active in both themes; the secondary .ul link
  with its self-drawing underline; the contact send button's SEND MESSAGE /
  SENDING... / SENT retype with the block caret. Then five patterns that really
  exist: work index type rows (real data from the case frontmatter), pinned
  figure, cork bulletin board, tilted margin note, terminal footer.
- DISABLED STATE CUT, deliberately (Marco's call). contact.astro sets
  btn.disabled = true while sending but global.css has NO :disabled rule, so
  there is no designed disabled state to document. OPEN ITEM: either style it
  or accept that disabled looks identical to rest.
- The header still showed the OLD Bricolage raster banner, visible, with no
  Geist Mono replacement (Cowork had done this in the guidelines but not here).
  Replaced with a live Geist Mono lockup; the raster is hidden, not deleted,
  and renamed "(superseded, hidden)". Header intro rewritten: it still boasted
  about the "expanded color palette" that no longer exists.
- Footer year was 2025 (not 2024 as briefed), now 2026.

### 4783:75 — Brand guidelines & Logo design - July 2026 (now 8807 tall)
- The placeholder string "Our expanded color system provides a comprehensive…"
  was in LAYER NAMES only, never in the body. All nine renamed after their
  section. The prose was real, just stale and full of AI-slop marketing.
- Rewritten in Marco's voice, UK English, sentence case, no Oxford comma, no
  em-dashes, first person singular ("I", never "we"): Brand Overview, Core
  Philosophy & Values, Tone of Voice, Visual Identity & Imagery, Digital
  Presence, Hierarchy & Usage, Brand Mark, Legacy Stacked Logo, Spacing &
  Sizing, Incorrect usage, Typography Logo, Colour Palette Logo.
- Brand Overview and Core Philosophy contained BYTE-IDENTICAL text (the same
  770 characters), so Core Philosophy had never actually been written. It is
  written now, from the home approach copy and the about page.
- Tone of Voice shows the voice instead of describing it: six DO lines lifted
  verbatim from the live site, four DON'T lines lifted from the marketing prose
  retired from this very document ("Smart pixels. Curious mind.", "pack leader
  in smart pixels", "howl at the moon", "utilize advanced methodologies"). The
  two surviving "Bricolage" and "Smart pixels" mentions in this node are
  deliberate: they are the retirement statements and the DON'T list.
- Spacing & Sizing now derives from the real tokens: --wrap 1180px, --gutter
  clamp(1.25rem, 5vw, 4rem), section padding clamp(4rem, 10vw, 8rem) and
  clamp(2.5rem, 6vw, 4rem), the note that --radius 18px/--radius-lg 28px exist
  but the CTAs use no radius and the form uses 2px, plus the 2026 pack's real
  PNG cuts (lockup 400/200/100/50, mark 512/256/128/64/32). The clear-space
  rule (one wolf ear) was NOT changed: the logo pack README confirms it.
- Size table: only two cells changed, both because they contradicted the new
  hierarchy by recommending the now-restricted legacy logo. "Legacy Logo or
  icon" → "Lockup (horizontal)", "Icon or Legacy Logo" → "Icon or lockup". No
  rows invented, no other cell touched.
- Two real contradictions fixed. (1) The old don't said "never rotate the logo,
  the wolf should always be upright", but the mark carries a -8 degree tilt by
  design and the nav straightens it on hover. Rewritten to protect the tilt.
  (2) The light banner caption said to use it "on dark backgrounds", where its
  ink wordmark would be invisible. Corrected.
- Typos fixed: "Typograhpy Logo" was already fixed by Cowork in this copy;
  "Incorrect usage: dont's" → "don'ts".
- Frames renamed: the three siblings all called "Typography Logo" are now
  "Incorrect usage", "Typography Logo" and "Colour Palette Logo", matching
  their contents (verified against the heading text, not the order).
- Footer year was 2025, now 2026.

### Facts this pass corrected (the brief was working from stale notes)
- THE CORNER TAPE IS GONE. [slug].astro says so in its own comment ("the corner
  tape it once shared a base with is gone"). Figures now carry a single centred
  push-pin (.fig--pin, 13px dome) plus the alternating 0.45/-0.55deg tilt. The
  only "tape" left is baked into the Urbiqo positioning PNGs as pixels. The
  guidelines and the pattern tile say "pinned figure", not "taped figure".
- --slate #4A6A82, --grey-100 and --grey-200 are declared in global.css and
  referenced NOWHERE in src/. Documented as declared-but-unused rather than
  implied to be in use. The wolf's #2C3E50 is its own value in WolfMark.astro
  and is not --slate.
- --charcoal is a legacy alias of --ink and is still used by about.astro and
  [slug].astro.

### Outstanding
- The light-theme CTA hover fails AA at 2.11:1 (see above). Design decision
  needed: darken the sweep, or flip the label to --ink on hover.
- No :disabled style exists for .btn.
- The Figma variable global/fontFamilies/heading still resolves to "Bricolage
  Grotesque". Nothing in either July 2026 frame is bound to it, so it was left
  alone rather than risk other pages. It should be retired file-wide.
- The site's real token set has NO Figma variables. The "global" collection
  still holds the old 50-900 ramps (grey/charcoal/orange/amber/blue). Swatches
  are therefore hardcoded hex where no matching variable exists; existing
  bindings were preserved by cloning. Worth building a proper token collection
  with light/dark modes, but that is a file-wide change and was out of scope.
- The two Bricolage originals (1644:699, 819:2504) still sit on the page. If
  the July 2026 frames are now the source of truth, they are duplicates and
  should be archived or deleted.
- Cowork's palette intro used to justify keeping the ramps ("they are not
  website colours"). That claim is gone with the ramps.

## How to run
Marco runs the dev server himself in his own terminal (background servers
started by sessions get reaped):
```
cd "04 Website & portfolio/witty-wolf-portfolio"
npm run dev   # http://localhost:4321
```
