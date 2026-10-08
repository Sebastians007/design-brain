# Platform — website recreation specification

Preview: https://plat-form.framer.ai/  
Creator: Tamas Bodo  
Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

The page combines a near-black background, pale warm-gray text, bright orange highlights and tightly packed bento compositions. Oversized negative-tracked headings alternate with complex work images, metallic or glass objects, charts, pricing and carousel sections. The hero centers a four-line statement while the small slogan and video card sit toward opposite sides. Keep the long-page rhythm and industrial media rather than replacing it with a short, symmetrical SaaS layout.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use Inter Display; hero and section headings are 100px/90px, weight 500, tracking -5px.
- Canvas #161719, cards #212225, pale ink #E3DBD8, accent #FA6E43.
- Keep the 24px desktop gutter, 4px bento gaps and mostly 8px card radii.
- Retain the full-height hero, 120px introductory statement and long section pauses.
- The orange right-side navigation drawer is a distinct visual state.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero/section | Inter Display | 500 | 100 | 90 | -5px |
| Intro | Inter Display | 500 | 120 | 132 | -6px |
| Section lead | Inter Display | 500 | 48 | 52.8 | -2.4px |
| Card copy | Inter Display | 400 | 24 | 36 | -0.72px |
| Subheading | Inter Display | 500 | 28 | 33.6 | -1.12px |
| Small body | Inter Display | 400 | 17 | 22.1 | -0.68px |

Values refer to the inspected 1363×936 desktop viewport. Check evidence.json for the actual rendered sample boxes. Fit oversized brand words to available width instead of fixing the desktop size at every breakpoint.

Load the included source font files and declared weights. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#161719",
  "paper": "#212225",
  "ink": "#E3DBD8",
  "accent": "#FA6E43",
  "muted": "#C0C0C0"
}
```

Desktop gutter target: 24px. Principal radius: 8px. Component gap: 4px. These are section-specific: do not apply one radius or padding indiscriminately. Platform’s bento cards are mostly 8px; keep 4px gaps and large 100–200px section pauses.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | 0 | 936 | Centered headline, accent phrase, small slogan, video card, counters and CTA. |
| Intro | 936 | 1123 | Broad 120px statement and supporting content. |
| Work | 2059 | 2460 | Large visual bento; the main composition is approximately 1300×1532px. |
| Services | 4519 | 1688 | Dark service-card matrix, approximately 1300×800px. |
| Process | 6207 | 1700 | Horizontal process carousel. |
| Analytics | 7907 | 1980 | Donut, bars, clock and line-chart panels; illustrative data. |
| Pricing | 9886 | 1928 | Three plans, billing selector, accent details. |
| FAQ | 11814 | 1456 | Eight accordion rows. |
| Team | 13269 | 1672 | Portrait carousel. |
| Testimonials | 14941 | 1728 | Quote carousel and attribution. |
| Labs | 16670 | Unverified | Editorial cards. |
| Contact/footer | 19656 | Unverified | Lead form, newsletter and utility links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. For exact section boxes where collected, inspect evidence.json. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

An inspected secondary route is included as a screenshot and structured style evidence. Build it from the same type, palette, navigation and footer system rather than inventing a separate visual language.

## 7. Components and interactions

Navigation drawer opening and closing was tested. Carousels, counters, billing toggle, FAQ and media affordances were seen; their detailed state transitions were not all exercised. Particle/video material is source media, not a CSS gradient.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Public CSS declares desktop ≥1200px, tablet 810–1199px and phone ≤809px. No phone viewport was visually captured. Collapse complex bento grids in their reading order. Retain 16–24px edge spacing and dark contrast. Recommended phone headings: 48–64px with less negative tracking. Replace the wide drawer with a full-width phone panel.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.
