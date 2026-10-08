# Creator Store — website recreation specification

Preview: https://helpful-instance-487483.framer.app/  
Creator: SoloFoundry  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Warm walnut walls turn a digital catalogue into a small studio shop. The opening composition pairs an oversized cream display headline and orange underline with nine colourful packages on three dimensional shelves. Covers have spines, tops, barcodes, stamped status labels and small hanging price tags. A tilted, perforated paper receipt makes sales proof tangible. Pointed tag buttons repeat the shop language throughout. Cream aisles interrupt the dark room, violet and green bundle boards carry receipt arithmetic, and orange concentrates the free-guide section. Narrow monospaced labels, generous display type, dotted rules and a low-contrast footer wordmark establish the hierarchy.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the desktop 3D shelf: three rows, nine varied package silhouettes, separate faces, plank depth and contact shadows; avoid a generic flat card grid.
- Keep walnut/cream section alternation and orange tag actions; product packaging colours are individual product tokens, not global surface colours.
- Use Gabarito for display, Manrope for prose and Azeret Mono for shop metadata; retain the actual custom CSS roles alongside the incomplete Framer preset extraction.
- Maintain perforated receipts, clipped price tags, barcodes, dashed leaders and readable ink-on-paper totals as recurring commerce elements.
- At phone width expose prices and Add actions in a scroll-snap product rail; preserve visible keyboard focus and honour reduced motion.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero .dsh-h1 | Gabarito | 700 | 80.64 | 75.8016 | -0.03em |
| Hero prose .dsh-sub | Manrope | 400 | 17 | 26.35 | normal |
| Hero eyebrow .dsh-eb | Azeret Mono | 400 | 11.5 | 14 | 0.14em |
| Receipt .dsh-rcpt | Azeret Mono | 400 | 11.5 | 14 | 0.02em |
| Tag action .ds-btn | Manrope | 700 | 14 | 16.8 | 0.01em |
| Section .ds-hd (aisles) | Gabarito | 400 | 72 | 67.68 | 0.005em |
| Aisle name .dsty-name | Gabarito | 700 | 46 | 46 | -0.03em |
| Package title .dsh-print b | Gabarito | 700 | 13 | 13.65 | -0.01em |
| Footer logo .dsft-logo | Gabarito | 700 | 24 | 28.8 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#1F1512",
  "paper": "#F3EBDD",
  "ink": "#F3EBDD",
  "accent": "#FF6A2B",
  "muted": "#CBBCAD"
}
```

Recommended starting desktop gutter: 56px. Principal radius: 24px. Component gap: 26px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Brand, product drawer, bundles/courses/notes/about links, cart sheet and free-guide tag; phone menu variant. |
| 01 Hero — shelf | Unverified | Unverified | Cream/orange headline, two tag actions, orders receipt, 3D nine-product shelf; phone scroll-snap rail. |
| 02 Tape — recent orders | Unverified | Unverified | Repeated dark sold/order ticker with time, product, price and city. |
| 03 Aisles — product types | Unverified | Unverified | Cream numbered category rows: templates, ebooks/guides, presets/LUTs, courses, fonts, icons/assets. |
| 04 Window — featured product | Unverified | Unverified | Large violet product image spotlight, feature list, sale price and more bestsellers. |
| 05 Unboxing — contents | Unverified | Unverified | Exploded course box beside format, file count, licence, update and delivery declarations. |
| 06 Stack — bundles | Unverified | Unverified | Three coloured stacked boards, constituent products and paper price receipts. |
| 07 Syllabus — course | Unverified | Unverified | Lesson preview panel alongside numbered lesson list and duration metadata. |
| 08 Counter — numbers | Unverified | Unverified | Store proof metrics and large tabular numerals. |
| 09 Receipts — reviews | Unverified | Unverified | Dark review wall carrying paper receipts, buyer portraits and verification labels. |
| 10 Behind counter — studio | Unverified | Unverified | Studio image and biography, concise facts, about link. |
| 11 Free shelf — lead magnet | Unverified | Unverified | Orange guide/book display and email capture. |
| 12 Price tags — FAQ | Unverified | Unverified | Cream question tag rack plus support invitation. |
| 13 Notes | Unverified | Unverified | Three editorial image cards with category, date and read time. |
| 14 Closing time — CTA | Unverified | Unverified | Dark centred headline and browse/free-guide actions. |
| Footer | Unverified | Unverified | Brand, local-time indicator, shop/studio/legal columns, newsletter, socials and ghost wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

declared: 1500px shelf perspective; rotateX(7deg)/rotateY(-16deg) unit, hover/focus package lift translate3d(0,-18px,70px), hanging-tag swing. Tag button circular fill, clipped silhouette swing, translated duplicate label and arrow tilt. CSS heading word reveals, image scale/parallax variables, sticky reverse-section structures, diagonal section clips, footer ghost rise. Loader and page-transition tag components, smooth-scroll component, duplicated ticker structures and review-wall markup exist. Reduced-motion styles collapse animation/transition duration and disable several transforms. unverifiedBehavior: No live interaction run. Timing orchestration, once-per-session loader, cursor tracking, drag reviews, lesson switching, cart persistence and checkout/fulfilment are not verified by static HTML/CSS or promotional images.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Root anchors separate phone below 810px, tablet 810–1199.98px, desktop 1200px+. Recommend matching supplied 390px/810px/1440px component variants: phone content first, shelf rail below; tablet stacked hero retains dimensional shelf. Use wrapper gutters 20/32/56px, one-column phone bundles/course/notes, two-column tablet notes, and 2-column mobile footer links with newsletter spanning. Keep source phone products at least 176px wide, 22px rail gap and prices persistently visible; test overflow at 390px and avoid hover-dependent information.

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

Category: Ecommerce / Digital products. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

Creator Store uses custom component CSS: read custom-component-declarations.json. Actual display/body/metadata families are Gabarito, Manrope and Azeret Mono. Framer preset extraction alone misses these roles. Use cream text on dark sections and #17100C on cream receipts; retain source-specific product packaging colours.

## Typography evidence detail

sizePx values evaluate declared clamps at 1440px. Hero inline fallback weight 700 overrides stylesheet 800. Shared .ds-hd sets 400!important and uppercase. Receipt/eyebrow/footer line-height is not explicit: 14/14/28.8px are recommended recreation values; other line heights follow explicit CSS. Footer inline display fallback overrides class weight 800. This records declarations, not computed browser metrics. Aisle and package title inline display fallbacks likewise override class weight 800 with 700.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
