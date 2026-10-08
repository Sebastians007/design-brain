# A reliable recreation workflow

The package is most useful when the implementing AI compares its output with the evidence throughout the build. Use the following order to prevent small styling choices from hiding larger composition errors.

## 1. Establish the reference

Select one template. Read its measured viewport and inspection coverage in `evidence.json` and `FRAME.md`. List the inspected routes, required fonts, essential imagery, and unresolved states. Record the implementation viewport so comparisons use the same dimensions. A source screenshot taken partway through a scroll may show sticky navigation or an entrance-animation state; check its documented capture context.

## 2. Match the page silhouette

Build section order, broad surface colors, column structure, dominant media blocks, and vertical rhythm. Compare the full page at reduced scale. If the large shapes differ, fix those before adjusting button padding or icon offsets.

## 3. Match typography before fine spacing

Load the bundled fonts and await font readiness before measuring. Match actual rendered text roles, weights, tracking, line height, and line breaks. A different font can invalidate every subsequent width and spacing decision. Use natural document flow. Screenshot coordinates describe the captured result; they are not a reason to absolutely position the page.

## 4. Match components and image crops

Check gutters, grid gaps, media ratios, object positioning, borders, corner radii, labels, controls, and metadata alignment. Preserve distinctive component structures. Use original specimen prose of similar length so the intended line wrapping survives. Match image crops deliberately rather than assuming every image is centered.

## 5. Add documented behavior

Implement inspected navigation and interaction states. Use the package's responsive declarations where available, then test rendered phone/tablet layouts. Label any independently selected motion timing or easing. Reduced motion, keyboard focus, and readable contrast belong in the finished implementation. Do not claim a preview's untested form, authentication flow, or backend works merely because the visual controls exist.

## 6. Run two comparison passes

Use side-by-side screenshots for composition and a transparent overlay for alignment at the reference viewport. Fix the largest visible deviations first. Run `FIDELITY-CHECKLIST.md` after the visual pass, including responsive and functional checks. When reporting results, distinguish a visual match, an approximate algorithm, an unavailable asset, and an unverified state.

## Optional additions

These additions improve the handoff without changing the reference's visual design:

- Keep content in a small route/CMS data model rather than duplicating component markup.
- Preload only the critical display font, and give media explicit dimensions to limit layout shifts.
- Add loading and error states for real integrations once their requirements are known.
- Save comparison screenshots at the reference viewport and at the chosen phone/tablet widths alongside the implementation.

Use each package's own recommendations where they are more specific. A polished implementation still needs visual comparison; no prose prompt alone guarantees a perfect match.
