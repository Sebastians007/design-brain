# FF Shop — five component recipes

These recipes recreate FavoritFrame’s furniture storefront from captured source declarations and four official reference images. Values are source based where stated; implementation advice is marked as recommended. The photographed hardware and stone plinths are promotional staging, outside the website.

## 1. Architectural header

Build a full-width warm-gray bar with a bottom hairline. Arrange Menu at the left, Réduce at the center, and search plus Bag with a small circular count at the right. Use Uncut Sans Semibold, CSS weight 400, 18px size, 1.16 line height, −0.02em tracking and the declared `ss05` feature. The source applies a translucent canvas color and 10px backdrop blur. Keep centering independent of unequal side content. Recommended: reserve a persistent bag trigger, explicit accessible names for search/count, visible keyboard focus and touch targets larger than the visual icons. Menu opening and bag mutation are unverified.

## 2. Category rail and landscape hero

Use a three-track desktop composition: one track for the text/navigation rail and two for a large furniture photograph. The source uses viewport-height minimums, a 50px top allowance and 30px inner padding. Place a short two-line editorial introduction at the rail’s top and four ruled category links at its bottom. Preserve the black chair among dry grass as the visual anchor and the small Discover cue visible in the reference. Media declares cover cropping with an initial translated, enlarged image. Phone source changes to a column and orders the rail after media. Recommended: use stable aspect ratios and reduced-motion media instead of hiding the photograph until animation runs.

## 3. Furniture catalog cell

Construct a flush grid with hairline vertical and horizontal divisions. Root CSS declares three columns on desktop, two on tablet and one on phone. Each cell contains padded square product media, followed by an 18px product heading and a price region. Preserve product isolation against quiet gray backgrounds; material texture and silhouette supply visual interest. A New flag may sit beside metadata. Include the designated Mood cell with a closely cropped environmental image instead of making every cell a product. Source routes identify eight home products, while escaped commerce records supply some variant values. Recommended: format money from amount and currency fields, announce unavailable variants, and never infer stock quantity from a static availability boolean.

## 4. Editorial feature and news card

After the catalog, retain the separate Arch-chair image campaign, then the M_002 launch feature. The latter pairs a padded furniture image with a heading, paragraph and Shop Now control; source content uses 30px padding and an 80px internal gap, reduced to 40px in the phone variant. Follow it with three image-led news entries using titles and dates, all connected to detail routes. News media declares an approximately 1.045 aspect ratio. Recommended: author concise replacement copy, link the complete card accessibly and preserve a consistent crop policy. Avoid inserting new sales banners between these source sections.

## 5. Newsletter, language and footer

Finish after the testimonial section with the newsletter invitation and required email input, then the footer’s compact navigation groups. Preserve legal, shipping, privacy, FAQ, social and attribution destinations. Email’s label declares Inter 500 at 12px; the storefront’s surrounding labels retain Uncut Sans. The language control is an actual select, but only English is declared in the captured options. Recommended: add inline form success/error messages only after a real endpoint is connected; make additional languages depend on complete translated content. Keep the global furniture palette and straight rules through the footer rather than introducing a decorative contrasting block.
