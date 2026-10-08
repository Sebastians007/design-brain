# Aurelia Hotel site blueprint

## Source anatomy and hospitality fit

SOURCE DECLARED: Slashdown's official Marketplace positions Aurelia Hotel for luxury hotels, boutique resorts, villas and accommodation properties. The public root is a property-discovery and booking-request journey, with CMS-style room title/slug source records and separate room routes. It provides a boutique hotel reference distinct from a restaurant menu or ordering service. Source capture and artwork support the design and declared content; actual inventory, room editing, reservation delivery and payment remain untested.

SOURCE / OFFICIAL REFERENCE: retain the coastal full-height hero, transparent navigation, dark request strip, gold details, cream content canvas and editorial serif hierarchy. Cormorant Garamond provides display roles, Manrope body/interface and Inter small labels. The desktop hero h1 declaration is 80px/1.1em at 500; section h2 is 64px/1em at 600. These are declarations, not browser-measured text boxes. Marketplace laptop and interior scene are presentation artwork.

## Page and route architecture

SOURCE DECLARED: home sequence is navigation → hero/request form → About story → CTA → Featured Rooms → Services → Gallery → Reviews → Before Your Stay FAQ → footer. Named services are wellness, dining and private experiences. Root anchors include #cta, #rooms and inner #gallery; primary navigation generally uses /rooms, /services, /gallery and /contact instead of these anchors. Room cards include direct detail destinations. Root #reviews is declared on a Gradient node and should be retained as evidence without inferring scroll behavior.

SOURCE DECLARED: secondary source inspection covers /rooms/tropical-garden-suite. It contains a room-specific hero and booking form, room detail/body, price and area/bed/guest metadata, Photos, Amenities Grid, CTA, Other Rooms, reviews, FAQ and footer. The source uses 80px hero and 64px room headings; related-room cards can declare 22px titles instead of homepage 28px. Read secondary-declarations.json and the saved secondary CSS for the route-specific roles. Other routes are declarations until separately inspected.

OPTIONAL RECOMMENDATION: adapt one approved property and keep room records consistent across discovery cards, detail pages and request options. Model title, slug, photography, nightly-price display, room area, bed label, occupancy, amenities and request-room ID. Prefer clear requests to unsubstantiated promises of real-time availability. Preserve route paths where useful but clean copied CMS slugs deliberately when authoring a new property. Keep service and gallery stories subordinate to the room decision.

## Request states and responsive behavior

SOURCE DECLARED: booking variants exist for desktop/tablet/mobile with name, email, room selection, check-in/out and adult/child fields. Root breakpoints are 1200 and 810px. Main content containers declare max-width:1180px and 24px horizontal padding, while section vertical spacing changes by module and media rule. No measured field positions or confirmed live submission are asserted.

OPTIONAL RECOMMENDATION: validate required contact fields, chronological dates and party constraints; preserve entered values; explain request-received, confirmation-pending and failure states beside the form. Only connect an authorized hotel system when one is supplied. Keep keyboard labels and focus intact when fields stack. Preserve room-card metadata and image focal points at smaller sizes. FAQs should expose button state and readable answers; review motion should not remove text under reduced motion.

SOURCE LIMITATION: root telephone/email declarations include tel:# and mail:# placeholders, and social labels point to home. These need explicit destination cleanup in an adaptation. Review claims, room prices, photos, contacts and services are template content requiring approved replacements before a real property launch.
