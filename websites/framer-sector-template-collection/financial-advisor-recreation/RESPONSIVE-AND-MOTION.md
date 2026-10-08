# Financial Advisor responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: Framer wrapper boundaries are 1200 and 810px. Custom component media queries additionally use 1199/1099/999/899/799/699/599/519/499/420/399px; these are preserved separately. .wo-wrap uses 56px padding, 32px <=1099 and 20px <=699. Hero h1 is clamp(44px,5.6vw,92px) with .98 line-height; numeric role rows evaluate at1440px, yielding80.64px/79.0272px. Section headings have independent clamp expressions. OPTIONAL RECOMMENDATION: stack planning input controls before the chart, retain labels and assumptions, and show advisor/service/fee cards in reading order.

Source observations: SOURCE DECLARED: custom styles declare opacity/translate reveals, sticky client panels, document-folder art, chart markers, FAQ controls, magnetic/button transitions, WoLoader first visit once per session (2.4s active RAF +700ms pin+1300ms open; background gaps are subtracted), WoPageTrans bar-chart transition and reduced-motion queries. Source contains range inputs and booking controls; calculations and backend operations are unverified. OPTIONAL RECOMMENDATION: keep a static readable route during reduced motion, expose chart assumptions as text, provide direct booking links, and skip the optional demo assistant unless configured.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

4 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
