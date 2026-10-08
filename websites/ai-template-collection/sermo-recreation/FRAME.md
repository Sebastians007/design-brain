# Sermo — website recreation specification

Preview: https://sermo-ai.framer.website/  
Creator: Masood Ahmad  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Sermo stages conversational AI as an operator console surrounded by warm signal light. Near-black surfaces, rounded capsule navigation and an amber radial spectrum make the opening feel immersive while the broad grotesk headline remains unmistakable. The inset command console and resolved-call indicator establish a product scene immediately. Lower modules separate support complexity, agent composition, continuous learning, analytical insight and natural voice, combining framed scenic imagery with dark application cards. Orange accents identify actions and active signal. A spacious customer spotlight supplies the human counterweight, and the closing footer enlarges the wordmark into a graphic horizon. Preserve its variable font axes and layered darkness; a flat black rectangle misses the hierarchy.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: BDO Grotesk Variable uses font-weight 400 for many roles alongside independent wght axes; preserve both declarations. Inter appears in a metric eyebrow; Fragment Mono is loaded.
- SOURCE / OFFICIAL REFERENCE: preserve warm radial spectrum, inset console, capsule navigation, waveform card and large footer wordmark. Outer orange marketplace framing is not page canvas.
- SOURCE DECLARED: home has separate Improve and Smart Insights frames, then separate Voice and Voice Card frames. Do not collapse the complete narrative into one generic feature grid.
- SOURCE DECLARED: numeric type rows describe source presets, not computed browser rectangles. Fragment Mono has a font-face declaration but no extracted home text role, so no invented numerical role is assigned.
- OPTIONAL RECOMMENDATION: spacing defaults are recreation choices; WebGL motion, live audio, transcripts, model training, integrations, metrics and demo delivery are untested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / CSS p; wght 400 | BDO Grotesk Variable | 400 | 14 | 16.8 | -.035em |
| Hero / CSS h1; wght 400 | BDO Grotesk Variable | 400 | 76 | 77.52 | -.035em |
| Hero body / CSS p; wght 400 | BDO Grotesk Variable | 400 | 18 | 27.9 | -.025em |
| Release badge / CSS p; wght 500 | BDO Grotesk Variable | 400 | 12 | 12 | -.02em |
| Console heading / CSS h4; wght 470 | BDO Grotesk Variable | 400 | 22 | 26.4 | -.02em |
| Console label / CSS p; wght 400 | BDO Grotesk Variable | 400 | 13 | 18.2 | -.02em |
| Metric eyebrow / CSS p | Inter | 600 | 12 | 14.4 | .08em |
| Metric figure / CSS p; wght 400 | BDO Grotesk Variable | 400 | 44 | 44 | -.03em |
| Section title / CSS h2; wght 400 | BDO Grotesk Variable | 400 | 40 | 42.4 | -.03em |
| Customer quote / CSS h3; wght 400 | BDO Grotesk Variable | 400 | 38 | 41.8 | -.025em |
| Footer wordmark / CSS p; wght 700 | BDO Grotesk Variable | 500 | 350 | 273 | -0.045em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#060607",
  "paper": "#131316",
  "ink": "#f6f5f3",
  "accent": "#e1683c",
  "muted": "#9e9c99"
}
```

Recommended starting desktop gutter: 64px. Principal radius: 24px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Brand capsule, route capsule, locale/login treatment, demo action and mobile drawer declarations. |
| Hero | Unverified | Unverified | Release badge, radial spectrum, heading, paired demo/hear actions, command console and resolved live-call card. |
| Logo Strip | Unverified | Unverified | Horizontal trust or partner strip between hero and performance narrative. |
| Stats | Unverified | Unverified | Ledger-style cards for deflection, response time and language coverage, with small visual plots. |
| Complexity | Unverified | Unverified | Support edge-case introduction followed by policy, historical learning and escalation features. |
| Composer | Unverified | Unverified | Five-step agent creation narrative alongside framed agent configuration preview. |
| Improve | Unverified | Unverified | Continuous-learning introduction and three improvement capabilities. |
| Smart Insights | Unverified | Unverified | Ticket driver visualization alongside Signal product detail, benefits and exploration link. |
| Voice | Unverified | Unverified | Natural-voice introduction with market consistency, interruption and response capabilities. |
| Voice Card | Unverified | Unverified | Scenic frame, Voice Layer detail, waveform/playback panel, duration and transcript example. |
| Integrations | Unverified | Unverified | Stack compatibility introduction, layered logo wall, sync summary and operational figures. |
| Customer Spotlight | Unverified | Unverified | Large customer quotation, portrait attribution, business outcome figures and story link. |
| CTA | Unverified | Unverified | Closing invitation, paired contact/demo actions and voice spectrum with transcript chips. |
| Footer | Unverified | Unverified | Product/Company/Resources navigation, social links, creator credit and oversized gradient-spectrum wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: radial spectrum, waveform, paused voice-card state, live-call indicator, navigation drawer and staged composer structures exist. Marketplace advertises WebGL and scroll-triggered animation. No timings, playback, transcription, training, integration synchronization or backend outcomes were tested. OPTIONAL: supply a static spectrum fallback and a persistent pause control for animated signal.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: primary root variants are desktop >=1200px, tablet 810–1199.98px and phone <=809.98px; component preset media use 1199px and 809px maxima. Footer wordmark declares 350px, 250px and 118px variants. OPTIONAL: keep console text readable, stack narrative and product cards without changing their sequence, and reduce decorative spectrum coverage on phone.

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

Category: AI / Voice / meetings. Selection basis: Explicit conversational voice-agent positioning, transcript console, live call indicators, voice playback card and support analytics in a dark operator layout. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public source HTML/CSS declarations saved in sermo-evidence-root. CSS weight and font-variation-settings are independent. Source em line heights were multiplied by declared size; these are not computed dimensions.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a dark hero, oversized two-line heading and console preview. Waveform/WebGL structures are documented in source and listing; this static capture does not establish a working voice model or exact playback timing. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
