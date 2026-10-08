# SecureAI responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Principal page bands: >=1200px desktop, 810–1199.98px tablet, <=809.98px phone. Component media also declares 809px/1199px cutoffs. The source has explicit desktop/tablet/mobile navigation variants. Gutter 32, radius 0 and gap 24 are reconstruction recommendations. On phones, stack hero text before image, move queue cards into reading order, and keep log text horizontally scrollable instead of shrinking it.

Source observations: Public HTML declares the Header at opacity 0.001 with translateY(400px), names CodeStream, Integration Demo Animation, and animation illustration components, and includes letter/span wrappers in section titles. These are source states and component names, not verified playback or interaction timings. Recommended reconstruction: short opacity/position reveals, restrained operational indicators, and a reduced-motion mode with all text visible immediately.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed a black technical hero, cyan rock artwork, striped field, sharp corner marks and Chakra Petch display. Security product claims, logs and governance operations were not independently verified. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
