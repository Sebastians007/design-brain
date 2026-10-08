# VoxaAI recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Preview: https://voxa.framer.website/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## AI product category context

Category: AI / Voice / meetings. Selection basis: Explicit Voice AI SaaS positioning, role-based agent previews, language controls and call-centered use cases in a light commercial layout. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Public source HTML and CSS presets with inline overrides, saved in voxaai-evidence-root. Inter line heights converted from em; variable-dependent section heading sizes excluded from numeric rows. Desktop h4 preset declares 36px and h5 28px; extracted first-match samples can capture 32px/23px media declarations instead, so these numeric desktop roles were checked against typePresetRules.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the three-agent demo card, typed transcript and waveform presentation. Clicking the Yearly label did not establish billing recalculation: the Growth label remained $49 /month, and the pricing screenshot still showed the left-positioned toggle. No voice service or microphone was tested. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
