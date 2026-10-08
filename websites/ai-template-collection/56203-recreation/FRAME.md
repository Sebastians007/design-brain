# Message — website recreation specification

Preview: https://heymessage.framer.ai/  
Creator: Arthur Duchesne  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Message gives a conversational assistant the atmosphere of a quiet expedition. A misty teal landscape and fine grain establish the opening mood; small white actions and regular-weight Host Grotesk keep the interface understated. Dark lower sections use thin outlines, compact DM Sans copy and restrained product illustrations. The story moves from capabilities to selectable use cases, a three-step explanation, practical benefits, social proof and plan choice. Its distinction comes from patient pacing, low visual noise, landscape-led imagery and the contrast between an expansive opening and disciplined information modules. Treat the artwork as context for a helpful assistant rather than evidence of model intelligence.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve HOME order: navigation, Hero, introduction capabilities, use cases, how it works, benefits, Testimonials, Pricing, FAQ, FinalCTA, Footer. Three source sections share the name Features but have distinct anchors.
- Use actual Host Grotesk display and DM Sans reading families, regular-weight display, and negative tracking. Inter is declared as a supporting/reset family; do not replace the principal typography.
- Keep the dark canvas, teal landscape imagery, fine grain, white type, quiet gray supporting text and narrow outline hierarchy; distinguish imagery colors from source CSS tokens.
- Recreate the website interior only. Marketplace framing, angled collage arrangements and surrounding grain are presentation artwork, not additional site sections.
- Use-case selection, testimonial controls, pricing toggle and FAQ states are declared structures. Implement accessible focus and reduced-motion states; no working assistant, billing flow or runtime timing was verified.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero heading; base preset 18dw6p4 | Host Grotesk | 400 | 56 | 56 | -.03em |
| Section heading; base preset 1eyg8rr | Host Grotesk | 400 | 36 | 39.6 | -.03em |
| Brand/title role; base preset o5z0st | Host Grotesk | 400 | 20 | 24 | -.02em |
| Reading copy/navigation; base preset xsql1q | DM Sans | 400 | 16 | 19.2 | 0em |
| Action label; base preset 9fs3sz | DM Sans | 500 | 16 | 19.2 | 0em |
| Utility caption; base preset 2io64c | DM Sans | 400 | 14 | 18.2 | 0em |
| Savings badge; base preset z5yjcz | DM Sans | 500 | 14 | 18.2 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#0a0a0a",
  "paper": "#121212",
  "ink": "#ffffff",
  "accent": "#dedede",
  "muted": "#858585"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 40px. Component gap: 40px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop_Light and Mobile_Light counterparts; brand, five page anchors and primary start action. |
| Hero | Unverified | Unverified | Centered proposition and supporting copy over landscape BG, pill CTA, scroll cue, and separate full-page Noise layer. |
| Introducing the assistant | Unverified | Unverified | First Features section, anchor about; three illustrated capability cards for automation, drafting and guidance. |
| Use cases | Unverified | Unverified | Second Features section, anchor features; four selectable use cases with image/content region and declared mobile slideshow counterpart. |
| How it works | Unverified | Unverified | Third Features section, anchor how-it-works; three illustrated steps from input to generated result and refinement. |
| Benefits | Unverified | Unverified | WhyItWorks, anchor benefits; six compact benefits with icons, short headings and supporting descriptions. |
| Testimonials | Unverified | Unverified | Four attributed review entries, indexed counters and previous/next arrow structures. |
| Pricing | Unverified | Unverified | Monthly desktop/tablet/mobile structures; monthly/yearly control, savings badge, three plans and feature lists. |
| FAQ | Unverified | Unverified | Six questions represented by Closed structures with repeated responsive counterparts. |
| Final CTA | Unverified | Unverified | FinalCTA with centered invitation, action and its own landscape BG image. |
| Footer | Unverified | Unverified | Desktop/tablet/mobile footer counterparts; brand, description, creator attribution, social links and anchor navigation. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Source declares active/default use-case cards, mobile slideshow, indexed testimonial controls, monthly pricing variants, closed FAQ entries and initially transparent FAQ/FinalCTA transforms. These are static declarations, not verified transition durations, scroll triggers or live chat behavior. Recommendation: short opacity changes for selected content, explicit previous/next controls and a fully static reduced-motion view.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Root CSS anchors are 810px and 1200px: phone through 809.98px, tablet 810–1199.98px, desktop 1200px+. Source Hero declares 100vh with 160px 16px 64px padding; phone changes bottom padding to 96px. Content sections declare 1128px maximum width and 96px 24px base padding, reduced to 80px 16px on phone. Preserve reading order and collapse cards; these are source declarations rather than rendered measurements.

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

Category: AI / Chatbot / support. Selection basis: The official listing explicitly includes AI companions and chatbots; the product presentation suits a conversational assistant launch. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Values come from base public CSS presets. The extractor role summary sometimes associates a responsive section heading override of 32px; config uses the base 36px rule. Host Grotesk normal/italic 400 and 700 and DM Sans normal/italic 400/500/700 faces are declared. Preserve italic slots rather than synthesizing an unrelated family. Inter normal/italic faces also appear in the public font declarations. Line-height em values are multiplied by the declared pixel size.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a cinematic teal/grain landscape hero, centered white headline and compact pill action. No prompt submission or external CTA was exercised. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
