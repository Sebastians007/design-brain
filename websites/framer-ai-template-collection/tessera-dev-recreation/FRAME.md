# Tessera Dev — website recreation specification

Preview: https://tessera-template.framer.website/  
Creator: Neeraj Verma  
Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Tessera Dev gives developer infrastructure an editorial face. White surfaces, fine rails and restrained peach highlights let generous serif statements sit beside technical monospace labels. Newsreader italics soften the schema narrative without weakening the precise database imagery. A four-square tile mark becomes a repeated mosaic language across the hero table, workflow demo and lower conversion scene. Sage, blush and periwinkle washes quietly distinguish sections. The long page moves from implementation explanation into customer confidence, modular platform capabilities and release activity. Preserve its paper-like space, black rounded action pills and mixed serif/sans/mono hierarchy; a generic dark terminal skin would erase the distinctive balance.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: hero uses Newsreader 400, 64px/70.4px with emphasized italic phrase; body uses Inter Variable CSS weight 400 plus wght 430. Navigation uses wght 450; logo Newsreader Variable uses wght 500.
- SOURCE / REFERENCE: preserve the four-tile identity, pale tint fields and mosaic schema/data imagery. Marketplace title banner and browser frame are promotional framing, not the home hero.
- SOURCE DECLARED: full home order includes workflow, customers with community posts, building-block tabs, release/blog columns and final endpoint CTA before footer. There is no home pricing grid.
- RECOMMENDATION: gutter 32, radius 20 and gap 28 are starting values informed by particular source containers; they are not universal measured geometry.
- SCOPE: developer/API infrastructure fit comes from the official listing. Backend generation, authentication, clipboard, search, theme persistence and API execution are not verified; no AI inference service is inferred.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero / h2 with italic em phrase | Newsreader | 400 | 64 | 70.4 | -.96px |
| Section heading / h2 | Newsreader | 400 | 64 | 70.4 | -.96px |
| Community heading / h2 | Newsreader | 400 | 36 | 43.2 | -.5px |
| Hero lede / p; wght 430 | Inter Variable | 400 | 19 | 30.4 | -.02em |
| Section lede / p; wght 430 | Inter Variable | 400 | 20 | 27 | -.02em |
| Navigation / p; wght 450 | Inter Variable | 400 | 16 | 16 | -.02em |
| Install command / p | JetBrains Mono | 400 | 14 | 22.4 | -.02em |
| Trust caption / p | Inter | 400 | 14 | 19.6 | -.02em |
| Wordmark / h4; wght 500 | Newsreader Variable | 500 | 24 | 28.32 | -.4px |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#ffffff",
  "paper": "#fafafb",
  "ink": "#17191c",
  "accent": "#e2946c",
  "muted": "#6a6e79"
}
```

Recommended starting desktop gutter: 32px. Principal radius: 20px. Component gap: 28px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Tile wordmark, product/docs/pricing/customers/changelog links, theme control, GitHub count, account and build actions; alternate mobile drawer. |
| Hero | Unverified | Unverified | Install command, serif headline with italic second phrase, lede and two CTAs alongside tinted mosaic table; schema/data/query/live stage labels. |
| Logo Strip | Unverified | Unverified | Trust caption followed by typography-based customer ticker. |
| How it works | Unverified | Unverified | Sage frame, introductory heading, quickstart action and four-step schema/data/query/live demo with code and table stage. |
| Customers | Unverified | Unverified | Customer cards with duotone portraits, quotes and attribution, followed by developer community post window. |
| Building blocks | Unverified | Unverified | Platform introduction, five schema/API/type/code/app tabs with code mock, then database/auth/realtime/functions benefits. |
| What's New | Unverified | Unverified | Two columns: tagged and dated release records, and categorized blog previews with archive links. |
| Final CTA | Unverified | Unverified | Endpoint invitation, repeated install chip, build/contact actions and marching tile scene. |
| Footer | Unverified | Unverified | Brand/tagline, Product/Developers/Company links, copyright and privacy/terms row. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: roll/track button layers, ticker structures, word-split reveal markup, initial opacity/transform states, four-step demo progress bars and tab structures are present. Theme toggle and drawer are named controls. Timings, final runtime states and interaction outcomes were not exercised. RECOMMENDATION: provide readable static text and a stable mosaic when motion is reduced; implement keyboard-operable tabs and an explicit theme setting.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root anchors are desktop >=1200, tablet 810–1199.98 and phone <=809.98. Outer section gutters declare 32/24/16px; hero becomes vertical on tablet/phone, copy padding becomes 72px 40px 40px then 48px 24px 32px, visual heights declare 560/440px. RECOMMENDATION: retain narrative order, separate code overflow from page overflow, and keep navigation drawer focus manageable. These are public CSS declarations, not viewport measurements.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.

## AI product category context

Category: AI / Developer / API. Selection basis: The official listing explicitly positions Tessera for backend platforms, APIs, databases, SDKs and infrastructure products. This is a developer-infrastructure visual reference; no AI inference backend is established. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public home HTML/CSS role declarations in tessera-dev-evidence-root/source-facts.json. Line heights above are arithmetic conversions from declared em values. Emphasis is actual em markup; preserve Newsreader italic face. Newsreader Variable is the wordmark family, not a replacement name for the hero.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a white editorial serif/italic hero and mosaic database demo. The Data workflow tab was clicked and its aria-selected became true. The immediate screenshot still showed Schema panel content, so completion of the panel content transition was not confirmed. No schema generation or real backend was exercised. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
