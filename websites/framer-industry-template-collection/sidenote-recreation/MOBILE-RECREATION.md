# Sidenote mobile recreation

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
  "@media (prefers-reduced-motion: reduce)",
  "@media (max-width:767px)"
]
```

## Source section anchors

```json
{
  "Hero": "#top",
  "Now Strip": "#now",
  "Series": "#series",
  "Reader Letters": "#letters",
  "Newsletter Archive": "#archive"
}
```

## Source-specific responsive plan

SOURCE DECLARED: desktop >=1200px, tablet 768–1199.98px, phone <=767.98px. Hero max-width1200px uses padding136px40px112px and gap36px; tablet padding96px40px80px/gap30px; phone72px20px64px/gap24px. Hero sentence declares width820px/max-width100%. Start Row is a three-column grid on desktop and one-column at tablet/phone. Hero Subscribe becomes a vertical stack on phone. OPTIONAL: preserve inline note references while adapting margin notes to a keyboard-operable compact drawer.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
