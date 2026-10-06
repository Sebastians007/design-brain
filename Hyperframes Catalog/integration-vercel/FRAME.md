---
version: alpha
name: White Grid Black Geometry Sting — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HyperFrames on Vercel integration sting (12s). Stark white (a faint graph-paper
  grid on the first and last frames), a single flat black geometric solid that tumbles in 3D, a tight bold headline
  that slides in under a mask, two black rounded logo tiles with a bold plus between them, and a short
  screen recording of a dark deploy flow over a blue wallpaper. Crisp, minimal, kinetic geometry.
unit: the frame — 1920×1080 primary
principle: one focal object per beat · black on white · geometry does the talking

colors:
  white: "#FFFFFF"
  grid: "#EEF0F4"
  black: "#000000"
  ink: "#0A0A0A"
  tile-black: "#000000"
  logo-green: "#2EE59D"
  logo-green-2: "#35E07A"
  ui-dark: "#0A0A0A"

typography:
  headline: { fontFamily: "Geist / Inter", px: 76, weight: 600, tracking: "-0.03em", color: "ink", note: "black" }
  plus:     { fontFamily: "Geist / Inter", px: 64, weight: 800 }
  micro:    { fontFamily: "JetBrains Mono", px: 10, color: "#BBBBBB", note: "tiny grid annotations" }

spacing:
  grid-cell: "60px"
  tile-size: "210px, radius 46px"
  tile-positions: "centred at about 1/3 and 2/3 of the width, '+' between"

components:
  grid-ground:
    description: "White ground with faint 60px graph-paper lines; visible on the opening and closing frames."
  black-solid:
    description: "Flat-shaded black triangle that tumbles in 3D, then shrinks to a small dot before the headline appears."
  logo-tile:
    background: "{colors.tile-black}"
    radius: "46px"
    shadow: "soft drop shadow"
    description: "Black rounded square holding a single mark (one green/teal gradient mark, one white triangle)."
  headline-mask:
    description: "Words slide in from the side through a mask; the final word arrives last from the right."
  recorded-flow:
    description: "Dark browser window over a blue/orange wallpaper; zoom-crop to the cursor and the Deploy / Create button; motion-blur whip out."
---

# White Grid Black Geometry Sting — Frame (video / frame layer)

## Overview

A 12-second partner sting in a stark white world. A faint graph-paper grid shows on the first and last frames. A flat black
triangle tumbles, shrinks to a dot, and the scene resolves to a
bold headline. Two black rounded tiles with a plus between them state the partnership. A brief dark screen
recording shows the deploy flow, then the film returns to blank grid.

**Key characteristics:**

- **White ground,** faint grid visible on the opening and closing frames; dark during the recording.
- **Flat black geometry** at large scale: triangle → shrinking dot.
- **Spectral prism burst** (the only colour) on black, ending in a white flash.
- **Headline in tight Geist-like type,** black, centred on white.
- **Logo tiles:** two rounded black squares with a bold '+'; soft shadow.
- **Zoom-crop** into the cursor and button during the demo; whip-blur exit.

## The Frame

- **Squint:** one black shape or one headline on the white grid.
- **Restraint:** black and white only; colour appears only in the green mark and the recording's wallpaper.
- **Reference:** a precise engineering-brand sting; failure is decorative gradients on the white scenes.

## Colors

White, black, grid `#EEF0F4`; mark green `#2EE59D`; recording UI near-black over wallpaper.

## Typography

One grotesk at weight 600 with −0.03em tracking for headlines; tiny mono for grid annotations.

## Depth & Surface

Flat black solids; soft shadow under tiles; motion blur on exits.

## Shapes

Triangles, rounded squares (46px radius), a pill; grid cells square.

## Frame Treatments

1. **Tumbling triangle:** large black solid on the grid.
2. **Shrinking dot:** the shape collapses to a small point.
3. **Headline reveal:** one line, centred.
4. **Partnership tiles:** two rounded black squares and a plus.
5. **Recorded flow:** dark window over wallpaper with a zoom to the button.
6. **Blank grid:** empty white end.

## Composition Rules

### Do
- Keep one focal object per beat; spin with power2.inOut.
- Scale the plus in with a small overshoot.

### Don't
- Don't add fills or gradients to the white scenes; don't show more than two objects at once.

## Aspect-Ratio Behavior

16:9 primary. 9:16: tiles stacked vertically, headline in 2 lines. 1:1: tiles 200px apart.

## Numerals & Claims

None; text is the headline and UI only.

## Pre-Render Self-Audit

- Solids flat black; grid faint on the opening and closing frames.
- Colour only in the green mark and the recorded wallpaper.

## Known Gaps

- Source code lists a spectral prism burst with red/magenta/orange/blue streaks and a white-out; not visible in the sampled frames, omitted.
- Source code lists the triangle morphing to a pyramid and subtle facet shading; not visible in the sampled frames (flat black triangle only), omitted.
- Source code lists the headline starting mid-grey and a slide-and-mask entrance; not visible in the sampled frames (headline is solid black), omitted.
- Source code says the grid is visible on every white frame; the middle white frames show no grid, claim limited to the first and last frames.
