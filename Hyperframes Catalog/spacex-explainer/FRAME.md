---
version: alpha
name: Dark Chat UI Explainer — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the SpaceX explainer film (a connector demo inside a dark chat app).
  Monochrome near-black UI recreated at video scale: a rounded composer pill, compact menus with a white
  toggle, long white answer prose, a green-dot task checklist, and a media-player result card holding a
  cream tile with a huge counting-up figure. One brand-colour mark only; everything else is white on black.
unit: the frame — 1920×1080 primary
principle: match the host app exactly · monochrome accents · UI is the scene

colors:
  canvas: "#030404"
  sidebar: "#070807"
  panel: "#171717"
  elevated: "#202020"
  pressed: "#303030"
  ink: "#F4F4F0"
  muted: "#A7A7A2"
  quiet: "#74746F"
  border: "#2B2B2B"
  border-soft: "#252525"
  on-accent: "#030404"
  connector-cyan: "#06E3FA"
  connector-green: "#4FDB5E"
  success: "#1F9D57"
  result-tile: "#F2EFE6"

typography:
  ui:        { fontFamily: "Hanken Grotesk", weight: 500, cqw: 1.55 }
  composer:  { fontFamily: "Hanken Grotesk", weight: 400, cqw: 2.55, color: "muted" }
  headline:  { fontFamily: "Hanken Grotesk", weight: 700, px: 60, tracking: "-0.02em" }
  prose:     { fontFamily: "Hanken Grotesk", weight: 400, px: 28, lineHeight: 1.5 }
  mono:      { fontFamily: "Spline Sans Mono", weight: 400, cqw: 1.55 }
  figure:    { fontFamily: "Hanken Grotesk", weight: 800, px: 140, tracking: "-0.04em", color: "ink on result-tile" }

spacing:
  composer-radius: "2.4cqw"
  menu-row-radius: "1.2cqw"

components:
  composer:
    background: "{colors.panel}"
    radius: "2.4cqw"
    placement: "centred low; shrinks to a thin bar after send"
    parts: "plus icon, placeholder, 'Fast' model chip, mic, white round send button with dark arrow"
  menu:
    background: "{colors.elevated}"
    radius: "1.2cqw"
    description: "Compact dark panel; connector row with brand mark and a white pill toggle."
  checklist:
    description: "Rounded dark card, mono 'GENERATING · 7 OF 7' label, rows with green dot and struck-through done text, thin cyan progress bar on top."
  result-card:
    description: "Media-player card (header with brand mark and '</>'), cream tile inside, controls beneath, pill link 'Download full video'."
  cursor:
    description: "White arrow sprite that travels to targets and taps with a 0.84 scale."
  thinking:
    description: "Dotted spinner + 'Thinking…' in muted text."
---

# Dark Chat UI Explainer — Frame (video / frame layer)

## Overview

The whole film is a faithful dark-mode chat application shown at video scale. Canvas is near-black
`#030404`. A rounded composer pill sits low-centre; clicking a plus opens a compact menu, a white toggle
enables a connector, a typed prompt is sent, long answer prose scrolls up, a seven-row checklist crosses
off, and a result card plays a short video. A restrained lockup closes it.

**Key characteristics:**

- **Monochrome accents:** white (`#F4F4F0`) is the accent; the only colour is the small connector mark (cyan + green) and the success green on the final figure.
- **Rounded black panels** (`#171717` composer, `#202020` menu) with 1px `#2B2B2B` borders.
- **Cursor choreography:** every click is a visible tap.
- **Answer prose** in a clean sans at 28px+ on pure black, with bold lead-ins.
- **Result tile:** a cream card with tiny mono caption, a very large black figure ($0.9T > $1.0T) that flashes green on landing.
- **Lockup close:** brand glyph and wordmark centred on black with a faint green radial.

## The Frame

- **Squint:** the composer, the answer column or the figure dominates.
- **Restraint:** no cream or warm colour outside the result tile; no purple/blue AI gradients.
- **Reference:** a screen recording of a polished chat app; failure is empty centred text without app chrome.

## Colors

Canvas `#030404`, panels `#171717` / `#202020` / `#303030`, ink `#F4F4F0`, muted `#A7A7A2`, quiet `#74746F`,
borders `#2B2B2B`. Connector mark `#06E3FA` + `#4FDB5E`. Success `#1F9D57`.

## Typography

Hanken Grotesk for UI, answer prose and big text; Spline Sans Mono for pills, shortcuts and
metadata. Sizes use container units; keep headlines 60px+, body 28px+, labels 18px+.

## Depth & Surface

Flat dark panels separated by 1px borders. Faint green radial backdrop on the outro only. No grain.

## Shapes

Very rounded: composer pill, white circular send button, 1.2cqw menu rows, rounded player card.

## Frame Treatments

1. **Brand + composer:** wordmark top-left, composer pill below, cursor hovering the plus.
2. **Menu / connector toggle:** compact menu under the composer with a white toggle.
3. **Typed prompt:** composer fills with typed text, white send button.
4. **Chat + thinking:** user bubble right, dotted spinner left.
5. **Answer scroll:** long prose scrolling under a bottom composer.
6. **Checklist:** seven rows crossing off with a progress bar.
7. **Result card:** player with cream tile and counting figure.
8. **Lockup:** centred logo on black.

## Composition Rules

### Do
- Sync every click to a sound; keep the composer aligned across hard cuts.
- Count the figure up with a proxy tween, then punch scale 1.06 and flash green.

### Don't
- Don't add warm colours outside the result tile; don't use generic gradients; don't leave empty text without chrome.

## Aspect-Ratio Behavior

16:9 primary. 9:16: composer full width at bottom, prose column 86cqw. 1:1: crop sidebar, centre the card.

## Numerals & Claims

The figure, prompt text and checklist items are placeholders unless supplied.

## Pre-Render Self-Audit

- Everything on the dark canvas except the single cream result tile.
- Colour appears only in the connector mark and the success flash.
- Cursor taps and typing are visible.

## Known Gaps

- Source code lists Newsreader serif for answer prose; the sampled frames show a sans, so prose is set in the UI sans.
- Source code lists an edge glow and lift on the connector card; not visible in the sampled frames, omitted.
- Source code lists blur-zoom transitions (blur 20px); cannot be verified in still frames, omitted.
