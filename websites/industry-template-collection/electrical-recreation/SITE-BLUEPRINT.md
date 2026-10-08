# Electrical site blueprint

## Site anatomy and local-service decision

SOURCE DECLARED: this local electrician reference preserves cream navigation → olive/portrait split hero with availability, booking and license cues → credibility metrics → numbered reasons to choose → six services → detailed repair story → licensing/safety reassurance → four-step job process → reviews/ticker → service areas → FAQ → team invitation and footer. Stack Sans Headline and Inter form the typography system. Amber highlights connect the hero's emphasized word with its booking action. The official Marketplace images communicate page composition; decorative outer framing is presentation artwork.

OPTIONAL RECOMMENDATION: adapt around a homeowner identifying a problem and choosing a trusted electrician. State accepted job categories, coverage, contact hours and quote process. Maintain a clear phone path for urgent problems without inventing round-the-clock dispatch. This reference contrasts with a renovation portfolio through practical service cards, reassurance and local booking.

## Routes and content records

SOURCE DECLARED: Services targets /service, About /about, Blog /blog and most booking/quote/address actions /contact. The contact source was independently fetched as HTML/CSS; secondary-declarations.json records the source structures and form declarations. Privacy and terms routes are declared, with backend behavior untested. The why-choose-us section and numbered reason IDs are present; major sections otherwise use component names rather than descriptive IDs.

OPTIONAL RECOMMENDATION: service records need title, scope, excluded tasks, illustration, relevant permit/warranty notes and a contact destination. Coverage records need city/area and an honest service boundary; do not create a postcode checker simply because the CTA says Check your address. Customer stories and reviews need approved attribution and permission. Establish a consistent company phone number: source declarations include different numbers and a malformed tel value. License, insurance and warranty copy require accurate company details before deployment.

## Responsive delivery and interaction states

SOURCE DECLARED: root breakpoints are 1200px and 810px. Container max-width is 1360px with 30px horizontal padding, reducing to 16px on phone. Hero sizes are 66/48/40px; section h2 is 52/40/30px. Separate phone navigation, image skin, license and outline variants exist. FAQ Open/Close and review ticker names establish component intent; runtime timing and accessibility were not exercised.

OPTIONAL RECOMMENDATION: define menu open/closed, FAQ expanded/collapsed, review paused/running and enquiry idle/invalid/sending/success/retry states. Keep phone links and written quote expectation near the booking action. Preserve the hero portrait's meaningful crop when stacked, and keep service grids in source order. Show readable static reviews under reduced motion. Form delivery, address verification, appointment booking, real emergency response and all trade credentials require separate implementation and testing.
