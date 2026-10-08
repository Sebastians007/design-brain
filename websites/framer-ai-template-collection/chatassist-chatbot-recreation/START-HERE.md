# Chatassist Chatbot recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Preview: https://aichatbott.framer.website/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## AI product category context

Category: AI / Chatbot / support. Selection basis: The official listing positions ChatAssist for customer-service automation, conversational AI and SaaS support products, with integrations, support features and four pricing tiers. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: All numeric roles are base public CSS declarations, not rendered measurements; em/percentage line heights are converted using their own declared pixel sizes. Geist normal 500/700 faces, Satoshi normal and italic 400/500/700/900 faces and Inter normal/italic support faces are declared. Preserve italic options and the explicit normal variation-axis values. Public GET /pricing was inspected separately; its declaration-only evidence excludes sample copy.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a purple-gradient hero, large chat-product artwork and a hamburger header at 1363px. The principal upper anchor is 1440px, so this capture uses the source variant below that boundary; it is not proof of the >=1440px desktop header. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
