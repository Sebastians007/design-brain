# SITE-BLUEPRINT: Sidenote personal newsletter and essays

## Author-led publishing anatomy

SOURCE DECLARED: Sidenote is a personal essay blog suited to writers, designers, researchers and founders building a newsletter audience. The hero introduces a named author in a first-person Newsreader sentence and contains an email capture. The home continues through a Now strip, reading statistics, sidenote explanation, latest essay, pinned reading demonstration, pull quote, essay index, Start Here, short notes, process story, series shelf, bookshelf, topics, reader letters and newsletter archive. The footer returns to the letter invitation. This is distinct from an issue magazine: the author, their ongoing practice and the recurring letter carry the hierarchy.

OPTIONAL RECOMMENDATION: adapt it to an independent designer's twice-monthly essay letter. Maintain separate essay, short-note and series records. A note may be a short thought, link or quote; it should not require the same editorial body as a long essay. Store author status and reading-list annotations separately from article metadata. Preserve the curated Start Here route as editorial guidance for first-time readers while the essay index remains chronological.

## Newsletter and route structure

SOURCE DECLARED: reading destinations include `/essays`, essay details, `/notes`, `/series`, `/library`, `/now`, `/about` and `/newsletter`. Topic links use `/essays?topic=...`. Home anchors are `#top`, `#now`, `#series`, `#letters`, `#archive` and skip destination `#main`. The public `/newsletter` source was fetched successfully, with title The letter: one essay, three notes, nothing else. Its named structures, heading declarations, font presets and form attributes are in secondary-declarations.json. Archive links and provider-related marketing statements are source declarations, not delivery evidence.

OPTIONAL RECOMMENDATION: use one newsletter configuration for all repeated forms and keep cadence, privacy copy and confirmation language consistent. Archive records should hold subject, date, excerpt and a real public destination. Give each essay a stable slug, structured headings, footnote IDs, topic and series membership. Link reader correspondence only with permission; demonstration testimonials and readership counts do not establish a real audience.

## Reading, theme and interaction constraints

SOURCE DECLARED: Newsreader Variable supplies the editorial display and body; Geist supplies interface and curated reading cards; Geist Mono supplies labels and metadata. The hero declares opsz72/wght400 and96px/1.06em with-.025em tracking. Source geometry records a1200px maximum hero width and820px text width, with1200px/768px responsive boundaries. Day tokens are light; the inspected first official image is dark Lamp mode. Source names include cursor ink, pinned stories, quote ink, a motion guard and lamp glow. Their full runtime contracts are untested.

OPTIONAL RECOMMENDATION: retain a static readable page before adding scroll choreography. Make note references focusable and expose notes without requiring hover; adapt margin notes to a labelled compact drawer or inline presentation. Keep manual Day/Lamp choices understandable alongside Auto. Under reduced motion, render all essay/series/letter content without pinning or cursor effects. Define idle, invalid, sending, success and retry form states only after a provider is supplied. Search, email delivery, provider connections, member gates and persistence require separate verification and are not established by these source files.
