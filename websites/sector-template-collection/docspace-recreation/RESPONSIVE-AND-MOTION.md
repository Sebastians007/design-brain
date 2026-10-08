# Docspace responsive and motion notes

Evidence: Public source declarations, official marketplace artwork and actual browser captures at the individually recorded viewport/state. Phone/tablet, complete motion and backend behavior unverified.

Source CSS breakpoint boundaries: 1200px, 810px. No live phone rendering was verified.

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Left sidebar declares 280px desktop and 240px tablet; its phone variant is hidden. Right rail declares 25%/max-width340px and is hidden on tablet/phone. Central container max-width700px; main content gap52px/48px/42px. Header gutters32px desktop,28px tablet,16px phone. H1 preset is32px desktop,30px tablet,28px phone; body16px desktop and15px compact. OPTIONAL RECOMMENDATION: retain labelled menu access and horizontally contained code/table overflow while the prose remains viewport-width.

Source observations: SOURCE DECLARED: theme toggle, dropdown, open sidebar groups, sticky/fixed reading rails and custom search/copy/feedback components exist in the public source. The marketplace advertises theme-mask animation; source inventory does not prove timing, persisted preferences, successful clipboard writes or real search indexing. OPTIONAL RECOMMENDATION: render the reading content before enhancement, keep current-page cues stable, restore focus after compact navigation and disable decorative transition motion under reduced-motion preference.

Recommended defaults: 180–280ms hover/menu response, 450–700ms simple reveals. These timings are authored, not measured. With reduced motion, remove pinning, rotation, ticker movement and word concealment. Every section must remain readable without animation.

For comparison, render at 1363×936 with the same scroll position as the screenshot. Then check 1440, 1024, 810, 768 and 390px. Test navigation, accordion, active pricing state, carousel arrows and forms where applicable. Keep project/portrait focus inside frame; avoid horizontal body overflow. Reserve real media space to prevent layout shift.

## Recorded browser coverage

3 actual browser captures are embedded in frame-showcase.html and listed in BROWSER-OBSERVATIONS.json. Read LIVE-PREVIEW-REVIEW.md and MOBILE-RECREATION.md. CSS viewport and JPEG raster are distinct and recorded per image. Native photographs are separate from twelve official artwork crops. Live phone/tablet were not rendered because the available browser viewport is fixed. Complete motion and backend services remain unverified.
