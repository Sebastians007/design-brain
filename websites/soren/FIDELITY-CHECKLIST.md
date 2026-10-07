# Fidelity and validation checklist

## Visual acceptance

- [ ] Actual local Halibut, Switzer, and Chivo Mono load without network requests.
- [ ] Hero uses weight 20, near 0.8 leading, and fills its column on one line.
- [ ] Name, vertical rule, centered description, and metadata have source-like spacing.
- [ ] White is pure white; About is pure black; gray surfaces and pills match tokens.
- [ ] Accent is limited to tiny square marks and selected small text.
- [ ] Desktop content is 1156px wide at 1348px document width; side gutters are 96px.
- [ ] Standard desktop sections retain roughly 160px vertical padding.
- [ ] ASCII band is a full-width texture, not a terminal window or boxed code example.
- [ ] Three project presentations are stacked; images are ~4:3 and square-cornered.
- [ ] Each project has a centered 580px-max description and mono tags/year.
- [ ] About gallery has equal-width images, 16px gaps, and varied heights.
- [ ] Process rows have large left labels, right copy, tags, and fine dividers.
- [ ] Testimonial proof uses restrained cards, 24px quote type, and 36px avatars.
- [ ] Experience uses rows, 36px logos, and mono metadata.
- [ ] Contact address fits the flat gray panel without clipping.
- [ ] No decorative shadows, glow, dashboard widgets, or unrequested sections appear.

## Responsive acceptance

Test 1363×936, 1024×768, 810×1080, 390×844, and 320×700. Recheck just below/above 810 and 1200. Source desktop screenshot matching must use the same scrollbar convention. Phone/tablet source evidence is CSS-derived, not a captured pixel baseline.

- [ ] No horizontal document overflow. A project track may overflow within its clipped region.
- [ ] Phone process, experience, and contact content stack correctly.
- [ ] Service/client layout changes at the declared breakpoints.
- [ ] Title and contact refit after fonts load and after viewport resize.
- [ ] Tags wrap; long email addresses remain readable.
- [ ] Navigation works with keyboard, narrow widths, and dark backgrounds.
- [ ] Photo crop ratios survive changing screen widths.

## Functional acceptance

- [ ] Anchor navigation targets the correct section and updates location appropriately.
- [ ] Project controls actually change the intended project's image.
- [ ] Keyboard controls and touch gestures work; carousels do not steal vertical scrolling.
- [ ] Copy-address action reports success only after clipboard success; failure is useful.
- [ ] Clock uses Swedish local time and updates minutes.
- [ ] Particle text returns to a legible resting state.
- [ ] ASCII/particles stop under reduced motion and offscreen/hidden-document conditions.
- [ ] Repeated resize does not leave stale canvases, listeners, or timers.
- [ ] Heading hierarchy and accessible names remain intact; decorative duplicate letters are hidden from assistive tech.
- [ ] User-visible example content is identified; no demo testimonial is passed off as a real endorsement.

## Caption-engine acceptance

Inject a short two-group transcript into the skin. Seek to before the first word, mid-word, between groups, after the last word, and backwards from the end. At every time verify one visible group, one current word when speaking, correct spoken/upcoming classes, and the same state when seeking backwards. Confirm duration, 1920×1080 dimensions, band tokens, and local GSAP path. This runtime engine test is a requirement for a future integration; this package itself was checked for syntax and preserved hooks, not rendered by a video engine.

## Comparison procedure

1. Capture the implementation at the source desktop viewport after fonts and images settle.
2. Match image pair/index and scroll position before comparing.
3. Use side-by-side screenshots, then a 50% opacity overlay if available.
4. Correct glyph shape/fit and large layout before polishing rules or motion.
5. Repeat on phone/tablet using declared CSS values and implementation screenshots.
6. Report deviations explicitly: font substitutions, different assets, altered copy density, motion approximations, and unverified source behavior.

Suggested prioritization, not a measured score: typography 30%, geometry 30%, media/crops 20%, palette/detail 10%, interaction 10%. Any major failure in font choice, black section, project scale, or page order blocks a high-fidelity claim regardless of the score.
