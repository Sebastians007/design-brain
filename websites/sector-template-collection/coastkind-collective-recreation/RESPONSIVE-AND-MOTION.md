# Coastkind Collective responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1440px, 810px. No live phone rendering was verified.

SOURCE DECLARED: desktop >=1440px, tablet 810–1439.98px, phone <=809.98px. Hero Besley h1 declares 68px base, 63px tablet inline and 52px phone inline at line-height1em; phone text centers. Desktop uses Focus Poster Grid while tablet/phone have separate carousel structures. OPTIONAL RECOMMENDATION: maintain label/action order when stacking mission and action panels; adapt newsletter field width without truncating validation text.

Source observations: SOURCE DECLARED: Ticker Track, Tablet Focus Carousel, Phone Focus Carousel, Previous Slide, Next Slide, reveal/contrast layers and mobile drawer are named structures. Runtime sequencing, slide index persistence and form delivery were not exercised. OPTIONAL RECOMMENDATION: offer normal focus-area links and static readable marine imagery under reduced motion; give carousel buttons descriptive names and announce slide changes without stealing focus.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
