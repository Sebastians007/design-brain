# Essentia — paste this into the AI building the website

Recreate the Essentia Framer reference as faithfully as practical from this complete folder. Source: https://essentia.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Essentia treats one skincare jar as the visual center of a long editorial purchase story. Warm ivory surrounds charcoal olive typography, while pale sage supplies scientific and social proof surfaces. The opening layers a reflective jar above an upward-facing hand, with a nearly page-wide brand word behind both. Compact customer portraits and stars sit under a large, tightly tracked headline. Rounded corners remain modest; generous empty areas and viewport-height story panels create the luxury impression. Later, portrait cutouts, close skin crops, ingredient rows, and a sage bento contrast with the orderly four-image gallery and restrained two-size purchase controls.

Apply these constraints first:

- Keep a single-product narrative with purchase at /#ordernow; do not introduce an unsupported catalog grid.
- Preserve isolated jar and hand layers: product image contain/center, hand contain/center bottom; no arbitrary photo crop in hero.
- Use medium Geist with negative tracking and the declared display/body hierarchy; do not infer variable font weight from font-weight alone.
- Preserve source home order, including scientific bento, reviews, purchase section, FAQ, social strip, journal, and footer.
- Treat sticky story, animation triggers, cart, inventory, and checkout as declarations or recommendations until runtime verified.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Ecommerce category context

Category: Ecommerce / Beauty. Read COMMERCE-BLUEPRINT.md, catalog-and-product-declarations.json and COMMERCE-STATES.json for the source-specific purchase structure and optional implementation additions. Preserve the visible design before adding functionality. Secondary route declarations are not rendered screenshots. Real inventory, cart requests, checkout, payment and fulfillment were not tested.

## Typography evidence detail

Typography sizes and line-height come from public CSS; inspect nested overrides and breakpoint alternatives.
Read design-tokens.json type.sourceRoleDetails for nested and responsive role overrides. CSS presets and fitted/clamp values are declarations or evaluated starting values, not measured browser rectangles.
