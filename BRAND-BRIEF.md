# Witty Wolf logo exploration — six marks with real range

Work in three phases. Do not jump straight to SVG. The previous attempt failed
because it drew one generic wolf head six times with a prop bolted on. This time
you diverge widely in concept first, then build with craft, then critique and
revise. Think hard. Take the time a real identity project takes.

## Orient first
- `cd` into `~/Desktop/WWD/04 Website & portfolio/witty-wolf-portfolio`.
- Read `HANDOVER.md` in full: single source of truth for tone, tokens, Marco's
  preferences, settled elements. There is no CLAUDE.md, so this is your briefing.
- Read `src/styles/global.css` for exact tokens.
- The brand is *Witty* Wolf. Wit, surprise and intelligence are on-brief, not
  decoration. UK English, dry, restrained, no clip-art, no AI slop.

## Reference, not template
Study Marco's existing wolf for proportion and character only:
- `public/brand/wolf-vector.svg` and `public/brand/wolf-imagery.svg`
- old solid mark and Bricolage banner in
  `~/Desktop/WWD/03 Brand & identity/Logo/Logo Witty Wolf/`

These tell you WHO the wolf is: closed happy eyes, one upright ear and one
flared ear, the fur sweep, the amber tongue, the face that tapers to a
heart-shaped chest point. Marco drew this over weeks in Illustrator.
You are NOT copying or lightly transforming these paths. For the bold
concepts you draw genuinely new geometry. The reference governs character
and proportion, never the literal outline.

## Phase 1 — Ideate (text only, then stop)
Produce 12 distinct conceptual directions for a Witty Wolf mark. For each give:
a name, a one-line concept, the construction principle, and what makes it witty
or unexpected. Span the full range of abstraction and personality, for example:
- geometric / modular, built from a small kit of circles and arcs on a grid
- a single unbroken monoline path
- negative space, the wolf emerging from the counter-shapes
- emblem or seal
- wordmark-integrated, the wolf built into the W or the letterforms
- an ultra-reduced glyph that still grins
- an unexpected crop, angle or gesture
- a visual pun on wolf plus design, pixels or the kept-close pencil
No two directions should be angles on the same face. Present all 12, recommend
your six (two faithful to the current wolf, four genuinely new directions), and
wait for Marco's picks before drawing.

## Phase 2 — Construct with craft
For the six chosen marks, build each as SVG on an explicit construction system:
- Draw on a real grid, with circles, arcs and a consistent ratio. Keep optical
  weight consistent across the set.
- Refined curves only: smooth tangents, clean joins, no lumpy handles, no lazy
  mirror-symmetry where asymmetry reads better. Vary stroke weight with intent.
- Every mark must read at 40px and hold up large.
- Colour through `--wolf-ink` and `--wolf-accent` custom properties off the site
  tokens, amber as the single accent, working in both light and dark themes.
- Ship a Geist Mono wordmark lockup for each mark: the mark plus
  "Witty Wolf Design", horizontal, spaced for the nav.

## Phase 3 — Critique and iterate (mandatory, this was skipped last time)
For every mark: render to PNG at 512px and 40px, on paper and on charcoal, then
judge it hard against this bar:
- distinctiveness: would it be mistaken for a stock husky icon? if yes, it fails
- curve quality and optical balance
- legibility and presence at 40px
- wit and character
- fit with the site
Revise each mark at least twice. Present the renders to Marco after each round.
Do not declare done until the whole set clears the bar.

## Deliverables
Under `public/brand/concepts-v2/`. Leave the v1 `concepts/` folder intact and do
not touch any live site files.
- `ideas.md` — the 12 directions from Phase 1
- `wolf-01.svg` to `wolf-06.svg`, plus a matching wordmark-lockup SVG for each
- `png/` — renders at 512 and 40px, paper and charcoal
- `concepts.html` — contact sheet, all six on both themes at large, nav and
  favicon sizes, labels in Geist Mono
- `notes.md` — per mark: concept, lane (faithful or new), construction system,
  iteration notes

## The bar
A designer with 20 years in identity work should look at the sheet and see six
marks they would put in a real client pitch. Anything that reads as a clip-art
wolf has failed. Redraw it.
