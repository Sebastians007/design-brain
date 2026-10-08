# Meridian Residences — website recreation specification

Preview: https://obedient-direction-881139.framer.app/  
Creator: SoloFoundry  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Meridian Residences markets one slender luxury tower through a dark cinematic ascent. A serif wordmark and widely tracked Inter navigation sit above the city, a tower elevation and brass vertical floor rail. The hero heading contrasts upright and italic serif language with small dimensional metadata. Numbered chapters move from approach and statement to building, four residence types, amenities, neighbourhood, team and brochure invitation. Hairline brass rules, pale stone text and restrained small uppercase labels tie architectural photography and plans together. The source carries many custom components with native inline CSS, so Framer text-style extraction alone is incomplete. The official cover places the site on a textured presentation backdrop; that external backdrop is not a site section.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: native cinematic headings use font-family Bodoni Moda, serif with optical-size variation settings. Framer navigation wordmark uses Bodoni Moda Variable. The only saved Bodoni @font-face declares Bodoni Moda Variable; native alias loading is unverified, so preserve the intended family and document an explicit alias if required.
- SOURCE DECLARED: hero native h1 is82px/.94 at400 with -.02em and opsz96/wght400. Main chapter headings vary by role (96,92,72px); residence names50px/1.04; invitation104px/.98. Do not normalize these into one heading size.
- SOURCE DECLARED: home starts The Ascent, then numbered01–08 chapters. Main navigation routes are /the-building, /the-ascent, /residences, /amenities, /neighbourhood and /register; no numbered chapter anchor IDs were found.
- SOURCE / OFFICIAL REFERENCE: retain dark night surfaces, pale stone serif typography and brass rail/rules with architectural photos. Any floor/area/price/status is template demonstration data, not verified current inventory.
- SOURCE DECLARED: native source contains blur/opacity/translate reveals, an initial curtain and reduced-motion CSS. Timing declarations are evidence, but actual sequence playback and floor dragging were not exercised. OPTIONAL: preserve readable static fallback and keyboard elevation selection.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero native h1 (Bodoni Moda alias) | Bodoni Moda Variable | 400 | 82 | 77.08 | -.02em; opsz96 wght400 |
| Approach native h2 | Bodoni Moda Variable | 400 | 96 | 96 | -.02em; opsz96 wght400 |
| Statement native h2 | Bodoni Moda Variable | 400 | 92 | 93.84 | -.022em; opsz96 wght400 |
| Chapter native h2 | Bodoni Moda Variable | 400 | 72 | 74.88 | -.02em; opsz96 wght400 |
| Residence native h3 | Bodoni Moda Variable | 400 | 50 | 52 | -.015em; opsz72 wght400 |
| Amenity native h3 | Bodoni Moda Variable | 400 | 38 | 41.8 | -.012em; opsz60 wght400 |
| Invitation native h2 | Bodoni Moda Variable | 400 | 104 | 101.92 | -.024em; opsz96 wght400 |
| Supporting native p | Inter | 300 | 14 | 24.5 | normal (not declared) |
| Nav CSS p | Inter | 400 | 12 | 12 | .12em |
| Wordmark CSS p | Bodoni Moda Variable | 400 | 21 | 21 | .3em; opsz24 wght400 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#0c0c0e",
  "paper": "#141417",
  "ink": "#f5f3ef",
  "accent": "#c9a227",
  "muted": "#e8e2d8",
  "blue": "#9fb4c7"
}
```

Recommended starting desktop gutter: 60px. Principal radius: 0px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Site Navigation | Unverified | Unverified | Fixed dark top row, serif wordmark, five project routes and brass outlined Register Interest action; phone drawer variant. |
| The Ascent | Unverified | Unverified | Full-height custom hero: city view, tower, floor rail, elevation/residence metadata, serif heading and brochure CTA. |
| 01 The Approach | Unverified | Unverified | River/location introduction, architectural photograph, coordinates and chapter label. |
| 02 The Statement | Unverified | Unverified | Large serif statement about88 residences, a concise architectural explanation and height/building statistics. |
| 03 The Building | Unverified | Unverified | Tower programme, floor ranges and drawn architectural detail. |
| 04 The Residences | Unverified | Unverified | Four ways to live at height: One Bedroom, Two Bedroom, The Duplex and The Crown with photographs, metadata and plan links. |
| 05 The Amenities | Unverified | Unverified | Pool, Spa, Reading Room, Screening Room and Garden scenes with reveal titles. |
| 06 The Neighbourhood | Unverified | Unverified | Wharf story, area photography, local context and destination route. |
| 07 The Team | Unverified | Unverified | Project team/professional attribution and imagery. |
| 08 The Invitation | Unverified | Unverified | Oversized Request the brochure heading, hand-issued brochure copy and /register destination. |
| Footer | Unverified | Unverified | Explore/More/project-coordinate groups, email, legal links and developer attribution. Optional assistant component appears separately. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: native source includes reveal transitions with 1–1.2s opacity/blur/translate treatments, line wipes and brass chapter-label tracking transitions; source also includes a curtain and prefers-reduced-motion query. Official imagery shows different floor/elevation rail positions. Floor dragging, spring physics, optical-size rendering, loader completion, plan animation, assistant responses and brochure delivery are untested. OPTIONAL: give the elevation rail slider semantics or discrete floor controls, deterministic sample-view mapping and a static reduced-motion view; do not allow hidden reveal text to remain inaccessible.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: primary root variants are desktop >=1200px, tablet810–1199.98px and phone<=809.98px. Ascent hero declares100vh/min-height640px; tablet minimum620px and phone minimum660px. Native custom inline heading sizes are initial declarations, not proof of compact rendered sizes. The phone nav has a Menu/Open Icon/Drawer structure. OPTIONAL: stack residence photography and text, reduce serif headlines according to available width, preserve floor metadata and switch the rail to discrete controls if touch dragging obscures content.

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

Category: Real estate / Single luxury development. Selection evidence: Official listing explicitly markets one luxury property development, apartment tower or condo launch. Public preview declares residences, floor plans, amenities, neighbourhood and register-interest routes; dynamic elevation and enquiry outcomes are untested. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Framer nav presets and native component inline CSS from saved source-public.html, complemented by custom-component-declarations.json. Native font-family is Bodoni Moda; numeric role rows intentionally point to its declared download family Bodoni Moda Variable while retaining alias detail. Font variation settings: headings opsz96/wght400, residence names opsz72/wght400, amenities opsz60/wght400; nav wordmark axes opsz24/wght400. Native supporting Inter weight300 is declared but saved Framer font faces list400/500/700, so weight300 may synthesize unless a suitable font is supplied. No browser measurement or runtime font-load proof is claimed. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
