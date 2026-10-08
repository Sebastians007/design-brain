# Renovation component recipes

Evidence: TemplateX's official Renovation listing (slug 70920), three saved official reference images, home public HTML/CSS and the fetched kitchen-remodel project source. Images were visually inspected. Source declarations describe intended styles and structures; browser dimensions and business operations were not verified.

## 1. Image-interrupted serif hero and architectural strip

SOURCE DECLARED: the hero has trust portraits, three separate heading fragments and two architectural image capsules inserted between fragments. Times New Roman supplies the base h1 at 74px, 130% line height, 400 weight and -.05em tracking; tablet/phone presets use 42px. Inter provides the supporting paragraph and 14px/160% action. The hero frame declares 140px 40px 100px padding, changing to 120px 18px 80px on phone. OFFICIAL REFERENCE: keep the very light canvas and wide image gallery below the statement. OPTIONAL: recreate the line as wrapping text/image units with semantic heading text available to assistive technology; assign decorative capsules empty alt text. Keep the gallery's architecture crop distinct from the capsules. Do not infer exact image widths from the angled promotional screenshot.

## 2. Availability bar and floating bottom navigation

SOURCE DECLARED: the upper bar includes a logo and an availability component with Pulser/Pulsing/Solid names. The dark navigation has desktop and phone variants; Home links #hero, Services #services, Contact #contact, and Projects /projects#my-projects. Inter navigation uses a 16px/150% base preset and a 14px compact alternative. OFFICIAL REFERENCE: preserve its compact black rounded silhouette over the imagery. OPTIONAL: reserve content clearance for the floating bar, use visible focus, and announce only a meaningful business availability state. The pulse should stop under reduced motion. Get Started, availability and hero Get In Touch Today currently point to the template remix destination; use approved quote/contact URLs only as an explicit adaptation.

## 3. Renovation service accordion with image stack

SOURCE DECLARED: kitchen renovations, bathroom remodeling, loft conversions, home extensions and interior design/styling appear as question/answer structures with separate desktop and mobile variants. Service labels declare Inter 18px/150%, with 16px compact labels. Associated image cards are named img card 1 through img card 5. Section h2 is Times New Roman 48px/1.15em base, 36px tablet and 32px phone. OPTIONAL: keep one service expanded by default if matching the displayed reference; synchronize its explanation and image without removing useful text from the document. Use actual buttons, aria-expanded, an associated panel ID and keyboard-operable transitions. Fixed animation heights are risky when descriptions are edited; size to content and keep all panel copy available with animation disabled.

## 4. Residential project card and case-study route

SOURCE DECLARED: three project cards link to individual kitchen, bathroom and external-garden routes, with a separate See All /projects destination. The kitchen case page was fetched into secondary-public.html; its structure and typography presets are preserved in secondary-declarations.json. OPTIONAL: retain image, project title and one clear destination as one coherent card. Use project records with slug, approved client/location label, renovation type, finished photography, summary and scope. Build the case page from the saved source anatomy before adding cost or timeline fields. Do not invent before/after behavior, actual budget figures, or completed-project counts from visual cues.

## 5. Testimonials, FAQ and enquiry conclusion

SOURCE DECLARED: reviews contain stars and attribution; FAQ variants include Open and Closed. Contact has office, mail and phone details, Full Name, Email Address, Subject Of Interest and message labels, plus a send action. A call-booking line uses Dancing Script 700 at 26px/150%; its link points to Calendly's generic root. The desktop footer wordmark declares Times New Roman 500 with an inline 165.97654563943493px/1em size, while the phone variant is 32px. OPTIONAL: preserve the handwritten accent only on this booking line. Define valid/invalid/sending/success/retry form states after selecting an authorized endpoint. Keep contact details and error text visible. Testimonials, license/experience statements and metric counters need approved business content before publication.
