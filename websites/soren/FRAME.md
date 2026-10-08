---
version: 1.0
name: Soren — Editorial Portfolio Frame System
source: https://soren-template.framer.website/
creator: Bryn Taylor
observed: 2026-10-06
unit: responsive website; optional 1920×1080 video adaptation
principle: extreme serif scale, calm sans copy, technical mono labels, generous space
evidence: desktop screenshots and rendered DOM measurements; responsive values from public stylesheet
colors:
  canvas: '#FFFFFF'
  ink: '#000000'
  panel: '#F0F0F0'
  tag: '#DFE4DF'
  body: '#5C5C5C'
  muted: '#707070'
  darkBody: '#CFD8CF'
  accentNative: 'color(display-p3 1 0.173285 0)'
  accentFallback: '#FF2C00'
fonts:
  display: {family: 'Halibut Variable', weight: 20, lineHeight: 0.8}
  sans: {family: 'Switzer', weights: [400, 500, 600]}
  mono: {family: 'Chivo Mono', weight: 500}
layout:
  maxWidth: 1600
  gutters: {desktop: 96, tablet: 64, phone: 40}
  sectionPadding: {desktop: 160, tablet: 112, phone: 80}
  breakpoints: {desktopMin: 1200, tabletMin: 810, phoneMax: 809}
---

# Soren — Editorial Portfolio Frame System

This is an independently authored reconstruction guide to the **live Soren preview**, not the editable project. It preserves the supplied four-file format and adds implementation evidence. The source is a one-page portfolio by Bryn Taylor. It was inspected on October 6, 2026. Screenshots are the visual authority; measurements explain them; recommended additions are marked.

## Read this before building

Read `AI-HANDOFF.md`, this file, `RESPONSIVE-AND-MOTION.md`, and `FIDELITY-CHECKLIST.md`. Inspect `reference-frames.jpg` and the full-page capture. Use `design-tokens.json` and `assets-manifest.json` for machine-readable values. Open `frame-showcase.html` for a self-contained visual guide.

Do not translate this into a generic SaaS hero. Its distinguishing feature is an enormous, unusually light, high-contrast serif name above a tiny vertical rule. The serif is **Halibut Variable at weight 20**. Large body headings use **Switzer**, and small navigation/metadata use **Chivo Mono**. Substituting Georgia, Inter, or a standard monospace font materially changes the result.

## Evidence and precedence

1. Individual screenshots and the complete-page screenshot: actual rendered appearance.
2. Values marked measured: rendered geometry/styles at one desktop viewport.
3. Values marked CSS-derived: declarations found in the live page's public styles.
4. Values marked recommended: independently chosen implementation or accessibility behavior.

The inspected browser viewport was 1363×936 CSS pixels at DPR 1. The document content width was 1348px because the vertical scrollbar occupied 15px. The 96px gutter therefore leaves **1156px** usable content. Full-page screenshot coordinates use the 1348px document width. Do not use the raw document Y positions as absolute positioning instructions.

Body copy in the specimen guide is original substitute copy. The reference screenshots retain the source appearance. Replace name, prose, testimonials, and contact details with the user's content without changing visual hierarchy.

## Page order and rhythm

| Sequence | Treatment | Essential geometry |
|---|---|---|
| Intro strip | Gray-green promotional strip | 40px high; small centered sans text. Optional template-demo chrome. |
| Navigation | Wordmark left, links and local time right | 96px side gutters; 24px link spacing; 16px mono labels. |
| Hero | White, immense serif name, rule, centered description | 120px vertical / 96px horizontal padding; 24px stack gaps. |
| Animated ASCII | Full-width monochrome texture band | 300px desktop height, 16px mono cells, 16px line height. |
| Work index [01] | Three vertically stacked projects | 160px section padding; 48px header-to-content separation. |
| About [02] | Full-width black section | White titles, gray-green body; biography + services/clients; three photos. |
| Process [03] | Four white editorial rows | Large sans step label left; copy and pills right; fine dividers. |
| Testimonials [04] | Pale gray ground | Three flat white cards; medium sans quotes; small avatar/mono credit. |
| Experience [05] | Four restrained white rows | Logo + company, role, date; fine rules; no decorative timeline. |
| Contact [06] | Huge serif address inside a flat gray panel | Copy-address interaction; prose left, social rows right below. |
| Footer | White, sparse columns | Wordmark, anchor links, credits; top rule and generous spacing. |

