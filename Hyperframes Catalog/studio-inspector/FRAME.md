---
version: alpha
name: Living Halftone Canvas — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the Studio Inspector launch film. One living green/cyan halftone dot
  field on a deep dark-green ground runs behind every scene, shifting hue and drifting with each cut.
  Warm cream bold-sans headlines, serif-italic accent words that fade gold to coral, dark glass app
  windows, a green selection outline with a measured gap, and small dark caption pills. Precise, editable, calm.
unit: the frame — 1920×1080 primary
principle: the background moves first · foreground follows · text-first scenes

colors:
  canvas: "#07100C"
  dot-green: "#45D86E"
  dot-cyan: "#19B7D5"
  warm-paper: "#FFF8E9"
  amber: "#F1B64A"
  coral: "#D97757"
  ink: "#191713"
  claude-surface: "#F5F4ED"
  muted-meta: "rgba(255,248,233,0.3)"
  caption-pill: "rgba(10,12,11,0.85)"
  select-green: "#3DEB7A"

typography:
  headline:  { fontFamily: "Inter", px: 116, weight: 800, tracking: "-0.04em", color: "warm-paper" }
  big-moment:{ fontFamily: "Inter", px: 260, weight: 900, tracking: "-0.05em" }
  serif-accent:{ fontFamily: "Fraunces", px: 150, style: italic, weight: 600, gradient: "amber > coral" }
  mono-meta: { fontFamily: "IBM Plex Mono", px: 14, color: "muted-meta" }
  chat-ui:   { fontFamily: "Inter", px: 24, weight: 500 }
  caption:   { fontFamily: "Inter", px: 26, weight: 700 }

components:
  halftone-field:
    description: "Dense raster of round dots in green/cyan across the whole ground; slowly breathes and drifts leftward; hue-rotated, saturated and blurred per scene; moves a beat BEFORE each scene change."
  accent-word:
    description: "A serif-italic word in a gold-to-coral gradient set between bold sans words ('But / for / now' staggered diagonally)."
  glass-app-window:
    background: "dark translucent, thin edge"
    radius: "18px"
    parts: "title bar with model chip and avatar, 'Done.' rows, right-aligned user bubbles, composer with coral send button"
  selection-outline:
    border: "2px solid {colors.select-green}"
    description: "Green rounded outline around the selected text layer with a measured gap label ('20px') in green."
  inspector-panel:
    description: "Narrow editor panel at the right edge with tiny mono labels, a colour chip and font list."
  caption-pill:
    background: "{colors.caption-pill}"
    typography: "{typography.caption}"
    radius: "999px"
    placement: "lower centre"
  scrub-bar:
    description: "Bright green progress bar at the bottom of a dark video frame."
---

# Living Halftone Canvas — Frame (video / frame layer)

## Overview

A warm technical launch film on **one living halftone canvas**. The background is a dense field of green and
cyan dots over deep dark green. It never stops: it drifts leftward and breathes continuously, and its hue and
blur shift per scene. Text-first scenes carry one large headline in warm cream. Graphic scenes show a dark
glass chat window, a selected-element demo with a green outline, and a glass video frame with a scrubber.

**Key characteristics:**

- **Halftone dot ground** everywhere — never flat; a large move in the field precedes each cut.
- **One big H1 per scene**, cream on green dots; opener lockup top-left.
- **Serif-italic accent words** with a gold-to-coral gradient ('But for now', 'close ≠ ship').
- **Dark glass app windows** with rounded corners and a coral send button.
- **Selection demo:** green rounded outline around a text layer, a tiny green measure label.
- **Dark pill captions** lower-centre; mono metadata very small and low-contrast.
- **Cut-the-curve transitions:** accelerate-out with blur, decelerate-in in the same direction.

## The Frame

- **Squint:** one cream headline dominates the dot field.
- **Restraint:** greens and cyans in the ground; warm cream, amber and coral only for text and accents.
- **Reference:** a living poster; failure is a flat dark terminal or a slide deck.

## Colors

Ground `#07100C`; dots `#45D86E` / `#19B7D5`; text `#FFF8E9`; amber `#F1B64A`; coral `#D97757`; ink `#191713`.

## Typography

Inter heavy with negative tracking for headlines; Fraunces italic for the editorial accent word; IBM Plex Mono at
9-14px for metadata. Chat UI in Claude-like sizes.

## Depth & Surface

The dot field plus per-scene blur; glass windows with a thin edge; no drop shadows.

## Shapes

Rounded windows (18px), pill captions, green rounded selection box.

## Frame Treatments

1. **Opener lockup:** wordmark top-left over dots.
2. **Single-word title:** 'Inspector' dead-centre.
3. **Selection demo:** text with a highlighted letter and the panel sliding in.
4. **Headline with gradient word:** one line, one accent word.
5. **Staggered diagonal:** 'But / for / now'.
6. **Serif relation:** 'but close ≠ ship'.
7. **Chat window:** dark window with 'Done.' rows.
8. **Measured edit:** outlined layer, gap label, caption pill.
9. **Video frame + scrubber:** glass frame with a bright green bar.
10. **Closing line:** two-line bold sentence, blurred in.

## Composition Rules

### Do
- Move the field before the foreground; first visible motion within 0.2s of each scene.
- Wrap each scene in a stage so the whole scene can slide as one.

### Don't
- Don't use a flat dark ground; don't use hard cuts; don't put two accent words in a line.

## Aspect-Ratio Behavior

16:9 primary. 9:16: headline 96px in 3 lines; window 92cqw. 1:1: oversize the dot plate so moves never reveal edges.

## Numerals & Claims

Pixel values and chat text are illustrative placeholders.

## Pre-Render Self-Audit

- The halftone is visible and moving on every frame.
- One headline per scene; accent word in a serif italic.

## Known Gaps

- Source code lists a 1px light border and a soft vignette on glass windows; not clearly visible in the sampled frames, softened to a thin edge and vignette omitted.
