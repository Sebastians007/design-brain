# Vertical responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Source breakpoint bands are desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Authored recommendation: retain 24px desktop and 20px phone gutters; make split spreads stack in semantic reading order; use content height on phones; simplify decorative rules without losing captions; make thumbnails wrap; preserve face visibility when changing image aspect ratios. Source presets support Intro title 70/52/29px, Concept description 40/32/24px and editorial subtitle 24/20/18px across those bands. Treat gutter 24, radius 0 and gap 32 as recreation recommendations, not universal source measurements.

Source observations: Source evidence includes a fixed navigation initial translateY(-100px)/opacity 0.001 state; hero image initial scale(1.3)/opacity 0.001; gallery row scale(0.8) or scale(0.9) declarations; desktop sticky Featured Study and About panels; Artist Statement sticky image, Flashing Dot and Circular Text Animation named structures; repeated Placeholder/Visible/Hover link layers; MP4 videos in Concept, Process and Exhibition; About portrait layers with a 0.4s ease-out transform transition. Public source establishes these structures and states, not live hover, scroll timing, autoplay, cycling, or pointer behavior. Recreation recommendation: short masked label transitions, gentle image reveals, optional sticky spreads, and a fully legible reduced-motion state.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
