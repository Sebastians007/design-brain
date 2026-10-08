# Foodly mobile recreation

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

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero h1 is 60px desktop and 40px tablet/phone. h2 preset declares 48px base, 32px tablet and 24px phone; first-match source extraction can report the tablet value before the base declaration. Main modules declare max-width:1280px, desktop 80px horizontal padding and tablet 16px. Hero wrapper declares column direction on phone. OPTIONAL RECOMMENDATION: preserve category and reservation reading order, keep thumbnails tappable and prevent offer ticker overflow from widening the page.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
