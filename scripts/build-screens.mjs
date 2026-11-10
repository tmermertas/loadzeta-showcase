// Turns the raw simulator captures of an App Store release into the WebP
// sources the landing page imports (src/assets/screens/). The captures live in
// the app repo next to the store screenshots, so the site and the store page
// always show the same build:
//
//   node scripts/build-screens.mjs ../load-zeta/appstore-raw/screens-1.0.10
//
// Phones are 1206x2622 captures, kept at 960px wide (a 320px frame at 3x).
// iPad captures are 2752x2064, kept at 2000px wide.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const src = path.resolve(process.argv[2] || "../load-zeta/appstore-raw/screens-1.0.10");
const out = path.resolve("src/assets/screens");
fs.mkdirSync(out, { recursive: true });

const phones = ["home", "home-dark", "load-detail", "loads", "outstanding", "expenses", "net-sheet", "widget-home", "quick-actions", "context-menu"];
const pads = ["home"];

for (const n of phones) {
  const f = path.join(out, `${n}.webp`);
  await sharp(path.join(src, "raw", `${n}.png`)).resize({ width: 960 }).webp({ quality: 92, effort: 6 }).toFile(f);
  console.log("wrote", path.relative(process.cwd(), f), `${Math.round(fs.statSync(f).size / 1024)} KB`);
}
for (const n of pads) {
  const f = path.join(out, `ipad-${n}.webp`);
  await sharp(path.join(src, "raw-ipad", `${n}.png`)).resize({ width: 2000 }).webp({ quality: 90, effort: 6 }).toFile(f);
  console.log("wrote", path.relative(process.cwd(), f), `${Math.round(fs.statSync(f).size / 1024)} KB`);
}