The intro strip, floating purchase button, badge, and marketplace footer credits belong to the preview's template marketing. Record them as source context. Omit them from a personal production site by default; include them only for an exact screenshot exercise. This is a recommended content choice, not an observation that they are absent.

## Measured typography

| Role | Typeface | Size at inspected desktop | Weight | Leading | Tracking |
|---|---|---:|---:|---:|---:|
| Hero name's actual inner element | Halibut Variable | 257.345px | 20 | 205.876px / 0.8 | normal |
| Large contact address | Halibut Variable | 138.824px | 20 | 111.058px / 0.8 | normal |
| Hero description / small headings / quotes | Switzer | 24px | 500 | 28.8px / 1.2 | −0.025em |
| Project heading | Switzer | 40px | 500 | 48px / 1.2 | −0.04em |
| Process step | Switzer | 56px | 500 | 57.12px / 1.02 | −0.04em |
| Body paragraph | Switzer | 20px | 400 | 29px / 1.45 | −0.025em |
| Section / navigation / date | Chivo Mono | 16px | 500 | 19.2px / 1.2 | −0.02em |
| Tag | Chivo Mono | 13px | 400 | 15.6px / 1.2 | +0.02em |

**Measurement trap:** the outer H1 computed as a generic 24px sans element; the actual visible title is its nested custom element. Use the inner element's values above. A naïve H1 scrape would produce the wrong font, weight, and scale.

The title uses fit-to-width behavior rather than a fixed 257px font at every screen. Fit one line into the available width after the real font is loaded. Keep 0.8 line height and preserve the name's visible margins. A longer replacement name must receive a smaller font. Do not compress or horizontally transform the glyphs.

## Colors, surfaces, and shapes

White and pure black carry almost the entire site. `#F0F0F0` is the testimonial/contact surface. `#DFE4DF` is the subdued tag/strip fill. Body gray is `#5C5C5C`; secondary metadata is `#707070`; dark-section paragraph gray-green is `#CFD8CF`.

The original accent is Display-P3, not a plain hex color. Preserve `color(display-p3 1 0.173285 0)` when supported. `#FF2C00` is a **recommended fallback**, not a measured sRGB equivalent. Accent appears sparingly: 10×10px square section marks and the small hero email. Keep the square mark sharp; it is not a round status dot.

Project images and the contact panel have square corners. Tags alone are fully rounded: 1000px radius, 6px vertical / 12px horizontal padding, 8px gap. The carousel arrow is a 40px white circular button, 16px from the right edge and vertically centered, with a 16px icon and 6px backdrop blur. It has a 0.25s opacity transition. These are measured inline styles.

Fine rules separate headers, rows, and lists. Avoid shadows, glass cards, gradients behind UI, thick borders, or pervasive rounding. Exact hairline opacity varies by surface and was not normalized into a single measured color; use the recommended light/dark rule tokens and compare screenshots.

## Composition details

### Hero

At the measured width, the name occupies a 1156×206px box beginning at x=96, y=232. The hero container begins at document y=112. The title is visually immense but light, with broad white space around it. The vertical black rule is **2×120px**. Below it, the centered description has a **760px maximum width**, 24px medium sans type, and roughly two lines. A small mono availability/email row follows with 12px gaps.

The name has an interactive particle canvas extending beyond the text box. The existence of the canvas and the template's advertised particle behavior are verified; particle density, forces, restoration speed, and exact shader/algorithm are **not** recovered. Reproduce the resting glyph appearance first, then implement the effect described in the motion document.

