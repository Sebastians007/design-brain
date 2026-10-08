# FF Shop responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

declared: Principal source bands are desktop >=1200, tablet 810–1199.98, phone <=809.98. Catalog CSS declares 3/2/1 columns; phone hero changes to a column and puts category/text rail after media; feature and news stack on phone. recommendation: Retain 30px inner media padding when space permits, allow 20px at narrow widths, maintain 44px touch areas, and keep product text underneath imagery. Preserve source order with accessible DOM reading order.

Source observations: declared: Named Horizontal (Scroll), Vertical (Scroll), Delayed and Parallax Default structures; initial opacity/transforms on controls and images; hero/media images declare translateY(-10%) scale(1.2); header/backdrop blur. unverified: Trigger timing, easing, cursor following, live parallax, menu transitions, testimonial navigation and cart behavior were not exercised. recommendation: Use restrained image movement and line reveals; expose all content with reduced motion and keyboard interaction.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
