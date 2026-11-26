// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence (<= 320 chars) to /output/entry.txt.
// The roast: the committee that polices what your chatbot may say cannot
// itself turn its own bill into a PDF — authority set up, then undercut by
// the file it cannot convert. The punch lands on the last words: the
// unsaved draft named FINAL_final_v7_REAL.docx.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The committee that decides what your chatbot may say spent its morning " +
  "recess googling 'how to make a PDF' while their own bill sat open in " +
  "Word, unsaved, named FINAL_final_v7_REAL.docx.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 320
// characters, not only white space, as a single sentence. Fail loudly
// instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 320 || LINE.trim().length === 0) {
  throw new Error(`entry length ${chars} chars is outside the 1-320 gate`);
}
if (!LINE.endsWith(".") || LINE.includes(". ")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
