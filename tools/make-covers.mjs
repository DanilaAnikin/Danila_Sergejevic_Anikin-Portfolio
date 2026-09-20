// Vyrenderuje náhledové obrázky projektů z tools/covers.json do public/projects/.
//
//   node tools/make-covers.mjs            # všechny
//   node tools/make-covers.mjs frem       # jen vybrané
//
// Používá se jen u projektů bez použitelného screenshotu — viz komentář
// v tools/project-cover.html.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const OUT = path.join(ROOT, "public", "projects");
const TEMPLATE = path.join(HERE, "project-cover.html");

const CHROME = ["google-chrome", "chromium", "chromium-browser"].find((b) => {
  try {
    execFileSync("which", [b], { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
});
if (!CHROME) {
  console.error("Nenašel jsem chrome ani chromium — bez nich se obrázky vyrenderovat nedají.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(path.join(HERE, "covers.json"), "utf8"));
const chtene = process.argv.slice(2);
const klice = chtene.length ? chtene : Object.keys(data);

fs.mkdirSync(OUT, { recursive: true });
for (const key of klice) {
  const spec = data[key];
  if (!spec) {
    console.error(`  ✗ ${key}: v covers.json není`);
    process.exitCode = 1;
    continue;
  }
  const payload = Buffer.from(JSON.stringify(spec), "utf8").toString("base64");
  const url = `file://${TEMPLATE}?data=${encodeURIComponent(payload)}`;
  const out = path.join(OUT, `${key}.png`);
  execFileSync(
    CHROME,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1440,1000",
      "--virtual-time-budget=2500",
      `--screenshot=${out}`,
      url,
    ],
    { stdio: "pipe" },
  );
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`  ✓ ${key}.png (${kb} kB)`);
}
