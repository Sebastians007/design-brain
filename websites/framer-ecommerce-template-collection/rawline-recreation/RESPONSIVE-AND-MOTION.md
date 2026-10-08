# RAWLINE responsive and motion notes

Evidence: Public source CSS + official marketplace images; live browser layout unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

basis: SOURCE DECLARED anchors, followed by OPTIONAL recreation recommendations. declared: Desktop >=1200px; tablet 810–1199.98px; mobile <=809.98px. Hero stacks below 1200px: first image 60vh; second container 38vh tablet or 30vh mobile. Social-wall columns 4 desktop, 3 tablet, 1 mobile; mobile section gutters 10px. recommendations: Use two product-card columns on narrow screens, preserving image scale and legible pricing. Keep controls keyboard reachable, allow long product names to wrap, and test 320px widths plus both sides of each root breakpoint. Use intrinsic images and a stable viewport-height fallback to avoid overflow under mobile browser chrome.

Source observations: declaredStructures: Desktop/tablet/mobile ticker component variants with repeated product items. Navigation initial opacity 0.001 and translateY(-80px); hero image initial opacity 0.001. Feature 1–4 trigger structures; paired normal and blurred drop images. Country and newsletter smart-modal containers; initial translate/opacity declaration on template remix CTA. unverifiedBehavior: Ticker timing/direction, reveal timing, scroll triggers and hover transitions were not run. Search, wishlist, cart, filters, currency changes and modal opening/closing were not exercised. optionalRecommendations: Provide reduced-motion static ticker and visible initial content fallback.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.
