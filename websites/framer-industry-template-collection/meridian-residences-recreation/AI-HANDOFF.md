# Meridian Residences — paste this into the AI building the website

Recreate the Meridian Residences Framer reference as faithfully as practical from this complete folder. Source: https://obedient-direction-881139.framer.app/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: Meridian Residences markets one slender luxury tower through a dark cinematic ascent. A serif wordmark and widely tracked Inter navigation sit above the city, a tower elevation and brass vertical floor rail. The hero heading contrasts upright and italic serif language with small dimensional metadata. Numbered chapters move from approach and statement to building, four residence types, amenities, neighbourhood, team and brochure invitation. Hairline brass rules, pale stone text and restrained small uppercase labels tie architectural photography and plans together. The source carries many custom components with native inline CSS, so Framer text-style extraction alone is incomplete. The official cover places the site on a textured presentation backdrop; that external backdrop is not a site section.

Apply these constraints first:

- SOURCE DECLARED: native cinematic headings use font-family Bodoni Moda, serif with optical-size variation settings. Framer navigation wordmark uses Bodoni Moda Variable. The only saved Bodoni @font-face declares Bodoni Moda Variable; native alias loading is unverified, so preserve the intended family and document an explicit alias if required.
- SOURCE DECLARED: hero native h1 is82px/.94 at400 with -.02em and opsz96/wght400. Main chapter headings vary by role (96,92,72px); residence names50px/1.04; invitation104px/.98. Do not normalize these into one heading size.
- SOURCE DECLARED: home starts The Ascent, then numbered01–08 chapters. Main navigation routes are /the-building, /the-ascent, /residences, /amenities, /neighbourhood and /register; no numbered chapter anchor IDs were found.
- SOURCE / OFFICIAL REFERENCE: retain dark night surfaces, pale stone serif typography and brass rail/rules with architectural photos. Any floor/area/price/status is template demonstration data, not verified current inventory.
- SOURCE DECLARED: native source contains blur/opacity/translate reveals, an initial curtain and reduced-motion CSS. Timing declarations are evidence, but actual sequence playback and floor dragging were not exercised. OPTIONAL: preserve readable static fallback and keyboard elevation selection.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Real estate / Single luxury development. Selection evidence: Official listing explicitly markets one luxury property development, apartment tower or condo launch. Public preview declares residences, floor plans, amenities, neighbourhood and register-interest routes; dynamic elevation and enquiry outcomes are untested. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Framer nav presets and native component inline CSS from saved source-public.html, complemented by custom-component-declarations.json. Native font-family is Bodoni Moda; numeric role rows intentionally point to its declared download family Bodoni Moda Variable while retaining alias detail. Font variation settings: headings opsz96/wght400, residence names opsz72/wght400, amenities opsz60/wght400; nav wordmark axes opsz24/wght400. Native supporting Inter weight300 is declared but saved Framer font faces list400/500/700, so weight300 may synthesize unless a suitable font is supplied. No browser measurement or runtime font-load proof is claimed. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
