# Coastkind Collective — website recreation specification

Preview: https://coastkind-collective.framer.website/  
Creator: Tiny Monster  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Coastkind Collective is an environmental nonprofit reference with a lime announcement ticker, compact Inter identity, dark arrow buttons and a large Besley hero crossing a coastal photo. The light editorial home pairs marine mission copy with a three-poster focus composition, an underwater quotation, equal project/donation invitations and a dark newsletter/footer. Habitat, community and education remain distinct themes. Current marketplace creator is Tiny Monster; sample content is fictional.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are CSS/inline declarations, not rendered measurements; linePx converts declared em/unitless line-height using declared size.
- OFFICIAL REFERENCE: marketplace imagery contains presentation framing and captions; these are not native page sections.
- OPTIONAL RECOMMENDATION: gutter/radius/gap values are construction defaults, not a universal measurement of the source.
- SOURCE LIMITATION: all organizations, metrics, people, impact outcomes and testimonials are illustrative template content. No donation processing, volunteer application delivery, newsletter delivery or donor CRM was verified.
- SOURCE DECLARED: no home section IDs were found for Hero/Mission/Focus/Ocean Quote/Ways to Act/Newsletter. #main is the skip destination; generated undefined-* navigation IDs are component artifacts, not meaningful home anchors.
- SOURCE DECLARED: donation route is editorial and integration-neutral. Its three options are one-time, monthly and other ways to give; source contains no hosted donation processor or donor receipt service.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Ticker Track / Announcement Text / p | Inter | 600 | 12.0 | 14.4 | .04em |
| Coastkind Wordmark / Brand Name / p | Inter | 600 | 14.0 | 12.32 | -0.03em |
| Default / Our Work Link / p | Inter | 500 | 14.0 | 14.0 | 0 |
| Variant 1 / Donate Label / p | Inter | 600 | 13.0 | 13.0 | 0 |
| Hero Copy / Hero Title / h1 | Besley | 600 | 68.0 | 68.0 | -.02em |
| Variant 2 / Donate Label / p | Inter | 600 | 16.0 | 16.0 | 0 |
| Hero Copy / Hero Title / h1 | Besley | 600 | 63.0 | 63.0 | -0.02em |
| Hero Copy / Hero Title / h1 | Besley | 600 | 52.0 | 52.0 | -0.02em |
| Mission Heading / Heading / The ocean shapes every life along / h2 | Besley | 400 | 54.0 | 59.4 | -.02em |
| Mission Copy / Copy / Healthy marine ecosystems provide food, liv… / p | Inter | 400 | 17.0 | 25.5 | -.015em |
| Mission Copy / Heading / Built with communities. Backed by science. / h3 | Inter | 500 | 32.0 | 33.6 | -.035em |
| Variant 4 / Donate Label / p | Inter | 600 | 15.0 | 15.0 | 0 |
| Restore Habitats Poster / Text / Protect What Connects Us / p | Inter | 500 | 56.0 | 51.52 | -0.055em |
| Habitat Tag / Text / Restore marine habitats / p | Inter | 600 | 14.0 | 16.8 | 0.04em |
| Restore Habitats Poster / Text / Protect What Connects Us / p | Inter | 500 | 32.0 | 35.2 | -0.055em |
| Restore Habitats Poster / Title / Protect What Connects Us / p | Inter | 500 | 44.0 | 40.48 | -0.055em |
| Quote Copy / Quote Mark / p | Besley | 500 | 76.0 | 53.2 | 0 |
| Quote Copy / Copy / A principle that guides every Coastkind / p | Inter | 500 | 24.0 | 31.2 | 0.02em |
| Quote Copy / Copy / A principle that guides every Coastkind / p | Inter | 500 | 20.0 | 26.0 | 0.02em |
| Join a Project / Heading / Join a Project / h2 | Besley | 500 | 48.0 | 52.8 | -0.02em |
| Join a Project / Copy / Explore active programs and get involved / p | Inter | 500 | 24.0 | 34.8 | 0 |
| Join a Project / Copy / Explore active programs and get involved / p | Inter | 500 | 21.0 | 30.45 | 0 |
| Join a Project / Copy / Explore active programs and get involved / p | Inter | 500 | 20.0 | 29.0 | 0 |
| Newsletter Copy / Copy / Receive field updates, community stories and / p | Inter | 500 | 16.0 | 20.8 | -0.015em |
| Coastkind Wordmark / Brand Name / p | Inter | 600 | 22.0 | 22.0 | -0.03em |
| Our Work / Title / p | Inter | 500 | 14.0 | 19.6 | 0 |
| Default / Label / p | Inter | 500 | 12.0 | 16.8 | 0 |
| Content / © 2026 Coastkind Collective. All / Copyright / p | Inter | 500 | 13.0 | 18.2 | 0 |
| Coastkind Wordmark / Brand Name / p | Inter | 600 | 18.0 | 18.0 | -0.03em |
| Coastkind Wordmark / Brand Name / p | Inter | 600 | 14.0 | 14.0 | -0.03em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f4f6f6",
  "paper": "#e8e2d6",
  "ink": "#1f2a2e",
  "accent": "#cbe97a",
  "muted": "#8a8a8a"
}
```

Recommended starting desktop gutter: 64px. Principal radius: 12px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Announcement + navigation | Unverified | Unverified | Lime announcement ticker, wordmark, grouped work/impact/stories/about links, Get Involved and Donate; custom Mobile Navigation Drawer. |
| Hero Composition | Unverified | Unverified | Large Besley title over Hero Image Panel with a contrast overlay, coastal boardwalk image and Explore our impact action. |
| Mission Editorial | Unverified | Unverified | The ocean shapes every life along the coast; section label, healthy ecosystems copy, Built with communities. Backed by science and Discover our approach link. |
| Modular Focus Posters | Unverified | Unverified | A healthier ocean starts at the shoreline. Restore Habitats, Community and Stewardship posters; desktop Focus Poster Grid and explicit tablet/phone carousels. |
| Ocean Quote | Unverified | Unverified | Underwater Atmosphere, quote mark, environmental principle and attribution-style explanatory copy. |
| Ways to Act | Unverified | Unverified | Paired Join a Project and Make a Donation panels with distinct routes/actions. |
| Newsletter | Unverified | Unverified | Stay close to the coast, field-updates copy, labelled email field and Subscribe control. |
| Footer | Unverified | Unverified | Wordmark, social icons, link columns for work/impact/stories/about/get involved and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: Ticker Track, Tablet Focus Carousel, Phone Focus Carousel, Previous Slide, Next Slide, reveal/contrast layers and mobile drawer are named structures. Runtime sequencing, slide index persistence and form delivery were not exercised. OPTIONAL RECOMMENDATION: offer normal focus-area links and static readable marine imagery under reduced motion; give carousel buttons descriptive names and announce slide changes without stealing focus.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1440px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1440px, tablet 810–1439.98px, phone <=809.98px. Hero Besley h1 declares 68px base, 63px tablet inline and 52px phone inline at line-height1em; phone text centers. Desktop uses Focus Poster Grid while tablet/phone have separate carousel structures. OPTIONAL RECOMMENDATION: maintain label/action order when stacking mission and action panels; adapt newsletter field width without truncating validation text.

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

Category: Nonprofits / Environmental / conservation organization. Selection evidence: Official listing explicitly names environmental nonprofits and conservation organizations; home and routes emphasize coastal focus areas, programs, impact reports, field stories and involvement. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public preview source HTML/CSS and inline declarations; source facts retain media alternatives. Reference JPGs inspected separately. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
