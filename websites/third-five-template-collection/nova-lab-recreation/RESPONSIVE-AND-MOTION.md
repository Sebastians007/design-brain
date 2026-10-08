# NOVA Lab responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1390px. No live phone rendering was verified.

The source has a 1390px desktop/min-width split and max-width1389.98 rules, plus a pointer:fine query. Within that lower branch the root declares a fixed390px width and 6603px height; this is a source canvas declaration, not a proven390px breakpoint or verified viewport rendering. No810px tablet preset is established. Phone reconstruction is recommended: stack modules, paired comparisons and plan receipts, preserve readable type and tap targets, and replace absolute section offsets with content flow. Validate independently at390px and810px; those are proposed checks, not observed source presets. Spacing and shape guidance: Recommendation: use 40–50px desktop side space, anchored by declared 1308px inner frames on the 1390px canvas; use 20–24px for a reconstructed phone layout. Recommendation: retain the declared 15px navigation and primary-button radius; keep tables and most research modules square, using circular masks only for light motifs. Recommendation: base small gaps on 6/15/22px, retain the declared 33px desktop CTA gap and 64px hero-content gap where space allows, and give major sections 80–120px internal breathing room.

Source observations: Declared structures: fixed navigation, filter/transform will-change hints, multiple screenshot variants, carousel-named arrow/card elements, and link color transitions of .4s cubic-bezier(.44,0,.56,1). Runtime autoplay, slide interaction, sticky step changes, orb movement, hover choreography and form submission were not observed or verified. Recommendation: implement restrained opacity/transform transitions with reduced-motion support; keep static artwork stable until behavior is independently checked.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
