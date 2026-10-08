# Aurelia Hotel responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 declares 80px desktop, 64px tablet and a phone preset in source; main content containers declare max-width:1180px and 24px horizontal padding. About uses desktop 160px vertical padding and tablet 120px 24px 64px. An additional type query has an unusual 80px lower/79px upper boundary; treat as literal source artifact, not a device recommendation. OPTIONAL RECOMMENDATION: stack booking fields in source label order and keep room metadata readable.

Source observations: SOURCE DECLARED: source includes Page Smooth Scroll, hero photo transform:scale(1.2), review navigation structures, Question Closed/Answer FAQ components and desktop/tablet/mobile booking variants. These declarations establish intended components, not runtime timing or successful submissions. OPTIONAL RECOMMENDATION: keep the booking request panel stable; use restrained image reveals, accessible FAQ buttons and static media under reduced motion. Preserve guest text when navigating reviews.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
