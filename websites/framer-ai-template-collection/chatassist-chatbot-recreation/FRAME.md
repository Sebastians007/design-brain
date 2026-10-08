# Chatassist Chatbot — website recreation specification

Preview: https://aichatbott.framer.website/  
Creator: Gr8r Studio  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Chatassist Chatbot presents support automation through a bright, approachable product website. The main preview uses a saturated purple gradient hero with a subtle technical grid, a large chat interface illustration and pill-shaped trial actions. White sections then organize product capabilities, connected tools, analytics and four plans into a predictable buying journey. Geist provides rounded, medium-weight headings; Satoshi gives descriptions and utility labels a softer reading texture. Pale lavender and mint areas carry interface evidence without overwhelming the text. Its defining balance is cheerful color above the fold and practical, modular detail below it, making support workflows feel legible to growing SaaS teams.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use the fetched root HOME order and root hero, not a mixture of the three homepage variations. Include both distinct Integration Section blocks: logo integrations followed by analytics.
- Keep Geist heading roles and Satoshi copy/navigation roles as separate actual families. Inter is also declared. Retain normal/italic font evidence and numeric medium-weight roles.
- Preserve a white page, purple gradient hero, near-black actions, pale product surfaces, large rounded image windows and airy feature modules; marketplace banners and surrounding grid are not page chrome.
- Four tiers, monthly/annual switch, feature bullets, integrations and FAQ carry the support product story. Sample ratings, savings and outcome numbers are template content, not independently substantiated customer evidence.
- Primary trial links in root source point to /contact; the integrations CTA also points there while footer Integration points to /integrations. Preserve or intentionally replace those destinations; no signup, chatbot response or payment behavior was tested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero heading and pricing title; base preset 1axqvbs | Geist | 500 | 64 | 76.8 | 0em |
| Section heading; base preset 13i0bgc | Geist | 500 | 48 | 57.6 | -1.5px |
| Analytics heading; base preset 15hx2mj | Geist | 500 | 32 | 41.6 | -1px |
| Feature/plan heading; base preset 1fgl26u | Geist | 500 | 24 | 36 | -.5px |
| Hero supporting copy; base preset 1rqbi8g | Satoshi | 500 | 18 | 28.8 | 0em |
| Body copy; base preset jpkryk | Satoshi | 400 | 16 | 28.8 | 0em |
| Navigation/action; base preset 1prc007 | Satoshi | 500 | 16 | 28.8 | 0em |
| Footer utility; base preset 2awvwz | Satoshi | 500 | 14 | 18.2 | 0em |
| Small caption; base preset 189jd8d | Satoshi | 400 | 12 | 20.4 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f6f7f9",
  "ink": "#111116",
  "accent": "#5f09de",
  "muted": "#3b3b3b"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop and Phone source counterparts; Home/About/Features/Pricing/Career/Blog links and trial action. |
| Hero | Unverified | Unverified | Hero Section: review capsule, centered multi-line headline, compact graphic, supporting copy, trial action and oversized chat product artwork. |
| Brand logos | Unverified | Unverified | Trust label followed by repeated logo wrappers/ticker-like source lists. |
| Feature overview | Unverified | Unverified | Feature Section: customer-question resolution proposition and product feature imagery. |
| Engagement features | Unverified | Unverified | Feature Section 2: three feature entries covering proactive messages, voice support and role-based collaboration, plus product image and CTA. |
| Integrations | Unverified | Unverified | First Integration Section: connected tool logo grid and integrations action. |
| Analytics | Unverified | Unverified | Second Integration Section: four analytics/support-topic labels, interface visual area, explanatory heading/copy and action. |
| Pricing | Unverified | Unverified | Pricing Section: monthly/annual control, savings badge and Starter/Growth/Professional/Enterprise cards with message allowances and feature lists. |
| Testimonials | Unverified | Unverified | Testimonial Section: attributed featured review, logo/avatar artwork and arrow/tab variants. |
| FAQ | Unverified | Unverified | FAQ Section with heading/supporting text, open/close question structures and responsive counterparts. |
| Final CTA | Unverified | Unverified | CTA Section: productivity invitation, trial link and dedicated decorative/product imagery. |
| Footer | Unverified | Unverified | Desktop/Phone/Tablet footer counterparts with brand, social links, homepage variation menu, product/resource/company links and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Public source contains testimonial arrows/tabs, FAQ Open/Close structures, pricing Monthly state and repeated logo lists. Listing advertises responsive behavior; static source cannot prove carousel timing, toggle calculations or scroll effects. Recommendation: visible selected states, keyboard-operable FAQ and pricing controls, restrained card hover feedback and reduced-motion fallbacks. The large hero interface is product artwork, not a verified live chatbot.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1440px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Root anchor boundaries are 810px and 1440px: phone through 809.98px, tablet 810–1439.98px, desktop 1440px+. Source declares responsive hero, pricing desktop/tablet/phone and footer counterparts. Recommendation: stack illustrations below copy, turn four plan columns into a readable vertical list on narrow screens, keep logos wrap-safe and retain a tap-accessible navigation menu. Spacing values in this config are recreation guidance; live geometry was not measured.

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

Category: AI / Chatbot / support. Selection basis: The official listing positions ChatAssist for customer-service automation, conversational AI and SaaS support products, with integrations, support features and four pricing tiers. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: All numeric roles are base public CSS declarations, not rendered measurements; em/percentage line heights are converted using their own declared pixel sizes. Geist normal 500/700 faces, Satoshi normal and italic 400/500/700/900 faces and Inter normal/italic support faces are declared. Preserve italic options and the explicit normal variation-axis values. Public GET /pricing was inspected separately; its declaration-only evidence excludes sample copy.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a purple-gradient hero, large chat-product artwork and a hamburger header at 1363px. The principal upper anchor is 1440px, so this capture uses the source variant below that boundary; it is not proof of the >=1440px desktop header. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
