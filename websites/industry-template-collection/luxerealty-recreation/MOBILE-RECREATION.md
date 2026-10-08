# LuxeRealty mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1440, 1200, 810].

All parsed media boundary values (px): [809.0, 809.98, 810.0, 1199.0, 1199.98, 1200.0, 1439.98, 1440.0].

## Source media-query rules

```json
[
  "@media(min-width: 1440px)",
  "@media(min-width: 810px) and (max-width: 1439.98px)",
  "@media(max-width: 809.98px)",
  "@media(min-width: 1200px) and (max-width: 1439.98px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media (max-width:809.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:1199px) and (min-width:0)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (min-width:810px) and (max-width:1439.98px)"
]
```

## Source section anchors

```json
[]
```

## Source-specific responsive plan

SOURCE DECLARED: primary home variants have desktop >=1440px, tablet 810–1439.98px and phone <=809.98px. Nested content additionally branches at 1200px; the source therefore has boundaries 1440/1200/810, not a universal 1200 desktop cutoff. Featured Properties declares 32px padding with 16px on phone, About 94px 40px with 94px 16px on phone; property-card h3 preset changes 18px to 16px at <=1199px. OPTIONAL: preserve scene sequence while stacking inventory and agent cards, and use the source compact filter trigger when the sidebar cannot fit.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
