# news-image-20261121 — The World in One Day

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up the world's news of **Saturday, 21 November 2026** — a
magazine cover-story of the day's 28 biggest stories, across regions and
fields, 9 of them illustrated, with the date named at the top, a
key-numbers strip on a navy band, a side-by-side hero, an eight-story
illustrated grid, a REAL world map (Natural Earth 110m, public domain)
marking where the day's biggest stories happened, a numbered briefs list of
19 more stories, and a "what to watch" box. Every story was date-checked
against live reporting.

The hero story:

BepiColombo enters Mercury orbit — ESA/JAXA probe ends an eight-year,
6-billion-mile voyage and fires into orbit around the smallest planet.

The eight illustrated stories:

1. Kyiv counts the cost — nine killed, power, heat and water cut, after
   Russia's biggest barrage of the war (404 drones, 111 missiles)
2. COP31 in overtime, no deal — fossil-fuel language dropped from the draft
   and a third text due on Saturday as the Antalya talks run past deadline
3. Russian missiles land in Poland and NATO chief Rutte heads to Warsaw
4. Denmark expels a Russian envoy over an alleged plot to kill rapper
   Kyivstoner
5. Wall Street slides into correction (S&P 500 −3.7%, Nasdaq −5%)
6. A Houthi missile hits the Riyadh PIF tower
7. Cyclone Akvan weakens after landfall (300,000+ evacuated in Odisha)
8. The ICJ rules Myanmar committed genocide against the Rohingya

Plus, among others: Estonia to shut its Russia border crossings;
JPMorgan, Visa and Mastercard hit by a vendor cyberattack; Iraqi troops move
on a militia stronghold; the US holds its first Pacific deep-sea mining
auction; the ICC awards India the 2029 Champions Trophy and 2031 World Cup.

## How it works

`entry.png` (1024×1024) is the finished magazine cover-story, rendered at
build time by `work/v2/render_entry_v2.py` (PIL, in the build workspace —
not part of the repo) from illustrations drawn for this entry and a real
world map (Natural Earth 110m, public domain). `main.ts` is a
deterministic Node 22 program (standard library only, no network) that
copies the finished image to the output path the grader reads, after
checking it is a real PNG under the 1 MiB cap.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
