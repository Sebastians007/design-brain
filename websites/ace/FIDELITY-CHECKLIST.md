# Fidelity and acceptance checklist

## Reference language

- [x] Near-black ground with `#0F0F0F` panels and restrained cyan signals.
- [x] Bespoke Serif / Inter / Besley supplied locally.
- [x] 1136px content column, compact grid gaps, 20px panel corners.
- [x] Original section order and alternating workflow composition.
- [x] Spacious 400px feature/benefit cards with low-set copy.
- [x] Subtle repeated grain and sparse tile illumination.
- [x] Clear distinction between measured, CSS-derived and recommended values.
- [x] Original prose and explicitly illustrative reviews.

## Functional checks completed in JSDOM / static validation

- [x] Eight main sections and all local anchor targets resolve.
- [x] Six feature cards, seven native FAQ disclosures, three plan tiers.
- [x] Local images, scripts, stylesheet and fonts are present.
- [x] Mobile menu state, destination close and Escape close.
- [x] Plan action opens the demo with the selected plan label.
- [x] Close returns focus to its opener in the DOM test.
- [x] Whitespace-only goals are rejected.
- [x] Markup-like input renders as literal text, not executable HTML.
- [x] Example selection and reset behavior verified in additional tests.
- [x] Reduced-motion CSS and visible keyboard focus rules present.
- [x] JavaScript syntax and CSS parsing checks.

## Browser review still required

- [ ] Compare matching 1363×936 implementation and reference screenshots.
- [ ] Inspect 1024, 810, 809, 390, and 320px widths for horizontal overflow.
- [ ] Confirm fonts load and small-screen wrapping is comfortable.
- [ ] Confirm native dialog trapping, Escape, backdrop click, and focus return.
- [ ] Confirm FAQ activation with Enter/Space and touch.
- [ ] Inspect pulse density, grain contrast and reduced motion in a real browser.

The implementation has no browser render QA in this environment. Source desktop screenshots are evidence about the reference, not proof that the recreation visually matches it. The working page includes original substitute content and independently authored motion; it is not labeled pixel-perfect.
