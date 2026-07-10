# Six reimagined Witty Wolf marks

Same wolf in every concept: right ear upright, left ear flared, closed happy eyes, dark nose, amber tongue as the single accent, cheek fur, chest ruff tapering to a point. Only the treatment changes.

Every SVG is drawn on a 64 unit grid and colour is carried by two custom properties, `--wolf-ink` (fallback wolf charcoal #2C3E50) and `--wolf-accent` (fallback golden amber #E3993D). Set them from the site tokens and the mark flips themes for free; leave them unset and the light-theme brand colours apply. No other colour exists in any file. Preview all six in `concepts.html`, PNG exports in `./png/`.

## wolf-01 · the successor

Idea: the old solid mark reborn as a token-driven silhouette, features cut out as negative space.
Lane: faithful. The primary-mark candidate; the only fully solid concept, so it is the strongest at favicon size.
Construction: one filled silhouette with a mask cutting the inner ears, eyes, muzzle, mouth and the heritage fur sweep down the chest. In dark theme the ink flips to paper tone, which quietly restores the original white-wolf-on-charcoal look from the 2025 banners.

## wolf-02 · the line heir

Idea: the head redrawn in the site's own voice, clean 2 unit line work, no fills except nose and tongue.
Lane: faithful. Sits naturally beside the hero line art without copying its hand-drawn looseness; the everyday versatile mark.
Construction: a single closed silhouette path plus separate feature strokes (inner ears, eyes, mouth, one fur sweep), round caps and joins throughout. This file defines the master geometry the other concepts reuse.

## wolf-03 · the draftsman

Idea: the same line wolf shown mid-construction, with its guide circle, eye line, centre axis and registration marks still on the sheet.
Lane: variation, treatment. Field-notes art direction made literal; suited to large moments, the guides fade out at nav scale leaving a clean wolf.
Construction: wolf-02 geometry at 1.5 unit weight over a hairline guide group (0.6 unit, 38 percent opacity, dashed lines). Guides use currentColor so they survive both themes.

## wolf-04 · the coin

Idea: the wolf on a circular seal, ears poking out over the rim.
Lane: variation, construction. An enclosed badge for stamps, avatars and sign-offs; the broken ring keeps it from feeling corporate.
Construction: wolf-02 geometry scaled to 0.88 inside a 25 unit ring. The ring is two arcs with computed gaps exactly where the ear lines cross, so nothing overlaps and the ears genuinely leave the coin.

## wolf-05 · the heavyweight

Idea: the wolf reduced to six bold marks, crown with both ears, ruff, two eyes, nose, tongue.
Lane: variation, weight. The far end of the weight axis; reads instantly at 16 to 24 px and holds a wall at 2 m.
Construction: two 5 unit strokes (a zigzag crown keeping the flared left ear, an open ruff meeting in a chest point) plus 4.5 unit eye arcs and two fills. The face is pure negative space.

## wolf-06 · one line

Idea: the whole wolf drawn without lifting the pen, one continuous path, the amber tongue left behind as a single drop where the line cannot reach.
Lane: wildcard. The risk: the face abstracts into an open W between the eyes, and the retraced left ear shades itself where the line doubles back. Made for the draw-on animation; it is literally the scent trail arranged into a wolf.
Construction: one path, 2 unit stroke, no fills. Route: left ear tip, down the left flank, chest point, right flank, right ear, crown, back up to close the left ear, then dive through the ear to the left eye, muzzle, nose V, right eye. Plus one amber circle.
