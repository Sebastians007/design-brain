# Kora — paste this into the AI building the website

Recreate the Kora Framer reference as faithfully as practical from this complete folder. Source: https://kora.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Kora pairs unusually soft business imagery with disciplined consulting information. A translucent orange flower against cool blue fills a rounded hero, while a floating ivory navigation capsule and a separate dark booking pill sit above it. Mint dots, overlapping circular portraits, partner logotypes, and a compact case-study tile ground the scene. Warm ivory surfaces carry tightly tracked Manrope headings, numbered service modules, and compact qualification copy. The large mint team enclosure and charcoal pricing enclosure punctuate a long pale page. Glassy testimonial and contact panels contrast with crisp metric grids. Preserve the supplied Kora symbol and client artwork as custom assets; ordinary typed logos lose its identity.

Apply these constraints first:

- SOURCE DECLARED: body is Manrope 600; display uses Manrope Variable with CSS font-weight 400 plus wght 585 or 500. Do not substitute a generic geometric font for Kora artwork.
- SOURCE / REFERENCE: retain rounded flower hero, floating navigation capsule, separate booking pill, lower trust strip and compact case-study tile. The monitor, phone shell, promotional backdrop, and LaunchNow watermark are marketplace framing, not page UI.
- SOURCE DECLARED: preserve the complete home reading sequence through footer. Scroll Space is a transition spacer, not a content section; Benefits belongs within How we work.
- SOURCE DECLARED: nested hero spans start blurred and nearly transparent; price number-flow and its measuring span declare Manrope 600 at 60px/105%, overriding surrounding 13px prefix/suffix. Type rows are CSS declarations, not rendered measurements.
- RECOMMENDATION: gutter 60, radius 40 and gap 30 are recreation defaults informed by source values, not universal measurements. On charcoal sections switch text to pale paper; ink #292929 is for the selected pale canvas.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Services category context

Category: Services / Consulting. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
