# VoxaAI — paste this into the AI building the website

Recreate the VoxaAI Framer reference as faithfully as practical from this complete folder. Source: https://voxa.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Use this identity: VoxaAI presents voice automation with the calm clarity of a business tool. Its narrow charcoal navigation floats over an otherwise white page, carrying a powder-blue emblem and a contrasting white demo button. A centered headline leads to a compact role selector and transcript-like preview. Pale blue textured feature scenes frame native-looking language controls, CRM diagrams and message cards. The commercial rhythm alternates explanatory modules, use cases, pricing, customer quotes and practical questions. Small rectangular buttons, quiet borders and a restrained Inter hierarchy keep the system approachable. Decorative partner names use several distinct display faces; preserve their individuality rather than applying the body font everywhere.

Apply these constraints first:

- SOURCE DECLARED: Inter is the primary page face. Additional families belong to partner logotypes and decorative marks, not the hero.
- SOURCE / OFFICIAL REFERENCE: maintain white canvas, charcoal floating navigation and powder-blue highlights; the grainy blue marketplace backdrop and tilted page framing are presentation artwork.
- SOURCE DECLARED: preserve all home sections through footer, including the in-hero role preview and trust strip; pricing is a home anchor, not a separate pricing page.
- SOURCE DECLARED: type roles below come from HTML/CSS declarations; linePx converts em using the declared size. They are not browser-rendered measurements.
- OPTIONAL RECOMMENDATION: spacing defaults are recreation choices. Playback, agent switching, billing updates, FAQ transitions, forms and actual voice service are untested.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## AI product category context

Category: AI / Voice / meetings. Selection basis: Explicit Voice AI SaaS positioning, role-based agent previews, language controls and call-centered use cases in a light commercial layout. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public source HTML and CSS presets with inline overrides, saved in voxaai-evidence-root. Inter line heights converted from em; variable-dependent section heading sizes excluded from numeric rows. Desktop h4 preset declares 36px and h5 28px; extracted first-match samples can capture 32px/23px media declarations instead, so these numeric desktop roles were checked against typePresetRules.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the three-agent demo card, typed transcript and waveform presentation. Clicking the Yearly label did not establish billing recalculation: the Growth label remained $49 /month, and the pricing screenshot still showed the left-positioned toggle. No voice service or microphone was tested. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
