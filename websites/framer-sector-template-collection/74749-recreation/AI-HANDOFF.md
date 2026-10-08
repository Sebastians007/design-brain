# Charity Foundation — paste this into the AI building the website

Recreate the Charity Foundation Framer reference as faithfully as practical from this complete folder. Source: https://interactive-channel-508354.framer.app/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: Charity Foundation uses a fictional Wellspring mountain-village organization. A full-height dusk scene carries an upper-left Fraunces sentence with italic amber lights and a lower-right glass gift selector. Instrument Sans handles actions/body; JetBrains Mono supplies numbered section labels and donation data. Cream editorial blocks alternate with night scenes, campaign progress, before/after storytelling, a village impact map and monthly-giving tiers. The huge Wellspring lettering and amber marketplace surround are presentation packaging.

Apply these constraints first:

- SOURCE DECLARED: numeric typography rows are CSS/inline declarations, not rendered measurements; linePx converts declared em/unitless line-height using declared size.
- OFFICIAL REFERENCE: marketplace imagery contains presentation framing and captions; these are not native page sections.
- OPTIONAL RECOMMENDATION: gutter/radius/gap values are construction defaults, not a universal measurement of the source.
- SOURCE LIMITATION: all organizations, metrics, people, impact outcomes and testimonials are illustrative template content. No donation processing, volunteer application delivery, newsletter delivery or donor CRM was verified.
- SOURCE DECLARED: actual custom type families come from a linked Google Fonts stylesheet; retain italic Fraunces and its optical/softness/wonk axes. Noto Serif/Inter/Fragment Mono faces also exist in Framer shell but are not the primary visual roles.
- SOURCE DECLARED: desktop gift defaults to $25 one-time in source; official JPG01 depicts $10 one-time and JPG02 $100 monthly. They are separate reference states, not contradictions.
- SOURCE DECLARED: donate source contains Make a gift, Gift/Details/Review step structure, allocation and giving FAQ. Marketplace says final step hands off to an owner payment link; no payment is taken inside template.
- SOURCE DECLARED: only #main is a page skip destination. wspr-p-*, wsmo-pl, wsmn-own and wsfq-a-* are internal component relationships, not invented home navigation anchors.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Sector context

Category: Nonprofits / Charity / fundraising foundation. Selection evidence: Official listing explicitly positions the template for charities, foundations and fundraising campaigns; home includes gift amounts, program/campaign/story CMS and impact reporting. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Direct custom component CSS/inline declarations in custom-declarations.json, with Google Fonts linked stylesheet saved in custom-fonts-public.css. Fraunces weight420 is source fallback, not rounded to400. Hero span80px/.98; phone42px/1.02; h2 clamp(40px,4.3vw,64px) and phone clamp(36px,10.4vw,46px) are represented by labelled upper endpoints, not rendered measurements. Base declarations precede media variants. Generic Framer role extraction misses these custom components. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
