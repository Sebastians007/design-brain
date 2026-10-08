# Supportify mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [0.0, 809.0, 810.0, 1199.0, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199px)",
  "@media(max-width: 809px)",
  "@media (prefers-color-scheme: dark)",
  "@media (min-width: 810px) and (max-width: 1199px)",
  "@media (max-width: 809px)",
  "@media (max-width: 1199px) and (min-width: 810px)",
  "@media (max-width: 809px) and (min-width: 0px)",
  "@media (max-width: 1199px) and (min-width: 0px)"
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

SOURCE DECLARED: desktop >=1200px; tablet810–1199px; phone<=809px. Content Wrapper max-width1080px and gap120px desktop/80px tablet; Categories and quick-link collection declare two columns on wide screens and one column on phone. Hero48px desktop,40px tablet/phone; article h1 is32px desktop and26px <=1199px. Newsletter outer panel declares80px desktop padding and40px20px compact variant. OPTIONAL RECOMMENDATION: preserve title/excerpt pairs and let long support questions wrap above each divider.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
