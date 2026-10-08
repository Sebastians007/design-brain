# Menorca commerce blueprint

[Menorca](https://menorca.framer.media/), by MartoMads, presents an editorial apparel shop. This blueprint distinguishes public home declarations from an official product reference and optional implementation work. No purchase interaction was tested. Dynamic commerce may be missing from public server-rendered HTML, so an absent control is not proof that the template lacks it.

## SOURCE DECLARED

The home links category routes under `/product/` for tees, hoodies, bottoms, swimwear, caps and women; collection routes under `/collections/` include most-wanted, essentials, summer26 and chapter1. Linked product cards use `/product-page/{slug}`. Three merchandise grids alternate with collection photography, followed by directory and legal links. Desktop and phone card structures, product titles, small collection badges, product imagery and a named second hover image are present. Navigation contains cart-selector and language/selector structures. A newsletter overlay includes backdrop and close-control variants. These declarations establish content architecture, not operational success.

## OFFICIAL REFERENCE ONLY

The product screenshot shows a two-image presentation: an isolated garment beside a lifestyle photograph, with a narrow purchase column. That column displays a stock message, product title and price, size choices, Add to cart and Buy Now controls, and detail/description/guarantee sections. Its navigation displays a country/currency label and nonzero cart count. These are visible controls and example states. They do not verify stock enforcement, currency conversion, quantity updates, checkout destination, payment provider or order completion.

## OPTIONAL RECOMMENDATIONS

Use a product record containing `id`, `slug`, `title`, `categoryId`, `collectionIds`, `images[{src,alt,focalPoint,role}]`, `badge`, `description`, `detailGroups` and `variants[{id,label,options}]`. Add `priceAmount`, `currencyCode` and `availability` only when authoritative commerce data exists; keep their provenance explicit. Store display image and lifestyle image separately to retain the reference’s visual logic.

A cart line can contain `productId`, `variantId`, `quantity` and an authoritative unit-price snapshot. Recommend validated variant selection, accessible selection states, removable lines and clear empty/error states. Persistence is a design choice requiring implementation, not a source claim.

Recommended flow: category or collection → product detail → variant selection → cart review → a configured checkout integration. Treat direct purchase as optional until its destination is verified. Before launch, test route resolution, size availability, cart count synchronization, totals, locale presentation, checkout handoff and return behavior. Verify newsletter consent and submission independently. Use fresh policy and promotional text supplied by the store owner.
