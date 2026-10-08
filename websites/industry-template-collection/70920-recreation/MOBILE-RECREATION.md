# Renovation mobile recreation

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
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)"
]
```

## Source section anchors

```json
{
  "Hero": "#hero",
  "More info": "#more-info",
  "About us": "#about-us",
  "Services": "#services",
  "Projects": "#projects",
  "Reviews": "#reviews",
  "FAQs": "#faqs",
  "Contact": "#contact"
}
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Hero padding changes from 140px 40px 100px to 120px 18px 80px; service sections from 100px 40px to 80px 18px. Section containers declare max-width 1200px. Hero h1 74px base /42px compact; section h2 48/36/32px. OPTIONAL: keep the image capsules in reading order and reserve bottom-nav space so it does not cover contact controls.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
