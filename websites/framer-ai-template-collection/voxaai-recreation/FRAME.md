# VoxaAI — website recreation specification

Preview: https://voxa.framer.website/  
Creator: Rupak Goura  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

VoxaAI presents voice automation with the calm clarity of a business tool. Its narrow charcoal navigation floats over an otherwise white page, carrying a powder-blue emblem and a contrasting white demo button. A centered headline leads to a compact role selector and transcript-like preview. Pale blue textured feature scenes frame native-looking language controls, CRM diagrams and message cards. The commercial rhythm alternates explanatory modules, use cases, pricing, customer quotes and practical questions. Small rectangular buttons, quiet borders and a restrained Inter hierarchy keep the system approachable. Decorative partner names use several distinct display faces; preserve their individuality rather than applying the body font everywhere.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Inter is the primary page face. Additional families belong to partner logotypes and decorative marks, not the hero.
- SOURCE / OFFICIAL REFERENCE: maintain white canvas, charcoal floating navigation and powder-blue highlights; the grainy blue marketplace backdrop and tilted page framing are presentation artwork.
- SOURCE DECLARED: preserve all home sections through footer, including the in-hero role preview and trust strip; pricing is a home anchor, not a separate pricing page.
- SOURCE DECLARED: type roles below come from HTML/CSS declarations; linePx converts em using the declared size. They are not browser-rendered measurements.
- OPTIONAL RECOMMENDATION: spacing defaults are recreation choices. Playback, agent switching, billing updates, FAQ transitions, forms and actual voice service are untested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / CSS p | Inter | 400 | 14 | 18.2 | 0px |
| Primary action / CSS p | Inter | 500 | 14 | 21 | 0px |
| Hero / CSS h2 | Inter | 500 | 60 | 60 | -1px |
| Compact hero / CSS h4 | Inter | 500 | 32 | 38.4 | -.01em |
| Hero supporting copy / CSS p | Inter | 400 | 16 | 22.4 | 0px |
| Feature title / CSS desktop h4 preset | Inter | 500 | 36 | 43.2 | -.01em |
| Plan title / CSS desktop h5 preset | Inter | 500 | 28 | 36.4 | -.01em |
| Use-case title / CSS p | Inter | 500 | 18 | 27.9 | 0px |
| Bottom CTA / CSS desktop h2 preset | Inter | 500 | 60 | 60 | -1px |
| Partner wordmark / CSS p | Italiana | 500 | 34 | 40.8 | 0 |
| Partner wordmark / CSS p | Inria Serif | 500 | 34 | 40.8 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f7f7f7",
  "ink": "#2b2d2d",
  "accent": "#b9defa",
  "muted": "#666666"
}
```

Recommended starting desktop gutter: 70px. Principal radius: 8px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Compact floating charcoal bar, blue mark, section links, demo action and closed mobile variant. |
| Hero | Unverified | Unverified | Centered heading, support copy, paired actions, customer/sales/HR role preview and partner trust strip. |
| Features | Unverified | Unverified | Language configuration visual, CRM integration diagram and low-latency conversation illustration. |
| Use Cases | Unverified | Unverified | Customer support, outbound operations and inbound sales modules with individual trial-style links. |
| Pricing | Unverified | Unverified | Monthly/yearly selector above three plan cards; middle plan has blue recommendation treatment. |
| Reviews | Unverified | Unverified | Customer quote cards, oversized quotation glyphs, portraits, names and business roles. |
| FAQ | Unverified | Unverified | Compact question rows about numbers, data protection and conversational interruptions. |
| CTA | Unverified | Unverified | Blue textured invitation with paired deployment and sales actions. |
| Footer | Unverified | Unverified | Brand summary, Product/Company/Resources groups, copyright and creator credit. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: named role options, monthly pricing switch, FAQ structures and closed navigation variant are present. Official imagery shows a transcript preview. Runtime timing, keyboard transitions, audio playback and backend outcomes were not exercised. OPTIONAL: use short opacity transitions, preserve readable text without animation, and expose selection semantics. ROOT BROWSER OBSERVATION: visible hero card has Customer/Sales/HR tabs, typed transcript and central waveform; clicking Yearly left Growth at $49 /month in the observed accessibility state, so price recalculation is unestablished.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root variants use desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Additional component typography queries use 1279px and 1398px maxima. Compact heading declaration is 32px; footer padding variants include 70px and 20px horizontal values. OPTIONAL: stack pricing and feature modules in source reading order and keep demo tabs scrollable.

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

Category: AI / Voice / meetings. Selection basis: Explicit Voice AI SaaS positioning, role-based agent previews, language controls and call-centered use cases in a light commercial layout. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public source HTML and CSS presets with inline overrides, saved in voxaai-evidence-root. Inter line heights converted from em; variable-dependent section heading sizes excluded from numeric rows. Desktop h4 preset declares 36px and h5 28px; extracted first-match samples can capture 32px/23px media declarations instead, so these numeric desktop roles were checked against typePresetRules.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the three-agent demo card, typed transcript and waveform presentation. Clicking the Yearly label did not establish billing recalculation: the Growth label remained $49 /month, and the pricing screenshot still showed the left-positioned toggle. No voice service or microphone was tested. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
