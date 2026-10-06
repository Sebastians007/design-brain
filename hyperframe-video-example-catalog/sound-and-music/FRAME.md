---
version: alpha
name: Cream Paper Click-Joke — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the SFX-and-music launch film. Warm editorial cream paper with
  one rationed clay accent (a thin progress line at the top), chunky dark "Click SFX"
  buttons with a speaker icon and an oversized cursor, heavy dark sans statements, and dark terminal windows
  as the only dark objects, with a pixel pet on the prompt box. A running joke about a silent launch video.
unit: the frame — 1920×1080 primary
principle: paper is the stage · terminals are the only dark objects · clay is rationed

colors:
  paper: "#F0EEE6"
  ink: "#262624"
  ink-serif: "#2B2926"
  muted: "#6F6E66"
  hairline: "#DCD8CC"
  clay: "#D97757"
  clay-press: "#BF6044"
  clay-text: "#A8472A"
  clay-light: "#E89F7A"
  terminal: "#1F1F1E"
  composer: "#2C2C2B"
  on-accent: "#FBF7F0"
  chip-text: "#EFEADD"
  progress-pink: "#E8B7B0"
  white: "#FFFFFF"

typography:
  big-line:  { fontFamily: "Hanken Grotesk", cqw: 8.0, weight: 800, tracking: "-0.03em" }
  mid-line:  { fontFamily: "Hanken Grotesk", cqw: 4.6, weight: 600, lineHeight: 1.4 }
  button:    { fontFamily: "Hanken Grotesk", cqw: 5.25, weight: 600, color: "on-accent" }
  mono:      { fontFamily: "Spline Sans Mono", weight: 400, px: 22 }

components:
  sfx-button:
    background: "{colors.ink}"
    radius: "18px"
    shadow: "soft"
    parts: "speaker glyph + 'Click SFX' label in cream"
    description: "Large dark button centred on paper; the cursor presses it with a scale-0.84 click and a ripple."
  cursor:
    description: "Oversized white-filled arrow cursor; button spam every ~0.2s."
  progress-line:
    color: "{colors.progress-pink}"
    description: "Thin pinkish line across the very top of the frame that grows with time."
  terminal-window:
    background: "{colors.terminal}"
    radius: "14px"
    chrome: "traffic-light dots, Local / CC chips, composer 'Describe a task…', amber 'Auto' pill, + mic, model name, High, orb"
  pixel-pet:
    color: "{colors.clay}"
    description: "Animated pixel creature perched on the prompt box's top-right edge."
  logo-sequence:
    description: "Black logo mark, then the wordmark with a green mark, then a lone iridescent gem on white."
---

# Cream Paper Click-Joke — Frame (video / frame layer)

## Overview

A running joke: a launch video is clicked through in **dead silence**, then SFX are added, then music, and
the film "hears itself". Cream paper (`#F0EEE6`) is the stage for every scene; the only dark objects are the
terminal windows and the big dark button. Clay is the single accent: a thin progress line, and a pixel pet. The film ends on a logo mark, the wordmark, and a lone iridescent gem on white.

**Key characteristics:**

- **Flat cream paper;** centred bold statements at 600-800 weight.
- **Giant dark button** with a speaker icon and a huge cursor tapping it.
- **Terminal windows** that mask-open from the centre and explode out.
- **Pixel pet** idling on the prompt box.
- **Thin clay progress line** along the top edge.
- **Mark → wordmark → gem** as the closing sequence.

## The Frame

- **Squint:** one button, one sentence, or one terminal.
- **Restraint:** cream and ink with one clay accent; terminals are the only dark.
- **Reference:** a witty product sting; failure is adding a second colour or a dark ground for statements.

## Colors

Paper `#F0EEE6`, ink `#262624`, clay `#D97757`, terminal `#1F1F1E`, composer `#2C2C2B`, cream button text
`#FBF7F0`.

## Typography

Hanken Grotesk 800 for big lines (−0.03em), 600 for mid lines and the button label, Spline Sans Mono for terminals. Sizes in container units so scenes scale.

## Depth & Surface

Flat paper; a soft
shadow under the button and terminals.

## Shapes

Rounded button (18px), rounded terminals (14px), chips.

## Frame Treatments

1. **Button + cursor:** dark button centred, cursor over the label.
2. **Statement + button:** a line above, the button below.
3. **Statement right:** one line placed right of centre.
4. **Terminal composer:** dark composer with chips and pet.
5. **Typed request:** prompt text typing, send arrow.
6. **Terminal window chat:** user line right, status line left.
7. **Word swap:** 'Music and…' with words sliding.
8. **Mark / wordmark / gem:** closing sequence.

## Composition Rules

### Do
- Exit with a cut-the-curve (throw left, 0.26s) then hard cut; text waterfalls enter from the right.
- Click with a quick squash (scale 0.84) and a ripple ring.

### Don't
- Don't use more than one clay element per frame; don't put statements on dark.

## Aspect-Ratio Behavior

16:9 primary. 9:16: button 80cqw, statements 3 lines. 1:1: button 70cqw.

## Numerals & Claims

None; all text is the script's.

## Pre-Render Self-Audit

- Cream stage; only terminals are dark.
- Clay appears once or twice per frame at most.

## Known Gaps
- Source code lists a dot grid on cream scenes; not visible in the sampled frames, omitted.
- Source code lists a gradient-clipped word ('free') and a single-word serif beat ('Boring.'); neither visible in the sampled frames, omitted.
- Source code lists a cyan-to-green gradient fill on the logo mark and 10-18px blur motion; not visible in the sampled frames, omitted.
