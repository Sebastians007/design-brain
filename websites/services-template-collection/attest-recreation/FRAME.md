# Attest — website recreation specification

Preview: https://attest.framer.media/  
Creator: Ramish Aziz  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Attest pairs the expressive, lightly tracked EB Garamond serif with crisp Inter Display utility text. Cream sections and nearly white tiles create a warm editorial rhythm, punctuated by restrained red labels and accordion symbols. The hero uses darkened business footage, transparent navigation, capsule actions, overlapping reviewer portraits, and a compact client-video pill. Mission cards flank a tall media panel; practice-area rows share a two-column composition with sunlit consultation imagery. A cocoa testimonial and team sequence shifts the mood while preserving pale serif headings. Daylight portraits and ample breathing room make the legal-services presentation feel personable. Reference-image outer framing belongs to the promotion, not the established interface.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve EB Garamond display typography against Inter Display supporting text; do not replace the serif with a geometric sans.
- Keep cream/pale-paper sections, cocoa proof/team bands, and sparse red accents in the evidenced sequence.
- Retain the hero image/video dominance, lower-left introduction, compact trust row, and logo divider structure.
- Preserve mission tile asymmetry and the practice accordion paired with consultation imagery on wide layouts.
- Treat template testimonials, ratings, people, office details, and commitments as unverified sample content; outer reference framing is promotional.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Nav wordmark — declaration, not rendered | EB Garamond | 500 | 26 | 28.6 | 0 |
| Navigation/action — declaration, not rendered | Inter Display | 500 | 16 | 24 | 0em |
| Uppercase eyebrow — declaration, not rendered | Inter Display | 700 | 12 | 18 | 0.07em |
| Hero H1 — declaration, not rendered | EB Garamond | 400 | 60 | 66 | -0.03em |
| Section heading — declaration, not rendered | EB Garamond | 400 | 60 | 78 | -0.03em |
| Hero supporting copy — declaration, not rendered | Inter Display | 400 | 18 | 30.6 | 0em |
| Tile heading — declaration, not rendered | EB Garamond | 400 | 32 | 38.4 | 0em |
| Body/accordion answer — declaration, not rendered | Inter Display | 400 | 16 | 27.2 | 0em |
| Accordion title — declaration, not rendered | EB Garamond | 400 | 24 | 28.8 | 0em |
| Quote/attorney name — declaration, not rendered | EB Garamond | 400 | 40 | 52 | -0.03em |
| Footer display wordmark — declaration, not rendered | EB Garamond | 500 | 525.9982699029688 | 368.1987889320782 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#FAF4ED",
  "paper": "#FFFBF7",
  "ink": "#262626",
  "accent": "#BF1313",
  "muted": "#5E5E5E"
}
```

Recommended starting desktop gutter: 60px. Principal radius: 16px. Component gap: 16px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero + company logos | Unverified | Unverified | Dark video-backed introduction, transparent navigation, actions, rating avatars, client-video pill, divider and company logo strip. |
| Mission | Unverified | Unverified | Cream introduction followed by four pale text tiles surrounding a tall central media tile. |
| Services | Unverified | Unverified | Five practice-area accordion rows paired with consultation imagery and booking action. |
| Testimonial | Unverified | Unverified | Cocoa proof section with desktop/tablet/mobile slideshow component structures. |
| Team | Unverified | Unverified | Cocoa attorney portrait grid with names, roles, external profile links, and recruiting action. |
| CTA | Unverified | Unverified | Cream section containing a media-backed conversation invitation and scheduling action. |
| Support | Unverified | Unverified | FAQ accordion and contact information region. |
| Footer | Unverified | Unverified | Dark footer with grouped anchor/service links, testimonial avatar structure, booking link, and oversized serif wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

{'sourceDeclared': ['Hero, mission tile, and CTA video elements have MP4 sources.', 'Slideshow structures exist separately for desktop, tablet, and mobile.', 'Services/support contain named Open and Closed accordion variants.', 'Some frames declare will-change:transform, opacity:0, and translateY(20px) initial styles.'], 'unverified': ['Autoplay, loop, easing, trigger timing, slideshow progression, click transitions, image swapping, and header changes were not runtime tested.'], 'recommendations': ['Use restrained reveals only after checking actual interaction assets.', 'Provide a visible static state and reduced-motion media/animation fallback.']}

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. {'recommendations': ['Use source bands at 810px and 1200px; test both sides of each boundary.', 'Use 60px wide gutters, 40px tablet gutters, and 20px mobile gutters as declared starting points.', 'Stack mission tiles, service content, and attorney cards into readable flows on small screens.', 'Keep text contrast, portrait associations, and touch targets intact; avoid hard-coding image reference dimensions.'], 'sourceDeclared': 'Three responsive header variants and desktop/tablet/mobile testimonial/footer structures are present. Mobile mission grid changes from grid to flex.'}

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

Category: Services / Legal. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
