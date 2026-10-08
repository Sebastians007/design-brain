# Foodly — paste this into the AI building the website

Recreate the Foodly Framer reference as faithfully as practical from this complete folder. Source: https://foodly.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: Foodly is a cheerful neighborhood restaurant reference with a cream canvas, deep green navigation, orange delivery ticker and golden primary buttons. Calistoga gives the headline its distinctive broad serif silhouette; Karla carries conversational body copy, while General Sans supports menu titles and prices. A split hero pairs customer portraits and an invitation with a large food photograph and thumbnail strip. Story, metrics, promotional banner, featured dishes, categorized menus, gallery, table-request form, reviews and contact details create the full restaurant journey. The green illustrated marketplace surround is presentation packaging.

Apply these constraints first:

- SOURCE DECLARED: numeric typography rows are CSS or inline declarations, with em and percentage line heights converted using declared font size; they are not rendered measurements.
- SOURCE / OFFICIAL REFERENCE: marketplace imagery is reference artwork; surrounding laptop, room scene or illustrated presentation frame is not part of the live page.
- OPTIONAL RECOMMENDATION: the single gutter/radius/gap values below are construction defaults for the recreation. Source frame declarations contain component-specific values and responsive alternatives.
- SOURCE LIMITATION: source HTML, CSS, route declarations and official JPGs establish the design reference; booking requests, live availability, payment, delivery and CMS editing were not exercised.
- SOURCE DECLARED: preserve Calistoga, Karla and General Sans main roles. Bricolage Grotesque appears in metrics; Inter, Satoshi and Plus Jakarta Sans also have source font faces. CSS role variation axes are normal where specified; no custom numerical axis values were found.
- SOURCE DECLARED: About and Menu navigation use #about and #services; reservation uses /reservation. Root source has capitalized Reservation ID. The reservation secondary page is saved.
- SOURCE LIMITATION: HTML contains stale hidden or alternate component text about veterinary care and off-theme frame names. This does not prove those strings are visible. Audit active variants before adopting content. Terms of Service currently resolves to /privacy-policy.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Hospitality / Restaurant / cafe. Selection evidence: Official Marketplace identifies restaurants and cafes, categorized CMS menu items and table reservations; public preview contains culinary menu and reservation content. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public preview HTML/CSS presets and inline overrides in foodly-evidence-root; representative role paths and exact custom-property values recorded below. linePx converts declared em/percentage values using declared size. Source font-face weight/style details and all presets remain in source-facts.json. Calistoga h2 desktop base is 48px despite first-match tablet extraction at 32px; typePresetRules confirms base/media order. Bricolage Grotesque metrics declare 48px at 200 weight and 88% line height. Role axes declare normal, not a custom axis tuple. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
