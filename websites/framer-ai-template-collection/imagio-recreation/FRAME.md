# Imagio — website recreation specification

Preview: https://imagio.framer.website/  
Creator: Ufinity Studio  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Imagio makes image creation feel like a calm studio ritual. Warm cream surfaces and deep brown lettering support pastel botanical output, while a large serif voice gives the product an editorial character. A fan of rounded images surrounds a prompt composer before the proposition arrives beneath it. Small chips, fine borders, soft inset surfaces, and restrained handwritten annotations make technical choices feel approachable. The body system uses the source’s separately named TASA font files; Halant supplies the expressive headings. Preserve this balance of tactile interface, generous pauses, and vivid output. The surrounding teal marketplace presentation belongs to the reference artwork, not the website.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the home sequence: navigation, image fan and composer hero, three-step workflow, capability grid, image gallery and editorial statement, creator solutions, plans, testimonials, blog, FAQ, closing invitation, footer.
- Use literal CSS families Halant and TASA Orbiter Display Regular/Medium; retain Fira Code utility roles and Kalam annotations. A nested TASA Orbiter Display span overrides an Inter generation-action parent.
- Rebuild the hero from individual image tiles, foreground composer, title and description. The marketplace teal backdrop, monitor frame and decorative surround are not page elements.
- Keep cream/brown surfaces and low-contrast borders; reserve multicolor edge decoration for the composer. Warm supporting text must remain legible against pale paper.
- Treat every output, count, testimonial and plan as template demonstration content. Composer styling, export comparison and FAQ structures do not establish a generation service or commercial rights.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation label; source declaration | TASA Orbiter Display Medium | 500 | 16.0 | 24.0 | 0em |
| Primary action; source declaration | TASA Orbiter Display Medium | 500 | 18.0 | 18.0 | 0em |
| Hero title; source declaration | Halant | 400 | 88.0 | 96.8 | -.04em |
| Hero supporting copy; source declaration | TASA Orbiter Display Regular | 400 | 20.0 | 32.0 | 0em |
| Section heading; source declaration | Halant | 400 | 54.0 | 59.4 | -.04em |
| Workflow/card heading; source declaration | Halant | 400 | 26.0 | 33.8 | -.03em |
| Step index; source declaration | Fira Code | 500 | 16.0 | 17.6 | -0.06em |
| Reading copy; source declaration | TASA Orbiter Display Regular | 400 | 16.0 | 24.0 | 0em |
| Handwritten annotation; source declaration | Kalam | 400 | 16.0 | 16.0 | 0em |
| Solution metric; source declaration | Fira Code | 400 | 80.0 | 88.0 | -.04em |
| Plan amount; source declaration | Halant | 400 | 24.0 | 28.8 | -.04em |
| FAQ question; source declaration | TASA Orbiter Display Medium | 500 | 20.0 | 32.0 | 0em |
| Generation action nested span; parent line-height 100% | TASA Orbiter Display | 500 | 18 | 18 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f6f0e9",
  "paper": "#fff7ed",
  "ink": "#2a150a",
  "accent": "#b89c7d",
  "muted": "#624c41"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop, tablet and phone menu structures; centered brand, menu control, primary action; expanded navigation includes supporting imagery. |
| Hero | Unverified | Unverified | Source Section - Hero: radial image arms, gallery overlay, foreground prompt illustration, style chips, generation action, large serif title and body copy. |
| How it works | Unverified | Unverified | First Section - Feature instance: three numbered stages for prompt entry, style selection and output use; compact UI illustrations. |
| Core features | Unverified | Unverified | Second Section - Feature instance: varied card grid with prompt/image pairing, style choices, history stack, output comparison, speed diagram and rights illustration. |
| Image gallery and statement | Unverified | Unverified | Section - Image Galery: layered media cluster and broad editorial proposition with Kalam annotation chips. |
| Creator solutions | Unverified | Unverified | Section - Solution: four numbered audience entries, imagery and prominent demo metrics; desktop and stacked variants. |
| Pricing | Unverified | Unverified | Section - Pricing: three plans with benefit lists, amount, billing descriptor, promotional annotations and contact-directed actions; all values are template content. |
| Testimonials | Unverified | Unverified | Section - Testimonials: attributed portrait/quote cards and repeated source variants; replace demo proof with authentic evidence. |
| Blogs | Unverified | Unverified | Section - Blogs: editorial header, all-posts action and linked article cards. |
| FAQ | Unverified | Unverified | Section - FAQ: question/answer structures with accessible expansion needed in a recreation. |
| Closing CTA | Unverified | Unverified | Desktop/Tablet/Phone footer composite begins with serif invitation, body copy and primary action alongside an image-card arrangement. |
| Footer | Unverified | Unverified | Remaining footer composite contains brand description, navigation, social/legal links, newsletter input and creator attribution. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: image fan arms, repeated button layers, accordion-like FAQ names and initial heading spans with opacity 0.001, blur(4px), translateY(12px). Listing declares responsive layouts. Static source does not establish animation sequencing, easing or interaction success. OPTIONAL: subtle chip selection/focus feedback, a stationary hero for reduced motion, and explicit before/after controls; keep demonstration status visible.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: principal page variants use desktop >=1200px, tablet 810–1199.98px and phone <=809.98px; component media rules additionally use 1299px and integer 809/1199 boundaries. OPTIONAL: stack the composer controls, reduce image fan count to protect the title, make creator solutions one column, and preserve reading order while collapsing card grids. Numeric spacing recommendations are not measured responsive geometry.

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

Category: AI / Generative media. Selection basis: The official listing names AI products and image or content generation tools; the preview organizes image output, style selection, and prompt-based creation. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public preview HTML/CSS declarations, not browser-computed measurements. Pixel sizes are literal source values; percentage/em line heights are numerically converted using the declared role size. SourceRoleDetails retains nested overrides, variant paths, stylistic sets and italic rules. Gutter, radius and gap are authored recreation recommendations, not global source measurements.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the curved changing image rail, gradient-rimmed prompt-like panel and large Halant display beneath. Menu was clicked and the state refreshed, but the follow-up screenshot did not show an opened drawer; menu behavior is not confirmed. The rotating rail changed between captures. Floating marketplace purchase badges are preview promotion, not a generator control. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
