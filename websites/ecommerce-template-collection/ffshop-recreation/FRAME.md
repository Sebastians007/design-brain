# FF Shop — website recreation specification

Preview: https://ff-shop.framer.website/  
Creator: FavoritFrame  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

FF Shop presents Réduce as a furniture gallery organized by an architectural rule system. A compact menu, centered wordmark and bag count sit above an asymmetric hero: a narrow category rail beside a tall photograph of a black chair in dry grass. Warm gray surfaces, black hairlines and tightly spaced Uncut Sans make the interface feel catalogued. Isolated chairs, stone tables and lamps occupy square product media, while occasional environmental crops interrupt the grid. Large centered brand prose, a stone-object launch feature and dated editorial cards expand the commerce story. Device shells and stone display plinths belong to promotional photography, outside the interface.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve Uncut Sans Semibold with declared ss05 feature; CSS weight 400 is intentional despite the family name.
- Build flat edge-to-edge cells with black hairline divisions, square media and internal 30px padding; avoid generic floating cards.
- Keep the desktop hero category rail at one grid column and its furniture photograph at two, with a viewport-height composition.
- Retain product title/price hierarchy and the environmental Mood cell within the furniture grid; do not replace furniture with generic stock imagery.
- Preserve homepage editorial order and exclude photographed computers, phone frames and stone plinths from page UI.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| navigation / Menu and Bag | Uncut Sans Semibold | 400 | 18 | 20.88 | -0.02em |
| hero tagline / category links | Uncut Sans Semibold | 400 | 18 | 20.88 | -0.02em |
| product card h2 | Uncut Sans Semibold | 400 | 18 | 20.88 | -0.02em |
| brand lead inline declaration | Uncut Sans Semibold | 400 | 48 | 49.44 | -0.02em |
| large paragraph preset desktop | Uncut Sans Semibold | 400 | 60 | 61.8 | -0.02em |
| h1 preset desktop | Uncut Sans Semibold | 400 | 60 | 61.8 | -0.02em |
| news title / date | Uncut Sans Semibold | 400 | 18 | 20.88 | -0.02em |
| email form label | Inter | 500 | 12 | 14.4 | 0 |
| language select inline input | Uncut Sans Semibold | 600 | 18 | 20.88 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#eae9e5",
  "paper": "#deddd6",
  "ink": "#000000",
  "accent": "#000000",
  "muted": "#5c5b56"
}
```

Recommended starting desktop gutter: 30px. Principal radius: 0px. Component gap: 0px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Menu left, Réduce wordmark centered, search and Bag right; source header has translucent canvas and 10px backdrop blur. |
| Hero | Unverified | Unverified | Desktop category rail beside chair-in-grass photograph; Show All, Chairs, Tables and Lamps routes. |
| Shipping band | Unverified | Unverified | Repeated source shipping announcement component immediately after hero. |
| Brand lead | Unverified | Unverified | Centered large statement defining the curated furniture collection. |
| Furniture catalog | Unverified | Unverified | Eight linked chair/table/lamp cards, title and dynamic price area; environmental Mood image occupies a designated grid row. |
| Arch-chair image campaign | Unverified | Unverified | Standalone padded image/link component after catalog, distinct from its in-grid Mood insert. |
| M_002 feature | Unverified | Unverified | Split furniture image and launch copy with Shop Now link; phone variant stacks. |
| News | Unverified | Unverified | Three dated image/title entries linking to news detail routes. |
| Testimonials | Unverified | Unverified | Three quote/person cards, duplicated source variants and arrow assets; section declares 75vh. |
| Newsletter and footer | Unverified | Unverified | Discount invitation, required email input and Subscribe; attribution/template links, legal/help/social links, copyright and English language select. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

declared: Named Horizontal (Scroll), Vertical (Scroll), Delayed and Parallax Default structures; initial opacity/transforms on controls and images; hero/media images declare translateY(-10%) scale(1.2); header/backdrop blur. unverified: Trigger timing, easing, cursor following, live parallax, menu transitions, testimonial navigation and cart behavior were not exercised. recommendation: Use restrained image movement and line reveals; expose all content with reduced motion and keyboard interaction.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. declared: Principal source bands are desktop >=1200, tablet 810–1199.98, phone <=809.98. Catalog CSS declares 3/2/1 columns; phone hero changes to a column and puts category/text rail after media; feature and news stack on phone. recommendation: Retain 30px inner media padding when space permits, allow 20px at narrow widths, maintain 44px touch areas, and keep product text underneath imagery. Preserve source order with accessible DOM reading order.

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

Category: Ecommerce / Furniture. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
