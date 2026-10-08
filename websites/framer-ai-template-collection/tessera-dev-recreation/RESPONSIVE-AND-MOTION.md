# Tessera Dev responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root anchors are desktop >=1200, tablet 810–1199.98 and phone <=809.98. Outer section gutters declare 32/24/16px; hero becomes vertical on tablet/phone, copy padding becomes 72px 40px 40px then 48px 24px 32px, visual heights declare 560/440px. RECOMMENDATION: retain narrative order, separate code overflow from page overflow, and keep navigation drawer focus manageable. These are public CSS declarations, not viewport measurements.

Source observations: SOURCE DECLARED: roll/track button layers, ticker structures, word-split reveal markup, initial opacity/transform states, four-step demo progress bars and tab structures are present. Theme toggle and drawer are named controls. Timings, final runtime states and interaction outcomes were not exercised. RECOMMENDATION: provide readable static text and a stable mosaic when motion is reduced; implement keyboard-operable tabs and an explicit theme setting.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a white editorial serif/italic hero and mosaic database demo. The Data workflow tab was clicked and its aria-selected became true. The immediate screenshot still showed Schema panel content, so completion of the panel content transition was not confirmed. No schema generation or real backend was exercised. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
