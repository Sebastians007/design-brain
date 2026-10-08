# Financial Advisor recreation kit

Give this entire folder or its ZIP to an AI and paste AI-HANDOFF.md. Keep assets/ and screenshots/ alongside the files.

The original four-file format:

- FRAME.md — visual, structural and implementation specification.
- frame-showcase.html — standalone visual guide with embedded fonts and source imagery.
- reference-frames.jpg — twelve traceable source crops.
- caption-skin.html — optional adaptation of the supplied caption fragment.

Extras: AI-HANDOFF.md, RESPONSIVE-AND-MOTION.md, FIDELITY-CHECKLIST.md, design-tokens.json, evidence.json, routes.json and assets-manifest.json. Original screenshots and selected source fonts/media are included.

Coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Preview: https://confident-skills-748945.framer.app/

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Sector context

Category: Finance / fintech / Financial advisory firm. Selection evidence: Official listing explicitly addresses financial planners, wealth managers and fee-only advisory firms; preview includes advisory services, fee plans, advisor profiles, client stories and consultation booking. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Ordinary CSS/inline source, because generic typeDeclarations is empty. custom-type-declarations.json records source rules and inline variable defaults. --wo-font-d/b/m defaults name Schibsted Grotesk/Albert Sans/JetBrains Mono. Public script_main explicitly injects a Google stylesheet for these families plus italic Newsreader; the exact linked stylesheet was fetched, saved as runtime-font-public.css and appended to home/secondary CSS for bundling, with provenance in runtime-font-declarations.json. Native runtime loading still belongs to browser observations. Numeric clamp rows evaluate declared expressions at1440px; inline weight500 overrides CSS h2/h3 weight600 where present. No measured geometry is claimed. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
