# Charity Foundation recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Preview: https://interactive-channel-508354.framer.app/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Sector context

Category: Nonprofits / Charity / fundraising foundation. Selection evidence: Official listing explicitly positions the template for charities, foundations and fundraising campaigns; home includes gift amounts, program/campaign/story CMS and impact reporting. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Direct custom component CSS/inline declarations in custom-declarations.json, with Google Fonts linked stylesheet saved in custom-fonts-public.css. Fraunces weight420 is source fallback, not rounded to400. Hero span80px/.98; phone42px/1.02; h2 clamp(40px,4.3vw,64px) and phone clamp(36px,10.4vw,46px) are represented by labelled upper endpoints, not rendered measurements. Base declarations precede media variants. Generic Framer role extraction misses these custom components. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
