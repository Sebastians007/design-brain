---
version: alpha
name: White Paper Keynote with Phone Cards — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the composition-variables launch film. A pure white, Apple-keynote
  canvas with a single centred line of heavy black type per scene and one colour accent word per line
  (including a multi-colour gradient word), tall phone-shaped video cards with soft edges, dark rounded
  "variant" code cards with colour-coded mono values, light mono code on white, and cascading rainbow
  progress bars. Bright, typographic, confident; the only richness is the real vertical clips.
unit: the frame — 1920×1080 primary
principle: one idea per scene · one accent word per line · phone cards hold the footage

colors:
  white: "#FFFFFF"
  ink: "#0A0A0A"
  accent-pink: "#F3A6FF"
  accent-green: "#35C838"
  accent-cyan: "#09B2E5"
  accent-cyan-2: "#00C3FF"
  accent-amber: "#F5A623"
  bar-blue: "#47D4FF"
  bar-pink: "#FF7EB3"
  bar-green: "#6DDB70"
  code-string: "#16A34A"
  code-punct: "rgba(0,0,0,0.25)"
  card-dark: "#2A2A2A"
  card-border: "rgba(0,0,0,0.08)"
  siri-1: "#FF6B6B"
  siri-2: "#FF9500"
  siri-3: "#E879F9"
  siri-4: "#818CF8"
  siri-5: "#22D3EE"

typography:
  statement:  { fontFamily: "Inter", px: 94, weight: 800, tracking: "-0.03em" }
  dial:       { fontFamily: "Inter", px: 104, weight: 800, tracking: "-0.03em" }
  tagline:    { fontFamily: "Inter", px: 85, weight: 600, opacity: 0.45 }
  code:       { fontFamily: "JetBrains Mono", px: 44, weight: 500 }
  variant-label: { fontFamily: "Inter", px: 44, weight: 800, upper: true, tracking: "0.04em" }
  progress-label: { fontFamily: "JetBrains Mono", px: 14, color: "rgba(0,0,0,.45)" }
  clip-caption: { fontFamily: "Inter", px: 40, weight: 800, note: "pastel kinetic captions inside the phone clips" }

components:
  statement-line:
    description: "A single centred line on white; one accent word per line in a colour from the set."
  siri-gradient-word:
    description: "One accent word ('video') coloured with a warm-to-violet multi-colour gradient (orange, pink, purple)."
  glass-card:
    border: "1px solid {colors.card-border}"
    radius: "24px"
    shadow: "very soft"
    description: "Phone-ratio card (380x675 hero, 281x500 in grids) holding a vertical clip, object-fit cover."
  clip-grid:
    description: "3x3 grid of 281x500 phone cards with 10px gaps; fans out from the centre."
  variant-card:
    background: "{colors.card-dark}"
    radius: "16px"
    parts: "uppercase label, mono key/value pairs with pastel string values"
    description: "Dark rounded code card beside a phone card; string values in pink or cyan; one value glitch-scrambles while changing."
  code-block-light:
    description: "Large mono code on white, typed with a caret; attributes in ink 600, strings green, punctuation faint."
  progress-stack:
    description: "50 rows of 'variant-NNN.mp4' with rounded bars cycling blue / pink / green and a faint percentage."
  dial-slot:
    description: "A word slot that flips vertically in 3D through options (launch / explainer / training / product demo / UGC ad), one click sound per flip."
---

# White Paper Keynote with Phone Cards — Frame (video / frame layer)

## Overview

A bright, typographic film. Every scene has one idea: a single line of heavy black type centred on white,
with exactly one accent-coloured word. Footage appears only as **tall phone-shaped clips in glass cards**.
The code side of the story is shown on dark rounded "variant" cards and on light mono code snippets. The
payoff is a column of 50 progress bars cascading down the frame.

**Key characteristics:**

- **White canvas** in every scene; ink `#0A0A0A` for all headline text.
- **One accent word per line** (pink, green, cyan, amber) or a moving rainbow gradient on the key word.
- **Phone cards** with rounded corners and a very soft edge shadow.
- **3×3 grid** of phone clips that multiplies from one hero card.
- **Dark variant cards** with colour-coded mono values (pink or cyan strings).
- **Light code** with blinking caret; **progress bars** in blue, pink and green cascading down.
- **Blur-in reveals** on words such as 'template'.

## The Frame

- **Squint:** one line of 94px ink text, or one phone card.
- **Restraint:** white + ink with a single accent per line; the footage supplies the colour.
- **Reference:** an Apple-style keynote slide; failure is a coloured background or multiple accents.

## Colors

White canvas; ink `#0A0A0A`; accents `#F3A6FF`, `#35C838`, `#09B2E5`, `#F5A623`; progress `#47D4FF / #FF7EB3 /
#6DDB70`; siri gradient stops listed above.

## Typography

Inter 800 with −0.03em tracking for statements; JetBrains Mono for code and file labels; small uppercase Inter
for variant labels.

## Depth & Surface

Phone cards with a very soft shadow on flat white; no grain, no shaders.

## Shapes

Rounded phone cards (24px, smaller in grids), rounded dark code cards (16px), rounded progress bars.

## Frame Treatments

1. **Statement line:** 'the perfect launch video' with one accent word.
2. **Hero phone card:** a single vertical clip scaled up.
3. **Variant row:** dark card, phone, dark card.
4. **Fan-out row:** three phone cards with different overlay captions.
5. **Template line:** 'Now a template.' with a blurred accent.
6. **Light code:** attribute list typing on white.
7. **3x3 grid:** nine phone cards.
8. **Render line + progress stack:** 'Render on [cloud] at scale' with a cascade of bars.
9. **Wordmark end:** heavy black wordmark and green mark.

## Composition Rules

### Do
- Keep text single-line and centred; reveal each word in a mask (y 150 → 0).
- Fan cards out from the centre; stagger columns 0.06-0.12s.

### Don't
- Don't use more than one accent per line; don't put footage full-bleed; don't colour the background.

## Aspect-Ratio Behavior

16:9 primary. 9:16: statements in 2 lines at 84px, grid becomes 2 columns. 1:1: hero card 300x540.

## Numerals & Claims

Variable names, values and counts are illustrative.

## Pre-Render Self-Audit

- White background on every frame; one accent per line.
- Footage only in phone-ratio glass cards.

## Known Gaps

- Source code lists a siri-gradient scroll animation (0% -> 200% over 2s) with five stops; only a static orange/pink/purple gradient on 'video' is visible, rest omitted.
- Source code lists glass cards with a 165deg gradient fill, layered shadows, inset white highlight and a rotated 'shine'; only a very soft edge shadow is visible, omitted.
- Source code lists cyan glow old value vs hot pink new value; not distinguishable in the frames (a scramble glitch is visible), omitted.
- Source code lists blur 8px expo.out cut-the-curve transitions; only blur-in on 'template' is visible, omitted as a general claim.
