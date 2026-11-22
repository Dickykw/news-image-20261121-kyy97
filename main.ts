// news-image-20261121 — entry program (v3, broadsheet).
//
// The entry image (entry.png) is a broadsheet front page summing up the
// world news of Saturday, 21 November 2026: 37 stories across 9 regions,
// drawn entirely with code — a giant serif date masthead, a UTC timeline
// strip of the day's biggest events, a big-number stats row, a
// stories-by-region bar, three large vector panels (a Hormuz locator map,
// the Sparta II cargo ship on fire, the COP31 draft-text diagram), ten
// numbered mid stories with a big stat and named outlets each, a REAL
// world map (Natural Earth 110m, public domain) with numbered pins, a
// 24-item briefs list, a DATE CHECK box naming the well-known stories
// that belong to another UTC day, and a HOW SURE legend. Every story was
// date-checked against live reporting for 21 November 2026 (UTC), and
// every headline and summary was written for this entry.
//
// This program only places a byte-for-byte copy of the finished image at
// the output path the grader reads. It first proves the file is a whole
// PNG under the competition's 1 MiB cap, then writes it out and checks
// the copy landed complete.
//
// Deterministic by construction: one fixed input file, the same bytes
// out on every run. Standard library only, no network, no clock, no
// randomness, nothing else touched.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_NAME = "entry.png";
const MAX_BYTES = 1024 * 1024;
const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

// The grader sets MAKEFUN_OUTPUT_DIR; everywhere else /output is the
// competition's output path.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const repoDir = new URL(".", import.meta.url).pathname;
const bytes = readFileSync(join(repoDir, ENTRY_NAME));

if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error(`${ENTRY_NAME} is not a PNG file`);
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`${ENTRY_NAME} is ${bytes.length} bytes, over the 1 MiB cap`);
}

// The competition's entry image is 1024x1024; a wrong-size image would
// be a wasted submit, so read the IHDR width and height straight out of
// the PNG header (bytes 16-24, big-endian) and fail before copying.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`${ENTRY_NAME} is ${width}x${height}, expected 1024x1024`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, ENTRY_NAME);
writeFileSync(outPath, bytes);

// The grader reads exactly these bytes, so a short write must fail
// loudly here instead of shipping a bad entry.
if (readFileSync(outPath).length !== bytes.length) {
  throw new Error(
    `output ${ENTRY_NAME} is ${readFileSync(outPath).length} bytes, ` +
      `expected ${bytes.length}`,
  );
}
