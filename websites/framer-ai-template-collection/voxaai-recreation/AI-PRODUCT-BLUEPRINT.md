# VoxaAI voice-product blueprint

## Product and demonstration

SOURCE DECLARED: this is a light voice-agent SaaS reference, explicitly suited to customer-facing conversations. The home presents agent roles, languages, CRM connections, use cases and commercial plans. It is not a meeting-notes reference. The most valuable product scene is the compact transcript preview under the hero. Root browser inspection shows a waveform in that scene, while playback and agent execution remain unverified.

OPTIONAL RECOMMENDATION: use an appointment-booking product as the adaptation. Supply three short sample conversations for support, sales qualification and employee scheduling. Each sample should show the visitor's question, the agent's answer and a plain-language outcome. Keep sample outcomes visibly illustrative until a real backend exists. Allow audio only after a deliberate play action; synchronize the selected sample with its transcript and provide a stop control.

## Content architecture

SOURCE DECLARED: preserve navigation → hero with role preview and trust strip → feature rows → use cases → pricing → reviews → FAQ → closing CTA → footer. Feature storytelling is concrete: language configuration, connected business tools and conversation pace. Commercial content compares three tiers and addresses usage minutes. Navigation links to pricing and features are home anchors. No qualifying separate pricing, feature, demo or documentation route is declared; secondary-declarations.json records that limitation.

OPTIONAL RECOMMENDATION: write the hero around the specific call a buyer needs handled. Describe setup requirements before promising speed. Explain language selection with an example locale, and identify which CRM actions require review. Use cases should state caller intent, successful resolution and escalation condition. Publish testimonials and performance figures only with approved substantiation. Keep product navigation destinations useful even if the adaptation remains a single page.

## States and delivery

SOURCE DECLARED: role choices, billing switch, FAQ structures and mobile navigation variants exist, but a complete interaction contract is not established. The root's Yearly click left the displayed Growth figure unchanged; treat billing recalculation as unverified.

OPTIONAL RECOMMENDATION: define selected/idle/loading/playing/stopped/unavailable audio states; expanded/collapsed FAQ states; and monthly/yearly pricing states. When audio fails, retain the transcript and explain availability beside the control. For demo requests, define validation, sending, success and retry states without replacing the whole page. Use a readable focus treatment and preserve scroll position after tab changes. Keep mobile cards in source reading order, with large tap targets and decorative scenes clipped away from text.
