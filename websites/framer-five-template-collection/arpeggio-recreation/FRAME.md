# Arpeggio — website recreation specification

Preview: https://arpeggio.framer.website/  
Creator: Tamas Bodo  
Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

The hero is a full-bleed cyan and blue portrait with smoke, orange navigation details and an enormous orange Arpeggio wordmark across the lower edge. White cross marks provide a repeated registration motif. The introductory white sans headline contrasts with a smaller serif aside. Full-height project promos and paired scrolling images follow; later sections transition through a dark services stage into a white subscription/pricing story. Match the image crops, full-viewport pacing and bold brand graphics first.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use the actual cyan portrait and orange brand shape; do not replace the hero with a flat cyan fill.
- Hero wordmark is vector-like artwork. Do not infer its font from surrounding Inter Display text.
- Retain 40px media gutters, full-height project promos and alternating black/white stages.
- Use Inter Display for most text and Playfair Display for the limited serif accent.
- The hero uses fitted SVG text: inner spans declare 45.6591px, while the outer H1 declares 27.2194px. Match the fitted composition, not the outer wrapper.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Fitted hero span | Inter Display | 500 | 45.6591 | SVG fit text | -0.04em |
| Services display | Inter Display | 800 | 130 | 130 | -5.2px |
| Section lead | Inter Display | 600 | 72 | 79.2 | -2.88px |
| Closing CTA | Inter Display | 600 | 84 | 84 | -3.36px |
| Project heading | Inter Display | 500 | 48 | 57.6 | -1.92px |
| Body | Inter Display | 400 | 21 | 29.4 | -0.84px |
| Subheading | Inter Display | 500 | 28 | 33.6 | -1.12px |
| Serif aside | Playfair Display Variable | 400 | 32 | 32 | -0.96px |

Values refer to a 1363×936 desktop viewport. Long pages can contain offscreen, transformed or duplicated variants: evidence.json retains samples, but the prioritized roles above distinguish the intended typography. Arpeggio’s hero uses fitted SVG text: inner spans declare 45.6591px while the outer H1 declares 27.2194px. The SVG viewBox scales the visible result to its container.

Load the included source font files and declared weights. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#FFFFFF",
  "paper": "#000000",
  "ink": "#333336",
  "accent": "#FF4400",
  "muted": "#6F6F75"
}
```

Desktop gutter target: 40px. Principal radius: 0px. Component gap: 20px. These are section-specific: do not apply one radius or padding indiscriminately. Agentic project corner radius is a visual estimate; its footer top corners are declared 60px. Arpeggio media is largely sharp edged. Atlas panel gradients and spacing are directly recorded in renderedFrameGeometry.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | 0 | 936 | Full-bleed portrait, huge orange brand, white cross marks, split intro. |
| Intro/media | 936 | 936 | Full-height video/story introduction. |
| Scrolling pairs | 1872 | 2340 | Three paired image compositions, approximately 740px each. |
| Project promos | 4212 | 2808 | Three full-viewport project promotions. |
| Achievements | 7020 | 1999.6 | Metrics and awards; 200px vertical and 40px horizontal padding. |
| Services | 9019.6 | 1800 | Large 130px display, three service cards and dark-to-light transition. |
| Benefits | 10819.6 | 2260.8 | White story section and benefit modules. |
| Pricing/FAQ | 14040 | Unverified | Subscription plans, switch and accordion. |
| Testimonials/journal | 16848 | Unverified | Client content and editorial imagery. |
| Contact/closing | 19656 | Unverified | Large call to action, portrait/brand media and footer. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. For exact section boxes where collected, inspect evidence.json. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

An inspected secondary route is included as a screenshot and structured style evidence. Build it from the same type, palette, navigation and footer system rather than inventing a separate visual language.

## 7. Components and interactions

Large type and paired images change with scroll. A dot/dark-to-light service transition and full-height media stories are visible. Exact trigger positions, expansion radius, pin duration and menu behavior remain unverified.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Public CSS declares desktop ≥1200px, tablet 810–1199px and phone ≤809px. No phone viewport was visually captured. Preserve the portrait focal point on narrow screens. Fit the brand artwork to viewport width, reduce cross-mark density, stack paired media and pricing, and turn pinned stories into natural vertical sections. Recommended phone gutters: 16–24px.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.
