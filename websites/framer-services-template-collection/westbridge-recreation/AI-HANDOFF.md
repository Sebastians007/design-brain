# Westbridge — paste this into the AI building the website

Recreate the Westbridge Framer reference as faithfully as practical from this complete folder. Source: https://westbridge.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Westbridge pairs a cinematic executive portrait with quiet editorial typography. The photographed subject sits toward the right, while a report pill, compact overview and pale contact button occupy the left. A large two-tone serif statement anchors the lower image. Below, off-white and light-gray fields alternate with dark sections; small sans-serif labels introduce thin serif headings, image-led service links, oversized figures and an approach presentation. Arrow suffixes, modest corners and broad margins keep the tone precise. The distinctive effect depends on image crop, restrained contrast and light-weight Sentient letterforms. The laptop and phone surrounding the official images are promotional staging, excluded from the interface.

Apply these constraints first:

- Preserve the declared homepage order: hero, welcome, expertise, approach, testimonial, insights, footer; do not invent a standalone case-study grid on this home page.
- Use Sentient 300 for the observed editorial display roles and TASA Orbiter for body/navigation; loaded font families do not imply visible roles.
- Reproduce hero nested-span foreground overrides: #f7f7f7 primary text and #a09c97 secondary text, rather than inheriting the dark h1 parent token.
- Use the portrait as image media with lateral and bottom gradients. The source exposes no video element; a testimonial Play affordance alone does not verify playback.
- Exclude marketplace device frames and template purchase promotion from the consulting-site recreation; retain functional service/contact routes with visible focus states.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Services category context

Category: Services / Consulting. Read SERVICE-BLUEPRINT.md for the intended visitor decision, content records and recommended conversion behavior. Its additions are optional implementation recommendations, not proof that the preview implements them. Preserve the source design before adding new sections or controls.
