---
version: alpha
name: Acid-Green Stickers on Black — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the keyframes launch film. A pure black stage where acid green is the
  only colour: heavy black words on rotated green rounded "stickers" that ride a thick white curve, a lone
  green diamond with white captions, and white-background UI demo cards (a dark code panel with colourful
  syntax, a dark editor with a bezier ease graph). Ends on a tilted 3D grid with a dotted trajectory and a
  cream logo end card. Reads like an editor timeline plus developer terminal.
unit: the frame — 1920×1080 primary
principle: black stage, one green · stickers ride the curve · voice cards vs UI cards

colors:
  black: "#000000"
  panel: "#0F1211"
  panel-2: "#171B1A"
  terminal: "#151515"
  green: "#41E33F"
  green-dark: "#0B6B1C"
  green-darker: "#003000"
  white: "#FFFFFF"
  cream: "#F0EEE6"
  code-text: "#E8E8E8"
  code-string: "#F5E27A"
  code-key: "#6FD3F5"
  code-number: "#F59A4A"
  shadow: "rgba(0,0,0,0.25)"

typography:
  sticker:   { fontFamily: "Inter / Hanken Grotesk", px: 120, weight: 900, tracking: "-0.04em", color: "black on green" }
  headline-white: { fontFamily: "Inter / Hanken Grotesk", px: 52, weight: 800, tracking: "-0.03em", color: "black on white" }
  voice-line:{ fontFamily: "Inter / Hanken Grotesk", px: 34, weight: 700, color: "white on black" }
  caption:   { fontFamily: "Inter / Hanken Grotesk", px: 34, weight: 700 }
  code:      { fontFamily: "Spline Sans Mono", px: 56, weight: 400 }
  mono-label:{ fontFamily: "Spline Sans Mono", px: 14, color: "green" }

components:
  sticker:
    background: "{colors.green}"
    border: "3px solid {colors.green-dark}"
    radius: "10px"
    description: "Black bold word on a green rounded rectangle, rotated to follow the curve; tags flip in about 0.25s apart."
  white-curve:
    description: "Thick white SVG path the stickers ride; the camera pans and rotates with it and the line runs off frame."
  diamond:
    description: "Rotated rounded square in green with a dark-green fill and a brighter green outline; small diamonds also appear as keyframe markers on the editor timeline."
  ui-card:
    background: "dark panel on a white page"
    radius: "10px"
    shadow: "{colors.shadow}"
    placement: "centred, about 75% width, headline above"
  code-panel:
    background: "{colors.terminal}"
    description: "Big code with yellow strings, cyan keys, orange numbers and light grey text."
  editor-ui:
    description: "Dark editor: preview stage with a green rectangle, timing panel, ease graph with bezier handles and readout, timeline strip with green diamonds."
  perspective-grid:
    description: "CSS 3D plane grid with rotated frames and a dotted trajectory, mini mono labels in green."
  caption-lower:
    description: "Bottom-centre white caption on the dark editor ('using custom eases')."
---

# Acid-Green Stickers on Black — Frame (video / frame layer)

## Overview

Two card types alternate: **voice cards** on pure black (white or green type, a single diamond) and
**UI demo cards** on white (headline above, dark panel below). Acid green is the only colour; it is used
for stickers, diamonds, curves, buttons and outlines. The opening has stickers riding a thick white curve
as the camera rotates; the finale shows a 3D grid of layers with a dotted trajectory and mono labels.

**Key characteristics:**

- **Rotated green stickers** with black heavy type, riding a white path.
- **Single green diamond** in the centre with small captions above and below.
- **White UI cards** with a black headline and a dark panel (code or editor) with drop shadow.
- **Code syntax colours** (yellow/cyan/orange) are the only non-green accents, and only inside code.
- **Bezier ease graph** with draggable handles and a readout.
- **Perspective grid** of keyframe layers; cream end card with the logo.

## The Frame

- **Squint:** a sticker, a diamond, or a UI card — one at a time.
- **Restraint:** black + green (+ white); never a second hue outside code syntax.
- **Reference:** an editor-timeline explainer; failure is soft pastel UI or multiple accent colours.

## Colors

Black `#000000`, green `#41E33F`, dark greens `#0B6B1C` / `#003000`, white, cream `#F0EEE6`.

## Typography

Inter/Hanken at 800-900 with tight tracking for stickers and headlines; Spline Sans Mono for code and labels.

## Depth & Surface

Flat; only thin outlines; a soft drop shadow under UI cards; the final grid has depth via 3D.

## Shapes

Rounded rectangles for stickers and panels (10px), rotated rounded squares for diamonds, dotted paths.

## Frame Treatments

1. **Sticker path:** words on a curving white line.
2. **Sticker pile:** stickers stack and stagger.
3. **Diamond voice card:** captions above/below a green diamond.
4. **White code card:** headline above, dark code panel.
5. **White editor card:** zoomed editor UI.
6. **Dark editor:** full editor with ease graph and lower caption.
7. **Black line:** white sentence with a small diamond.
8. **Terminal card:** dark window on white.
9. **Perspective grid:** 3D layers, dotted trajectory.
10. **Cream end card:** wordmark.

## Composition Rules

### Do
- Time hard cuts to the voice; flip between black and white to separate voice and UI cards.
- Use real custom beziers on screen when talking about eases.

### Don't
- Don't use a second accent colour outside code; don't blur; don't leave a sticker un-rotated on the curve.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stickers stack 3 per row, UI card 90cqw. 1:1: diamond 260px.

## Numerals & Claims

Timings, view angles and code are illustrative.

## Pre-Render Self-Audit

- Black + green + white only (code colours excepted).
- Black voice cards and white UI cards alternate.

## Known Gaps

- Source code lists inner hatching and pulsing on the diamond; not visible in the sampled frames, omitted.
- Source code lists a soft green shadow; not visible in the sampled frames (only a grey drop shadow under white-page cards), omitted.
