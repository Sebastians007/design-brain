# Chatassist Chatbot responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1440px, 810px. No live phone rendering was verified.

Root anchor boundaries are 810px and 1440px: phone through 809.98px, tablet 810–1439.98px, desktop 1440px+. Source declares responsive hero, pricing desktop/tablet/phone and footer counterparts. Recommendation: stack illustrations below copy, turn four plan columns into a readable vertical list on narrow screens, keep logos wrap-safe and retain a tap-accessible navigation menu. Spacing values in this config are recreation guidance; live geometry was not measured.

Source observations: Public source contains testimonial arrows/tabs, FAQ Open/Close structures, pricing Monthly state and repeated logo lists. Listing advertises responsive behavior; static source cannot prove carousel timing, toggle calculations or scroll effects. Recommendation: visible selected states, keyboard-operable FAQ and pricing controls, restrained card hover feedback and reduced-motion fallbacks. The large hero interface is product artwork, not a verified live chatbot.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a purple-gradient hero, large chat-product artwork and a hamburger header at 1363px. The principal upper anchor is 1440px, so this capture uses the source variant below that boundary; it is not proof of the >=1440px desktop header. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
