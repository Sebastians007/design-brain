# Foodly responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 is 60px desktop and 40px tablet/phone. h2 preset declares 48px base, 32px tablet and 24px phone; first-match source extraction can report the tablet value before the base declaration. Main modules declare max-width:1280px, desktop 80px horizontal padding and tablet 16px. Hero wrapper declares column direction on phone. OPTIONAL RECOMMENDATION: preserve category and reservation reading order, keep thumbnails tappable and prevent offer ticker overflow from widening the page.

Source observations: SOURCE DECLARED: Offer Ticker, Slideshow, rolling-text navigation styles, image thumbnail structures, testimonial arrows, mobile closed navigation and table form are serialized. Actual carousel state changes, thumbnail switching, ticker speed and booking submission were not exercised. OPTIONAL RECOMMENDATION: pause moving offer copy when appropriate, provide keyboard-operable thumbnail and carousel controls, keep one readable static offer under reduced motion, and label local form simulation clearly.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
