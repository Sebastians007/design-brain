# Essentia responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 992px, 768px. No live phone rendering was verified.

sourceDeclared: Principal root layout bands: <768, 768–991.98, 992–1199.98, >=1200px. Source mobile root width anchor 390px; tablet 768px; small desktop 992px. recommendations: Use 24px gutters under 992px; match phone reference centered logo/hamburger/bag layout. Stack gallery above purchase information below 992px; provide horizontal thumbnails on narrow screens. Preserve jar silhouette and bottom hand crop while scaling giant brand word to width. Collapse bento and ingredient columns; keep readable body text at 14–16px minimum. Avoid sticky overlap on short viewports; allow story panels natural height.

Source observations: sourceDeclared: Lenis Smooth Scroll named component Hero position:sticky with height:100vh How-to initial stage and review header sticky Heading spans start opacity 0.001, blur(5px), translateY(10px) Hand starts opacity 0.001 and translateY(300px) Show/Hide Order Button Trigger nodes around purchase/journal sequence Label ticker and Word Strip clipped structures unverified: Scroll timing, easing, actual visibility switching, gallery selection, accordion behavior and cart mutations were not exercised. recommended: Use reduced-motion mode that reveals all text and replaces long scroll choreography with ordinary flow; implement only verified visual structures before adding motion.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
