# Menorca — paste this into the AI building the website

Recreate the Menorca reference as faithfully as practical from this complete folder. Source: https://menorca.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Menorca gives a fashion shop the pace of a summer photo diary. A dark coastal portrait fills the opening screen while small white navigation rides across it. The large centered statement combines tightly tracked sans capitals with loose handwritten accents, making polished commerce feel casual. Transparent outlined pills sit beneath quiet supporting copy. Below, four pale product panels display isolated garments with tiny capsule labels. Long photographic collection chapters interrupt the merchandise rows, including a paired editorial spread. Black text, white surfaces, narrow gutters and an oversized closing wordmark keep the system restrained. The scenic surround in official promotional images belongs to the presentation, not the storefront.

Apply these constraints first:

- Keep the hero mixed-family typography: Inter Variable at 500 with Gloria Hallelujah inline accents; do not render the whole headline in script.
- Use a full-width darkened coastal image with centered white copy and outlined pill links; opening navigation overlays the photograph below a white promo strip.
- Preserve pale four-column merchandise panels at the desktop root layout, tight 10px horizontal gaps, small badges and compact product metadata.
- Preserve the exact alternation of merchandise grids and photographic collection chapters, ending with the white footer and very large wordmark.
- Exclude scenic promotional surrounds and screenshot framing from storefront UI; distinguish source declarations and screenshot controls from tested commerce behavior.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Ecommerce category context

Category: Ecommerce / Fashion. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
