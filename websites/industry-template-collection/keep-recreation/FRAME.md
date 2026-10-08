# Keep — website recreation specification

Preview: https://most-task-208471.framer.app/  
Creator: Anowar Hossain  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Keep sells an application-led paid community with strong type and tangible glimpses of the room. A narrow pale navigation bar carries a layered KEEP wordmark, section destinations and an orange gradient request action. The left hero uses a bracketed monospace membership label, heavy Clash Grotesk title, plain Fira Sans copy and two pill actions. Floating tilted photographs fill the right side. Two crossing statistic tapes separate the hero from a numbered four-step application explanation. Resource teasers use member-only badges and unlock actions, while a three-tier membership comparison highlights the middle option. A short testimonial and limited-application closing CTA complete a concise home. The orange surround and laptop shell belong to the marketplace presentation, not the website.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: Clash Grotesk 700 hero/600 section titles, Fira Sans body/actions and IBM Plex Mono bracketed labels/prices are distinct roles; Inter faces are also declared as fallback utilities.
- SOURCE / OFFICIAL REFERENCE: maintain heavyweight hero, photo collage, layered wordmark, crossing tapes and warm neutral/orange treatment. Marketplace laptop shell is not page content.
- SOURCE DECLARED: no source section fragment anchors are declared; links use /membership, /inside, /events, /resources, /stories, /join, /waitlist and information routes.
- SOURCE DECLARED: a members-only badge or lock silhouette is marketing UI. It does not establish authentication, authorization, a functioning community feed or paid entitlement.
- OPTIONAL RECOMMENDATION: 40px gutter follows the hero source padding; radius 14/gap 24 are recreation defaults. Preserve actual route targets even where labels differ, and review the unrelated Get This Template payment URL before publication.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Navigation / p | Fira Sans | 400 | 13.5 | 20.925 | -.02em |
| Action / p preset | Fira Sans | 600 | 14 | 22.4 | .01em |
| Hero / base h1 preset | Clash Grotesk | 700 | 76 | 76 | -2.5px |
| Hero / tablet h1 preset | Clash Grotesk | 700 | 54 | 54 | -1.6px |
| Hero / phone h1 preset | Clash Grotesk | 700 | 40 | 40 | -1px |
| Supporting copy / p preset | Fira Sans | 400 | 16 | 25.6 | -.02em |
| Section title / base h2 preset | Clash Grotesk | 600 | 46 | 48.3 | -1.2px |
| Section title / tablet h2 preset | Clash Grotesk | 600 | 36 | 37.8 | -1.2px |
| Section title / phone h2 preset | Clash Grotesk | 600 | 30 | 31.5 | -1.2px |
| Bracketed label / p preset | IBM Plex Mono | 500 | 12 | 16.8 | .14em |
| Resource and tier title / h4 preset | Fira Sans | 600 | 17 | 22.1 | -.04em |
| Tier price / p preset | IBM Plex Mono | 600 | 30 | 48 | -.02em |
| Step title / inline p | Clash Grotesk | 600 | 18 | 21.6 | -0.3px |
| Tape item / inline p | Fira Sans | 700 | 14 | 16.8 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#fafaf8",
  "paper": "#f5f4f2",
  "ink": "#101010",
  "accent": "#ff6b35",
  "muted": "#6b6863"
}
```

Recommended starting desktop gutter: 40px. Principal radius: 14px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Named Desktop/Phone nav; layered KEEP mark and links to membership, inside, events, resources and stories. Desktop Request Access points to /membership. |
| Hero | Unverified | Unverified | Named Hero/Copy/Collage: bracketed membership count, heavy title, two actions and tilted social photographs. |
| Tape | Unverified | Unverified | Named Tape / Band A / Band B: crossing strips repeat membership, availability and social-proof sample metrics. |
| How it works | Unverified | Unverified | Named How It Works: Four steps to the table with numbered Tell us why, Get reviewed, Take your seat and Actually show up modules. |
| Inside teaser | Unverified | Unverified | Named Inside Teaser: three resource cards; closed-door call and vault are member-only, onboarding guide is labeled open preview. |
| Membership tiers | Unverified | Unverified | Named Tiers: Circle, The Table and Inner Circle; price rows, feature lists, join links and Most requested badge on middle tier. |
| Testimonial | Unverified | Unverified | Named Testimonial / Who: quoted member statement and attribution. Sample social proof remains unverified. |
| Final CTA | Unverified | Unverified | Named Final CTA: application-window title and apply action. |
| Footer | Unverified | Unverified | Named Footer: KEEP identity, Explore and Info links, creator/template actions, oversized wordmark. No source section anchors. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: hero Copy appear record moves from opacity .001/y20px to opacity 1/y0 with spring duration .55s, bounce .25 and no delay. Band A/B tapes, layered logo letters and mobile variants are declared; runtime looping, hover, theme switching and menu transitions were not exercised. OPTIONAL: keep statistic tapes readable when paused or reduced motion is active, avoid duplicate accessible announcement of repeated items, and maintain visible focus for all join links.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px; typography presets also use 1199px and 809px maxima. Hero uses 80px 40px padding, then phone column layout with 48px 24px and 32px gap. Copy width is 520px desktop, 50% tablet and 100% phone; collage declarations are 460×420px, 300px/auto with aspect ratio 1.09524 tablet and 342×312px phone. Display presets step h1 76/54/40px and h2 46/36/30px. OPTIONAL: test collage fit below 390px, stack tiers and steps in source order, and preserve informative badges beside their actions.

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

Category: Events / community / Membership / paid community. Selection evidence: Official marketplace explicitly describes selling access to a paid community with member-feed mockup, resource vault, events, tiered memberships and join/waitlist applications; public source can verify layout declarations, not real gating or payment. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: SOURCE DECLARED: primary presets and hand-styled tape/step rows in keep-evidence-root. Numeric desktop and explicitly labeled media roles were compared to source typePresetRules; linePx is em × declared size. Variation axes are normal on presets; hand-styled rows omit the property. Static font face declarations include Clash Grotesk 600/700, Fira Sans 400/600/700/900, IBM Plex Mono 500/600/700, Inter 400/600; downloaded faces do not imply all weights are visibly used. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
