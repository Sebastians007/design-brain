# Atlas Studio — website recreation specification

Preview: https://atlas-studio.framer.website/  
Creator: Bryn Taylor  
Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Black seams divide rounded, nearly full-width panels. Tall condensed display type, quiet sans body text, monospaced metadata and generous empty space create the character. The hero is centered inside a blue-to-lime gradient; a small orange circular action supplies contrast. Project photography carries the work grid. Preserve the unusually large display typography and the dark seams around each light panel.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use New Title 500 for display headings, General Sans for interface and body, and Chivo Mono for metadata.
- Keep panel radius 32px and the 4px black separation; avoid adding a grid of small generic cards.
- Hero heading is 160px/144px at the inspected desktop width; section headings 96px/96px.
- Use two 582px project columns with a 24px gap and varied image heights.
- Keep studio, services, blog, testimonials, CTA and the huge footer as separate full-width panels.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero | New Title | 500 | 160 | 144 | normal |
| Section | New Title | 500 | 96 | 96 | normal |
| Project/service | New Title | 500 | 48 | 48 | -0.48px |
| Statement | General Sans | 500 | 40 | 48 | -0.4px |
| Body | General Sans | 500 | 20 | 26 | 0.2px |
| Nav | General Sans | 600 | 14 | 18.2 | -0.07px |
| Metadata | Chivo Mono | 500 | 14 | 16.8 | normal |

Values refer to the inspected 1363×936 desktop viewport. Check evidence.json for the actual rendered sample boxes. Fit oversized brand words to available width instead of fixing the desktop size at every breakpoint.

Load the included source font files and declared weights. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#000000",
  "paper": "#F0F0F0",
  "ink": "#000000",
  "accent": "#FFA76A"
}
```

The orange accent #FFA76A is a recommended visual approximation; gradient endpoints and black/light surfaces are measured.

Desktop gutter target: 80px. Principal radius: 32px. Component gap: 24px. These are section-specific: do not apply one radius or padding indiscriminately. Agentic project corner radius is a visual estimate; its footer top corners are declared 60px. Arpeggio media is largely sharp edged. Atlas panel gradients and spacing are directly recorded in renderedFrameGeometry.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | 112 | 760 | Centered display, circular orange action, blue/lime gradient. |
| Work | 872 | 3334 | Two columns of six image-led project entries with fine rules and year metadata. |
| Belief | 4206 | 660 | One broad 40px statement; considerable surrounding whitespace. |
| Logo ticker | 4866 | 286 | Horizontal client-logo strip. |
| Services | 5152 | 2588 | Lime/peach gradient, very large categories, 48px service names. |
| Studio | 7740 | 1143 | Team/studio story and portraits, quiet supporting text. |
| Blog | 8884 | 1349 | Three editorial links and image cards. |
| Testimonials | 10233 | 671 | Large quotation and compact attribution. |
| Contact CTA | 10904 | 428 | Peach/pink gradient and orange circular action. |
| Footer | 11332 | 898 | Utility links and full-width fitted brand wordmark. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. For exact section boxes where collected, inspect evidence.json. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

An inspected secondary route is included as a screenshot and structured style evidence. Build it from the same type, palette, navigation and footer system rather than inventing a separate visual language.

## 7. Components and interactions

Sticky navigation, moving logo strip, rotating circular CTA and rollover label duplication are present. Exact rotation speed, easing and reveal timing were not measured.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Public CSS declares desktop ≥1200px, tablet 810–1199px and phone ≤809px. No phone viewport was visually captured. Stack the work grid and studio composition at phone widths. Preserve the panel seams and radius; reduce inner padding to 20–24px and display headings to roughly 64–84px as a recommended starting point.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.
