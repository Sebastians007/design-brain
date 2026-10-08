# Message recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Preview: https://heymessage.framer.ai/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## AI product category context

Category: AI / Chatbot / support. Selection basis: The official listing explicitly includes AI companions and chatbots; the product presentation suits a conversational assistant launch. Read AI-PRODUCT-BLUEPRINT.md, secondary-declarations.json and DEMO-STATES.json. Preserve the source design first; optional recommendations do not establish implemented backend behavior. Real model execution, audio processing, generation, APIs, auth, payment and compliance were not tested.

Typography detail: Values come from base public CSS presets. The extractor role summary sometimes associates a responsive section heading override of 32px; config uses the base 36px rule. Host Grotesk normal/italic 400 and 700 and DM Sans normal/italic 400/500/700 faces are declared. Preserve italic slots rather than synthesizing an unrelated family. Inter normal/italic faces also appear in the public font declarations. Line-height em values are multiplied by the declared pixel size.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a cinematic teal/grain landscape hero, centered white headline and compact pill action. No prompt submission or external CTA was exercised. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
