---
version: alpha
name: Kinetic Manifesto Cards + Tutorial — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the community / open-playground launch film. A manifesto of kinetic
  typography where every line gets its own colour world and typeface (heavy tight grotesk on navy, black,
  forest green with butter yellow, peach with a retro serif), then a calm screen-recorded tutorial over a
  blue wallpaper with burned-in captions, and a close on a corner-bracketed dark title card. Energetic and
  editorial first half; calm and tool-like second half.
unit: the frame — 1920×1080 primary
principle: one statement per card · the key word 2× larger · each card its own world

colors:
  glitch-black: "#050806"
  matrix-green: "#1E6B3A"
  navy: "#0E1030"
  periwinkle: "#7B6CF0"
  near-black-green: "#0A1A12"
  deep-green: "#1F5C34"
  black: "#0A0A0C"
  hf-green: "#2EE59D"
  forest: "#0F4D3A"
  butter: "#F5E04A"
  peach: "#FCE3CC"
  coral: "#F26B3A"
  mint: "#BDEFD0"
  brown: "#6B4A3A"
  pink-dot: "#E8387E"
  blue-grad-a: "#3B82F6"
  blue-grad-b: "#8B5CF6"
  terminal: "#0B0B12"
  cmd-cyan: "#35C8F0"
  cmd-coral: "#F08A6A"
  white: "#FFFFFF"

typography:
  statement:   { fontFamily: "Inter Tight", px: 130, weight: 800, tracking: "-0.04em", lineHeight: 0.95 }
  key-word:    { fontFamily: "Inter Tight", px: 260, weight: 800, tracking: "-0.04em", note: "2:1 size contrast with its line" }
  retro-serif: { fontFamily: "Recoleta / Cooper-style", px: 150, weight: 900, color: "brown" }
  terminal:    { fontFamily: "JetBrains Mono", px: 40, weight: 400 }
  caption:     { fontFamily: "Inter", px: 24, weight: 700, color: "white", background: "dark rounded pill or text-shadow" }
  url-mono:    { fontFamily: "JetBrains Mono", px: 18, color: "white" }

components:
  glitch-open:
    description: "Black with green matrix rain at the edge; a slanted, stacked card holding a presenter clip."
  statement-card:
    description: "Left-aligned oversized text on a flat colour world; last line's key word much larger and in the accent colour."
  retro-blob-card:
    description: "Warm cream/peach flat ground card (decorations and serif words not captured in the sampled frames)."
  gradient-url:
    description: "Blue-to-violet gradient text for the URL on near-black with a soft cyan/orange glow."
  terminal-line:
    description: "Large '$' in violet, command words cyan and coral, caret; caption strip beneath."
  recorded-demo:
    description: "Browser/app window at about 80% width over a blue/orange swirl wallpaper; caption pill at bottom."
  corner-brackets:
    description: "Four thin white corner brackets framing the closing statement and mono URL."
---

# Kinetic Manifesto Cards + Tutorial — Frame (video / frame layer)

## Overview

The first half is **maximalist and editorial**: each statement is its own card with its own palette and
typeface — navy with periwinkle, black with white, forest green with butter yellow, peach with a retro
serif. Text is oversized, left-aligned, two or three lines, with the key word set about twice as large.
The second half is **calm and tool-like**: a terminal line, then a screen-recorded demo with caption pills,
and a final bracketed title.

**Key characteristics:**

- **Colour world per line;** no two statement cards share a ground.
- **Key-word scale contrast** (2:1) and accent colour on the last line.
- **Glitch opener:** matrix rain on a tilted presenter card.
- **Warm card:** a flat cream/peach ground.
- **Gradient-text URL** on a dark soft-glow ground.
- **Recorded tutorial:** real UI at 80% width over swirl wallpaper, captions in a rounded pill.
- **Viewfinder end:** four corner brackets, white heavy type, mono URL.

## The Frame

- **Squint:** one statement dominates; key word biggest.
- **Restraint:** a card uses one ground and at most two text colours.
- **Reference:** an editorial manifesto then a how-to; failure is the same ground and font on every card.

## Colors

See the frontmatter; each card chooses a ground/accent pair from the list. Demo scenes use HF dark UI over a
blue/orange wallpaper with `#2EE59D` highlights.

## Typography

Heavy tight grotesk (800, −0.04em) for most statements; a chunky retro serif for the warm card; mono for the
terminal; small bold sans for captions.

## Depth & Surface

Matrix rain on the opener; soft glow on the URL card. Cards and demo windows are flat.

## Shapes

Flat colour grounds; rounded app windows; caption pills/strips.

## Frame Treatments

1. **Glitch presenter card:** tilted card on matrix rain, captioned.
2. **Navy statement:** two lines, key word big in periwinkle.
3. **Black statement:** heavy white sentence top-left.
4. **Forest + butter:** short phrase, butter-yellow text (not in sampled frames).
5. **Warm card:** flat cream/peach ground, chunky serif words (decor not in sampled frames).
6. **Gradient URL:** 'That's why today…' + gradient domain.
7. **Terminal command:** large mono line with caption strip.
8. **Recorded demo:** UI over wallpaper with a caption pill.
9. **Bracketed close:** two-line statement, mono URL.

## Composition Rules

### Do
- Give each statement its own ground and typeface family; keep text left-aligned and oversized.
- Keep the demo half quiet: slow cursor, captions word-synced.

### Don't
- Don't reuse a card palette twice in a row; don't centre statement text except the end card.

## Aspect-Ratio Behavior

16:9 primary. 9:16: statements wrap to 4 lines at 150px, demo window full width. 1:1: 110px type.

## Numerals & Claims

URLs and commands are placeholders unless supplied.

## Pre-Render Self-Audit

- Each statement card a different world; key word 2× larger.
- Demo half uses a captioned recording with a pill.

## Known Gaps

- Source code lists an RGB-split (magenta/cyan/yellow) edge and chroma tear; not visible in the sampled frames, omitted.
- Source code lists a coral blob, mint circle, pink dot and brown retro-serif words on the peach card; only a blank cream ground is sampled, decorations omitted.
- Source code lists a window shadow on the demo; not visible, omitted.
- Forest-green + butter-yellow card is not in the 12 sampled frames; kept only as a listed treatment, unverified.
