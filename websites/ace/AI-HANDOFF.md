# Rebuild this look

Read `FRAME.md`, `design-tokens.json`, `RESPONSIVE-AND-MOTION.md`, and `FIDELITY-CHECKLIST.md`. Inspect `reference-frames.jpg` and the readable crops in `screenshots/`. This is an Ace design reference, not a generic AI SaaS style.

Build a quiet black landing page with Bespoke Serif headings, Inter medium body text, Besley prices and a restrained `#2BFFEA` cyan accent. Use the bundled fonts and noise texture. Desktop content max-width is 1136px, section padding 150px top / 100px bottom, card radius 20px, grid gap 8px. Preserve the roomy cards, low-anchored copy and small icons.

Keep this order: full-viewport centered hero, three benefits, three alternating workflow rows, six features, six reviews, three pricing tiers, seven centered FAQ rows, 800px final CTA, simple footer. Workflow artwork is sparse cyan illumination on a rounded dark tile grid. Do not add a hero orb or fill the cards with invented dashboards.

Use 1200px and 810px layout thresholds. Tablet grids have two columns; final benefit and pricing cards span both. Phone grids have one column, 16px shell gutters, and vertically stacked 500px workflow rows. Maintain legibility at 320px. Distinguish CSS-derived source rules from recommended phone typography and menu behavior.

Use semantic headings, native links, `details`/`summary`, visible focus, and reduced-motion styles. Every CTA must have a meaningful destination. The included recreation uses a native dialog with plan selection and a local deterministic workflow demonstration. Inputs stay local and render as text; no real agent work, integration, payment, or signup occurs.

Use supplied or verified business content. The recreation uses original substitute marketing prose, expressly illustrative reviews, and specimen plan content. Do not reuse example feedback as genuine testimonials or claim this implementation is certified or integrated.

The runnable reference implementation is in `recreation/`; open `index.html` directly, or serve the folder with `python3 -m http.server 8000`. `frame-showcase.html` previews the design system. Source images are reference evidence, never a substitute for live text/layout. Asset sources and measured geometry are recorded in the two JSON manifests.

Verify assets, anchor destinations, menu closing, FAQ disclosure, dialog close/focus return, plan label, blank-goal rejection, literal rendering of markup-like input, reset, reduced motion and viewport overflow. State actual verification limits; do not claim pixel-perfect or phone source fidelity without matching browser captures.
