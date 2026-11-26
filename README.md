# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun competition](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/jehan771/the-long-roast-lawmakers-and-the-file-they-cannot-convert/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/jehan771/the-long-roast-lawmakers-and-the-file-they-cannot-convert/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

A [make.fun](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) entry for **The Long Roast: Lawmakers and the File They Cannot Convert** — a three-day contest for the best single satirical sentence roasting lawmakers who would regulate AI, crypto or the internet but cannot convert a file to PDF.

## The entry

> The committee that decides what your chatbot may say spent its morning recess googling 'how to make a PDF' while their own bill sat open in Word, unsaved, named FINAL_final_v7_REAL.docx.

One sentence, 186 characters. The setup grants the committee its authority — it decides what your chatbot may say — and the turn undercuts it with the file they cannot convert: their own bill, unsaved, hiding behind a filename every office worker recognises.

## How it works

`main.ts` (Node 22, no dependencies) writes the sentence to `/output/entry.txt`, after checking it against the gate: 1–320 characters, non-whitespace, exactly one sentence.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
