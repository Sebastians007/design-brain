# Meridian Residences responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: primary root variants are desktop >=1200px, tablet810–1199.98px and phone<=809.98px. Ascent hero declares100vh/min-height640px; tablet minimum620px and phone minimum660px. Native custom inline heading sizes are initial declarations, not proof of compact rendered sizes. The phone nav has a Menu/Open Icon/Drawer structure. OPTIONAL: stack residence photography and text, reduce serif headlines according to available width, preserve floor metadata and switch the rail to discrete controls if touch dragging obscures content.

Source observations: SOURCE DECLARED: native source includes reveal transitions with 1–1.2s opacity/blur/translate treatments, line wipes and brass chapter-label tracking transitions; source also includes a curtain and prefers-reduced-motion query. Official imagery shows different floor/elevation rail positions. Floor dragging, spring physics, optical-size rendering, loader completion, plan animation, assistant responses and brochure delivery are untested. OPTIONAL: give the elevation rail slider semantics or discrete floor controls, deterministic sample-view mapping and a static reduced-motion view; do not allow hidden reveal text to remain inaccessible.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
