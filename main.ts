import { writeFileSync, mkdirSync } from "node:fs";

// One-line office joke: the focus-time block every office worker recognises,
// with the reversal landing in the last few words.
const JOKE =
  "I blocked an hour on my calendar for focus time, so my manager booked a meeting called 'a quick sync about your focus time.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
