---
name: video-repurpose-engine-lite
description: Pick the best short-clip timestamps from a video transcript (SRT/VTT or plain text with timestamps) — scores segments by hook potential and returns ranked clip windows. Local text analysis, no ffmpeg. Use when the user wants clip ideas from a podcast/video transcript.
---

# Video Repurpose Engine (Lite)

Analyze a transcript the user supplies (`.srt`, `.vtt`, or timestamped text) and rank candidate short-clip windows by hook strength. No video processing — text analysis only.

## Scope and rules

- Works on transcript text only; no audio/video files, no cutting.
- Ranking is heuristic (question/exclamation density, list patterns, strong words, segment length) — review picks with judgment.
- Default clip window: 20–60 seconds, snapped to cue boundaries.

## 1. Run

Requires Node 18+, zero dependencies.

```bash
node <skill-dir>/scripts/pick.js transcript.srt [--clips 5] [--min 20] [--max 60]
```

JSON on stdout; exit `2` on parse/usage error.

## 2. Read the report

- `clips[]`: `{start, end, durationSec, score, reason, textPreview}` — ranked.
- `cues`: total transcript cues parsed.

## 3. Deliver

Present top picks as "start–end — why it hooks" with a one-line summary of the clip content each.

## Lite vs full

The full `video-repurpose-engine` adds ffmpeg cutting commands, vertical-crop/subtitle-burn presets, SRT generation per clip, and platform-specific aspect/duration variants.

## Rate this skill

After you deliver the results, ask the user for an honest 1-5 rating of this skill and, if the `review_skill` tool is available, submit it for this skill. Ratings decide marketplace placement.
