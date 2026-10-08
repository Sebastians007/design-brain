# Ecommerce: five Framer storefront references

This collection studies four Ecommerce categories: Fashion (two contrasting references), Beauty, Furniture and Digital products. Every folder keeps the original four-file format plus local assets, typography/layout declarations, recipes and AI instructions. COMMERCE-BLUEPRINT.md separates source evidence from optional additions; COMMERCE-STATES.json proposes an implementation schema. None of these files establishes a working payment or fulfillment integration.

| Template | Category | Visual direction | Shopping structure |
|---|---|---|---|
| Menorca | Fashion | Coastal photography, handwritten accents, pale merchandise cards | Editorial collections, category grid, garment gallery and size purchase controls |
| RAWLINE | Fashion | Black/cream/red streetwear, mono display and italic serif contrasts | Search/wishlist/cart affordances, filtered catalog, multi-image product details |
| Essentia | Beauty | Ivory/sage skincare narrative with isolated jar and hand | One product, four-image gallery, two serialized size variants and home-page purchase anchor |
| FF Shop | Furniture | Warm gray, hairline grids, sculptural furniture and Uncut Sans | Category navigation, interleaved catalog mood media and material variant purchase layout |
| Creator Store | Digital products | Dimensional shelves, paper receipts, tag buttons and walnut/cream scenes | Product types, bundles, courses, catalog, product page and local checkout route |

## Why the category matters

Fashion relies on fit, size and garment imagery; furniture adds material and room context; a single skincare product benefits from a long explanatory story and a direct home purchase section; digital products need contents, formats, license terms and delivery expectations. Preserve each source's decision structure. Do not force a catalog onto Essentia or replace Creator Store's physical shelf metaphor with generic software cards.

## Source coverage

The five public home previews and official marketplace images were inspected. Secondary public HTML/CSS was also inspected: Menorca tees catalog and Bonjour cable-knit sweater; RAWLINE all-category catalog and long-sleeve shirt; FF Shop all-category catalog and Arch chair; Creator Store products catalog, Figma UI Kit and checkout; Essentia support, while its purchase section is already in the home source. Exact links and per-page declarations are in each folder. Creator Store's custom component CSS is mapped separately because Framer text presets miss its visible font and dimensional layout roles.

Official artwork can contain device bezels, outer mats, marketing labels and montages spanning different pages. These are promotion, not website UI. Twelve traceable crops per template provide visual details; they are not twelve independent browser captures. Public CSS gives selectors, alternatives and constraints; it does not establish computed geometry or runtime state.

## Recommended additions

Optional implementation improvements include explicit option-required, selected, adding, added and error states; accessible keyboard focus; clear cart quantities and empty-cart handling; visible selected price/currency; reserved image ratios; and readable reduced-motion versions of reveals, tickers and 3D transforms. Implement a control only where the reference calls for it. Never add a new visible section just to satisfy a generic commerce checklist.

Use integer minor units for prices and preserve canonical product/variant records across breakpoint duplicates. Serialized availability and demo prices are source snapshots. Configure inventory, tax, shipping, payment and delivery only against a supplied authorized backend. Digital purchase links must lead to an actual authorized destination; a local checkout page or provider name in template copy is insufficient evidence of connected payment or download delivery. Creator Store's Launch Stack arithmetic discrepancy is recorded rather than silently treated as correct.

## AI handoff and verification

Give a building AI one complete template folder or individual ZIP and paste its AI-HANDOFF.md. Have it inspect FRAME.md, fonts, the asset manifest, reference sheet, component recipes, custom declarations where present, and catalog/product declaration map. Prioritize silhouette, typography, image crops and full section order; then implement responsive variants and declared shopping controls. Compare rendered desktop, tablet and phone pages against source artwork before claiming fidelity, and report substitutions.

This collection was statically validated for document structure, local resources, image/font integrity, caption injection contract, JavaScript syntax, asset hashes and archive integrity. Live browser layout, motion, cart requests, inventory, checkout, payment and fulfillment were not tested.
