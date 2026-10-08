# Menorca responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

source: Root anchors at 810 and 1200px. Grids declare four columns at desktop and two below 1200; collection pair stacks below 1200. Hero declares 96vh desktop and 80vh phone; chapter images 100vh desktop and 80vh phone. recommendation: Keep 20px desktop and 16px phone gutters, preserve two columns while readable, allow heading wrapping, stack editorial pairs, and expose category links through an accessible small-screen menu. Numeric gutter/radius/gap are recreation defaults, not rendered measurements.

Source observations: declaredStructures: Promo Ticker repeated message content Rolling-text navigation span structures and inline CSS Product Image 2 (Hover) absolute overlay Desktop/phone product variants Newsletter overlay backdrop, close control and responsive variants outside normal section flow unverifiedBehavior: Ticker timing and looping Navigation rolling trigger and easing Product image hover transition Menu and cart opening, cart persistence Newsletter opening trigger and submission result recommendation: Honor reduced motion; use an equivalent static link label and always keep primary product image visible on touch.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
