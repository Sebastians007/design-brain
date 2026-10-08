# Marginalia mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 768].

All parsed media boundary values (px): [767.0, 767.98, 768.0, 1199.0, 1199.98, 1200.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 768px) and (max-width: 1199.98px)",
  "@media(max-width: 767.98px)",
  "@media (prefers-color-scheme:dark)",
  "@media (max-width:1199px) and (min-width:768px)",
  "@media (max-width:767px) and (min-width:0)",
  "@media (min-width:768px) and (max-width:1199.98px)",
  "@media (max-width:767.98px)",
  "@media (prefers-reduced-motion:reduce)",
  "@media (prefers-reduced-motion: reduce)"
]
```

## Source section anchors

```json
{
  "Cover Story": "#t-cover",
  "Pull Quote": "#t-quote",
  "In This Issue": "#t-inissue",
  "Most Read": "#t-mostread",
  "Sections Ticker": "#t-ticker",
  "Archive Index": "#t-archive",
  "Contributors": "#t-contrib",
  "Numbers Strip": "#t-numbers"
}
```

## Source-specific responsive plan

SOURCE DECLARED: page variants are desktop >=1200px, tablet 768–1199.98px and phone <=767.98px. Contents declares max-width1200px with padding48px40px96px; tablet40px32px80px; phone28px20px64px. Phone navigation has a menu toggle/drawer. Media-source type alternatives remain in typePresetRules; numeric rows list base declarations, not active computed styles. OPTIONAL: keep issue contents before cover photo on phone and replace the ring with accessible linked covers if necessary.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
