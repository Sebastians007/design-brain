# Online Course mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [18.0, 40.0, 42.0, 44.0, 46.0, 48.0, 52.0, 58.0, 60.0, 96.0, 180.0, 200.0, 260.0, 300.0, 320.0, 360.0, 380.0, 400.0, 420.0, 430.0, 440.0, 460.0, 520.0, 540.0, 560.0, 600.0, 699.0, 720.0, 809.0, 809.98, 810.0, 820.0, 1099.0, 1199.98, 1200.0].

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
  "@media (max-width:380px)",
  "@media (max-height:540px)",
  "@media (max-width:809px)",
  "@media (hover:hover) and (pointer:fine)",
  "@media (hover:none)",
  "@media (max-width:1099px)",
  "@media (max-width:699px)"
]
```

## Source section anchors

```json
[
  {
    "id": "pricing",
    "tag": "section",
    "basis": "literal home HTML id"
  },
  {
    "id": "faq",
    "tag": "section",
    "basis": "literal home HTML id"
  }
]
```

## Source-specific responsive plan

SOURCE DECLARED: Framer root breakpoints1200 and810px; custom .pm-wrap horizontal pad56px, max-width calc(clamp(1280px,92vw,1520px)+pad*2), pad32px under1099px and20px under699px. Hero copy max-width min(600px,42%); phone .pmh.is-ph h1 clamp(46px,13vw,64px). Course-card title clamp(28px,2.2vw,31px); lesson split grid58fr/42fr with fluid gap. Additional custom thresholds600px,380px and max-height540px target touch/short screens. OPTIONAL RECOMMENDATION: preserve normal card links and lesson order on phones and keep scrollable areas independently accessible.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
