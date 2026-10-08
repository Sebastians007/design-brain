# WAIS SITE-BLUEPRINT — conference and summit

## Fit and source scope

SOURCE DECLARED: WAIS is a conference reference with public home speaker cards, two-day agenda, sponsor section and ticket-style tier cards. Its event content concerns an AI summit, but the useful industry anatomy is registration, people, timing and place. The official marketplace identifies linked Speakers and Sessions CMS collections; this is a seller statement, not a tested editing workflow. Evidence includes the public home HTML/CSS, official artwork and `/agenda-cms/agenda-index` public HTML/CSS. No live backend or ticket fulfillment was tested.

## Home anatomy

SOURCE / OFFICIAL REFERENCE: navigation → asymmetric event hero with paired photographs and date/place captions → event introduction → dark portrait section → two-day agenda → sponsors → ticket tiers → FAQ → closing ticket invitation and footer. Preserve the quiet regular-weight Host Grotesk hierarchy, warm white/dark contrast, circular arrow markers and outlined pills. The three-line summit title should remain the dominant element. The official reference's monitor and wall frame are presentation props, not UI.

SOURCE DECLARED: named source sections are Hero, Section What is it, Section Speakers, Section Agenda, Section Sponsors, Section Pricing and Section FAQ. There are no public section fragment IDs. Explicit linked destinations include `/speakers/speaker-index`, individual speaker profiles, `/agenda-cms/agenda-index`, individual session routes, `/venue` and `/contact`. Hero ticket and sponsorship actions point to contact. Do not describe those source links as proven checkout.

## Secondary page and content relations

SOURCE DECLARED: saved agenda index carries an Agenda h1, Day 1 and Day 2 containers, Date/Title, Categories 2, Empty State and shared closing invitation. Source typography uses the same Host Grotesk presets. Filter behavior and source-generated listing outcomes remain unverified. The source provides enough structure to specify a full agenda page but not enough to claim live filtering, registrations or CMS updates.

OPTIONAL RECOMMENDATION: model Speakers and Sessions separately with a stable relation between them. A session record should carry day, start time, duration, room/stage, title, description and speaker references. A speaker record should carry approved name, role, company, portrait, biography and links. Render dates in the event timezone and maintain chronological order on phone. Add empty and no-results presentation only to an implemented agenda filter. Registration can use a separate Tickets/Passes model when the organizer supplies real pricing and fulfillment.

## Adaptation and delivery states

OPTIONAL RECOMMENDATION: preserve the original composition first, then adapt it to a professional annual summit. Supply real event dates, venue access details, organizer contacts, approved speaker identities and policy content. Give ticket CTAs a concrete configured destination. Define registration idle, validation-error, submitting, confirmed, sold-out and unavailable states if a real system is connected; avoid presenting a contact form as a completed ticket purchase. For schedule updates, show the revised session clearly and avoid leaving cached conflicting information in home and full-agenda views.

SOURCE DECLARED: root responsive boundaries are 1200px and 810px. Individual heading presets also include 817/809px ranges, while small titles include 767/320/319px ranges. Source appear animations initialize parts of the hero at opacity .001 and y150. OPTIONAL: readable static text and reduced-motion final states should be available; verify narrow widths before retaining fixed-height introduction and portrait sections. All sizes in the config are authored CSS values, not browser-measured rectangles.
