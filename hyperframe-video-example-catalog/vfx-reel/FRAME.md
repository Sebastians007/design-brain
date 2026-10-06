---
version: alpha
name: VFX Showreel — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HeyGen x HyperFrames VFX reel. Studio-black grounds chained by
  real-time effects: a volumetric light-ray logo reveal, huge yellow and white type over rainbow liquid
  footage, a 3D phone on grainy lilac, a calm warm-paper prompt box as a palate cleanser, an RGB channel
  split and a circular violet portal that wipes into a clean white logo card.
unit: the frame — 1920×1080 primary
principle: object-to-object journey · one effect per beat · calm paper in the middle

colors:
  studio-black: "#050508"
  black: "#000000"
  ray-cyan: "#06E3FA"
  ray-green: "#4FDB5E"
  hot-yellow: "#F6FF7A"
  paper: "#F5F4ED"
  prompt-bar: "#FAF9F5"
  prompt-text: "#3D3929"
  prompt-muted: "#6B6757"
  prompt-border: "#EBE7DB"
  send-terracotta: "#D97757"
  portal-violet: "#7C3AED"
  portal-blue: "#4A90FF"
  fringe-cyan: "rgba(73,242,255,0.38)"
  fringe-magenta: "rgba(255,79,216,0.28)"
  white: "#FFFFFF"

typography:
  headline:  { fontFamily: "Inter", weight: 840, px: 178, lineHeight: 0.88, tracking: "-0.03em" }
  sub:       { fontFamily: "Inter", weight: 720, px: 92 }
  statement: { fontFamily: "Inter", weight: 780, px: 136 }
  serif-italic: { fontFamily: "DM Serif Display", style: italic, px: 300 }
  condensed: { fontFamily: "Big Shoulders Display", weight: 900, px: 300, upper: true }
  prompt:    { fontFamily: "Inter", weight: 400, px: 56, color: "prompt-text" }
  url:       { fontFamily: "JetBrains Mono", weight: 800, px: 32, color: "#111" }

components:
  light-ray-reveal:
    description: "Logo drawn as a mask; a soft spectrum sweep (cyan > green > magenta) streaks left to right and the logo rises into place."
  liquid-footage-ground:
    description: "Looping rainbow liquid / oil-slick video behind huge type; type is pale yellow or white, sometimes blur-in."
  glass-card:
    background: "linear-gradient(160deg, rgba(255,255,255,.11), rgba(255,255,255,.045) 42%, rgba(255,255,255,.018) 70%, rgba(255,255,255,.075))"
    backdrop: "blur(14px) saturate(1.12)"
    border: "1px solid rgba(255,255,255,0.17)"
    radius: "56px"
  phone-3d:
    description: "Titanium phone centred on grainy lilac; spins, tilts and zooms in on a screen showing an app page."
  prompt-box:
    background: "{colors.prompt-bar}"
    radius: "28px"
    description: "Warm-paper composer with typed mono-free text, terracotta rounded-square send button with white arrow and a cursor."
  rgb-split:
    description: "Text card duplicated into red, green and blue sheets that fan apart in 3D with bloom."
  portal-wipe:
    description: "Circular ring (violet to blue, noisy edge with sparks) expands to reveal a white logo card, then consumes the frame."
---

# VFX Showreel — Frame (video / frame layer)

## Overview

A premium, cinematic showreel. Each beat is a different real-time effect and each hands off to the next as
one object-to-object journey: light rays reveal the logo; huge type rides rainbow liquid video; a phone spins
on grainy lilac; a warm-paper prompt box (the calm palate cleanser) types a command and presses send; the
text splits into RGB sheets on black; a circular portal expands and lands on a clean white logo card.

**Key characteristics:**

- **Giant type over saturated video:** 'HTML' in pale yellow at 300px, 'Now natively supported.' in white with a serif-italic middle word.
- **Light-ray logo:** spectrum streaks sweep across a dark teal-black ground behind the white wordmark.
- **Prompt palate cleanser:** off-white `#F5F4ED` screen, white composer with typed text, terracotta send tile.
- **RGB split on black:** a line of text breaks into red/green/blue sheets with bloom.
- **Portal ring:** violet-to-blue ring with sparks wiping to white.
- **End:** pure white, dark logo lockup and a tiny mono URL.

## The Frame

- **Squint:** one effect dominates each beat; type 136-300px.
- **Silence:** black and white holds between effects.
- **Restraint:** the paper prompt scene is flat and calm — no effects layered on it.
- **Reference:** a VFX showreel title sequence; failure is a stack of effects at once.

## Colors

Studio black `#050508`; spectrum rays; hot yellow `#F6FF7A`; paper `#F5F4ED` with text `#3D3929`; terracotta
`#D97757`; portal violet/blue; end white `#FFFFFF`.

## Typography

Inter 780-900, tight leading 0.88, 136-178px for statements; DM Serif Display italic and Big Shoulders Display
caps for effect-driven title words; JetBrains Mono for the URL.

## Depth & Surface

Grain on the lilac phone ground; bloom on the RGB split and portal ring; dark frosted card over liquid video;
a faint soft shadow under the paper composer and the terracotta send tile.

## Shapes

Rounded glass card (56px), rounded-square send button, circle portal.

## Frame Treatments

1. **Ray logo:** teal-black ground, light streaks, white wordmark and green mark.
2. **Giant word on liquid:** one huge word in yellow over rainbow video.
3. **Glass statement:** frosted card with a three-line statement mixing weights and a serif italic.
4. **Phone on lilac:** centred 3D phone.
5. **Prompt box:** typed command, send tile, cursor.
6. **RGB split line:** small spread line on black.
7. **Catalog card:** two-line white statement on black, bursting into a portal.
8. **Logo card:** white ground, dark lockup, mono URL.

## Composition Rules

### Do
- Hand each effect to the next with a shared shape; blur-in entrances (14-22px).
- Keep the paper scene clean and slow.

### Don't
- Don't layer two effects in one frame; don't use light type on pale grounds; don't skip the white end.

## Aspect-Ratio Behavior

16:9 primary. 9:16: phone vertical, statement 120px in 3 lines. 1:1: portal radius 0.5 of width.

## Numerals & Claims

Commands and URLs are placeholders unless supplied.

## Pre-Render Self-Audit

- Each beat has exactly one effect.
- Paper scene present between dark scenes; end card pure white.

## Known Gaps

- Source code lists grain on the light-ray reveal; not visible in the sampled frames, omitted.
- Source code lists a "heavy" soft shadow around the paper composer; only a faint soft shadow is visible, softened.
- Source code lists rim-blue (#7C9CFF) and lime-light (#D7FF3F) colours; not visible in the sampled frames, omitted.
- Source code lists a white-gradient glass fill with a bright border; the frames show a plain dark translucent card, so treat the gradient fill as unconfirmed.