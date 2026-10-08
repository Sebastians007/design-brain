# Code-Craft — website recreation specification

Preview: https://code-craft.framer.website/  
Creator: Thisara Prabhath  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Code-Craft pairs a near-black canvas with electric lime actions and cool mint status accents. A slim navigation bar leads into a centered promise above a wide editor mockup, framed by a dense pixel atmosphere and controlled glow. Google Sans Flex gives large headings a soft, contemporary rhythm while Geist Mono supports code-oriented metadata. Below the hero, illustrated bento capabilities, glossy use-case cards and numbered workflow steps build a product story before integrations, developer reviews and pricing. Thin translucent borders separate dark surfaces without heavy shadows. Keep the editor chrome, deliberate green emphasis, spherical feature art and oversized footer wordmark as a coordinated visual system.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Google Sans Flex is both display and body; hero h1 is 400 at 64px/69.12px, section h2 500 at 38px/42.56px. Geist Mono supports technical status and step metadata.
- SOURCE / REFERENCE: retain black/lime identity, pixel atmosphere, centered hero and editor mockup. Marketplace device shells and promotional headline are not page UI.
- SOURCE DECLARED: complete home flow includes social proof, bento, use cases, workflow, integration orbit, reviews, four plans, FAQ, blog, final CTA and footer. Responsive CTA variants represent one section.
- RECOMMENDATION: gutter 88, radius 22 and gap 24 summarize useful container/card defaults; vary them with the actual component declarations rather than imposing them globally.
- SCOPE: official listing explicitly targets AI coding assistants and API/SDK tools. Generated code, uptime, latency, client counts, reviews, plan claims and security promises are template content; no model inference or product backend was verified.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero h1 | Google Sans Flex | 400 | 64 | 69.12 | -.035em |
| Section h2 | Google Sans Flex | 500 | 38 | 42.56 | -.03em |
| Desktop navigation p | Google Sans Flex | 400 | 14 | 21 | 0em |
| Body p | Google Sans Flex | 400 | 16 | 24.8 | 0em |
| Announcement badge p | Google Sans Flex | 400 | 12 | 17.4 | .005em |
| Eyebrow p | Google Sans Flex | 600 | 11 | 14.3 | 1px |
| Workflow step label p | Geist Mono | 500 | 12 | 19.2 | 0.08em |
| Status caption p | Geist Mono | 500 | 10.5 | 12.6 | 0.04em |
| Plan name h4 | Google Sans Flex | 500 | 30 | 36 | -.025em |
| Enterprise price h3 | Google Sans Flex | 500 | 40 | 46 | -.03em |
| Blog title p | Google Sans Flex | 500 | 20 | 30 | -.005em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#07080a",
  "paper": "#0e0f11",
  "ink": "#f4f4f5",
  "accent": "#c6ff3d",
  "muted": "#a1a1aa"
}
```

Recommended starting desktop gutter: 88px. Principal radius: 22px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop brand/link/action bar and mobile bar with drawer; account label and demo action are declared UI. |
| Hero | Unverified | Unverified | Announcement pill, large centered heading with lime phrase, supporting copy, primary/secondary CTAs, trust line and wide editor mockup on pixel/glow field. |
| Social Proof | Unverified | Unverified | Trust statement and repeated customer wordmark ticker. |
| Features | Unverified | Unverified | Capability heading and bento grid for stack compatibility, speed, privacy and reviewable changes with custom illustrations. |
| Solutions | Unverified | Unverified | Use-case introduction and glossy illustrated application cards. |
| How It Works | Unverified | Unverified | Three numbered steps for describing, generating and reviewing code with mini workflow illustrations. |
| Integration | Unverified | Unverified | Introductory copy and link alongside orbit-style integration artwork. |
| Testimonials | Unverified | Unverified | Rating/avatars followed by developer quote cards with metric highlights and attribution. |
| Pricing | Unverified | Unverified | Billing toggle and four cards: Free, Indie, Team, Enterprise; inclusions and docs/sales actions. |
| FAQ | Unverified | Unverified | Question/answer structures about rights, API use, billing and security. |
| Blog | Unverified | Unverified | Three categorized/dated article cards and archive action. |
| Final CTA | Unverified | Unverified | App tile, glowing invitation, free-start/sales actions and trust row; desktop/tablet/phone variants are alternatives. |
| Footer | Unverified | Unverified | Brand/socials, product/company/support/legal columns, giant wordmark, copyright and contact email. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: hero glow layers, logo ticker, mobile drawer, monthly pricing variant and FAQ structures exist in public HTML/CSS. Official listing describes WebGL pixels, word reveals, scroll fades, hover lifts, reduced-motion support and off-screen pauses; those are author claims, not exercised runtime results. RECOMMENDATION: keep a static editor poster and visible headings if animations fail; use short hover transitions and reduced-motion fallbacks.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root anchors are 1200 and 810px; tablet spans 810–1199.98, phone <=809.98. Hero container declares 168px 88px 72px / 148px 40px 64px / 120px 20px 48px padding. Hero mockup aspect ratios declare 1.948 / 1.3887 / .3761. Bento declares 3 columns, 2 columns, then flex; integration stacks on tablet and phone. RECOMMENDATION: preserve content order and keep code panels independently scrollable. Values are CSS declarations, not rendered measurements.

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

Category: AI / Developer / API. Selection basis: The official listing explicitly identifies AI coding assistants, developer tools, API platforms and SDK products as intended uses. The editor is a marketing mockup; no running code generation backend is established. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public home role declarations in code-craft-evidence-root/source-facts.json; line heights convert declared em values arithmetically. Google Sans Flex name must remain intact. Public role declarations use variation-axes normal; no custom axis setting is inferred.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed black/lime heading hierarchy, a prompt/editor frame and stack chips. Code snippets and compliance labels are demo/template content, not proof of generation, tests or certification. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
