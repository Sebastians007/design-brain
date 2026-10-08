# the practice — website recreation specification

Preview: https://thepractice.framer.website/  
Creator: Ahsan Habib  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

the practice is a warm editorial mental-health therapy reference. Switzer sans lines switch to larger italic Instrument Serif fragments within the same headline; a full-height person photograph carries a huge two-family fit-text wordmark. Peach canvas, cream cards, pale lime controls and powder-blue consultation panels create a distinct identity from ClinicHub. The home establishes practice/approach context, scale, four therapy branches and four gentle process steps before a detailed consultation form, seven practical FAQs, journal previews and closing invitation. Visible availability and credential statements remain template content.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are non-media CSS base presets plus inline declarations, with em/percentage line heights converted using declared font size. They are not computed browser measurements.
- SOURCE / OFFICIAL REFERENCE: Marketplace artwork contains multiple layouts and presentation backgrounds. Those surrounding aqua/white frames are packaging and are not live site sections.
- OPTIONAL RECOMMENDATION: gutter/radius/gap values below are recreation defaults. Preserve the source component-specific geometry and responsive alternatives recorded in frame declarations.
- SOURCE LIMITATION: homepage/secondary public HTML, CSS, routes and four official JPGs establish design evidence. Form delivery, appointment confirmations, availability, practitioner credentials, ratings, patient outcomes, compliance badges and insurance coverage were not verified. Demo statements require owner-supplied replacements.
- SOURCE DECLARED: variable-axis roles declare normal; no custom numeric font variation axes were found. Preserve declared italic faces and span overrides separately.
- SOURCE DECLARED: preserve mixed typography at fragment level. The hero h1 is Switzer 76px while begin/again use Instrument Serif italic 92px; section headings pair Switzer 56px with italic Instrument Serif 67.2px.
- SOURCE DECLARED: base CSS must be selected explicitly. Generic first matches encountered tablet section sizes 49px/58.8px before the non-media presets; authored section rows use desktop bases. The separate practice-statement presets really declare 46.4px/54.4px base sizes and should retain them.
- SOURCE DECLARED: huge hero/footer wordmarks use SVG viewBox 0 0 70.8 17 plus foreignObject/framer-fit-text. Generic 16px fallback is not their rendered size; preserve fit-to-width behavior and nested Switzer the span.
- SOURCE DECLARED: service options include Not sure yet, format includes No preference, and start includes Just exploring for now. Keep uncertainty choices when adapting the inquiry form; source does not establish therapist matching or confirmed appointments.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation logo sans fragment | Switzer | 500.0 | 24.0 | 24.0 | -.03em |
| Navigation logo italic fragment | Instrument Serif | 400.0 | 29.0 | 29.0 | -.01em |
| Desktop navigation | Switzer | 500.0 | 14.0 | 14.0 | 0em |
| Phone menu link | Switzer | 400.0 | 24.0 | 24.0 | -.02em |
| Hero eyebrow | Switzer | 500.0 | 13.0 | 13.0 | 0em |
| Hero sans line / desktop base | Switzer | 400.0 | 76.0 | 74.48 | -.045em |
| Hero italic accent / desktop base | Instrument Serif | 400.0 | 92.0 | 90.16 | -.02em |
| Hero body | Switzer | 400.0 | 18.0 | 27.0 | -.01em |
| Primary CTA | Switzer | 500.0 | 15.0 | 15.0 | 0em |
| Hero metadata | Switzer | 500.0 | 12.0 | 12.0 | .08em |
| Practice statement sans / desktop base | Switzer | 400.0 | 46.4 | 51.968 | -.035em |
| Practice statement italic / desktop base | Instrument Serif | 400.0 | 54.4 | 60.928 | -.01em |
| Approach numbered marker | Instrument Serif | 400.0 | 30.0 | 30.0 | 0em |
| Approach card title | Switzer | 500.0 | 19.0 | 25.65 | -.015em |
| Approach body | Switzer | 400.0 | 15.0 | 23.25 | 0em |
| Section heading sans / desktop base | Switzer | 400.0 | 56.0 | 56.0 | -.045em |
| Section heading italic / desktop base | Instrument Serif | 400.0 | 67.2 | 67.2 | -.02em |
| Section description | Switzer | 400.0 | 17.0 | 26.35 | -.01em |
| Metric number | Switzer | 400.0 | 64.0 | 64.0 | -.055em |
| Metric suffix italic | Instrument Serif | 400.0 | 70.4 | 70.4 | 0em |
| Service card title | Switzer | 500.0 | 26.0 | 29.9 | -.03em |
| Service card body | Switzer | 400.0 | 15.5 | 24.025 | 0em |
| Process number | Instrument Serif | 400.0 | 48.0 | 48.0 | 0em |
| Process title | Switzer | 500.0 | 22.0 | 26.4 | -.025em |
| Form submit label | Switzer | 500.0 | 16.0 | 16.0 | 0em |
| Form privacy note | Switzer | 400.0 | 13.0 | 19.5 | 0em |
| Journal title | Switzer | 500.0 | 21.0 | 26.25 | -.025em |
| Closing CTA sans / desktop base | Switzer | 400.0 | 73.6 | 72.128 | -.045em |
| Closing CTA italic / desktop base | Instrument Serif | 400.0 | 88.0 | 86.24 | -.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f4e6e0",
  "paper": "#fbf6ee",
  "ink": "#141711",
  "accent": "#e2e6a6",
  "muted": "#788c58"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 28px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Sticky Nav with mixed logo, Explore menu, Services/Therapists/Journal/Contact routes and consultation CTA; Desktop and Phone structures. |
