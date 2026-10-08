# the practice mobile recreation

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
  "@media (max-width:809.98px)",
  "@media (min-width: 810px) and (max-width: 1199.98px) ",
  "@media (max-width: 809.98px) "
]
```

## Source section anchors

```json
[
  "#hero",
  "#about",
  "#numbers",
  "#services",
  "#how-it-works",
  "#book",
  "#faq",
  "#journal"
]
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. Hero Switzer76px becomes66.5px tablet and42.75px phone; italic92px becomes80.5px tablet and51.75px phone. Section pair56px/67.2px becomes49px/58.8px tablet and42px/50px phone. Hero declares max-width1680px, min-height100vh, radius28px and padding64px36px16px; main About/Numbers/Services/FAQ/Journal containers max-width1200px with36px horizontal padding. Consultation has separate desktop/tablet/phone variants; preserve their field order. OPTIONAL RECOMMENDATION: collapse service/process grids and form columns without dropping uncertainty choices, consent or privacy/urgent-support notes. Fit-text wordmark should scale to its container rather than inherit an invented fixed display size.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
