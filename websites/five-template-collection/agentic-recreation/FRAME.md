# Agentic — website recreation specification

Preview: https://agentic.framer.website/  
Creator: Cristian Mielu  
Evidence coverage: Live desktop preview, rendered DOM/style measurements, source media URLs and viewport screenshots. Phone rendering unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

A white full-screen hero places a stacked oversized navigation at left, a short agency description at right, a QR block at top right and a gigantic orange AGENTIC wordmark along the bottom. A rotating diamond motif and fixed HOME/QR blocks continue through full-height portfolio scenes. The work cards use huge rounded inset panels, project title and metadata at left, and large mockup media at right. Team scenes, award rows and services build toward a black footer with another enormous orange wordmark.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Hero menu uses Inter Display 700 at 80px/64px; its outer link wrapper has a misleading 12px style.
- The giant wordmark uses Inter Tight 900, measured near 273.45px at this desktop width. Fit it to width.
- Preserve the left-menu/right-description asymmetry and orange brand baseline.
- Projects are viewport-height scenes, inset 24px, with approximately 60px visual corner radii.
- Keep the rotating diamond, QR blocks, oversized team scenes and dark final scene.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero menu | Inter Display | 700 | 80 | 64 | normal |
| Brand | Inter Tight | 900 | 273.453 | 218.762 | fit to width |
| Project/team | Inter Tight | 700 | 60 | 60 | normal |
| About statement | Inter Tight | 500 | 48 | 48 | normal |
| Description/auth | Inter Tight | 500 | 24 | 24 | normal |
| Home label | Inter Tight | 500 | 16 | 16 | normal |
| Service heading | Inter | 700 | 36 | 50.4 | normal |

Values refer to the inspected 1363×936 desktop viewport. Check evidence.json for the actual rendered sample boxes. Fit oversized brand words to available width instead of fixing the desktop size at every breakpoint.

Load the included source font files and declared weights. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#FFFFFF",
  "paper": "#000000",
  "ink": "#000000",
  "accent": "#FF3C00"
}
```

Desktop gutter target: 24px. Principal radius: 60px. Component gap: 24px. These are section-specific: do not apply one radius or padding indiscriminately. Agentic project corner radius is a visual estimate; its footer top corners are declared 60px. Arpeggio media is largely sharp edged. Atlas panel gradients and spacing are directly recorded in renderedFrameGeometry.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | 0 | 936 | Stacked four-row navigation, QR, description and fitted orange brand. |
| Project scenes | 936 | 3744 | Three full-height project scenes plus a view-all scene. |
| About/team/awards | 4680 | 10084 | Large 48px introduction; six team profiles and eight award rows. |
| Services/tools | 14764 | 6032 | Six services, tools and large scroll scenes. |
| Footer | 20796 | 936 | Black panel with 60px top corners, orange wordmark and contact links. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. For exact section boxes where collected, inspect evidence.json. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

An inspected secondary route is included as a screenshot and structured style evidence. Build it from the same type, palette, navigation and footer system rather than inventing a separate visual language.

## 7. Components and interactions

Word reveals, rotating glyphs and scene-based scroll compositions are visible. Exact sticky range, word timing and easing were not measured. Preserve reading access without requiring scroll animation. Authentication pages exist; working authentication was not verified.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Public CSS declares desktop ≥1200px, tablet 810–1199px and phone ≤809px. No phone viewport was visually captured. Reduce the fitted wordmark according to available width. Stack the description beneath the menu, retain QR only where it does not collide, stack mockups beneath project metadata, and simplify long sticky scenes to ordinary vertical content on phones.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.
