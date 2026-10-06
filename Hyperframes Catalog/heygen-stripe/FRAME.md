---
version: alpha
name: HeyGen x Stripe — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the HeyGen x Stripe launch film. Three grounds alternate for
  contrast: a near-black green "dev" plate with faint neon-green light streaks, a warm halftone
  sunburst (yellow > orange > magenta > violet), and pure white. Heavy geometric black display type
  with tight tracking, a neon-green outlined presenter window, and a white rounded terminal card.
  One idea per scene; green is the only accent on dark.
unit: the frame — 1920×1080 primary
principle: contrast between grounds · one headline per card · green only on dark

colors:
  dev-ground: "#0A0C0B"
  neon-green: "#2FD261"
  terminal-green: "#35C838"
  sunburst-yellow: "#F5C96A"
  sunburst-orange: "#F59B3A"
  sunburst-magenta: "#E8408F"
  sunburst-violet: "#8B5CF6"
  ink: "#1A1A1A"
  ink-headline: "#141414"
  white: "#FFFFFF"
  terminal-dim: "#9B9B9B"
  link-blue: "#5739FF"
  pill-tint: "#E4F7E2"
  progress-start: "#19C7F5"

typography:
  display:   { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 800)", cqw: 6.4, weight: 700, tracking: "-0.025em", lineHeight: 0.95 }
  lockup:    { fontFamily: "ABC Solar Display (fallback Hanken Grotesk 800)", cqw: 6.0, weight: 700, tracking: "-0.02em" }
  intro:     { fontFamily: "TT Norms Pro (fallback Hanken Grotesk 500)", cqw: 1.9, weight: 500 }
  pill:      { fontFamily: "TT Norms Pro (fallback Hanken Grotesk 600)", cqw: 1.5, weight: 600 }
  terminal:  { fontFamily: "TT Norms Pro (fallback Hanken Grotesk 600)", cqw: 1.6, weight: 600 }
  caption:   { fontFamily: "TT Norms Pro (fallback Hanken Grotesk 600)", cqw: 2.5, weight: 600, color: "white", textShadow: "0 .15cqw .7cqw rgba(0,0,0,.55)" }

spacing:
  presenter-window: "88cqw x 82cqh"
  caption-bottom: "16.3cqh"

components:
  presenter-window:
    radius: "1.4cqw"
    border: "0.3cqw solid {colors.neon-green}"
    glow: "faint outer green halo"
    description: "Footage framed as a glowing neon-green rounded window; slides off left to reveal graphics."
  terminal-card:
    backgroundColor: "{colors.white}"
    radius: "1.2cqw"
    shadow: "soft, large blur, low opacity"
    chrome: "three grey traffic-light dots top-left"
    width: "about 80cqw, upper-centre"
  step-pill:
    backgroundColor: "white at 85%"
    radius: "999px"
    typography: "{typography.pill}"
    description: "Small 'Step N' pill sitting directly above the giant headline."
  rotary-drum:
    description: "Centred line 'The agent [drum]'; verbs on a CSS 3D cylinder, current verb bright green, neighbours dim green and blurred by a vertical mask fade."
  progress-bar:
    background: "linear-gradient(90deg, {colors.progress-start}, {colors.terminal-green})"
    trackColor: "{colors.ink}"
  halftone-plate:
    description: "Sunburst gradient with a visible halftone/dither dot texture that drifts slowly (scale 1.04 > 1.14)."
---

# HeyGen x Stripe — Frame (video / frame layer)

## Overview

A confident fintech/dev-tool launch. The film alternates three grounds: **dark dev plate** (near-black
green with faint neon-green light streaks sweeping across), **warm halftone sunburst**
(yellow/orange/magenta/violet gradient with visible dot texture), and **pure white** for the end card.
Every scene carries one idea and one headline, set in heavy geometric black type with tight tracking.
Neon green is the only accent and appears only on the dark ground (window ring, rotating verbs, terminal
prompt, status LED).

**Key characteristics:**

