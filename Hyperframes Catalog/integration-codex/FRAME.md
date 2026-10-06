---
version: alpha
name: Lavender Card to Dark Demo (Partner Integration) — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HyperFrames x Codex integration film. It opens in the partner's
  light lavender product world (a big white rounded card on a lavender-to-periwinkle gradient with
  swapping bold/grey copy and one key word in a black pill), drops into tight-cropped screen recordings
  of a dark desktop app, goes to a black title section with green accents, and ends on a clean white
  logo lockup. Brand world flips partner (light) → host (dark/green) → white.
unit: the frame — 1920×1080 primary
principle: demo-first · one idea per card · light → dark → white

colors:
  lavender: "#E6E4FA"
  periwinkle: "#6F6BE8"
  card: "#FFFFFF"
  partner-violet: "#6C63F0"
  partner-violet-2: "#8E7CF8"
  app-dark: "#1B1B1B"
  app-dark-2: "#222222"
  app-text: "#EDEDED"
  green: "#2EE59D"
  green-2: "#35E07A"
  black: "#07090A"
  white: "#FFFFFF"
  ink: "#0A0A0A"

typography:
  card-emphasis: { fontFamily: "Inter", px: 96, weight: 800 }
  card-connective: { fontFamily: "Inter", px: 96, weight: 500, color: "#8A8A90" }
  pill-word: { fontFamily: "Inter", px: 96, weight: 800, color: "ink", pillBackground: "white", note: "white pill with dark text on the dark player card" }
  title:     { fontFamily: "Inter", px: 72, weight: 700, color: "white" }
  sub:       { fontFamily: "Inter", px: 18, color: "#9A9A9A" }
  eyebrow:   { fontFamily: "JetBrains Mono", px: 12, tracking: "0.2em", upper: true, color: "green" }

components:
  swap-card:
    background: "{colors.card}"
    radius: "28px"
    placement: "centred, about 80% width, on the gradient"
    description: "Persistent card whose copy swaps about every 2s; the key word pops (slight overshoot) in a pill."
  mini-timeline:
    description: "Small editor mock: a few pale horizontal track bars and a vertical playhead."
  screen-recording:
    description: "Real app capture, cropped 2-3x to the sidebar / search / install button, then pulled back over a swirl wallpaper; macOS cursor."
  title-stack:
    description: "Centred bold white two-line title on black with a tiny green logo/eyebrow above and subcopy, CTA pill and ghost link below."
  logo-lockup:
    description: "Partner and product marks side by side on black, then the parent wordmark on white."
---

# Lavender Card to Dark Demo (Partner Integration) — Frame (video / frame layer)

## Overview

A partner-integration announcement in three brand worlds. **Light**: a white rounded card floats on a
lavender gradient while bold and grey words swap inside it ('now becomes… your video [editor]'), with a
tiny timeline mock growing. **Demo**: a real dark desktop app is recorded — plugins page, search, install
dialog, prompt, file diffs — with tight zooms and blurry whip transitions. **Dark title / logos**: bold white
type on black with green accents, a split logo lockup, and a pure white end card.

**Key characteristics:**

- **Swap card** with 500-weight grey connective words and 800-weight black emphasis words.
- **Pill** (white with dark text) around the key noun ('editor').
- **Screen-recording demo** with a macOS cursor, typed prompts and zoom-to-region crops.
- **Dark title** on near-black.
- **Split lockup** (partner left, product right) separated by a hairline.
- **White end** with a black wordmark and a prismatic gem.

## The Frame

- **Squint:** the white card, the recording crop, or the title stack.
- **Restraint:** lavender gradient only in the opener; green only on the dark sections.
- **Reference:** a calm partner announcement; failure is mixing the light and dark worlds in one frame.

## Colors

Lavender `#E6E4FA` to periwinkle `#6F6BE8`; card white; app dark `#1B1B1B`; green `#2EE59D`; near-black
`#07090A`; end white.

## Typography

Inter in 500/800 weights for the cards and title; JetBrains Mono for tiny eyebrows and stamps.

## Depth & Surface

Gradient bleed around the card; directional motion blur on zoom/whip transitions; black grounds are flat.

## Shapes

Large rounded card (28px), pill for the key word, white CTA pills, rounded dark app windows.

## Frame Treatments

1. **Swap card:** copy swaps inside the white card on lavender.
2. **Plugins page crop:** dark app, hero banner, search field.
3. **Install dialog:** centred modal with a white button.
4. **Prompt composer:** dark composer with a typed request.
5. **Diff list:** changed files with green/red counts.
6. **Embedded player:** timeline editor with a green scrub bar and a card reading 'your video editor'.
7. **Dark title:** two-line bold white statement.
8. **Split lockup:** two marks, hairline between.
9. **White end:** wordmark and gem.

## Composition Rules

### Do
- Keep one idea per card; pop the pill word with a slight overshoot.
- Zoom to the region the viewer should read.

### Don't
- Don't mix gradient and black grounds in a frame; don't show partner logos you don't have rights to.

## Aspect-Ratio Behavior

16:9 primary. 9:16: card 90cqw, words 72px stacked. 1:1: card 86cqw.

## Numerals & Claims

All UI text is placeholder unless captured from the real app.

## Pre-Render Self-Audit

- Exactly one brand world per frame.
- Key word pill present in the card section.

## Known Gaps

- Source code lists a soft wide card shadow; not visible in the sampled frames, omitted.
- Source code lists a faint green radial glow on the black title; not visible, omitted (green-glow token removed).
- Source code lists a chroma smear on whip transitions; only blur is visible, omitted.
- Source code lists a bracketed HUD frame with diamond ornament and green bars; not visible, component omitted.
- Source code lists a black pill with white text and black/blue/green timeline bars; the visible pill is white with dark text and the timeline bars are pale, corrected.
