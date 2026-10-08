# Meridian Residences mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [809.98, 810.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (prefers-color-scheme:dark)",
  "@media (max-width:809.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (prefers-reduced-motion: reduce)"
]
```

## Source section anchors

```json
[]
```

## Source-specific responsive plan

SOURCE DECLARED: primary root variants are desktop >=1200px, tablet810–1199.98px and phone<=809.98px. Ascent hero declares100vh/min-height640px; tablet minimum620px and phone minimum660px. Native custom inline heading sizes are initial declarations, not proof of compact rendered sizes. The phone nav has a Menu/Open Icon/Drawer structure. OPTIONAL: stack residence photography and text, reduce serif headlines according to available width, preserve floor metadata and switch the rail to discrete controls if touch dragging obscures content.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
