# Marginalia — website recreation specification

Preview: https://appreciative-notes-865583.framer.app/  
Creator: Vexora Studio  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Marginalia treats the website as a quarterly issue. A tiny monospaced dateline and ruled masthead open a warm paper canvas. The main cover pairs an enormous lightweight Literata title with a coloured issue numeral, an editorial introduction, linked contents rows and a documentary photograph. The rest of the home interleaves archived covers, story grids, a full-image cover story, lists, editor correspondence and contributor portraits with oversized moving type. Red-orange accents identify the current issue and subscription actions. Theme controls offer Paper and Ink. The official artwork also shows membership pricing, while the public home has podcast, events and membership destinations. Preserve the publication hierarchy rather than converting it to a generic article feed.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: typography comes from public HTML/CSS and inline variable axes, not rendered measurements. Numeric weight is the CSS font-weight declaration; explicit wght axis can differ and must also be preserved.
- OFFICIAL REFERENCE: use marketplace artwork as design evidence; promotional borders, inset layouts and sales captions are not native site sections.
- SOURCE DECLARED: root boundaries are1200px/768px. Named content, actual IDs and public route declarations are recorded without inventing anchors.
- OPTIONAL RECOMMENDATION: radius/gap are specimen defaults; use per-component geometry from source-facts.json. Controls and backend results are untested.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Desktop / Issue Strip / p | Fragment Mono | 400 | 13.0 | 18.2 | .01em |
| Bar / Wordmark / p | Literata Variable | 500 | 34.0 | 34.0 | -0.02em |
| Bar / Links / p | Fragment Mono | 400 | 12.0 | 15.6 | .08em |
| Bar / Wordmark / p | Literata Variable | 500 | 26.0 | 26.0 | -0.02em |
| Phone / Drawer / h2 | Literata Variable | 400 | 36.0 | 39.6 | -.01em |
| Issue / Cover Title Row / h1 | Literata Variable | 400 | 224.0 | 215.04 | -.045em |
| Cover Title Row / Cover Numeral (motion) / p | Literata Variable | 400 | 200.0 | 170.0 | -.04em |
| Body / Lineup / p | Literata Variable | 400 | 22.0 | 30.36 | 0em |
| Table of Contents (CMS) / Entry / h3 | Literata Variable | 400 | 26.0 | 31.2 | -.005em |
| Cover / Caption / p | Literata Variable | 400 | 14.0 | 20.3 | 0em |
| Shade / Text / h2 | Literata Variable | 400 | 88.0 | 93.28 | -.025em |
| Loop Band mgLpA (motion) / p | Literata | 400 | 88.0 | 93.28 | -.02em |
| Pull Quote (motion) / p | Literata Variable | 400 | 60.0 | 66.0 | -.015em |
| Stories (CMS) / Card / p | Literata Variable | 400 | 17.0 | 26.35 | 0em |
| Issue Row / Issue No (motion) / p | Literata | 400 | 72.0 | 74.88 | -.015em |
| Interview Grid / Answer / p | Literata Variable | 400 | 20.0 | 32.4 | 0em |
| Stats / Stat / p | Inter | 500 | 16.0 | 19.2 | 0 |
| Top / Sign-off / p | Literata Variable | 500 | 56.0 | 56.0 | -0.025em |
| Top / Sign-off / p | Literata Variable | 500 | 44.0 | 44.0 | -0.025em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f4f1ea",
  "paper": "#eae5d9",
  "ink": "#141414",
  "accent": "#f03d1f",
  "muted": "#6b665e"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 0px. Component gap: 28px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Issue dateline, ruled wordmark, Issues/Stories/Contributors/About links, search, Paper/Ink theme controls and subscribe action. |
