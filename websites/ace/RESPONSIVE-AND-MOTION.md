# Responsive layout and motion

## Reference rules recovered from public CSS

| Width | Reference declarations |
|---|---|
| ≥1200px | Three-column benefit, feature, review and pricing grids; 400px workflow rows |
| 810–1199.98px | Two-column grids; last benefit/pricing card spans both columns; workflow rows 320px |
| ≤809.98px | One-column grids; 16px section gutters; section padding remains 150px top / 100px bottom; workflow rows stack vertically at 500px; pricing grid row gap 16px |

These are CSS-derived, not tested source phone/tablet screenshots. The native markup contained responsive variants; duplicated search text is not evidence of duplicated visible sections.

## Recreation choices

The same grid thresholds and workflow heights are implemented. Header gutters are 32px on tablet and 16px on phone. Phone navigation opens below the header, exposes `aria-expanded`, closes on destination selection, and closes on Escape. Phone hero type scales from 30 to 40px and section headings use 32px. Phone card prose gets 1.3 line height for readability. The footer wraps naturally.

Use a minimum 320px viewport. Text and controls remain fluid inside the content column; no fixed-width children should extend past it. Test representative widths of 1363, 1024, 810, 809, 390, and 320 CSS pixels. These are acceptance targets, not a claim of completed browser checks.

## Interaction contracts

- Native anchor links move to the eight sections and footer home link returns to the hero.
- Seven native FAQ disclosures work with mouse, keyboard, or JavaScript disabled. Multiple answers may stay open; exclusivity was not established in the source.
- CTA/plan actions open a native modal dialog. The plan label reflects the selected button. Close and native Escape return focus to the opener.
- Example goals fill the local textarea; preview produces three deterministic steps. Whitespace-only input is rejected. User input is rendered as text. Reset clears the preview.
- The page has a skip link and visible cyan keyboard focus.

## Motion choices

Action transitions use 200ms. Original CSS workflow tiles pulse over 6 seconds with staggered phases. There are only sparse lit tiles; do not animate the entire surface. Under `prefers-reduced-motion: reduce`, disable smooth scrolling, transitions and pulses while keeping lit tiles visible. Exact original motion timing and shader behavior were not recovered.

## Verification boundary

The managed Sites workflow requires a control-browser skill for browser QA. That skill was not available in this conversation, so no local preview browser or alternative automation was started. Automated checks run the real application JavaScript in JSDOM and validate markup/assets. Native dialog focus trapping, real browser FAQ keyboard behavior, viewport overflow, font rendering, and animation appearance require a browser review after opening the deployed page.
