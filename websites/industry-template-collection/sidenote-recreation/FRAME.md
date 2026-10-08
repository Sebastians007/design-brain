# Sidenote — website recreation specification

Preview: https://inventive-guidance-390250.framer.app/  
Creator: Vexora Studio  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Sidenote is a personal writer’s notebook and newsletter home. Mara Ellison’s compact navigation uses Geist, with a location/time label, search, Day/Lamp/Auto choices and a pill subscribe action. A large Newsreader sentence introduces the author over fine graph paper; a numbered margin note and email form are part of this first impression. The official reference is the dark Lamp presentation, with pale serif type and subdued pencil-blue marks. The declared Day palette is light. Below, long-reading scenes, latest essays, a complete index, a three-step reading path, short notes, series, an annotated bookshelf, topic chips, reader letters and an archive sustain an author-led publishing rhythm. Geist Mono marks dates and metadata; retain that contrast with the variable serif instead of flattening all text into a single face.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: typography comes from public HTML/CSS and inline variable axes, not rendered measurements. Numeric weight is the CSS font-weight declaration; explicit wght axis can differ and must also be preserved.
- OFFICIAL REFERENCE: use marketplace artwork as design evidence; promotional borders, inset layouts and sales captions are not native site sections.
- SOURCE DECLARED: root boundaries are1200px/768px. Named content, actual IDs and public route declarations are recorded without inventing anchors.
- OPTIONAL RECOMMENDATION: radius/gap are specimen defaults; use per-component geometry from source-facts.json. Controls and backend results are untested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Brand / Wordmark / p | Geist | 600 | 16.0 | 19.2 | -.012em |
| Links / Link Essays / p | Geist | 500 | 15.0 | 19.5 | -.005em |
| Menu Button / Menu Label / p | Geist Mono | 500 | 12.0 | 15.6 | .06em |
| Links / Link Essays / p | Newsreader Variable | 400 | 22.0 | 27.5 | -.01em |
| Hero / Hero Sentence / h1 | Newsreader Variable | 400 | 96.0 | 101.76 | -.025em |
| Hero / Hero Notes / p | Inter | 500 | 16.0 | 19.2 | 0 |
| Hero Subscribe / Subscribe Note / p | Geist Mono | 400 | 13.0 | 20.15 | 0em |
| Video Copy / Video Heading / h2 | Newsreader Variable | 400 | 30.0 | 36.0 | -.012em |
| Video Copy / Video Text / p | Newsreader Variable | 400 | 21.0 | 33.6 | 0em |
| Latest Main / Latest Title / h2 | Newsreader Variable | 400 | 56.0 | 59.36 | -.022em |
| Latest Main / Latest Dek / p | Newsreader Variable | 400 | 24.0 | 33.6 | -.005em |
| Start Numeral Tab / Start Numeral / p | Geist Mono | 300 | 56.0 | 56.0 | -.03em |
| Start Card 1 (motion) / Start Title / h3 | Geist | 600 | 20.0 | 26.0 | -.01em |
| Start Card 1 (motion) / Start Dek / p | Geist | 400 | 16.0 | 24.0 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f6f7f4",
  "paper": "#eceee9",
  "ink": "#16181d",
  "accent": "#245ced",
  "muted": "#5e636c"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 24px. Component gap: 36px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Skip link, author identity, location/time, reading routes, search, Day/Lamp/Auto and subscribe. |
| Hero | Unverified | Unverified | SOURCE DECLARED anchor #top. Large first-person sentence, graph paper, numbered margin note and email form. |
| Now Strip | Unverified | Unverified | SOURCE DECLARED anchor #now. Moving writing/reading/listening status line with Now destination. |
| Reading Stats | Unverified | Unverified | Small publication metrics; sample counts remain demo content. |
| See It Move | Unverified | Unverified | Explainer text with sidenote demonstration visual. |
| Latest Essay | Unverified | Unverified | Featured essay date, reading time, title, dek and essay action. |
| How a Sidenote Reads | Unverified | Unverified | Pinned long-reading story and note demonstration. |
| Pull Quote | Unverified | Unverified | Large quotation with ink animation declaration. |
| Essay Index | Unverified | Unverified | Chronological essay list and preview. |
| Start Here | Unverified | Unverified | Three numbered recommended essays linked by a pencil-like line. |
| Notes Band | Unverified | Unverified | Short note feed on graph paper. |
| From Grid Paper to Page | Unverified | Unverified | Second pinned story/process interval. |
| Series | Unverified | Unverified | SOURCE DECLARED anchor #series. Three essay series shelf. |
| Reading List | Unverified | Unverified | Annotated book shelf and reading annotations. |
| Topics | Unverified | Unverified | Five topic chips linking to filtered essay routes. |
| Reader Letters | Unverified | Unverified | SOURCE DECLARED anchor #letters. Reader reply cards. |
| Newsletter Archive | Unverified | Unverified | SOURCE DECLARED anchor #archive. Newsletter promise, subscribe form and previous letter rows. |
| Colophon | Unverified | Unverified | Personal publication colophon ticker. |
| Footer | Unverified | Unverified | Closing newsletter invitation, author sign-off and reading/legal links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: named layers include graph-paper cursor ink, now ticker, sticky pinned stories, quote ink, series pinned shelf, reader letters clip, motion guard, lamp glow and smooth scroll. The marketplace describes sidenotes, remembered theme modes and newsletter integrations. Exact trigger timing, persistence, cursor behavior and drawer operation are untested. OPTIONAL: offer readable static notes and normal series links under reduced motion, keep subscription form usable without animation, and provide focus-visible states. No email delivery, search indexing, passcode membership or integration backend was verified.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 768px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 768–1199.98px, phone <=767.98px. Hero max-width1200px uses padding136px40px112px and gap36px; tablet padding96px40px80px/gap30px; phone72px20px64px/gap24px. Hero sentence declares width820px/max-width100%. Start Row is a three-column grid on desktop and one-column at tablet/phone. Hero Subscribe becomes a vertical stack on phone. OPTIONAL: preserve inline note references while adapting margin notes to a keyboard-operable compact drawer.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Industry context

Category: Publishing / Personal newsletter / essays. Selection evidence: Official listing identifies a personal essay blog for writers, founders and consultants building newsletter audiences, with author-led long reading, notes, series and a dedicated Newsletter route. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public source HTML/CSS and inline declarations. Base preset rows are not computed browser styles; keep media alternatives in source-facts.json. linePx converts declared em by sizePx. Variable axes are distinct from font-weight; Literata/Newsreader optical-size and weight settings must survive reconstruction. Reference images inspected independently. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
