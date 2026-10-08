# Finlance — website recreation specification

Preview: https://finlance.framer.website/  
Creator: Fluxory Studio  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Finlance presents a digital banking product through a purple physical-card mockup, floating transaction/FX/balance tiles and a green landscape hero. Bold Creato Display headings mix upright words with purpose-drawn italic font faces. Personal and business accounts, product features, card controls, dashboard, trust statistics, reviews, banking benefits and editorial updates explain the app before the closing account action. Official marketplace presentation frames are packaging, not live site layout.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric type rows derive from HTML/CSS declarations, not rendered measurements.
- SOURCE / OFFICIAL REFERENCE: official marketplace JPGs may include surrounding presentation frames; they are not live page elements.
- OPTIONAL RECOMMENDATION: single gutter/radius/gap values are recreation defaults; detailed component values and media alternatives remain in source-facts.json.
- SOURCE LIMITATION: home and stated secondary public source were inspected; backend behavior and interaction timing were not exercised.
- SOURCE DECLARED: Finlance hero upright and italic base headings are 96px; 82px and 92px are laptop media declarations, not base values.
- SOURCE LIMITATION: FDIC, APY, deposits, fee and security claims are demo source copy requiring the brand owner to replace/verify; banking, payment and account-opening behavior was not exercised.
- SOURCE DECLARED: source home has #main and #header-scroll-trigger; the latter is a scroll trigger, not a content navigation destination.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Nav Item/Button Text Wrap/ Menu Item / p | Creato Display Medium | 500.0 | 16.0 | 24.0 | 0em |
| Secondary/Button Text Wrap/Button Text / p | Creato Display Bold | 700.0 | 16.0 | 19.2 | 0em |
| Description Block/Title Block/Title / h1 | Creato Display Bold | 700.0 | 96.0 | 96.0 | 0em |
| Title Block/Title Wrap/Title / h1 | Creato Display Bold Italic | 700.0 | 96.0 | 96.0 | 0em |
| Content Wrapper/bottom/Default / p | Creato Display Regular | 400.0 | 11.0 | 13.2 | 0em |
| Content Wrapper/bottom/Default / p | Creato Display Bold | 700.0 | 13.0 | 13.0 | 0em |
| Content Wrapper/bottom/Default / p | Creato Display Bold | 700.0 | 18.0 | 21.599999999999998 | 0em |
| Content Wrapper/bottom/Default / p | Creato Display Bold | 700.0 | 12.0 | 12.0 | 0em |
| Content Wrapper/bottom/Phone / p | Creato Display Regular | 400.0 | 3.0 | 3.5999999999999996 | 0em |
| Content Wrapper/bottom/Phone / p | Creato Display Bold | 700.0 | 4.0 | 4.8 | 0em |
| Text Ticker/Text Stack/Text / p | Creato Display Regular | 400.0 | 14.0 | 14.0 | 0em |
| Title Block/Title Wrapper/Title / h2 | Creato Display Bold | 700.0 | 52.0 | 62.4 | 0em |
| Title Wrapper/Title Wrapper/Title / h2 | Creato Display Bold Italic | 700.0 | 52.0 | 62.4 | 0em |
| Section Title Block/Title Block/Description / p | Creato Display Regular | 400.0 | 16.0 | 22.4 | 0em |
| Text Content/title-text/Personal Account. / h3 | Creato Display Bold | 700.0 | 48.0 | 57.599999999999994 | 0em |
| TEXT/Stat Item 01/APY on savings / p | Creato Display Regular | 400.0 | 12.0 | 12.0 | 0em |
| TEXT/Stat Item 02/$0 / p | Creato Display Bold | 700.0 | 22.0 | 22.0 | 0em |
| Default/Title Block/Title / p | Creato Display Bold | 700.0 | 20.0 | 20.0 | 0em |
| Content Wrapper/Stats Widget Block/Secondary / p | Almarai | 400.0 | 13.0 | 15.6 | 0 |
| Stats Widget Block/Mobile/counter / p | Creato Display Bold | 700.0 | 32.0 | 38.4 | 0 |
| text-blocks/text/PDF / p | Creato Display Bold | 700.0 | 11.0 | 12.1 | 0em |
| Title Block/Text Content/Title / h3 | Creato Display Bold | 700.0 | 40.0 | 48.0 | 0em |
| Card/Title Block/Title / p | Creato Display Bold | 700.0 | 28.0 | 28.0 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f8faff",
  "ink": "#000000",
  "accent": "#7c65fe",
  "muted": "#64748b"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | White-menu desktop and phone variants; About, Features, Blog, Security, Pages and Contact destinations. |
| Hero Section | Unverified | Unverified | Banking beautifully simple headline, summary, Try it free and Open Account actions, card/FX/balance/payment composition and landscape background. |
| Brands Section | Unverified | Unverified | Moving benefit text band with FDIC, fee, APY and bank-grade security sample claims. |
| Accounts Section | Unverified | Unverified | Your personal life is your business heading and distinct personal/business account cards, badges, APY/fee values and credit-card media. |
| Features Section | Unverified | Unverified | Everything you need, nothing you do not heading and feature/benefit cards. |
| Cards Section | Unverified | Unverified | One card. Endless control paired product-card imagery and three list items. |
| Deshbord Section | Unverified | Unverified | Source spelling preserved: dashboard product showcase under Clarity at every glance. |
| Trust Section | Unverified | Unverified | Logo ticker and statistical counter widgets with desktop/mobile variants. |
| Review Section | Unverified | Unverified | Loved by those who demand better heading and review cards ticker with client profile/name/designation. |
| Banking Section | Unverified | Unverified | Banking benefit composition: ATM, statements/PDF, Pay, mobile app, premium metal card, concierge and account widgets. |
| Blog Section | Unverified | Unverified | Three CMS-style article cards with category, title, author, date/read time and View all posts. |
| Footer Section | Unverified | Unverified | Open your account in four minutes CTA, Try it free/Talk to us/Open Account, app-store action, navigation/help/legal groups and responsive footer variants. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Text Ticker, Brands Ticker, Review Cards Ticker, counter widgets, character-split heading spans and Framer appear-animation records are present; marketplace describes scroll effects, reveals and sticky sections. Actual running speeds and transitions were not measured. OPTIONAL RECOMMENDATION: preserve readable static headings and benefits for reduced motion, pause moving reviews on focus, and keep banking numbers explicitly illustrative.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: roots use desktop >=1440px, laptop 1200–1439.98px, tablet 810–1199.98px and phone <=809.98px. Base h1 is 96px/96px; laptop upright h1 is 82px while italic h1 is 92px, tablet 56/64px, phone both 40px. Base section h2 is 52px/62.4px. Source component variants use different layout sizes. OPTIONAL RECOMMENDATION: keep account cards readable in their source order and stack product-detail copy before cropped decorative media.

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

Category: Finance / fintech / Banking / fintech app. Selection evidence: Official listing describes neobanks, fintech startups and digital wallets; preview home includes product/card/account UI, personal/business account split and dashboard/mobile sections. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source public HTML/CSS; resolved base presets choose a rule without @media before applying exact inline overrides. Generic source-facts first-preset rows may contain laptop values; this config explicitly fixes that ambiguity. linePx converts declared em/% values using declared size; no rendered geometry is claimed. Distinct Creato Display italic faces and Almarai/Inter exceptions are retained. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
