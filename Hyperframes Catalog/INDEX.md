# Frame presets distilled from the HyperFrames examples

25 presets, one per example video on https://hyperframes.heygen.com/examples. Each folder has:

- `FRAME.md` - the preset (colors, type ramp, components, treatments, rules, Known Gaps), same layout as the built-in presets
- `caption-skin.html` - the lower-third karaoke caption look, built to the same contract as the built-in skins
- `frame-showcase.html` - open in a browser: palette, type, components, recreated frames, rules, caption demo
- `reference-frames.jpg` - 12 frames sampled across the real video; this is what the preset was written from

Every `FRAME.md` was audited against its reference frames: effects listed in the source code but not visible in the frames (grids, grain, glow, shadows, gradients) were removed or softened and recorded under **Known Gaps**. Four presets (timeline-editor, variables, quiet-luxury-poem, bw-montage-emerald-reveal) and several others show no captions in the video, so their caption skins are a design built from the preset's palette, not copied from the footage.

Palette, fonts and sizes came from the source specs in `../example-specs` where a source project existed, and from the
sampled frames otherwise (values from frames are estimates). Brand marks and mascots from partner videos were
described generically, not reproduced.

| Folder | Look |
|---|---|
| heygen-stripe | Near-black green + halftone sunburst + white; neon-ringed presenter window; word drum |
| hyperframes-launch | Cream paper, serif hero lines with shimmer, glass player card, dark caption chips |
| website-to-video | Hard-cut trailer; glass tag chips + bold captions; dark aurora end card |
| spacex-explainer | Monochrome dark chat UI; composer pill; counting figure on a cream tile |
| k3-promo | Black HUD spec sheet; braces, crosshairs, hatch bars, outlined pills |
| agent-skills | Butter-yellow ground, black kinetic type, cyan keyword, mono file trees |
| texture-launch | Paper captions + saturated poster stages with texture-filled words; glass over shader |
| vfx-reel | Black showreel: light rays, giant type over liquid video, paper prompt box, RGB split, portal |
| claude-design | Cream product UI to dark capability reel with pill captions; serif title + stamp |
| cloud-rendering | Paper + dark terminal window; mono logs; mint-to-cyan progress; tile grid payoff |
| figma-launch | Square; dark pattern ground; frosted glass tweet cards; green mono commands |
| frame-md-storyboard | Spec world (mono, off-white) flips to candy frame world (cream, fat rounded type) |
| studio-inspector | Living halftone dot canvas; cream headlines; serif-italic gradient accent words |
| integration-codex | Lavender gradient + white swap card, then dark demo, black title, white end |
| integration-community | Kinetic manifesto cards (own colour world each) then captioned tutorial |
| integration-ollama | Dark app window then pure white line-art world; iridescent gem end |
| integration-vercel | White grid + flat black geometry; black rounded tiles with a plus |
| keyframes | Black stage, acid-green rotated stickers on a white curve; white UI cards |
| music-to-video | Black audio lab; green waveforms and spectrum bars; mono readouts |
| pr-to-video | Cream workspace, dark terminal, serif statements, clay accent |
| sound-and-music | Cream paper + dot grid; giant dark button; pixel pet; clay line |
| timeline-editor | Apple-white canvas; giant stair-stacked heavy type; orange pill; timeline clips |
| variables | Pure white keynote; one accent word per line; glass phone cards; variant code cards |
| quiet-luxury-poem | Tiny lowercase poem on cream; photo inside the sentence; heavy wordmark |
| bw-montage-emerald-reveal | B&W footage + mixed sans/serif-italic text; emerald reveal with mint metaballs |

Not on the examples page, so no folder: liquid-brand-refraction, heygen-apple-motion (they exist as spec notes in `../example-specs`).

To use one in a project, copy its `FRAME.md` to the project as `frame.md` (or copy the folder into the skill's
`hyperframes-creative/frame-presets/` so `build-frame.mjs --preset <name>` can find it).

