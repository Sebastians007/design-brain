# Foodly — website recreation specification

Preview: https://foodly.framer.media/  
Creator: Anayatul Islam  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Foodly is a cheerful neighborhood restaurant reference with a cream canvas, deep green navigation, orange delivery ticker and golden primary buttons. Calistoga gives the headline its distinctive broad serif silhouette; Karla carries conversational body copy, while General Sans supports menu titles and prices. A split hero pairs customer portraits and an invitation with a large food photograph and thumbnail strip. Story, metrics, promotional banner, featured dishes, categorized menus, gallery, table-request form, reviews and contact details create the full restaurant journey. The green illustrated marketplace surround is presentation packaging.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are CSS or inline declarations, with em and percentage line heights converted using declared font size; they are not rendered measurements.
- SOURCE / OFFICIAL REFERENCE: marketplace imagery is reference artwork; surrounding laptop, room scene or illustrated presentation frame is not part of the live page.
- OPTIONAL RECOMMENDATION: the single gutter/radius/gap values below are construction defaults for the recreation. Source frame declarations contain component-specific values and responsive alternatives.
- SOURCE LIMITATION: source HTML, CSS, route declarations and official JPGs establish the design reference; booking requests, live availability, payment, delivery and CMS editing were not exercised.
- SOURCE DECLARED: preserve Calistoga, Karla and General Sans main roles. Bricolage Grotesque appears in metrics; Inter, Satoshi and Plus Jakarta Sans also have source font faces. CSS role variation axes are normal where specified; no custom numerical axis values were found.
- SOURCE DECLARED: About and Menu navigation use #about and #services; reservation uses /reservation. Root source has capitalized Reservation ID. The reservation secondary page is saved.
- SOURCE LIMITATION: HTML contains stale hidden or alternate component text about veterinary care and off-theme frame names. This does not prove those strings are visible. Audit active variants before adopting content. Terms of Service currently resolves to /privacy-policy.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Offer ticker / body | Karla | 400 | 16.0 | 24.0 | -.02em |
| Hero h1 / tablet and phone CSS preset | Calistoga | 400 | 40 | 44 | -.04em |
| Hero h1 / desktop preset | Calistoga | 400 | 60.0 | 66.0 | -.04em |
| Section h2 / desktop CSS preset | Calistoga | 400 | 48 | 52.8 | -.04em |
| Section h2 / tablet preset | Calistoga | 400 | 32.0 | 35.2 | -.04em |
| Section h2 / phone CSS preset | Calistoga | 400 | 24 | 26.4 | -.04em |
| Metrics display | Bricolage Grotesque | 200 | 48.0 | 42.24 | -0.02em |
| Metric label | Karla | 400 | 28.0 | 39.2 | -.02em |
| Dish title h5 | General Sans | 500 | 24.0 | 33.6 | -.04em |
| Menu category h3 / desktop | Calistoga | 400 | 40.0 | 48.0 | -.05em |
| Dish price h4 | General Sans | 500 | 24.0 | 31.2 | -.04em |
| Footer copyright | Inter | 500 | 20.0 | 28.0 | -0.03em |
| Creator attribution | Satoshi | 500 | 12.0 | 18.0 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#fcf3e1",
  "paper": "#f6f4ed",
  "ink": "#1a1a1a",
  "accent": "#267d53",
  "muted": "#485f4e"
}
```

Recommended starting desktop gutter: 80px. Principal radius: 8px. Component gap: 40px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation / offer ticker | Unverified | Unverified | Green navigation with mobile closed variant, repeated orange delivery-offer text, reserve action and decorative edge. |
| Hero | Unverified | Unverified | Customer avatar proof, Calistoga headline, support copy, Reserve a Table and View Our Menu actions, large food media plus thumbnails. |
| About Us | Unverified | Unverified | Real Food, Made With Real Care image/story and four metric structures; home anchor #about. |
| Offer Banner | Unverified | Unverified | Large uppercase invitation with helper/supporting text and food styling. |
| Menu Section | Unverified | Unverified | Our Most Loved Dishes, featured dish cards and category slideshows for Soups, Drinks, Salads & Sides, Meat & Grill and Seafood; home anchor #services. |
| Gallery Section | Unverified | Unverified | Food/restaurant image gallery with overlay frames. |
| Book Your Table Section | Unverified | Unverified | Form with booking name, phone number, number of guests, date and time; capitalized inner ID #Reservation; standalone /reservation also declared. |
| Testimonials | Unverified | Unverified | Sidebar intro, quote cards, customer details, arrow navigation and separate phone/tablet structures. |
| Contact Section | Unverified | Unverified | Location/contact card, email, telephone and address content with imagery. |
| Footer | Unverified | Unverified | Site/social links, copyright, creator attribution and legal links; template-use promotional overlay is separate source marketing. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Offer Ticker, Slideshow, rolling-text navigation styles, image thumbnail structures, testimonial arrows, mobile closed navigation and table form are serialized. Actual carousel state changes, thumbnail switching, ticker speed and booking submission were not exercised. OPTIONAL RECOMMENDATION: pause moving offer copy when appropriate, provide keyboard-operable thumbnail and carousel controls, keep one readable static offer under reduced motion, and label local form simulation clearly.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 is 60px desktop and 40px tablet/phone. h2 preset declares 48px base, 32px tablet and 24px phone; first-match source extraction can report the tablet value before the base declaration. Main modules declare max-width:1280px, desktop 80px horizontal padding and tablet 16px. Hero wrapper declares column direction on phone. OPTIONAL RECOMMENDATION: preserve category and reservation reading order, keep thumbnails tappable and prevent offer ticker overflow from widening the page.

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

Category: Hospitality / Restaurant / cafe. Selection evidence: Official Marketplace identifies restaurants and cafes, categorized CMS menu items and table reservations; public preview contains culinary menu and reservation content. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public preview HTML/CSS presets and inline overrides in foodly-evidence-root; representative role paths and exact custom-property values recorded below. linePx converts declared em/percentage values using declared size. Source font-face weight/style details and all presets remain in source-facts.json. Calistoga h2 desktop base is 48px despite first-match tablet extraction at 32px; typePresetRules confirms base/media order. Bricolage Grotesque metrics declare 48px at 200 weight and 88% line height. Role axes declare normal, not a custom axis tuple. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
