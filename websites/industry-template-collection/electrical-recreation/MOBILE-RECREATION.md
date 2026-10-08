# Electrical mobile recreation

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
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)"
]
```

## Source section anchors

```json
{
  "Why Choose Us": "#why-choose-us"
}
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Main containers declare max-width 1360px and 0 30px padding, changing to 0 16px on phone. Hero h1 66/48/40px; section h2 52/40/30px. Separate Nav - Phone, Skin - Phone and license/outline phone variants exist. OPTIONAL: stack the hero statement before technician image and preserve the licensing card and direct phone action in the mobile reading order.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
