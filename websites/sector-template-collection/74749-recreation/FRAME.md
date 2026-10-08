# Charity Foundation — website recreation specification

Preview: https://interactive-channel-508354.framer.app/  
Creator: SoloFoundry  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Charity Foundation uses a fictional Wellspring mountain-village organization. A full-height dusk scene carries an upper-left Fraunces sentence with italic amber lights and a lower-right glass gift selector. Instrument Sans handles actions/body; JetBrains Mono supplies numbered section labels and donation data. Cream editorial blocks alternate with night scenes, campaign progress, before/after storytelling, a village impact map and monthly-giving tiers. The huge Wellspring lettering and amber marketplace surround are presentation packaging.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric typography rows are CSS/inline declarations, not rendered measurements; linePx converts declared em/unitless line-height using declared size.
- OFFICIAL REFERENCE: marketplace imagery contains presentation framing and captions; these are not native page sections.
- OPTIONAL RECOMMENDATION: gutter/radius/gap values are construction defaults, not a universal measurement of the source.
- SOURCE LIMITATION: all organizations, metrics, people, impact outcomes and testimonials are illustrative template content. No donation processing, volunteer application delivery, newsletter delivery or donor CRM was verified.
- SOURCE DECLARED: actual custom type families come from a linked Google Fonts stylesheet; retain italic Fraunces and its optical/softness/wonk axes. Noto Serif/Inter/Fragment Mono faces also exist in shell but are not the primary visual roles.
- SOURCE DECLARED: desktop gift defaults to $25 one-time in source; official JPG01 depicts $10 one-time and JPG02 $100 monthly. They are separate reference states, not contradictions.
- SOURCE DECLARED: donate source contains Make a gift, Gift/Details/Review step structure, allocation and giving FAQ. Marketplace says final step hands off to an owner payment link; no payment is taken inside template.
- SOURCE DECLARED: only #main is a page skip destination. wspr-p-*, wsmo-pl, wsmn-own and wsfq-a-* are internal component relationships, not invented home navigation anchors.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Wordmark | Fraunces | 420 | 24 | 24 | -.01em |
| Hero eyebrow | JetBrains Mono | 400 | 12 | 18 |.14em |
| Hero display desktop | Fraunces | 420 | 80 | 78.4 | -.028em |
| Hero display tablet | Fraunces | 420 | 64 | 62.72 | -.028em |
| Hero display phone | Fraunces | 420 | 42 | 42.84 | -.028em |
| Hero body | Instrument Sans | 400 | 17 | 25.5 | 0 |
| Hero phone body | Instrument Sans | 400 | 14.5 | 21.025 | 0 |
| Gift frequency/amount | Instrument Sans | 600 | 16 | 16 | 0 |
| Gift outcome | Fraunces | 420 | 25 | 28.75 | -.015em |
| Hero proof | JetBrains Mono | 500 | 11 | 14.3 |.12em |
| Section eyebrow | JetBrains Mono | 400 | 12 | 18 |.14em |
| Section h2 clamp upper endpoint | Fraunces | 420 | 64 | 66.56 | -.02em |
| Section h2 phone clamp upper endpoint | Fraunces | 420 | 46 | 47.84 | -.02em |
| Intro body | Instrument Sans | 400 | 17 | 27.2 | 0 |
| Pill action | Instrument Sans | 600 | 14.5 | 14.5 | 0 |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f3eee4",
  "paper": "#fffdf8",
  "ink": "#12131f",
  "accent": "#f2a33a",
  "muted": "#6c6878"
}
```

Recommended starting desktop gutter: 48px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Transparent Wellspring logo, Programs/Campaigns/Stories/Impact/About navigation, Donate pill and phone menu. |
| Hero / WsHero | Unverified | Unverified | Full-height dusk mountain village, headline, gift frequency/amount radio groups, per-gift impact explanation, campaign progress and proof labels. |
| Intro / WsIntro | Unverified | Unverified | Fourteen years. One village at a time: charity introduction and documentary imagery. |
| Programs / WsPrograms | Unverified | Unverified | Six ways a gift works: Solar light, Clean water, Schooling, Health posts, Livelihoods and Winter relief; accordion IDs wspr-p-0 through wspr-p-5 are panel relationships. |
| Money / WsMoney | Unverified | Unverified | Every dollar, accounted for: spending allocation and report action; wsmo-pl is an internal plate ID. |
| Campaigns / WsCampaigns | Unverified | Unverified | Open appeals, closing soon: four campaign cards with funding goals/progress and campaign-detail routes. |
| Story / WsStory | Unverified | Unverified | One home in Dhorpa, before and after: dusk homework, two-panel installation and three-lamp result narrative. |
| Impact / WsImpact | Unverified | Unverified | Three valleys, thirty-eight villages: geographic impact presentation and illustrative totals. |
| Field / WsField | Unverified | Unverified | What your gift looks like: documentary field imagery and outcomes. |
| Monthly / WsMonthly | Unverified | Unverified | A little, every month: Lamplighter, Wellkeeper and Schoolkeeper giving tiers; wsmn-own is an internal custom amount input ID. |
| Voices / WsVoices | Unverified | Unverified | Donors, partners, neighbours: testimonial/partner content. |
| Join / WsJoin | Unverified | Unverified | Not only money. Hands too: volunteer invitation and four upcoming event cards. |
| FAQ / WsFaq | Unverified | Unverified | Before you give: nine giving/receipt/cancellation/volunteer/company questions with wsfq-a-* answer IDs. |
| CTA / WsCta | Unverified | Unverified | Turn one light on: final gift invitation. |
| Footer / WsFooter | Unverified | Unverified | Sign-off, newsletter signup, contact/social and grouped programs/about/legal links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: first-light loader with Skip, dusk page transition, smooth scroll, staggered heading reveals, gift-linked illuminated home layers, magnetic/sweep pills, programme accordions, FAQ answer panels and testimonial structures. CSS includes prefers-reduced-motion guards. Intended behaviors and source timing are declarations; live execution and delivery were not verified. OPTIONAL RECOMMENDATION: keep static visible content while loader is disabled, make gift selection keyboard operable, and preserve all answers under reduced motion.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Custom hero uses desktop1440, tablet810 and phone390 variant data, with 100svh and min-heights660/860/700px respectively. Desktop copy left48/top138/width640; gift panel right48/bottom44/width392. Hero type80/64/42px and phone body14.5px. ws-wrap uses56px padding and clamp(1280px,92vw,1520px) max-width expression; phone-specific sections use18px. Additional width/height/hover queries are retained literally. OPTIONAL RECOMMENDATION: fit selectors in normal document flow on short screens and preserve paired frequency/amount labels.

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

Category: Nonprofits / Charity / fundraising foundation. Selection evidence: Official listing explicitly positions the template for charities, foundations and fundraising campaigns; home includes gift amounts, program/campaign/story CMS and impact reporting. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Direct custom component CSS/inline declarations in custom-declarations.json, with Google Fonts linked stylesheet saved in custom-fonts-public.css. Fraunces weight420 is source fallback, not rounded to400. Hero span80px/.98; phone42px/1.02; h2 clamp(40px,4.3vw,64px) and phone clamp(36px,10.4vw,46px) are represented by labelled upper endpoints, not rendered measurements. Base declarations precede media variants. Generic role extraction misses these custom components. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
