# ClinicHub — website recreation specification

Preview: https://clinichub.framer.ai/  
Creator: Adheeb Hameed  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

ClinicHub presents a multidisciplinary medical clinic through an immersive waiting-room photograph, floating compact navigation, Lora serif headings and Inter interface text. Deep teal storytelling panels and pale mint service/process surfaces alternate with white. The hero combines rating microcopy, a visit action and a small consultation video; the body moves from three clinic metrics into photo-led care storytelling, a six-specialty collage, three-step process, family-care benefit illustrations, clinician portraits, patient-story layouts and practical questions. Its clinic identity is source content, not verification of real medical services.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are non-media CSS base presets plus inline declarations, with em/percentage line heights converted using declared font size. They are not computed browser measurements.
- SOURCE / OFFICIAL REFERENCE: Marketplace artwork contains multiple layouts and presentation backgrounds. Those surrounding aqua/white frames are packaging and are not live site sections.
- OPTIONAL RECOMMENDATION: gutter/radius/gap values below are recreation defaults. Preserve the source component-specific geometry and responsive alternatives recorded in frame declarations.
- SOURCE LIMITATION: homepage/secondary public HTML, CSS, routes and four official JPGs establish design evidence. Form delivery, appointment confirmations, availability, practitioner credentials, ratings, patient outcomes, compliance badges and insurance coverage were not verified. Demo statements require owner-supplied replacements.
- SOURCE DECLARED: variable-axis roles declare normal; no custom numeric font variation axes were found. Preserve declared italic faces and span overrides separately.
- SOURCE DECLARED: home uses #expertise, #how-it-works, #why-us, #doctors, #reviews and #faq. Reviews IDs occur in separate responsive variants; avoid duplicate IDs in an adaptation.
- SOURCE DECLARED: the generic extraction initially encountered the h2 tablet preset before its base. Authored typography uses the actual non-media Lora h2 42px/50.4px, not the 35px tablet declaration.
- SOURCE LIMITATION: Why ClinicHub calendar/insurance/doctor miniatures are named UI Illustration structures. They do not establish a working scheduler or insurance eligibility tool.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero review microcopy | Inter | 500.0 | 16.0 | 19.2 | -.02em |
| Hero h1 / desktop base | Lora | 400.0 | 50.0 | 60.0 | 0em |
| Primary action | Inter | 500.0 | 18.0 | 21.6 | -.02em |
| Video caption / compact body | Inter | 400.0 | 14.0 | 19.6 | 0em |
| Section h2 / desktop base | Lora | 400.0 | 42.0 | 50.4 | -.02em |
| Section overline | Inter | 600.0 | 14.0 | 16.8 | 0em |
| Service-center heading | Lora | 400.0 | 32.0 | 38.4 | -.02em |
| Process step title | Inter | 500.0 | 20.0 | 24.0 | -.02em |
| Process body | Inter | 400.0 | 18.0 | 25.2 | -.01em |
| Doctor/UI card name | Inter | 400.0 | 16.0 | 19.2 | -.02em |
| Decorative calendar label | Inter | 500.0 | 12.0 | 13.2 | -0.02em |
| Decorative calendar date | Inter | 500.0 | 10.0 | 12.0 | -0.02em |
| Desktop navigation | Inter | 500.0 | 16.0 | 19.2 | -.02em |
| FAQ question | Inter | 500.0 | 18.0 | 21.6 | -.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f1ffed",
  "ink": "#09292b",
  "accent": "#155e63",
  "muted": "#374a4c"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 15px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Fixed Nav Frame with Desktop Top Nav and Mobile Close structures; Expertise, Why us, Doctors, Reviews and Book a Visit destinations. |
| Hero | Unverified | Unverified | 100vh waiting-room photo, black overlay, review stars/count, Lora headline and visit CTA; separate Video/Play panel with family-care caption. |
| Metrics | Unverified | Unverified | Three Lora values 15+, 10K and 99% paired with clinic-care, annual-patient and satisfaction labels; sample claims remain demo content. |
| About | Unverified | Unverified | Deep teal Intro statement followed by Meet ClinicHub care-that-feels-like-family composition with six floating patient/family photos. |
| Expertise | Unverified | Unverified | SOURCE DECLARED #expertise: Dental, Orthopedic, General Medicine, Dermatology, Gynecology and Pediatric Care photo tiles around mint central CTA card. |
| How It Works | Unverified | Unverified | SOURCE DECLARED #how-it-works: Book Online, Visit For Diagnosis and Ongoing Care; illustrated numbered step cards. |
| Why ClinicHub | Unverified | Unverified | SOURCE DECLARED #why-us: large family photo and three translucent benefit cards for doctors, online booking and insurance; miniature calendar/coverage illustrations. |
| Our Team | Unverified | Unverified | SOURCE DECLARED #doctors: clinician photo cards, name and specialty metadata, left/right button structures. |
| Patient Stories | Unverified | Unverified | SOURCE DECLARED #reviews: photo and mint quote/percentage story panels; desktop Variant 1 and Mobile 1 source structures plus previous/next controls. |
| FAQ | Unverified | Unverified | SOURCE DECLARED #faq: mint booking card beside five practical questions, with Closed question components. |
| Footer | Unverified | Unverified | Deep teal gradient CTA, white visit action, section/page/social links, sample compliance badge images, disclaimer and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: initial appear attributes include low opacity and translateY transforms; Video/Play, left/right team/review controls, FAQ Closed states and Mobile Close navigation are present. Timing, video playback, carousel navigation and scheduler behavior were not exercised. OPTIONAL RECOMMENDATION: reveal content once with restrained fades, provide explicit labelled video and carousel controls, keep FAQ answers available to keyboard/touch and show all content without animation under reduced motion. Treat the illustrated calendar as decorative unless a separately configured scheduling service is supplied.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 680px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: page root desktop >=1200px, tablet 680–1199.98px, phone <=679.98px. H1 base 50px/1.2em becomes 40px tablet and 32px phone; h2 base 42px/1.2em becomes 35px tablet and 28px/1.4em phone. Some reused component presets additionally declare 810px/809px boundaries; do not replace page root 680px with 810px. Hero 100vh, 8px inset and 15px radius; main desktop section padding uses 60px horizontal and 80–120px vertical; responsive rules are preserved in source facts. OPTIONAL RECOMMENDATION: stack speciality collage and benefit cards in reading order and preserve captions, name/specialty metadata and the visit action.

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

Category: Healthcare / Medical clinic. Selection evidence: Official Marketplace Medical classification and explicit clinic/doctor/practice positioning; home exposes services, clinician cards and appointment CTA. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public preview base CSS presets explicitly resolved excluding @media before inline overrides; exact role paths, nested spans and separate media alternatives recorded in sourceRoleDetails and custom-declarations.json. Lora h1 50px and h2 42px are actual desktop base declarations; earlier h2 35px matches are tablet-only. Source font-face records retain actual files and styles. SVG/fit-text geometry is not treated as a rendered type size. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
