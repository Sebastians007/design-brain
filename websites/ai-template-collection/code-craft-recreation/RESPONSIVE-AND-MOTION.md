# Code-Craft responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root anchors are 1200 and 810px; tablet spans 810–1199.98, phone <=809.98. Hero container declares 168px 88px 72px / 148px 40px 64px / 120px 20px 48px padding. Hero mockup aspect ratios declare 1.948 / 1.3887 / .3761. Bento declares 3 columns, 2 columns, then flex; integration stacks on tablet and phone. RECOMMENDATION: preserve content order and keep code panels independently scrollable. Values are CSS declarations, not rendered measurements.

Source observations: SOURCE DECLARED: hero glow layers, logo ticker, mobile drawer, monthly pricing variant and FAQ structures exist in public HTML/CSS. Official listing describes WebGL pixels, word reveals, scroll fades, hover lifts, reduced-motion support and off-screen pauses; those are author claims, not exercised runtime results. RECOMMENDATION: keep a static editor poster and visible headings if animations fail; use short hover transitions and reduced-motion fallbacks.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed black/lime heading hierarchy, a prompt/editor frame and stack chips. Code snippets and compliance labels are demo/template content, not proof of generation, tests or certification. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
