# FF Shop — paste this into the AI building the website

Recreate the FF Shop Framer reference as faithfully as practical from this complete folder. Source: https://ff-shop.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: FF Shop presents Réduce as a furniture gallery organized by an architectural rule system. A compact menu, centered wordmark and bag count sit above an asymmetric hero: a narrow category rail beside a tall photograph of a black chair in dry grass. Warm gray surfaces, black hairlines and tightly spaced Uncut Sans make the interface feel catalogued. Isolated chairs, stone tables and lamps occupy square product media, while occasional environmental crops interrupt the grid. Large centered brand prose, a stone-object launch feature and dated editorial cards expand the commerce story. Device shells and stone display plinths belong to promotional photography, outside the interface.

Apply these constraints first:

- Preserve Uncut Sans Semibold with declared ss05 feature; CSS weight 400 is intentional despite the family name.
- Build flat edge-to-edge cells with black hairline divisions, square media and internal 30px padding; avoid generic floating cards.
- Keep the desktop hero category rail at one grid column and its furniture photograph at two, with a viewport-height composition.
- Retain product title/price hierarchy and the environmental Mood cell within the furniture grid; do not replace furniture with generic stock imagery.
- Preserve homepage editorial order and exclude photographed computers, phone frames and stone plinths from page UI.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Ecommerce category context

Category: Ecommerce / Furniture. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
