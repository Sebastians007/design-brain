# Frame Folio — website recreation specification

Preview: https://framefoliotemplate.framer.website/  
Creator: Riyad Sbeitan  
Evidence coverage: Public source CSS + official marketplace images; live browser layout unverified.

This is independently authored implementation documentation in the four-file format supplied by the user. The source is a website; the companion caption skin is an optional video adaptation. Screenshots are visual references, not instructions to bake the page into a single image.

## 1. Recognizable visual identity

Frame Folio pairs forceful black Inter typography with a domestic palette of cream, stone, and soft gray. Its split hero makes the left column a confident statement while the right column presents a tangible product mockup in natural light. Small black pill actions punctuate generous pauses. Centered section introductions give way to gently rounded service cards and alternating project imagery, keeping the portfolio approachable rather than monumental. White edging subtly separates photographs from pale surfaces. The official promotional images surround website excerpts with a framed, shadowed canvas; that presentation wrapper should remain distinct from the actual website's continuous section layout.

The five templates in this collection have different systems. Follow only this package. Avoid merging its typography, grid or colors with another template.

## 2. Highest-priority constraints

- Use Inter throughout: 700 for the oversized hero, 500 for section and project headings, 400 for descriptive text; do not introduce a contrasting display face.
- Preserve the split hero and softly lit physical mockup: device, packaging, wood, stone, and textiles carry the warmth that the restrained interface leaves open.
- Keep #f8f8f5 as the website page surface and #f4f2ee for alternating bands and cards; use near-black actions and muted gray descriptions instead of a bright brand accent.
- Use gentle image and card rounding, thin white edging, small raised labels, and compact black pill CTAs without making every text block a card.
- Treat the outer cream promotional canvas, white frame, drop shadow, overlapping page excerpts, and lower image fade as official marketing composition rather than verified website chrome.

## 3. Typography

| Role | Family | Weight | Size px | Line px | Tracking |
|---|---|---:|---:|---:|---|
| Hero title — declared desktop | Inter | 700 | 85 | 93.5 | 0px |
| Section / project heading — declared | Inter | 500 | 38 | 43.7 | 0.05px |
| Service title — declared | Inter | 500 | 36 | 43.2 | 0px |
| Body / section label / quote — declared | Inter | 400 | 18 | 28.8 | 0px |
| Navigation — declared | Inter | 400 | 16 | 20.8 | 0px |
| CTA label — declared | Inter | 500 | 16 | 12.1 | 0px |
| Project tag / small link — declared | Inter | 400 | 14 | 22.4 | -0.02em |
| Form label / testimonial name — declared | Inter | 700 | 13 | 20.8 | 0em |
| Footer link — declared | Inter | 500 | 13 | 20.8 | -0.02em |

The values above are declared CSS presets, with source-specific selector and media alternatives. They have not been confirmed in a rendered browser.

Load the included source font files and declared weights. For variable fonts also preserve the recorded variation axes. Avoid browser-synthesized bold. Keep line-height and tracking explicit; they materially affect line breaks. Font declarations and subset metadata are in assets-manifest.json. Bundled Latin subsets are appropriate for these English references; other languages need their matching subsets.

## 4. Color, shape and spacing

```json
{
  "canvas": "#F8F8F5",
  "paper": "#F4F2EE",
  "ink": "#0e0e0e",
  "accent": "#0e0e0e",
  "muted": "#6b6b6b"
}
```

Recommended starting desktop gutter: 75px. Principal radius: 13px. Component gap: 20px. Unverified geometry values are recommendations, not measurements. These are section-specific: do not apply one radius or padding indiscriminately. Unmeasured geometry is visually estimated from official imagery and needs live validation.

## 5. Page sequence and desktop geometry

| Section | Document Y px | Height px | Composition |
|---|---:|---:|---|
| Navigation | Unverified | Unverified | Desktop, tablet, and mobile-close variants precede home content. Logo left; Home, About, Work, Contact and a black booking action on wider variants. |
| Hero Section | Unverified | Unverified | Left title, description, and work action paired with right image presentation. Source contains five named hero images; official reference shows a phone on a wooden dish in natural light. |
| Trusted By Section | Unverified | Unverified | Compact centered trust statement and a named logo ticker containing five client-logo structures; warm pale background. |
| What We Do Section | Unverified | Unverified | Centered label, heading, and description, followed by four service cards: Brand Identity, UI / UX Design, Web Design, Website Launch. Desktop grid declares two columns. |
| Selected Projects Section | Unverified | Unverified | Centered introduction then alternating image/slideshow and text placements for Vetra Studio Rebrand, Aura Beauty, and Nordica Living; portfolio CTA follows the project grid. |
| Our Approach Section | Unverified | Unverified | Label, purpose-focused heading, and explanatory paragraph; this section follows the full-portfolio action in the home source. |
| Testimonials Section | Unverified | Unverified | Centered introduction and named testimonial ticker with four quote cards, portraits, names, and positions. |
| Contact Section | Unverified | Unverified | Invitation heading and description paired with a pale rounded form containing Name, Email, Message, and Send. |
| Footer | Unverified | Unverified | Near-black footer with desktop, tablet, and phone variants; page links, quick links, social links, author credit, and copyright. |

