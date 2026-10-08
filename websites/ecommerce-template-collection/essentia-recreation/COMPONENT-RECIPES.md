# Essentia — five component recipes

Basis: public preview HTML/CSS plus three official marketplace images. Source declarations describe structure and typography; photographs in promotional device frames do not establish rendered viewport measurements. All implementation behavior below is a recommendation unless explicitly described as declared.

## 1. Layered jar hero

**SOURCE DECLARED:** The hero is sticky, 100vh high, with desktop padding 119px 48px 64px. Geist heading uses 82px, weight 500, 105% leading and −0.03em tracking. A 32px subline occupies a separate text area. Jar and hand are separate images: the jar uses `object-fit:contain` at center; the hand uses contain at center bottom. The giant brand word has an inline 294.79px declaration and 80% leading. The official phone view retains headline, portraits, stars, jar and hand vertically.

**RECREATE:** Position the product independently from text, leaving real negative space. Keep the reflective jar complete, while deliberately allowing the hand to meet the lower edge. Scale the decorative word to available width; it must never obscure readable copy.

## 2. Product story stages

**SOURCE DECLARED:** Hero, text reveal and four feature stages share a scroll container. Feature components reserve product space. The how-to sequence has three steps, with its first stage sticky at 100vh. Headline spans declare tiny starting opacity, 5px blur and 10px downward translation; the hand starts 300px lower. Lenis is named in the document.

**RECREATE:** Keep the jar as the recurring visual reference while concise benefit panels pass through the story. Use large section typography and short supporting paragraphs. Treat timing, easing and jar travel as unverified. Provide an ordinary stacked version for reduced motion and short screens, with every sentence visible and no oversized blank scroll runway.

## 3. Scientific proof bento

**SOURCE DECLARED:** A portrait-led sage section precedes an asymmetrical bento. The bento gap is 12px; a larger box uses an 8px radius and 48px padding. The official image shows smaller numeric cells, a clinician cutout, and a tightly cropped skin photograph with small benefit tags. Counters and label tickers appear as named structures.

**RECREATE:** Use pale sage tonal variation rather than heavy borders. Balance compact metric cells against one editorial proof cell. Preserve the clinician's face and upper-body silhouette; allow the skin photograph to fill its rectangular cell. Replace template claims with substantiated merchant content. Stack cells when width cannot maintain readable labels.

## 4. Same-page purchase module

**SOURCE DECLARED:** `#ordernow` identifies the product section. Four 64px thumbnails have selected/deselected states and four corresponding images, all using center/cover. Desktop gallery and product information share a 48px gap; information has a 480px maximum width. Size buttons declare Standard and Travel variants. Quantity, shipping/return disclosures and Add to Bag are present.

**RECREATE:** Keep gallery media square or proportionally bounded, separate from the contained hero art. Use dark ink for the selected size and pale neutral for alternatives. Associate quantity and price with the active variant. Recommend keyboard-operable thumbnails and disclosures, selection announcements, and a clear addition result. Cart mutation and gallery transitions require implementation verification.

## 5. Purchase companion and footer

**SOURCE DECLARED:** The add-to-cart bar includes thumbnail, name, price, selected variant, Change anchor, quantity and bag action. Show/hide trigger nodes bracket later story regions. The footer combines menu/social links, email field, agreement control, legal links and giant brand lettering.

**RECREATE:** Synchronize the companion bar with the main selector; Change returns to `#ordernow`. Recommend hiding it while the full purchase module is in view, without claiming the source's actual trigger behavior. Keep the footer spacious and typographically related to the hero. Confirm subscription state only after a real service responds.
