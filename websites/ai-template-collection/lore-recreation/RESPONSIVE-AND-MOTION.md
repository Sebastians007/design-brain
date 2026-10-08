# Lore responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: principal anchors are desktop >=1200px, tablet 810–1199.98px, phone <=809.98px; smaller component rules also use integer 809/1199 boundaries. OPTIONAL: collapse navigation to an accessible menu, stack process cards, keep showcase scroll controls reachable, simplify dashboard detail on phones, and move media text away from busy focal areas. Preserve source hierarchy while adapting recommended gutters.

Source observations: SOURCE DECLARED: Hero and Showcase include MP4 sources and posters; showcase has arrow controls and Default variants, navigation has closed tablet/mobile variants, and the listing advertises a video hero/carousel. These facts do not verify autoplay, runtime progress, animation durations or completed interactions. OPTIONAL: user-controlled media playback, discrete carousel paging, explicit pause controls and a static-poster reduced-motion mode.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the dark circular aquatic video scene, left-aligned headline and pill actions. The site declares MP4 media. This capture does not establish generation, export or model-provider access. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
