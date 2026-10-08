# Create responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

Source breakpoint declarations split desktop at 1200px+, tablet at 810–1199.98px, and phone below 810px. Benefit Cards declare nine columns desktop, six tablet, one phone; Book a Call declares sticky 100vh desktop, 80vh tablet, and natural height with 60px 20px padding on phone. Recommendation: preserve DOM reading order while collapsing hero subregions to proposition, identity, supporting text, actions, then showreel; reduce display sizes with clamps, protect portrait focal points, stack team cards, and replace hover-only details with tap/focus expansion. Treat spacing and crops here as authored recreation guidance, not measured live geometry.

Source observations: Source structures: Intro Video/Loaded; masked repeated button text with Default/Hover/Press icon names; Ticker; Sticky Content 1–5; Rolling numbers; Animate From/To service layers; Cursor Trigger; benefit Phase 1–3 and pricing carousel names; pricing Open/Closed variants; FAQ Accordion; Book a Call Open Trigger and Fader layers. Hero image initially declares opacity 0.001 and translateY(40px) scale(1.3); team modules declare opacity 0 and translateY(120px). These are static source facts, not proof of final trigger logic, easing, duration, pointer response, or autoplay success. Recommendation: restrained reveal and focus feedback, optional controlled video playback, and a reduced-motion static presentation.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
