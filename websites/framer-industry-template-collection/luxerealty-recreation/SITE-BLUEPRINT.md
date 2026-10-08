# LuxeRealty SITE-BLUEPRINT

## Site purpose and anatomy

SOURCE DECLARED: LuxeRealty is a luxury agency and inventory reference. The official listing describes search/filtering, property details, locations/categories, agents, saved properties and CMS. Its home is more editorial than the inventory route: navigation → introduction and four immersive estate scenes → featured listings → agency story → agent portraits → oversized Luxe scene → expertise → featured-in logos → reach metrics → blogs → newsletter → contact/footer. Preserve both modes: cinematic discovery introduces the brand, while the separate `/properties/listing` page supports explicit property comparison.

SOURCE DECLARED: home section IDs are `featured-properties`, `about-luxe`, `agent`, `luxe-realty`, `our-expertise`, `global-reach`, `blogs` and `newsletter`. `global-reach` is repeated in responsive source branches. Main nav destinations are inventory, about, agents and blogs pages; the heart links to liked properties. The inspected secondary route contains lifestyle and location checkbox groups, property cards and a mobile Filter properties trigger. Other property/agent/article routes are declarations, not proof of target-page review.

## Design and content system

SOURCE DECLARED: Riviera Nights Trial Regular supplies main text and display typography, with Medium/Bold as separate family names; BT Suave Regular supplies the navigation logo. The image-led beginning uses white estate cards and quiet translucent navigation. Later sections introduce purple surfaces and orange accents, agent photographs and editorial cards. Marketplace device/room staging is promotional presentation artwork. Saved CSS padding and typography are declarations; no browser rectangles or active-layout measurements are asserted here.

OPTIONAL RECOMMENDATION: model properties with stable IDs, routes, title, location, lifestyle, approved photography/focal point, price/currency, beds/baths, availability label and assigned agent. Share a single property record across home cards, inventory cards and detail pages. Keep filtering criteria in a predictable state that can be reset. A saved-property collection should use stable IDs rather than card positions, and should clearly define whether it persists on the current device or requires an account. Build only the controls called for by the source design.

## Reconstruction and operational states

OPTIONAL RECOMMENDATION: complete the static opening sequence and inventory silhouettes before adding scroll choreography. Preserve readable text when motion is reduced, reserve media space to avoid layout jumps and keep Explore destinations reachable. Define inventory loading, results, empty and error states; define filter drawer open/closed and selected criteria; define liked/unliked states; define newsletter/enquiry idle, invalid, sending, success and retry states. Use local demonstration inventory until a real service is authorized.

SOURCE DECLARED: official marketing and serialized controls do not prove a working inventory backend, advanced search algorithm, remembered likes, licensing checks, live prices or form delivery. These outcomes were not tested. Before adapting the reference for a real agency, replace demonstration locations, agent emails, metrics and editorial copy with approved information and connect verified destinations. Keep the distinction between a static recreation and a connected property service visible in the handoff documentation.
