# Agentic — paste this into the AI building the website

Recreate the Agentic reference as faithfully as practical from this complete folder. Source: https://agentic.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Use this identity: A white full-screen hero places a stacked oversized navigation at left, a short agency description at right, a QR block at top right and a gigantic orange AGENTIC wordmark along the bottom. A rotating diamond motif and fixed HOME/QR blocks continue through full-height portfolio scenes. The work cards use huge rounded inset panels, project title and metadata at left, and large mockup media at right. Team scenes, award rows and services build toward a black footer with another enormous orange wordmark.

Apply these constraints first:

- Hero menu uses Inter Display 700 at 80px/64px; its outer link wrapper has a misleading 12px style.
- The giant wordmark uses Inter Tight 900, measured near 273.45px at this desktop width. Fit it to width.
- Preserve the left-menu/right-description asymmetry and orange brand baseline.
- Projects are viewport-height scenes, inset 24px, with approximately 60px visual corner radii.
- Keep the rotating diamond, QR blocks, oversized team scenes and dark final scene.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.
