# WAIS — website recreation specification

Preview: https://wais-theconfrence.framer.website/  
Creator: Aprilia Gunawan  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

WAIS uses an editorial conference identity: warm white pages, thin outlined pill links with circular arrow marks, large regular Host Grotesk titles and a narrow horizontal header. The hero deliberately puts short introductory copy and actions beside an oversized three-line title, then pairs an audience image with a wider stage image and date/venue captions. A long event introduction gives way to a charcoal speaker band with monochrome portrait cards. Two dated agenda columns, sponsors, three ticket tiers and questions lead into a closing invitation and restrained footer. Purple belongs to the mark and selected source treatments; broad imagery supplies much of the color. The monitor, wall frame and blurred background in marketplace artwork are presentation props.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Main typography is Host Grotesk weight 400; Inter is present for fallback and check glyphs. Preserve regular title weight rather than imposing a bold SaaS heading.
- SOURCE / OFFICIAL REFERENCE: asymmetric hero with three title lines, paired audience/stage photos, warm white canvas and dark speaker section are defining elements.
- SOURCE DECLARED: the source uses named sections, not addressable section fragment IDs. Navigation copy alone does not prove anchors. Actual links include /speakers/speaker-index, /agenda-cms/agenda-index, /venue and /contact.
- SOURCE DECLARED: use base CSS presets for numeric desktop roles; the extractor first match captures h2 55px, h3 30px, h4 25px and h5 21px media rules, whereas base CSS is 64px, 44px, 32px and 20px respectively.
- OPTIONAL RECOMMENDATION: gutter/radius/gap are recreation defaults except the 32px header content gutter. All coordinates are unmeasured; ticket fulfillment, schedule filters, CMS editing and form submissions remain untested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / p preset | Host Grotesk | 400 | 16 | 19.2 | -.03em |
| Hero / desktop h1 preset | Host Grotesk | 400 | 90 | 90 | -.05em |
| Hero / 810–817px preset | Host Grotesk | 400 | 64 | 64 | -.05em |
| Hero / <=809px preset | Host Grotesk | 400 | 50 | 50 | -.05em |
| Section heading / base h2 preset | Host Grotesk | 400 | 64 | 64 | -.05em |
| Ticket heading / base h3 preset | Host Grotesk | 400 | 44 | 52.8 | -.05em |
| Agenda date / base h4 preset | Host Grotesk | 400 | 32 | 38.4 | -.05em |
| Speaker and date caption / base h5 preset | Host Grotesk | 400 | 20 | 24 | -.03em |
| Day label / p preset | Host Grotesk | 400 | 12 | 14.4 | 0em |
| Ticket check glyph / inline p | Inter | 500 | 12 | 19.2 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f8f6f6",
  "paper": "#ffffff",
  "ink": "#000000",
  "accent": "#a58eff",
  "muted": "#363636"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 8px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Named Desktop / Phone variants; circular arrow links and outlined ticket CTA. No source fragment IDs; ticket link goes to /contact. |
| Hero | Unverified | Unverified | Named Hero: short copy/actions beside BuildWithAI Summit 2026, paired crowd/stage images and date/venue links. |
| What is it | Unverified | Unverified | Named Section What is it: large left title and event introduction on right; source fixed desktop height is a declaration, not a viewport measurement. |
| Speakers | Unverified | Unverified | Named Section Speakers: charcoal band, title/copy/action, linked monochrome speaker portraits and individual profile routes. |
| Agenda | Unverified | Unverified | Named Section Agenda: Day 1 / Sep 18 and Day 2 / Sep 19 columns, timed session titles and stage labels; links to session CMS routes. |
| Sponsors | Unverified | Unverified | Named Section Sponsors: sponsor marks and Become Sponsors action to /contact. |
| Pricing | Unverified | Unverified | Named Section Pricing: Launch Price / Price Break / VIP Access ticket cards with price, inclusions and purchase-style links to /contact. |
| FAQ | Unverified | Unverified | Named Section FAQ: closed question rows and compact mobile variants. |
| CTA and Footer | Unverified | Unverified | Ready to build smarter invitation in Desktop/Tablet/Phone footer variants, ticket action, identity and creator credit. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: three hero appear records initialize opacity 0.001 and translateY 150px, then spring to opacity 1/y 0 with duration 1s, bounce .2 and delays .5/1/1.3s. Split-character headings and Closed FAQ/mobile navigation variants are present. Speaker controls and runtime scroll text behavior were not exercised. OPTIONAL: restore readable static headings without JS, disable displacement under reduced motion, and expose accessible previous/next or expanded states only when implementing those controls.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Heading presets separately use <=817px with >=810px, <=809px, and 767/320/319px caption ranges. Hero padding changes from 120px 0 100px to 120px 0 60px on tablet and 100px 0 60px on phone. Source What is it height changes 1450px desktop, 1345px tablet, min-content phone; these are CSS declarations, not measured scroll distance. OPTIONAL: preserve the hero and agenda reading order; verify narrow widths before retaining fixed section/card heights.

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

Category: Events / community / Conference / summit. Selection evidence: Official marketplace identifies a conference and event template with speakers, a two-day agenda, venue, sponsors and tickets; public preview source will constrain actual page structure. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: SOURCE DECLARED: HTML/CSS presets and inline overrides in wais-evidence-root. Numeric base roles were checked against media-free typePresetRules, with h1 tablet/phone rows explicitly labeled. linePx is em × declared font size. No browser-rendered geometry; font variation axes are normal, not an inferred variable-font axis. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
