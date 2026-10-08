# LuxeRealty recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Preview: https://luxerealty.framer.website/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Real estate / Searchable property listings. Selection evidence: Official listing describes property listings, advanced search/filtering, categories/locations, agent profiles, saved properties and CMS. Public source includes property routes and filter/search controls; execution and persistence are untested. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source CSS presets plus inline overrides, saved in luxerealty-evidence-root. Numeric values convert em/% line-height using declared font size. First-match extractor can show compact supporting copy 16px, while the base desktop paragraph preset is 14px/140%; the separate desktop/compact roles above come from typePresetRules. Wordmark is BT Suave Regular; no variable axes beyond normal are declared for the main families. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
