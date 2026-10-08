# Lore — website recreation specification

Preview: https://lore-app.framer.website/  
Creator: Liana Tudakova  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Lore presents a creative AI workspace through the atmosphere of a film opening. Deep black surfaces and an immersive teal scene carry a left-aligned proposition, while white pill actions give the eye a clear next step. DM Sans keeps the surrounding interface lucid; Lily Script One adds a compact expressive brand gesture. Rounded output cards, dim border lines, numbered process modules, and a dense dashboard illustration connect inspiration to production. The visual hierarchy alternates expansive media with compact control detail. Preserve the muted second tone inside headings and the consistent image darkness beneath text. The marketplace framing is presentation artwork rather than reusable website chrome.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the actual home order: navigation, Hero, How it works, Companies, Showcase, Features, Dashboard, News, CTA, Footer. The template purchase badge follows separately and is not product content.
- DM Sans handles display, reading and interface roles; Lily Script One is the wordmark family. Keep nested muted-color heading spans, declared stylistic sets, and italic/weight faces.
- Build the cinematic hero as media with a deliberate text-protection layer, announcement, heading and paired actions. Do not use the entire marketplace screenshot as a page background.
- Showcase cards need individually controlled crops, model metadata and prompt disclosure. Real MP4 source declarations establish assets, not verified playback timing or generation capability.
- The dashboard, counts, availability language, model names and export labels are demonstration claims. Adapt them to real product evidence before publishing; preserve contrast and focus visibility.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Header wordmark; source declaration | Lily Script One | 400 | 26.0 | 31.2 | -.02em |
| Navigation; source declaration | DM Sans | 400 | 16.0 | 22.4 | .01em |
| Action; source declaration | DM Sans | 500 | 16.0 | 20.8 | -.02em |
| Announcement badge; source declaration | DM Sans | 400 | 16.0 | 22.4 | .01em |
| Hero title; source declaration | DM Sans | 500 | 54.0 | 64.8 | -.02em |
| Section heading; source declaration | DM Sans | 500 | 36.0 | 43.2 | -.02em |
| Step index; source declaration | DM Sans | 400 | 32.0 | 38.4 | -.02em |
| Control metadata; source declaration | DM Sans | 500 | 12.0 | 14.4 | -.02em |
| Supporting copy; source declaration | DM Sans | 400 | 20.0 | 28.0 | -.02em |
| Prompt-card heading; source declaration | DM Sans | 500 | 24.0 | 28.8 | -.02em |
| Feature metric; source declaration | DM Sans | 500 | 60.0 | 72.0 | 0em |
| Feature supporting copy; source declaration | DM Sans | 400 | 18.0 | 25.2 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#0a0a0a",
  "paper": "#1a1a1a",
  "ink": "#ffffff",
  "accent": "#04b8e0",
  "muted": "#c2c2c2"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop Header and Tablet Close/Mobile Close variants: script wordmark, primary destination links and account/creation actions. |
| Hero | Unverified | Unverified | Cinematic MP4/poster layer, announcement, white heading with muted nested phrase, primary and showcase actions. |
| How it works | Unverified | Unverified | Three numbered cards illustrate writing, progress and export/share choices; learn-more action. |
| Companies | Unverified | Unverified | Model aggregation proposition and repeated partner-style logo band. |
| Showcase | Unverified | Unverified | Output carousel containing vertical MP4/poster cards, model metadata and prompt overlays with directional controls. |
| Features | Unverified | Unverified | Asymmetric media bento with demo model/quality counters, style tile, export, multi-model, usage and brand tile. |
| Dashboard | Unverified | Unverified | Large workspace mockup with sidebar, project tiles and selected-model notice; three supporting collaboration/organization/device benefits. |
| News | Unverified | Unverified | Editorial header, all-stories action and linked product/company article modules. |
| CTA | Unverified | Unverified | Standalone invitation section with surrounding output images and primary action. |
| Footer | Unverified | Unverified | Brand proposition, navigation, legal routes, email contact and author/platform attribution. Separate Delete me! purchase widget is template promotion. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Hero and Showcase include MP4 sources and posters; showcase has arrow controls and Default variants, navigation has closed tablet/mobile variants, and the listing advertises a video hero/carousel. These facts do not verify autoplay, runtime progress, animation durations or completed interactions. OPTIONAL: user-controlled media playback, discrete carousel paging, explicit pause controls and a static-poster reduced-motion mode.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: principal anchors are desktop >=1200px, tablet 810–1199.98px, phone <=809.98px; smaller component rules also use integer 809/1199 boundaries. OPTIONAL: collapse navigation to an accessible menu, stack process cards, keep showcase scroll controls reachable, simplify dashboard detail on phones, and move media text away from busy focal areas. Preserve source hierarchy while adapting recommended gutters.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## AI product category context

Category: AI / Generative media. Selection basis: The official listing explicitly targets video, image, and audio generation platforms, including a content gallery and product dashboard UI. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public preview HTML/CSS declarations, not browser-computed measurements. Pixel sizes are literal source values; percentage/em line heights are numerically converted using the declared role size. SourceRoleDetails retains nested overrides, variant paths, stylistic sets and italic rules. Gutter, radius and gap are authored recreation recommendations, not global source measurements.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the dark circular aquatic video scene, left-aligned headline and pill actions. The site declares MP4 media. This capture does not establish generation, export or model-provider access. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
