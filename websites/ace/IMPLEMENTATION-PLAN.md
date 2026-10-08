# Ace recreation implementation plan

**Goal:** Analyze the live Ace preview, add a reusable entry matching the Soren reference format, and supply a functional responsive recreation.
**Architecture:** Buildless semantic HTML, a shared CSS token layer, and small progressive JavaScript. The reference package and recreation remain together under `websites/ace`; the hosted copy has identical application assets.
**Spec:** `FRAME.md` records observed values and distinguishes implementation choices.

## Constraints and decisions

- Preserve the source section order, dark surfaces, typography, cyan accent, spacious card geometry, grain, and alternating step composition.
- Use original substitute marketing prose and clearly marked illustrative reviews. Preserve the short source hero headline as the defining specimen.
- Native links, keyboard-accessible FAQ, mobile navigation, reduced motion, and a local demo dialog make the recreation usable without accounts or a backend.
- CTA buttons open a clearly labeled local demonstration; they do not create real agents or collect personal details.
- Bundle public font/texture/logo assets with their source URLs. Exact proprietary animations are not recovered.
- GitHub branch creation returned 403. Prepare a patch and ZIP against the fetched README files; do not claim a GitHub write.
- This conversation has an empty isolated workspace; use a new local repository for the import patch. Do not alter an existing checkout.

## Tasks

1. [x] Record measured colors, type, geometry, responsive CSS rules, source screenshots and provenance in the repository's existing entry format.
2. [x] Build the section markup and responsive CSS; implement native FAQ disclosure, menu state, and demo dialog controls.
3. [x] Verify actual DOM interactions, keyboard close/focus behavior, navigation destinations, valid local assets, and safe demo rendering. Test blank and literal HTML-like goal inputs.
4. [x] Package the exact source, publish privately with Sites, create an import patch and ZIP, and report the GitHub permission limitation.

## Review focus

Small widths must not clip text; navigation must close after link selection and Escape; dialog must restore focus; blank goals must not run; input containing markup must render as text. No backend capability or pricing/testimonial claim is established by a design reference. Source phone CSS is recorded separately from recreation choices. Browser QA is unavailable under the managed Sites workflow because the required control-browser skill is absent; static and DOM checks remain required.

## Verification ledger

Eight DOM tests pass against the actual application script. JavaScript syntax passes. CSS parses without errors. Independent review found hidden-link focus on Escape; a regression test failed, focus handling was fixed, and all eight tests passed. Opening the mobile menu now focuses its first link. A suggested below-300px price-row improvement is outside the minimum 320px target; browser overflow checks remain outstanding. GitHub integration rejected branch creation with 403; no GitHub mutation occurred.

Private deployment succeeded at https://ace-design-brain.smartbuzz.chatgpt.site. The binary import patch applied cleanly to a fresh snapshot and all files matched byte-for-byte. Remote GitHub update remains blocked by connection permissions.
