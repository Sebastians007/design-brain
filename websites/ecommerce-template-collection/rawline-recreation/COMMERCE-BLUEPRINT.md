# RAWLINE commerce blueprint

**SOURCE DECLARED / reference evidence.** The homepage exposes Shop Now and Shop Collection paths to `/categories/all`, sale and new-arrival links to their respective category routes, drop navigation to `/latest-drops`, individual product links under `/shop/`, and a gift-card link to `/shop/raw-gift-card`. Search, wishlist, cart trigger/counter, new-arrival filters, country/currency and newsletter structures are declared. Official catalog imagery shows product-type selection, gender choices, price bands, sale/new-arrival toggles and relevance sorting. The product reference shows size choices, a quantity stepper, Add to Cart, price, comparison price and a size table.

These establish interface and navigation intent. They do not establish functioning purchases. Dynamic product/variant content is missing from SSR evidence; homepage labels and images cannot verify product-detail hydration, variant availability or cart results. Shopify co-branding appears in promotional imagery; inventory, payments, Shopify integration, checkout completion and currency conversion remain unverified.

**OPTIONAL — canonical implementation schema.**

| Entity | Recommended fields |
|---|---|
| Product | `id`, `slug`, `title`, `description`, `media[]`, `categoryIds[]`, `dropId?`, `genderTags[]`, `isNew`, `variantIds[]` |
| Variant | `id`, `productId`, `sku?`, `options{size,color}`, `priceMinor`, `compareAtMinor?`, `currency`, `availability{status,quantity?}` |
| Cart | `id`, `currency`, `lines[{variantId,quantity,unitPriceMinor}]`, `subtotalMinor`, `status`, `updatedAt` |
| Filters | `category`, `productType`, `genders[]`, `priceBands[]`, `saleOnly`, `newOnly`, `sort`, `query`, `page` |
| UI | `selectedVariantId`, `quantity`, `wishlistIds[]`, `cartOpen`, `filtersOpen`, `currencyDialogOpen`, `newsletterStatus` |

Keep money in integer minor units with an explicit currency. Resolve availability through a supplied commerce adapter; do not infer stock from a visible badge. Normalize image alt text and route slugs separately from display titles.

**OPTIONAL — state and purchase handling.** Product selection moves from loading to ready, unavailable or error. A variant must be selected before adding; quantity must be a positive integer. Cart mutations move through idle, pending, success or error and preserve the previous confirmed cart on failure. Combine identical variant lines, recompute totals from confirmed prices and show empty-cart recovery. Filters should serialize into URL parameters, reset pagination after changes and provide empty/loading/error results. Wishlist persistence, newsletter submission, currency conversion and hosted checkout are separate integrations. Connect them only when credentials, pricing rules and backend contracts are available; until then, show explicit demonstration states.
