# Financial Advisor — website recreation specification

Preview: https://confident-skills-748945.framer.app/  
Creator: SoloFoundry  
Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Financial Advisor is a Wealthora fee-only advisory practice reference. Source tokens use pale off-white, almost-black, chartreuse, dark slate and stone. A retirement-planning hero pairs an oversized question with a family photograph and dark live-plan-style panel; service folders, sticky client questions, retirement story, process, transparent fees, advisor profiles, case studies, money notes, FAQ and review booking structure the practice. It differs from the banking product reference by explaining the planning relationship and fees, with concrete client scenarios and advisor people.

The templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- SOURCE DECLARED: numeric type rows derive from HTML/CSS declarations, not rendered measurements.
- SOURCE / OFFICIAL REFERENCE: official marketplace JPGs may include surrounding presentation frames; they are not live page elements.
- OPTIONAL RECOMMENDATION: single gutter/radius/gap values are recreation defaults; detailed component values and media alternatives remain in source-facts.json.
- SOURCE LIMITATION: home and stated secondary public source were inspected; backend behavior and interaction timing were not exercised.
- SOURCE LIMITATION: calculator output, retirement ages, fees, family counts, stories, credentials and assurances are sample template content; no financial advice, prediction accuracy, compliance, booking, client authentication or payment service is established.
- SOURCE DECLARED: eight CMS bridges supply outcomes, plans, FAQ, insights, stories, advisors, services and site data; hidden bridge rows are not visible page sections. Optional SoloFoundry Assistant is a separate demo/subscription capability.
- SOURCE DECLARED: public runtime explicitly links Schibsted Grotesk, Albert Sans, italic Newsreader and JetBrains Mono Google CSS. Supplemental faces are saved/appended for bundling; other SSR faces remain switchable variants.
- SOURCE DECLARED: hydrated WoLoader duration2.4s, pin700ms, open1300ms; sets CSS animation none and subtracts RAF gaps>120ms, so background waiting can prolong the overlay. Completion removes html.wld-go and writes sessionStorage wo-loaded=1. respects reduced-motion; no skip button found.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero / WoHero / h1 | Schibsted Grotesk | 500 | 80.63999999999999 | 79.02719999999998 | -.04em |
| Stack / WoStack / h2 | Schibsted Grotesk | 500 | 60.48 | 61.6896 | -.04em |
| Folders / WoFolders / h2 | Schibsted Grotesk | 500 | 63.36000000000001 | 64.6272 | -.04em |
| Zoom / WoZoom / h2 | Schibsted Grotesk | 500 | 63.36000000000001 | 64.6272 | -.04em |
| Zoom / WoZoom / h2 | Schibsted Grotesk | 500 | 63.36000000000001 | 64.6272 | -.04em |
| Steps / WoSteps / h2 | Schibsted Grotesk | 500 | 66.24 | 67.56479999999999 | -.04em |
| Fees / WoFees / h2 | Schibsted Grotesk | 500 | 66.24 | 67.56479999999999 | -.04em |
| Team / WoTeam / h2 | Schibsted Grotesk | 500 | 66.24 | 67.56479999999999 | -.04em |
| Cases / WoCases / h2 | Schibsted Grotesk | 500 | 57.6 | 58.752 | -.04em |
| Inward / WoInward / h2 | Schibsted Grotesk | 500 | 86.4 | 82.944 | -.04em |
| Notes / WoNotes / h2 | Schibsted Grotesk | 500 | 66.24 | 67.56479999999999 | -.04em |
| Faq / WoFaq / h2 | Schibsted Grotesk | 500 | 66.24 | 67.56479999999999 | -.04em |
| Book / WoBook / h2 | Schibsted Grotesk | 500 | 72.0 | 70.56 | -.04em |
| Hero body | Albert Sans | 400 | 17.28 | 27.648 | 0 |
| Sticky questions body | Albert Sans | 400 | 17 | 27.2 | 0 |
| Question panel body | Albert Sans | 400 | 16.5 | 26.4 | 0 |
| Service document list | Albert Sans | 400 | 15 | 21.75 | 0 |
| Dark retirement story copy | Albert Sans | 400 | 17 | 26.35 | 0 |
| Shared action | Albert Sans | 600 | 14 | 14 | -.005em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#f2f1ec",
  "paper": "#dcdad2",
  "ink": "#0f1115",
  "accent": "#c8f04a",
  "muted": "#7c7f86"
}
```

Recommended starting desktop gutter: 20px. Principal radius: 24px. Component gap: 24px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Header | Unverified | Unverified | Fixed announcement strip, Wealthora identity, services mega-panel, Fees/Stories/Insights/About, client login and Book a call; skip link #main. |
| Hero | Unverified | Unverified | Fee-only eyebrow, Will your money last as long as you do heading, family image, retirement-plan range controls/curve, Book review and See fees actions. |
| Tape | Unverified | Unverified | Trusted by 1,400 families metadata and repeating recognition/testimonial-style tape. |
| Stack | Unverified | Unverified | Three client questions in sticky/panel composition: saving enough, retirement age, tax. |
| Folders | Unverified | Unverified | Six advisory service folders/documents: financial planning, investments, tax, retirement, estate/family and insurance, each linked to service detail. |
| Zoom | Unverified | Unverified | Dark retirement-plan story with projection graphic under the source Zoom component. |
| Steps | Unverified | Unverified | Four-step advisory process: free review, written plan, put it to work and quarterly check-in; Start with step one action. |
| Fees | Unverified | Unverified | Fee comparison/calculator-style panel and three service-plan cards; sample fee values and scenarios. |
| Team | Unverified | Unverified | Advisor profile cards sourced from advisors CMS bridge. |
| Blinds | Unverified | Unverified | Large visual story/testimonial interval with animated shutter/blind-style source structure. |
| Cases | Unverified | Unverified | Featured client story plus related cases linking to story detail routes. |
| Inward | Unverified | Unverified | Why families stay / Fee-only. Fiduciary. Independent. statement with renewal, relationship, commissions and review counter tiles. SSR counts begin at zero; sample counters are source marketing content. |
| Notes | Unverified | Unverified | Money notes editorial cards with retirement/tax/investing/family topics. |
| Faq | Unverified | Unverified | Before you book questions, answer structures and Still deciding/Ask a question action. |
| Book | Unverified | Unverified | Your first plan review is on us copy and Pick a time card with selectable day/time labels and query-bearing booking link. |
| Footer | Unverified | Unverified | Newsletter signup, Wealthora signature, service/company/client/help/legal destinations, contact details; separate optional assistant follows. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

SOURCE DECLARED: custom styles declare opacity/translate reveals, sticky client panels, document-folder art, chart markers, FAQ controls, magnetic/button transitions, WoLoader first visit once per session (2.4s active RAF +700ms pin+1300ms open; background gaps are subtracted), WoPageTrans bar-chart transition and reduced-motion queries. Source contains range inputs and booking controls; calculations and backend operations are unverified. OPTIONAL RECOMMENDATION: keep a static readable route during reduced motion, expose chart assumptions as text, provide direct booking links, and skip the optional demo assistant unless configured.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. SOURCE DECLARED: Wrapper boundaries are 1200 and 810px. Custom component media queries additionally use 1199/1099/999/899/799/699/599/519/499/420/399px; these are preserved separately..wo-wrap uses 56px padding, 32px <=1099 and 20px <=699. Hero h1 is clamp(44px,5.6vw,92px) with.98 line-height; numeric role rows evaluate at1440px, yielding80.64px/79.0272px. Section headings have independent clamp expressions. OPTIONAL RECOMMENDATION: stack planning input controls before the chart, retain labels and assumptions, and show advisor/service/fee cards in reading order.

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

Category: Finance / fintech / Financial advisory firm. Selection evidence: Official listing explicitly addresses financial planners, wealth managers and fee-only advisory firms; preview includes advisory services, fee plans, advisor profiles, client stories and consultation booking. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Ordinary CSS/inline source, because generic typeDeclarations is empty. custom-type-declarations.json records source rules and inline variable defaults. --wo-font-d/b/m defaults name Schibsted Grotesk/Albert Sans/JetBrains Mono. Public script_main explicitly injects a Google stylesheet for these families plus italic Newsreader; the exact linked stylesheet was fetched, saved as runtime-font-public.css and appended to home/secondary CSS for bundling, with provenance in runtime-font-declarations.json. Native runtime loading still belongs to browser observations. Numeric clamp rows evaluate declared expressions at1440px; inline weight500 overrides CSS h2/h3 weight600 where present. No measured geometry is claimed. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
