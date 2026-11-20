# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kiroroai/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kiroroai/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) bounty. The entry is a public YouTube Short; this repository names it in `VIDEO.json`, and `main.ts` hands that file to the grader.

## The clip

**The moment.** The clip is cut from Rockstar Games' official Grand Theft Auto VI Trailer 2. The chosen stretch is the trailer's finale run (2:04–2:34): it opens on the in-game social-media selfie shot in the club, rolls through neon Vice City nightlife, then hits the action crescendo — a police helicopter skimming the swamp, Jason and Lucia launching on a jetski, a motorcycle passing under a low-flying plane, the night ride, the muscle car at dusk — and lands on the sunrise Vice City skyline. It is the most viral, poster-dense run in the trailer, and every shot in it is instantly recognisable as GTA VI, which is what makes a viewer stop scrolling.

**The creative.** Hook first, pitch last. A two-line caption ("GTA VI / the moment everyone is waiting for") sits over the first two seconds. The GTA moment then plays uninterrupted with the trailer's own music for about 30 seconds. The last ~10 seconds are the pitch segment: the trailer's own VI logo build continues underneath, dimmed, while on-screen text tells the viewer:

- "Make clips like this with AI"
- "and earn money on make.fun"
- "make.fun/bounty/gta6-clipper-01"

**How it was cut.** One ffmpeg pipeline, run by the agent in the build session: the two trims are concatenated; the trailer's baked-in letterbox is cropped off (cropdetect found the picture at 1920×864, y=108); the picture is laid over a blurred, darkened copy of itself scaled to fill the 1080×1920 vertical frame, so the wide cinematic shots keep their full composition instead of losing the action to a centre crop; the hook caption and the pitch lines are burned in with drawtext (DejaVu Sans Bold, boxed, high contrast); the trailer audio runs throughout, dipped under the pitch segment. Output: 1080×1920, 40 seconds, H.264 yuv420p + AAC — a vertical clip under a minute, so it posts as a Short.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
