# Online Course responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: Root breakpoints1200 and810px; custom.pm-wrap horizontal pad56px, max-width calc(clamp(1280px,92vw,1520px)+pad*2), pad32px under1099px and20px under699px. Hero copy max-width min(600px,42%); phone.pmh.is-ph h1 clamp(46px,13vw,64px). Course-card title clamp(28px,2.2vw,31px); lesson split grid58fr/42fr with fluid gap. Additional custom thresholds600px,380px and max-height540px target touch/short screens. OPTIONAL RECOMMENDATION: preserve normal card links and lesson order on phones and keep scrollable areas independently accessible.

Source observations: SOURCE DECLARED: sketch/photo hero, completion stamp, progress/tabs, PmLoader, PmPageTrans, PmSmooth, button hover transforms, horizontal courses, lesson media markup, pricing switch and FAQ aria controls are present. CSS includes prefers-reduced-motion rules, hover:none and pointer:fine alternatives. This is declared source behavior rather than an exercised lesson or checkout flow. OPTIONAL RECOMMENDATION: provide still artwork, normal links, keyboard access, labelled controls and nonanimated text when motion is reduced; course progress remains decorative unless connected to an actual learning platform.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
