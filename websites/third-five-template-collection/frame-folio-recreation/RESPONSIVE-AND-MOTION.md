# Frame Folio responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Declared breakpoint families are desktop >=1200px, tablet 810–1199.98px, and phone <=809.98px. Both services and projects declare one-column grids below desktop. Recommendation: stack hero copy before the image, preserve photographic aspect ratio, prevent title overflow with a fluid 42–85px size, use the dedicated mobile menu structure, keep form fields full-width, and stack footer groups. These proposed sizing and interaction details are not browser-verified. Spacing and shape guidance: Recommendation: 75px desktop within a 1200px section cap, matching source declarations; reduce to 30px tablet and 20px phone after layout checks. Recommendation: 13px on photographs, service cards, and contact form; use fully rounded black action pills. The form declares 13px; other radii should be confirmed per component. Recommendation: 100px vertical section breathing room, 50px hero column gap, 20px service grid gap, and 40px project column gap. These echo declared source values rather than rendered measurements.

Source observations: Declared structures: five hero-image names with repeated hidden/visible slide states; three project slideshow structures with arrow assets; client-logo and testimonial tickers; appear IDs and initial opacity/translation values, including 150px rise states; text-link color transition of 0.4s. The HTML establishes these structures and states, not verified autoplay speed, easing, trigger threshold, loop direction, drag behavior, or actual runtime transitions. Recommendation: restrained fades/rises, user-operated project arrows, and a static reduced-motion presentation until behavior is independently checked.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
