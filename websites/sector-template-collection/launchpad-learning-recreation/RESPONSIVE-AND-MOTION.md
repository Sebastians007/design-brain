# Launchpad Learning responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. h1 base 63px, tablet 60px, phone 40px; h2 base/tablet 48px, phone 36px. Hero padding is 150px 30px 0, tablet 150px 20px 0. Curriculum is 125px 30px on desktop and 75px 20px on phone. Instructor desktop gap is 100px. OPTIONAL RECOMMENDATION: preserve module order, course-inclusion hierarchy and readable price/CTA when stacking.

Source observations: SOURCE DECLARED: Lenis Smooth Scroll component, appear-animation source, expandable Closed curriculum components, video wrapper and phone-menu variants are present. Source records intended structures rather than exercised timing or interaction. OPTIONAL RECOMMENDATION: support reduced motion, open modules with semantic buttons and aria-expanded, and preserve content without animation. Do not auto-play instructor media with sound.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
