# Plinth Stack responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. No live phone rendering was verified.

Principal root bands: >=1440px desktop, 1200–1439.98px lap, 810–1199.98px tablet, <=809.98px phone. Component styles add a 640px split. Source Inference/Evals/Observability Wrap changes to column at tablet and phone; several phone Wrap rules use 20px gutters; Architecture/Security section padding changes from declared 115px to 60px. Gutter 32, radius 4 and gap 24 are overall recommendations, not universal measurements.

Source observations: Source hero word spans declare opacity 0.001, blur(4px) and translateY(14px); the CTA Wrap declares opacity 0 and translateY(16px). Architecture has named scroll markers, Built For tab structures, and FAQ has stateful component variants. No live reveal, copy, tab, or accordion behavior was tested. Recommended recreation: restrained reveals, visible reduced-motion content, keyboard-operable optional tab/accordion controls, and static numbered architecture on small screens.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed warm-paper hero, cobalt emphasis, technical statistics and three-column request/router/response console. A second screenshot at scrollY2808 shows a routing panel during its reveal state; the left copy is not visible in that capture. Template metrics and trust badges remain illustrative. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
