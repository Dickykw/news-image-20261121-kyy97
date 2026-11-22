# news-image-20261121 — The World in One Day

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Dickykw/news-image-20261121-kyy97/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up the world's news of **Saturday, 21 November 2026** — a
broadsheet front page of the day's **37 biggest stories across 9 regions**
(Europe 9, Middle East 6, Americas 4, Africa 3, South Asia 3, East Asia 3,
South-East Asia 3, Oceania 3, Global 3), drawn entirely with code: a giant
serif date masthead, a UTC timeline strip of the day's biggest events, a
big-number stats row, a stories-by-region bar, three large vector panels, ten
numbered mid stories with a big stat and named outlets each, a REAL world map
(Natural Earth 110m, public domain) with numbered pins, a 24-item briefs list,
a DATE CHECK box, and a HOW SURE legend. Every story was date-checked against
live reporting for 21 November 2026 (UTC).

The three big stories:

1. **Iran hits Bahrain as tankers struck in Hormuz** — an Iranian attack set a
   Bahrain industrial site ablaze; no one hurt. IRGC says it hit US positions.
   UKMTO: two tankers hit off Khasab. (AL JAZEERA · REUTERS · AFP)
2. **Drones set Russian cargo ship ablaze off Finland** — Sparta II, hit about
   06:50 UTC, drifted into Finnish waters; crew evacuated. Finland: Ukraine
   likely behind it. (BBC · FRANCE 24 · MOSCOW TIMES)
3. **COP31 stuck over fossil fuels in overtime** — a day past deadline, talks
   paused overnight. The EU and Pacific states reject a draft omitting fossil
   fuels. (BBC · AFP · FRANCE 24)

Plus, among others: the EU–Indonesia trade pact after 10 years; Mexico seizing
'El Chapo Isidro'; UN 'killer robot' talks ending with no binding treaty;
BepiColombo entering orbit around Mercury; the Nigeria funeral boat toll
reaching 24; the deep M6.8 Banda Sea quake; tainted alcohol killing 11 in
Manipur; England beating the All Blacks 37–12; BTS taking five MAMA awards;
the sixth Saturday of French cost-of-living marches — and 24 more briefs, from
Jerusalem to Wellington.

The DATE CHECK box names the well-known stories that were left out because
they belong to another UTC day (Fri 20 Nov: Russian missiles in Poland,
Denmark expelling a Russian attaché, the Wall Street tech sell-off, the GTA VI
sales record; Sun 22 Nov: Verstappen winning Las Vegas, the new COP31 draft,
India declaring at 720-9).

## How it works

`entry.png` (1024×1024) is the finished broadsheet, rendered at build time by
`work/v3/render_entry_v3.py` (PIL, in the build workspace — not part of the
repo) from vector drawings made for this entry and a real world map (Natural
Earth 110m, public domain). No photo-like images are used anywhere. `main.ts`
is a deterministic Node 22 program (standard library only, no network) that
copies the finished image to the output path the grader reads, after checking
it is a real PNG under the 1 MiB cap.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
