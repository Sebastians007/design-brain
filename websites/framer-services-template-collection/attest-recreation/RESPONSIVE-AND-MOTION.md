# Attest responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

{'recommendations': ['Use source bands at 810px and 1200px; test both sides of each boundary.', 'Use 60px wide gutters, 40px tablet gutters, and 20px mobile gutters as declared starting points.', 'Stack mission tiles, service content, and attorney cards into readable flows on small screens.', 'Keep text contrast, portrait associations, and touch targets intact; avoid hard-coding image reference dimensions.'], 'sourceDeclared': 'Three responsive header variants and desktop/tablet/mobile testimonial/footer structures are present. Mobile mission grid changes from grid to flex.'}

Source observations: {'sourceDeclared': ['Hero, mission tile, and CTA video elements have MP4 sources.', 'Slideshow structures exist separately for desktop, tablet, and mobile.', 'Services/support contain named Open and Closed accordion variants.', 'Some frames declare will-change:transform, opacity:0, and translateY(20px) initial styles.'], 'unverified': ['Autoplay, loop, easing, trigger timing, slideshow progression, click transitions, image swapping, and header changes were not runtime tested.'], 'recommendations': ['Use restrained reveals only after checking actual interaction assets.', 'Provide a visible static state and reduced-motion media/animation fallback.']}

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