| Contents | Unverified | Unverified | Current issue title Repair, coloured 07 numeral, introduction, story contents and cover photo. |
| Back Issues | Unverified | Unverified | Archive cover ring, small metadata and linked issue covers. |
| Cover Story | Unverified | Unverified | SOURCE DECLARED anchor #t-cover. Full-image cover story The Honest Screw with dark shade, kicker and reading action. |
| Loop Band A | Unverified | Unverified | Issue identity marquee between editorial modules. |
| Pull Quote | Unverified | Unverified | SOURCE DECLARED anchor #t-quote. Large editorial quotation with credit. |
| In This Issue | Unverified | Unverified | SOURCE DECLARED anchor #t-inissue. CMS story cards with images, dek and byline rows. |
| In Motion | Unverified | Unverified | Video story cards. |
| Most Read | Unverified | Unverified | SOURCE DECLARED anchor #t-mostread. Numbered story list with category and read time. |
| Loop Band B | Unverified | Unverified | Second text band. |
| Photo Essay | Unverified | Unverified | CMS photographic sequence and captions. |
| Letter from the Editor | Unverified | Unverified | Editor portrait, letter, signature and follow-up action. |
| Sections Ticker | Unverified | Unverified | SOURCE DECLARED anchor #t-ticker. Publication section labels and coloured dots. |
| Photo Quote | Unverified | Unverified | Photographic quotation interval. |
| Section Index | Unverified | Unverified | Linked publication sections. |
| Every Cover | Unverified | Unverified | All issue cover cards. |
| Archive Index | Unverified | Unverified | SOURCE DECLARED anchor #t-archive. Issue rows and coloured issue numbers. |
| Loop Band C | Unverified | Unverified | Archive text band. |
| Contributors | Unverified | Unverified | SOURCE DECLARED anchor #t-contrib. Contributor portraits and attribution. |
| Interview | Unverified | Unverified | Portrait with interview question and answer. |
| Masthead Ticker | Unverified | Unverified | Contributor names in moving line. |
| How an Issue Is Made | Unverified | Unverified | Editorial production spec rows. |
| Numbers Strip | Unverified | Unverified | SOURCE DECLARED anchor #t-numbers. Publication statistics; demo figures are not business evidence. |
| Next Issue | Unverified | Unverified | Upcoming issue announcement. |
| Reader Letters | Unverified | Unverified | Reader correspondence cards. |
| Loop Band D | Unverified | Unverified | Fourth editorial text band. |
| Newsletter | Unverified | Unverified | Email signup form. |
| Listen | Unverified | Unverified | Podcast episode CMS cards. |
| Evenings | Unverified | Unverified | Event rows. |
| Membership Band | Unverified | Unverified | Membership destination invitation. |
| Footer | Unverified | Unverified | Sign-off, Read/Join/Elsewhere groups and colophon/legal links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: names and source scripts expose cover shutters, ring stage, moving loop bands, image motion, pull quotes, signatures and reduced-motion guards. The official listing describes theme memory, search, reading progress and a 3D issue ring. These are source/listing declarations, not exercised interaction contracts. OPTIONAL: make cover motion decorative, retain every issue as a normal link, stop motion under prefers-reduced-motion and expose theme/search controls with keyboard semantics. Forms, playback, memberships and transactions untested.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 768px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: page variants are desktop >=1200px, tablet 768–1199.98px and phone <=767.98px. Contents declares max-width1200px with padding48px40px96px; tablet40px32px80px; phone28px20px64px. Phone navigation has a menu toggle/drawer. Media-source type alternatives remain in typePresetRules; numeric rows list base declarations, not active computed styles. OPTIONAL: keep issue contents before cover photo on phone and replace the ring with accessible linked covers if necessary.

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

Category: Publishing / Editorial magazine. Selection evidence: Official listing identifies an issue-based magazine with per-issue covers, editor letters, story archives and contributors. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public source HTML/CSS and inline declarations. Base preset rows are not computed browser styles; keep media alternatives in source-facts.json. linePx converts declared em by sizePx. Variable axes are distinct from font-weight; Literata/Newsreader optical-size and weight settings must survive reconstruction. Reference images inspected independently. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