- **Three-ground rhythm:** dark > sunburst > dark > white. Contrast between neighbouring scenes is the structure.
- **Glowing presenter window:** rounded 88cqw x 82cqh frame with a 0.3cqw neon-green border; white lower-third caption inside it.
- **Giant tight headlines** ('Three commands', 'Install the agent') in near-black on the sunburst, with a small white 'Step N' pill above.
- **White terminal card** with traffic-light dots, typed commands, a cyan-to-green progress bar and a large 'rendering … done'.
- **Word drum:** 'The agent' stays left in white; the verb on a 3D cylinder rotates in green on each spoken word.
- **Centred logo lockup:** 'Introducing' above 'HeyGen + stripe', the plus dead-centre.

## The Frame

- **Squint:** one headline per card, 6cqw or larger, dominates the ground.
- **Silence:** lockup, headline and drum frames are 60%+ empty ground; only the terminal card is dense.
- **Restraint:** green appears only on dark; the sunburst scenes use ink and white only.
- **Reference:** a polished payments-company launch film; failure looks like a busy dashboard or a second accent colour on the sunburst.

## Colors

Dark plate `#0A0C0B` with green streaks; neon green `#2FD261` (terminal `#35C838`); sunburst stops
`#F5C96A > #F59B3A > #E8408F > #8B5CF6`; ink `#1A1A1A` / `#141414`; white `#FFFFFF`. Terminal secondary text
`#9B9B9B`, link blue `#5739FF`, pill tint `#E4F7E2`, progress bar `#19C7F5 > #35C838`.

## Typography

Display is a heavy geometric grotesk (ABC Solar Display Bold) with tracking −0.02 to −0.03em; fall back to
Hanken Grotesk 800. UI text is TT Norms Pro DemiBold (fallback Hanken Grotesk 600). Captions are white, 2.5cqw,
with a soft dark text shadow, centred in the lower third, no box.

## Depth & Surface

Soft shadow under the white terminal; a faint halo on the presenter window; blur-in on entrances (`blur 8-18px` to 0)
as faked motion blur on flat layers only. Never apply a CSS filter to the 3D cylinder.

## Shapes

Rounded: window 1.4cqw, terminal about 1.2cqw, pills fully round. Logos are flat white.

## Frame Treatments

1. **Presenter bookend:** dark plate, neon-ringed window with caption.
2. **Lockup:** 'Introducing' + 'HeyGen + stripe' dead-centre; slow scale-up, then an explode-out.
3. **Giant headline:** sunburst ground, huge near-black two-line headline, supporting line low-centre.
4. **Step card:** 'Step N' pill + one headline, typing cursor optional.
5. **Terminal card:** white window, typed command, progress bar, 'rendering … done'.
6. **Word drum:** dark plate, 'The agent' + rotating green verbs, caption below.
7. **End card:** fade to white over the held presenter.

## Composition Rules

### Do
- Hard-cut between scenes of the same ground; crossfade only when luminance differs a lot.
- Blur-in text; sync each rotating verb to the spoken word; one headline per card.
- Keep everything centred; end on white.

### Don't
- Don't crossfade two similar-luma scenes (the midpoint dip reads as a flash).
- Don't blur 3D elements; don't leave a static frame for over 1s (keep the sunburst drifting).
- Don't put green on the sunburst or an extra accent hue anywhere.

## Aspect-Ratio Behavior

16:9 primary. 9:16: stack the lockup vertically, narrow the window to 90cqw width, keep captions in the lower third. 1:1: centred, headline 7cqw.

## Numerals & Claims

All command text, prompts and figures are placeholders unless supplied by the script.

## Pre-Render Self-Audit

- Three grounds present and alternating; no green on the sunburst.
- Headline 6cqw+, tight tracking, one per card.
- Sunburst drifts; no frame static over 1s.
- Captions white, lower third, no box.

## Known Gaps

- Source code lists an inset glow and a strong 0.5-opacity outer glow on the presenter window; only a thin neon-green border with a barely visible halo shows in the sampled frames, softened.
- Source code lists a slow halftone scale drift (1.04 to 1.14); motion is not verifiable from still frames, the dot texture itself is visible and kept.
