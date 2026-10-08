# Finlance mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1440, 1200, 810].

All parsed media boundary values (px): [809.0, 809.98, 810.0, 1199.0, 1199.98, 1200.0, 1439.0, 1439.98, 1440.0].

## Source media-query rules

```json
[
  "@media(min-width: 1440px)",
  "@media(min-width: 1200px) and (max-width: 1439.98px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (max-width:1439px) and (min-width:1200px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (min-width:1200px) and (max-width:1439.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)"
]
```

## Source section anchors

```json
[
  "#main",
  "#header-scroll-trigger"
]
```

## Source-specific responsive plan

SOURCE DECLARED: roots use desktop >=1440px, laptop 1200–1439.98px, tablet 810–1199.98px and phone <=809.98px. Base h1 is 96px/96px; laptop upright h1 is 82px while italic h1 is 92px, tablet 56/64px, phone both 40px. Base section h2 is 52px/62.4px. Source component variants use different layout sizes. OPTIONAL RECOMMENDATION: keep account cards readable in their source order and stack product-detail copy before cropped decorative media.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
