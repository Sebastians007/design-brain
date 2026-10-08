# Marginalia — paste this into the AI building the website

Recreate the Marginalia Framer reference as faithfully as practical from this complete folder. Source: https://appreciative-notes-865583.framer.app/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: Marginalia treats the website as a quarterly issue. A tiny monospaced dateline and ruled masthead open a warm paper canvas. The main cover pairs an enormous lightweight Literata title with a coloured issue numeral, an editorial introduction, linked contents rows and a documentary photograph. The rest of the home interleaves archived covers, story grids, a full-image cover story, lists, editor correspondence and contributor portraits with oversized moving type. Red-orange accents identify the current issue and subscription actions. Theme controls offer Paper and Ink. The official artwork also shows membership pricing, while the public home has podcast, events and membership destinations. Preserve the publication hierarchy rather than converting it to a generic article feed.

Apply these constraints first:

- SOURCE DECLARED: typography comes from public HTML/CSS and inline variable axes, not rendered measurements. Numeric weight is the CSS font-weight declaration; explicit wght axis can differ and must also be preserved.
- OFFICIAL REFERENCE: use marketplace artwork as design evidence; promotional borders, inset layouts and sales captions are not native site sections.
- SOURCE DECLARED: root boundaries are1200px/768px. Named content, actual IDs and public route declarations are recorded without inventing anchors.
- OPTIONAL RECOMMENDATION: radius/gap are specimen defaults; use per-component geometry from source-facts.json. Controls and backend results are untested.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Publishing / Editorial magazine. Selection evidence: Official listing identifies an issue-based magazine with per-issue covers, editor letters, story archives and contributors. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Public source HTML/CSS and inline declarations. Base preset rows are not computed browser styles; keep media alternatives in source-facts.json. linePx converts declared em by sizePx. Variable axes are distinct from font-weight; Literata/Newsreader optical-size and weight settings must survive reconstruction. Reference images inspected independently. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
