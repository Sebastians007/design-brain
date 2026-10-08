# Plinth Stack — website recreation specification

Preview: https://plinthdev.framer.website/  
Creator: Antony Packia Titus  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Plinth Stack makes enterprise AI infrastructure feel like a readable technical publication. Warm off-white surfaces, nearly black text, cobalt emphasis, fine rules, and modest corner rounding support a dense but orderly product narrative. Schibsted Grotesk Variable carries confident headlines with optical-size and weight axes; JetBrains Mono marks API paths, code, metrics, indices, and status information. A softly painted atmosphere frames the centered hero while a dark three-column request console supplies a concrete product story. Alternating light narrative spreads and dark evidence panels explain inference, evaluations, traces, architecture, security, and quickstart content. Placeholder badges and illustrative-result notices are part of its procurement-facing honesty.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve warm #faf9f5 paper, near-black ink, cobalt #1e44e5 accents, thin neutral rules, restrained corners, and the painted hero atmosphere rather than inventing neon effects.
- Schibsted Grotesk Variable declares font-weight 400 alongside wght 600/opsz 72 for the hero and wght 600/opsz 40 for section headings. Preserve axes separately instead of flattening declared weight.
- Keep the hero request/router/response console and its chosen/rejected model reasoning; follow with Results and In Production At before the problem comparison.
- Retain the long homepage order including Benchmarks, Security, Quote, Customers, Integrations, Quickstart, Changelog, FAQ and CTA. Pricing calculator official imagery represents /pricing, not a homepage section.
- Trust badges and demo customer results are explicitly placeholders or illustrative figures. No template source claim proves actual certification, residency, retention, training exclusion, model accuracy or live inference.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation | Schibsted Grotesk Variable | 400 | 15.0 | 21.0 | -.01em |
| Hero eyebrow | JetBrains Mono | 500 | 12.0 | 16.8 | 0.14em |
| Hero H1 | Schibsted Grotesk Variable | 400 | 78.0 | 78.0 | -.035em |
| Hero description | Schibsted Grotesk Variable | 400 | 17.0 | 25.5 | -.008em |
| Hero statistic | JetBrains Mono | 500 | 19.0 | 30.4 | -0.02em |
| Metric caption | JetBrains Mono | 500 | 10.5 | 16.8 | 0.12em |
| Request code | JetBrains Mono | 500 | 12.0 | 19.8 | 0 |
| Section H2 | Schibsted Grotesk Variable | 400 | 41.0 | 44.28 | -.028em |
| Audience H3 | Schibsted Grotesk Variable | 400 | 22.0 | 28.16 | -.016em |
| Compact H2 | Schibsted Grotesk Variable | 400 | 31.0 | 34.72 | -.028em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#faf9f5",
  "paper": "#ffffff",
  "ink": "#121210",
  "accent": "#1e44e5",
  "muted": "#6e6c64"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 4px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Brand, Platform, Pricing, Docs, Customers, Changelog, Talk to us and Start free; distinct desktop, lap, tablet and phone variants. |
| Hero Ground | Unverified | Unverified | Painted backdrop, eyebrow, centered headline with cobalt word emphasis, explanatory text, install pill, four metrics, and dark Request/Router/Response console. |
| Results | Unverified | Unverified | Four illustrative customer-result cards with a replace-with-your-own notice. |
| In Production At | Unverified | Unverified | Dense customer-name proof field and illustrative team-count caption. |
| The Problem | Unverified | Unverified | Comparison of stitched vendor stack versus unified platform across vendor management, model changes, outages, regressions, cost attribution and invoices. |
| Inference | Unverified | Unverified | Narrative and bullet list beside routing-policy UI with eligibility, costs, latency and evaluation data. |
| Evals | Unverified | Unverified | Failed-gate sample table paired with explanation of graders, CI regression gates, drift detection and golden cases. |
| Observability | Unverified | Unverified | Trace narrative beside spend-by-route and model-share interface; demo amounts are illustrative. |
| Architecture | Unverified | Unverified | Six numbered steps: Request, Route, Call, Check, Return, Record, with connected graphic and retention detail. |
| Built For | Unverified | Unverified | Four audience tabs and contextual explanation; source opening state shows AI product teams and an evaluation panel. |
| Benchmarks | Unverified | Unverified | Model comparison evidence section with quality/performance positioning and sample numbers. |
| Security | Unverified | Unverified | Data-use and enterprise procurement narrative with certification placeholder badges and Trust Center link. |
| Quote | Unverified | Unverified | Customer quotation presented as template content, not verified endorsement. |
| Customers | Unverified | Unverified | Customer-story cards with illustrative results and sample company identities. |
| Integrations | Unverified | Unverified | Provider and tool integration narrative describing a base-URL change. |
| Quickstart | Unverified | Unverified | First-call explanation and editable code with syntax-colored spans. |
| Changelog | Unverified | Unverified | Dated product-change links with compact heading and metadata. |
| FAQ | Unverified | Unverified | Question-and-answer component group addressing first evaluation concerns. |
| CTA | Unverified | Unverified | Closing free-start and sales-contact invitation, with painted/veiled background treatment. |
| Footer | Unverified | Unverified | Product, developer, company and legal link groups, brand, rule and bottom metadata; trust links include status and sub-processors. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Source hero word spans declare opacity 0.001, blur(4px) and translateY(14px); the CTA Wrap declares opacity 0 and translateY(16px). Architecture has named scroll markers, Built For tab structures, and FAQ has stateful component variants. No live reveal, copy, tab, or accordion behavior was tested. Recommended recreation: restrained reveals, visible reduced-motion content, keyboard-operable optional tab/accordion controls, and static numbered architecture on small screens.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Principal root bands: >=1440px desktop, 1200–1439.98px lap, 810–1199.98px tablet, <=809.98px phone. Component styles add a 640px split. Source Inference/Evals/Observability Wrap changes to column at tablet and phone; several phone Wrap rules use 20px gutters; Architecture/Security section padding changes from declared 115px to 60px. Gutter 32, radius 4 and gap 24 are overall recommendations, not universal measurements.

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

Category: AI / Enterprise / trust. Selection basis: Official listing targets AI infrastructure and developer platforms, with a Trust Center, retention/residency policy content, and explicit placeholder compliance badges for procurement review. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Type rows preserve numeric font-weight declarations, including 400 when a variable wght axis is 600. Declared em lines converted using declared size. Static and Variable family names remain distinct. SourceRoleDetails retains nested cobalt emphasis, initial reveal styles, italic and variation declarations; no rendered geometry implied.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed warm-paper hero, cobalt emphasis, technical statistics and three-column request/router/response console. A second screenshot at scrollY2808 shows a routing panel during its reveal state; the left copy is not visible in that capture. Template metrics and trust badges remain illustrative. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
