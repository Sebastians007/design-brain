# LuxeRealty — paste this into the AI building the website

Recreate the LuxeRealty Framer reference as faithfully as practical from this complete folder. Source: https://luxerealty.framer.website/. Read FRAME.md, evidence.json, design-tokens.json, RESPONSIVE-AND-MOTION.md, routes.json and assets-manifest.json before writing the site. Open frame-showcase.html, reference-frames.jpg and the original screenshots. If your environment cannot open HTML, the image and Markdown files contain the necessary evidence.

Evidence coverage: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Use this identity: LuxeRealty pairs an immersive opening property sequence with a conventional searchable inventory route. Architectural photographs fill the scene, while a tall white title card centers each named estate and location. A quiet translucent navigation carries a distinct BT Suave wordmark, Riviera Nights labels, search and a heart. Below the film-like opening, white property cards expose lifestyle, location, price, beds and baths. Purple agency sections and orange rules provide a stronger commercial voice farther down: agent portraits, oversized Luxe typography, expertise, partner marks, reach metrics and editorial cards lead into newsletter and contact forms. Official cover images show page UI inside monitor/laptop presentations; those surrounding devices and domestic backdrops belong to Marketplace artwork.

Apply these constraints first:

- SOURCE DECLARED: Riviera Nights Trial Regular is the page body/display face; Medium and Bold are separate family names. The navigation wordmark uses BT Suave Regular at a declared weight 500.
- SOURCE DECLARED: preserve home anchors #featured-properties, #about-luxe, #agent, #luxe-realty, #our-expertise, #global-reach, #blogs and #newsletter. The source repeats #global-reach in responsive branches; do not reproduce duplicate IDs in a new implementation.
- SOURCE DECLARED: the actual listings destination is /properties/listing, with Lifestyle_Checkbox and Location_Checkbox components plus a compact filter button. Official listing advertises advanced search and saved properties; execution/persistence are untested.
- SOURCE / OFFICIAL REFERENCE: hero photos sit behind centered white estate cards; purple lower agency sections and orange accents are source CSS, even though Marketplace hero covers concentrate on neutral photography.
- SOURCE DECLARED: numbers are CSS declarations, never browser rectangles. OPTIONAL RECOMMENDATION: global spacing defaults below are reconstruction choices; refer to exact section frame padding values in source-facts.json.

Create a semantic, responsive implementation in the existing project’s stack. Reuse local source fonts and media by consulting the manifest; do not approximate distinctive typography with a default system font. Build the entire page sequence in FRAME.md. Use data for repeatable work, services, team, pricing, FAQ and editorial components as applicable. Preserve media crop and relative placement. Do not ship a screenshot as the UI.

First complete an accurate static desktop composition. Then build responsive variants and meaningful menu/accordion/carousel/form states. Treat unverified source behavior and suggested phone values as implementation recommendations. Record every significant substitution or unresolved measurement. The caption fragment is optional and should only be integrated for a requested video, after the producer supplies its data.

Validate at 1363×936, then 1440, 1024, 810, 768 and 390px. Compare the hero, a work/media scene, a text-heavy section and footer against the package. Test keyboard access, reduced motion and broken local links. Report implementation files, checks performed and remaining fidelity gaps. Never report visual parity without a rendered comparison.

Also read source-declarations.json and COMPONENT-RECIPES.md for source CSS structure and template-specific component guidance.

## Industry context

Category: Real estate / Searchable property listings. Selection evidence: Official listing describes property listings, advanced search/filtering, categories/locations, agent profiles, saved properties and Framer CMS. Public source includes property routes and filter/search controls; execution and persistence are untested. Read SITE-BLUEPRINT.md, secondary-declarations.json and MOBILE-RECREATION.md. Preserve the source structure and visible controls. Optional recommendations do not establish implemented backend behavior.

Typography: Source CSS presets plus inline overrides, saved in luxerealty-evidence-root. Numeric values convert em/% line-height using declared font size. First-match extractor can show compact supporting copy 16px, while the base desktop paragraph preset is 14px/140%; the separate desktop/compact roles above come from typePresetRules. Wordmark is BT Suave Regular; no variable axes beyond normal are declared for the main families. Preserve nested overrides, italic faces, actual font file formats, variable axes and declared system-font fallbacks.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
