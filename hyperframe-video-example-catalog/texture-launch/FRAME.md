---
version: alpha
name: Texture-Masked Kinetic Type — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the texture-masks launch film. Off-white editorial paper with heavy
  black sans captions revealed word by word, interrupted by saturated flash-cut "poster stages" where one
  giant word is filled with a surface texture (paving stones, metal, brick) and surrounded by collage
  tiles and flat colour blocks, plus a frosted-glass card over a chrome-liquid shader.
unit: the frame — 1920×1080 primary
principle: one thing on screen, dead centre · the feature is the style · rhythm over decoration

colors:
  paper: "#F6F5F1"
  ink: "#0A0A0A"
  shader-ground: "#050508"
  lilac: "#C080FF"
  red: "#FF4050"
  butter: "#F0E0A0"
  tan: "#D0A070"
  cobalt: "#1050E0"
  orange: "#FF9000"
  pink: "#FF70B0"
  oxblood: "#A02030"
  yellow: "#F0D020"
  brown-multiply: "#693F26"

typography:
  caption:      { fontFamily: "Inter", weight: 900, px: 78, lineHeight: 0.96, note: "words as inline-block spans, gap 0.22em" }
  texture-word: { fontFamily: "Impact / Arial Black", weight: 900, px: 340, upper: true, lineHeight: 0.75 }
  texture-serif:{ fontFamily: "Georgia", weight: 700, style: italic, px: 400, upper: false, lineHeight: 0.8 }
  shader-word:  { fontFamily: "Inter", weight: 900, px: 260, upper: true, color: "white" }
  command:      { fontFamily: "IBM Plex Mono", weight: 700, px: 58 }

components:
  paper-caption:
    description: "One centred line of heavy black captions on off-white; words reveal one by one with blur-in."
  texture-word:
    css: "color: transparent; background-image: flat-fill + tileable texture PNG; background-blend-mode: multiply; background-clip: text"
    description: "Giant word filled with a surface texture; each 0.1s look nudges position/scale a few px like a flipbook."
  poster-stage:
    description: "Flat saturated ground (yellow is the one visible in the samples; other grounds are source-listed) with a thin faint inset frame line; collage tile, flat colour blocks and tiny mono label bottom-right ('PAVING STONES 150 / #F0D020')."
  glass-card:
    background: "linear-gradient(160deg, rgba(255,255,255,.13), rgba(255,255,255,.05) 42%, rgba(255,255,255,.02) 70%, rgba(255,255,255,.08))"
    backdrop: "blur(14px) saturate(1.12)"
    border: "1px solid rgba(255,255,255,0.18)"
    radius: "56px"
    description: "Inset card over a looping chrome-liquid shader; plain white text."
---

# Texture-Masked Kinetic Type — Frame (video / frame layer)

## Overview

Cream editorial paper (`#F6F5F1`) is the quiet base: one line of heavy black Inter captions, dead
centre, appearing word by word. Between caption beats the film flash-cuts to **poster stages**: a single
saturated colour fills the frame, a giant word is filled with a surface texture, and a collage tile plus
flat colour blocks and tiny mono tags frame it. One scene swaps to a dark chrome-liquid shader with a
frosted-glass card and huge white type. The close returns to paper with plain sans and mono command lines.

**Key characteristics:**

- **Caption rhythm:** Inter 900, 78px, tight leading, one line, blur-in per word.
- **Texture-filled words:** MASK / feel / Paving Stones — heavy condensed caps or large italic serif filled by a tileable texture.
- **Poster stages:** flat saturated colour, inset white frame, collage tile, flat colour blocks, selection handles and circles like a layout editor.
- **Shader glass card:** frosted card over a looping liquid-chrome video, 260px white 'SHADERS'.
- **Flipbook jitter:** the textured word shifts a few px and scale 0.99-1.015 every 0.1s.

## The Frame

- **Squint:** one thing on screen, centred.
- **Restraint:** paper scenes are black on off-white only; colour arrives as a full-frame flash.
- **Reference:** a kinetic-type explainer; failure is decoration without a rhythm.

## Colors

Paper `#F6F5F1`, ink `#0A0A0A`; visible flash ground yellow `#F0D020` (other flash grounds in the frontmatter are unconfirmed); shader ground near-black.

## Typography

Inter 900 for captions and shader words, Impact/Arial Black for condensed texture words, Georgia bold italic for
the serif texture words, IBM Plex Mono 700 for commands.

## Depth & Surface

Texture-filled words and the collage tile carry a soft, low shadow; the glass card is a faint frosted panel with a hairline edge. No other depth effects.

## Shapes

Glass card radius 56px; collage tile and colour blocks with soft 8-12px radius; handle circles.

## Frame Treatments

1. **Paper caption:** single line of heavy black type.
2. **Poster stage:** saturated ground, textured giant word, collage tile, colour blocks.
3. **Textured serif word:** italic serif filled with a pattern on yellow.
4. **Blur caption:** a faint, blurred word mid-reveal.
5. **Shader glass:** dark liquid chrome, frosted card, giant white word.
6. **Link/command:** URL in sans, command in mono, on paper.

## Composition Rules

### Do
- Keep one centred thing at a time; nudge the textured word every ~0.1s as a flipbook.
- Pair a texture word with at least one collage tile and two flat blocks.

### Don't
- Don't mix paper captions and colour inside the same frame; don't show more than one textured word at once.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stage words 240px, tile above, blocks below. 1:1: captions 64px.

## Numerals & Claims

Texture names and hex tags are labels; keep placeholders unless supplied.

## Pre-Render Self-Audit

- Paper scenes pure black on off-white; stages full-bleed colour.
- Texture words are readable (high contrast to the stage).

## Known Gaps

- Source code lists two soft radial blobs on the poster stage; not visible in the sampled frames, omitted.
- Source code lists chromatic cyan/magenta text-shadows and glass tints; not visible in the sampled frames, omitted.
- Source code lists a heavy glass-card box-shadow (0 30px 90px); not visible in the sampled frames, softened to a faint frosted panel.
- Source code lists stage grounds lilac, red, butter, tan, cobalt, orange, pink, oxblood; only yellow appears in the sampled frames, others kept in frontmatter as unconfirmed.