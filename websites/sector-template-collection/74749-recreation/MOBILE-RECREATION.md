# Charity Foundation mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [359.0, 420.0, 600.0, 640.0, 699.0, 700.0, 760.0, 809.0, 809.98, 810.0, 1099.0, 1099.98, 1199.98, 1200.0, 1240.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:809.98px)",
  "@media (max-width:600px),(hover:none)",
  "@media (prefers-reduced-motion:reduce)",
  "@media (max-width:1240px)",
  "@media (max-width:420px)",
  "@media (max-width:359px)",
  "@media (max-height:640px)",
  "@media (max-width:809px)",
  "@media (max-width:1099px)",
  "@media (max-width:699px)",
  "@media (hover:none),(pointer:coarse)",
  "@media (max-height:760px)",
  "@media (hover:hover)",
  "@media (hover:none)",
  "@media (max-width:700px)",
  "@media (min-width:810px) and (max-width:1099.98px)"
]
```

## Source section anchors

```json
{
  "Skip destination": "#main"
}
```

## Source-specific responsive plan

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Custom hero uses desktop1440, tablet810 and phone390 variant data, with 100svh and min-heights660/860/700px respectively. Desktop copy left48/top138/width640; gift panel right48/bottom44/width392. Hero type80/64/42px and phone body14.5px. ws-wrap uses56px padding and clamp(1280px,92vw,1520px) max-width expression; phone-specific sections use18px. Additional width/height/hover queries are retained literally. OPTIONAL RECOMMENDATION: fit selectors in normal document flow on short screens and preserve paired frequency/amount labels.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
