# WAIS component recipes

Source scope: public home HTML/CSS, official marketplace references and the public agenda index HTML/CSS. SOURCE DECLARED means authored source data. It is not a browser measurement. OPTIONAL RECOMMENDATION means a recreation choice. No checkout, ticket delivery, CMS management or registration backend was tested.

## 1. Arrow navigation and asymmetric summit hero

SOURCE DECLARED: the Desktop and Phone navigation variants repeat the WAIS mark, a thin bottom rule, circular-arrow link illustrations and outlined ticket pills. The actual ticket anchor resolves to `/contact`; agenda calls resolve to `/agenda-cms/agenda-index`. The hero carries introductory copy and actions in one column and three separate h1 lines, BuildWithAI / Summit / 2026, in the other. Host Grotesk h1 base is 90px/90px, weight 400, tracking -.05em. Three source appear records move 150px vertically with opacity .001 to 1 and delayed 1-second springs. The official monitor hero reference confirms the asymmetric composition.

OPTIONAL RECOMMENDATION: construct one logical h1 with visually separate lines so split-character animation does not create letter-by-letter screen-reader output. Keep title and actions readable before animation starts. Use source route destinations and supply a clear unavailable state if the adaptation has no registration service. Under reduced motion, show the final state immediately. At narrow widths, test the 50px compact preset and permit natural wrapping without clipping the title.

## 2. Paired event photographs and event introduction

SOURCE DECLARED: the image row pairs a smaller audience photo with a wider stage photo, followed by date and venue captions. Captions link to agenda and venue destinations. Named `Section What is it` combines a large introduction heading with several event-description paragraphs. Its CSS includes 1450px desktop height, 1345px tablet height and phone min-content; those numbers describe source rules rather than measured page length. Desktop base h2 is 64px/64px, not the extractor's first media sample of 55px.

OPTIONAL RECOMMENDATION: model the pair with two explicit media slots and two distinct captions. Preserve the image crops from source assets. Retain the introduction's reading order and wide title/copy contrast, then decide whether the recreation needs the source fixed-height presentation after testing the animation and scroll treatment. If motion is omitted, use content-driven height as an explicitly documented adaptation.

## 3. Dark speaker portrait strip

SOURCE / OFFICIAL REFERENCE: `Section Speakers` uses a charcoal background, white editorial heading, supporting copy and an outlined Meet the Speakers action. The official second image shows monochrome portrait cards and left/right controls. The source exposes multiple linked portraits with name and job-title fields and individual `/speakers/…` routes. Caption h5 base CSS is 20px/24px while certain media rules declare 21px; keep those contexts separate.

OPTIONAL RECOMMENDATION: keep portrait, name, role and profile link in one coherent card. Build a reusable speaker record and use the same identity when rendering agenda associations. If a carousel is recreated, give previous/next controls accessible labels, disable unavailable directions, and keep every portrait reachable without autoplay. Do not infer operational CMS editing from the public linked cards. Stack or scroll the strip on phone according to source component constraints, then check text contrast and focus visibility against the dark surface.

## 4. Two-day agenda and secondary agenda page

SOURCE DECLARED: the home agenda separates Day 1 / Sep 18 and Day 2 / Sep 19; session links carry start times, titles and stage labels. They resolve to `/agenda-cms/…` entries. The saved secondary index at `/agenda-cms/agenda-index` declares an Agenda h1, Day 1 and Day 2 named containers, Categories 2 and Empty State structures, then the shared footer invitation. The secondary source alone does not prove filters work or that every item is visible in a rendered state.

OPTIONAL RECOMMENDATION: give each session a stable identifier, date, start time, venue/stage and linked speakers; use those fields for both home preview and full agenda. For filtering, define selected, matching, no-results and reset states only when that interaction is implemented. Display timezone with real event content. Make time/title/stage readable as text rather than image content and preserve chronological ordering after the two desktop columns become a phone sequence.

## 5. Sponsors, ticket cards, FAQ and closing invitation

SOURCE DECLARED: home continues through sponsors, three ticket treatments, closed FAQ rows and a large closing invitation. Pricing named structures include Tier, Price, Features, Check and Button - Most Popular. Actions point to contact-style destinations; the source does not establish a payment flow. The footer has Desktop/Tablet/Phone variants, a ticket invitation and creator credit. Inter is declared on the small check glyph while primary text remains Host Grotesk.

OPTIONAL RECOMMENDATION: keep ticket inclusions parallel so a visitor can compare access, schedule and extras without guessing. Present real prices and sale windows only after the organizer supplies them. Use button semantics and `aria-expanded` for FAQ triggers. Avoid announcing a purchase success until a real service reports it. Reuse one ticket CTA component throughout nav, hero, pricing and footer, and preserve the source restrained outlined-pill styling instead of introducing a new button family.
