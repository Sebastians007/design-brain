# SITE-BLUEPRINT: Finlance digital banking product

## Source anatomy and industry fit

SOURCE DECLARED: the official Framer listing identifies banking apps, fintech startups, wallets and financial SaaS as its intended audience. The public home is product-led: white-menu navigation; landscape/card/transaction hero; benefit ticker; dual personal and business accounts; feature grid; physical-card controls; dashboard showcase; trust logos and counters; review ticker; banking benefits; article grid; closing account CTA and footer. Twelve authored config entries preserve this full order. Section y/height values remain null because source declarations are not rendered measurements. The purple card, floating balance tiles and landscape media distinguish the product from a financial-advisor firm's relationship-led site.

OPTIONAL RECOMMENDATION: adapt the system to a banking-app marketing prototype with separate personal and business product records. Keep demonstration financial values in clearly labelled content records. Existing capability, insurance, fee, yield and security copy must be supplied and verified by the owner before a public brand adaptation. A visual banking dashboard is a design reference, not evidence of money movement, account creation or live portfolio management.

## Route structure and secondary scope

SOURCE DECLARED: nav routes include `/about`, `/feature`, `/blog`, `/security` and `/contact`. Hero Try it free points to contact; Open Account points to feature. Blog card detail routes are retained in source-facts. Footer adds FAQ and legal routes; Careers currently resolves home. The source home IDs are `main` and `header-scroll-trigger`, where the latter belongs to a trigger node. The public `/security` source was inspected and saved as secondary-public.html, secondary-style-public.css and secondary-source-facts.json. Its banner, security cards, account cards, reviews and footer appear in secondary-declarations.json. Other route declarations do not imply separate route review.

OPTIONAL RECOMMENDATION: map account-opening actions to an explicitly configured signup route only after a real product flow exists. Keep contact and product-explainer destinations as separate choices. Review Careers and generic App Store links during adaptation. The secondary security chapter can explain the product's actual safeguards, but the template itself does not certify compliance or security.

## Typography, motion and responsive reconstruction

SOURCE DECLARED: Creato Display Regular handles body copy, Medium handles navigation, and Bold/Bold Italic carry display contrasts; Almarai and Inter appear in special caption/widget roles. Base h1 is96px/96px, not the generic extractor's first laptop82px value. SourceRoleDetails preserves base and media presets plus inline overrides. Breakpoints are1440/1200/810px with literal maximum boundaries retained. Tickers, character-split text, counters and appear records establish intended motion structure; running timings were not measured. Gutter24, radius24 and gap24 are optional construction defaults, not universal source tokens.

OPTIONAL RECOMMENDATION: recreate the source chapter order first, then add restrained motion. Use static useful content for reduced motion and preserve readable account/card metadata on phone. Verify font files by declared format and retain italic faces instead of browser-synthesized slant. Native browser screenshots and observed states, when appended by the collection workflow, remain separate evidence from this source specification.
