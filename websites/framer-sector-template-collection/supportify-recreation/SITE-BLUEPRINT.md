# SITE-BLUEPRINT: Supportify customer knowledge base

## Home information architecture

SOURCE DECLARED: Supportify by Anton Radionov is a genuine standalone help center. The primary public preview starts with brand/navigation/search, a plain Help Center heading and description, six support collection links, a Quick Links answer index, newsletter invitation and repeated footer navigation. The inspected official reference images establish the text-first light and dark presentation. Screen frames surrounding those compositions are packaging. Section y/height values are null because no rendered coordinates were measured in this pass.

The collections are two-column icon/title/excerpt rows with bottom rules, not promotional feature cards. Their routes lead to collections; the quick index leads straight to individual articles. The captured home has no large illustration, testimonial carousel, pricing grid or sales CTA. This distinction makes it appropriate for customer self-service and keeps it separate from a product marketing template that merely lists documentation as a feature.

## Inspected secondary source and records

SOURCE DECLARED: the public article `/articles/how-to-use-my-template-effectively` was fetched with its CSS, headings, type presets, images, routes and named components. It has a collection breadcrumb, title/dek/body, intermediate headings and lists, related articles and a support escalation block. It does not share Docspace's persistent technical sidebar. Other source destinations include collection routes, `/contents`, `/styleguide`, `/changelog` and `/contact`; their presence is route evidence, not proof that every target or backend has been reviewed. The article's repeated source text belongs to responsive variants and must not be duplicated in a recreation.

OPTIONAL RECOMMENDATION: use collections with slug/title/icon/excerpt/order and articles with slug/title/dek/collection/structured body/related article IDs. A featured-answer index should curate article IDs independently of latest publication date. Changelog records should remain a separate type with dated updates; a style guide is an internal visual reference rather than a customer answer collection. Keep the customer contact destination explicit and test it after configuring actual ticket routing. Replace whimsical template-help sample taxonomy and prose together for the real customer product.

## Reading density, responsiveness and theme evidence

SOURCE DECLARED: Inter is the body and display family. The wordmark uses700; interface labels500; paragraphs400. Encoded selectors Inter-Bold/Inter-Medium describe Inter weight roles, not independent fonts. Desktop help heading48px/57.6px and compact40px; article title32px/38.4px desktop and26px/31.2px compact. Body16px/24px and introductory dek20px/28px are distinct. Root boundaries are1200px and810px with media endpoints1199px/809px; all parsed values are separately recorded in the configuration.

The inner wrapper max-width1080px and large section gap120px establish quiet spacing; tablet reduces the gap80px and content padding80px40px. Grids become a single column on phone. Newsletter panel padding changes from80px to40px20px. Base canvas is #f5f5f7 with black text/opacity levels; dark canvas #1e1e24 with inverted white levels comes from prefers-color-scheme declarations. A manual toggle was not established. The neutral accent selected for the study is black, not a fabricated brand color.

OPTIONAL RECOMMENDATION: preserve collection/title/excerpt order through stacking and keep long question titles readable above their row divider. Provide visible keyboard focus and a labelled accessible mobile menu/search dialog. Only the captured `#main` DOM ID is a meaningful stable source anchor; create additional article heading IDs as an implementation step, without calling them measured source anchors. Search ingestion/results, newsletter provider delivery, ticket creation, feedback and CMS workflows need separate functional verification. Source presence alone does not establish them. Keep the help content readable while those integrations are pending.
