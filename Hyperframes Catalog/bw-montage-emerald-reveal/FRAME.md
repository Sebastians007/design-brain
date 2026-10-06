---
version: alpha
name: B&W Footage Montage to Emerald Reveal — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the "Mercury" reverse-engineered promo. A cinematic black-and-white
  stock-footage montage with deep blacks and bright highlights, short white text set directly over the
  footage mixing bold sans and light serif italic in one line, an emerald ink-in-water interlude, and a
  deep forest-green brand reveal with soft mint blobs that morph into a crescent glyph beside an italic
  serif wordmark. Monochrome tension released by a single green at the end. Values are estimates from
  sampled frames.
unit: the frame — 1920×1080 primary
principle: one metaphor per shot · text is static, footage moves · green only at the release

colors:
  crushed-black: "#050505"
  near-black: "#1A1A1A"
  highlight: "#F2F2F2"
  white: "#FFFFFF"
  emerald-dark: "#0F4F3A"
  emerald-light: "#5FE0A8"
  forest-start: "#04201A"
  forest-end: "#0B3D2E"
  mint-glow: "#B8FFE6"
  mint-glow-2: "#9FF5D0"

typography:
  bold-key:   { fontFamily: "Inter / Söhne Bold", px: 84, weight: 700, color: "white", tracking: "-0.02em" }
  serif-light-italic: { fontFamily: "Source Serif / Newsreader", px: 84, weight: 300, style: italic, color: "white" }
  serif-bold-italic:  { fontFamily: "Source Serif / Newsreader", px: 84, weight: 700, style: italic }
  serif-single: { fontFamily: "Source Serif / Newsreader", px: 90, weight: 400, note: "single words: Perps, Yield, making (upright); Instant, Seamless, Infinite (italic)" }
  wordmark:   { fontFamily: "Source Serif / Newsreader", px: 130, style: italic, weight: 400, color: "white" }

components:
  mono-grade:
    description: "Stock clips fully desaturated, deep blacks, bright highlights; shallow depth of field on screens; motion streaks on vehicles and road."
  mixed-line:
    description: "One centred line mixing bold white sans for the key words and light serif italic for connectives ('The *fastest* platforms…', '*They* scale.')."
  single-word-beat:
    description: "One centred word in upright or italic serif over footage (Perps / Yield / Instant)."
  ink-interlude:
    description: "Emerald ink-in-water macro behind a short line; the only colour before the reveal."
  shot-metaphor:
    description: "Every shot illustrates the word: rocket = fast, cubes = scale, rising arrow = dominate, cars = race, puzzle cube = seamless, banknote = opportunity, table = perps, orbs = yield, clock tower = time."
  metaball-reveal:
    description: "Mint blobs enter from the corners on a deep forest-green ground, soft-edged, morphing into a crescent glyph."
  lockup:
    description: "Crescent glyph left, italic serif wordmark right, centred."
---

# B&W Footage Montage to Emerald Reveal — Frame (video / frame layer)

## Overview

A VO-driven manifesto over a **monochrome stock-footage montage**. Each shot lasts about 1-2.5 seconds and
is a literal metaphor for the word on screen. The text is small, white, centred and **static** while the
footage supplies all the motion. A single emerald ink-in-water interlude hints at the brand colour. The
last six seconds slow down: a deep forest-green ground, soft mint blobs that morph into a
crescent mark, and a wordmark set in italic serif.

**Key characteristics:**

- **Mixed type in one line:** bold white grotesk + light serif italic; single words upright or italic.
- **Black-and-white grade:** deep blacks, bright highlights, shallow depth of field.
- **One word per shot,** each shot a metaphor; hard cuts every 1-2.5s.
- **Emerald interlude** as the only colour until the end.
- **Metaball brand reveal:** mint blobs from the corners, crescent glyph, italic serif name.

## The Frame

- **Squint:** one shot and one short line of white text at about 50% height.
- **Restraint:** no colour until the interlude and the reveal; text is pure white.
- **Reference:** a premium fintech manifesto; failure is colour footage or animated text over busy shots.

## Colors

Crushed blacks `#050505`–`#1A1A1A`, highlights near-white; interlude `#0F4F3A → #5FE0A8`; reveal ground
`#04201A → #0B3D2E`; mint `#B8FFE6` / `#9FF5D0`; text pure white.

## Typography

A bold grotesk for key words and a light high-contrast serif italic for connectives; italic serif wordmark
about 130px.

## Depth & Surface

Rack-focus on screens; motion streaks on road and cars; soft blurred edges on the mint blobs.

## Shapes

Organic blobs and a crescent glyph in the reveal; otherwise full-bleed footage.

## Frame Treatments

1. **Top-third title over launch footage:** line at 20% height.
2. **Centred line over footage:** mixed bold/serif line at 50%.
3. **Single word beat:** one serif word over a screen or banknote.
4. **Ink interlude:** short line over emerald macro.
5. **Quiet black:** a small word over soft dark blurred shapes.
6. **Metaball reveal:** mint blobs on forest green.
7. **Lockup:** glyph + italic wordmark.

## Composition Rules

### Do
- Sync word reveals to the voice (0.3-0.5s per word); hard-cut every 1-2.5s.
- Keep text static; let footage keep its camera motion.

### Don't
- Don't colour the footage; don't animate text heavily over busy shots; don't introduce green before the interlude.

## Aspect-Ratio Behavior

16:9 primary. 9:16: lines at 72px over cropped footage; lockup stacked. 1:1: 64px.

## Numerals & Claims

All copy is placeholder; use only licensed footage.

## Pre-Render Self-Audit

- Footage is monochrome until the interlude and reveal.
- Text is white, centred, and lower than 90px.

## Known Gaps

- Source code lists grain and halation on glow areas; not clearly visible in the sampled frames, omitted.
- Source code lists crushed blacks, bloom on the metaballs and a glow on the lockup; blobs read as soft-edged flat mint, bloom/glow omitted.
- Source code lists a radial forest-green gradient ground; frames show a dark-to-lighter green wash, kept only as 'deep forest-green ground'.
