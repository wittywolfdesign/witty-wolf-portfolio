/* Shared ink-typewriter helpers: the one place that defines how a typed
   glyph "strikes" the page. Used by TypeLine's driver and the nav WORK gag
   so both speak the same hand. */

export const rand = (a: number, b: number) => a + Math.random() * (b - a);

/* Give a glyph its ink character: random strike weight, a tiny baseline
   drop or lift, a slight tilt and a touch of fade. `mess` scales the
   imperfection, 0 (crisp) to 1 (full). Returns true when the glyph should
   also carry a smudge (caller applies its own smudge class). */
export function inkGlyph(g: HTMLElement, mess = 1): boolean {
  g.style.fontWeight = String(Math.round(rand(430, 800)));
  g.style.transform = `translateY(${rand(-1.1, 1.1) * mess}px) rotate(${rand(-1.5, 1.5) * mess}deg)`;
  g.style.opacity = String(1 - rand(0, 0.32) * mess);
  return Math.random() < 0.07 * mess;
}
