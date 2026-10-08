# NOVA Lab — website recreation specification

Preview: https://only-unicorn-982022.framer.app/  
Creator: Danil Hulakov  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

NOVA Lab treats research software as a quiet instrument panel. A pale blue atmospheric lens interrupts an almost black canvas, while uppercase Montserrat statements sit beside DM Mono annotations. Thin rules, indexed modules, oversized numerals and receipt language make the page feel measured rather than decorative. White buttons supply the clearest action; electric violet belongs to selected commercial surfaces. The footer expands the brand into a monumental gradient wordmark above a soft light source. Recreate this tension between spacious editorial claims and dense operational evidence. Preserve distinct type roles, restrained borders and generous empty regions throughout the long vertical presentation.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use the blue-white atmospheric hero artwork as page atmosphere; the browser window and phone in official-reference-01 are promotional framing, not homepage components.
- Declare Montserrat 600 at 50px/60px for the desktop hero; DM Mono 500 at 16px/19.2px carries its supporting description. Do not promote the 25px alternate hero to the desktop scale.
- Follow CSS top offsets for home display order, not the footer-first DOM sequence: Home, Glance, Metrics, How It Works, Sources To Signals, Sources, Comparison, Showcase, Pricing, Footer & CTA.
- Keep source tables, comparison rows and receipt-style plan cards crisp and ruled. The violet calculator shown in official-reference-03 is pricing-page imagery, not the homepage plan arrangement.
- Official-reference-02 depicts a SIGNAL LOST 404 page. Keep its giant 404 and blue orb outside the homepage recreation; distinguish decorative light structures from unverified animation.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Desktop hero heading — Home / Hero Content / Title | Montserrat | 600 | 50 | 60 | 0 |
| Desktop hero support — nested span | DM Mono | 500 | 16 | 19.2 | 0 |
| Desktop section heading — Sources To Signals | Montserrat | 600 | 50 | 60 | 0 |
| Section explanation — Sources To Signals | DM Mono | 500 | 16 | 22.4 | 0 |
| Module title — Glance | DM Mono | 500 | 40 | 56 | 0 |
| Module explanation — Glance | Montserrat | 600 | 16 | 20.8 | 0 |
| Fixed navigation label | DM Mono | 500 | 13 | 15.6 | 0 |
| Source table column label — nested span | DM Mono | 500 | 24 | 28.8 | 0 |
| Step title — nested span | DM Mono | 500 | 32 | 38.4 | 0 |
| Step 2 number — explicitly overridden span | Montserrat | 400 | 100 | 120 | 0 |
| Plan price — nested span | Montserrat | 600 | 48 | 57.6 | 0 |
| Footer wordmark — parent declaration | Inter | 500 | 220 | 264 | 0 |
| Alternate hero heading — Hero Section / Hero Title | Montserrat | 600 | 25 | 30 | 0 |
| Alternate hero support — nested span | DM Mono | 500 | 10 | 15 | 0.2 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#0a0a0a",
  "paper": "#f6f6f6",
  "ink": "#e6e6e6",
  "accent": "#2802ef",
  "muted": "#858585"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 15px. Component gap: 22px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Home | Unverified | Unverified | CSS top 0px; 681px declared desktop hero with atmospheric image, 724px text group and paired CTAs. Fixed Navbar overlays at top30/right50 rather than occupying a section. |
| Glance | Unverified | Unverified | CSS top681px; four indexed modules: Projects, Insights, Sources and Notes; rules, title pairs and workspace metadata. |
| Metrics | Unverified | Unverified | CSS top1373px; 12 sources analyzed, 8 insights found and 1 connected workspace, alongside the Less searching / More understanding explanation. |
| How It Works | Unverified | Unverified | CSS top2056px; four numbered steps for Project, Collect, Analyze and Connect, plus Console Showcase/App Screenshot and declared alternate image variants. |
| Sources To Signals | Unverified | Unverified | CSS top3464px; ruled SOURCE / TYPE / FINDING / STATUS table, followed by a detected-pattern statement and confidence metadata. |
| Sources | Unverified | Unverified | CSS top4364px; Built for different ways of working audience cards for research, strategists, product teams and content teams; carousel-named structures exist. |
| Comparison | Unverified | Unverified | CSS top5451px; seven paired Without NOVA / With NOVA rows under From scattered to connected. |
| Showcase | Unverified | Unverified | CSS top6901px; product mockup beside four metric detail blocks. This is a declared homepage section distinct from the promotional browser/phone composition. |
| Pricing | Unverified | Unverified | CSS top7871px; three receipt-style Solo, Studio and Scale plans. Desktop source lists $19, $49 and Let's talk; use these as captured source text, not current purchase advice. |
| Footer & CTA | Unverified | Unverified | CSS top8941px; top metadata rail, large NOVA gradient wordmark, soft light structure, closing research message, email form, three link groups and bottom legal/social rail. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Declared structures: fixed navigation, filter/transform will-change hints, multiple screenshot variants, carousel-named arrow/card elements, and link color transitions of .4s cubic-bezier(.44,0,.56,1). Runtime autoplay, slide interaction, sticky step changes, orb movement, hover choreography and form submission were not observed or verified. Recommendation: implement restrained opacity/transform transitions with reduced-motion support; keep static artwork stable until behavior is independently checked.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1390px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. The source has a 1390px desktop/min-width split and max-width1389.98 rules, plus a pointer:fine query. Within that lower branch the root declares a fixed390px width and 6603px height; this is a source canvas declaration, not a proven390px breakpoint or verified viewport rendering. No810px tablet preset is established. Phone reconstruction is recommended: stack modules, paired comparisons and plan receipts, preserve readable type and tap targets, and replace absolute section offsets with content flow. Validate independently at390px and810px; those are proposed checks, not observed source presets. Spacing and shape guidance: Recommendation: use 40–50px desktop side space, anchored by declared 1308px inner frames on the 1390px canvas; use 20–24px for a reconstructed phone layout. Recommendation: retain the declared 15px navigation and primary-button radius; keep tables and most research modules square, using circular masks only for light motifs. Recommendation: base small gaps on 6/15/22px, retain the declared 33px desktop CTA gap and 64px hero-content gap where space allows, and give major sections 80–120px internal breathing room.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.
