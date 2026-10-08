# Keep mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [809.0, 809.98, 810.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (prefers-color-scheme:dark)",
  "@media (max-width:809.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (min-width:810px) and (max-width:1199.98px)"
]
```

## Source section anchors

```json
[]
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px; typography presets also use 1199px and 809px maxima. Hero uses 80px 40px padding, then phone column layout with 48px 24px and 32px gap. Copy width is 520px desktop, 50% tablet and 100% phone; collage declarations are 460×420px, 300px/auto with aspect ratio 1.09524 tablet and 342×312px phone. Display presets step h1 76/54/40px and h2 46/36/30px. OPTIONAL: test collage fit below 390px, stack tiers and steps in source order, and preserve informative badges beside their actions.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
