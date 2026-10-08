# Atlas Studio responsive and motion notes

Evidence: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Source CSS breakpoint boundaries: 1200px and 810px. No live phone rendering was verified.

Stack the work grid and studio composition at phone widths. Preserve the panel seams and radius; reduce inner padding to 20–24px and display headings to roughly 64–84px as a recommended starting point.

Source observations: Sticky navigation, moving logo strip, rotating circular CTA and rollover label duplication are present. Exact rotation speed, easing and reveal timing were not measured.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
