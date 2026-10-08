# ClinicHub responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 680px. No live phone rendering was verified.

SOURCE DECLARED: page root desktop >=1200px, tablet 680–1199.98px, phone <=679.98px. H1 base 50px/1.2em becomes 40px tablet and 32px phone; h2 base 42px/1.2em becomes 35px tablet and 28px/1.4em phone. Some reused component presets additionally declare 810px/809px boundaries; do not replace page root 680px with 810px. Hero 100vh, 8px inset and 15px radius; main desktop section padding uses 60px horizontal and 80–120px vertical; responsive rules are preserved in source facts. OPTIONAL RECOMMENDATION: stack speciality collage and benefit cards in reading order and preserve captions, name/specialty metadata and the visit action.

Source observations: SOURCE DECLARED: initial appear attributes include low opacity and translateY transforms; Video/Play, left/right team/review controls, FAQ Closed states and Mobile Close navigation are present. Timing, video playback, carousel navigation and scheduler behavior were not exercised. OPTIONAL RECOMMENDATION: reveal content once with restrained fades, provide explicit labelled video and carousel controls, keep FAQ answers available to keyboard/touch and show all content without animation under reduced motion. Treat the illustrated calendar as decorative unless a separately configured scheduling service is supplied.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
