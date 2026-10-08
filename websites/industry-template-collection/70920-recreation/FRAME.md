# Renovation — website recreation specification

Preview: https://renova-template.framer.website/  
Creator: TemplateX  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Renovation uses an airy white page, delicate Times New Roman headlines and quiet Inter interface text. Small architectural image capsules interrupt the centered hero statement, followed by a wide interior-image strip. A dark floating bottom navigation carries the primary links. The page moves from a project-manager introduction and company credibility into renovation service accordions, completed residential projects, testimonials and contact. Black rounded actions provide contrast without adding a bright brand color. Preserve the difference between the formal serif headings and the small handwritten call-booking accent.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Times New Roman is the hero and section heading face, despite no downloadable font-face for it; preserve system-font identity and flag platform differences. Inter supplies body/navigation. Dancing Script 700 appears in call-booking copy; Plus Jakarta Sans is loaded auxiliary font evidence.
- OFFICIAL REFERENCE: white canvas, serif hero with image capsules, architectural gallery and dark floating bottom navigation. Tilted device artwork in official imagery is presentation framing.
- SOURCE DECLARED: desktop hero 74px/130%; compact hero preset 42px/130%; desktop section h2 48px/1.15em, tablet 36px and phone 32px. First-match extraction may contain a media declaration, so numeric desktop rows use checked base CSS.
- SOURCE DECLARED: hero, more-info, about-us, services, projects, reviews, faqs and contact IDs exist. Project case-study secondary HTML/CSS was fetched.
- SOURCE DECLARED: Get In Touch Today and Get Started link to a remix destination; contact and services are home anchors. OPTIONAL: connect authorized business destinations during adaptation. Form submission, scheduling and contractor claims are unverified.
- OPTIONAL RECOMMENDATION: generic gutter/radius/gap fields support the generated study; source-specific per-frame geometry remains in source-facts.json.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / base Inter preset | Inter | 400 | 16 | 24 | 0em |
| Hero / base h1 | Times New Roman | 400 | 74 | 96.2 | -.05em |
| Hero / compact h1 | Times New Roman | 400 | 42 | 54.6 | -.05em |
| Section / desktop h2 | Times New Roman | 400 | 48 | 55.2 | -.03em |
| Section / tablet h2 | Times New Roman | 400 | 36 | 41.4 | -.03em |
| Section / phone h2 | Times New Roman | 400 | 32 | 36.8 | -.03em |
| Intro statement / h3 | Times New Roman | 400 | 32 | 48 | 0em |
| Body / Inter preset | Inter | 400 | 16 | 24 | 0em |
| Primary CTA / p | Inter | 500 | 14 | 22.4 | 0em |
| Service accordion / p | Inter | 400 | 18 | 27 | 0em |
| Booking accent / p | Dancing Script | 700 | 26 | 39 | 0em |
| Desktop footer wordmark / inline h2 | Times New Roman | 500 | 165.97654563943493 | 165.97654563943493 | -0.03em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f2f2f2",
  "ink": "#171717",
  "accent": "#171717",
  "muted": "#ababab"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 12px. Component gap: 44px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Top bar and bottom navigation | Unverified | Unverified | Wordmark, availability marker and dark floating navigation; home #hero, services #services, contact #contact, projects /projects#my-projects. |
| Hero | Unverified | Unverified | Source anchor #hero. Trust portraits, segmented serif statement with architectural image capsules, CTA and wide interior image gallery. |
| More info | Unverified | Unverified | Source anchor #more-info. Project manager introduction, residential renovation positioning and credibility counters. |
| About us | Unverified | Unverified | Source anchor #about-us. Company statement, experience line and supporting architectural visual. |
| Services | Unverified | Unverified | Source anchor #services. Kitchen, bathroom, loft, extension and interior styling accordion with image cards. |
| Projects | Unverified | Unverified | Source anchor #projects. Residential renovation cards link to project case pages; See All goes /projects. |
| Reviews | Unverified | Unverified | Source anchor #reviews. Star ratings, client testimonials and named attribution. |
| FAQs | Unverified | Unverified | Source anchor #faqs. Question/answer rows with open and closed source variants. |
| Contact | Unverified | Unverified | Source anchor #contact. Direct office/email/phone details, handwritten booking accent and enquiry fields. |
| Footer | Unverified | Unverified | Oversized Home Renov wordmark, brand summary, email and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: availability pulse names, hero bg animation, primary CTA hover/no-hover variants, service accordion open/closed variants and FAQ open/closed variants exist. No browser timing or keyboard behavior was tested. OPTIONAL: use explicit expanded state and keyboard controls for accordion/FAQ; preserve static text under reduced motion and avoid flashing availability indicators.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Hero padding changes from 140px 40px 100px to 120px 18px 80px; service sections from 100px 40px to 80px 18px. Section containers declare max-width 1200px. Hero h1 74px base /42px compact; section h2 48/36/32px. OPTIONAL: keep the image capsules in reading order and reserve bottom-nav space so it does not cover contact controls.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## Industry context

Category: Home services / Renovation / remodeling company. Selection evidence: Official listing targets renovation and remodeling contractors; preview presents home renovations, project portfolio and residential service cards. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Saved public HTML/CSS declarations and checked base typography presets. linePx converts declared percentage/em line heights using font-size. Base CSS was checked against raw style-public.css because first-match role extraction can encounter media rules. Values are not rendered measurements; nested color overrides and preset alternative sizes remain in sourceRoleDetails/typePresetRules. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
