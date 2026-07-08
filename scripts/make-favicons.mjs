// Rasterise the wolf mark from the vector into crisp transparent favicons.
// Renders the SVG at high density, then downscales to each target so nothing
// is upscaled from a small raster.
//   node scripts/make-favicons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(ROOT, "public/brand/favicon-mark.svg"));
const sizes = [32, 64, 180, 512];

for (const s of sizes) {
  await sharp(svg, { density: 384 }) // ~2600px render of the 500-unit viewBox
    .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(join(ROOT, `public/brand/favicon-${s}.png`));
  console.log("wrote", `favicon-${s}.png`);
}
