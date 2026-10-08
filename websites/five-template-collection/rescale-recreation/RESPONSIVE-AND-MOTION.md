# Rescale responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px and 810px. No live phone rendering was verified.

The public CSS declares phone and tablet font sizes listed above. Recommended implementation: stack the bento while preserving the tall analytics cell first; keep the hero outline readable and move decorative 3D objects away from primary text. Phone spacing and nav geometry remain unverified.

Source observations: Public source contains menu, background-video and repeated label structures. Official stills cannot establish motion timing, menu geometry or interaction behavior. All proposed transitions below are recommendations until confirmed in a live browser.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
