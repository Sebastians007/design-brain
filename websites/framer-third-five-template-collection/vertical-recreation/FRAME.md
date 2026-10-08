# Vertical — website recreation specification

Preview: https://vertical.framer.media/  
Creator: Tamas Bodo  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Vertical turns an artist portfolio into a sequence of editorial spreads. Acid green interrupts near-black, while pale gray creates quieter reading intervals. Heavy Inter letters occupy architectural space: the hero divides its name into three offset fragments rather than a conventional centered title. Small IBM Plex Mono indices, phase labels, rules, and catalog details establish a technical counterpoint. Portraits and experimental imagery fill hard-edged panels, with text layered against deliberate negative space. Repeated split compositions, abrupt color changes, and enormous headlines create continuity across varied work. The result feels like an artist's publication translated into a dense, scrolling digital exhibition.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Preserve the actual hero's VER / TI / CAL fragment composition, portrait layer, three-line message, four phase columns, and lower skill list; promotional alternative logos are optional examples.
- Use Inter 700 with tight negative tracking for major display text; use IBM Plex Mono 400 for technical captions. Figtree and Fragment Mono belong to the Get Template promotion, not the main editorial voice.
- Keep sharp, full-width panel transitions between #050609, #81ff28, #d9d9d9, #f2f2f2 and white; the rounded device frame and smoky surround in official images are promotional presentation graphics.
- Retain the twelve named Main sections in source order. The Featured Study includes three small thumbnails plus separate Image Top and Image Bottom regions, even though its promotional still looks like one continuous portrait.
- Treat typography values as source declarations only. Hero fragment 409.1435px and gallery scale transforms are fitted or initial-state values, not rendered geometry or verified animation measurements.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Desktop navigation — inline declaration | Inter | 700 | 16 | 16 | -0.04em |
| Hero fragments — inline fitted declaration, not measured | Inter | 700 | 409.14351851851853 | 327.31481481481484 | -0.08em |
| Hero message line 1 — inline fitted declaration, not measured | Inter | 700 | 62.14660224118433 | 62.14660224118433 | -0.07em |
| Hero phase caption — inline declaration | IBM Plex Mono | 400 | 12 | 14.4 | -0.04em |
| Intro title — preset 12opk28 desktop | Inter | 700 | 70 | 70 | -0.05em |
| Concept description — preset djcwi0 desktop | Inter | 700 | 40 | 40 | -0.04em |
| Statement opening — preset 1oxe2wz desktop | Inter | 700 | 58 | 58 | -0.04em |
| Editorial subtitle — preset rk70ec desktop | Inter | 600 | 24 | 28.8 | -0.06em |
| Technical paragraph — preset xmagph desktop | IBM Plex Mono | 400 | 16 | 19.2 | -0.04em |
| About profile subtitle — preset v1zc9k | Inter | 600 | 16 | 17.6 | -0.04em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#050609",
  "paper": "#f2f2f2",
  "ink": "#F2F2F2",
  "accent": "#81ff28",
  "muted": "#d9d9d9",
  "inverseInk": "#050609"
}
```

Recommended starting desktop gutter: 24px. Principal radius: 0px. Component gap: 32px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Section 0 - Hero | Unverified | Unverified | Near-black 100vh opening: layered portrait, staggered name fragments, manifesto and technical phase columns. |
| Section 1 - Intro | Unverified | Unverified | Image-led introduction with large declaration, paired subtitles and an author line; desktop section begins with 160px top padding. |
| Section 2 - Image Gallery | Unverified | Unverified | Six captioned image blocks: Top uses a 12-column grid and Bottom a 13-column grid; rows have 60px separation. |
| Section 3 - Concept | Unverified | Unverified | Full-height black left panel with index, revision and project title; gray right panel with concept description, catalog entries and video. |
| Section 4 - Process | Unverified | Unverified | Oversized process headline followed by four module cards, background imagery and a video overlay. |
| Section 5 - Featured Study | Unverified | Unverified | Green sticky desktop study: left editorial descriptions, line decoration and three thumbnails; right upper and lower image regions with connected text. |
| Section 6 - Work Types | Unverified | Unverified | Black section with huge wordmark and five numbered feature rows, each with a title, marked line and description/state structure. |
| Section 7 - Artist Statement | Unverified | Unverified | Gray 200vh desktop composition: left imagery, messages, features and dot; right opening headline and lower image/subtitle. |
| Section 8 - Creative Philosophy | Unverified | Unverified | Pale section with two text blocks around a rabbit graphic/circular-text structure, followed by large type and three feature cards. |
| Section 9 - Showcase | Unverified | Unverified | Green showcase with author quote, broadcast details, play control, title, time and audio-format information. |
| Section 10 - Exhibition | Unverified | Unverified | White exhibition information: location, titles, dates, project details/code and a portrait-format video. |
| Section 11 - About | Unverified | Unverified | Black sticky desktop about spread with three blocks: signed author introduction, layered portrait/profile/social information, skills and work CTA. |
| Footer | Unverified | Unverified | Contact invitation, navigation, legal/social links and closing brand composition; outside Main in source. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Source evidence includes a fixed navigation initial translateY(-100px)/opacity 0.001 state; hero image initial scale(1.3)/opacity 0.001; gallery row scale(0.8) or scale(0.9) declarations; desktop sticky Featured Study and About panels; Artist Statement sticky image, Flashing Dot and Circular Text Animation named structures; repeated Placeholder/Visible/Hover link layers; MP4 videos in Concept, Process and Exhibition; About portrait layers with a 0.4s ease-out transform transition. Public source establishes these structures and states, not live hover, scroll timing, autoplay, cycling, or pointer behavior. Recreation recommendation: short masked label transitions, gentle image reveals, optional sticky spreads, and a fully legible reduced-motion state.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Source breakpoint bands are desktop >=1200px, tablet 810–1199.98px and phone <=809.98px. Authored recommendation: retain 24px desktop and 20px phone gutters; make split spreads stack in semantic reading order; use content height on phones; simplify decorative rules without losing captions; make thumbnails wrap; preserve face visibility when changing image aspect ratios. Source presets support Intro title 70/52/29px, Concept description 40/32/24px and editorial subtitle 24/20/18px across those bands. Treat gutter 24, radius 0 and gap 32 as recreation recommendations, not universal source measurements.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.
