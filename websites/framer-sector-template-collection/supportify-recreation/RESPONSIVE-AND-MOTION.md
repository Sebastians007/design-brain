# Supportify responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: desktop >=1200px; tablet810–1199px; phone<=809px. Content Wrapper max-width1080px and gap120px desktop/80px tablet; Categories and quick-link collection declare two columns on wide screens and one column on phone. Hero48px desktop,40px tablet/phone; article h1 is32px desktop and26px <=1199px. Newsletter outer panel declares80px desktop padding and40px20px compact variant. OPTIONAL RECOMMENDATION: preserve title/excerpt pairs and let long support questions wrap above each divider.

Source observations: SOURCE DECLARED: Mobile Closed nav, article chevrons, Search component, newsletter form Default state and light/dark color-scheme token alternatives are in source. These describe navigation/form affordances, not tested menu/search results or email delivery. OPTIONAL RECOMMENDATION: use quiet focus/hover feedback and accessible menu toggling; preserve collection navigation as normal links so the knowledge base is usable without animation.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
