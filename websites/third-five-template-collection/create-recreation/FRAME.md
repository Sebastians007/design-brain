# Create — website recreation specification

Preview: https://createstudio.framer.media/  
Creator: Tamas Bodo  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Create treats an agency homepage as a sequence of contrasting stages. Dense dark imagery opens the experience; pale information panels make the proposition easier to inspect. Oversized Figtree words carry the emotional register, while Fragment Mono captions, counters, time labels, and index marks supply a technical rhythm. Coral connects the wordmark, selected text, and directional actions without occupying every surface. Portraits feel playful rather than corporate, and benefit modules mix evidence with small visual experiments. The distinctive system depends on scale changes, ruled metadata, deliberate asymmetry, and alternating density. Preserve those relationships before adding decorative animation or inventing new effects.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Keep the actual Main order: Hero, Introduction, Featured Projects, Statistics, Services, How we work, Why Choose Us, Pricing, The Team, FAQ, Testimonial, Blog Teaser, Book a Call. Footer is outside Main.
- Use Figtree for the primary display and reading system and Fragment Mono for utility labels; Inter is declared in the source but is not the dominant visual identity. Preserve negative tracking and distinct weight roles.
- Build the hero as layered site content over its own portrait image. Never reproduce the marketplace monitor bezel, floral surround, product headline, or device mockup as page chrome.
- Maintain coral #ff6041 actions against alternating #141414 dark and #fafafa pale sections; retain quiet gray text and thin rules so color remains directional.
- Recreate the structural counterparts for desktop, tablet, and phone and keep links, video controls, pricing expansion, and FAQ keyboard accessible. Source variants and initial transforms do not establish verified runtime timing.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero wordmark; explicit source declaration, not rendered measurement | Figtree | 700 | 121.16380263496036 | 145.39656316195243 | -0.07em |
| Hero proposition; assumes 16px root for declared multiplier 2.7 | Figtree | 500 | 43.2 | 43.2 | -0.05em |
| Section headline; assumes 16px root for multiplier 6 | Figtree | 500 | 96 | 96 | -0.06em |
| Project title desktop; assumes 16px root for multiplier 4 | Figtree | 500 | 64 | 70.4 | -0.07em |
| Service headline; assumes 16px root for multiplier 7 | Figtree | 500 | 112 | 112 | -0.07em |
| Benefit card heading; assumes 16px root for multiplier 1.9 | Figtree | 500 | 30.4 | 33.44 | -0.06em |
| Reading copy; assumes 16px root for multiplier 1 | Figtree | 400 | 16 | 20.8 | -0.04em |
| Showreel caption; explicit 16px declaration | Figtree | 400 | 16 | 22.4 | -0.05em |
| Navigation and action label; assumes 16px root for multiplier 1 | Fragment Mono | 400 | 16 | 24 | -0.05em |
| Hero clock; explicit 13px declaration | Fragment Mono | 400 | 13 | 16.9 | -0.05em |
| Hero index; assumes 16px root for multiplier 0.64 | Fragment Mono | 400 | 10.24 | 12.288 | -0.04em |
| Pricing index desktop; assumes 16px root for multiplier 26 | Figtree | 700 | 416 | 416 | -0.09em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#141414",
  "paper": "#fafafa",
  "ink": "#FAFAFA",
  "accent": "#ff6041",
  "muted": "#5c6063",
  "inverseInk": "#141414"
}
```

Recommended starting desktop gutter: 20px. Principal radius: 8px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | Unverified | Unverified | Portrait background, indexed decorations, proposition, trust counter and logo ticker, oversized studio identity, location/time block, work/contact actions, showreel media. |
| Introduction | Unverified | Unverified | Five named Sticky Content groups stage a short sequence about listening, imagining, creating, and the resulting work. |
| Featured Projects | Unverified | Unverified | CMS project entries for Aurelis Beach Resort, Blackwell Motors, and Aspen 877, with type, year, imagery and case-study links; closing project count/date-range action. |
| Statistics | Unverified | Unverified | Dark proof section with a background image, stripe structures, four statistical widgets, and partner branding. |
| Services | Unverified | Unverified | Six numbered service modules with headings, descriptions, task lists, and desktop/tablet/phone variants. |
| How we work | Unverified | Unverified | Process framing, four numbered steps, operations contact, and a featured Blackwell Motors mini case study. |
| Why Choose Us | Unverified | Unverified | Light section header followed by a varied benefit grid: creative process, satisfaction evidence, custom work, pricing, continuity, and availability media. |
| Pricing | Unverified | Unverified | Three project plans; source contains opened and closed variants with price, comparison price, features, highlights, delivery time and contact action. |
| The Team | Unverified | Unverified | Four leadership portrait modules with names, roles, KPI overlays, social links and team-discovery content. |
| FAQ | Unverified | Unverified | Question accordion plus a project-manager contact block and book-call action. |
| Testimonial | Unverified | Unverified | Review summary, large featured spotlight, attributed testimonial CMS cards, and review action. |
| Blog Teaser | Unverified | Unverified | Whispers editorial introduction, five CMS article cards with author/date metadata, and more-articles link. |
| Book a Call | Unverified | Unverified | Full background media, tenure and delivery highlights, oversized invitation, founder portrait and statement, intro-call action. Footer follows outside Main. |
| Footer | Unverified | Unverified | Contact invitation, navigation, legal/social links and closing brand composition; outside Main in source. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Source structures: Intro Video/Loaded; masked repeated button text with Default/Hover/Press icon names; Ticker; Sticky Content 1–5; Rolling numbers; Animate From/To service layers; Cursor Trigger; benefit Phase 1–3 and pricing carousel names; pricing Open/Closed variants; FAQ Accordion; Book a Call Open Trigger and Fader layers. Hero image initially declares opacity 0.001 and translateY(40px) scale(1.3); team modules declare opacity 0 and translateY(120px). These are static source facts, not proof of final trigger logic, easing, duration, pointer response, or autoplay success. Recommendation: restrained reveal and focus feedback, optional controlled video playback, and a reduced-motion static presentation.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Source breakpoint declarations split desktop at 1200px+, tablet at 810–1199.98px, and phone below 810px. Benefit Cards declare nine columns desktop, six tablet, one phone; Book a Call declares sticky 100vh desktop, 80vh tablet, and natural height with 60px 20px padding on phone. Recommendation: preserve DOM reading order while collapsing hero subregions to proposition, identity, supporting text, actions, then showreel; reduce display sizes with clamps, protect portrait focal points, stack team cards, and replace hover-only details with tap/focus expansion. Treat spacing and crops here as authored recreation guidance, not measured live geometry.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.
