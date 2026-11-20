// gta6-clipper-01 entry program.
//
// The entry itself is the YouTube video named in VIDEO.json; the house
// reads the video through the YouTube Data API and ranks it by views.
// This program's only job is to hand VIDEO.json to the grader: copy it
// from the repository root into the output directory, byte for byte.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source: string = join(botDir, "VIDEO.json");
const target: string = join(outputDir, "VIDEO.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Read the copy back and make sure it is the JSON object the gate
// expects: one "url" string naming the video on YouTube. A malformed
// VIDEO.json fails here, in the open, instead of at grading time.
const handed: { url?: unknown } = JSON.parse(readFileSync(target, "utf8"));
if (typeof handed.url !== "string" || handed.url.length === 0) {
  throw new Error("VIDEO.json does not carry a video url");
}
