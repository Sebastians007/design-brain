# Message responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Root CSS anchors are 810px and 1200px: phone through 809.98px, tablet 810–1199.98px, desktop 1200px+. Source Hero declares 100vh with 160px 16px 64px padding; phone changes bottom padding to 96px. Content sections declare 1128px maximum width and 96px 24px base padding, reduced to 80px 16px on phone. Preserve reading order and collapse cards; these are source declarations rather than rendered measurements.

Source observations: Source declares active/default use-case cards, mobile slideshow, indexed testimonial controls, monthly pricing variants, closed FAQ entries and initially transparent FAQ/FinalCTA transforms. These are static declarations, not verified transition durations, scroll triggers or live chat behavior. Recommendation: short opacity changes for selected content, explicit previous/next controls and a fully static reduced-motion view.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a cinematic teal/grain landscape hero, centered white headline and compact pill action. No prompt submission or external CTA was exercised. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
