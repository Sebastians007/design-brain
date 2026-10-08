# Essentia — commerce blueprint

Essentia is a single-product beauty storefront whose home story ends at the purchase anchor `/#ordernow`. About, Journal, Support and legal links are declared secondary destinations. No catalog page is established by this evidence. The template purchase overlay is a separate marketplace promotion, not the skincare checkout.

## SOURCE DECLARED

The public HTML serializes product `8465719853225`, title Essentia™, handle `essence-complete-system`, with two size variants. Standard (50 ml), ID `45649946575017`, declares price 85.0 CAD and comparison price 125.0 CAD. Travel (20 ml), ID `45649946542249`, declares 42.0 CAD and comparison price 75.0 CAD. Both carry selected size options and the same image reference. `availableForSale:true` is a serialized snapshot, not verified live inventory. `requiresSellingPlan:false` and empty selling-plan groups are declared.

The product gallery has four corresponding full images and thumbnails, initially marking the first selected. Size controls use buttons with `aria-pressed`; quantity has subtract, input and add controls. Add to Bag appears in the full purchase section and companion bar. The companion includes variant Change linking to the purchase anchor. Navigation contains a bag count. Shipping, return policy and FAQ disclosures are present. Their runtime behavior was not exercised.

## OPTIONAL IMPLEMENTATION SCHEMA

| Record | Recommended fields |
| --- | --- |
| Product | `id`, `handle`, `title`, `description`, `galleryIds`, `variantIds` |
| Variant | `id`, `productId`, `sizeLabel`, `volumeMl`, `priceAmount`, `currencyCode`, `compareAmount`, `imageId`, `availabilityStatus` |
| Gallery item | `id`, `src`, `alt`, `width`, `height`, `order`, `cropMode` |
| Cart line | `lineId`, `variantId`, `quantity`, `unitPriceSnapshot`, `currencyCode` |
| Cart | `cartId`, `lines`, `subtotal`, `status`, `updatedAt` |

These field names and cart records are recreation recommendations, not a recovered backend schema. Use integer minor units for arithmetic and derive totals from server-confirmed prices.

## OPTIONAL PURCHASE FLOW

Recommend Order Now → anchor → inspect gallery → choose size → adjust positive integer quantity → Add to Bag → confirm result and update count → review cart. Keep both purchase controls synchronized and merge repeated additions of the same variant. Preserve the selected size when returning from cart. Show pending, success and recoverable failure states without losing user input.

Any checkout handoff must be supplied and tested separately. Live stock, persistence, tax, shipping charges, checkout creation, payment processing and order completion remain unverified. Promotional reassurance labels and public product snapshots establish no transaction guarantees.
