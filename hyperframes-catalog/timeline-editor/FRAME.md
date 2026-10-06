---
version: alpha
name: Giant Stair-Stacked Type on Apple White — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the timeline-editor launch film. A bright Apple-like off-white canvas
  with giant ultra-heavy, tightly tracked dark type stacked on a diagonal stair (each line at a different
  left margin, bleeding past the canvas edge), one brand-orange accent, a chat spiral that accelerates until
  a "limit reached" card appears, a flat colourful timeline of clip bars with a cursor dragging one, and a
  real dark editor recording. Laughs first, relief second.
unit: the frame — 1920×1080 primary
principle: type is the picture · stair-stack, not centred · one orange accent

colors:
  canvas: "#F5F5F7"
  ink: "#1D1D1F"
  orange: "#D97757"
  chat-cream: "#F5F4ED"
  chat-cream-2: "#F0ECE0"
  chat-border: "#E5E0D1"
  chat-ink: "#3D3929"
  chat-ink-dark: "#2A2720"
  chat-muted: "#6B6757"
  chat-muted-2: "#8C8674"
  green: "#29D200"
  cyan: "#00C4FF"
  alert-red: "#FF3B30"
  white: "#FFFFFF"
  clip-blue: "#4C9BFF"
  clip-purple: "#B37BEA"
  clip-yellow: "#EBC946"
  gold: "#C9A227"

typography:
  kinetic:    { fontFamily: "Inter", px: 240, weight: 900, tracking: "-0.045em", lineHeight: 0.88 }
  hero-word:  { fontFamily: "Inter", px: 500, weight: 900, tracking: "-0.045em" }
  chat-ui:    { fontFamily: "Inter / system sans", px: 22, weight: 400 }
  label-small:{ fontFamily: "Inter", px: 14, color: "chat-muted" }

components:
  stair-stack:
    description: "Left-aligned heavy lines placed off-centre at varied positions and sizes (the closing stack 'Save some / Save some tokens / Just click & drag' shares one left margin)."
  chat-spiral:
    description: "Centred Claude-style chat column on cream: user bubbles right, 'Done.' rows left, composer with an orange send button; 29 prompts in ~3.6s, accelerating with a growing blur."
  limit-card:
    background: "{colors.white}"
    radius: "14px"
    description: "'Session limit reached' modal over the chat."
  timeline-clips:
    description: "Flat horizontal clip bars (blue, purple, orange, yellow, green) on a faint ruler; a cursor drags the orange bar; a green playhead."
  orange-pill:
    background: "{colors.orange}"
    radius: "999px"
    description: "Pill that grows symmetrically then compacts into a timeline bar; carries a word like 'drag' in script italics."
  real-recording:
    description: "Full-bleed screen recording of the real editor (dark UI, waveforms, green playhead)."
  shimmer-word:
    description: "'tokens' set in gold."
  icon-flip:
    description: "A word is followed by a clock image."
---

# Giant Stair-Stacked Type on Apple White — Frame (video / frame layer)

## Overview

A self-aware product gag. The **problem act** exaggerates the pain of nudging sound timing through chat
('timing is tricky'): the chat spirals until a session-limit card appears. The **solution act** is a clean,
satisfying drag on a timeline. Everything sits on a bright `#F5F5F7` canvas with giant kinetic type; the only
brand colour is orange (`#D97757`) on pills, send buttons and the dragged clip.

**Key characteristics:**

- **Giant heavy type:** left-aligned lines at varied positions and sizes, often off-centre.
- **Ultra-heavy Inter 900** with tight tracking and tight leading; the script italic appears only inside the orange pill ('drag').
- **Chat spiral:** tiny bubbles, 'Done.' rows, accelerating with blur, ending in a limit card.
- **Colourful flat timeline** with clip bars and a cursor drag.
- **Orange pill** morphing into a timeline bar, labelled 'drag' in script italic.
- **One gold emphasis word** ('tokens').

## The Frame

- **Squint:** one huge line (or the timeline) fills the canvas.
- **Restraint:** ink + off-white + orange; gold only on a single emphasis word.
- **Reference:** an Apple-keynote gag; failure is centred small text with decoration.

## Colors

Canvas `#F5F5F7`, ink `#1D1D1F`, orange `#D97757`, chat creams `#F5F4ED / #F0ECE0`, alert `#FF3B30`.

## Typography

Inter 900 for statements (sizes vary wildly), a script italic inside the orange pill, Inter for the
chat UI at 15-26px.

## Depth & Surface

Flat colour with no grain; the chat spiral blurs as it speeds up; a bell icon sits in the editor recording.

## Shapes

Rounded white cards, pill shapes, rectangular clip bars.

## Frame Treatments

1. **Single line:** 'timing is tricky.' placed top, centre or right.
2. **Chat column:** centred on cream with the composer at the bottom.
3. **Limit card:** modal over the chat.
4. **Timeline + line:** 'Just use the timeline' beside the clip bars.
5. **Real recording:** zoomed editor shot.
6. **Stacked lines:** 'Save some / Save some tokens / Just click & drag'.
7. **Wordmark end:** heavy black wordmark on off-white.

## Composition Rules

### Do
- Reveal words on the voice timestamps; use blur ramps on fast scenes.
- Vary line size and position; keep type large.

### Don't
- Don't centre every line; don't use grain; don't add a second accent colour.

## Aspect-Ratio Behavior

16:9 primary. 9:16: lines at 200px stacked with offsets of 60-160px. 1:1: hero word 360px.

## Numerals & Claims

Chat values are illustrative placeholders.

## Pre-Render Self-Audit

- Type is the largest element; orange used once per frame.
- Lines are varied in position, not all centred.

## Known Gaps

- Source code lists Playfair Display italic 900 green contrast word (520px); not visible in the sampled frames, omitted.
- Source code lists 'know' in cyan-green-cyan gradient text and a gold gradient wipe on 'tokens'; only a plain gold 'tokens' is visible, rest omitted.
- Source code lists a 3D flip into the clock and a bell Lottie ring/shake; only the static clock and bell icon are visible, motion omitted.
- Source code lists a diagonal stair of x offsets (140-780px) bleeding off canvas and a soft shadow on the limit card; neither is clearly visible, softened/omitted.
- Source code lists motion-blur ramps (2 -> 10 -> 22px) as an effect; only mild blur on the fast chat is visible, specifics omitted.
