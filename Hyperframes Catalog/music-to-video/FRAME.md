---
version: alpha
name: Black Audio Lab — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the music-to-video launch film. A pure black "audio lab" where glowing
  signal-green waveforms and spectrum bars are the story: full-bleed scrolling waveform with a bright
  playhead, bars that light green as they are passed and turn grey once consumed, dark data panels with a
  1px green border, mono uppercase labels and count-up readouts, a wavy ribbon of green lines, and a vintage black-and-
  white footage hook. Technical yet cinematic.
unit: the frame — 1920×1080 primary
principle: the data is the picture · something always pulses on the beat · green on black

colors:
  black: "#000000"
  panel: "#0C0F0E"
  panel-border: "#1F2A24"
  green: "#2BE05A"
  green-bright: "#5BF08A"
  dim: "#5A5F5C"
  muted-caption: "#8A8F8C"
  marker-red: "#E04545"
  white: "#FFFFFF"
  logo-cyan: "#23E1D0"

typography:
  hook:      { fontFamily: "Inter / Hanken Grotesk", px: 170, weight: 800, color: "white" }
  statement: { fontFamily: "Inter / Hanken Grotesk", px: 40, weight: 700, color: "white" }
  accent-line: { fontFamily: "Inter / Hanken Grotesk", px: 72, weight: 800, color: "green" }
  caption:   { fontFamily: "Inter", px: 24, weight: 500, color: "white", placement: "bottom-centre, one clause per card" }
  data-label:{ fontFamily: "Spline Sans Mono", px: 12, upper: true, tracking: "0.1em", color: "green" }
  readout:   { fontFamily: "Spline Sans Mono", px: 64, weight: 400, color: "white", note: "count-up: 1,494 Hz" }

components:
  waveform:
    description: "Full-bleed bar waveform at about 50% height; bars glow green as the playhead passes, past turns grey; bright vertical playhead; section box with mono label ('INTERVAL · THE BEAT IT REPEATS AT')."
  data-panel:
    background: "{colors.panel}"
    border: "1px solid {colors.panel-border}"
    radius: "10px"
    size: "about 400x200, or large (1100x500) for ENERGY / SECTIONS"
  pixel-bars:
    description: "Rows of small green bars showing a spectrum (KICK, SNARE) with a dashed envelope; bars bounce on beat."
  ribbon-mesh:
    description: "Wavy layered line mesh in green ('FEEL') plus mono stats on the right."
  section-markers:
    color: "{colors.marker-red}"
    description: "Tiny red ticks and values under the chart marking hard stops."
  vintage-hook:
    description: "Black-and-white archival dance footage as the opening hook with a bottom caption."
  kinetic-words:
    description: "Large white words entering with a scatter blur."
  agent-log:
    description: "Mono terminal-like list ('calling agent · director') above a grid of dim template tiles with one matched tile bright."
---

# Black Audio Lab — Frame (video / frame layer)

## Overview

Pure black with **signal green** is the whole palette. The film visualises the process of reading music:
a waveform scrolls and zooms, a playhead sweeps and bars light up as it passes, onset spikes snap upward,
a spectrum splits into KICK and SNARE bands, an ENERGY histogram and a SECTIONS chart appear in dark
panels, and a line-mesh ribbon represents 'feel'. A vintage black-and-white clip opens the film as a hook, and a
mono agent log closes on matched templates and the logo.

**Key characteristics:**

- **Waveform full-bleed** with a bright playhead and grey 'consumed' bars.
- **Dark data panels** (`#0C0F0E`, 1px `#1F2A24` border) with mono uppercase labels.
- **Count-up readout** in mono (e.g. 1,494 Hz) above the waveform.
- **Pixel bar spectrum** rows labelled KICK / SNARE with dashed envelopes.
- **ENERGY and SECTIONS charts** with dense green columns; tiny red markers.
- **Ribbon mesh** (FEEL) of thin layered green lines.
- **Captions** in plain white at the bottom, one clause per card.

## The Frame

- **Squint:** one data visual fills the middle; text is small and low.
- **Restraint:** green + grey + white on black; red only for tiny section ticks.
- **Reference:** an audio-analysis tool; failure is decorative bloom or coloured gradients.

## Colors

Black `#000`, panels `#0C0F0E`, green `#2BE05A` / `#5BF08A`, dim grey `#5A5F5C`, caption grey `#8A8F8C`, red
`#E04545`.

## Typography

Heavy grotesk for the hook; bold grotesk for statements; Spline Sans Mono 11-14px uppercase for labels and a
large mono for the Hz readout.

## Depth & Surface

Flat green, no bloom on bars or ribbon; panels with thin borders. No shadows.

## Shapes

Rectangular bars; rounded data panels (10px); thin hairline section boxes.

## Frame Treatments

1. **Archival hook:** B&W footage with a bottom caption.
2. **Kinetic word:** words fade in with a scatter blur (white, dark ground).
3. **Waveform card:** file name label above a mini waveform.
4. **Interval box:** green outline box with mono label and playhead.
5. **Full waveform + Hz:** count-up readout above.
6. **Pixel bars:** KICK / SNARE rows under a big word.
7. **ENERGY panel:** large dark chart with a PHASES chip.
8. **SECTIONS chart:** columns with red markers and dashed verticals.
9. **FEEL ribbon:** line mesh with stat text.
10. **Agent log + tiles:** mono text, dim tile grid, one match bright.
11. **Logo end:** white wordmark with a green mark.

## Composition Rules

### Do
- Make something pulse in time with the track on every frame; snap onset spikes with ease-out.
- Colour bars green when passed and grey once consumed.

### Don't
- Don't add colour beyond green/red ticks; don't blur data; don't caption text already on screen.

## Aspect-Ratio Behavior

16:9 primary. 9:16: waveform vertical bars at 60% height, panels 94cqw. 1:1: crop labels.

## Numerals & Claims

Frequencies, RMS and section values are illustrative and come from the supplied track when available.

## Pre-Render Self-Audit

- Black ground, green data, grey consumed bars; playhead visible.
- Captions short and at the bottom.

## Known Gaps
- Source code lists image/flag-textured giant letters (background-clip: text); not visible in the sampled frames (the kinetic word shows only a blur), omitted.
- Source code lists a soft green glow and 3D depth on the FEEL ribbon; not visible in the sampled frames, omitted.
