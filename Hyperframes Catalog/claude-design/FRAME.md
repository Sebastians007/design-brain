---
version: alpha
name: Cream Product UI to Dark Reel — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the "HyperFrames in Claude Design" film. Two worlds: a warm cream
  product UI (rounded composer, coral Send button, cursor, typed prompt) and a dark cinematic capability
  reel where each full-frame mini-scene carries a translucent dark pill caption at bottom-centre.
  Opens on a black serif title and closes on a tracked serif wordmark with a rubber-stamp badge.
unit: the frame — 1920×1080 primary
principle: calm product UI then showreel punch · one pill caption per reel scene · serif for title moments

colors:
  paper: "#F3F4ED"
  paper-warm: "#F0EEE6"
  card: "#FCFCF9"
  ink: "#1A1A18"
  ink-soft: "#262521"
  muted: "#6E6A5E"
  hairline: "#DCDBD5"
  coral: "#D97757"
  navy: "#0E1524"
  near-black: "#08090B"
  beam: "#6F7BFF"
  peach: "#F6C9A0"
  lavender: "#C8B8F5"
  pink: "#F08CC0"
  mint: "#9BE8D0"
  stamp-kraft: "#D6A15C"
  pill-dark: "rgba(60,60,60,0.85)"
  white: "#FFFFFF"

typography:
  title-serif: { fontFamily: "Playfair Display / Copernicus-style serif", px: 64, weight: 400, color: "white" }
  eyebrow:     { fontFamily: "Inter", px: 14, weight: 500, tracking: "0.3em", upper: true }
  ui:          { fontFamily: "Helvetica Neue / Inter", px: 22, weight: 400 }
  pill:        { fontFamily: "Inter", px: 26, weight: 700, color: "white" }
  wordmark:    { fontFamily: "Source Serif", px: 112, weight: 700, tracking: "0.06em", upper: true }
  tagline:     { fontFamily: "JetBrains Mono", px: 16, tracking: "0.08em" }

components:
  composer-card:
    background: "{colors.card}"
    radius: "24px"
    shadow: "soft"
    parts: "prompt text, icon buttons (settings, attach, voice), 'Import' pill, coral 'Send' button with play glyph"
  cursor:
    description: "Large macOS arrow with smooth bezier travel and click highlight."
  pill-caption:
    background: "{colors.pill-dark}"
    typography: "{typography.pill}"
    radius: "10px"
    placement: "bottom-centre safe band at about 94% of height"
    motion: "fade + 8px rise, 0.3s, swapped on every cut"
  reel-scene:
    description: "Full-frame mini-scene proving range: brand-book collage, dark dashboard, 5x4 animation tile wall, pastel-gradient phone mockups, navy product-feature card with clocks."
  light-column:
    description: "Faint vertical beam over a dark title plate."
  rubber-stamp:
    color: "{colors.stamp-kraft}"
    description: "Rotated (-12deg) rough-edged badge 'MADE IN … ' stamped in with impact and drop shadow."
---

# Cream Product UI to Dark Reel — Frame (video / frame layer)

## Overview

The film moves between two worlds. **Cream paper**: a recreated product UI where a prompt is typed and
Send is pressed — flat, calm, coral as the only colour. **Dark cinematic reel**: a rapid tour of what the
tool can produce, each scene full-frame with a small bold chip caption at the bottom. It opens on a black
plate with an elegant serif title and closes on a wide-tracked serif wordmark with a kraft rubber stamp.

**Key characteristics:**

- **Black serif title opener**, small spaced-caps date underneath, faint light column.
- **Cream composer** with soft shadow and a coral Send; captions float over it as dark pills ('describe a video').
- **Reel scenes** each in a different aesthetic: brand-book collage on cream, dark dashboards, neon tile wall, pastel gradient phones, navy editorial card.
- **Pill captions** in the same position every cut; text swaps with a quick fade-rise.
- **Rubber-stamp ending** on a tracked serif wordmark over black, with a mono tagline and a small outlined button.

## The Frame

- **Squint:** one scene fills the frame; the pill is small and low.
- **Restraint:** the UI scenes use cream + ink + coral only.
- **Reference:** a product-launch showreel with an editorial title; failure is mixing UI and reel styles in one frame.

## Colors

Paper `#F3F4ED`, card `#FCFCF9`, ink `#1A1A18`, coral `#D97757`, navy `#0E1524`, near-black `#08090B`, beam
`#6F7BFF`, stamp kraft `#D6A15C`; pastel set peach/lavender/pink/mint for the gradient scene.

## Typography

High-contrast serif for titles and the wordmark; a neutral grotesk for the UI and pill captions; mono for the
tagline and tiny labels.

## Depth & Surface

Soft card shadows on cream; a faint light column and soft bloom on the dark title plate;
stamp has rough edges and a soft glow-like shadow.

## Shapes

Rounded card (24px), small rounded-rectangle caption chips, rounded phone mockups, rectangular tile wall.

## Frame Treatments

1. **Serif title:** black plate, 'A × B' title, spaced date.
2. **Composer close-up:** cream card with typed prompt, Import pill, coral Send.
3. **App window:** left chat rail plus a dark output player.
4. **Reel scene + pill:** any full-bleed scene with a bottom pill caption.
5. **Tile wall:** 5x4 grid of micro-animations.
6. **Gradient mockups:** three phones on a peach/lavender/pink gradient.
7. **Stamped wordmark:** tracked serif caps, rule, tagline, button, stamp.

## Composition Rules

### Do
- Hard-cut reel scenes in 1.5-2.5s with the caption swapping each time.
- Stamp the badge in with an impact scale.

### Don't
- Don't put pill captions over text that already says the same thing; don't use coral outside the Send button and cursor accents.

## Aspect-Ratio Behavior

16:9 primary (original is 1280x720). 1:1 variant exists: centred composer, stamp over square plate.

## Numerals & Claims

Dates, prompts and caption words are placeholders unless supplied.

## Pre-Render Self-Audit

- Cream UI scenes and dark reel scenes are distinct; pill caption in the same band every cut.
- Wordmark serif and tracked; stamp rotated.

## Known Gaps

- Source code lists paper grain and a dotted canvas on the cream UI; only faint panel lines are visible at the edges of one frame, grain/dots omitted.
- Source code lists lens bloom and fine particles on the light column; not visible in the sampled frames, omitted.
- Source code lists a 999px (fully round) pill caption; the frames show a small rounded rectangle (about 10px radius), corrected.
- Source code lists a drop shadow on the stamp; only a soft edge glow is visible, softened.