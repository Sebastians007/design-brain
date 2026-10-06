---
version: alpha
name: Website to Video Trailer — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the website-to-HyperFrames launch trailer. A music-driven,
  punchy cinematic-tech look: a light paper cold open, stacked dark agent windows, a full-bleed
  hard-cut capability reel with glass tag chips and bold bottom captions, and a dark aurora end card
  with a blue-to-green gradient wordmark and a mono install pill.
unit: the frame — 1920×1080 primary
principle: hard cuts on the beat · one word per clip · glass chip + bold caption

colors:
  void: "#0A0A0A"
  void-soft: "#15161A"
  terminal: "#1A1B1F"
  end-card: "#06070B"
  paper: "#F5F3EE"
  ink: "#0B0B0F"
  text: "#F7F8F8"
  muted: "#8A8F98"
  hairline: "#2A2C30"
  cyan: "#00C3FF"
  violet: "#533AFD"
  pink: "#F44BCC"
  green: "#3ECF8E"

typography:
  caption:   { fontFamily: "Inter", px: 60, weight: 800, tracking: "-0.025em" }
  clip-tag:  { fontFamily: "Inter", px: 42, weight: 400 }
  wordmark:  { fontFamily: "Inter", px: 200, weight: 800, tracking: "-0.03em", gradient: "violet > cyan > green on the word Frames only; Hyper is white" }
  promise:   { fontFamily: "Inter", px: 58, weight: 500, color: "muted" }
  mono-label:{ fontFamily: "JetBrains Mono", px: 17, weight: 400, tracking: "0.18em", upper: true }
  mono-cmd:  { fontFamily: "JetBrains Mono", px: 44, weight: 400 }

spacing:
  tag-offset: "56px"
  caption-bottom: "88px"

components:
  tag-chip:
    background: "rgba(11,11,15,0.32)"
    borderLeft: "2px hairline"
    typography: "mono index (01 - PRODUCT LAUNCH) over brand name in {typography.clip-tag} scaled to 26px"
    placement: "top-left, 56px offset"
    variant: "light chips (white 80%, dark text) over bright clips"
  caption-pill:
    typography: "{typography.caption}"
    placement: "bottom-centre, 88px from edge"
    description: "One word or short phrase per clip; pops in with a 0.26s overshoot."
  agent-window:
    background: "{colors.terminal}"
    chrome: "traffic-light dots, small title text"
    description: "Fake IDE/terminal panels stacked with slight rotation and depth, then spread into a 2x2 grid."
  install-pill:
    background: "rgba(255,255,255,0.06)"
    typography: "{typography.mono-label} at 28px"
    border: "1px solid {colors.hairline}"
  aurora:
    description: "Faint violet and green radial haze over #06070B with a few tiny particles."
---

# Website to Video Trailer — Frame (video / frame layer)

## Overview

A hype trailer: mostly dark (`#0A0A0A` void) with a single light paper start. Four AI-agent windows each receive a one-line prompt, the music drops, and a hard-cut reel of
captured site outputs plays one per beat. The end card is a dark aurora with a large gradient wordmark.

**Key characteristics:**

- **Light-to-dark pivot:** paper cold open, then a cut into the dark reel (light clips such as white brand screens recur).
- **Reel overlays stay minimal:** a glass tag chip top-left, a bold caption bottom-centre; the clip itself does the work.
- **Bold Inter captions** (60px, weight 800, tight tracking); light chip variants when the clip is bright.
- **Agent windows** dark, stacked then spread 2x2 and greyed behind a big word.
- **End card:** dark aurora, gradient wordmark, two promise lines, mono install pill, cyan CTA caption.

## The Frame

- **Squint:** the clip or the wordmark dominates; overlays are small.
- **Restraint:** overlays never cover the clip subject; no caption repeats on-screen text.
- **Reference:** a product-trailer cut to a drop; failure is a slow crossfaded slideshow.

## Colors

Void `#0A0A0A`, panels `#15161A`, terminal `#1A1B1F`, end card `#06070B`; paper `#F5F3EE` for the light open.
Text `#F7F8F8`, muted `#8A8F98`. Accents: cyan `#00C3FF` (primary), violet `#533AFD`,
pink `#F44BCC`, green `#3ECF8E`; brand colours may appear inside captured clips.

## Typography

Inter for captions, tags and the wordmark; JetBrains Mono for prompts, labels, index numbers and the install
command.

## Depth & Surface

Tag chips are small translucent dark (or light) boxes; the end card has a faint haze and tiny particles. No film grain.

## Shapes

Rounded windows (about 12px), pill captions, hairline-edged chips with a left rule.

## Frame Treatments

1. **Cold open:** paper ground, dark command bar, bold caption.
2. **Agent stack:** four dark windows rotated and layered, then spread to a 2x2 grid.
3. **Big phrase:** three stacked giant lines ('Now / any site becomes / video.').
4. **Reel clip:** full-bleed clip + tag chip + one-word caption.
5. **End card:** aurora, gradient wordmark, two promise lines, install pill, cyan CTA.

## Composition Rules

### Do
- Hard-cut every clip on a beat; give each clip one word and one caption.
- Pick the light or dark chip variant to match the clip brightness.

### Don't
- Don't crossfade the reel; don't nest videos in sub-compositions; don't caption text already on screen.

## Aspect-Ratio Behavior

16:9 primary. 9:16: chip top-left, caption bottom at 12cqh, wordmark 150px. 1:1: wordmark 140px.

## Numerals & Claims

Brand names, clip indices and the install command appear only if supplied; otherwise use placeholders.

## Pre-Render Self-Audit

- One light moment only; the rest is dark.
- Every reel clip has a tag chip and one caption.
- End-card wordmark carries the blue-to-green gradient.

## Known Gaps

- Source code lists a Bungee Shade comic word with yellow fill and hot-pink offset shadow (joke beat); not visible in the sampled frames, omitted with its colour tokens.
- Source code lists an 80ms white flash at the drop; not visible in the sampled frames, omitted.
- Source code lists backdrop blur on chips/captions and brand-colour glows around agent windows; neither is visible in the sampled frames, omitted.
- Source code lists four aurora blobs (violet, cyan, green, pink) and a spotlight; only a faint violet/green haze and tiny particles are visible, softened.
- Source code applies the wordmark gradient across the full word; in the frames only "Frames" carries it, "Hyper" is white, corrected.
