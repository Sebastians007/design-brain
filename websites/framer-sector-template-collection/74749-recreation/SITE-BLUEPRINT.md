# SITE-BLUEPRINT: Charity Foundation / Wellspring

## Source anatomy and purpose

SOURCE DECLARED: this reference suits charities, fundraising foundations and community organizations explaining a concrete gift consequence. Its fictional Wellspring organization combines a mountain-village dusk hero with an amount/recurrence chooser, then establishes mission, programs and accountability before repeating the donation invitation. The home order is Header, WsHero, WsIntro, WsPrograms, WsMoney, WsCampaigns, WsStory, WsImpact, WsField, WsMonthly, WsVoices, WsJoin, WsFaq, WsCta and WsFooter. CMS bridges for site settings, programs, campaigns, stories, events, team, partners, FAQ and posts are source plumbing, not extra visible editorial sections.

SOURCE DECLARED: the home headline Every gift lights a home uses Fraunces with an italic accent word. Instrument Sans handles descriptions and controls; JetBrains Mono separates labels and totals. The primary palette is bone #f3eee4, near-white #fffdf8, ink #12131f, brass #f2a33a and muted #6c6878. A night hero and alternating editorial/scene modules distinguish this from a generic light nonprofit home. The marketplace's amber backdrop and giant Wellspring caption belong to sales artwork.

## Routes, donation and content model

SOURCE DECLARED: navigation routes include programs, campaigns, stories, impact, about and donate. Home cards declare six program details, four campaign details, a Dhorpa story, monthly-giving, reports, partners, volunteer, event details, team, news, contact, FAQ and legal routes. The separately fetched `/donate` source contains Make a gift, Gift/Details/Review step controls, allocation and giving FAQ. `secondary-declarations.json` preserves exact headings, fields and source routes. The listing describes payment-link handoff and says payment is not taken inside the template. No donation processor, donor record persistence, receipt, volunteer delivery or newsletter delivery was verified.

OPTIONAL RECOMMENDATION: adapt this to a fictional community energy fund until the owner provides real identity and evidence. Separate program descriptions from time-bounded fundraising campaigns; store each campaign's goal, current raised total, deadline and updates. Store impact observations with date, unit, place and supporting source. Event records require real start/end/timezone/location and a configured registration destination. Keep organization policy copy and reporting documents editable independently of campaign headlines. All sample metrics, people, reports and outcomes need replacement before representing an operating foundation.

## Responsive and interaction constraints

SOURCE DECLARED: root boundaries are1200px and810px. The custom hero declares desktop/tablet/phone types80/64/42px and different minimum heights660/860/700px. Desktop text and gift panel are positioned within the scene; phone variants use compact copy and panel treatments. Additional custom width/height/hover rules are retained in source evidence rather than simplified into a single device grid. Page skip destination is #main. Program panel, FAQ answer and input IDs are internal relationships, not verified home navigation anchors.

OPTIONAL RECOMMENDATION: recreate the source's three semantic layers—story, gift explanation and accountability—before adding loader, dusk transitions, magnetic pills or light choreography. Make all content visible with reduced motion and with the loader skipped. Preserve radio labels, program accordion relationships and donation step names. Define invalid, review, handing-off and returned-from-provider states only after a fundraising destination exists. A display selector or external link is insufficient evidence of payment success.