### Project rows

Each project image is 1156×868.125px at the measured desktop width: an approximately **1600:1201 / 4:3** ratio. Images live in a horizontal track with a **16px gap**. A strip of the next image peeks at the right edge beyond the normal content column. Clip horizontal overflow at the page, not at the content column, if reproducing this detail.

The description wrapper is 580px wide, centered at x=384, with 32px padding above. It contains a 40px heading and smaller bracketed year on the same baseline, body paragraph, then rounded tags. The next project begins 64px after this description block. Do not turn the projects into a three-column thumbnail grid.

Public images are bundled as image pairs in `assets/images/`: 01+02, 04+05, 07+08. Asset 03 is the arrow. The carousel control was present and clicked during inspection, but a stable slide-advance result was **not** observed. Its required reconstructed behavior is a recommendation, not a claim of verified source timing or wrap semantics.

### About

The black block contains the section header and a content grid. At desktop, the biography and right-side lists are each about 498px wide with a 160px inter-column space. There are two short biography paragraphs. The right stack has two list groups with 64px separation; rows use mono text and fine horizontal rules.

The photo triptych sits below with 16px gaps and equal widths of roughly 374.7px. Images are top-aligned but have different displayed heights: about 276 / 553 / 374px. Preserve this varied silhouette rather than making all images the same height. The downloaded originals' dimensions are not identical to their visible crop boxes; use `object-fit: cover` with the specified container ratios.

### Process, proof, experience, contact

Process rows split into two columns of about 562px with a 32px gap. Each row combines a 56px title with body copy and rounded tags. Testimonial cards sit three across in a pale gray section; quotes use 24px Switzer 500 and credits use mono. Avatars are 36px square. Experience rows have 36px square logos, company at the left, role in the middle, and date at the right.

The contact panel is a flat `#F0F0F0` rectangle with 24px vertical / 32px horizontal padding. Its inner serif address fits the width, around 139px in this capture. The source address is a span with button semantics, not a `mailto:` anchor. Provide a native button for the recreation and report success only after copying succeeds. The lower prose/social area is roughly a 1:2 grid with 48px separation; social links get full-width row rules and right arrows.

## Frame / video adaptation — recommended, not native source

The source site scrolls; it is not a fixed 16:9 video composition. For a 1920×1080 frame preset, preserve typography and compositional ratios instead of squeezing a whole long page into a slide. Use 136px side safe margins, white or black full-frame backgrounds, one major headline or image per frame, 22px mono labels, and 34px body copy. These are recommended adaptation values.

Use a hero-title frame, a 4:3 project-media frame, a black biography/list frame, a process-pair frame, a proof-card frame, and a serif-contact frame. Reserve the bottom 180px for captions. The adaptation's caption font is Switzer 500, not the uploaded preset's Inter 900. The caption skin uses a red underline for the current word and gray upcoming words. It is a new companion treatment and was never present on the source website.

## Fidelity failures to prevent

- A heavy sans hero instead of Halibut at weight 20.
- Generic off-white paper instead of the source's mostly pure white.
- A short compact hero, missing rule, or a narrow title confined to half a page.
- Uniformly rounded images, elevated cards, or colorful gradients.
- Thumbnail project grid instead of three large vertical project presentations.
- Missing black section, mismatched mono labels, or a gallery with equal image heights.
- Rasterized headings used as the final implementation; screenshots are references only.
- Hover-only interactions without keyboard or touch equivalents.

## Known gaps

The project/CMS implementation and proprietary component source were not accessed. Exact particle and ASCII algorithms, detailed rollover timing, carousel wrap behavior, and copy-success visuals were not recovered. Phone/tablet declarations were read from public CSS; their rendered layouts were not captured in this session. The custom specimen guide demonstrates recommendations for those gaps and must not be treated as evidence that they are native source behaviors. Font and image provenance is retained in the asset manifest; the public preview does not itself establish production redistribution permissions.
