# Financial Advisor mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [399.0, 420.0, 499.0, 519.0, 599.0, 699.0, 799.0, 809.98, 810.0, 899.0, 999.0, 1099.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)",
  "@media (prefers-reduced-motion:reduce)",
  "@media (max-width:1099px)",
  "@media (max-width:519px)",
  "@media (max-width:699px)",
  "@media (hover:none),(pointer:coarse)",
  "@media (max-width:1199px)",
  "@media (max-width:999px)",
  "@media (max-width:399px)",
  "@media (max-width:599px)",
  "@media (max-width:799px)",
  "@media (max-width:499px)",
  "@media (max-width:899px)",
  "@media (max-width:420px)"
]
```

## Source section anchors

```json
[
  "#main"
]
```

## Source-specific responsive plan

SOURCE DECLARED: Wrapper boundaries are 1200 and 810px. Custom component media queries additionally use 1199/1099/999/899/799/699/599/519/499/420/399px; these are preserved separately..wo-wrap uses 56px padding, 32px <=1099 and 20px <=699. Hero h1 is clamp(44px,5.6vw,92px) with.98 line-height; numeric role rows evaluate at1440px, yielding80.64px/79.0272px. Section headings have independent clamp expressions. OPTIONAL RECOMMENDATION: stack planning input controls before the chart, retain labels and assumptions, and show advisor/service/fee cards in reading order.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
