# LuxeRealty responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: primary home variants have desktop >=1440px, tablet 810–1439.98px and phone <=809.98px. Nested content additionally branches at 1200px; the source therefore has boundaries 1440/1200/810, not a universal 1200 desktop cutoff. Featured Properties declares 32px padding with 16px on phone, About 94px 40px with 94px 16px on phone; property-card h3 preset changes 18px to 16px at <=1199px. OPTIONAL: preserve scene sequence while stacking inventory and agent cards, and use the source compact filter trigger when the sidebar cannot fit.

Source observations: SOURCE DECLARED: opening sequence includes four property scenes and multiple content-card variants. Active/Inactive expertise structures, closed mobile navigation, search/liked-property controls, input/form controls and compact filter trigger appear in saved source. Scroll transforms, timing, checkbox filtering, liked-property persistence, newsletter delivery and enquiry outcomes were not exercised. OPTIONAL RECOMMENDATION: implement predictable keyboard-operable disclosure/search states; keep text readable with reduced motion and use local sample data until an authorized inventory service is supplied.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
