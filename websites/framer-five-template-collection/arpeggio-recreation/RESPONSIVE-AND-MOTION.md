# Arpeggio responsive and motion notes

Evidence: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Source CSS breakpoint boundaries: 1200px and 810px. No live phone rendering was verified.

Preserve the portrait focal point on narrow screens. Fit the brand artwork to viewport width, reduce cross-mark density, stack paired media and pricing, and turn pinned stories into natural vertical sections. Recommended phone gutters: 16–24px.

Source observations: Large type and paired images change with scroll. A dot/dark-to-light service transition and full-height media stories are visible. Exact trigger positions, expansion radius, pin duration and menu behavior remain unverified.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
