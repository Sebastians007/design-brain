# Online Course — website recreation specification

Preview: https://nuanced-screenshot-385541.framer.app/  
Creator: SoloFoundry  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Primer is SoloFoundry’s multi-course creative academy reference. A full-viewport craft photo starts as a sketch behind Young Serif display text; a pencil, progress meter, completion stamp and tactile media buttons establish a notebook learning identity. Cream paper, orange correction marks and deep green/dark course and lesson sections contrast with monochrome teacher cards. Albert Sans carries body and buttons, Azeret Mono carries course metadata. Seven school branches and project-led course cards create a catalog distinct from one instructor’s flagship program.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography is parsed CSS or inline declarations, with relative line heights converted using declared size; no rendered geometry is asserted.
- SOURCE / OFFICIAL REFERENCE: marketplace JPGs are official promotional imagery; browser chrome, presentation backdrops and collage arrangements are packaging rather than live page elements.
- OPTIONAL RECOMMENDATION: gutter, radius and gap are recreation defaults. Preserve the source component-specific spacing and responsive overrides documented in evidence.
- SOURCE LIMITATION: enrollment, course access, payments, student accounts, certificates, newsletter delivery and CMS editing were not exercised. Template proof, prices and learner totals are sample content.
- SOURCE DECLARED: actual code-component typography is Young Serif display, Albert Sans body and Azeret Mono metadata; generic Framer extraction only saw auxiliary Inter/Fragment Mono faces. Supplemental custom CSS declarations and the linked Google Fonts stylesheet were saved and parsed.
- SOURCE DECLARED: fluid numeric rows label either CSS evaluated at1440px or an explicit clamp lower bound. The original clamp expressions and literal inline styles are preserved; these numbers are not fixed desktop dimensions.
- SOURCE DECLARED: home only declares section anchors #pricing and #faq. Course and teacher links are separate routes; do not invent IDs for named Framer component wrappers.
- SOURCE LIMITATION: progress/completion hero graphics demonstrate the visual metaphor. They are not evidence of tracked student lessons or issued certificates.
- SOURCE DECLARED: duplicate desktop/tablet/phone code-component copies occur in HTML. Reconstruct one accessible active layout instead of exposing duplicate headings or form IDs.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero h1 / CSS at 1440px viewport | Young Serif | 400 | 95.04 | 90.288 | -.025em |
| Hero supporting copy | Albert Sans | 400 | 17 | 26.35 | 0 |
| Hero course title | Young Serif | 400 | 30 | 31.2 | -.01em |
| Schools h2 / CSS at 1440px viewport | Young Serif | 400 | 61.92 | 60.6816 | -.042em |
| Course card title / CSS lower clamp bound | Young Serif | 400 | 28 | 28.56 | -.02em |
| Learner number / CSS at 1440px viewport | Young Serif | 400 | 92.16 | 82.944 | -.035em |
| Teacher card name | Young Serif | 400 | 28 | 28 | -.02em |
| Lesson row title | Young Serif | 400 | 21 | 25.2 | -.01em |
| Plan amount | Young Serif | 400 | 64 | 73.6 | -.03em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f4f1ea",
  "paper": "#ddd7ca",
  "ink": "#17150f",
  "accent": "#f0532b",
  "muted": "#7a746a",
  "pine": "#1e3a32",
  "night": "#100f0c"
}
```

Recommended starting desktop gutter: 56px. Principal radius: 14px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Fixed floating islands: pencil Primer wordmark, courses mega-menu, Teachers/Pricing/About/Journal, learner proof and Enroll. |
| Loader and transition | Unverified | Unverified | PmLoader / PmPageTrans and Smooth scroll shared components; functional infrastructure rather than duplicate visible page sections. |
| Hero | Unverified | Unverified | PmHero sketch-to-photo project, Every skill starts as a sketch, course progress meter/tabs and browse/free-lesson actions. |
| Schools | Unverified | Unverified | PmSchools: seven school branches and corresponding course/filter links. |
| Courses | Unverified | Unverified | PmCourses: project-led horizontal course cards, numbered position and view-course links. |
| Method | Unverified | Unverified | PmMethod: Watch it. Make it. Get it marked, connected lesson/project/upload/teacher-feedback steps. |
| Numbers | Unverified | Unverified | PmNumbers: coral panel with learner total, completion rate, rating and teacher-feedback timing; sample proof. |
| Teachers | Unverified | Unverified | PmTeachers: monochrome teaching portraits, school/name/role and profile links. |
| Free lesson | Unverified | Unverified | PmSyllabus: Sit in on lesson one, media preview and ordered lesson rows with durations and locked markers. |
| Reviews | Unverified | Unverified | PmReviews: What students made with it, student projects and feedback cards. |
| Pricing | Unverified | Unverified | PmPricing: one-course, all-access and team plans with billing switch; literal #pricing. |
| FAQ | Unverified | Unverified | PmFaq: Questions before you start and nine answer panels; literal #faq. |
| CTA | Unverified | Unverified | PmCta: Your first lesson is free email invitation with validation markup. |
| Footer | Unverified | Unverified | PmFooter: free lesson newsletter, school/site/legal links and oversized pencil-style wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: sketch/photo hero, completion stamp, progress/tabs, PmLoader, PmPageTrans, PmSmooth, button hover transforms, horizontal courses, lesson media markup, pricing switch and FAQ aria controls are present. CSS includes prefers-reduced-motion rules, hover:none and pointer:fine alternatives. This is declared source behavior rather than an exercised lesson or checkout flow. OPTIONAL RECOMMENDATION: provide still artwork, normal links, keyboard access, labelled controls and nonanimated text when motion is reduced; course progress remains decorative unless connected to an actual learning platform.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: Framer root breakpoints1200 and810px; custom .pm-wrap horizontal pad56px, max-width calc(clamp(1280px,92vw,1520px)+pad*2), pad32px under1099px and20px under699px. Hero copy max-width min(600px,42%); phone .pmh.is-ph h1 clamp(46px,13vw,64px). Course-card title clamp(28px,2.2vw,31px); lesson split grid58fr/42fr with fluid gap. Additional custom thresholds600px,380px and max-height540px target touch/short screens. OPTIONAL RECOMMENDATION: preserve normal card links and lesson order on phones and keep scrollable areas independently accessible.

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

Category: Courses / education / Multi-course academy / training catalog. Selection evidence: Official marketplace identifies an education academy and online school; the public source declares seven school filters, multiple course cards, teacher profiles, pricing and course detail routes, contrasting a single creator course and the existing BrightPath institutional school. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Custom CSS/inline source and linked-google-fonts.css. Original selectors, fluid formulae and inheritance are in sourceRoleDetails and custom-css-declarations.json; evaluated rows explicitly state1440px. No text-box measurements or browser-computed style claims. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
