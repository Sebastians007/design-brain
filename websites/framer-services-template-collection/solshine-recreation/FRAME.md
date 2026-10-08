# Solshine — website recreation specification

Preview: https://solshine.framer.website/  
Creator: Deven Web Studio  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Solshine combines oversized geometric lettering with almost black surfaces, bright yellow-green accents, and solar installation photography. The hero sets a low, expansive text block over a darkened panel landscape, then pairs a white action button with lime arrow hardware and a compact portrait review cluster. Interior modules move onto pale surfaces with generous breathing room. Lightning labels, rounded image corners, circular badges, check icons, and inset arrow tiles connect the sections. The team grid introduces a lime portrait overlay and vertical identity text. Pricing alternates dark and light panels. Diagonal colored backdrops and floating browser-like frames belong to the marketplace presentation, not the website canvas.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the dark photographic hero, oversized display hierarchy, and lime highlight; do not reproduce marketplace diagonal framing as UI.
- Use declared Jost body and Space Grotesk display roles; retain Inter only where the source declares it, including tablet menu labels.
- Pair lime-filled controls with dark text or dark arrow tiles; retain readable ink on the pale canvas and white text on dark panels.
- Keep evidence status visible: CSS declarations and official promotional images are references, not rendered measurements or verified interactions.
- Retain homepage section order through footer; replace template proof and software-like plan fixtures only with approved business content.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero h1 — declaration, not rendered | Space Grotesk | 500 | 100 | 100 | -2px |
| Section h2 — declaration, not rendered | Space Grotesk | 500 | 45 | 55 | -2px |
| Service h3 — declaration, not rendered | Space Grotesk | 500 | 32 | 38.4 | -2px |
| FAQ h4 — declaration, not rendered | Space Grotesk | 600 | 22 | 30 | 0em |
| Body paragraph — declaration, not rendered | Jost | 400 | 18 | 26 | 0em |
| Hero CTA — declaration, not rendered | Jost | 500 | 19 | 30 | 0 |
| Section label — declaration, not rendered | Jost | 600 | 17 | 23.8 | -0.02em |
| Price h3 — declaration, not rendered | Space Grotesk | 500 | 50 | 60 | -2px |
| Tablet menu h5 — declaration, not rendered | Inter | 700 | 16 | 22.4 | -0.04em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f8f8f8",
  "paper": "#ffffff",
  "ink": "#020202",
  "accent": "#caf31d",
  "muted": "#777777"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Logo, bordered navigation group, search/menu icons, lime contact CTA; responsive menu variants declared. |
| Hero Section | Unverified | Unverified | Dark solar photograph, large heading with lime final phrase, supporting paragraph, action and review portraits. |
| Client strip | Unverified | Unverified | Source Desktop/Mobile wrapper contains Client Section and Client Image structures. |
| Ecellent Services | Unverified | Unverified | Source spelling; benefits introduction with warranty, maintenance, and sustainable energy cards. |
| Services Section | Unverified | Unverified | Solar offer heading and source-named Services Corousel covering rooftop, maintenance, off-grid, cleaning, and wind repair. |
| About Company | Unverified | Unverified | Company explanation, oversized counter structure, installer photo with circular badge, checklist and about CTA. |
| Excellent Services | Unverified | Unverified | Second service capability module with experience framing and service summaries. |
| Members | Unverified | Unverified | Portrait grid, dark introduction tile, lime Hover layer, social icons and vertical identity text. |
| Plans & Pricing | Unverified | Unverified | Basic, Professional, Premium panels; template software-oriented content and prices are fixtures. |
| Text scroll bands | Unverified | Unverified | Variant 1 contains Wrap 1/Wrap 2 and repeated Text Scroll Container phrases. |
| Fan Fact | Unverified | Unverified | Source spelling; image service panels for wind repair, inverter repair, rooftop installation. |
| Partners Section | Unverified | Unverified | Partner-brand display and partner contact CTA. |
| News Section | Unverified | Unverified | Post Card structures, read-time metadata and blog links. |
| CTA Faqs | Unverified | Unverified | Experience/image panel and four FAQ rows with Open/Closed, Plus/Minus variants. |
| Footer | Unverified | Unverified | About, useful links, contact details, newsletter email form, legal links, copyright and social links; Laptop/Tablet/Phone variants. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

{'sourceDeclared': ['Hero entrance span initial opacity, blur and translation', 'Counter Home structure', 'Services Corousel naming', 'Text Scroll Container repetitions', 'Members Hover layer and Social Icons', 'Menu open/close variants', 'FAQ Open/Closed and Plus/Minus variants'], 'unverified': 'Timing, autoplay, counter final values, carousel gestures, ticker direction/speed, hover transitions, focus behavior and FAQ keyboard interaction were not exercised.', 'recommendations': ['Ensure final hero text remains visible when animation fails', 'Provide reduced-motion static text and counters', 'Expose hover information on focus and touch', 'Implement menus and FAQs with accessible buttons and state attributes']}

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. {'sourceDeclared': 'Main page bands: mobile max 809.98px, tablet 810–1199.98px, desktop min 1200px. Typography presets add narrower boundaries.', 'recommendations': ['Stack hero paragraph, CTA and reviews before they collide', 'Collapse service and about columns into a readable vertical order', 'Reduce portrait grid columns with available width', 'Keep FAQ toggles and contact controls comfortably tappable', 'Treat 32px gutter, 24px radius and 24px gap as starting recommendations']}

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

Category: Services / Home services. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
