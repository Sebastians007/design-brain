# Vertical — five reusable component recipes

Original recreation guidance for [Vertical](https://vertical.framer.media/) by Tamas Bodo, based on public HTML/CSS and official promotional references. The smoky surround, rounded frame, and template captions are marketing graphics. Recommendations are authored; live behavior was not observed.

## 1. Fragmented portrait hero

Build three large typographic rows over a near-black portrait. Place the first name fragment left, the second centrally, and the third lower right. Reserve the upper right for a three-line statement and author credit. Four indexed phase columns provide an underlying grid; the skill list anchors the lower left. Crop the portrait to preserve its face beside the statement. Keep semantic reading order as title, statement, author, phases, skills. Recommend a short image reveal and keyboard-visible navigation. The fitted 409px source declaration is a starting clue, not a fixed cross-screen size.

## 2. Captioned asymmetric gallery

Reuse a figure with an image region followed by a small technical caption. Assemble three figures in each of two rows, following source order one through six. The public declarations specify twelve grid tracks for the upper row and thirteen for the lower, with a 60px row gap; retain their offset rhythm instead of forcing identical cards. Choose crops individually so experimental subjects remain recognizable. Keep captions outside the picture when contrast would suffer. Recommend an understated focus border for linked projects, and allow static figures where no destination exists. On phones, stack the figures in numerical order with consistent image-to-caption spacing.

## 3. Concept catalog spread

Pair a dark title panel with a gray explanatory panel. The left reads index, revision, project title, then image; the right reads concept heading, description, catalog/navigation entries, then landscape video. Use 24px side padding and 40px top padding as desktop source anchors. Give the title a narrow reading width. Crop supporting imagery decisively, but contain video when framing carries meaning. Recommend clear controls and a descriptive poster. Collapse to title and imagery first, then explanation and media, preserving the narrative.

## 4. Green featured-study spread

Use an acid-green study panel with two principal columns. The left holds the headline, compact study metadata, emphasized editorial text, and three small captioned thumbnails; a narrow band of repeated rules creates texture beside them. The right contains separate upper and lower image areas and connected text. The promotional portrait still demonstrates visual impact but does not prove a single-image implementation. Use cover crops for the thumbnails, matching the source declarations. Recommend accessible links for any selectable thumbnail and a visible selected state only when selection exists. Desktop stickiness is source-backed; let the component flow naturally when stacked on tablet and phone.

## 5. Artist-statement diptych

Compose a pale-gray statement alongside a dark, tightly cropped figure. Overlay the image side with compact features, a colored dot, and a large lower message; repeated fine vertical rules define its inner edge. Give the text side an opening line, an oversized keyword, a heavy horizontal rule, explanatory copy, and a quiet monospace footnote. Read the statement before decorative image overlays in the accessible structure. The source has a 200vh desktop wrapper and a sticky image structure, so recommend a restrained scroll sequence with a complete static reduced-motion version. Preserve text contrast and remove overlap when the two panels become a vertical phone sequence.
