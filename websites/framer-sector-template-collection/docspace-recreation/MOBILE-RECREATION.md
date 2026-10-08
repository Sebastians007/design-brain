# Docspace mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [0.0, 809.0, 809.98, 810.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (prefers-color-scheme:dark)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)"
]
```

## Source section anchors

```json
[
  {
    "id": "main",
    "tag": "div",
    "path": [],
    "meaning": "Source DOM ID; no invented content anchor"
  }
]
```

## Source-specific responsive plan

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Left sidebar declares 280px desktop and 240px tablet; its phone variant is hidden. Right rail declares 25%/max-width340px and is hidden on tablet/phone. Central container max-width700px; main content gap52px/48px/42px. Header gutters32px desktop,28px tablet,16px phone. H1 preset is32px desktop,30px tablet,28px phone; body16px desktop and15px compact. OPTIONAL RECOMMENDATION: retain labelled menu access and horizontally contained code/table overflow while the prose remains viewport-width.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
