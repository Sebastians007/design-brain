# ClinicHub mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 680].

All parsed media boundary values (px): [679.0, 679.98, 680.0, 809.0, 810.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 680px) and (max-width: 1199.98px)",
  "@media(max-width: 679.98px)",
  "@media (max-width:1199px) and (min-width:680px)",
  "@media (max-width:679px) and (min-width:0)",
  "@media (max-width:679.98px)",
  "@media (min-width:680px) and (max-width:1199.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)"
]
```

## Source section anchors

```json
[
  "#expertise",
  "#how-it-works",
  "#why-us",
  "#doctors",
  "#reviews",
  "#faq"
]
```

## Source-specific responsive plan

SOURCE DECLARED: page root desktop >=1200px, tablet 680–1199.98px, phone <=679.98px. H1 base 50px/1.2em becomes 40px tablet and 32px phone; h2 base 42px/1.2em becomes 35px tablet and 28px/1.4em phone. Some reused component presets additionally declare 810px/809px boundaries; do not replace page root 680px with 810px. Hero 100vh, 8px inset and 15px radius; main desktop section padding uses 60px horizontal and 80–120px vertical; responsive rules are preserved in source facts. OPTIONAL RECOMMENDATION: stack speciality collage and benefit cards in reading order and preserve captions, name/specialty metadata and the visit action.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
