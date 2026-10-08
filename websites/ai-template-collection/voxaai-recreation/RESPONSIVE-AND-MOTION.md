# VoxaAI responsive and motion notes

Evidence: Public source CSS, official marketplace images and recorded browser snapshots at1363×936; phone/tablet and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root variants use desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Additional component typography queries use 1279px and 1398px maxima. Compact heading declaration is 32px; footer padding variants include 70px and 20px horizontal values. OPTIONAL: stack pricing and feature modules in source reading order and keep demo tabs scrollable.

Source observations: SOURCE DECLARED: named role options, monthly pricing switch, FAQ structures and closed navigation variant are present. Official imagery shows a transcript preview. Runtime timing, keyboard transitions, audio playback and backend outcomes were not exercised. OPTIONAL: use short opacity transitions, preserve readable text without animation, and expose selection semantics. ROOT BROWSER OBSERVATION: visible hero card has Customer/Sales/HR tabs, typed transcript and central waveform; clicking Yearly left Growth at $49 /month in the observed accessibility state, so price recalculation is unestablished.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

Read LIVE-PREVIEW-REVIEW.md and BROWSER-OBSERVATIONS.json; open screenshots/live-home.jpg and any listed additional capture. These are actual browser images at1363×936, separate from the twelve official artwork crops. Observed the three-agent demo card, typed transcript and waveform presentation. Clicking the Yearly label did not establish billing recalculation: the Growth label remained $49 /month, and the pricing screenshot still showed the left-positioned toggle. No voice service or microphone was tested. Browser geometry is scoped to that captured variant. The JPEG raster is1348×926 while the measured CSS viewport is1363×936; use BROWSER-OBSERVATIONS.json to distinguish the two. Phone/tablet, complete motion and product backend behavior remain unverified.
