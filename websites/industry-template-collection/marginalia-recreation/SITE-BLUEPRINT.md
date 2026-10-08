# SITE-BLUEPRINT: Marginalia issue-based magazine

## Publication anatomy

SOURCE DECLARED: Marginalia is an editorial magazine reference with linked issues, stories, sections and contributors. The official listing identifies independent periodicals and issue-based publishing as its core fit. The public home opens with a ruled navigation and current-issue contents, then uses back covers, cover story, story grids, ranked stories, photo essay, editor letter, section index, archive, contributors, interview and publication production detail. Reader correspondence and newsletter, podcast, events and membership destinations close the sequence before the footer. Preserve this full anatomy; its pacing depends on alternating long editorial modules with compact indexes and moving type intervals.

OPTIONAL RECOMMENDATION: adapt it to a quarterly independent culture journal. Define an issue record with number, title, season, colour, cover credit and editor letter. Link every story to an issue, a section and one or more contributor records. Do not make the current issue a hard-coded banner: the cover, contents, archive and membership material should resolve a common issue identity. Keep issue-number typography separate from title typography. CMS collection count and plan requirements are creator listing statements; they were not confirmed inside an editor.

## Routes and editorial records

SOURCE DECLARED: home links include `/issues`, issue detail routes, `/stories`, story detail routes, `/sections/...`, `/contributors`, contributor details, `/about`, `/pitch` and `/subscribe`. Home IDs include `#t-cover`, `#t-quote`, `#t-inissue`, `#t-mostread`, `#t-ticker`, `#t-archive`, `#t-contrib` and `#t-numbers`. The actual secondary story source `/stories/the-honest-screw` was fetched and saved; secondary-declarations.json records its heading, typography, named component and form coverage. Routes found in HTML are declarations and do not prove every destination was inspected.

OPTIONAL RECOMMENDATION: use stories with title, dek, body, contributor, issue, section, reading estimate, cover media, captions and notes. Keep long body blocks semantically structured so a contents rail can link to meaningful headings. Preserve image credits and editorial bylines during adaptation. Featured, most-read and photo-essay status should be separate fields or curated references, not silently inferred from article order. Archive covers need useful accessible names containing issue number and title.

## Reconstruction constraints and states

SOURCE DECLARED: warm paper and ink palettes, red-orange current-issue accents, Fragment Mono metadata and Literata Variable editorial text define the design. Literal variable settings include opsz72/wght300 for the main title and opsz72/wght200 for the issue numeral. Base CSS sizes are not rendered rectangles. Responsive boundaries are1200px and768px; official promotional framing is not part of native page geometry. Ring, shutters, moving bands and reduced-motion layers exist in source, while actual timings and input responses are unverified.

OPTIONAL RECOMMENDATION: reconstruct static editorial layouts before motion. Make archive navigation, contents links and form labels functional independently of effects. Specify menu open/closed, search idle/results/empty, theme choice and form validation/submission states only when implementing those visible controls. Keep a static cover grid under reduced motion. Membership payment, audio playback, RSVP, subscriber storage and pitch delivery require explicitly configured services and remain unverified in this evidence. Separate optional product implementation from the source design study.
