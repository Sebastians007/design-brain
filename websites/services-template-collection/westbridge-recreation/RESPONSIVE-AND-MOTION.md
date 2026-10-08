# Westbridge responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: desktop >=1200px, tablet >=810px and <=1199.98px, phone <=809.98px; several text preset queries use integer maxima 1199px and 809px. Hero gutters switch from 40px to 16px. OPTIONAL recreation: retain these boundaries, stack service cards and footer groups on narrow widths, preserve portrait focal position, avoid fixed text heights and verify wrapping at 809/810/1199/1200px.

Source observations: SOURCE DECLARED: named Text Reveal, Progress Animation, active/inactive numbered approach tabs, Default/Hover In service variants, and initial low-opacity translated spans. UNVERIFIED: triggers, timing, autoplay, looping, carousel gesture handling, completed reveal states and testimonial playback. OPTIONAL: implement short opacity/transform transitions, keyboard-operable tabs and reduced-motion static states after runtime requirements are chosen.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
