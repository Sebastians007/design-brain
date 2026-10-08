# Finlance responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1440px, 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: roots use desktop >=1440px, laptop 1200–1439.98px, tablet 810–1199.98px and phone <=809.98px. Base h1 is 96px/96px; laptop upright h1 is 82px while italic h1 is 92px, tablet 56/64px, phone both 40px. Base section h2 is 52px/62.4px. Source component variants use different layout sizes. OPTIONAL RECOMMENDATION: keep account cards readable in their source order and stack product-detail copy before cropped decorative media.

Source observations: SOURCE DECLARED: Text Ticker, Brands Ticker, Review Cards Ticker, counter widgets, character-split heading spans and appear-animation records are present; marketplace describes scroll effects, reveals and sticky sections. Actual running speeds and transitions were not measured. OPTIONAL RECOMMENDATION: preserve readable static headings and benefits for reduced motion, pause moving reviews on focus, and keep banking numbers explicitly illustrative.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

2 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
