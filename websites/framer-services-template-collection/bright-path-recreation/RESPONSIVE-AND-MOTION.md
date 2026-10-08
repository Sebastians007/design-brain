# Bright Path responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Typography presets use integer maxima 1199px/809px: hero 103/62/50px; section heading 82/50/40px; mission 46/32/30px; final CTA 98/56/42px. RECOMMENDATIONS: use 30px desktop gutters and 20px phone gutters, 20px image/card radii and 30px default gaps; stack split media sections and plan cards, reduce photo overlap, keep decorated words readable, and expose keyboard-operable controls. These spacing values are recreation defaults, not measured geometry.

Source observations: SOURCE DECLARED: six data-framer-appear-id markers, initial opacity/transform styles, repeated curved SVG textPath ribbon content, rotated image transforms, Lenis-related CSS classes, hover icon variants, and open/closed accordion/menu variants. CSS declares 0.4s cubic-bezier(.44,0,.56,1) link and input-focus transitions. UNVERIFIED: actual reveal timings, scroll smoothing, ribbon movement, hover swapping, menu/accordion responses, submission, and persistence; no live interactions were exercised.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
