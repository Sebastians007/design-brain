# Creator Store responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Root anchors separate phone below 810px, tablet 810–1199.98px, desktop 1200px+. Recommend matching supplied 390px/810px/1440px component variants: phone content first, shelf rail below; tablet stacked hero retains dimensional shelf. Use wrapper gutters 20/32/56px, one-column phone bundles/course/notes, two-column tablet notes, and 2-column mobile footer links with newsletter spanning. Keep source phone products at least 176px wide, 22px rail gap and prices persistently visible; test overflow at 390px and avoid hover-dependent information.

Source observations: declared: 1500px shelf perspective; rotateX(7deg)/rotateY(-16deg) unit, hover/focus package lift translate3d(0,-18px,70px), hanging-tag swing. Tag button circular fill, clipped silhouette swing, translated duplicate label and arrow tilt. CSS heading word reveals, image scale/parallax variables, sticky reverse-section structures, diagonal section clips, footer ghost rise. Loader and page-transition tag components, smooth-scroll component, duplicated ticker structures and review-wall markup exist. Reduced-motion styles collapse animation/transition duration and disable several transforms. unverifiedBehavior: No live interaction run. Timing orchestration, once-per-session loader, cursor tracking, drag reviews, lesson switching, cart persistence and checkout/fulfilment are not verified by static HTML/CSS or promotional images.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
