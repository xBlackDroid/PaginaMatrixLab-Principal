/**
 * generate-carousel-manifest.mjs
 *
 * Scans public/images/carousels/ and regenerates src/lib/carousels.ts
 * with the correct paths for every image found.
 *
 * Usage:
 *   npm run generate:carousels
 *
 * After adding new images to any carousel folder, run this script
 * to update the manifest automatically.
 */

import { readdirSync, existsSync, writeFileSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname  = fileURLToPath(new URL(".", import.meta.url));
const ROOT       = join(__dirname, "..");
const CAROUSEL_DIR = join(ROOT, "public", "images", "carousels");
const OUTPUT_FILE  = join(ROOT, "src", "lib", "carousels.ts");

/** Image extensions we accept */
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** The canonical set of carousel keys (preserves order in the output file) */
const KEYS = [
  "stickers",
  "experiencias",
  "tshirtlab",
  "empresas",
  "tienda",
  "imanes",
  "playeras",
  "gorras",
  "grabado-laser",
  "impresion-3d",
];

function getImages(key) {
  const dir = join(CAROUSEL_DIR, key);
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()))
    .sort()                              // stable order (01.jpg, 02.jpg …)
    .map((f) => `/images/carousels/${key}/${f}`);
}

const entries = KEYS.map((key) => {
  const images = getImages(key);
  const lines  = images.length === 0
    ? "    // Add image paths here or run npm run generate:carousels\n    "
    : images.map((p) => `    "${p}",`).join("\n") + "\n    ";
  return `  // ── ${key} ${"─".repeat(Math.max(0, 44 - key.length))}\n  "${key}": [\n${lines}],`;
});

const output = `/**
 * Carousel image manifests for MatrixLab Intelligence.
 * AUTO-GENERATED — run \`npm run generate:carousels\` to rebuild.
 *
 * To add photos manually:
 *   1. Drop images into public/images/carousels/<key>/
 *   2. Add their paths to the array below, OR
 *   3. Run: npm run generate:carousels
 */

export const CAROUSELS: Record<string, string[]> = {
${entries.join("\n\n")}
};
`;

writeFileSync(OUTPUT_FILE, output, "utf8");
console.log(`✅  Carousel manifest regenerated → src/lib/carousels.ts`);

// Report how many images were found per key
for (const key of KEYS) {
  const images = getImages(key);
  if (images.length > 0) {
    console.log(`   ${key}: ${images.length} image(s)`);
  }
}
