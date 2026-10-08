# Aurelia Hotel mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [79.0, 80.0, 809.0, 809.98, 810.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (max-width:1199px) and (min-width:80px)",
  "@media (max-width:79px) and (min-width:0)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)",
  "@media (max-width:1199px) and (min-width:0)"
]
```

## Source section anchors

```json
[]
```

## Source-specific responsive plan

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 declares 80px desktop, 64px tablet and a phone preset in source; main content containers declare max-width:1180px and 24px horizontal padding. About uses desktop 160px vertical padding and tablet 120px 24px 64px. An additional type query has an unusual 80px lower/79px upper boundary; treat as literal source artifact, not a device recommendation. OPTIONAL RECOMMENDATION: stack booking fields in source label order and keep room metadata readable.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
