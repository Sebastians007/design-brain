# Supportify — website recreation specification

Preview: https://supportify.framer.website/  
Creator: Anton Radionov  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Supportify is a customer knowledge base organized around six text-first support collections and a concise quick-answer index. An Inter masthead and generous Help Center introduction establish a neutral service interface; small topic icons, right chevrons and horizontal rules carry hierarchy without promotional artwork. A bordered newsletter block and repeated navigation close the hub. The inspected article preserves a collection breadcrumb, readable h1/dek/body hierarchy, inline editorial illustrations, related articles and an assistance escalation block.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: typography rows are numeric conversions of source declarations, not rendered measurements; em/percent line heights use the declared font size.
- SOURCE / OFFICIAL REFERENCE: Marketplace JPGs are reference artwork. Scenic presentation backgrounds, screen frames and template-price badges are not live-page components.
- OPTIONAL RECOMMENDATION: gutter/radius/gap below are recreation construction defaults; component-specific and responsive source declarations take precedence.
- SOURCE LIMITATION: search results, index ingestion, theme persistence, code/page copying, translation, feedback, support routing, newsletter delivery and CMS editing were not exercised. Public HTML/CSS establishes only visible design and declared structure.
- SOURCE DECLARED: this is a standalone help-center collection/article pattern. The sample topics are template-help content; taxonomy and article bodies should be replaced together for a real customer product.
- SOURCE DECLARED: Inter-Bold and Inter-Medium inline selectors are aliases of actual Inter weight roles; keep the downloaded Inter families/styles rather than requesting a fictional font family.
- SOURCE DECLARED: official image01 shows light hub and image02 shows dark hub plus compact collection view. Source prefers-color-scheme tokens invert the text/canvas; a manual theme toggle was not established.
- SOURCE LIMITATION: article content appears in source variants multiple times; this is responsive/component serialization, not an instruction to repeat paragraphs in the recreation.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Wordmark | Inter | 700 | 16.0 | 24.0 | 0 |
| Primary navigation / topic title | Inter | 500 | 16.0 | 24.0 | 0em |
| Help-center h1 / desktop | Inter | 700 | 48.0 | 57.6 | 0em |
| Header description | Inter | 400 | 20.0 | 28.0 | 0em |
| Topic excerpt / article body | Inter | 400 | 16.0 | 24.0 | 0em |
| Quick links / section h2 | Inter | 700 | 24.0 | 28.8 | 0em |
| Subscribe action | Inter | 500 | 16.0 | 19.2 | 0em |
| Form consent | Inter | 400 | 14.0 | 19.6 | 0em |
| Article h1 / desktop | Inter | 700 | 32.0 | 38.4 | 0em |
| Article h2 | Inter | 700 | 24.0 | 28.8 | 0em |
| Article h3 | Inter | 700 | 20.0 | 24.0 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f5f5f7",
  "paper": "#ffffff",
  "ink": "#000000",
  "accent": "#000000",
  "muted": "#666666"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 0px. Component gap: 20px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Global navigation | Unverified | Unverified | Desktop/Tablet/Mobile Closed masthead: Supportify logo, Help Center, Style Guide, Changelog, Contact, Contents and search control. |
| Help Center header | Unverified | Unverified | Content > Wrapper > Header contains Help Center h1 and two-line service description. |
| Six support collections | Unverified | Unverified | Content > Wrapper > Categories two-column desktop grid: Code enchantment, Troubleshoot trails, Content alchemy, Brand wizardry, SEO spells and Setup sorcery. Each link carries icon/title/chevron, excerpt and bottom divider. |
| Quick links | Unverified | Unverified | Content > Wrapper > Quick Links > Collection lists eight direct article destinations in compact rows. |
| Newsletter invitation | Unverified | Unverified | Content > Wrapper > Desktop/Mobile > Content: Join newsletter heading, supporting text, Newsletter Form email input/Subscribe control and consent text. |
| Footer | Unverified | Unverified | Desktop/Tablet/Mobile footer repeats brand and Help Center/Style Guide/Changelog/Contents/Contact links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Mobile Closed nav, article chevrons, Search component, newsletter form Default state and light/dark color-scheme token alternatives are in source. These describe navigation/form affordances, not tested menu/search results or email delivery. OPTIONAL RECOMMENDATION: use quiet focus/hover feedback and accessible menu toggling; preserve collection navigation as normal links so the knowledge base is usable without animation.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px; tablet810–1199px; phone<=809px. Content Wrapper max-width1080px and gap120px desktop/80px tablet; Categories and quick-link collection declare two columns on wide screens and one column on phone. Hero48px desktop,40px tablet/phone; article h1 is32px desktop and26px <=1199px. Newsletter outer panel declares80px desktop padding and40px20px compact variant. OPTIONAL RECOMMENDATION: preserve title/excerpt pairs and let long support questions wrap above each divider.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Sector context

Category: Documentation / help centers / Customer knowledge base. Selection evidence: Standalone help-center root with global search/navigation, six support topic collections and an eight-link direct-answer index. Inspected article route contains collection breadcrumb, heading/dek/body, related articles and Contact Support escalation, establishing customer self-service knowledge-base fit. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source HTML/CSS declaration roles in supportify-evidence-root. Unconditional base presets are selected before local inline overrides; media presets retained separately. documentation-custom-declarations.json preserves native pre/table/code/control nodes the generic collector misses. Numeric line heights are converted, not rendered measurements. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
