# Kora — website recreation specification

Preview: https://kora.framer.media/  
Creator: Joseph Alexander  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Kora pairs unusually soft business imagery with disciplined consulting information. A translucent orange flower against cool blue fills a rounded hero, while a floating ivory navigation capsule and a separate dark booking pill sit above it. Mint dots, overlapping circular portraits, partner logotypes, and a compact case-study tile ground the scene. Warm ivory surfaces carry tightly tracked Manrope headings, numbered service modules, and compact qualification copy. The large mint team enclosure and charcoal pricing enclosure punctuate a long pale page. Glassy testimonial and contact panels contrast with crisp metric grids. Preserve the supplied Kora symbol and client artwork as custom assets; ordinary typed logos lose its identity.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: body is Manrope 600; display uses Manrope Variable with CSS font-weight 400 plus wght 585 or 500. Do not substitute a generic geometric font for Kora artwork.
- SOURCE / REFERENCE: retain rounded flower hero, floating navigation capsule, separate booking pill, lower trust strip and compact case-study tile. The monitor, phone shell, promotional backdrop, and LaunchNow watermark are marketplace framing, not page UI.
- SOURCE DECLARED: preserve the complete home reading sequence through footer. Scroll Space is a transition spacer, not a content section; Benefits belongs within How we work.
- SOURCE DECLARED: nested hero spans start blurred and nearly transparent; price number-flow and its measuring span declare Manrope 600 at 60px/105%, overriding surrounding 13px prefix/suffix. Type rows are CSS declarations, not rendered measurements.
- RECOMMENDATION: gutter 60, radius 40 and gap 30 are recreation defaults informed by source values, not universal measurements. On charcoal sections switch text to pale paper; ink #292929 is for the selected pale canvas.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero h1 / CSS desktop; wght axis 585 | Manrope Variable | 400 | 80 | 84 | -0.04em |
| Hero h1 / CSS tablet preset | Manrope Variable | 400 | 60 | 63 | -0.04em |
| Hero h1 / CSS phone preset | Manrope Variable | 400 | 35 | 36.75 | -0.04em |
| Problem / CSS h2 | Manrope Variable | 400 | 60 | 63 | -0.04em |
| Services / CSS section h2; wght axis 500 | Manrope Variable | 400 | 80 | 80 | -0.04em |
| Service title / CSS h3 | Manrope Variable | 400 | 25 | 32.5 | -0.04em |
| Hero description / CSS p | Manrope | 600 | 17 | 22.95 | -0.03em |
| Button default / CSS p | Manrope | 600 | 14 | 21 | -0.03em |
| Trust label / CSS p | Manrope | 600 | 13 | 19.5 | -0.025em |
| Featured quote / CSS p | Manrope | 600 | 20 | 27 | -0.03em |
| Price numeral / inline span and number-flow override | Manrope | 600 | 60 | 63 | -0.04em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#fafaf7",
  "paper": "#fffffa",
  "ink": "#292929",
  "accent": "#5dc39b",
  "muted": "#616161"
}
```

Recommended starting desktop gutter: 60px. Principal radius: 40px. Component gap: 30px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | Unverified | Unverified | Flower image, title, description, services/pricing links, trust avatars and logo strip, case teaser. |
| Problem Intro | Unverified | Unverified | Large reveal heading inside sticky scroll narrative. |
| Comparison | Unverified | Unverified | Before/after consulting comparison cards after a Scroll Space transition. |
| Services | Unverified | Unverified | Growth comparison bar graph then five numbered offer cards with image/testimonial partners. |
| How we work | Unverified | Unverified | Diagnose, Design, Build, Transfer process accordion; demo preview and Benefits follow. |
| Team | Unverified | Unverified | Mint rounded enclosure, named portraits/roles, expandable member structures and careers link. |
| Testimonials | Unverified | Unverified | Featured photo/quote, expanding review cards, four metrics, founder booking CTA. |
| Case Study | Unverified | Unverified | Sitemark narrative, metadata, stats, service tags, quote, image and detail link. |
| Pricing | Unverified | Unverified | Charcoal enclosure with Growth Sprint, Growth Partnership and Custom selector; price/benefits panel. |
| FAQ | Unverified | Unverified | General, Pricing, Process, Results categories and questions; copy-email states. |
| Insights | Unverified | Unverified | Article cards with category, date, author and detail routes plus archive link. |
| CTA / Contact | Unverified | Unverified | Growth-call invitation, supporting proof, qualified contact form and summary metrics. |
| Footer | Unverified | Unverified | Address/contact, newsletter form, founder quote, social/legal/site links and oversized Kora wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

{'sourceDeclared': ['Lenis Smooth Scroll named component; sticky Hero and Problem Intro; reveal text editing structure; comparison trigger frames and services bargraph trigger.', 'Hero heading spans declare opacity 0.001, blur(5px), translateY(2px), scale(0.9). Featured quote card declares opacity 0, translate(30px,30px), scale(0.8), rotate(-5deg).', 'Default/Hover button layers, Active/Inactive process cards, Closed/Open team structures, expandable testimonials, pricing selector, copy-email/Copied! structures, mobile Closed/Open Menu, loading spinner and number-flow price are present.'], 'unverified': ['No animation timing, scroll distance, easing, persistence, final rendered state or interaction outcome was exercised.', 'Demo video is a preview/play structure; extracted video element list is empty. Contact delivery, booking integration, newsletter processing and clipboard success are unverified.'], 'recommendations': ['Use restrained easing and reduced-motion fallbacks; reveal readable final text if scripts fail. Keep state changes keyboard operable.']}

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. {'sourceDeclared': ['Primary site variants: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Typography media rules also use 809px/1199px maxima. The 810–991px query affects .framer-ZL2OU paragraph typography, used by the marketplace Get Template button; it is not a primary site layout breakpoint.', 'Observed public declarations reduce selected container gutters 60→40→20px; selected vertical padding 120→90→60px; result grid columns 4→2→1; service two-column grid switches to flex on phone. Hero phone wrapper adds 10px padding.'], 'recommendations': ['Preserve DOM reading order: service title and offer list before image/proof; contact invitation before form; stack case teaser after trust on phone as shown in official reference.', 'Do not shrink desktop hero to fit; use declared 35px phone h1 preset and preserve intentional line breaks. Keep decorative images cropped independently from text.']}

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