| Hero | Unverified | Unverified | SOURCE DECLARED #hero: min-height 100vh photo, side/bottom scrims, client-status eyebrow, mixed sans/italic headline, two actions, metadata and oversized fit-text practice wordmark; responsive duplicate Hero source nodes. |
| Press | Unverified | Unverified | As seen and heard in mixed-type label and press logo strip; demo publication associations. |
| About | Unverified | Unverified | SOURCE DECLARED #about: large practice philosophy statement with italic word accents, interior photo, blue Approach Card numbered pillars and Team Card invitation. |
| Numbers | Unverified | Unverified | SOURCE DECLARED #numbers: Small practice, lasting change heading, scale metrics and full image with statistic overlay; sample experience/outcome claims. |
| Services | Unverified | Unverified | SOURCE DECLARED #services: four cream photo cards for Individual therapy, Couples therapy, Teens & families and Online therapy with audience tags and route links. |
| How It Works | Unverified | Unverified | SOURCE DECLARED #how-it-works: dark rounded panel, lime italic gently phrase and four numbered cards Reach out/Get matched/Begin your sessions/Grow at your pace plus reassurance line. |
| Consultation | Unverified | Unverified | SOURCE DECLARED #book: powder-blue Highlight Panel, intro/reassurance/urgent note, cream form card, names/contact details, four preference selects, optional message, consent, submit and privacy note; Desktop/Phone/Tablet variants. |
| FAQ | Unverified | Unverified | SOURCE DECLARED #faq: mixed heading and help card beside FAQ Accordion All Closed with seven questions about first steps, format, family work, fees, privacy and duration. |
| Journal | Unverified | Unverified | SOURCE DECLARED #journal: three article previews with image, date/category metadata, title and blog destinations. |
| CTA | Unverified | Unverified | Rounded closing panel: Ready when you are mixed heading, free consultation action and confidentiality note; source text requires owner approval. |
| Footer | Unverified | Unverified | Dark footer with mixed brand/tagline and fit-text wordmark, Explore/Get in touch links, crisis-support copy, legal/accessibility/cancellation routes and bottom bar. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: hero/wordmark appear attributes include translateY(80px) with opacity0.001; source names include Sticky Nav, Desktop/Phone menu, FAQ Accordion All Closed, Submit Button Incomplete and fit-text SVG wordmarks. Runtime timings, dropdown expansion, form delivery and success state were not exercised. OPTIONAL RECOMMENDATION: use restrained one-time text/photo reveals; preserve all headline fragments as selectable text; keep menu/FAQ focus management explicit and reveal all content immediately under reduced motion. Success copy should follow an actual configured inquiry response, not local field completion.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero Switzer76px becomes66.5px tablet and42.75px phone; italic92px becomes80.5px tablet and51.75px phone. Section pair56px/67.2px becomes49px/58.8px tablet and42px/50px phone. Hero declares max-width1680px, min-height100vh, radius28px and padding64px36px16px; main About/Numbers/Services/FAQ/Journal containers max-width1200px with36px horizontal padding. Consultation has separate desktop/tablet/phone variants; preserve their field order. OPTIONAL RECOMMENDATION: collapse service/process grids and form columns without dropping uncertainty choices, consent or privacy/urgent-support notes. Fit-text wordmark should scale to its container rather than inherit an invented fixed display size.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Sector context

Category: Healthcare / Therapy practice. Selection evidence: Official Marketplace Therapy classification and explicit therapy practice/counselor/psychologist positioning; homepage and service routes distinguish individual, couples, teens/families and online therapy. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Home and individual-therapy public HTML/CSS declarations; non-media base presets explicitly resolved before inline styles, with media alternatives saved separately. Numeric rows preserve role-specific Switzer sans and Instrument Serif italic fragments, not a single global display face. Fit-text SVG wordmarks have declarative viewBox and nested span evidence but no asserted rendered pixel size. Switzer files are source font-face declarations; Inter exists in source utility/badge roles. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
