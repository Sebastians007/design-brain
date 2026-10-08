# WAIS responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Heading presets separately use <=817px with >=810px, <=809px, and 767/320/319px caption ranges. Hero padding changes from 120px 0 100px to 120px 0 60px on tablet and 100px 0 60px on phone. Source What is it height changes 1450px desktop, 1345px tablet, min-content phone; these are CSS declarations, not measured scroll distance. OPTIONAL: preserve the hero and agenda reading order; verify narrow widths before retaining fixed section/card heights.

Source observations: SOURCE DECLARED: three hero appear records initialize opacity 0.001 and translateY 150px, then spring to opacity 1/y 0 with duration 1s, bounce .2 and delays .5/1/1.3s. Split-character headings and Closed FAQ/mobile navigation variants are present. Speaker controls and runtime scroll text behavior were not exercised. OPTIONAL: restore readable static headings without JS, disable displacement under reduced motion, and expose accessible previous/next or expanded states only when implementing those controls.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
