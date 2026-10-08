# Westbridge — website recreation specification

Preview: https://westbridge.framer.media/  
Creator: Wireframe  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Westbridge pairs a cinematic executive portrait with quiet editorial typography. The photographed subject sits toward the right, while a report pill, compact overview and pale contact button occupy the left. A large two-tone serif statement anchors the lower image. Below, off-white and light-gray fields alternate with dark sections; small sans-serif labels introduce thin serif headings, image-led service links, oversized figures and an approach presentation. Arrow suffixes, modest corners and broad margins keep the tone precise. The distinctive effect depends on image crop, restrained contrast and light-weight Sentient letterforms. The laptop and phone surrounding the official images are promotional staging, excluded from the interface.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the declared homepage order: hero, welcome, expertise, approach, testimonial, insights, footer; do not invent a standalone case-study grid on this home page.
- Use Sentient 300 for the observed editorial display roles and TASA Orbiter for body/navigation; loaded font families do not imply visible roles.
- Reproduce hero nested-span foreground overrides: #f7f7f7 primary text and #a09c97 secondary text, rather than inheriting the dark h1 parent token.
- Use the portrait as image media with lateral and bottom gradients. The source exposes no video element; a testimonial Play affordance alone does not verify playback.
- Exclude marketplace device frames and template purchase promotion from the consulting-site recreation; retain functional service/contact routes with visible focus states.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero h1 — CSS declared, not rendered | Sentient | 300 | 76 | 83.6 | -0.05em |
| Section h2 — CSS declared, not rendered | Sentient | 300 | 54 | 64.8 | -0.04em |
| Approach h4 / footer CTA — CSS declared, not rendered | Sentient | 300 | 32 | 41.6 | -0.04em |
| Service and article h5 — CSS declared, not rendered | Sentient | 300 | 22 | 28.6 | -0.03em |
| Metric figure — CSS declared, not rendered | Sentient | 300 | 62 | 80.6 | -0.04em |
| Overview body — CSS declared, not rendered | TASA Orbiter | 400 | 17 | 23.8 | 0em |
| Navigation / CTA — CSS declared, not rendered | TASA Orbiter | 500 | 14 | 18.2 | 0em |
| Section label — CSS declared, not rendered | TASA Orbiter | 500 | 13 | 16.9 | 0em |
| Report pill / metric caption — CSS declared, not rendered | TASA Orbiter | 400 | 14 | 18.2 | -0.01em |
| Service subtitle — CSS declared, not rendered | TASA Orbiter | 500 | 15 | 19.5 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#fafaf9",
  "paper": "#e5e5e3",
  "ink": "#080808",
  "accent": "#33312c",
  "muted": "#8f8b85"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 4px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero Section | Unverified | Unverified | Portrait image; transparent navigation; report pill, overview, contact CTA and large lower serif title. Declared height 100vh; no rendered geometry measured. |
| Welcome Section | Unverified | Unverified | Firm introduction and four figures: engagements, generated value, offices and countries. Text-reveal and metric span structures are present. |
| Expertise Section | Unverified | Unverified | Intro, contact CTA and three image-led links: M&A Advisory, Performance, Growth; desktop, tablet and mobile structures. |
| Approach Section | Unverified | Unverified | Dark approach narrative, About Us link and feature-carousel structures with three numbered tab states, image/metric panels and narrow-screen descriptions. |
| Testimonial Section | Unverified | Unverified | Client-success heading, case-studies CTA, testimonial imagery, Play affordance, quote/attribution and three results. |
| Blog Section | Unverified | Unverified | Briefing label, insights heading, View All route and editorial cards with category/date/title/image/excerpt; responsive variants. |
| Footer | Unverified | Unverified | Business-transformation CTA, menu/support columns, required email subscription form, social routes, logo, legal links and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: named Text Reveal, Progress Animation, active/inactive numbered approach tabs, Default/Hover In service variants, and initial low-opacity translated spans. UNVERIFIED: triggers, timing, autoplay, looping, carousel gesture handling, completed reveal states and testimonial playback. OPTIONAL: implement short opacity/transform transitions, keyboard-operable tabs and reduced-motion static states after runtime requirements are chosen.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet >=810px and <=1199.98px, phone <=809.98px; several text preset queries use integer maxima 1199px and 809px. Hero gutters switch from 40px to 16px. OPTIONAL recreation: retain these boundaries, stack service cards and footer groups on narrow widths, preserve portrait focal position, avoid fixed text heights and verify wrapping at 809/810/1199/1200px.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Services category context

Category: Services / Consulting. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
