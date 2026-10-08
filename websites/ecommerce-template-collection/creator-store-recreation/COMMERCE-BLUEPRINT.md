# Creator Store — commerce blueprint

This blueprint separates source-declared catalogue and interface structure from optional production services. Evidence is the homepage’s CMS bridge rows, custom HTML/CSS and official reference images; no purchase or delivery was exercised.

| Record | Source-declared fields |
| --- | --- |
| Product | Slug, title, type, current/compare price, format/tool summary, feature list, checkout path, badge, sample sales/rating, cover, colour and package silhouette |
| Category | Slug, name, displayed count, description and included product types |
| Bundle | Slug, name, price, comparison subtotal, saving, member product slugs, colour and action label |
| Course/lesson | Course slug, linked product slug, price, duration, lesson count and level; lesson slug, title, duration, module, summary, course relationship and order |
| Cart | Header/hero count, drawer, empty state, item-row structure, subtotal, checkout link and keep-browsing action |

The nine example products span Figma components, PDF/EPUB books, Lightroom/Camera Raw presets, video/PDF course material, Notion databases, OTF/WOFF2 fonts, Canva templates, PDF/Notion email resources and SVG/Figma icons. Retain format, file count and required tools as explicit purchase information. Source licence copy covers personal/commercial work and excludes resale; official product imagery distinguishes personal, commercial and team terms, including five-seat team use. Model licence scope and seat limits separately rather than infer entitlements from product type.

Source-declared paths connect `/products` to `/products/<slug>` and CMS checkout targets `/checkout?product=<slug>`; the cart links to `/checkout`. Bundle cards link to `/bundles/<slug>`. The source names Lemon Squeezy, Gumroad and Stripe as intended checkout destinations, but no external provider checkout href was found in this homepage. Source copy promises instant downloads, emailed/account-accessible links and lifetime updates. Those are marketing declarations, not verified delivery, payment, tax, account or entitlement capabilities. The `/free` lead magnet has an email form; its mailing/file delivery service is unverified.

Optional implementation: normalized currency amounts, cart persistence, licence selection, provider SKU mapping, payment redirects, webhook-confirmed entitlements, expiring download links, update notifications, course access and consent-aware email capture. No promo-code workflow is evidenced.

Validate bundle arithmetic: Launch Stack declares $247/$179/$68, while its current $149+$29+$19 members sum to $197. Preserve this as an evidence discrepancy; calculate production savings from authoritative prices. Sample orders and verified-review labels also require real provenance before launch.
