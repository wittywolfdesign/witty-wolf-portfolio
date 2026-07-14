# Witty Wolf Design logo package

Transparent logo assets in two colourways. The wolf mark is identical in both;
only the wordmark colour changes, so pick the version by the background it sits on.

## What is here

```
svg/
  witty-wolf-mark.svg            wolf mark only (works on light or dark)
  witty-wolf-lockup-light.svg    mark + wordmark, ink text  — for light backgrounds
  witty-wolf-lockup-dark.svg     mark + wordmark, paper text — for dark backgrounds
png/
  witty-wolf-mark-{512,256,128,64,32}.png
  witty-wolf-lockup-light-{400,200,100,50}.png
  witty-wolf-lockup-dark-{400,200,100,50}.png
```

The PNG number is the height in pixels. Every file has a transparent background.

## Colours

- Wolf: charcoal `#2C3E50`, face `#FFFFFF`, tongue `#E3993D`.
- Wordmark on light: ink `#1A1714`.
- Wordmark on dark: paper `#F4F2EC`.

## Typography

The wordmark is live text set in **Geist Mono Medium** (weight 500), letter-spacing
-0.01em. Each lockup SVG embeds the Geist Mono webfont, so it renders correctly in
any browser even without the font installed. Editors (Figma, Illustrator) will use
your installed Geist Mono; if it is missing, use the PNGs instead.

## Clearspace

Keep clear space around the logo of at least the height of the wolf's ear. Do not
recolour, stretch, add effects, or place the light lockup on a busy or dark image.
