# WAIS — paste this into the AI building the website

Recreate the WAIS Framer reference as faithfully as practical from this complete folder. Source: https://wais-theconfrence.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: WAIS uses an editorial conference identity: warm white pages, thin outlined pill links with circular arrow marks, large regular Host Grotesk titles and a narrow horizontal header. The hero deliberately puts short introductory copy and actions beside an oversized three-line title, then pairs an audience image with a wider stage image and date/venue captions. A long event introduction gives way to a charcoal speaker band with monochrome portrait cards. Two dated agenda columns, sponsors, three ticket tiers and questions lead into a closing invitation and restrained footer. Purple belongs to the mark and selected source treatments; broad imagery supplies much of the color. The monitor, wall frame and blurred background in marketplace artwork are presentation props.

Apply these constraints first:

- SOURCE DECLARED: Main typography is Host Grotesk weight 400; Inter is present for fallback and check glyphs. Preserve regular title weight rather than imposing a bold SaaS heading.
- SOURCE / OFFICIAL REFERENCE: asymmetric hero with three title lines, paired audience/stage photos, warm white canvas and dark speaker section are defining elements.
- SOURCE DECLARED: the source uses named sections, not addressable section fragment IDs. Navigation copy alone does not prove anchors. Actual links include /speakers/speaker-index, /agenda-cms/agenda-index, /venue and /contact.
- SOURCE DECLARED: use base CSS presets for numeric desktop roles; the extractor first match captures h2 55px, h3 30px, h4 25px and h5 21px media rules, whereas base CSS is 64px, 44px, 32px and 20px respectively.
- OPTIONAL RECOMMENDATION: gutter/radius/gap are recreation defaults except the 32px header content gutter. All coordinates are unmeasured; ticket fulfillment, schedule filters, CMS editing and form submissions remain untested.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Events / community / Conference / summit. Selection evidence: Official marketplace identifies a conference and event template with speakers, a two-day agenda, venue, sponsors and tickets; public preview source will constrain actual page structure. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: SOURCE DECLARED: HTML/CSS presets and inline overrides in wais-evidence-root. Numeric base roles were checked against media-free typePresetRules, with h1 tablet/phone rows explicitly labeled. linePx is em × declared font size. No browser-rendered geometry; font variation axes are normal, not an inferred variable-font axis. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
