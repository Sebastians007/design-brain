# Platform responsive and motion notes

Evidence: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Source CSS breakpoint boundaries: 1200px and 810px. No live phone rendering was verified.

Collapse complex bento grids in their reading order. Retain 16–24px edge spacing and dark contrast. Recommended phone headings: 48–64px with less negative tracking. Replace the wide drawer with a full-width phone panel.

Source observations: Navigation drawer opening and closing was tested. Carousels, counters, billing toggle, FAQ and media affordances were seen; their detailed state transitions were not all exercised. Particle/video material is source media, not a CSS gradient.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
