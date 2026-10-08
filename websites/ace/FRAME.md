---
version: 1.0
name: Ace — Quiet Automation Landing Page
source: https://ace.framer.media/
observed: 2026-10-08
principle: calm serif hierarchy, near-black surfaces, cyan signals, generous empty space
evidence: rendered desktop DOM, full-page screenshot, source public responsive declarations
---

# Ace — Quiet Automation Landing Page

An independently authored design-system guide to the live Ace Framer preview. This is a visual reconstruction study, with original substitute prose and an independently implemented local demo. The editable Framer project was not accessed. The accompanying source screenshots preserve the reference appearance.

## Evidence and interpretation

Use `reference-frames.jpg` to scan the visual language, `screenshots/` for readable reference details, and `design-tokens.json` for values. `frame-showcase.html` is an independently authored specimen, while `recreation/index.html` is the working page.

Measured values describe one desktop render at a 1363×936 browser viewport with a 1348px document width. The page has a 15px scrollbar. Full-page capture temporarily changed geometry in the browser; the main content remained 1136px. Do not turn captured document coordinates into absolute positioning instructions.

Three evidence classes are kept separate: **measured** rendered styles/geometry, **CSS-derived** public breakpoint declarations, and **recommended** recreation choices. Phone and tablet reference screenshots were not captured. The recreation has automated DOM and asset checks; a browser render comparison has not been performed for the implementation.

## The visual idea

Ace makes automation feel quiet and approachable. Its hero is almost entirely black, with a modest two-line serif headline, a short centered paragraph, and a white pill button. The visual energy comes later: small cyan icons, sparse illuminated tiles, fine grain, and tinted surfaces. Empty space inside cards is intentional. Resist filling it with dashboard illustrations, oversized glowing orbs, or extra badges.

The serif gives headings a human, editorial quality; compact Inter copy keeps the product language practical. Cyan marks navigation actions, section labels, icons, checks, and the popular plan. It is a signal color rather than a full-section background.

## Palette and typography — measured

| Role | Value | Use |
|---|---|---|
| Hero ground | `#000000` | Full viewport introduction |
| Main ground | `#050505` | Section backgrounds |
| Panel | `#0F0F0F` | Cards and FAQ rows |
| Raised action | `#1F1F1F` | Standard pricing action |
| Primary text | `#FFFFFF` | Headings and important labels |
| Supporting text | `rgba(255,255,255,0.8)` | Paragraphs and navigation |
| Accent | `#2BFFEA` | Cyan highlights |
| Accent tint | `rgba(43,255,234,0.05)` | Section pills and popular-plan surface |

| Role | Typeface | Size | Weight | Line height |
|---|---|---:|---:|---:|
| Hero / final CTA | Bespoke Serif | 48px | 500 | 57.6px |
| Section heading | Bespoke Serif | 36px | 500 | 43.2px |
| Card title | Bespoke Serif | 22px | 500 | 26.4px |
| FAQ question | Bespoke Serif | 20px | 500 | 24px |
| Plan title | Bespoke Serif | 18px | 500 | 21.6px |
| Pill action | Bespoke Serif | 16px | 500 | 19.2px |
| Plan price | Besley | 36px | 500 | 43.2px |
| Body / section label | Inter | 16px | 500 | 19.2px |
| Card body / navigation | Inter | 14px | 500 | 16.8px |
| Popular-plan badge | Inter | 12px | 500 | 14.4px |

The distinction between **Bespoke Serif** and **Besley** matters: only the prices use Besley. Local WOFF2 files reproduce the source's English/Latin typography. Georgia and Arial are fallbacks, not equivalents.

## Layout and rhythm — measured desktop

The centered main column is **1136px** wide. At 1348px content width its left edge is 106px. Section shells use 32px outer gutters and `150px 32px 100px` padding. The shell accommodates the centered max-width column; it does not imply a universal 32px visible desktop content margin.

Section headers have a 35.2px-high label, 24px before the heading, 12px before the paragraph, and 64px before the section content. Heading widths are usually 400px; descriptions are 450px, or 500px in benefits. Pricing and FAQ headers are centered; earlier headers align left. Standard grid gaps are only **8px**, which makes cards feel like one system.

