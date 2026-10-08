# Meridian Residences SITE-BLUEPRINT

## Single-development architecture

SOURCE DECLARED: this reference markets one luxury tower, apartment/condo development or extraordinary property. The official listing identifies residences, floor plans, amenities, neighbourhood and register interest; it also describes two CMS collections for residences and press. The home source begins with The Ascent, followed by 01 Approach → 02 Statement → 03 Building → 04 Residences → 05 Amenities → 06 Neighbourhood → 07 Team → 08 Invitation → footer. Preserve that progression from atmosphere to architectural detail and enquiry.

SOURCE DECLARED: navigation uses separate `/the-building`, `/the-ascent`, `/residences`, `/amenities`, `/neighbourhood` and `/register` routes. No numbered chapter anchor IDs were found in the inspected home source. `/residences` was fetched and inspected as a secondary source: a serif introduction leads to One Bedroom, Two Bedroom, The Duplex and The Crown chapters, architectural/detail links and brochure invitation. Other route declarations do not establish reviewed target pages or functioning sales workflows.

## Visual and typography constraints

SOURCE DECLARED: night surfaces, pale stone text and brass accents carry the project. The cinematic tower/elevation scene is the central visual component; the official Marketplace's textured outer backdrop is presentation artwork. Source text combines Framer nav presets with many native inline custom components. Native headings declare Bodoni Moda and optical sizes96/72/60 by role; the Framer font-face declares Bodoni Moda Variable and the wordmark uses that family with opsz24. Native supporting paragraphs declare Inter300, while saved faces list400/500/700. Runtime family alias resolution and exact font weight loading are unverified. Preserve the intended roles, then record any explicit alias or font substitution required in implementation.

OPTIONAL RECOMMENDATION: model one development plus residence types, floors/view records, amenity scenes, team credits and enquiry preferences. Separate photographs and metadata from current availability. A floor selection can demonstrate a height/view concept with deterministic local fixtures, but should not claim inventory reservation. Approved floor plans should retain their units, dimension labels, version and associated residence type; provide readable enlargement or a real document destination when supplied.

## Motion and enquiry states

SOURCE DECLARED: the saved source contains a curtain, reveal transforms, blur/opacity transitions, line effects, tracked chapter-label transitions and a reduced-motion query. Official images show different elevation states; successful drag physics, plan drawing, loading completion, assistant responses and brochure delivery were not tested.

OPTIONAL RECOMMENDATION: build the readable static page first, then introduce floor selection, chapter reveals and plan effects. Give the rail a keyboard-operable slider or discrete floor alternatives, selected value and matching textual metadata. Define unselected, selected and unavailable sample-floor states; define brochure form idle, invalid, submitting, success and retry states. On reduced motion, show complete text and a stable architectural view. Any assistant is optional and should have its own configured availability and error states. Before real deployment, replace template statistics, place names, prices and team claims with approved project material and supply a verified enquiry destination.
