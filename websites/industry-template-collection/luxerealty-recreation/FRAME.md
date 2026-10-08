# LuxeRealty — website recreation specification

Preview: https://luxerealty.framer.website/  
Creator: FTC Studio  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

LuxeRealty pairs an immersive opening property sequence with a conventional searchable inventory route. Architectural photographs fill the scene, while a tall white title card centers each named estate and location. A quiet translucent navigation carries a distinct BT Suave wordmark, Riviera Nights labels, search and a heart. Below the film-like opening, white property cards expose lifestyle, location, price, beds and baths. Purple agency sections and orange rules provide a stronger commercial voice farther down: agent portraits, oversized Luxe typography, expertise, partner marks, reach metrics and editorial cards lead into newsletter and contact forms. Official cover images show page UI inside monitor/laptop presentations; those surrounding devices and domestic backdrops belong to Marketplace artwork.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Riviera Nights Trial Regular is the page body/display face; Medium and Bold are separate family names. The navigation wordmark uses BT Suave Regular at a declared weight 500.
- SOURCE DECLARED: preserve home anchors #featured-properties, #about-luxe, #agent, #luxe-realty, #our-expertise, #global-reach, #blogs and #newsletter. The source repeats #global-reach in responsive branches; do not reproduce duplicate IDs in a new implementation.
- SOURCE DECLARED: the actual listings destination is /properties/listing, with Lifestyle_Checkbox and Location_Checkbox components plus a compact filter button. Official listing advertises advanced search and saved properties; execution/persistence are untested.
- SOURCE / OFFICIAL REFERENCE: hero photos sit behind centered white estate cards; purple lower agency sections and orange accents are source CSS, even though Marketplace hero covers concentrate on neutral photography.
- SOURCE DECLARED: numbers are CSS declarations, never browser rectangles. OPTIONAL RECOMMENDATION: global spacing defaults below are reconstruction choices; refer to exact section frame padding values in source-facts.json.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero CSS h1 | Riviera Nights Trial Regular | 400 | 46 | 55.2 | -2.6px |
| Property scene / section CSS h2 | Riviera Nights Trial Regular | 400 | 32 | 35.2 | -.01em |
| Navigation CSS p | Riviera Nights Trial Regular | 400 | 14 | 21 | 0em |
| Property card CSS h3 desktop | Riviera Nights Trial Medium | 500 | 18 | 25.2 | 0em |
| Property card CSS h3 compact preset | Riviera Nights Trial Medium | 500 | 16 | 22.4 | 0em |
| Property metadata / CSS p | Riviera Nights Trial Regular | 400 | 12 | 18 | 0em |
| Agent CSS h4 | Riviera Nights Trial Regular | 400 | 24 | 36 | -.5px |
| Agency word CSS h1 | Riviera Nights Trial Regular | 500 | 160 | 192 | -7.4px |
| Nav wordmark CSS | BT Suave Regular | 500 | 24 | 28.8 | 0 |
| Supporting copy desktop preset | Riviera Nights Trial Regular | 400 | 14 | 19.6 | 0em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#f2f2f2",
  "ink": "#232327",
  "accent": "#3900ad",
  "muted": "#5e5e5e",
  "highlight": "#ff6112"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 0px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Translucent top bar, BT Suave wordmark, inventory/about/agents/blog destinations, search and liked-property icons. |
| Hero/property sequence | Unverified | Unverified | Source name New Property List: Beyond Desire introduction then La Mer, Dynasty, Orion and Summit image scenes with centered white content cards. |
| Featured Properties | Unverified | Unverified | Anchor #featured-properties; cards expose lifestyle, location, title, price and beds/baths, plus Explore All to /properties/listing. |
| About Luxe | Unverified | Unverified | Anchor #about-luxe; agency statement over immersive media. |
| Agents | Unverified | Unverified | Anchor #agent; purple radial background, three licensed-agent profile cards and agents route. |
| Luxe Realty | Unverified | Unverified | Anchor #luxe-realty; large white Luxe type over purple scene and imagery. |
| Our Expertise | Unverified | Unverified | Anchor #our-expertise; Active/Inactive capability structures, explanation and related images. |
| Featured In | Unverified | Unverified | Partner logo strip declared between expertise and global reach. |
| Global Reach | Unverified | Unverified | Anchor #global-reach; continent, licensed-agent and project metrics. |
| Blogs | Unverified | Unverified | Anchor #blogs; editorial cards with category and article links. |
| Newsletter | Unverified | Unverified | Anchor #newsletter; Join the Elite, email field and Send action. |
| Contact/footer | Unverified | Unverified | Get in touch form, oversized wordmark, property and agent destinations, about/blog/social groups and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: opening sequence includes four property scenes and multiple content-card variants. Active/Inactive expertise structures, closed mobile navigation, search/liked-property controls, input/form controls and compact filter trigger appear in saved source. Scroll transforms, timing, checkbox filtering, liked-property persistence, newsletter delivery and enquiry outcomes were not exercised. OPTIONAL RECOMMENDATION: implement predictable keyboard-operable disclosure/search states; keep text readable with reduced motion and use local sample data until an authorized inventory service is supplied.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: primary home variants have desktop >=1440px, tablet 810–1439.98px and phone <=809.98px. Nested content additionally branches at 1200px; the source therefore has boundaries 1440/1200/810, not a universal 1200 desktop cutoff. Featured Properties declares 32px padding with 16px on phone, About 94px 40px with 94px 16px on phone; property-card h3 preset changes 18px to 16px at <=1199px. OPTIONAL: preserve scene sequence while stacking inventory and agent cards, and use the source compact filter trigger when the sidebar cannot fit.

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

Category: Real estate / Searchable property listings. Selection evidence: Official listing describes property listings, advanced search/filtering, categories/locations, agent profiles, saved properties and CMS. Public source includes property routes and filter/search controls; execution and persistence are untested. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source CSS presets plus inline overrides, saved in luxerealty-evidence-root. Numeric values convert em/% line-height using declared font size. First-match extractor can show compact supporting copy 16px, while the base desktop paragraph preset is 14px/140%; the separate desktop/compact roles above come from typePresetRules. Wordmark is BT Suave Regular; no variable axes beyond normal are declared for the main families. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
