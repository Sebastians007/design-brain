# Arpeggio — paste this into the AI building the website

Recreate the Arpeggio Framer reference as faithfully as practical from this complete folder. Source: https://arpeggio.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Use this identity: The hero is a full-bleed cyan and blue portrait with smoke, orange navigation details and an enormous orange Arpeggio wordmark across the lower edge. White cross marks provide a repeated registration motif. The introductory white sans headline contrasts with a smaller serif aside. Full-height project promos and paired scrolling images follow; later sections transition through a dark services stage into a white subscription/pricing story. Match the image crops, full-viewport pacing and bold brand graphics first.

Apply these constraints first:

- Use the actual cyan portrait and orange brand shape; do not replace the hero with a flat cyan fill.
- Hero wordmark is vector-like artwork. Do not infer its font from surrounding Inter Display text.
- Retain 40px media gutters, full-height project promos and alternating black/white stages.
- Use Inter Display for most text and Playfair Display for the limited serif accent.
- The hero uses fitted SVG text: inner spans declare 45.6591px, while the outer H1 declares 27.2194px. Match the fitted composition, not the outer wrapper.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.
