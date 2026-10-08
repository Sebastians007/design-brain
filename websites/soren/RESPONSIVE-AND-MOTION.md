# Responsive and interaction contract

Evidence labels: **measured** = inspected rendered desktop; **CSS-derived** = public source declarations; **recommended** = independently selected reconstruction behavior.

## Responsive matrix

| Property | Desktop >=1200 | Tablet 810–1199 | Phone <=809 | Evidence |
|---|---:|---:|---:|---|
| Side gutter | 96px | 64px | 40px | measured / CSS-derived |
| Standard section padding | 160px | 112px | 80px | measured / CSS-derived |
| Hero vertical padding | 120px | 112px | 80px | measured / CSS-derived |
| Vertical hero rule | 120px | 100px | 80px | measured / CSS-derived |
| ASCII band height | 300px | 240px | 160px | measured / CSS-derived |
| Main sans body | 20px | 19px | 18px | measured / CSS-derived |
| Medium sans | 24px | 22px | 20px | measured / CSS-derived |
| Process title | 56px | 46px | 36px | measured / CSS-derived |
| Project title | 40px | 34px | 28px | measured / CSS-derived |
| Mono labels | 16px | 15px | 14px | measured / CSS-derived |

Do not implement the artboard widths of 1200/810/390 as fixed document widths. Those are breakpoint design widths. The implementation must remain fluid between thresholds and never overflow a 320px viewport.

**CSS-derived structural changes:** tablet About biography spans both grid columns; service/client groups become a horizontal pair. Phone About content becomes a vertical stack, with 40px internal gutters; the three-image gallery remains a compact three-image treatment, with declared fallback heights of 92/184/124px at the 390px artboard. These values sit inside `aspect-ratio` compatibility fallbacks; preserve ratios rather than hardcode them at every phone width. Do not assume they were verified in a phone screenshot.

Phone process rows become vertical with 12px internal gaps and 32px vertical padding. Phone testimonials stack inside a 32px-padded container, with 48px card gaps. The source clears the large gray outer background on narrower views; preserve a restrained surface treatment instead of nesting gray cards in gray bands. Phone experience rows stack and indent role/date information 52px from the logo column. Phone contact has 80px top padding, a 12px-padded address panel, and vertically stacked lower content with 24px gaps.

**Recommended safeguards:** preserve the actual compact nav links instead of inventing a hamburger without evidence. Remove optional time first if the row cannot fit; wrap links only as needed. At 320px, reduce side padding below 40px if necessary to avoid unreadable text; this is a deliberate accessibility departure, not a measured source rule. Let tags wrap. Refit the serif name/contact after resize, not only on load.

## Interactions

| Element | Observed source | Reconstruction requirement |
|---|---|---|
| Navigation | Anchor links; sticky ancestor with `mix-blend-mode: difference`; text inverts on black | Native anchors + smooth scrolling; blend white text against the page; keyboard focus visible |
| Link text | Layered duplicate letters support rollover | Recommended vertical letter rollover, ~220ms easing, 10–15ms stagger; preserve one accessible label |
| Local clock | Swedish-local clock updates in navigation | `Intl.DateTimeFormat`, `Europe/Stockholm`, 24-hour hours/minutes; no hardcoded capture time |
| Hero | Visible serif text plus decorative canvas; particle component advertised | Preserve DOM heading; cursor repulsion and spring return are recommended, exact parameters unknown |
| ASCII band | Dynamic monochrome glyph texture; 16px mono cells | Recommended low-frequency procedural field; monochrome, subtle movement, full-width clipping |
| Project media | Two images per project; 40px next control with 0.25s fade | Recommended next/previous, arrows and touch swipe; independent state per project; no auto-advance by default |
| Email | Text has button semantics in hero and large contact panel | Native button; copy address on activation, feedback on success, accessible failure fallback |

The arrow was activated but stable slide movement was not verified. Wrap/stop behavior and slide duration therefore remain recommended. Build useful controls without representing those decisions as extracted source behavior.

## Recommended particle implementation

Wait for the Halibut font, draw the heading to an offscreen text canvas, and sample only opaque glyph pixels at a device-scaled grid spacing. Give each particle a fixed home position. Apply local pointer repulsion within roughly 80–110 CSS pixels and a damped spring back to home. Use `requestAnimationFrame`; clamp delta time after tab inactivity. These numerical values are recommended starting points. No particles should remain displaced when the user is not interacting. Support pointer leave, resize, font refit, and touch scrolling without intercepting native page gestures.

Keep an equivalent H1 in the DOM. Mark the canvas decorative. For `prefers-reduced-motion`, render the static heading and stop the simulation. Cap particle count and draw resolution on narrow screens. Do not make the entire headline inaccessible or disappear while the font loads.

## Recommended ASCII implementation

Generate a grayscale field from two or three slowly moving sine waves. Map density to a small punctuation/letter character set, render as monospaced rows, and update at 8–12fps rather than rebuilding the whole DOM at 60fps. Use muted gray on white. Stop updates when the band is offscreen or the document is hidden. Reduced motion receives one deterministic frozen pattern. The exact original wave field and character mapping are unknown.

## Captions: compatibility and distinction

`caption-skin.html` is adapted from the user's provided skin. It keeps the injection holes, class hooks, composition metadata, and `window.__timelines['captions']` contract. The skin is a fragment, not a complete website. The producer injects `GROUPS`, `DURATION`, root dimensions, and the `data-brand-tokens` stylesheet. GSAP 3.14.2 is bundled locally to avoid a CDN dependency.

Keep state transitions as timeline `.set()` operations so arbitrary forward/reverse seeking works. Do not move karaoke state changes into callbacks. Upcoming words are subdued gray, current words have an accent underline, and spoken words settle to black. In a black scene inject white ink and a black canvas. This is a new video companion; it is not evidence of website captions.
