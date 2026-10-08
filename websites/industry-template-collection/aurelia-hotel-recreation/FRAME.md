# Aurelia Hotel — website recreation specification

Preview: https://aurelia-template.framer.website/  
Creator: Slashdown  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Aurelia is a boutique coastal hotel reference with an immersive full-height seascape hero, transparent navigation and refined Cormorant Garamond headings. Fine tracked Manrope navigation, gold actions and forest-green booking controls create a quiet resort identity. The cream page moves from destination story and signed hospitality message into room cards, services, gallery, reviews and practical stay questions. Room cards preserve nightly price, area, bed and guest metadata. The marketplace laptop scene is packaging, not the site layout.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are CSS or inline declarations, with em and percentage line heights converted using declared font size; they are not rendered measurements.
- SOURCE / OFFICIAL REFERENCE: marketplace imagery is reference artwork; surrounding laptop, room scene or illustrated presentation frame is not part of the live page.
- OPTIONAL RECOMMENDATION: the single gutter/radius/gap values below are construction defaults for the recreation. Source frame declarations contain component-specific values and responsive alternatives.
- SOURCE LIMITATION: source HTML, CSS, route declarations and official JPGs establish the design reference; booking requests, live availability, payment, delivery and CMS editing were not exercised.
- SOURCE DECLARED: primary display is Cormorant Garamond; Manrope carries body/interface. Inter is used for small overlines and a footer heading; do not homogenize these roles. CSS role variation axes are normal where specified; no custom numerical axis values were found.
- SOURCE DECLARED: home IDs include cta, rooms and gallery; menu items Rooms, Services, Gallery and Contact use separate routes. Secondary room-detail source is saved and exposes photos, amenities and related rooms.
- SOURCE LIMITATION: telephone and email links include tel:# and mail:# placeholders; social labels resolve to home. Replace destinations as an explicit adaptation task.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Location / navigation secondary | Manrope | 600 | 13.0 | 19.5 | 0.15em |
| Navigation primary | Manrope | 600 | 12.0 | 18.0 | .15em |
| Hero eyebrow | Inter | 800 | 12.0 | 19.2 | .19em |
| Hero h1 / desktop preset | Cormorant Garamond | 500 | 80.0 | 88.0 | -.04em |
| Body copy | Manrope | 500 | 16.0 | 25.6 | -.02em |
| Ghost action | Manrope | 600 | 13.0 | 20.8 | 0.133em |
| Booking field label | Manrope | 500 | 11.0 | 17.6 | .2em |
| CMS room option text | Manrope | 500 | 12.0 | 14.4 | 0 |
| Section h2 / desktop preset | Cormorant Garamond | 600 | 64.0 | 64.0 | -.04em |
| Guest role | Inter | 800 | 10.0 | 16.0 | .19em |
| CTA h4 | Cormorant Garamond | 700 | 36.0 | 39.6 | -.04em |
| Room card h5 | Cormorant Garamond | 700 | 28.0 | 30.8 | -.04em |
| Room metadata | Manrope | 500 | 14.0 | 22.4 | -0.02em |
| Review / desktop declaration | Cormorant Garamond | 700 | 40.0 | 56.0 | -.04em |
| Review / mobile declaration | Cormorant Garamond | 700 | 24.0 | 33.6 | -.04em |
| FAQ question | Manrope | 700 | 16.0 | 25.6 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f8f5f0",
  "paper": "#eee7dd",
  "ink": "#1e2a24",
  "accent": "#b99a6b",
  "muted": "#5a5a5a"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 12px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Transparent desktop navigation and Mobile Transparent Closed structure; separate /rooms, /services, /gallery and /contact routes. |
| Hero | Unverified | Unverified | Full-height coastal photo, tracked welcome eyebrow, serif heading, ghost Discover Rooms action and dark booking-request strip with room/date/party fields. |
| About | Unverified | Unverified | Destination story, signature and Guest Experience Manager attribution paired with media and About Us action. |
| CTA | Unverified | Unverified | Luxury invitation and Book Now action; declared home ID #cta. |
| Rooms | Unverified | Unverified | Featured Rooms and All Rooms link; Tropical Garden Suite, Infinity Pool Villa and Sunset Premium Ocean Suite card variants; declared ID #rooms. |
| Services | Unverified | Unverified | Beyond Your Stay: Wellness & Spa, Sunset Dining and Private Experiences cards with source service-01/02/03 IDs. |
| Gallery | Unverified | Unverified | A Glimpse of Aurelia photo composition; inner Container ID #gallery. |
| Reviews | Unverified | Unverified | Serif guest quotes, stars/source, arrow controls and mobile review variant; #reviews belongs to a Gradient node, not a verified navigation destination. |
| FAQ | Unverified | Unverified | Before Your Stay questions including check-in/out; Question Closed and Answer structures. |
| Footer | Unverified | Unverified | Address, contact, social/navigation columns, copyright and Slashdown creator attribution. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: source includes Page Smooth Scroll, hero photo transform:scale(1.2), review navigation structures, Question Closed/Answer FAQ components and desktop/tablet/mobile booking variants. These declarations establish intended components, not runtime timing or successful submissions. OPTIONAL RECOMMENDATION: keep the booking request panel stable; use restrained image reveals, accessible FAQ buttons and static media under reduced motion. Preserve guest text when navigating reviews.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 declares 80px desktop, 64px tablet and a phone preset in source; main content containers declare max-width:1180px and 24px horizontal padding. About uses desktop 160px vertical padding and tablet 120px 24px 64px. An additional type query has an unusual 80px lower/79px upper boundary; treat as literal source artifact, not a device recommendation. OPTIONAL RECOMMENDATION: stack booking fields in source label order and keep room metadata readable.

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

Category: Hospitality / Boutique hotel / resort. Selection evidence: Official Marketplace identifies luxury hotels, boutique resorts and villas; public preview declares room detail routes and a booking request journey. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public preview HTML/CSS presets and inline overrides in aurelia-hotel-evidence-root; representative role paths and exact custom-property values recorded below. linePx converts declared em/percentage values using declared size. Source font-face weight/style details and all presets remain in source-facts.json. Cormorant Garamond 80px h1 and 64px h2 base presets confirmed; role axes declare normal, not a custom axis tuple. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
