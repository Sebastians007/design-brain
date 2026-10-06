---
version: alpha
name: Butter-Yellow Kinetic Explainer — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the agent-skills film. A flat butter-yellow ground with big black
  tight-tracked kinetic sentences, one cyan keyword per line, mono directory trees where the matched row
  lights up cyan, and light cards floating with soft shadows. Friendly, sunny, tech-literate.
unit: the frame — 1920×1080 primary
principle: one accent word per sentence · the file tree is the visual · flat colour, soft shadows

colors:
  ground: "#FBF297"
  ground-end: "#F9F298"
  ink: "#0B0B0B"
  mono-ink: "#2B2B2B"
  cyan: "#18D1E8"
  green: "#35D65A"
  card: "#FCFFFF"
  card-mint: "#F0F4F1"
  card-dark: "#111111"
  prompt-bar: "#1B1B1B"
  shadow: "rgba(0,0,0,0.15)"

typography:
  display:   { fontFamily: "Hanken Grotesk", weight: 800, px: 84, tracking: "-0.03em", lineHeight: 1.0 }
  display-sm:{ fontFamily: "Hanken Grotesk", weight: 700, px: 60, tracking: "-0.03em" }
  keyword:   { fontFamily: "Hanken Grotesk", weight: 800, color: "cyan", note: "same size and weight as the line" }
  mono:      { fontFamily: "Spline Sans Mono", weight: 400, px: 32, color: "mono-ink" }
  mono-xl:   { fontFamily: "Spline Sans Mono", weight: 400, px: 56 }
  card-copy: { fontFamily: "Hanken Grotesk", weight: 500, px: 22 }
  stat:      { fontFamily: "Hanken Grotesk", weight: 800, px: 120, color: "cyan" }

components:
  kinetic-line:
    description: "Black heavy sentence, centred at about 45% height, revealed word by word, one cyan word."
  file-tree:
    description: "Mono tree (├─ └─) left-aligned in a centred group; the matched row turns cyan with a 'matched' tag, siblings dim to 35%."
  float-card:
    background: "{colors.card}"
    radius: "14px"
    shadow: "0 20px 60px {colors.shadow}"
    description: "Light UI card floating on the yellow; dark variant for terminal/animating card."
  agent-card-row:
    description: "Card left (about 40%), small mono 'AGENT TASK' label and a bold two-line role label right ('mapping audio cues')."
  prompt-bar:
    background: "{colors.prompt-bar}"
    description: "Dark bar with white mono typed request and blinking cursor."
  progress-bar:
    description: "Thin cyan bar on a pale track, fills linearly."
  tile-wall:
    description: "3x3 grid of mono workflow names on near-white that collapses into a big '9 workflows'."
---

# Butter-Yellow Kinetic Explainer — Frame (video / frame layer)

## Overview

A flat butter-yellow ground (`#FBF297`) carries everything. Headlines are heavy, tight-tracked black
grotesk sentences with a single cyan keyword; mono text shows the skill system working as directory
trees and a prompt bar. Product UI appears as light cards that float on the yellow with large soft
shadows. The one white scene is the tile wall of workflow names. The end is a black-and-green lockup.

**Key characteristics:**

- **One cyan word per sentence** ('the ground up', 'anyone', 'heygen.com').
- **Directory-tree-as-visual:** `skills/` list, "no skill?", then the routed tree with the matched file highlighted.
- **Floating cards** with deep soft shadows and light content; dark cards for terminals.
- **Typing/loader mono lines** ('understanding…', 'winging it…') centred on yellow.
- **Big cyan stat** on a light card ('175+ languages from one original video').
- **Montage collapse:** tiles gather into '9 workflows' with a green numeral.

## The Frame

- **Squint:** one black sentence on yellow, optically centred.
- **Restraint:** colour = yellow ground + black ink + cyan keyword (+ one green mark).
- **Reference:** a sunny dev-tool explainer; failure is a dark theme or multi-colour keywords.

## Colors

Ground `#FBF297`; ink `#0B0B0B`; mono `#2B2B2B`; cyan `#18D1E8`; green `#35D65A`; cards `#FCFFFF`, `#F0F4F1`,
dark `#111`; prompt bar `#1B1B1B`.

## Typography

Heavy grotesk 700-800 at -0.03em (60-84px at 720p, scale up for 1080p); Spline Sans Mono 400 for trees and
status lines; small grotesk 500 for card copy.

## Depth & Surface

No grain; flat colour with soft drop shadows only (`0 20px 60px rgba(0,0,0,.15)`). Words enter on the spoken beat.

## Shapes

Rounded cards (about 14px), square file icons, pill-free.

## Frame Treatments

1. **Kinetic sentence:** one line, one cyan word.
2. **File tree:** mono tree, matched row cyan.
3. **Loader line:** 'understanding…' in mono.
4. **Intro card:** pale card with bold name in cyan and a progress bar.
5. **File icon:** document with mono filename beneath.
6. **Agent card + label:** floating card, role label on the right.
7. **Stat card:** light card with big cyan number.
8. **Tile wall → numeral:** 3x3 names collapse to '9 workflows'.
9. **Lockup:** black wordmark with green logo mark.

## Composition Rules

### Do
- Land each word on the spoken beat; hard-cut or quick blur-fade on the same yellow.
- Dim non-matched siblings to ~35% opacity.

### Don't
- Don't add a second accent colour to keywords; don't use dark grounds except cards; don't bold the mono.

## Aspect-Ratio Behavior

16:9 primary. 9:16: sentences wrap to 3 lines at 90px; trees keep left alignment centred as a group.

## Numerals & Claims

Stats and workflow counts are placeholders unless supplied.

## Pre-Render Self-Audit

- Yellow ground flat; only one cyan word per line.
- Cards have soft shadows; mono is used for system text only.

## Known Gaps

- Source code lists a blur + rise word reveal; not visible in the sampled frames, omitted (word-by-word entry is kept).
