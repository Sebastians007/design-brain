# Bright Path — website recreation specification

Preview: https://brightpath-wbs.framer.website/  
Creator: Salim from Webestica  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Bright Path pairs compact, tightly tracked Bricolage Grotesque display type with calm Instrument Sans reading text. Cream surfaces and deep forest ink establish the base; orange pill actions, leafy green highlights, and blue, lime, pink, and peach cards supply a classroom palette. Hand-drawn underlines and tiny radiating marks emphasize individual words. Rounded learner photographs tilt around a curved green text ribbon, while mentor portraits and numbered steps make the service feel personal. Broad color bands give the long homepage distinct chapters. The orange outer mat and green collage surrounds in official promotional images are presentation framing, not website canvas or interface components.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the source home sequence, including mentors before levels and the concluding CTA before the dark footer.
- Use Instrument Sans for body and Bricolage Grotesque for display; Inter and Geist are declared auxiliary families, not substitutions for the main pair.
- Retain forest ink on cream, orange primary actions, pastel subject cards, and green illustrated emphasis; do not turn marketplace framing into site UI.
- Treat typography numbers as CSS declarations, not image measurements; the Counter h3 has a nested green span that overrides text color only.
- Keep source links and variant structures separate from verified interaction; scheduling, enrollment, dashboard, payment, form delivery, and CMS persistence were not tested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / primary button p — source CSS | Instrument Sans | 500 | 16 | 22.4 | 0em |
| Hero eyebrow / reading p — source CSS | Instrument Sans | 400 | 16 | 22.4 | 0em |
| Hero h1 — source CSS desktop preset | Bricolage Grotesque | 700 | 103 | 103 | -0.06em |
| Section h2 — source CSS desktop preset | Bricolage Grotesque | 600 | 82 | 90.2 | -0.08em |
| Program title h2 / level h3 — source CSS | Bricolage Grotesque | 500 | 24 | 28.8 | -0.04em |
| Counter statement h3 — source CSS; nested span color #497e64, no font override | Bricolage Grotesque | 500 | 46 | 55.2 | -0.08em |
| Counter figure h2 — source CSS | Bricolage Grotesque | 600 | 62 | 62 | -0.08em |
| Trust-strip title h3 — source CSS | Bricolage Grotesque | 500 | 20 | 24 | -0.06em |
| Mentor name h2 / footer heading h3 — source CSS | Bricolage Grotesque | 500 | 22 | 26.4 | -0.04em |
| Final CTA h2 — source CSS desktop preset | Bricolage Grotesque | 600 | 98 | 107.8 | -0.08em |
| Promotional Get It Button p — source CSS; outside service UI | Geist | 700 | 12 | 14.4 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f4f0e5",
  "paper": "#ffffff",
  "ink": "#14261d",
  "accent": "#e8722c",
  "muted": "#45564b"
}
```

Recommended starting desktop gutter: 30px. Principal radius: 20px. Component gap: 30px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Logo, Home/About/Program/Mentor/Contact links, and contact CTA; desktop/tablet/phone source variants. |
| Hero | Unverified | Unverified | Centered learning promise, pastel eyebrow, two pill links, learner photo collage, green curved ribbon, and decorative marks. |
| Program | Unverified | Unverified | Four pastel subject cards for mathematics, science, English, coding; index and detail links. |
| Counter | Unverified | Unverified | Centered mission statement and story link above overlapping learner photo and dark three-metric card. |
| Step | Unverified | Unverified | How-it-works image and three numbered process rows; lower pink four-item trust strip. |
| Team | Unverified | Unverified | Blue section background; four portrait mentor cards and link to mentor index. |
| Level | Unverified | Unverified | Four starting-point cards: foundation, catching up, steady practice, advanced preparation. |
| Online | Unverified | Unverified | Lime band with learner photo, in-center/online message, format badges, and schedules link to contact. |
| Testimonial | Unverified | Unverified | Three family quote cards, avatar/attribution structures, and rating summary. |
| Price | Unverified | Unverified | Group, Private popular, and Intensive monthly plan cards; inclusion links route to pricing. |
| FAQs | Unverified | Unverified | Five source accordion items with open/closed desktop and phone variants. |
| Final CTA | Unverified | Unverified | Cream-beige free intro session panel, large display heading, two contact links, and book/decor structures. |
| Footer | Unverified | Unverified | Dark forest footer with logo/contact, page links, newsletter form structure, social links, terms/privacy, and credits. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: six data-framer-appear-id markers, initial opacity/transform styles, repeated curved SVG textPath ribbon content, rotated image transforms, Lenis-related CSS classes, hover icon variants, and open/closed accordion/menu variants. CSS declares 0.4s cubic-bezier(.44,0,.56,1) link and input-focus transitions. UNVERIFIED: actual reveal timings, scroll smoothing, ribbon movement, hover swapping, menu/accordion responses, submission, and persistence; no live interactions were exercised.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Typography presets use integer maxima 1199px/809px: hero 103/62/50px; section heading 82/50/40px; mission 46/32/30px; final CTA 98/56/42px. RECOMMENDATIONS: use 30px desktop gutters and 20px phone gutters, 20px image/card radii and 30px default gaps; stack split media sections and plan cards, reduce photo overlap, keep decorated words readable, and expose keyboard-operable controls. These spacing values are recreation defaults, not measured geometry.

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

Category: Services / Education. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
