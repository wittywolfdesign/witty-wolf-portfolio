// Capture real staging screenshots for the Urbiqo case study.
// Headless Chromium, 1440-wide @2x, light theme. Region/element clips only,
// computed from live element boxes so nothing is cut mid-element.
//
//   node scripts/shoot-urbiqo.mjs
//
// Writes into public/work/urbiqo/: urbiqo-live-{search,listing,trust-card,en,es}.png
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public/work/urbiqo");
mkdirSync(OUT, { recursive: true });

const BASE = "https://staging.urbiqo.com";
const VW = 1440;

// let lazy media load, then settle back at the top
async function settle(page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(async () => {
    // nudge scroll to trigger any lazy images, then return to top
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    // wait for every <img> to finish decoding
    await Promise.all(
      [...document.images]
        .filter((i) => !i.complete)
        .map((i) => new Promise((r) => { i.onload = i.onerror = r; })),
    );
  });
  await page.waitForTimeout(600);
}

// make sure the clip fits inside the render surface before shooting
async function shootClip(page, clip, path) {
  const need = Math.ceil(clip.y + clip.height + 40);
  const vh = page.viewportSize().height;
  if (need > vh) await page.setViewportSize({ width: VW, height: need });
  await page.screenshot({ path, clip });
  console.log("  wrote", path, JSON.stringify(clip));
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: VW, height: 1600 },
  deviceScaleFactor: 2,
  colorScheme: "light",
});
const page = await context.newPage();

try {
  // 1 — SEARCH: heading + Type/price/size filter row + first row of cards
  console.log("search…");
  await page.goto(`${BASE}/en/search`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector('a[href*="/listing/"]', { timeout: 30000 });
  await settle(page);
  const searchClip = await page.evaluate(() => {
    const heading = [...document.querySelectorAll("h1,h2")]
      .find((e) => /search for listings/i.test(e.textContent));
    const cards = [...document.querySelectorAll('a[href*="/listing/"]')]
      .map((a) => a.getBoundingClientRect())
      .filter((r) => r.width > 150 && r.height > 150);
    const minY = Math.min(...cards.map((r) => r.top));
    const firstRow = cards.filter((r) => r.top < minY + 24);
    const rowBottom = Math.max(...firstRow.map((r) => r.bottom));
    // end the crop in the gutter above the second row, so no card is sliced
    const below = cards.filter((r) => r.top > rowBottom - 4);
    const nextTop = below.length ? Math.min(...below.map((r) => r.top)) : null;
    const top = Math.max(0, heading.getBoundingClientRect().top - 28);
    const bottom = nextTop != null ? (rowBottom + nextTop) / 2 : rowBottom + 24;
    return { x: 0, y: Math.round(top), width: 1440, height: Math.round(bottom - top) };
  });
  await shootClip(page, searchClip, join(OUT, "urbiqo-live-search.png"));

  // shared: header + gallery + summary. Runs from the title down through the
  // "Room description" quick-facts row (type · 22 m² · furnished), ending in
  // the gutter above the description paragraph so nothing is sliced.
  async function listingClip() {
    return page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const top = Math.max(0, h1.getBoundingClientRect().top - 28);
      // the description paragraph that follows the quick-facts row
      const para = [...document.querySelectorAll("p")]
        .map((p) => ({ p, r: p.getBoundingClientRect() }))
        .filter((o) => o.r.top > 880 && o.p.textContent.trim().length > 80)
        .sort((a, b) => a.r.top - b.r.top)[0];
      const facts = [...document.querySelectorAll("body *")]
        .find((e) => e.children.length === 0 && /\b22\s*m/.test(e.textContent) && !/schema/.test(e.textContent));
      let bottom;
      if (para) bottom = para.r.top - 16;
      else if (facts) bottom = facts.getBoundingClientRect().bottom + 24;
      else bottom = top + 900;
      return { x: 0, y: Math.round(top), width: 1440, height: Math.round(bottom - top) };
    });
  }

  // 2 — LISTING (EN): gallery + room summary
  console.log("listing…");
  await page.setViewportSize({ width: VW, height: 1600 });
  await page.goto(`${BASE}/en/listing/1`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("h1", { timeout: 30000 });
  await settle(page);
  const enClip = await listingClip();
  await shootClip(page, enClip, join(OUT, "urbiqo-live-listing.png"));

  // 3 — TRUST CARD: element screenshot of the "Trust & Safety" card
  console.log("trust card…");
  const trust = page.locator('div.rounded-lg:has(h3:has-text("Trust & Safety"))').first();
  await trust.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await trust.screenshot({ path: join(OUT, "urbiqo-live-trust-step.png") });
  console.log("  wrote trust-step");

  // 4 — EN: the same header+gallery+summary region (reuse the EN clip)
  console.log("en…");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  await shootClip(page, enClip, join(OUT, "urbiqo-live-en.png"));

  // 5 — ES: the SAME region at the same scroll, Spanish listing
  console.log("es…");
  await page.setViewportSize({ width: VW, height: 1600 });
  await page.goto(`${BASE}/es/listing/1`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("h1", { timeout: 30000 });
  await settle(page);
  await shootClip(page, enClip, join(OUT, "urbiqo-live-es.png")); // identical clip box → pairs cleanly

  console.log("done.");
} catch (err) {
  console.error("FAILED:", err);
  process.exitCode = 1;
} finally {
  await browser.close();
}
