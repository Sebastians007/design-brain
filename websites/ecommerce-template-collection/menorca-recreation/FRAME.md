# Menorca — website recreation specification

Preview: https://menorca.framer.media/  
Creator: Marto Mads  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Menorca gives a fashion shop the pace of a summer photo diary. A dark coastal portrait fills the opening screen while small white navigation rides across it. The large centered statement combines tightly tracked sans capitals with loose handwritten accents, making polished commerce feel casual. Transparent outlined pills sit beneath quiet supporting copy. Below, four pale product panels display isolated garments with tiny capsule labels. Long photographic collection chapters interrupt the merchandise rows, including a paired editorial spread. Black text, white surfaces, narrow gutters and an oversized closing wordmark keep the system restrained. The scenic surround in official promotional images belongs to the presentation, not the storefront.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Keep the hero mixed-family typography: Inter Variable at 500 with Gloria Hallelujah inline accents; do not render the whole headline in script.
- Use a full-width darkened coastal image with centered white copy and outlined pill links; opening navigation overlays the photograph below a white promo strip.
- Preserve pale four-column merchandise panels at the desktop root layout, tight 10px horizontal gaps, small badges and compact product metadata.
- Preserve the exact alternation of merchandise grids and photographic collection chapters, ending with the white footer and very large wordmark.
- Exclude scenic promotional surrounds and screenshot framing from storefront UI; distinguish source declarations and screenshot controls from tested commerce behavior.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| promo-strip | Inter | 500 | 12 | 14.4 | -0.02em |
| desktop-logo | Gloria Hallelujah | 400 | 20 | 32 | -0.1em |
| hero-desktop | Inter Variable | 500 | 56 | 67.2 | -0.05em |
| hero-tablet | Inter Variable | 500 | 40 | 48 | -0.05em |
| hero-phone | Inter Variable | 500 | 28 | 33.6 | -0.05em |
| hero-support | Inter | 100 | 16 | 19.2 | -0.04em |
| hero-link | Inter | 400 | 14 | 16.8 | -0.02em |
| product-title | Inter | 500 | 14 | 16.8 | -0.02em |
| product-badge | Inter | 500 | 10 | 12 | -0.02em |
| paired-collection-title | Inter | 400 | 24 | 28.8 | -0.07em |
| season-collection-title | Inter | 500 | 24 | 28.8 | -0.07em |
| footer-heading | Inter | 500 | 14 | 16.8 | -0.06em |
| footer-wordmark-desktop | Inter | 700 | 193.69916229971585 | 213.06907852968746 | -0.08em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f5f5f5",
  "ink": "#000000",
  "accent": "#39cc8f",
  "muted": "#424242"
}
```

Recommended starting desktop gutter: 20px. Principal radius: 0px. Component gap: 10px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Promo strip and navigation | Unverified | Unverified | White repeat-message strip; logo, category navigation, selector/cart structures; light and dark variants declared. |
| Hero | Unverified | Unverified | Coastal lifestyle image, centered mixed-font statement, supporting copy, two collection links. |
| Most Wanted product grid | Unverified | Unverified | Four linked garment cards followed by View All to /collections/most-wanted. |
| Paired collection spread | Unverified | Unverified | Most Wanted and women collection imagery with separate shop links; side by side on desktop. |
| Essentials product grid | Unverified | Unverified | Four linked products followed by View All to /collections/essentials. |
| Essentials photo chapter | Unverified | Unverified | Full-width editorial photograph and /collections/essentials discovery link. |
| Caps product grid | Unverified | Unverified | Four linked cap cards followed by View All to /product/caps. |
| Summer collection chapter | Unverified | Unverified | Full-width sunset boat image and /collections/summer26 link. |
| Chapter 1 collection chapter | Unverified | Unverified | Full-width field portrait and /collections/chapter1 link. |
| Everyday Essentials collection chapter | Unverified | Unverified | Full-width car portrait, object-position 49.6% 26.2%, /collections/essentials link. |
| Footer | Unverified | Unverified | Shop, Collections and Legal groups; oversized Menorca anchor wordmark; desktop/tablet/phone variants declared. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

declaredStructures: Promo Ticker repeated message content Rolling-text navigation span structures and inline CSS Product Image 2 (Hover) absolute overlay Desktop/phone product variants Newsletter overlay backdrop, close control and responsive variants outside normal section flow unverifiedBehavior: Ticker timing and looping Navigation rolling trigger and easing Product image hover transition Menu and cart opening, cart persistence Newsletter opening trigger and submission result recommendation: Honor reduced motion; use an equivalent static link label and always keep primary product image visible on touch.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. source: Root anchors at 810 and 1200px. Grids declare four columns at desktop and two below 1200; collection pair stacks below 1200. Hero declares 96vh desktop and 80vh phone; chapter images 100vh desktop and 80vh phone. recommendation: Keep 20px desktop and 16px phone gutters, preserve two columns while readable, allow heading wrapping, stack editorial pairs, and expose category links through an accessible small-screen menu. Numeric gutter/radius/gap are recreation defaults, not rendered measurements.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Ecommerce category context

Category: Ecommerce / Fashion. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
