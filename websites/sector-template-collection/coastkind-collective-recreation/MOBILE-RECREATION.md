# Coastkind Collective mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1440, 810].

All parsed media boundary values (px): [809.98, 810.0, 1439.98, 1440.0].

## Source media-query rules

```json
[
  "@media(min-width: 1440px)",
  "@media(min-width: 810px) and (max-width: 1439.98px)",
  "@media(max-width: 809.98px)",
  "@media (min-width:810px) and (max-width:1439.98px)",
  "@media (max-width:809.98px)"
]
```

## Source section anchors

```json
{
  "Skip destination": "#main"
}
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1440px, tablet 810–1439.98px, phone <=809.98px. Hero Besley h1 declares 68px base, 63px tablet inline and 52px phone inline at line-height1em; phone text centers. Desktop uses Focus Poster Grid while tablet/phone have separate carousel structures. OPTIONAL RECOMMENDATION: maintain label/action order when stacking mission and action panels; adapt newsletter field width without truncating validation text.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
