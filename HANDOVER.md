# Witty Wolf portfolio — build handover

A running record of the redesign, so a fresh session (Claude Code or Cowork)
can pick up without losing context. Written for Marco Ramos, Witty Wolf Design.
Last updated: 9 July 2026, after adding the case section index + screenshot titles.

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

## How to run
Marco runs the dev server himself in his own terminal (background servers
started by sessions get reaped):
```
cd "04 Website & portfolio/witty-wolf-portfolio"
npm run dev   # http://localhost:4321
```
