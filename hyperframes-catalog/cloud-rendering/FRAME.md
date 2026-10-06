---
version: alpha
name: Paper Workspace with Dark Terminal — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the cloud-rendering launch film. A calm, workspace-real look: warm
  paper grounds, a dark terminal-style chat window that persists and grows across the film, mono logs with
  a mint scan bar and a block progress bar, a pixel-pet perched on the prompt box, and a payoff grid of dark video
  tiles with a mint-to-cyan edge. Two brands kept apart: clay for the assistant window, mint-to-cyan for
  the product.
unit: the frame — 1920×1080 primary
principle: one persistent window · progress as story · rationed brand accent

colors:
  paper: "#F0EFE9"
  panel: "#F6F5F1"
  sunken: "#E8E7E1"
  hairline: "#E0DFDB"
  hairline-strong: "#D0CFCB"
  ink: "#0A0A0A"
  ink-2: "#6B6B6B"
  ink-3: "#999999"
  void: "#0A0A0A"
  tile: "#111113"
  tile-elevated: "#18181B"
  on-void: "#FAFAFA"
  on-void-2: "#A1A1AA"
  on-void-3: "#71717A"
  terminal-window: "#1D1F1F"
  terminal-text: "#EFEADD"
  terminal-muted: "#8C8B83"
  clay: "#D97757"
  mint: "#3CE6AC"
  cyan: "#00E3FF"
  mint-soft: "rgba(60,230,172,0.15)"
  progress-red: "#E5484D"

typography:
  mega:    { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 700)", px: 150, weight: 700, tracking: "-0.03em", lineHeight: 0.98 }
  display: { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 700)", px: 104, weight: 700 }
  h2:      { fontFamily: "Hanken Grotesk", px: 60, weight: 600 }
  lead:    { fontFamily: "Hanken Grotesk", px: 30, weight: 500 }
  body:    { fontFamily: "Hanken Grotesk", px: 24, weight: 400 }
  chip:    { fontFamily: "Hanken Grotesk", px: 22, weight: 500 }
  code:    { fontFamily: "Spline Sans Mono", px: 30, weight: 400 }
  label:   { fontFamily: "Spline Sans Mono", px: 18, weight: 400, upper: true, tracking: "0.04em" }

spacing:
  frame-pad: "100px"
  gutter: "28px"
  radius-control: "8px"
  radius-card: "14px"

components:
  chat-window:
    background: "{colors.terminal-window}"
    radius: "14px"
    chrome: "red/yellow/green dots top-left"
    parts: "right-aligned user messages, left assistant text with bold lead-ins, composer with 'Auto' chip, model name, circular loader"
    description: "Bottom-anchored; always shows accumulated history plus the prompt box; starts full-bleed, then shrinks to floating."
  pixel-pet:
    color: "{colors.clay}"
    description: "Tiny pixel creature typing on top of the prompt box."
  mono-log:
    description: "Terminal lines with green check marks, dim sub-lines, a mint highlight bar scanning down the worker log, and a block progress bar."
  progress-bar:
    description: "Mint fill on a dark track, with a small cyan dot at the head of the worker bar."
  video-tile-grid:
    background: "{colors.tile}"
    description: "16:9 dark tiles with a small label and a thin mint-to-cyan underline."
  word-beat:
    description: "Single large sans phrase on paper that resolves word by word (settled words dark, upcoming words grey)."
---

# Paper Workspace with Dark Terminal — Frame (video / frame layer)

## Overview

A **Before–After–Bridge** told inside one persistent chat window. Paper (`#F0EFE9`) is the base, the dark
window sits on it, terminal log scenes go full-bleed dark, and the payoff zooms through into a dark grid of
video tiles. No voiceover; typing, clicks and progress carry the story. Colour is rationed: clay only
inside the assistant window, mint-to-cyan only on the product (progress and the tile underlines).

**Key characteristics:**

- **Persistent window** that grows (history + composer always present) with a macOS cursor tapping enter.
- **Full-bleed terminal logs** with mono type, green checks, a highlighted line and a block progress bar.
- **Big word beat** on paper (e.g. 'Don't get ...') that resolves word by word.
- **Worker progress line** with a dark track and a mint/cyan dot.
- **Payoff tile grid** of dark rounded tiles with labels, each playing a real clip.
- **Flat depth:** lightness steps and 1px hairlines; no glow on mint.

## The Frame

- **Squint:** the window or the log block or the single word beat dominates.
- **Restraint:** mint-to-cyan is the only brand colour; clay never leaves the window.
- **Reference:** a calm developer-workspace screen recording; failure is neon glow and shader transitions.

## Colors

Paper `#F0EFE9`, panel `#F6F5F1`, ink `#0A0A0A`; window `#1D1F1F` with text `#EFEADD`; void `#0A0A0A` with tiles
`#111113`; clay `#D97757`; mint `#3CE6AC` to cyan `#00E3FF`.

## Typography

A bold geometric display for beats (fallback Hanken Grotesk 700), Hanken for UI, Spline Sans Mono for logs.

## Depth & Surface

Flat, 1px hairlines, a whisper shadow only; mono highlight bar in mint-soft.

## Shapes

Windows and cards 14px radius, controls 8px, pill chips; tiles 16:9.

## Frame Treatments

1. **Focused prompt:** dark full-bleed with composer and pet.
2. **Floating window on paper:** chat history building.
3. **Log screen:** full-bleed dark terminal.
4. **Word beat:** one large sans phrase on paper.
5. **Worker progress:** a worker log line with a progress bar.
6. **Zoom-through to grid:** window scales to reveal tiles.

## Composition Rules

### Do
- Cut between identical frames to hide seams; keep the perimeter alive (tiles playing, bars filling).
- Type-on at about 0.045s per character with a blinking caret.

### Don't
- Don't crossfade the whole film; don't overshoot beyond 1.04; don't let clay appear outside the window.

## Aspect-Ratio Behavior

16:9 primary. 9:16: window full width at bottom, tiles 2 columns.

## Numerals & Claims

Frame counts, fps and ETAs in logs are placeholders unless supplied.

## Pre-Render Self-Audit

- Paper, dark window and dark logs are distinct; clay only in the window.
- Progress bars move; no static frame over 1s.

## Known Gaps

- Source code lists a mint-to-cyan gradient on the key word of the word beat; not visible in the sampled frames (words are dark/grey), omitted.
- Source code lists dashed tile borders while generating; not visible in the sampled frames, omitted.
- Source code lists several parallel progress bars filling together; only one worker bar is visible in the sampled frames, omitted.
- Source code lists a mint-to-cyan progress fill; the visible bars are solid mint, softened.
