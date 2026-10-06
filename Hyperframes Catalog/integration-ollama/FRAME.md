---
version: alpha
name: Monochrome Line-Art White World (Partner Integration) — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HyperFrames x Ollama integration film. A dark app window scales
  up as a prompt is typed, then the film cuts to the partner's white, monochrome, illustrated world:
  black line-art illustrations running edge to edge, clean sans copy with generous white margins, mono
  command pills, a white terminal card with traffic lights, a black pill button over a hairline arc, and a
  heavy black wordmark ending on a lone iridescent 3D gem. Friendly, line-art, a bit cheeky.
unit: the frame — 1920×1080 primary
principle: pure white · black line art · generous margins · one iridescent object at the end

colors:
  app-dark: "#1E1E1C"
  app-surface: "#2A2A28"
  app-text: "#E8E6DF"
  mascot-coral: "#D96B5B"
  app-link: "#8FA3FF"
  auto-chip: "#E0A040"
  white: "#FFFFFF"
  near-white: "#FAFBFA"
  ink: "#111111"
  grey: "#6B6B6B"
  line-grey: "#9A9A9A"
  hf-green: "#22E58A"
  hf-green-2: "#17C964"
  gem-cyan: "#23C4F6"
  gem-magenta: "#E060F0"
  gem-lime: "#7CE87C"

typography:
  headline:  { fontFamily: "Inter", px: 52, weight: 500, tracking: "-0.02em", align: "center" }
  section:   { fontFamily: "Inter", px: 34, weight: 500, align: "left" }
  body:      { fontFamily: "Inter", px: 17, weight: 400, color: "grey", lineHeight: 1.5 }
  kicker:    { fontFamily: "Inter", px: 14, weight: 400, note: "underlined link word" }
  mono:      { fontFamily: "JetBrains Mono", px: 18, weight: 400 }
  button:    { fontFamily: "Inter", px: 18, weight: 500, color: "white", background: "ink" }
  wordmark:  { fontFamily: "heavy rounded grotesk (logo asset)", weight: 800 }

components:
  app-window:
    background: "{colors.app-dark}"
    radius: "14px"
    chrome: "traffic-light dots, tabs (Chat / Code), side list, composer with Auto chip"
    description: "Small macOS window floating on dark ground, scaling from about 40% to 75% of frame width while the prompt types."
  pixel-mascot:
    color: "{colors.mascot-coral}"
    description: "Tiny pixel creature idling on the prompt box."
  centered-headline:
    description: "Short sentence centred on white with a tiny kicker above and an inline mono command pill below."
  command-pill:
    background: "#F4F4F4"
    radius: "8px"
    typography: "{typography.mono}"
    border: "1px solid #E6E6E6"
  terminal-card:
    background: "{colors.white}"
    radius: "10px"
    shadow: "soft"
    chrome: "traffic-light dots"
    description: "White card with black mono lines; completed step with a green check."
  line-illustration:
    description: "Black outline drawing with grey tyres and speed-line puffs, cropped edge to edge; animated frame by frame."
  pill-button:
    background: "{colors.ink}"
    radius: "999px"
    typography: "{typography.button}"
  horizon-arc:
    description: "A single hairline arc across the bottom of the CTA scene."
  gem:
    description: "3D iridescent glass prism (cyan, magenta, lime) that rotates, shown alone on white after the wordmark."
---

# Monochrome Line-Art White World (Partner Integration) — Frame (video / frame layer)

## Overview

A short dark opening, then a **flat pure-white world**. The opening shows a small dark desktop app that
scales up as a request is typed, with a pixel mascot idling. The film then cuts to white: a centred headline
with a tiny kicker and an inline command; left-third text beside a mono pill; a clean terminal card; a
full-bleed black line-art illustration of a character driving; a CTA with a black pill button and a
hairline arc. It ends on a heavy black wordmark and a lone iridescent gem.

**Key characteristics:**

- **Dark-to-white pivot** on a single cut.
- **Large white margins;** copy is centred or in the left third at 500 weight, grey subcopy.
- **Line-art illustration** edge to edge, black outline, grey tyres, speed lines and dust puffs.
- **Mono command pills** and a white terminal card with a faint soft shadow.
- **Black pill button** with a hairline horizon arc.
- **Iridescent 3D gem** as the single colourful object at the end.

## The Frame

- **Squint:** one headline or one illustration on white; nothing else competes.
- **Restraint:** monochrome except the gem and the green logo mark.
- **Reference:** a friendly open-source product page; failure is adding gradients or colour blocks.

## Colors

White `#FFFFFF`/`#FAFBFA`, ink `#111111`, grey `#6B6B6B`/`#9A9A9A`; app dark `#1E1E1C` and text `#E8E6DF`;
mascot `#D96B5B`; mark green `#22E58A`; gem cyan/magenta/lime.

## Typography

Humanist grotesk at 500 for headlines, light grey body, JetBrains Mono for commands and logs, a heavy rounded
grotesk for the wordmark.

## Depth & Surface

Flat; a faint soft shadow under the terminal card and icon tile; hairline arc; typing caret and spinner; no gradients.

## Shapes

Rounded windows (10-14px), pill buttons, small rounded command pills.

## Frame Treatments

1. **App window small:** tiny dark window, tabs, side list.
2. **App window large:** typed prompt, mascot, 'thinking…'.
3. **Brand mark card:** rounded icon tile centred on white.
4. **Centred headline:** kicker, headline, command line.
5. **Left-third feature:** heading, grey body, mono pill.
6. **Terminal card:** four lines, green check.
7. **Full-bleed illustration:** character in a car with plate text.
8. **CTA:** 'Get started…' + black Download pill + arc.
9. **Wordmark lockup** then **gem**.

## Composition Rules

### Do
- Cut hard from dark to white; zoom the app window as typing proceeds.
- Keep illustrations animated frame by frame with speed lines.

### Don't
- Don't add colour to the white scenes; don't use partner mascots or marks without permission.

## Aspect-Ratio Behavior

16:9 primary. 9:16: headline 64px wrap, illustration cropped to centre, button 80cqw.

## Numerals & Claims

Commands and button labels are placeholders.

## Pre-Render Self-Audit

- White scenes pure white with black ink.
- White scenes stay monochrome; colour limited to the gem, the logo mark, and the dark app's mascot and chips.

## Known Gaps

- Source code lists the gem merging into the wordmark's mark; not visible in the sampled frames, omitted.
- Source code implies the gem is the only colourful element in the film; the coral mascot, app chips and green logo mark are also visible, claim softened.
