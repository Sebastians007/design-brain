---
version: alpha
name: Monochrome HUD Spec Sheet — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the K3 promo teaser. A black void with light-grey Inter type set in
  curly braces, blueprint furniture (corner crosshairs, tick-mark ruler strips, diagonal hatch bars, small
  outlined label pills) and a quiet technical rhythm. Pin-and-ball stems, a live bar-chart panel, and a
  headline that scrambles into particles before resolving into the logo.
unit: the frame — 1920×1080 primary
principle: restrained precision · something always moving · spec sheet coming alive

colors:
  void: "#010101"
  text: "#D8D8DA"
  text-dim: "#98989C"
  furniture: "#CFCFD2"
  furniture-mid: "#9A9A9E"
  pill-fill: "rgba(2,2,2,0.88)"
  pill-border: "#DCDCDE"
  panel: "#1C1C1C"
  panel-line: "#2E2E2E"
  ghost-cell: "#101010"
  live-green: "#0DBC8A"
  up-red: "#CD7C74"
  chart-blue-dark: "#2F5AA8"
  chart-blue-light: "#6F9BDC"
  chart-green: "#1F9D6B"
  violet-wash: "#AB84CF"

typography:
  headline:  { fontFamily: "Inter", px: 90, weight: 400, tracking: "-1px", color: "text" }
  brace:     { fontFamily: "Inter", px: 90, weight: 300, color: "text-dim" }
  pill:      { fontFamily: "Inter", px: 26, weight: 500, padding: "10px 14px", border: "1.5px solid pill-border" }
  data:      { fontFamily: "JetBrains Mono", px: 47, weight: 400 }
  tab:       { fontFamily: "JetBrains Mono", px: 42, weight: 400, tracking: "3px", upper: true }

components:
  corner-crosshair:
    description: "Small '+' markers at the four corners and scattered through the field."
  ruler-strip:
    description: "Rows of fine vertical ticks left and right of the centre line (y≈540) that creep outward."
  hatch-bar:
    description: "Thin diagonal-hatch strip under each pill; glides continuously."
  label-pill:
    background: "{colors.pill-fill}"
    border: "1.5px solid {colors.pill-border}"
    radius: "2px"
    typography: "{typography.pill}"
    description: "Outlined label (Agentic, Delta Attention, 1M Context…) orbiting the title box."
  title-box:
    description: "Hairline box with corner squares and ghost diagonal lanes around the headline."
  bar-panel:
    description: "Two vertical hairlines frame a tab, icons, 'Live' status row and a horizontal blue bar chart with one green bar; bars of varying length."
  pin-stems:
    description: "A row of grey stems with ball heads that wave or form a helix."
  brace-line:
    description: "Headline wrapped in grey curly braces: { One model }."
---

# Monochrome HUD Spec Sheet — Frame (video / frame layer)

## Overview

A black field, nearly empty, with a single light-grey line of type at the centre and technical furniture
at the edges. The look is **monochrome and precise**: no colour except tiny data accents (live green, a
dusty red arrow, blue chart bars) and a brief violet wash on one scene. Type is light-weight Inter,
often wrapped in curly braces. Furniture (crosshairs, rulers, hatch bars, pills) is always slightly moving.

**Key characteristics:**

- **Centre headline in braces** — `{ Open Frontier Intelligence }`, `{ One model }` — with ruler ticks either side.
- **Orbiting outlined pills** around a boxed title, each over a hatch bar.
- **Dashboard scene:** DECODE tab, Live dot, `↑ 6.3x` in dusty red, `↓ 25% cost` in green, blue horizontal bars.
- **Pin-and-ball stems** forming waves along the bottom edge.
- **Scramble dissolve:** the headline breaks into speckled particles then collapses into the logo.
- **Ghost grid columns** of barely visible cells (matrix rain feel) behind data scenes.

## The Frame

- **Squint:** one grey phrase on black, 90px, with generous empty space.
- **Silence:** at least 70% pure black.
- **Restraint:** greys only, plus tiny data accents; the violet wash is a one-scene event.
- **Reference:** a model-launch spec teaser; failure is a colourful dashboard.

## Colors

Void `#010101`; text `#D8D8DA`, dim `#98989C`; furniture `#CFCFD2 / #9A9A9E`; pills fill `rgba(2,2,2,.88)` with
`#DCDCDE` border. Data: live `#0DBC8A`, up `#CD7C74`, chart blues `#2F5AA8→#6F9BDC`, green bar `#1F9D6B`.

## Typography

Inter 400 for headlines (300 for braces, 500 for pills). JetBrains Mono for dashboard rows and tab labels.

## Depth & Surface

Flat. No scanlines, noise, vignette or shadows are visible; no fills other than panel greys.

## Shapes

Square corners, hairline boxes, 2px pill radius. Circles only as pin heads.

## Frame Treatments

1. **Brace line:** one phrase in braces with ruler ticks.
2. **Orbit cluster:** boxed title with 5 pills and hatch bars.
3. **List column:** 'One model' with stacked pills beneath.
4. **Dashboard:** tab, icons, status row, bar chart between two vertical rules.
5. **Pin waves:** boxed phrase above a row of waving stems.
6. **Triptych:** three side-by-side boxed phrases.
7. **Logo resolve:** scramble dissolve into a small logo and wordmark.

## Composition Rules

### Do
- Keep something moving at all times (ticks, hatch, orbit, bar jitter).
- Use hard set() on/off at measured times plus a few eased slides.

### Don't
- Don't add colour beyond data accents; don't fill pills with light colours; don't centre more than one message.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stack pills vertically, braces keep, headline 70px. 1:1: crop ruler strips.

## Numerals & Claims

Multipliers and percentages are placeholders unless supplied.

## Pre-Render Self-Audit

- Black dominates; greys only; braces on at least one headline.
- Furniture present and in motion.

## Known Gaps

- Source code lists scanlines, 1.2% noise and a soft vignette; not visible in the sampled frames, omitted.
- Source code lists a red/cyan chromatic text-shadow on the headline; not visible in the sampled frames, omitted.
- Source code lists a two-frame full-screen invert flash; not visible in the sampled frames, omitted.
- Source code lists a glow on the logo resolve; not visible in the sampled frames, omitted (the speckle dissolve is kept).
