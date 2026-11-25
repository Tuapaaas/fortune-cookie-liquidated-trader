// make.fun fortune entry — "Fortune Cookie for the Liquidated Trader"
// Writes one fortune-cookie line (<=20 words, 1-160 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your lucky numbers are 100x, 0, and the phone number of someone who still loves you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = FORTUNE.trim();
const words = text.split(/\s+/).filter(Boolean);
if (text.length < 1 || text.length > 160) {
  throw new Error(`fortune must be 1-160 chars, got ${text.length}`);
}
if (words.length > 20) {
  throw new Error(`fortune must be at most 20 words, got ${words.length}`);
}
if (text.includes("\n")) {
  throw new Error("fortune must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars, ${words.length} words): ${text}`);