Document Y refers to the unscrolled document. Some source rectangles shift with animation. Unknown heights remain unknown; do not infer them from a promotional montage. Read source-declarations.json for the original layout constraints, component paths and selector alternatives. None are computed browser rectangles. Match section order, broad silhouette and whitespace before fine styling.

## 6. Images, video and source artwork

Use assets-manifest.json to map local files back to source URLs, visible image coordinates and roles. Image exports were resized to a maximum of 2000px; use the recorded original URL if greater fidelity is required. Maintain each media frame’s aspect ratio, object-fit and focal crop. The reference sheet contains twelve labeled, traceable crops; some are details from the same viewport capture. Original captures remain under screenshots/.

Do not substitute arbitrary stock imagery for the dominant hero or project mockup. If an asset is unavailable, preserve its frame and crop and identify the substitution. Videos are represented by recorded source URLs; playable media and its exact timing are not guaranteed by this package. Decorative particles, smoke, metallic objects and spectral forms should remain separate from text and interactive controls.

Official marketplace artwork can contain device frames, outer borders, promotional typography and montages. These belong to the marketplace presentation. Reconstruct only the website region inside it. Source CSS and bundled source assets provide a firmer foundation than the presentation border.

## 7. Components and interactions

Declared structures: five hero-image names with repeated hidden/visible slide states; three project slideshow structures with arrow assets; client-logo and testimonial tickers; appear IDs and initial opacity/translation values, including 150px rise states; text-link color transition of 0.4s. The HTML establishes these structures and states, not verified autoplay speed, easing, trigger threshold, loop direction, drag behavior, or actual runtime transitions. Recommendation: restrained fades/rises, user-operated project arrows, and a static reduced-motion presentation until behavior is independently checked.

Build meaningful links and buttons as semantic elements. Where present, implement the menu with an accessible open/close state, Escape support, focus return and background scroll handling. Accordion rows need aria-expanded and keyboard access. Pricing selections need a visible state; forms need labels, validation and feedback. Keep source demo metrics as illustrative values. Make carousel controls usable by keyboard and provide a static readable fallback.

The details in the preceding paragraph are recommended implementation behavior. They do not establish the source’s exact interaction logic. Do not claim functional checkout, subscription, authentication, contact delivery or analytics unless configured and tested separately.

## 8. Responsive reconstruction

Source CSS breakpoint boundaries: 1200px, 810px. Resolve each media context in source-declarations.json. No phone viewport was visually captured. Declared breakpoint families are desktop >=1200px, tablet 810–1199.98px, and phone <=809.98px. Both services and projects declare one-column grids below desktop. Recommendation: stack hero copy before the image, preserve photographic aspect ratio, prevent title overflow with a fluid 42–85px size, use the dedicated mobile menu structure, keep form fields full-width, and stack footer groups. These proposed sizing and interaction details are not browser-verified. Spacing and shape guidance: Recommendation: 75px desktop within a 1200px section cap, matching source declarations; reduce to 30px tablet and 20px phone after layout checks. Recommendation: 13px on photographs, service cards, and contact form; use fully rounded black action pills. The form declares 13px; other radii should be confirmed per component. Recommendation: 100px vertical section breathing room, 50px hero column gap, 20px service grid gap, and 40px project column gap. These echo declared source values rather than rendered measurements.

Use fluid type and layout constraints between anchors, not a scaled screenshot. Verify at 1440, 1363, 1024, 810, 768 and 390px. Preserve reading order and page identity. Do not hide key content to make a desktop composition fit.

## 9. Motion recommendations

Use subtle 180–280ms interface transitions and 450–700ms content reveals only as recommended defaults. Match source motion later if additional observation is possible. For prefers-reduced-motion, show all text immediately, stop continuous rotations/tickers, remove prolonged pinning and keep media controls accessible. Avoid animating layout dimensions when transforms or opacity suffice.

## 10. Caption companion

caption-skin.html adapts the site’s type and accent to the supplied caption engine. It is not part of the source website. Keep GROUPS empty, DURATION zero, composition dimensions/duration zero and data-brand-tokens empty until the producer injects real data. The paused GSAP timeline is registered as window.__timelines["captions"]. Word state uses seek-safe set operations. Thin accent underlines are an authored recommendation.

## 11. Acceptance and priorities

At the desktop reference viewport compare: hero silhouette, headline wrapping, brand width, dominant image crop, gutters, panel boundaries, section heights and footer. Fix those before shadows or motion. Then inspect menu, project, pricing/FAQ and final CTA states where present. Use FIDELITY-CHECKLIST.md and record unresolved differences. A convincing first viewport alone is not a complete reconstruction.

## 12. Source declaration map

source-declarations.json contains source typography presets, named component hierarchy, CSS layout declarations and media-query alternatives. Use component paths to associate a media file or text role with its actual section. Resolve variant selectors against the target breakpoint rather than combining all alternatives. This file deliberately omits wholesale source prose.
