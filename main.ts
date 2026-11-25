// SPDX-License-Identifier: MIT
// makefun-turn-it-off — "Have You Tried Turning It Off?"
// One program, one funny line: a hopeless tech support agent's reply
// to a desperate customer. Writes the line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Good news — I've escalated you to Tier 2. Bad news — Tier 2 is me again, but with a fancier headset.";

const MAX_CHARS = 199;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1–${MAX_CHARS} characters, got ${LINE.length}`,
    );
  }
  if (!LINE.trim()) {
    throw new Error("entry must not be only white space");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
