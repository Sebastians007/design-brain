# WAIS mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [319.0, 320.0, 767.0, 809.0, 809.98, 810.0, 817.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (prefers-color-scheme:dark)",
  "@media (max-width:817px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (max-width:767px) and (min-width:320px)",
  "@media (max-width:319px) and (min-width:0)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)"
]
```

## Source section anchors

```json
[]
```

## Source-specific responsive plan

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Heading presets separately use <=817px with >=810px, <=809px, and 767/320/319px caption ranges. Hero padding changes from 120px 0 100px to 120px 0 60px on tablet and 100px 0 60px on phone. Source What is it height changes 1450px desktop, 1345px tablet, min-content phone; these are CSS declarations, not measured scroll distance. OPTIONAL: preserve the hero and agenda reading order; verify narrow widths before retaining fixed section/card heights.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
