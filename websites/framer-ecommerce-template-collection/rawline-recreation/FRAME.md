# RAWLINE — website recreation specification

Preview: https://rawline.framer.website/  
Creator: Syed Tahoor Ali  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

RAWLINE turns a streetwear catalog into a loud editorial wall. Near-black surfaces hold warm cream monospaced capitals, compressed lines and sharp red interruptions. The hero crops three models against a rust-red backdrop, with a narrow product ticker and a solid red shopping block alongside. Tiny navigation, outlined hearts, fine borders and small sale flags keep the surrounding interface spare. Italic Source Serif 4 words soften selected headings without reducing their force. Collaboration tiles, isolated clothing imagery, mixed social portraits and solid testimonial panels vary the rhythm. Square edges, tight seams and brief utility copy maintain its raw, poster-like character.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Keep the near-black, cream and red palette; preserve compact uppercase Azeret Mono headings with -0.05em tracking and 0.8em line-height.
- Use the declared center/cover crop for the three-model hero photograph and keep the slogan at the image bottom left.
- Preserve the desktop image/product split, red CTA block and separate tablet/mobile ticker structures.
- Keep drop photography, isolated product cards and mixed social-wall content; do not flatten everything into identical cards.
- Exclude promotional monitor bezels, phone devices, outer red backdrop and Framer/Shopify co-branding from site UI.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| hero h1 | Azeret Mono | 700 | 96 | 76.8 | -0.05em |
| section h2 | Azeret Mono | 700 | 70.4 | 56.32 | -0.05em |
| CTA h4 | Azeret Mono | 700 | 36.8 | 29.44 | -0.05em |
| serif section companion h4 | Source Serif 4 | 700 | 48 | 38.4 | -0.05em |
| navigation p | Azeret Mono | 700 | 16 | 22.4 | 0em |
| body/subheading p | Azeret Mono | 400 | 16 | 22.4 | 0em |
| view-all h5 inline | Azeret Mono | 700 | 24 | 19.2 | -0.05em |
| product/name h5 preset | Azeret Mono | 700 | 32 | 25.6 | -0.05em |
| store area h5 inline | Source Serif 4 | 600 | 24 | 19.2 | -0.05em |
| store schedule p | Source Serif 4 | 500 | 19.2 | 26.88 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#111111",
  "paper": "#ffffe3",
  "ink": "#ffffe3",
  "accent": "#ea301f",
  "muted": "#c9c9c9"
}
```

Recommended starting desktop gutter: 20px. Principal radius: 0px. Component gap: 10px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation Main | Unverified | Unverified | Compact fixed logo, catalog links, sale accent, search, wishlist and cart icons. |
| Hero | Unverified | Unverified | 70% photograph / 29% product ticker; 100vh desktop, bottom-left slogan and red Shop Now block. |
| About Us | Unverified | Unverified | Photographic brand introduction with serif companion title and about link. |
| Ongoing Drops | Unverified | Unverified | Three collaboration image tiles, limited-stock detail, View All. |
| On Sale | Unverified | Unverified | Black Friday heading and sale product cards with heart and discount badges. |
| Features | Unverified | Unverified | Four benefits with dedicated trigger structures. |
| Categories | Unverified | Unverified | Image category tiles. |
| Holy Grails | Unverified | Unverified | Featured product merchandising collection. |
| Video | Unverified | Unverified | Large lifestyle video; source poster and Pexels video URL declared. |
| New arrivals | Unverified | Unverified | Title, filters and separate desktop/mobile catalogs. |
| Social Wall | Unverified | Unverified | Mixed image and quotation grid with X/Facebook/Instagram links. |
| Gift Card | Unverified | Unverified | Large image-backed gift-card offer linking to product route. |
| Stores | Unverified | Unverified | London/Canary Wharf and New York/Manhattan store tiles linking to maps. |
| Gradient End | Unverified | Unverified | 60px transition from #111 to #1a1a1a. |
| Footer | Unverified | Unverified | Logo/contact, newsletter form, catalog/about/legal links, socials, currency control and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

declaredStructures: Desktop/tablet/mobile ticker component variants with repeated product items. Navigation initial opacity 0.001 and translateY(-80px); hero image initial opacity 0.001. Feature 1–4 trigger structures; paired normal and blurred drop images. Country and newsletter smart-modal containers; initial translate/opacity declaration on template remix CTA. unverifiedBehavior: Ticker timing/direction, reveal timing, scroll triggers and hover transitions were not run. Search, wishlist, cart, filters, currency changes and modal opening/closing were not exercised. optionalRecommendations: Provide reduced-motion static ticker and visible initial content fallback.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. basis: SOURCE DECLARED anchors, followed by OPTIONAL recreation recommendations. declared: Desktop >=1200px; tablet 810–1199.98px; mobile <=809.98px. Hero stacks below 1200px: first image 60vh; second container 38vh tablet or 30vh mobile. Social-wall columns 4 desktop, 3 tablet, 1 mobile; mobile section gutters 10px. recommendations: Use two product-card columns on narrow screens, preserving image scale and legible pricing. Keep controls keyboard reachable, allow long product names to wrap, and test 320px widths plus both sides of each root breakpoint. Use intrinsic images and a stable viewport-height fallback to avoid overflow under mobile browser chrome.

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
