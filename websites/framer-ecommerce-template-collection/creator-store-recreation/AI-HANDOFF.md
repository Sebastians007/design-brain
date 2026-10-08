# Creator Store — paste this into the AI building the website

Recreate the Creator Store Framer reference as faithfully as practical from this complete folder. Source: https://helpful-instance-487483.framer.app/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Warm walnut walls turn a digital catalogue into a small studio shop. The opening composition pairs an oversized cream display headline and orange underline with nine colourful packages on three dimensional shelves. Covers have spines, tops, barcodes, stamped status labels and small hanging price tags. A tilted, perforated paper receipt makes sales proof tangible. Pointed tag buttons repeat the shop language throughout. Cream aisles interrupt the dark room, violet and green bundle boards carry receipt arithmetic, and orange concentrates the free-guide section. Narrow monospaced labels, generous display type, dotted rules and a low-contrast footer wordmark establish the hierarchy.

Apply these constraints first:

- Preserve the desktop 3D shelf: three rows, nine varied package silhouettes, separate faces, plank depth and contact shadows; avoid a generic flat card grid.
- Keep walnut/cream section alternation and orange tag actions; product packaging colours are individual product tokens, not global surface colours.
- Use Gabarito for display, Manrope for prose and Azeret Mono for shop metadata; retain the actual custom CSS roles alongside the incomplete Framer preset extraction.
- Maintain perforated receipts, clipped price tags, barcodes, dashed leaders and readable ink-on-paper totals as recurring commerce elements.
- At phone width expose prices and Add actions in a scroll-snap product rail; preserve visible keyboard focus and honour reduced motion.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Ecommerce category context

Category: Ecommerce / Digital products. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

Creator Store uses custom component CSS: read custom-component-declarations.json. Actual display/body/metadata families are Gabarito, Manrope and Azeret Mono. Framer preset extraction alone misses these roles. Use cream text on dark sections and #17100C on cream receipts; retain source-specific product packaging colours.

## Typography evidence detail

sizePx values evaluate declared clamps at 1440px. Hero inline fallback weight 700 overrides stylesheet 800. Shared .ds-hd sets 400!important and uppercase. Receipt/eyebrow/footer line-height is not explicit: 14/14/28.8px are recommended recreation values; other line heights follow explicit CSS. Footer inline display fallback overrides class weight 800. This records declarations, not computed browser metrics. Aisle and package title inline display fallbacks likewise override class weight 800 with 700.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
