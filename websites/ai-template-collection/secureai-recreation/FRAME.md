# SecureAI — website recreation specification

Preview: https://secureai.framer.website/  
Creator: Creative Mints  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

SecureAI gives enterprise AI security a severe, industrial visual language. A near-black field supports white angular Chakra Petch display text, while cyan marks actionable accents and lime supplies secondary operational emphasis. Its oversized mineral illustration crosses a hatched hero frame and makes the product feel physical before the page introduces consoles, queues, agent visibility, integrations, and architecture cards. Plus Jakarta Sans carries the explanatory headings and body copy with notably tight tracking. Corner brackets, dotted textures, hard rules, compact labels, and split card arrangements connect the sections. The identity is suitable for a security platform whose story moves from broad confidence to inspectable operational detail.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve black canvas, white readable type, cyan primary accents, secondary lime, angular Chakra Petch hero, and the mineral image over a framed diagonal pattern.
- Homepage section titles use Plus Jakarta Sans 500; avoid applying the angular hero face to every heading. Navigation and small operational labels use distinct declared styles.
- Keep Platform code log and queued/pending progress cards, Core Capabilities four categories, Expertise four architecture areas, and the asymmetric Platform Insights panels as separate compositions.
- Official yellow security posters and the concrete gallery surround are promotional artwork; they are not additional homepage sections or measured browser layout.
- Enterprise security, metrics, integrations, policies, and audit-log content describe a template demonstration. They establish no working AI backend, real customer result, or earned certification.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation | Plus Jakarta Sans | 700 | 14.0 | 12.6 | -0.01em |
| Hero eyebrow | Chakra Petch | 700 | 16.0 | 22.4 | .2em |
| Hero H1 | Chakra Petch | 700 | 68.0 | 61.2 | -.03em |
| Hero description | Plus Jakarta Sans | 500 | 18.0 | 21.6 | -.04em |
| Section H2 | Plus Jakarta Sans | 500 | 64.0 | 64.0 | -.04em |
| Console label | Chakra Petch | 600 | 16.0 | 14.4 | -.02em |
| Workflow annotation | Plus Jakarta Sans | 700 | 14.0 | 19.6 | -.01em |
| Footer legal | Plus Jakarta Sans | 500 | 12.0 | 16.8 | -0.03em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#000000",
  "paper": "#030407",
  "ink": "#ffffff",
  "accent": "#49bbca",
  "muted": "#a8b8bc"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 0px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop, tablet and mobile navigation declarations; live links expose Services, Blog, and a demo label targeting the pricing anchor. |
| Header / hero | Unverified | Unverified | Agentic-security eyebrow, split two-line heading, short description, bracket corners, dark hatching, mineral image, and lower-right proposition. |
| Platform | Unverified | Unverified | Platform heading followed by code/log panel and two operational progress/review columns with colored status cards. |
| Core Capabilities | Unverified | Unverified | Four cards for Agents, Response, Security, and Visibility, with graphic strokes and concise descriptions. |
| Integrations | Unverified | Unverified | Security-stack connection heading and a named integration demonstration component. |
| Expertise | Unverified | Unverified | Four cards: Agent Architecture, Tool Integration, Memory Systems, and Product Operations; preserve their two-column grouping. |
| Platform Insights | Unverified | Unverified | Two upper and two lower panels for Planning Layer, Memory System, Execution Engine, and System Throughput, with demo statistics and visual bars. |
| Pricing | Unverified | Unverified | Starter, Growth, and Enterprise plans; Enterprise uses contact language and lists risk detection, access reviews, audit logs, and policy checks. |
| Articles | Unverified | Unverified | Three numbered CMS article links with dates, categories, titles, summaries, and read actions. |
| Custom dev (Delete me) | Unverified | Unverified | Creator service advertisement exists before the footer; retain in a faithful reconstruction, remove only as an authored product adaptation. |
| Footer | Unverified | Unverified | Brand, oversized security proposition, Services/Blog, contact address, social/creator links, legal labels, and mineral graphic; legal labels currently target creator profile. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Public HTML declares the Header at opacity 0.001 with translateY(400px), names CodeStream, Integration Demo Animation, and animation illustration components, and includes letter/span wrappers in section titles. These are source states and component names, not verified playback or interaction timings. Recommended reconstruction: short opacity/position reveals, restrained operational indicators, and a reduced-motion mode with all text visible immediately.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Principal page bands: >=1200px desktop, 810–1199.98px tablet, <=809.98px phone. Component media also declares 809px/1199px cutoffs. The source has explicit desktop/tablet/mobile navigation variants. Gutter 32, radius 0 and gap 24 are reconstruction recommendations. On phones, stack hero text before image, move queue cards into reading order, and keep log text horizontally scrollable instead of shrinking it.

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

Category: AI / Enterprise / trust. Selection basis: Official listing expressly targets AI security, observability, governance, and safe enterprise AI deployment. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Numeric roles are base public HTML/CSS declarations; percentage lines converted from declared size. They are not rendered measurements. Muted color is an authored accessible recommendation. SourceRoleDetails preserves full italic, feature, and nested-span declarations.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a black technical hero, cyan rock artwork, striped field, sharp corner marks and Chakra Petch display. Security product claims, logs and governance operations were not independently verified. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
