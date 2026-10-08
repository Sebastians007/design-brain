# Renovation responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Hero padding changes from 140px 40px 100px to 120px 18px 80px; service sections from 100px 40px to 80px 18px. Section containers declare max-width 1200px. Hero h1 74px base /42px compact; section h2 48/36/32px. OPTIONAL: keep the image capsules in reading order and reserve bottom-nav space so it does not cover contact controls.

Source observations: SOURCE DECLARED: availability pulse names, hero bg animation, primary CTA hover/no-hover variants, service accordion open/closed variants and FAQ open/closed variants exist. No browser timing or keyboard behavior was tested. OPTIONAL: use explicit expanded state and keyboard controls for accordion/FAQ; preserve static text under reduced motion and avoid flashing availability indicators.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