| Order | Section | Essential geometry |
|---:|---|---|
| 1 | Hero | 936px at inspected viewport; centered 600px title block, 450px description, 24px action gap |
| 2 | Benefits | Three equal columns; 400px cards; icon at top, copy anchored low |
| 3 | How it works | Three 400px rows; equal halves; tile artwork alternates left/right; 8px row gap |
| 4 | Features | Six 400px cards, three columns / two rows; pixel icons above low-set copy |
| 5 | Reviews | Six 300px cards, three columns / two rows; 40px portraits, quote, rating |
| 6 | Pricing | Three approximately 469px cards; center tier tinted; action strips 72px high |
| 7 | FAQ | Centered 669px list; seven 64px closed rows; 8px gaps |
| 8 | Final CTA | 800px-high section; centered headline, description and white action |
| 9 | Footer | Low horizontal band; restrained brand and credit |

The measured full page is approximately 8953px tall. Original substitute prose and accessible structures can change exact line wrapping and resulting section heights. Match the ratios and density before chasing document Y coordinates.

## Component anatomy

**Navigation.** The source has a left logo, a centered five-link anchor group, and a right cyan action. Inter links use 14px medium text and `4px 8px` padding. The action uses a serif label, 32px radius, and `10px 16px` padding. The source remains visible while moving between sections. The recreation uses a fixed 71px header and a phone disclosure menu.

**Card.** `#0F0F0F`, 20px radius, 24px padding. Benefits have 56px icon boxes with 30px line icons. Feature icons use small cyan square arrangements. Keep copy at the bottom of the 400px card, with 12px between title and body; preserve the large quiet area above it. No heavy border or elevated shadow is needed.

**Workflow row.** 20px rounded panel with 8px padding. The artwork is a dense field of rounded dark tiles with only a few cyan tiles lit. The other half has a step pill at the top and title/paragraph near the bottom. Row two reverses the halves. The recreation uses original CSS tiles with a restrained pulse; the source animation algorithm was not recovered.

**Review.** Source portraits have ordered dithering and cyan coloration. The reference uses a name/role row, quote, and a small cyan rating treatment. The recreation preserves the hierarchy with original illustrative quotes and initial avatars; it does not reproduce named customers or imply that these are verified endorsements.

**Price card.** Plan heading and description at top, large Besley price, then five checks. A full-width bottom action is darker on ordinary tiers and subtly cyan on the popular tier. The popularity badge is a cyan pill with 12px dark text. Source prices and plan labels serve as specimen UI here; there is no checkout.

**FAQ.** A compact rounded row, serif question, and cyan circle-plus at right. Clicking the first source question visibly expanded its answer. Recreate it with native `details`/`summary` for keyboard, touch and no-JavaScript operation. Answer copy uses compact Inter and adequate leading.

## Texture and motion

The source repeats a 256px noise asset at a **153.5px** displayed tile size, with its wrapper at **0.15 opacity**. This subtle grain spans section backgrounds and panels; it must not become a bright paper texture. Hero stays black. The local reproduction bundles the source texture.

Source anchor navigation moves smoothly. Pills reveal an arrow on hover and adjust horizontal spacing. Sparse workflow tiles visibly animate. Exact easing, pulse phases, and a native reduced-motion policy were not established. The recreation supplies 200ms action transitions, a 6s tile pulse, static lit tiles under reduced motion, and keyboard-visible focus. These are implementation choices.

## Reuse rules

- Preserve near-black contrast, the serif/sans pairing, cyan restraint, and generous vertical space.
- Keep three-column feature density on desktop and a clear mobile reading order.
- Use real DOM text; screenshots are evidence, never page backgrounds.
- Replace marketing claims and proof with verified content for a real business.
- Do not add a glowing hero illustration, pricing toggle, or unrelated dashboard: they were not observed in this reference.
- The Framer badge and the source's unrelated footer copyright are preview context. The recreation credits the reference and identifies itself as a design study.

## Known limits

No editable Framer source, original mobile render, proprietary animation logic, real signup, agent service, or checkout was accessed or implemented. The original actions lead to `https://framer.link/BiM9d9V`; recreated actions intentionally open a local demonstration. Public asset URLs are recorded in `assets-manifest.json` for provenance. A successful deployment confirms hosting, not visual equality.
