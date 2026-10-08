# Electrical — website recreation specification

Preview: https://electrical-wbs.framer.website/  
Creator: Salim from Webestica  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Electrical presents a local trade business through warm cream surfaces, deep olive hero panels and amber accents. Its split hero balances a large Stack Sans Headline statement with an electrician portrait and a license card. Compact Inter text, labeled availability and call-to-book actions make the service practical. Credibility numbers and a diagram-like reasons-to-choose sequence lead into six service cards. A detailed customer repair story, licensing reassurance, four-step process, review ticker, service areas and FAQ create a complete homeowner decision path. The composition is grounded and direct, contrasting with Renovation’s editorial serif portfolio.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Stack Sans Headline supplies headings; Inter supplies body/navigation. Source font variation axes declare normal, not invented custom-axis values.
- OFFICIAL REFERENCE: cream canvas, olive split hero, amber emphasis in headline/action and a portrait-side licensing card. Marketplace cream border/shadow framing is presentation artwork.
- SOURCE DECLARED: hero base preset 66px/1.2em at 500, tablet 48px and phone 40px; base h2 52px/1.2em at 400 with 40/30px compact alternatives. Numeric values are declarations, not rendered dimensions.
- SOURCE DECLARED: page sequence includes states/metrics, why choose us, services, customer story, licensing, process, reviews, service areas and FAQs. Header Services targets /service (singular); booking and address check target /contact.
- SOURCE DECLARED: service-area copy and phone/quote links do not establish actual dispatch, address checking or form handling. License, warranty, review verification, availability and performance claims remain demo content until approved business evidence exists.
- OPTIONAL RECOMMENDATION: generic radius/gap fields are study defaults; preserve source-specific frame geometry instead of applying one value globally.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / Inter p | Inter | 400 | 14 | 19.6 | 0em |
| Primary action / Inter p | Inter | 600 | 14 | 19.6 | 0em |
| Availability / p | Inter | 400 | 11 | 15.4 | 1.8px |
| Hero / desktop h1 | Stack Sans Headline | 500 | 66 | 79.2 | -1.3px |
| Hero / tablet h1 | Stack Sans Headline | 500 | 48 | 57.6 | -1.3px |
| Hero / phone h1 | Stack Sans Headline | 500 | 40 | 48 | -1.3px |
| Section / base h2 | Stack Sans Headline | 400 | 52 | 62.4 | -1px |
| Section / phone h2 | Stack Sans Headline | 400 | 30 | 36 | -1px |
| Metric / h3 | Stack Sans Headline | 400 | 38 | 45.6 | -.8px |
| Service / h5 preset used in h3 | Stack Sans Headline | 400 | 22 | 26.4 | -.4px |
| Customer story quote / p | Inter | 400 | 22 | 30.8 | -.4px |
| Review caption / h6 preset | Stack Sans Headline | 400 | 18 | 21.6 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f7f5f1",
  "paper": "#eeeae2",
  "ink": "#1a1916",
  "accent": "#ea9b00",
  "muted": "#626262"
}
```

Recommended starting desktop gutter: 30px. Principal radius: 20px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Cream header, amber bolt identity, /service, /about, /blog, /contact, phone and booking action. |
| Hero | Unverified | Unverified | Olive headline panel, availability badge, booking/work controls, cable illustration, electrician portrait, license box and client logos. |
| States / credibility | Unverified | Unverified | Four metrics and alternating photos back up safety/trust positioning. |
| Why Choose Us | Unverified | Unverified | Source anchor #why-choose-us. Numbered reasons and connected round markers with IDs why-choose-us-01 through -04. |
| Services | Unverified | Unverified | Emergency electrical, panel upgrades, wiring, EV charger, lighting and safety inspections. |
| Customer Reviews / repair story | Unverified | Unverified | Panel fault case, testimonial, customer attribution and platform review reassurance. |
| Electrical Licensed | Unverified | Unverified | Safety hazard statement, licensing/insurance reassurance and supporting statistics. |
| Step / process | Unverified | Unverified | Book, assess and quote, work to code, and warranty sequence. |
| Reviews | Unverified | Unverified | Homeowner quote cards, ratings and review ticker. |
| Service Areas | Unverified | Unverified | Greater Austin city coverage and Check your address action linking /contact. |
| FAQs | Unverified | Unverified | Open/closed desktop and phone question variants. |
| Footer CTA and footer | Unverified | Unverified | Team invitation, booking action, direct contact details, social links, legal pages and creator credit. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: menu-button/mobile-nav names, review ticker, numbered reasons IDs, FAQ open/close and phone variants, and video-like See our work control exist. Source declarations do not establish video playback, ticker timing, menu keyboard behavior or form outcomes. OPTIONAL: expose expanded/collapsed semantics, pause continuous review motion, and use readable static reviews under reduced motion.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Main containers declare max-width 1360px and 0 30px padding, changing to 0 16px on phone. Hero h1 66/48/40px; section h2 52/40/30px. Separate Nav - Phone, Skin - Phone and license/outline phone variants exist. OPTIONAL: stack the hero statement before technician image and preserve the licensing card and direct phone action in the mobile reading order.

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

Category: Home services / Local electrician / electrical contractor. Selection evidence: Official listing targets electricians and local home-service trades; preview presents electrical repairs, wiring, permits, customer reviews and service areas. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Saved public HTML/CSS declarations and checked base typography presets. linePx converts declared percentage/em line heights using font-size. Base CSS was checked against raw style-public.css because first-match role extraction can encounter media rules. Values are not rendered measurements; nested color overrides and preset alternative sizes remain in sourceRoleDetails/typePresetRules. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
