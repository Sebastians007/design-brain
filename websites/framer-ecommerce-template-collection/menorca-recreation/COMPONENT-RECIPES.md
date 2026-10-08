# Menorca component recipes

Evidence: public home HTML/CSS and two official reference images for [Menorca](https://menorca.framer.media/) by MartoMads. Dimensions below are declarations or recreation recommendations, never measured browser geometry. The scenic outer backdrop and rounded screenshot frame are promotional presentation.

## 1. Promo strip with overlaid navigation

Build a white, shallow message rail above the opening image. Source promo text uses Inter 500 at 12px/14.4px with negative tracking; repeated message groups are separated by dots. Below it, arrange a small handwritten logo left, compact uppercase category links across the center, and cart/selector controls right. The home reference uses white navigation over photography; the product reference uses black navigation on white. Keep this contrast variant tied to the surface. Reading order is announcement, home link, categories, selectors, cart. Mobile should expose the declared menu-opener structure with an accessible label. Ticker and rolling-label structures exist, but running animation has not been observed.

## 2. Mixed-font photographic hero

Use a full-bleed, center-cropped coastal portrait with a dark foreground that supports white text. The source image is 2400×1600 and declares cover fitting. Center a broad, two-line headline: tightly tracked Inter Variable 500 carries the main uppercase phrase, while three inline Gloria Hallelujah spans add an informal handwritten rhythm. Desktop declares 56px/67.2px; tablet 40px/48px; phone 28px/33.6px. Follow with restrained, two-line supporting copy and two adjacent transparent outlined pills. Source hero height is 96vh, dropping to 80vh on phone. Preserve headline, explanation, then actions in DOM reading order; write fresh seasonal copy instead of copying the demonstration sentence.

## 3. Product panel and grid

Place isolated apparel photography on nearly white rectangular panels, with a tiny rounded collection badge near the upper-left. Source product assets are approximately 1122×1402 and declare centered cover fitting. Preserve their generous surrounding image space. Arrange four columns at desktop and two below 1200px; declared grid gaps are 20px vertically and 10px horizontally. Product titles use Inter 500 at 14px, badges 10px. Keep title and displayed price metadata compact beneath the photograph. Each card links to a distinct product-page slug. Source names an absolute second image for hover and a separate phone card; this proves structure, not a tested hover exchange. Give touch and keyboard users the same product access.

## 4. Editorial collection chapter

Create both a paired editorial spread and a full-width chapter variant. The pair is side by side at desktop and stacks below 1200px. Individual chapters declare 100vh desktop, 80vh phone, with 40px padding that becomes 40px 16px on phone. Titles use tightly tracked 24px Inter; place the discovery action with the title over the image. Keep source cover crops centered except the final car portrait, whose declared focal point is 49.6% 26.2%. Reading order is collection title, action, next chapter. Retain the home sequence rather than consolidating all photography into one gallery.

## 5. White directory footer

Finish with a white directory of Shop, Collections and Legal links followed by a huge tightly tracked black wordmark. Source desktop wordmark declares about 193.7px, Inter 700, 1.1 line height; the phone version about 63.7px. Keep link groups readable before the expressive wordmark, which links back to the hero. Adapt columns into orderly small-screen groups. Newsletter backdrop and close-control variants exist separately in SSR; treat any popup trigger, submission or delayed appearance as unverified. Optional reconstruction should keep the newsletter dismissible and outside the footer’s normal reading sequence.
