---
version: alpha
name: HyperFrames Launch — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HyperFrames launch film. A warm, calm, Apple-keynote register
  built on cream paper with a soft vignette. Instrument Serif display type with
  a gradient-shimmer on key words, a liquid-glass player card, dark translucent caption chips, and brief
  "flex worlds" (white cell grids, pastel 3D shapes, black ASCII close) that each break the home base.
unit: the frame — 1920×1080 primary
principle: light warm home base · one world per beat · economy of words

colors:
  paper: "#FBF4E3"
  paper-glow: "#FCF6E7"
  paper-edge: "#F6EDD4"
  ink: "#14110A"
  brown: "#2A1F0A"
  orange: "#C84F1C"
  gold: "#E2B53F"
  teal: "#2A8A7C"
  navy: "#3D405B"
  terracotta: "#E07A5F"
  sage: "#81B29A"
  sand: "#F2CC8F"
  cream-card: "#F4F1DE"
  hairline: "#E8E2D6"
  muted: "#8A7E6A"
  caption-chip: "rgba(10,8,5,0.55)"
  caption-text: "rgba(240,235,220,0.92)"

typography:
  hero:      { fontFamily: "Instrument Serif", px: 132, weight: 400, lineHeight: 1.05, italic: "alternate lines" }
  step-title:{ fontFamily: "Instrument Serif", px: 96, weight: 400 }
  ui:        { fontFamily: "Inter", px: 28, weight: 500 }
  caption:   { fontFamily: "Inter", px: 40, weight: 500 }
  mono:      { fontFamily: "JetBrains Mono", px: 28, weight: 400 }
  world-accents: "a different face per beat on purpose (Fraunces, Space Grotesk, Bebas Neue, EB Garamond italic, Cormorant italic, Azeret Mono)"

spacing:
  caption-bottom: "80px"
  edge: "5cqw"

components:
  glass-card:
    background: "white-to-cream card fill"
    radius: "28px"
    border: "1px solid {colors.hairline}"
    description: "Rounded liquid-glass player card that holds the presenter or a sample clip."
  caption-chip:
    background: "{colors.caption-chip}"
    color: "{colors.caption-text}"
    radius: "10px"
    placement: "bottom 80px, centred"
  shimmer-word:
    description: "Key words in the serif thesis shift colour from ink-brown to orange across the glyphs."
  cell-grid:
    description: "Full-bleed 6x3 grid of white cells on near-white, each running a micro CSS animation (rings, bars, dots)."
  ascii-close:
    description: "Black ground with amber ASCII letters resolving into the wordmark."
---

# HyperFrames Launch — Frame (video / frame layer)

## Overview

Cream paper is home base. The paper has two soft radial gradients (`#FCF6E7` to `#F6EDD4`) and a warm
vignette. (The film's source code also lists a 7% brown 1px grid, but it is not visible in the sampled frames, so it is left out.) Content sits centred, one focus at a time. Dark or saturated
worlds appear only as brief departures during a rapid montage, each with its own typeface and one saturated
colour, and the film ends on black with an amber ASCII wordmark.

**Key characteristics:**

- **Serif hero lines** in Instrument Serif, 96-132px, with alternating italic lines and a colour shimmer across the key word.
- **Presenter in a glass card** on cream; neon lettering in the footage stays inside the card.
- **Dark translucent caption chips**, bottom-centred, 40px Inter, rounded 10px.
- **Montage worlds**: white cell grids, soft pastel 3D rounded shapes with a serif caption, dark card diagrams, black ASCII.
- **Earth-pastel diagram set**: navy, terracotta, sage, sand on cream for process icons.

## The Frame

- **Squint:** one serif line or one card dominates; supporting text is 28px.
- **Silence:** at least half the frame is plain paper outside the montage.
- **Restraint:** one saturated colour per world; the home base stays warm cream.
- **Reference:** an Apple keynote on warm paper; failure looks like dark-mode developer branding.

## Colors

Paper `#FBF4E3`, ink `#14110A`, brown `#2A1F0A`. Shimmer stops `#5A3215`, `#C84F1C`, `#E2B53F`, `#2A8A7C`.
Pastel set `#F4F1DE #3D405B #E07A5F #81B29A #F2CC8F`. Hairline `#E8E2D6`, muted text `#8A7E6A`.

## Typography

Instrument Serif for headlines and step titles, Inter for UI and captions, JetBrains Mono for terminals and labels.
A different display face may appear per montage beat; the home base always returns to Instrument Serif.

## Depth & Surface

The player card is a rounded cream card with a thin hairline and a soft shadow. No film grain. Backgrounds live outside transition wrappers so they never move.

## Shapes

Rounded cards (about 28px), rounded caption chips, pill labels. Montage cells are soft squares.

## Frame Treatments

1. **Intro card:** presenter in a glass card on cream.
2. **Serif thesis:** two-line serif statement with a shimmer on one word.
3. **Cell-grid montage:** 6x3 white cells with micro-animations and a centred dark label tile.
4. **Pastel 3D world:** rounded pastel shapes with an italic serif caption.
5. **Process step:** small icon above a serif title and a mono sub-label.
6. **Fake workspace:** two-column terminal and preview window with macOS dots.
7. **ASCII close:** black ground, amber letters.

## Composition Rules

### Do
- Keep the home base light and warm; give each montage beat its own face and one saturated colour.
- Cut on spoken word boundaries; resolve entrances from blur.

### Don't
- Don't default to dark mode; don't reuse one family for every world; don't start in silence.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stack the serif lines, card at 90cqw width. 1:1: centred, hero 100px.

## Numerals & Claims

Keep demo text and terminal commands as placeholders unless supplied.

## Pre-Render Self-Audit

- Cream home base on at least the opening, thesis and close-before-black frames.
- One saturated colour per world; captions are dark chips.
- Hero serif 96px or larger; nothing static over 1s.

## Known Gaps

- Source code lists a 7% brown 1px grid on the paper; not visible in the sampled frames, omitted.
- Source code lists a warm radial "shutter flash" (screen blend) and a flash colour token; not visible in the sampled frames, omitted.
- Source code lists backdrop blur and saturate on the glass card and blur(8px) on caption chips; no blur is discernible in the sampled frames, omitted (chips read as flat dark translucent).
- Source code lists an 8-stop gradient incl. gold and teal on shimmer words; only a brown-to-orange shift is visible in the sampled frames, softened.
