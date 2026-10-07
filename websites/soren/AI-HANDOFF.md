# Copy this instruction to your coding AI

Recreate the visual design of the attached **Soren editorial portfolio reference package** with high fidelity. Build a functional, responsive page in the stack already used by the project; if no stack exists, prefer semantic HTML, CSS, and a small amount of JavaScript. Treat this as a visual reconstruction exercise. Use the user's identity and content when supplied. Do not invent extra sections or turn it into a SaaS landing page.

First read `FRAME.md`, `design-tokens.json`, `RESPONSIVE-AND-MOTION.md`, and `FIDELITY-CHECKLIST.md`. Inspect `reference-frames.jpg` and `screenshots/00-full-page-desktop.jpg`. Use individual screenshots for readable detail. `frame-showcase.html` is a specimen guide, not the original source. `caption-skin.html` is only for video captions and must not be inserted into the website.

Use the bundled Halibut Variable font at weight 20 for the immense title and contact address, Switzer for body/headings, and Chivo Mono for metadata. Wait for fonts before fitting the title. Use actual DOM text with a decorative canvas layer for optional particles; never replace the page with a screenshot or screenshot background. Fit the title to one line in its content width without stretching glyphs.

Keep the source order: hero, full-width monochrome animated texture, three stacked project presentations, black biography/services/gallery, four process rows, gray testimonial band, experience rows, large serif contact panel, sparse footer. Main desktop gutters are 96px and max width is 1600px. The project images are near 4:3, with 16px horizontal-track gaps and a visible next-image sliver. Project descriptions are centered at 580px maximum width. Most desktop section padding is 160px; hero vertical padding is 120px.

Use square image/panel corners, fine rules, 10px accent squares, gray-green pill tags, and very restrained red-orange accents. Preserve the black section and the gallery's varied image heights. Avoid decorative shadows, excessive rounding, icon grids, stock dashboard widgets, and generic glow effects.

Read `assets-manifest.json`: bundled image pairs, photos, avatars, and fonts have local paths and provenance. Prefer local assets for the reference exercise. Replace them only when the user requests new content or production rights require alternatives. Replace testimonial text and contact details with supplied or clearly marked example content. Do not make unsupported business claims.

Implement semantic anchor navigation, a working local-time display, project-image controls, accessible email copying, and restrained link rollover. For particles and ASCII use the recommended algorithms in the motion guide, clearly acknowledging that exact original algorithm parameters were not recovered. Preserve static resting appearance and reduced-motion behavior. Do not claim exact native motion fidelity from screenshots.

Responsive values are CSS-derived: desktop >=1200px, tablet 810–1199px, phone <=809px. Gutters 96/64/40px; standard vertical section padding 160/112/80px. Stack process and contact columns on phone. Reproduce the declared tablet/phone structures described in the responsive guide. Test at 1363×936, 1024×768, 810×1080, 390×844, and 320×700. The package contains desktop source screenshots only, so report small-screen visual verification against your own implementation separately.

Build in passes: (1) fonts, palette, section order, large boxes; (2) exact desktop spacing and type; (3) responsive layout; (4) interactions and reduced motion; (5) compare screenshots and correct differences. Resolve visual mismatches in this order: font/glyph shape, headline fit, gutters, section heights, media crop, text density, rule/tag details, then motion.

Before finishing, use `FIDELITY-CHECKLIST.md`. Report what you built, viewports tested, interactions tested, and any remaining substitutions. Provide the actual source files and a runnable preview. Do not label the work pixel-perfect unless you have compared matching viewports and can show the evidence.

## Minimum attachments

For an AI that accepts only a few files, attach this instruction, `FRAME.md`, and `reference-frames.jpg`. For strongest fidelity, give it the entire ZIP so it also has fonts, imagery, exact tokens, full-size captures, and validation criteria. If the AI cannot read images or open the ZIP, extract the files first; a text-only prompt cannot communicate the visual evidence equally well.
