# Charity Foundation responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Custom hero uses desktop1440, tablet810 and phone390 variant data, with 100svh and min-heights660/860/700px respectively. Desktop copy left48/top138/width640; gift panel right48/bottom44/width392. Hero type80/64/42px and phone body14.5px. ws-wrap uses56px padding and clamp(1280px,92vw,1520px) max-width expression; phone-specific sections use18px. Additional width/height/hover queries are retained literally. OPTIONAL RECOMMENDATION: fit selectors in normal document flow on short screens and preserve paired frequency/amount labels.

Source observations: SOURCE DECLARED: first-light loader with Skip, dusk page transition, smooth scroll, staggered heading reveals, gift-linked illuminated home layers, magnetic/sweep pills, programme accordions, FAQ answer panels and testimonial structures. CSS includes prefers-reduced-motion guards. Intended behaviors and source timing are declarations; live execution and delivery were not verified. OPTIONAL RECOMMENDATION: keep static visible content while loader is disabled, make gift selection keyboard operable, and preserve all answers under reduced motion.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
