# Launchpad Learning — website recreation specification

Preview: https://launchpadlearning.framer.website/  
Creator: Work MRR  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Launchpad Learning is a creator-led flagship course sales reference. A centered navy headline, avatar proof and vivid blue actions open a long white sales page; problem cards and outcomes lead into module accordions, included resources, learner proof, a dark navy instructor portrait scene, certificate mockups, pricing, guarantee and a closing video invitation. Funnel Display carries brand, headline and buttons; Manrope carries body, with General Sans navigation and Satoshi module labels. Preserve this personal-program journey rather than turning it into an institutional course catalog.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography is parsed CSS or inline declarations, with relative line heights converted using declared size; no rendered geometry is asserted.
- SOURCE / OFFICIAL REFERENCE: marketplace JPGs are official promotional imagery; browser chrome, presentation backdrops and collage arrangements are packaging rather than live page elements.
- OPTIONAL RECOMMENDATION: gutter, radius and gap are recreation defaults. Preserve the source component-specific spacing and responsive overrides documented in evidence.
- SOURCE LIMITATION: enrollment, course access, payments, student accounts, certificates, newsletter delivery and CMS editing were not exercised. Template proof, prices and learner totals are sample content.
- SOURCE DECLARED: base h1 is Funnel Display 63px/1.1em at 500; h2 is Funnel Display Variable 48px/1.2em at 400. Header links use General Sans; curriculum module labels use Satoshi. Do not replace every role with the main body/display pair.
- SOURCE DECLARED: source repeats h1 for instructor and closing CTA; an adaptation may improve heading semantics while retaining visual hierarchy.
- SOURCE LIMITATION: /enroll-page is a name/email/message contact form with Send Message. Its route name and Enroll Now links do not establish checkout or student access.
- SOURCE DECLARED: #CURRICULUM has uppercase letters and is distinct from a lowercase fragment; preserve literal source IDs.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Brand | Funnel Display | 700 | 17.0 | 22.1 | 0px |
| Navigation | General Sans | 500 | 15.0 | 19.5 | 0 |
| Enrollment action | Funnel Display | 600 | 18.0 | 21.6 | 0.03em |
| Learner proof | Funnel Display | 700 | 12.0 | 24.0 | 0.7px |
| Hero h1 / desktop | Funnel Display | 500 | 63.0 | 69.3 | -1.5px |
| Hero supporting copy | Manrope | 500 | 17.0 | 22.1 | .5px |
| Section h2 / desktop | Funnel Display Variable | 400 | 48.0 | 57.6 | -1px |
| Problem card title | Funnel Display | 600 | 23.0 | 29.9 | -.5px |
| Curriculum overline | Funnel Display | 700 | 16.0 | 24.0 | 1px |
| Curriculum module | Satoshi | 500 | 14.0 | 18.2 | -0.2px |
| Curriculum supporting label | Manrope | 600 | 14.0 | 21.0 | 0 |
| Student quote | Funnel Display | 500 | 19.0 | 22.8 | 0em |
| Instructor proof label | Funnel Display | 700 | 13.0 | 26.0 | .7px |
| Price | Funnel Display | 600 | 37.0 | 37.0 | -0.5px |
| Pricing benefit | Funnel Display | 600 | 23.0 | 29.9 | -.5px |
| Footer copyright | Geist | 500 | 16.0 | 20.8 | 0 |
| Hero h1 / phone preset | Funnel Display | 500 | 40 | 44 | -1.5px |
| Section h2 / phone preset | Funnel Display Variable | 400 | 36 | 43.2 | -1px |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f7f7fa",
  "ink": "#19154e",
  "accent": "#1932d2",
  "muted": "#6b6b75"
}
```

Recommended starting desktop gutter: 30px. Principal radius: 16px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Promotion strip | Unverified | Unverified | Fixed ready-to-launch promotion and save action, named Variant 1 / CTA Small. |
| Navigation | Unverified | Unverified | Desktop Transperent and Phone Transperent variants, anchor links and Enroll Now. |
| Hero | Unverified | Unverified | Avatar/stars proof, centered course-creator headline, supporting copy, enroll action, guarantee and media; #hero. |
| Problem | Unverified | Unverified | Three problem cards beneath Are you a creator that is stuck before you even launch? |
| Outcome | Unverified | Unverified | By the end of this course, you will outcome list; #overview. |
| Curriculum | Unverified | Unverified | Course orientation and expandable module structures named Closed / FAQ Day; literal #CURRICULUM. |
| Benefits | Unverified | Unverified | What you will get access to resource cards, desktop/mobile variants; #whats-included. |
| Testimonials | Unverified | Unverified | Hear from creators like you quote cards; #reviews. |
| Instructor | Unverified | Unverified | Meet your Instructor biography, partner logos, portrait and dark blue background; #about. |
| Certification | Unverified | Unverified | Three decorative certificate images and completion promise; #certification. |
| Pricing | Unverified | Unverified | Course plan benefits, $249 pricing and additional pricing/value container; #pricing. |
| Guarantee | Unverified | Unverified | This is our guarantee component named Wrapper / CTA Day. |
| Closing CTA | Unverified | Unverified | Become a full-time course creator, rating proof and video wrapper; #cta. |
| Footer | Unverified | Unverified | Course Information, Platform, Company, creator attribution, copyright and social links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Lenis Smooth Scroll component, appear-animation source, expandable Closed curriculum components, video wrapper and phone-menu variants are present. Source records intended structures rather than exercised timing or interaction. OPTIONAL RECOMMENDATION: support reduced motion, open modules with semantic buttons and aria-expanded, and preserve content without animation. Do not auto-play instructor media with sound.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. h1 base 63px, tablet 60px, phone 40px; h2 base/tablet 48px, phone 36px. Hero padding is 150px 30px 0, tablet 150px 20px 0. Curriculum is 125px 30px on desktop and 75px 20px on phone. Instructor desktop gap is 100px. OPTIONAL RECOMMENDATION: preserve module order, course-inclusion hierarchy and readable price/CTA when stacking.

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

Category: Courses / education / Individual course creator / flagship program. Selection evidence: Official marketplace targets solo creators and cohort program leads; the public source markets one course with outcomes, modular curriculum, instructor, certificate, proof, pricing and an enroll-page, contrasting a multi-course academy and the existing BrightPath school. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public source presets and inline overrides; non-media h1 63px and h2 48px bases were checked directly against CSS. Phone rows come from explicit max-width:809px/min-width:0 rules. No browser-computed styles or text-box measurements. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
