---
version: alpha
name: Quiet Luxury Lowercase Poem — Frame (video / frame layer)
description: >
  Frame-layer preset distilled from the "Oblist" reverse-engineered reference. A quiet-luxury product film
  that sounds like a human aside: tiny lowercase neo-grotesk words appear one at a time on warm cream paper,
  long holds build silence, product photography carries all colour, photos sit inside the sentence as rounded
  cards (single or fanned), words split around the product, and an ultra-heavy all-caps wordmark lands on the
  hero product at the end. Values are estimates inferred from sampled frames.
unit: the frame — 1920×1080 primary
principle: restraint, silence, white space · photos carry colour · the image sits inside the sentence

colors:
  cream: "#F7F0E6"
  cream-light: "#FBF5EA"
  ink: "#0A0A0A"
  grey-fade: "#9A9A9A"
  pill-border: "#E6DFD3"
  photo-oak: "#B8956A"
  photo-linen: "#D8CDB8"
  photo-studio: "#E8E8E4"
  photo-rose: "#D4B5AC"

typography:
  poem:       { fontFamily: "Inter", px: 44, weight: 500, tracking: "-0.01em", case: "lowercase", align: "centre", placement: "about 50% height" }
  poem-small: { fontFamily: "Inter", px: 30, weight: 500, case: "lowercase" }
  wordmark:   { fontFamily: "Montserrat / Gotham Black", px: 110, weight: 900, tracking: "-0.02em", upper: true, color: "ink" }
  ellipsis:   { fontFamily: "Inter", px: 44, weight: 900, note: "'...' rendered heavy as a typographic beat" }

components:
  poem-line:
    description: "A single centred lowercase line on cream; words appear individually with tiny baseline offsets; holds of 1-3s on tiny text."
  gradient-fade-line:
    description: "A phrase whose first letters fade in from light grey ('Sorry to interrupt') before the rest reads black."
  outline-pill:
    description: "Cream pill with a thin lighter border around one phrase ('your video.'), UI-chip feel."
  photo-card:
    radius: "14px"
    description: "Rounded-corner product photo centred in the sentence; text flanks it left and right; can fan as three rotated cards (about ±10°) behind the front one."
  scatter-converge:
    description: "Words sit apart at scattered positions (left/right of the subject) within the sentence."
  full-bleed-photo:
    description: "Soft studio-lit product photo edge to edge, with split words placed on either side of the product."
  hero-wordmark:
    description: "Ultra-heavy black all-caps brand name centred on the hero product (an armchair back)."
---

# Quiet Luxury Lowercase Poem — Frame (video / frame layer)

## Overview

A spoken-style poem set in small lowercase type on warm cream. It reads as an interruption that sounds like
a person: *sorry to interrupt your video, when someone walked into your home, stopped, and asked: where did
you find this?* About 60% of the film is text-only on cream with long, quiet holds; about 40% is soft
studio product photography. There is no accent colour — the photographs carry the colour.

**Key characteristics:**

- **Tiny lowercase words** (about 44px at 1080p), centred, one at a time, with small baseline offsets.
- **Pill outline** around one phrase and a **heavy ellipsis** as a typographic beat.
- **Image inside the sentence:** a rounded photo card with words either side; stacked fan of three rotated cards.
- **Split words around the product** on full-bleed studio photos.
- **Hero wordmark:** ultra-heavy all-caps black text laid over the product.
- **Hard cuts** on word boundaries for text beats.

## The Frame

- **Squint:** almost nothing — a few words, lots of cream.
- **Silence:** text beats hold 1-3 seconds; white space dominates.
- **Restraint:** no accent colour; wordmark pure black.
- **Reference:** a quiet-luxury interruption ad; failure is bold colour, big type or stock-photo busyness.

## Colors

Cream `#F7F0E6` (drifting to `#FBF5EA`), ink `#0A0A0A`. All other colour is in the photography: warm oak and
walnut, linen beige, grey-white studio sweeps, dusty rose.

## Typography

A clean neo-grotesk, lowercase, regular-medium weight, tight tracking for the poem; an ultra-heavy geometric
sans in capitals for the wordmark.

## Depth & Surface

Flat cream; photos with soft studio lighting and no grading.

## Shapes

14px rounded photo cards, a thin-bordered pill, nothing else.

## Frame Treatments

1. **Poem line:** one lowercase line on cream.
2. **Pill phrase:** one phrase outlined in a pill.
3. **Fade-in line:** first letters fade in from grey.
4. **Baseline-offset pair:** two short phrases at slightly different heights.
5. **Photo in sentence:** words left, rounded photo card, words right.
6. **Fanned cards:** three rotated cards behind the front photo.
7. **Tiny hold:** very small text for a long silent beat.
8. **Full-bleed split:** studio photo with a word on each side of the product.
9. **Hero wordmark:** all-caps brand name on the hero product.

## Composition Rules

### Do
- Hold tiny text 1-3s; use gentle ease-out slides (0.3-0.5s per word).
- Let words sit apart on either side of the subject for one beat.

### Don't
- Don't add an accent colour, shadows or large type except the wordmark; don't hurry the holds.

## Aspect-Ratio Behavior

16:9 primary. 9:16: photo card 70cqw wide with words stacked above and below it. 1:1: poem 40px.

## Numerals & Claims

The poem is placeholder copy; replace with the supplied script. Use only supplied product photography.

## Pre-Render Self-Audit

- Majority of frames are text on cream; photos carry all colour.
- Wordmark is the only heavy type.

## Known Gaps

- Source code lists very faint paper mottling on the cream; not visible in the sampled frames, omitted.
- Source code lists blur-zoom transitions between photo beats; not visible in the sampled frames, omitted.
- Source code lists a black -> grey -> faded right-edge wipe and scatter/re-converge drift; only a grey fade on the first letters and split words are visible, softened.
- Source code lists three fanned cards at about +/-10 degrees; the frames show a stack of slightly rotated cards behind the front photo, kept without asserting the angle.
