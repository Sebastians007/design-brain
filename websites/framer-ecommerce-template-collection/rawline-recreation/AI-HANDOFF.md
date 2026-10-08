# RAWLINE — paste this into the AI building the website

Recreate the RAWLINE Framer reference as faithfully as practical from this complete folder. Source: https://rawline.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: RAWLINE turns a streetwear catalog into a loud editorial wall. Near-black surfaces hold warm cream monospaced capitals, compressed lines and sharp red interruptions. The hero crops three models against a rust-red backdrop, with a narrow product ticker and a solid red shopping block alongside. Tiny navigation, outlined hearts, fine borders and small sale flags keep the surrounding interface spare. Italic Source Serif 4 words soften selected headings without reducing their force. Collaboration tiles, isolated clothing imagery, mixed social portraits and solid testimonial panels vary the rhythm. Square edges, tight seams and brief utility copy maintain its raw, poster-like character.

Apply these constraints first:

- Keep the near-black, cream and red palette; preserve compact uppercase Azeret Mono headings with -0.05em tracking and 0.8em line-height.
- Use the declared center/cover crop for the three-model hero photograph and keep the slogan at the image bottom left.
- Preserve the desktop image/product split, red CTA block and separate tablet/mobile ticker structures.
- Keep drop photography, isolated product cards and mixed social-wall content; do not flatten everything into identical cards.
- Exclude promotional monitor bezels, phone devices, outer red backdrop and Framer/Shopify co-branding from site UI.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Ecommerce category context

Category: Ecommerce / Fashion. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
