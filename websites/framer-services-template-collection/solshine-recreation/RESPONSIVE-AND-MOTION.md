# Solshine responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

{'sourceDeclared': 'Main page bands: mobile max 809.98px, tablet 810–1199.98px, desktop min 1200px. Typography presets add narrower boundaries.', 'recommendations': ['Stack hero paragraph, CTA and reviews before they collide', 'Collapse service and about columns into a readable vertical order', 'Reduce portrait grid columns with available width', 'Keep FAQ toggles and contact controls comfortably tappable', 'Treat 32px gutter, 24px radius and 24px gap as starting recommendations']}

Source observations: {'sourceDeclared': ['Hero entrance span initial opacity, blur and translation', 'Counter Home structure', 'Services Corousel naming', 'Text Scroll Container repetitions', 'Members Hover layer and Social Icons', 'Menu open/close variants', 'FAQ Open/Closed and Plus/Minus variants'], 'unverified': 'Timing, autoplay, counter final values, carousel gestures, ticker direction/speed, hover transitions, focus behavior and FAQ keyboard interaction were not exercised.', 'recommendations': ['Ensure final hero text remains visible when animation fails', 'Provide reduced-motion static text and counters', 'Expose hover information on focus and touch', 'Implement menus and FAQs with accessible buttons and state attributes']}

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
