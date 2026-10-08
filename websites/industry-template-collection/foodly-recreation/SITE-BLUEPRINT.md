# Foodly site blueprint

## Source anatomy and hospitality fit

SOURCE DECLARED: Anayatul Islam's official Marketplace identifies Foodly as a restaurant/cafe reference with categorized CMS menu content and table reservations. The saved root source presents food, diner proof, restaurant story, dish/category modules, a reservation form and location/contact. It contrasts with the boutique-hotel reference through a cheerful cream/green/orange palette and prominent culinary media. Public declarations do not establish working order fulfillment, reservation delivery, live table availability or CMS editing.

SOURCE / OFFICIAL REFERENCE: preserve the orange offer strip, green scalloped navigation, golden dark-bordered actions, Calistoga hero, Karla body and General Sans dish titles/prices. The large plated-food image and thumbnail strip balance the text-heavy hero. Marketplace's illustrated green surround is packaging. Calistoga desktop h1 declares 60px/1.1em, with 40px tablet/phone; h2 declares 48px base, 32px tablet and 24px phone. Source extraction first-match values can select a media preset before the desktop base; the config records that distinction.

## Page and route architecture

SOURCE DECLARED: home sequence is offer/navigation → food hero and proof → About Us with metrics → Offer Banner → featured dishes and categorized Menu Section → Gallery Section → Book Your Table Section → Testimonials → Contact Section → footer. #about is the story anchor and #services is the menu anchor. Reservation appears as a capitalized inner #Reservation ID, while prominent reserve actions use /reservation. /menu, /contact and /privacy-policy are also declared destinations; Terms of Service currently reuses /privacy-policy.

SOURCE DECLARED: secondary inspection covers /reservation. Its source retains the offer/navigation, table-request form, contact section and footer with desktop/tablet/phone variants. Form component names identify booking name, phone, guest count, date and time. Exact typography declarations, routes and component order are stored in secondary-declarations.json. No submitted request or confirmed table was observed. Source includes inherited alternative content about veterinary care and off-theme frame names; this is serialized evidence and does not establish visible active-page copy.

OPTIONAL RECOMMENDATION: adapt an approved restaurant menu and build dish records containing stable ID, category, name, description, image crop, displayed price and approved diet/allergen information. Keep a visual distinction between featured dishes and category menus. Maintain direct routes for guests who arrive specifically to reserve or read the menu. Audit active variant copy, button destinations, policies and stale inherited names before publication. Avoid adding delivery checkout simply because the offer ticker mentions delivery.

## Reservation and content states

SOURCE DECLARED: ticker/slideshow structures, rolling-text navigation, hero thumbnails and testimonial arrows imply intended moving or selectable components, but their transition behavior and timing were not exercised. Main module containers declare max-width:1280px and desktop 80px horizontal padding, reducing to tablet 16px; root boundaries are 1200/810px. Phone hero wrapper declares column direction. Source declarations describe constraints rather than rendered rectangles.

OPTIONAL RECOMMENDATION: preserve readable copy under reduced motion, pause optional ticker movement and provide selected/focus semantics for any implemented thumbnail carousel. For reservation handling define required-field validation, submitting, request received and retry states; identify whether staff must confirm the table. Keep entered values after failure and expose the date/time meaning in plain labels. Guests should see opening hours and practical contact details near the form. Use approved diner quotations and metrics; placeholder phone, address, food prices, promotions and customer counts should become verified restaurant content only after replacement. A local recreation should clearly label any simulated submission outcome.
