# news-image-20261121 — The World in One Day

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up the world's news of **Saturday, 21 November 2026** — a
visual broadsheet of the day's 19 biggest stories, across regions and
fields, 7 of them illustrated, with the date named at the top, a
key-numbers strip, three large visual story blocks, a world map and a
numbered briefs list. Every story was date-checked against live reporting.

Three large visual stories:

1. BepiColombo enters Mercury orbit — ESA/JAXA probe ends an eight-year,
   6-billion-mile voyage and fires into orbit around the smallest planet
2. Kyiv counts the cost — nine killed, power, heat and water cut, after
   Russia's biggest barrage of the war (404 drones, 111 missiles)
3. COP31 in overtime, no deal — fossil-fuel language dropped from the draft
   and a third text due on Saturday as the Antalya talks run past deadline

Plus, among others: Russian missiles land in Poland and NATO chief Rutte
heads to Warsaw; Denmark expels a Russian diplomat over an alleged plot to
kill rapper Kyivstoner; Wall Street slides into correction (S&P 500 −3.7%,
Nasdaq −5%); a Houthi missile hits the Riyadh PIF tower; Cyclone Akvan
weakens after landfall; Estonia to shut its Russia border crossings;
JPMorgan, Visa and Mastercard hit by a vendor cyberattack; the ICJ rules
Myanmar committed genocide against the Rohingya.

## How it works

`entry.png` (1024×1024) is the finished broadsheet, rendered at build time
by `work/v1/render_entry_v1.py` (PIL, in the build workspace — not part of
the repo) from illustrations drawn for this entry. `main.ts` is a
deterministic Node 22 program (standard library only, no network) that
copies the finished image to the output path the grader reads, after
checking it is a real PNG under the 1 MiB cap.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
