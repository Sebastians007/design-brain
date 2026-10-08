# Launchpad Learning mobile recreation

Live phone/tablet views were NOT rendered: the available browser used a fixed viewport. No phone or tablet screenshot is fabricated or inferred from the desktop image. The following values are parsed public CSS declarations and implementation guidance. Validate them by rendering the recreation at each source-specific boundary.

## Parsed breakpoint anchors

Principal boundaries (px): [1200, 810].

All parsed media boundary values (px): [50.0, 98.0, 290.0, 390.0, 400.0, 420.0, 460.0, 480.0, 500.0, 550.0, 600.0, 680.0, 690.0, 700.0, 750.0, 800.0, 809.0, 809.98, 810.0, 900.0, 920.0, 1000.0, 1199.0, 1199.98, 1200.0, 1280.0, 1440.0, 1500.0, 1880.0].

## Source media-query rules

```json
[
  "@media(min-width: 1200px)",
  "@media(min-width: 810px) and (max-width: 1199.98px)",
  "@media(max-width: 809.98px)",
  "@media (min-width:810px) and (max-width:1199.98px)",
  "@media (max-width:1199px) and (min-width:810px)",
  "@media (max-width:809px) and (min-width:0)",
  "@media (max-width:809.98px)"
]
```

## Source section anchors

```json
[
  {
    "id": "hero",
    "basis": "literal home source HTML id"
  },
  {
    "id": "overview",
    "basis": "literal home source HTML id"
  },
  {
    "id": "CURRICULUM",
    "basis": "literal home source HTML id"
  },
  {
    "id": "whats-included",
    "basis": "literal home source HTML id"
  },
  {
    "id": "reviews",
    "basis": "literal home source HTML id"
  },
  {
    "id": "about",
    "basis": "literal home source HTML id"
  },
  {
    "id": "certification",
    "basis": "literal home source HTML id"
  },
  {
    "id": "pricing",
    "basis": "literal home source HTML id"
  },
  {
    "id": "cta",
    "basis": "literal home source HTML id"
  }
]
```

## Source-specific responsive plan

SOURCE DECLARED: root desktop >=1200px, tablet 810–1199.98px, phone <=809.98px. h1 base 63px, tablet 60px, phone 40px; h2 base/tablet 48px, phone 36px. Hero padding is 150px 30px 0, tablet 150px 20px 0. Curriculum is 125px 30px on desktop and 75px 20px on phone. Instructor desktop gap is 100px. OPTIONAL RECOMMENDATION: preserve module order, course-inclusion hierarchy and readable price/CTA when stacking.

Preserve DOM reading order, real source navigation alternatives, image focal crops, declared font families/weights/italics/axes and the actual CSS contexts in source-declarations.json. Use the recorded browser viewport as one comparison point. Render widths immediately below and above the parsed anchors, plus a phone width. Test keyboard access, focus and reduced motion. Record any substitutions and unobserved states.
