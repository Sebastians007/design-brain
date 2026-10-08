# Essentia — website recreation specification

Preview: https://essentia.framer.media/  
Creator: Joseph Alexander  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Essentia treats one skincare jar as the visual center of a long editorial purchase story. Warm ivory surrounds charcoal olive typography, while pale sage supplies scientific and social proof surfaces. The opening layers a reflective jar above an upward-facing hand, with a nearly page-wide brand word behind both. Compact customer portraits and stars sit under a large, tightly tracked headline. Rounded corners remain modest; generous empty areas and viewport-height story panels create the luxury impression. Later, portrait cutouts, close skin crops, ingredient rows, and a sage bento contrast with the orderly four-image gallery and restrained two-size purchase controls.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Keep a single-product narrative with purchase at /#ordernow; do not introduce an unsupported catalog grid.
- Preserve isolated jar and hand layers: product image contain/center, hand contain/center bottom; no arbitrary photo crop in hero.
- Use medium Geist with negative tracking and the declared display/body hierarchy; do not infer variable font weight from font-weight alone.
- Preserve source home order, including scientific bento, reviews, purchase section, FAQ, social strip, journal, and footer.
- Treat sticky story, animation triggers, cart, inventory, and checkout as declarations or recommendations until runtime verified.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Desktop logo | Geist | 500 | 22 | 24.2 | -0.03em |
| Navigation | Geist | 500 | 18 | 25.2 | -.03em |
| Hero heading | Geist | 500 | 82 | 86.1 | -.03em |
| Hero subline | Geist | 500 | 32 | 38.4 | -.03em |
| Section heading | Geist | 500 | 60 | 66.0 | -.04em |
| Product heading | Geist | 500 | 44 | 52.8 | -.03em |
| Commerce button | Geist | 500 | 16 | 24.0 | -.02em |
| Ingredient label | Geist | 500 | 12 | 14.4 | -.02em |
| Body paragraph | Geist | 500 | 16 | 24.0 | -.02em |
| Giant brand word | Geist | 500 | 294.79126663162765 | 235.833 | -0.03em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f8f5f0",
  "paper": "#ffffff",
  "ink": "#3a3d38",
  "accent": "#d4dccf",
  "muted": "#545454"
}
```

Recommended starting desktop gutter: 48px. Principal radius: 8px. Component gap: 48px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Translucent white bar; left logo, central links, right order anchor and bag count; mobile hamburger. |
| Hero | Unverified | Unverified | 100vh sticky source frame, headline/rating upper left, subline right, isolated jar/hand and giant brand word. |
| Text scroll reveal | Unverified | Unverified | Large centered text block inside shared scroll container; nested muted color spans. |
| Features | Unverified | Unverified | Four source feature stages with reserved product space and scroll stoppers. |
| How it works | Unverified | Unverified | Three routine steps, initial sticky 100vh stage and two further viewport stages. |
| Specs / Ingredients | Unverified | Unverified | Heading, 3:4 product image, five ingredient rows, three compact benefit features. |
| Problem / Solution | Unverified | Unverified | Paired editorial blocks contrasting two skincare approaches. |
| Science / Stats | Unverified | Unverified | Sage portrait panel and asymmetrical 12px-gap bento with counters, clinician cutout and close skin crop. |
| Reviews | Unverified | Unverified | Sticky rating header, testimonial cards, long scroll track and text split. |
| Product | Unverified | Unverified | Same-page #ordernow section; four gallery thumbnails, product/title/price, two size buttons, shipping/returns, quantity and add-to-bag; reassurance word strip. |
| FAQ | Unverified | Unverified | Contact-support introduction and six question disclosures. |
| Instagram | Unverified | Unverified | Follow link/handle and twelve portrait tiles. |
| Journal | Unverified | Unverified | Featured editorial image plus article cards linking to declared journal routes. |
| Footer | Unverified | Unverified | Menu and social columns, email field with agreement control, legal links, copyright and oversized brand word. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

sourceDeclared: Lenis Smooth Scroll named component Hero position:sticky with height:100vh How-to initial stage and review header sticky Heading spans start opacity 0.001, blur(5px), translateY(10px) Hand starts opacity 0.001 and translateY(300px) Show/Hide Order Button Trigger nodes around purchase/journal sequence Label ticker and Word Strip clipped structures unverified: Scroll timing, easing, actual visibility switching, gallery selection, accordion behavior and cart mutations were not exercised. recommended: Use reduced-motion mode that reveals all text and replaces long scroll choreography with ordinary flow; implement only verified visual structures before adding motion.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 992px, 768px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. sourceDeclared: Principal root layout bands: <768, 768–991.98, 992–1199.98, >=1200px. Source mobile root width anchor 390px; tablet 768px; small desktop 992px. recommendations: Use 24px gutters under 992px; match phone reference centered logo/hamburger/bag layout. Stack gallery above purchase information below 992px; provide horizontal thumbnails on narrow screens. Preserve jar silhouette and bottom hand crop while scaling giant brand word to width. Collapse bento and ingredient columns; keep readable body text at 14–16px minimum. Avoid sticky overlap on short viewports; allow story panels natural height.

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

Category: Ecommerce / Beauty. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
