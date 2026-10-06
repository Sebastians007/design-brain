---
version: alpha
name: Spec World to Candy Frame World — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the frame.md launch storyboard film. It argues by changing style:
  it starts in a clean off-white "spec world" of monospace type and a tilted black document, then flips
  to a warm, playful "frame world" — cream ground, fat rounded display type, candy pastel spheres and
  pills, handwritten margin notes, magenta mono spec text and soft blurred colour glows. Highlighter-style
  captions in pink and yellow.
unit: the frame — 1920×1080 primary
principle: the document is the protagonist · morph, don't cut · big type, lots of cream

colors:
  page: "#F7F7F5"
  ink: "#050505"
  gray-1: "#A0A0A6"
  gray-2: "#6E6E74"
  syntax-orange: "#FF9B2F"
  syntax-green: "#61E675"
  slide-ground: "#0B0B0C"
  cream: "#FFFAF0"
  pink: "#FF4D8B"
  peach: "#FFB084"
  pink-soft: "#FFC1D5"
  peach-soft: "#FFD9BF"
  butter: "#FFE9A3"
  gold: "#E8B94A"
  mint: "#A4D4C5"
  lilac: "#B8A4ED"
  magenta: "#EF00E4"
  deep-teal: "#1A3A3A"
  chroma-blue: "#0007CD"

typography:
  hook:      { fontFamily: "JetBrains Mono", px: 122, weight: 900, note: "typed token, 8px caret, overtype swap" }
  spec-h1:   { fontFamily: "SF Mono / ui-monospace", px: 50, weight: 700 }
  spec-body: { fontFamily: "SF Mono / ui-monospace", px: 24, color: "magenta" }
  big-word:  { fontFamily: "Cooper Black (fallback Arial Rounded MT Bold)", px: 220, weight: 900, tracking: "-0.04em" }
  statement: { fontFamily: "Inter", px: 64, weight: 800, tracking: "-0.03em" }
  hand:      { fontFamily: "Just Another Hand", px: 80, note: "margin annotation, rotated individual letters" }
  caption:   { fontFamily: "Inter", px: 26, weight: 800 }

components:
  tilted-document:
    description: "A black rounded page in real 3D (rotateX ≈ 29°, rotateZ ≈ −13°) with white mono heading; reshapes into a window, then a full-bleed slide."
  candy-sphere:
    description: "Pastel spheres (lilac, mint, gold, peach) floating in corners floating in corners."
  pastel-pill:
    background: "{colors.lilac}"
    radius: "999px"
    description: "A chat-bubble pill carrying a statement ('how long a message can live') above a thin black progress bar with a peach knob."
  chroma-word:
    description: "Fat rounded word with a magenta-left and blue-right offset ('frame.md'), like misregistered print."
  highlight-caption:
    background: "pink bar with yellow highlighted key phrase"
    description: "Bottom captions: pink pill, key phrase on yellow, dark text."
  mini-card:
    background: "white"
    border: "2px solid ink, slight rotation"
    description: "Small tilted paper card ('design.md') with coloured bars and four swatches, a gold plus badge beside it."
  glow-blobs:
    description: "Soft blurred pink, lilac and butter blobs behind cards on cream."
---

# Spec World to Candy Frame World — Frame (video / frame layer)

## Overview

The film **performs its argument**. First half: a clean off-white page, mono type, a black document that
tilts in 3D and reshapes into a web UI and then a slide — the "wrong" output. Second half: a cream ground
filled with candy colour — fat rounded type, pastel spheres, pill bubbles, hand-drawn annotations and soft
glows. Transitions are **morphs** of shared elements rather than cuts.

**Key characteristics:**

- **Spec world:** off-white, black monospace, typed 'DES.md' overtyped to 'FRAME', black tilted document.
- **Frame world:** cream `#FFFAF0`, huge Cooper-style words, pastel spheres, lilac pill, black progress bar with peach knob.
- **Chromatic offset word:** magenta/blue ghost edges around 'frame.md'.
- **Magenta mono spec text** on white for code-like snippets (`## Hero Band`).
- **Handwritten annotations** with individually rotated letters.
- **Highlighter captions:** pink pill with yellow key phrase.
- **Blurred glows** (pink, lilac, butter) behind small white tilted cards with 2px ink borders.

## The Frame

- **Squint:** one huge word or one statement on cream; lots of empty space.
- **Restraint:** spec scenes are monochrome; candy colours appear only in the frame world.
- **Reference:** a playful design-system explainer; failure is mixing both worlds in one frame.

## Colors

Spec: `#F7F7F5`, `#050505`, grays, orange/green syntax accents. Frame: cream `#FFFAF0`; pink `#FF4D8B`; peach
`#FFB084`; butter `#FFE9A3`; gold `#E8B94A`; mint `#A4D4C5`; lilac `#B8A4ED`; magenta `#EF00E4`.

## Typography

Mono for the spec world; a fat rounded display for frame-world words; Inter for statements and captions; a
handwritten font for annotations.

## Depth & Surface

Tilted black document with a soft shadow; soft card and pill shadows; blurred colour blobs; pastel spheres.

## Shapes

Rounded black pages, pill bubbles, circles for spheres, small tilted cards with ink outlines.

## Frame Treatments

1. **Typed hook:** mono token on off-white.
2. **Tilted document:** black page with a white mono title.
3. **Strawman UI / slide:** dark slide with kicker, title, footer.
4. **Statement on cream:** bold two-line statement with spheres.
5. **Pill + progress:** lilac pill above a thin progress bar.
6. **Chroma word:** giant 'frame.md' with offset ghosts.
7. **Magenta spec page:** white ground, magenta mono heading and paragraph.
8. **Mini card + swatches:** 'design.md' card, gold plus, handwritten label.

## Composition Rules

### Do
- Morph shared elements between scenes; use steps(6) typewriter for mono hooks.
- Arrive with expo.out.

### Don't
- Don't put candy colours in the spec world; don't cut where a morph can carry the element.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stack words at 160px, cards centred. 1:1: pills 90cqw.

## Numerals & Claims

Spec text is illustrative.

## Pre-Render Self-Audit

- Two distinct worlds, never mixed in a frame.
- Fat rounded display on cream, mono on white.

## Known Gaps

- Source code lists glossy highlights and an idle sine float on the spheres; they read as plain pastel discs in the sampled frames, softened.
- Source code lists real 3D rotation on chips; only the black document visibly tilts, omitted for chips.
- The Cooper-style display and handwritten font are approximated; the visible big words are a heavy grotesque (Inter-like) and a casual script, softened in the showcase.
