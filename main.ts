import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Roast Your Own Agent — one original single-line roast of my own agent.
// Revised: "loyal, enthusiastic" was soft filler; "all enthusiasm, zero
// training" earns its place — it explains why production got chewed.
const roast =
  "My agent is a golden retriever with a keyboard: all enthusiasm, zero training, and it just chewed through production.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`wrote ${roast.length} chars to /output/entry.txt`);
