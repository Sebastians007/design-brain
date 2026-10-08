# Rescale — website recreation specification

Preview: https://rescale.framer.ai/  
Creator: Tamas Bodo  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Official reference visuals show a white and pale lavender canvas, cyan-to-periwinkle headline accents, translucent bento cards and soft sculptural 3D forms. A compact floating navigation pill sits over the centered two-line hero. The opening letter is custom striped artwork, while the Smart AI phrase sits inside a thin rounded outline. Partner marks appear beneath the paired pill CTAs. Integration diagrams, metric bars, portraits and FAQ rows keep the same gentle spectral palette.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use Manrope for headline and section typography; the source CSS declares the exact family.
- Desktop hero CSS: 80px, weight 500, line-height 1em, tracking -0.05em. This is CSS evidence, not a browser measurement.
- Use cyan/periwinkle gradients, translucent light cards, fine borders and diffuse shadows.
- Keep the compact pill navigation, striped initial artwork, outlined hero phrase and organic 3D forms.
- Do not recreate the marketplace image border, vertical Rescale label or promotional captions as website content.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero desktop CSS | Manrope | 500 | 80 | 80 | -0.05em |
| Hero tablet CSS | Manrope | 500 | 52 | 41.6 | -0.05em |
| Hero phone CSS | Manrope | 500 | 38 | 34.2 | -0.05em |
| Section desktop CSS | Manrope | 600 | 56 | 61.6 | -0.04em |
| Section tablet CSS | Manrope | 600 | 48 | 52.8 | -0.04em |
| Section phone CSS | Manrope | 600 | 36 | 43.2 | -0.04em |

The Rescale values above are declared CSS presets, with tablet/phone variants. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#FFFFFF",
  "paper": "#F6F8FF",
  "ink": "#4D6B8D",
  "accent": "#7584D6",
  "cyan": "#7FE5F2"
}
```

Desktop gutter target: 40px. Principal radius: 16px. Component gap: 12px. These are section-specific: do not apply one radius or padding indiscriminately. Rescale geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Hero | Unverified | Unverified | Floating compact nav, two-line headline, outlined phrase, badge, paired CTAs and partner logos. |
| AI features | Unverified | Unverified | Analytics/assistant cards with growth, sales and efficiency indicators. |
| Process | Unverified | Unverified | Four steps: profile, personalization, strategy, analysis/scale. |
| Integrations | Unverified | Unverified | Five-cell bento: tall analytics cell, model visual, layout icons, bars and reliability; connected platform icons below. |
| Performance | Unverified | Unverified | Six milestone metrics with consistent accent treatment. |
| Founders/story | Unverified | Unverified | Three portraits, biographies and small social links; story alongside image stack. |
| Testimonials | Unverified | Unverified | One larger video/portrait card with smaller quotation cards. |
| Plans | Unverified | Unverified | Plan cards and comparison information. |
| FAQ | Unverified | Unverified | Fine horizontal rows, plus/minus affordances. |
| Journal/contact/footer | Unverified | Unverified | Editorial updates and contact/navigation closure. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. For exact section boxes where collected, inspect evidence.json. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official Rescale artwork has a colored outer frame, giant vertical label and promotional footer. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Public source contains menu, background-video and repeated label structures. Official stills cannot establish motion timing, menu geometry or interaction behavior. All proposed transitions below are recommendations until confirmed in a live browser.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Public CSS declares desktop ≥1200px, tablet 810–1199px and phone ≤809px. No phone viewport was visually captured. The public CSS declares phone and tablet font sizes listed above. Recommended implementation: stack the bento while preserving the tall analytics cell first; keep the hero outline readable and move decorative 3D objects away from primary text. Phone spacing and nav geometry remain unverified.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.
