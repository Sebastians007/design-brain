# Finlance component recipes

Source basis: public home HTML/CSS, official marketplace JPGs, and the inspected `/security` source. All construction and accessibility suggestions below are optional; the source does not establish running banking services.

## 1. Landscape hero with upright and italic title

SOURCE DECLARED: Hero Section contains Banking, beautifully, simple as separate h1 nodes, a checking-account summary and Try it free/Open Account buttons. The first action points to `/contact`; the second to `/feature`. Base upright and italic presets both use 96px size and 1em line-height, with Creato Display Bold and Creato Display Bold Italic respectively at weight700. Laptop media uses 82px upright and92px italic; tablet56/64px; phone40px. Below the text, a purple physical-card image overlaps floating FX, total-balance and received-payment tiles above a green landscape image. The official imagery may show an outer lavender frame and surrounding field photography that belong to marketplace presentation.

OPTIONAL RECOMMENDATION: build the title as one accessible h1 with styled spans preserving the source line grouping. Keep the purple italic word as a real italic font face. Position decorative card media in an isolated relative wrapper so absolute transaction tiles never intercept action links. On phone, simplify overlap density before shrinking labels beyond source minimums. The rate, balance, APY and received-payment values must remain labelled illustrative until actual data is supplied; the two buttons remain route actions.

## 2. Dual personal/business account cards

SOURCE DECLARED: Accounts Section follows the text ticker. Its heading uses upright52px and italic52px section presets with1.2em line-height. Cards preserve PERSONAL/BUSINESS badges, account names, summaries, fee/APY/currency metadata, Learn more actions and different white/dark credit-card art. Source Big and Small variants exist. The source content explains two accounts, two cards and two feeds; desktop official reference presents purple personal and blue business cards linked visually by a transfer badge.

OPTIONAL RECOMMENDATION: implement account cards as two independent linked product summaries, each with a consistent metadata order. Do not merge the two product routes into one generic account card. Use the connecting transfer illustration as decoration and keep it outside card text. Cards can stack on phone with personal first, business second; keep badge, title and Learn more visible without relying on hover. Fee and yield values are editable sample fields and require owner verification before publication.

## 3. Feature cards and physical-card controls

SOURCE DECLARED: Features Section uses a three-card product grid and a smaller benefits row. Visible topics include multi-currency accounts, premium debit cards and wealth presentation, then security, concierge, instant transfers and insurance copy. Cards Section follows with One card. Endless control, descriptive copy, a three-item list and overlapping purple card imagery. The source list includes repeated cashback copy, which should be flagged during adaptation rather than silently treated as three distinct capabilities. Feature-card titles use Creato Display Bold; benefit title declaration is20px/100%.

OPTIONAL RECOMMENDATION: author each feature as icon/media, title, description and optional details action. Preserve the smaller benefits row as a secondary hierarchy. Recreate the card-control chapter with text first in reading order and decorative card art second. Replace duplicated list content only with approved brand copy. Security, insurance, cashback and fee assertions remain template claims; decorative cards should never imply an actual freeze/spend-limit operation.

## 4. Dashboard showcase and review ticker

SOURCE DECLARED: Deshbord Section, spelling retained from source, contains the Clarity at every glance title and a banking dashboard visual. Trust Section adds logo ticker and counter widgets, with Almarai used for some statistical captions and Creato Display Bold for numerical display. Review Section contains a review-card ticker, quotation, profile image, client name and designation. SSR counter starts are zero and static screenshots may show final values; neither is a verified business metric.

OPTIONAL RECOMMENDATION: use the actual exported dashboard asset and preserve its screenshot ratio instead of inventing a new financial chart. Give the mock dashboard a concise descriptive alt label or mark it decorative when accompanying copy carries the meaning. Represent reviews as a stable list in DOM order with optional horizontal motion; pause motion for focus/hover and provide a reduced-motion static view. Store quote attribution separately from quote text. Do not promote demonstration balances, deposits, member counts or press logos as evidence of a real product's adoption.

## 5. Banking benefits, article cards and closing actions

SOURCE DECLARED: Banking Section combines ATM availability, monthly statement/PDF rows, wallet-pay presentation, mobile app, premium metal-card and concierge/account widgets. Blog Section displays three article cards with category, title, author, date/read time and View all posts to `/blog`. Footer Section repeats Open your account in four minutes with Try it free, Talk to us and Open Account links, an App Store destination and company/help/legal lists. Responsive Desktop/Laptop/Tablet/Phone footer variants exist. Inspected secondary `/security` has Banner, security cards, account cards, review content and closing footer declarations.

OPTIONAL RECOMMENDATION: preserve the benefits composition's distinct item types: statement rows are file-like presentations, articles are navigation links, and the mobile block is a product illustration. A download icon should only become a download when a real file is configured. Keep author/date/read-time metadata in each article's text order. Closing account promises and app-store destinations need owner-specific content; source app-store link is the generic Apple store page, not an installed product. Provide visible focus states on all actions and label unconfigured actions as demo links.
