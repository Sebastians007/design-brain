# Docspace — website recreation specification

Preview: https://docspace.framer.website/docs  
Creator: Soyeb  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Docspace is a developer documentation reference with a two-tier global masthead, violet current-page cues, grouped left navigation, a constrained central reading rail and a desktop right on-page rail. The selected primary screen is /docs, not the promotional root. A compact Documentation introduction leads to six task-oriented groups; its secondary introduction article supplies prose, callouts, executable-looking examples, tables, parameter descriptions, prompt controls, feedback and next-page navigation. Geist carries reading and interface; Fragment Mono preserves code.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: typography rows are numeric conversions of source declarations, not rendered measurements; em/percent line heights use the declared font size.
- SOURCE / OFFICIAL REFERENCE: Marketplace JPGs are reference artwork. Scenic presentation backgrounds, screen frames and template-price badges are not live-page components.
- OPTIONAL RECOMMENDATION: gutter/radius/gap below are recreation construction defaults; component-specific and responsive source declarations take precedence.
- SOURCE LIMITATION: search results, index ingestion, theme persistence, code/page copying, translation, feedback, support routing, newsletter delivery and CMS editing were not exercised. Public HTML/CSS establishes only visible design and declared structure.
- SOURCE DECLARED: docspace primary URL intentionally uses /docs so the kit preserves genuine documentation anatomy. Official preview-root HTML is separately retained as preview-root-public.html.
- SOURCE CORRECTION: secondary source serializes tablet/phone presets before base CSS; first-match helper values30px h1/26px h2/15px body were corrected from unconditional base rules (32px h1,28px h2,16px body). Media values remain separate.
- SOURCE DECLARED: custom pre uses Fragment Mono15px weight400/1.35em; custom feedback uses Geist16px weight500/1.4em. Generic h/p extraction alone omits these roles.
- SOURCE LIMITATION: pricing/contact/community links target preview placeholders, GitHub status is aria-busy, and diagram source contains Rendering diagram. Do not claim backend readiness.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Wordmark | Geist | 500 | 24.0 | 28.8 | -0.04em |
| Documentation search | Geist | 500 | 14.0 | 16.8 | 0 |
| Primary navigation | Geist | 500 | 14.0 | 16.8 | 0 |
| Sidebar group | Geist | 500 | 15.0 | 18.0 | -0.02em |
| Sidebar link | Geist | 500 | 15.0 | 16.5 | -0.02em |
| Breadcrumb | Geist | 400 | 14.0 | 16.8 | -.04em |
| Docs hub h1 / desktop | Geist | 500 | 32.0 | 38.4 | -.03em |
| Hub description | Geist | 400 | 16.0 | 22.4 | -.02em |
| Category card h2 | Geist | 500 | 20.0 | 22.0 | -0.3px |
| Category card body | Geist | 500 | 14.0 | 16.1 | -0.3px |
| TOC overline | Geist | 500 | 12.0 | 14.4 | -0.04em |
| Article h1 / desktop base | Geist | 500 | 32.0 | 38.4 | -.03em |
| Article h2 / desktop base | Geist | 500 | 28.0 | 33.6 | -.03em |
| Article paragraph / desktop base | Geist | 400 | 16.0 | 22.4 | -.02em |
| Article h3 / desktop base | Geist | 500 | 24.0 | 28.8 | -.03em |
| Article code block | Fragment Mono | 400 | 15 | 20.25 | -0.01em |
| Article feedback prompt | Geist | 500 | 16 | 22.4 | -0.01em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#fafafa",
  "ink": "#202020",
  "accent": "#6259e3",
  "muted": "#6b6b6b"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 12px. Component gap: 20px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Global header | Unverified | Unverified | Desktop/Tablet/Phone masthead with Docspace wordmark, documentation search, theme toggle, GitHub status, Pricing and Sign up; second row contains Documentation/API Reference/Components/Guides/Resources and language control. |
| Left documentation sidebar | Unverified | Unverified | Left Sidebar > Docs Menu has six open groups: Getting Started, Core Concepts, Features, Advanced, Account & Billing and Reference; bottom View Changelog control. |
| Breadcrumb | Unverified | Unverified | Main > Section > Container > Content Wrap > Main Content > Breadcrumb shows Docs and Getting Started; Copy Page component alongside. |
| Documentation hub introduction | Unverified | Unverified | Main Content > Content Wrap > Container > Header: Documentation h1 and brief supporting sentence. |
| Category grid | Unverified | Unverified | Container > Content links Getting Started, Core Concepts, Features, Advanced, Account & Billing and Reference into their article routes. |
| Right on-page rail | Unverified | Unverified | Right Sidebar > Scroll Container > TOC Wrap with ON THIS PAGE header; docs hub has no observed long article headings in its main content. |
| Compact menu access | Unverified | Unverified | Primary > Button contains Menu control; left desktop sidebar and right rail have compact-screen visibility declarations. |
| Footer | Unverified | Unverified | Desktop/Tablet/Phone footer: brand sentence, copyright, social links and Pages/Categories/Legal/Company link columns, then designer and attribution. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: theme toggle, dropdown, open sidebar groups, sticky/fixed reading rails and custom search/copy/feedback components exist in the public source. The marketplace advertises theme-mask animation; source inventory does not prove timing, persisted preferences, successful clipboard writes or real search indexing. OPTIONAL RECOMMENDATION: render the reading content before enhancement, keep current-page cues stable, restore focus after compact navigation and disable decorative transition motion under reduced-motion preference.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Left sidebar declares 280px desktop and 240px tablet; its phone variant is hidden. Right rail declares 25%/max-width340px and is hidden on tablet/phone. Central container max-width700px; main content gap52px/48px/42px. Header gutters32px desktop,28px tablet,16px phone. H1 preset is32px desktop,30px tablet,28px phone; body16px desktop and15px compact. OPTIONAL RECOMMENDATION: retain labelled menu access and horizontally contained code/table overflow while the prose remains viewport-width.

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

Category: Documentation / help centers / Developer documentation. Selection evidence: Selected /docs primary screen is a standalone developer documentation hub with persistent grouped topic sidebar, documentation search, breadcrumbs, category grid and on-page navigation. Its introduction article supplies reading, code and related-navigation anatomy; this is not the product-marketing preview home. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source HTML/CSS declaration roles in docspace-evidence-root. Unconditional base presets are selected before local inline overrides; media presets retained separately. documentation-custom-declarations.json preserves native pre/table/code/control nodes the generic collector misses. Numeric line heights are converted, not rendered measurements. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
