# Movlo — website recreation specification

Preview: https://movlo.framer.website/  
Creator: Ruslan Siiz  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Movlo places precise teamwork interfaces inside expansive painted landscapes. Its opening feels panoramic: pastel sky, distant mountains, and warm horizon light surround a centered white headline. Translucent charcoal capsules hold navigation and calls to action; acid lime arrow wells give each action a recognizable signature. Rounded black dashboards supply the counterweight, with thin timelines, compact avatars, and luminous active tasks. Further down, saturated feature stages alternate with quiet dark panels. A sentence assembled from miniature interface objects becomes a visual manifesto. Navy testimonial mosaics, landscape-backed benefit cards, and scenic editorial thumbnails repeat the same balance of atmosphere and operational clarity.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the panoramic painted landscape hero, centered copy, three compact capability cards, and large dark product demonstration below; avoid replacing the opening with a generic flat gradient.
- Treat the translucent charcoal pill and separate lime arrow well as a repeated action pattern across navigation, hero, and closing conversion areas.
- Keep the product interface dark, compact, and functional in appearance; lime identifies selected tasks, switches, and progress while scenery provides ambient context.
- Retain the inline object manifesto, alternating product feature stages, and asymmetric navy testimonial mosaic as distinct layouts instead of making every section a uniform card grid.
- Use the source's four viewport bands: at least 1920px, 1200–1919.98px, 810–1199.98px, and below 810px. Exclude monitor bezels and promotional montage framing from the site UI.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero headline, desktop variant declaration | General Sans | 600 | 60 | 60 | 0em |
| Section heading, 1200–1919px preset | General Sans | 600 | 48 | 57.6 | 0em |
| Feature heading, 1200–1919px preset | General Sans | 600 | 30 | 39 | 0em |
| Navigation | General Sans | 500 | 14 | 19.6 | 0.02em |
| Primary CTA | General Sans | 500 | 16 | 16 | 0em |
| Hero eyebrow | General Sans | 500 | 12 | 18 | 0.03em |
| Partner caption / body preset | General Sans | 400 | 16 | 25.6 | 0.02em |
| Feature description, desktop | General Sans | 400 | 14 | 22.4 | 0.02em |
| Tablet testimonial quote declaration | Inter | 700 | 16 | 22.4 | -0.04em |
| Hero capability microcopy | General Sans | 500 | 11 | 13.2 | 0.05em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#030404",
  "paper": "#161819",
  "ink": "#FFFFFF",
  "accent": "#E3FF48",
  "muted": "rgba(255,255,255,0.60)"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 32px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Floating navigation | Unverified | Unverified | Separate wrapper precedes main page: logo, six section/blog links, and capsule CTA. Collapsed menu variants are alternatives. |
| Panoramic hero | Unverified | Unverified | Hero: painted landscape, centered headline and CTA, AI/collaboration/setup capability cards, and dark product demonstration; desktop/tablet/mobile versions represent one section. |
| Partner proof | Unverified | Unverified | Partners: short trust caption and five logo components. |
| Modern team features | Unverified | Unverified | Heading+Cards #features: ordered Project Management, Calendar Integration, and AI-Powered alternating image/content feature stages with compact result figures. |
| Inline object manifesto | Unverified | Unverified | Heading+Cards #text-wrap: large centered statement with embedded team avatars, task switch, tools pill, and miniature interface objects. |
| Benefits grid | Unverified | Unverified | Headign+Cards #product: Integration, Security, AI Help Center, and Auto Workflows scenic cards. |
| Customer results | Unverified | Unverified | Quote #insights: asymmetric mosaic mixing statistics, abstract portrait cards, and customer quotations. |
| App integration platform | Unverified | Unverified | Second Quote wrapper: separate integration introduction and app/tool illustration; do not merge it with the earlier benefits grid. |
| Work organization demonstration | Unverified | Unverified | Unnamed framer-juusyq wrapper: Seamless Tasks, Scheduling, and Notes controls beside a dark product preview. |
| Pricing | Unverified | Unverified | Heading+News #price: Personal, Starter, and Advanced tables followed by a supporting quote component within the same section. |
| Frequently asked questions | Unverified | Unverified | Heading+News #faq: five question rows and a support contact component. |
| Latest updates | Unverified | Unverified | Heading+News: three dated article cards; mobile duplicated SSR copies are presentation variants rather than extra posts. |
| Closing scenic CTA and footer | Unverified | Unverified | Separate trailing wrapper: conversion headline and CTA, then scenic dark footer with logo/copyright, navigation, social icons, and legal/platform links. Large-Desktop, Small-Desktop, Tablet, and Mobile are alternatives. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Source contains Lenis smooth-scroll support, separate hero capability hover variants, feature/task variant controls, and reveal starting states including opacity 0 with translateY(100px). The reference shows a lime active underline and selected switch/task states. Exact transition duration, easing, autoplay cadence, pointer response, sticky behavior, and live dashboard functionality were not verified. Recommendation: modest state fades and short vertical reveals, reduced-motion support, and an immediately readable static state.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1920px, 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Recommendation: maintain four layouts matching declared media bands: >=1920, 1200–1919.98, 810–1199.98, and <810px. Wide desktop uses approximately 80% section widths; tablet reduces insets and product stage proportions; mobile collapses navigation, stacks cards, and keeps the panoramic hero crop purposeful. Preserve one logical content sequence despite SSR variant duplication. Source headline presets and inline variant declarations can differ; verify the active viewport's cascade before assigning mobile sizes. Keep task/calendar demonstrations legible rather than scaling an entire desktop mockup indiscriminately. Spacing and shape guidance: Recommendation: follow source 40px desktop section insets, 20px tablet, and 10–20px mobile; at 1920px and above center most content in 80% width / approximately 1536px. Hero declares 20px outer padding and a separate 48px internal inset. Recommendation: 999px for pills, 24–32px for product and content cards, and 32–48px for large scenic stages. The navigation's collapsed variant explicitly declares 32px corners; fit remaining radii by reference image rather than treating them as measured geometry. Recommendation: preserve the declared 64px heading-to-content rhythm, reduce to 48px on mobile, and use 10–24px within modular cards. Integration stage declares 80px between its heading and content; hero internal stack declares 64px and 32px.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.
