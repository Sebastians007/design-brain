# Agentic responsive and motion notes

Evidence: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

Source CSS breakpoint boundaries: 1200px and 810px. No live phone rendering was verified.

Reduce the fitted wordmark according to available width. Stack the description beneath the menu, retain QR only where it does not collide, stack mockups beneath project metadata, and simplify long sticky scenes to ordinary vertical content on phones.

Source observations: Word reveals, rotating glyphs and scene-based scroll compositions are visible. Exact sticky range, word timing and easing were not measured. Preserve reading access without requiring scroll animation. Authentication pages exist; working authentication was not verified.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
