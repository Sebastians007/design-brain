---
version: alpha
name: Cream Workspace with Clay Accent — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the PR-to-video launch film. A believable developer-workspace session
  on warm cream paper: floating light chat and PR windows with soft shadows, a dark terminal window with
  traffic-light dots, large editorial serif statements with clay-orange stat numbers, and a generated-video
  preview card (black headline above, scrubber below). Clay does all the emphasis; there is no second
  brand accent. Calm, workspace-real, dev-native.
unit: the frame — 1920×1080 primary
principle: one window or one statement per scene · clay is the only emphasis · crossfade not cut

colors:
  cream: "#F0EFE9"
  terminal: "#1D1F1F"
  panel: "#2C2C2B"
  terminal-text: "#EFEADD"
  muted: "#8C8B83"
  muted-2: "#6F6E66"
  clay: "#D97757"
  clay-2: "#CC785C"
  light-panel: "#FAF9F5"
  hairline-1: "#E6E2D6"
  hairline-2: "#CFCABD"
  hairline-3: "#DDD6C8"
  gh-text: "#1F2328"
  gh-resolved: "#2F6B3D"
  slack-aubergine: "#4A154B"
  traffic-red: "#FF5F57"
  traffic-yellow: "#FEBC2E"
  traffic-green: "#28C840"

typography:
  statement: { fontFamily: "Galaxie Copernicus Book (fallback Newsreader)", px: 72, weight: 400 }
  stat:      { fontFamily: "Hanken Grotesk", px: 56, weight: 500, color: "clay" }
  headline:  { fontFamily: "Hanken Grotesk", px: 44, weight: 700, color: "ink", placement: "above the preview card" }
  terminal:  { fontFamily: "Spline Sans Mono", px: 28, weight: 400, color: "terminal-text" }
  ui:        { fontFamily: "Hanken Grotesk", px: 18, weight: 500 }

components:
  terminal-window:
    background: "{colors.terminal}"
    radius: "14px"
    shadow: "soft, wide"
    chrome: "traffic-light dots, title 'claude — ~/project'"
    parts: "chip row (Local, project, +), meta row (Auto, model, High), composer 'Reply to Claude…' with enter key"
  chat-window:
    description: "Light team-chat app: aubergine sidebar, channel list, message with avatar, composer; cursor clicks a link."
  pr-page:
    description: "Light PR 'Files changed' list: file paths in mono with +/- counts in green/red; scrolls with a whip-pan."
  preview-card:
    background: "{colors.terminal}"
    radius: "12px"
    placement: "centred, headline above, scrubber with time below"
    description: "Generated-video preview with caption 'file.mp4 — scene N / 6'; one panel per scene (code diff, comments thread, credits)."
  stat-pair:
    description: "Large clay number with a small grey label ('629 files changed', '87,… lines removed') beside a serif statement."
  caret-line:
    description: "Typed closing line with a blinking black caret and one clay word."
---

# Cream Workspace with Clay Accent — Frame (video / frame layer)

## Overview

A single, believable session told on warm cream paper (`#F0EFE9`). A colleague's agent asks for a review in a
chat app; a PR page shows 629 changed files; a serif statement says the PRs are super long; a dark terminal
gets a command; and a preview card plays the generated explainer one scene at a time with a black
headline above ('… shows your code', '… shows people's comments', '… credits contributors'). The close types
a call to action with one clay-orange word.

**Key characteristics:**

- **Cream ground,** floating light windows with soft shadows.
- **Dark terminal window** with traffic-light dots, chips and composer.
- **Editorial serif statements** with clay-orange stat numbers and small grey labels.
- **Preview card** with the file name and 'scene N / 6' caption, a progress scrubber and a black headline above.
- **Clay as the only emphasis;** no brand accent.
- **Crossfade seams** (about 0.3s) between most scenes.

## The Frame

- **Squint:** one window, or one statement with stats.
- **Restraint:** clay is the only colour; cream, ink and terminal-dark carry the rest.
- **Reference:** a calm screen-recorded dev session; failure is glow, grain or shader transitions.

## Colors

Cream `#F0EFE9`; terminal `#1D1F1F` / `#2C2C2B`; text `#EFEADD`; clay `#D97757`; hairlines `#E6E2D6 / #CFCABD`.

## Typography

Hanken Grotesk for UI and headlines, Spline Sans Mono for terminals, code and file paths, an editorial serif
for statement words, a bold grotesk for the closing line.

## Depth & Surface

Flat; depth by lightness and hairlines; soft shadows under floating windows. Blinking caret with steps(1).

## Shapes

Windows 12-14px radius, round avatars, small rounded chips.

## Frame Treatments

1. **Chat window:** sidebar + message + composer.
2. **PR files list:** scrolling list of paths beside a serif statement with stats.
3. **Dark text beat:** short phrase in white on dark.
4. **Terminal prompt:** window with composer and a typed command.
5. **Terminal thinking:** user line right-aligned, status rows, composer.
6. **Preview + headline:** black headline above a dark preview card.
7. **Credits:** avatar row with roles.
8. **CTA:** icon, 'Create…' typed, clay word, command composer.

## Composition Rules

### Do
- Keep scenes short (0.9-5.2s); match typed prompts with a typing sound.
- Hold the preview card layout identical between scenes and swap only the panel.

### Don't
- Don't add a second accent colour; don't use hard cuts where a 0.3s crossfade fits.

## Aspect-Ratio Behavior

16:9 primary. 9:16: window 92cqw, statement 56px, stats stacked.

## Numerals & Claims

File counts, PR numbers and names are placeholders unless supplied.

## Pre-Render Self-Audit

- Cream ground in at least the opening, statement and end frames.
- Clay is the only accent; terminal windows have traffic lights.

## Known Gaps
- Source code lists a pixel-pet creature on the terminal composer; not visible in the sampled frames, omitted.
- Source code lists an Archivo Black heavy display phrase ('Hard to read'); not visible in the sampled frames, omitted.
- Source code lists a zoom-through at the start; not visible in still frames, omitted.
