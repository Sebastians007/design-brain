# Vertical — paste this into the AI building the website

Recreate the Vertical Framer reference as faithfully as practical from this complete folder. Source: https://vertical.framer.media/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

Use this identity: Vertical turns an artist portfolio into a sequence of editorial spreads. Acid green interrupts near-black, while pale gray creates quieter reading intervals. Heavy Inter letters occupy architectural space: the hero divides its name into three offset fragments rather than a conventional centered title. Small IBM Plex Mono indices, phase labels, rules, and catalog details establish a technical counterpoint. Portraits and experimental imagery fill hard-edged panels, with text layered against deliberate negative space. Repeated split compositions, abrupt color changes, and enormous headlines create continuity across varied work. The result feels like an artist's publication translated into a dense, scrolling digital exhibition.

Apply these constraints first:

- Preserve the actual hero's VER / TI / CAL fragment composition, portrait layer, three-line message, four phase columns, and lower skill list; promotional alternative logos are optional examples.
- Use Inter 700 with tight negative tracking for major display text; use IBM Plex Mono 400 for technical captions. Figtree and Fragment Mono belong to the Get Template promotion, not the main editorial voice.
- Keep sharp, full-width panel transitions between #050609, #81ff28, #d9d9d9, #f2f2f2 and white; the rounded device frame and smoky surround in official images are promotional presentation graphics.
- Retain the twelve named Main sections in source order. The Featured Study includes three small thumbnails plus separate Image Top and Image Bottom regions, even though its promotional still looks like one continuous portrait.
- Treat typography values as source declarations only. Hero fragment 409.1435px and gallery scale transforms are fitted or initial-state values, not rendered geometry or verified animation measurements.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.
