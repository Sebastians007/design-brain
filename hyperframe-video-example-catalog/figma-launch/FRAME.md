---
version: alpha
name: Dark Pattern Glass Cards (Square) — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the Figma-to-HyperFrames launch film (shipped square, 1080x1080).
  A black photographic ground with a glossy dark green/purple 3D pattern that shifts each act, frosted
  glass tweet cards with a green highlight on key phrases, a dark terminal window with mono logs, output
  videos always inside a rounded light card, giant green mono commands and a white lockup that ends on
  a "Starred" button. Green is rationed.
unit: the frame — 1080×1080 primary (1920×1080 and 1080×1920 supported)
principle: glass over pattern · highlight the phrase · outputs live in a card, never full-bleed

colors:
  black: "#000000"
  pattern-green: "#1E6B3A"
  pattern-purple: "#5B3A8C"
  ink: "#F5F6F4"
  ink-dim: "rgba(245,246,244,0.72)"
  ink-faint: "rgba(245,246,244,0.5)"
  green: "#5EF17C"
  cyan: "#4FD6FF"
  pink: "#E9A0F0"
  chip-dark: "rgba(10,12,11,0.78)"
  glass-border: "rgba(190,255,205,0.32)"
  terminal: "#1D1F1F"
  gold: "#F5C84B"
  card-light: "#F4F5F1"

typography:
  headline: { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 800)", px: 100, weight: 700, tracking: "-0.03em" }
  headline-sm: { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 800)", px: 72, weight: 700, color: "white" }
  body:     { fontFamily: "TT Norms Pro (fallback Hanken Grotesk)", px: 36, weight: 500 }
  tweet:    { fontFamily: "TT Norms Pro (fallback Hanken Grotesk)", px: 44, weight: 500 }
  mono-label: { fontFamily: "Spline Sans Mono", px: 20, weight: 500, tracking: "0.22em", upper: true, color: "green" }
  mono-cmd: { fontFamily: "Spline Sans Mono", px: 50, weight: 500, color: "green" }
  mono-xl:  { fontFamily: "Spline Sans Mono", px: 220, weight: 500, color: "green", note: "'/figma' giant" }

spacing:
  output-card: "960x540 rounded card at (60,270) of 1080 square"
  pad: "60px"

components:
  pattern-ground:
    description: "Black ground with a glossy dark green/purple 3D folded-ribbon pattern video; one encode per act, trimmed to the act, ."
  glass-card:
    background: "frosted: backdrop blur + saturate, tinted"
    border: "1px solid {colors.glass-border}"
    radius: "28px"
    description: "Tweet or message card with avatar, name, handle, X mark, stats row; tinted translucent fill."
  phrase-highlight:
    description: "Rounded solid green selection bar behind the key phrase."
  terminal-window:
    background: "{colors.terminal}"
    radius: "16px"
    chrome: "traffic-light dots, Local / CC chips, composer with Auto chip and model"
  output-card:
    description: "Light rounded card holding the rebuilt UI or video; sits inside a 960x540 frame; grows .75 to 1 'already playing'."
  star-button:
    description: "GitHub-style 'Starred 34.2k' pill with gold star, cursor hovering."
---

# Dark Pattern Glass Cards (Square) — Frame (video / frame layer)

## Overview

A developer-native launch film on a black pattern ground. The story is argued with real-looking tweets in
frosted glass, then a terminal window shows the command, then the output appears in a light card, then a
green install command and a white lockup with a "Starred" button close it. The current moves leftward
throughout; zoom-through is reserved for escalation and window exits.

**Key characteristics:**

- **Square 1080x1080** with 60px padding; outputs never run full-bleed.
- **Glass tweet cards** over the green/purple pattern; a green highlight bar marks the phrase that matters.
- **Zoom ladder:** hard cuts that crop a tweet tighter each time (cadence 0.8 → 0.1s).
- **Dark terminal window** with mono log lines and a docked composer.
- **Rounded light output card** with a cyan pointer; shows a UI or video playing.
- **Green mono type:** small spaced-caps eyebrows with a dash prefix, giant '/figma', and the install command.
- **Lockup + star button:** white wordmark with a green logo mark over the pattern.

## The Frame

- **Squint:** one card or one phrase dominates; green appears once per frame.
- **Restraint:** green is rationed to the highlight, eyebrows and commands.
- **Reference:** HeyGen-for-developers launch posts; failure is fake app chrome everywhere.

## Colors

Ground black with a green/purple pattern; ink `#F5F6F4`; accent green `#5EF17C`, cyan `#4FD6FF`, pink
`#E9A0F0`; dark chips `rgba(10,12,11,.78)`; glass border `rgba(190,255,205,.32)`; star gold.

## Typography

Bold geometric display for headlines (fallback Hanken Grotesk 800), a friendly sans for tweets and chat, a mono
for labels and commands (tracking 0.22em, dash prefix).

## Depth & Surface

Glass: translucent tinted fill with a faint hairline border. Cards read flat with a soft translucent fill.

## Shapes

Rounded glass cards (about 28px), rounded terminal (16px), pill chips and the star button.

## Frame Treatments

1. **Plain line on black:** one lowercase sentence.
2. **Tweet glass card:** avatar, name, handle, highlighted phrase, stats.
3. **Zoom ladder:** the same card cropped tighter each cut.
4. **Terminal prompt:** focused composer, then docked window with logs.
5. **Output card:** light UI card inside the 960x540 frame.
6. **Install card:** 'Try it yourself' + green mono command.
7. **Lockup:** white wordmark, green mark, star button.

## Composition Rules

### Do
- Keep outputs in a rounded card; hold short text beats about 0.3s.
- Send everything leftward; use Z+ zoom for escalation.

### Don't
- Don't show Figma UI as fake chrome; don't use more than one accent colour per frame; don't full-bleed outputs.

## Aspect-Ratio Behavior

Square primary. 16:9: widen the output card to 1440x810, tweets left-weighted. 9:16: stack lockup, cards 90cqw.

## Numerals & Claims

Tweet text, view counts and star counts are placeholders unless supplied.

## Pre-Render Self-Audit

- Pattern ground present; glass cards frosted; green once per frame.
- Outputs only in cards.

## Known Gaps

- Source code lists a green-to-cyan gradient on the phrase highlight; the visible bar is solid green, softened.
- Source code lists a gradient shade over the pattern ground; not visible in the sampled frames, omitted.
- Source code lists an inner top highlight, 3D rotation pop and a shimmer sweep on cards/words; not visible in the sampled frames, omitted.
- Source code lists backdrop saturate on glass; only a translucent tint is visible, softened.
