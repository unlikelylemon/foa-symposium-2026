# FOA Symposium 2026 — Website Design Prompt

A one-shot brief for building the official website of the **Family Office Alliance Symposium 2026**. Theme: *From Resilience to Brilliance*. Born from Pressure / Built to Last / Shine Bright. June 10–11, 2026, Ahlström Estate, Finland.

This brief is self-contained. Build the full site from this document plus the assets provided (speaker portraits, estate photography, FOA crest).

---

## 1. Project Definition

This is the official digital surface for the FOA Symposium 2026. Its primary job is to serve as an **information hub for already-invited attendees** (programme, speakers, venues, theme) delivered with the feel of a **prestige showcase** (the event as a brand object, designed to be experienced not just read).

Audience: family office principals, founders, multi-generational stewards, sophisticated cultural and scientific leaders. The same people who would expect a Hermès catalogue, a Phaidon monograph, or a private bank annual report.

The site is fully public. No authentication. No gating. The CTA throughout is **"Request an Invitation"** for prospective future attendees, with `connect@familyofficealliance.org` as the inquiry destination.

Build it as a single long-scroll editorial surface with in-page navigation, plus individual speaker detail routes. Treat the whole site as one continuous hardcover book that the visitor scrolls through.

---

## 2. Design System

The design system is locked. Specs here are the law.

### 2.1 Typography

- **Display family**: Saol Display (primary). Acceptable fallbacks: Editorial New, GT Alpina, Canela. Use Light Roman for titles. Use Light Italic for taglines and pull quotes.
- **Supporting family**: Söhne (primary). Acceptable fallbacks: GT America, Inter, Neue Haas Grotesk Text. Weights in rotation: Buch, Kräftig, Halbfett (sparingly).
- **Tracked small caps** for every utility text moment: dates, labels, navigation, footers, captions, panel numbers, section markers. Letter-spacing **0.18em minimum**.
- **Optical kerning** on every display headline. "Symposium," "Resilience," and "Brilliance" all need attention.
- **Oldstyle figures** in body text. **Lining figures** in labels and dates.
- **En dashes** for date and number ranges (10–11, not 10-11). **True typographic quotes** always (" " ' ').

Type roles by size:
- Display Title: 64–96pt desktop, 40–56pt mobile, Saol Display Light Roman
- Display Tagline (italic): 32–48pt desktop, 22–32pt mobile, Saol Display Light Italic
- Subhead: 22pt desktop, 18pt mobile, Söhne Kräftig
- Body: 16pt desktop, 15pt mobile, Söhne Buch, line-height 1.6
- Tracked small caps labels: 11pt desktop, 10pt mobile, Söhne Buch ALL CAPS letter-spacing 0.18em

### 2.2 Color Palette

| Role | Hex | Use |
|---|---|---|
| **Ink** (warm near-black) | `#0B0907` | Primary surface |
| **Brass** (antique gold) | `#B8935A` | Crest, hairline rules, type accent |
| **Bone** (warm cream) | `#F2EBD9` | Alternate surface, type on dark |
| **Ember** (deep oxblood) | `#5C1F1A` | Accent only, sparing |

**Brass is matte antique gold, not bright yellow.** No saturated gold anywhere. When Brass appears as type or rule lines, it can carry a very subtle vertical gradient (10% lightness shift top to bottom) to simulate foil catching light. No animation. No sparkle. No shine effects.

**Ink is warm-brown black, not pure #000.** The whole site should feel printed, not screen-default.

Surfaces alternate Ink and Bone down the page like a book alternating between black plate pages and cream text pages. The rhythm of alternation is part of the experience.

### 2.3 The Crest

The twin-lion shield is the system's most important asset.

- **Hero scale** (240–360px): cover, section dividers
- **Mark scale** (60–96px on desktop, 48–64px on mobile): navigation, supporting spreads
- **Inline scale** (24–36px): section break ornament inside long-form text

Always Brass on Ink with a subtle vertical foil gradient. Never recolor. Never on busy photography. Never stretched. Never animated beyond a single fade-in on initial load.

### 2.4 Craft Details (non-negotiable)

These details signal senior-designer work. Without them the system collapses to generic.

- **Hairline Brass rules at 0.5pt (1px)** divide sections, sit beneath captions, lift photography. Never thicker.
- **Paper grain texture** on solid surfaces. 3–5% noise overlay, low frequency. CSS `background-image` SVG noise pattern is acceptable.
- **Light vignette** on full-bleed photography (10–15% darkening at edges).
- **A single 1px Brass rule beneath photography** (not around) suggests the image sits on a physical surface.
- **Tracked small caps** on every label, caption, date, footer.
- **Hanging punctuation** in pull quotes.
- **Section break ornament**: tiny inline crest centered between long paragraphs, used sparingly.
- **Footer line** persisting at the bottom of every section: `FOA SYMPOSIUM 2026 · AHLSTRÖM ESTATE · JUNE 10–11`. Söhne tracked small caps 9pt. Brass on Ink, Ink on Bone.

---

## 3. Site Architecture

Single long-scroll page with in-page sticky navigation. Plus individual routes for speaker detail views (`/speakers/[slug]`). No other separate pages.

In order of appearance:

1. **Hero / Cover**
2. **The Theme** (three-act narrative)
3. **Programme** (full schedule, both days)
4. **Speakers** (all 30, with detail views)
5. **Venues** (Ahlström Estate + Villa Stenberg)
6. **Inquiries / Footer**

Navigation (sticky top bar after hero):
- Crest at Mark scale, left
- Links right in Söhne tracked small caps 11pt: `PROGRAMME · SPEAKERS · VENUES · INQUIRE`
- On scroll, navigation reduces 25% and sits on a translucent Ink overlay (90% opacity, 4% backdrop blur)
- Mobile: hamburger opening full-screen Ink overlay with large tracked-small-caps menu items, generous touch targets

---

## 4. Section-by-Section Specifications

### 4.1 Hero / Cover

**Layout:**
Full-viewport cinematic photograph of Ahlström Estate at golden hour (provided asset). Slow vertical parallax on scroll, 10% drift maximum. Disable parallax on mobile.

Crest at Mark scale, top-left, 32px margin from edges. Subtle foil gradient.

Title block, bottom-left, 64px margin from edges:
- Eyebrow label in tracked small caps, Brass: `JUNE 10–11, 2026 · AHLSTRÖM ESTATE, FINLAND`
- 16mm Brass hairline rule beneath
- Title: **FOA Symposium 2026** in Saol Display Light Roman, Bone, responsive sizing topping out around 96pt desktop / 48pt mobile
- Tagline beneath: *From Resilience to Brilliance* in Saol Display Italic 36pt desktop / 22pt mobile, Brass
- A 24mm Brass hairline rule beneath the tagline
- Below the rule, a single discreet CTA in tracked small caps Brass with a hairline underline that lengthens 30% on hover: `REQUEST AN INVITATION`

**Footer line** at bottom edge of hero.

**Scroll indicator**: a thin Brass vertical hairline, 32px tall, centered at the bottom, with subtle pulse animation (2s ease-in-out, 30% opacity oscillation). Disappears once user scrolls.

### 4.2 The Theme

This section introduces the three-act narrative. It is the philosophical anchor of the site.

**Intro block** (Bone surface, paper grain):
- Eyebrow: `THE THEME` in tracked small caps Ink
- Headline: *From Resilience to Brilliance* in Saol Display Light Italic, Ink, 56pt desktop / 32pt mobile
- 32mm Brass hairline rule
- A single paragraph of body in Söhne Buch 16pt, Ink, max-width 580px: "Born from pressure. Built to last. Shine bright like a diamond. Three movements across two days. Each act invites a different posture: confronting the world as it is, building what endures, stepping into what comes next."

**Three act panels** (full-viewport each, alternating Ink and Bone surfaces, each anchored by a conceptual image generated to spec, see Section 5):

**Act I — Born from Pressure** (Ink surface)
- Left half: conceptual image (see 5.2.1 for exact image generation prompt)
- Right half: 
  - Act label: `ACT I` in tracked small caps Brass
  - Title: **Born from Pressure** in Saol Display Light Roman, Bone, 56pt desktop / 32pt mobile
  - 24mm Brass rule
  - Tagline: *Understanding the world as it is* in Saol Display Italic, Bone, 22pt
  - Body paragraph in Söhne Buch, Bone, 15pt: "Resilience begins with seeing clearly. The first act confronts the forces shaping our moment: geopolitical instability, technological acceleration, biological frontiers, the systems under strain. No simplification."

**Act II — Built to Last** (Bone surface)
- Right half: conceptual image (see 5.2.2)
- Left half: 
  - Act label: `ACT II` in tracked small caps Ink
  - Title: **Built to Last** in Saol Display Light Roman, Ink, 56pt desktop / 32pt mobile
  - 24mm Brass rule
  - Tagline: *Deploying solutions with conviction* in Saol Display Italic, Ink, 22pt
  - Body paragraph in Söhne Buch, Ink, 15pt: "Solutions already exist. They are being designed, funded, and scaled by people in the room. The second act surfaces the structures of impact, governance, and culture that hold across generations."

**Act III — Shine Bright** (Ink surface)
- Left half: conceptual image (see 5.2.3)
- Right half: 
  - Act label: `ACT III` in tracked small caps Brass
  - Title: **Shine Bright** in Saol Display Light Roman, Bone, 56pt desktop / 32pt mobile
  - 24mm Brass rule
  - Tagline: *Leadership, responsibility, and legacy* in Saol Display Italic, Bone, 22pt
  - Body paragraph in Söhne Buch, Bone, 15pt: "Insight without responsibility is decoration. The third act returns the conversation to the individual: what do you build that lasts."

On mobile, the two-column act panels collapse to single column with the conceptual image above the text.

### 4.3 Programme

**Intro block** (Bone surface):
- Eyebrow: `THE PROGRAMME` in tracked small caps Ink
- Headline: **Two days, three acts** in Saol Display Light Roman, Ink, 56pt desktop / 32pt mobile
- 32mm Brass rule
- Brief body: "A curated programme designed as a single cohesive arc."

**Day 1: June 10 — Arrival & Welcome Dinner** (Ink surface, paper grain):

Day header: `DAY ONE · TUESDAY, JUNE 10` in tracked small caps Brass, with title beneath: **Arrival & Welcome Dinner** in Saol Display Light Roman, Bone, 42pt.

Schedule rows, each separated by a 0.5px Brass hairline rule, generous vertical leading (32px row height minimum):

| Time | Event |
|---|---|
| 14:00 | Shuttle arrival |
| 14:00–15:00 | Check-in |
| 15:00–17:00 | Guided Estate Tour |
| 17:00–19:00 | Free time |
| 19:00 | Welcome Dinner |

Beneath the Welcome Dinner row, indented and in smaller type, list speakers:
- *Claude Finckenberg & Philip von Wulffen*
- *Peter Ahlström*
- *Kai-Pierre Thieß*

Names in Saol Display Italic 14pt, Bone.

**Day 2: June 11 — Symposium Day** (Bone surface):

Day header: `DAY TWO · WEDNESDAY, JUNE 11` in tracked small caps Ink, with title: **Symposium Day** in Saol Display Light Roman, Ink, 42pt.

Schedule rows organized under three act sub-headings. Each act sub-heading is a small tracked-small-caps label in Brass with a brief italic tagline:

`ACT I — BORN FROM PRESSURE` *Understanding the world as it is*

| Time | Panel |
|---|---|
| 09:45 | Opening Address — Philip von Wulffen |
| 10:00–10:30 | **Heritage, Legacy & Long-Term Thinking** — Maria Ahlström-Bondestam, Johannes Gullichsen · *Moderator: Philip von Wulffen* |
| 10:30–11:00 | **Defending Stability: Security in an Unstable World** — Dr. Philipp Kerth, Harry Mead, Sebastian Klaus · *Moderator: Laurent-Frédéric Lohmann* |
| 11:00–11:30 | **AI at the Edge: Intelligence, Power & Responsibility** — Carles Reina, Yannick Sonnenberg, Rolf Schumann · *Moderator: Chris Bruce* |
| 11:30–12:00 | **Rewriting Human Resilience: Health & Longevity** — Joe Betts-LaCroix, Yuta Lee, David Berry · *Moderator: Xavier Sarras* |
| 12:00–13:00 | Lunch Break |

`ACT II — BUILT TO LAST` *Deploying solutions with conviction*

| Time | Panel |
|---|---|
| 13:00–13:30 | **Capital for Good: The Architecture of Impact** — Alexandre Mars, Thérèse von Blixen-Finecke · *Moderator: Laurent-Frédéric Lohmann* |
| 13:30–14:00 | **Systems of Resilience: Investing in the Future** — Chris Rynning, Stacey Lawson · *Moderator: Derek Hu* |
| 14:00–14:30 | **Culture as Infrastructure: Storytelling & Influence** — Joe Russo · *Moderator: Chris Brearton* |
| 14:30–15:00 | Coffee Break |

`ACT III — SHINE BRIGHT` *Leadership, responsibility, and legacy*

| Time | Panel |
|---|---|
| 15:00–15:30 | **The Human Edge: Psychology of Leadership Under Pressure** — Gerburg Hothum, Jennifer Wines · *Moderator: Laurent-Frédéric Lohmann* |
| 15:30–16:00 | **NextGen & Global Perspectives (ASEAN Panel)** — Dr. Serenella Tolomeo, Harri Hursti, Satvinder Singh · *Moderator: Philip Wu* |
| 16:00–16:30 | **Closing: From Insight to Action** — Laurent-Frédéric Lohmann |
| 19:00 | Gala Dinner |

**Layout:**
- Time column left, fixed width (~120px desktop, 80px mobile)
- Panel title and speakers right
- Panel titles in Saol Display Light Roman 18pt
- Speakers in Söhne Buch 14pt
- Moderators in Saol Display Italic 13pt
- Tap/click any row to slide open an expanded view with full panel description (use the curated programme descriptions provided in source material)

On mobile, the entire programme becomes a collapsible accordion. First item (Day 1 or current day's first session) expanded by default. Smooth 300ms ease-out height transition. Touch targets at least 48px.

### 4.4 Speakers

**Intro block** (Ink surface, paper grain):
- Eyebrow: `THE SPEAKERS` in tracked small caps Brass
- Headline: **Thirty voices, one conversation** in Saol Display Light Roman, Bone, 56pt desktop / 32pt mobile
- 32mm Brass rule
- Brief body in Söhne Buch, Bone, 15pt, max-width 580px: "A deliberately small gathering of leaders across philanthropy, science, technology, defence, culture, and capital. Each invited for a specific reason. Each connected to the others by the questions of the moment."

**Speaker index** (Ink surface, no separator from intro block):

A typographic index, not a card grid. Each speaker is a horizontal row:
- Squared portrait (4:5 crop) on the left, ~120px wide on desktop / ~80px mobile, with 0.5px Brass hairline frame, warm-toned B&W treatment
- Name in Saol Display Light Roman 28pt desktop / 20pt mobile, Bone
- Role/affiliation in Söhne Buch 14pt Bone
- A small Brass arrow icon on the right, indicating tap/click expansion
- Hairline Brass rule beneath each row (0.5px)
- Generous vertical padding (24px desktop, 16px mobile)
- Tap/click opens the full speaker detail view

**Full speaker list** (use exactly these names and short roles; full bios are provided in source material as Speaker Profile.docx):

1. **Gerburg Hothum** — Behavioral Expert & Communication Specialist
2. **Jennifer Wines** — Founder, Invisible Wealth® · Bestselling Author
3. **Maria Bondestam-Ahlström** — Co-Founder & Honorary Chair, Eva Ahlström Foundation
4. **Alexandre Mars** — Founder & CEO, EPIC Foundation · Mission M · blisce/
5. **Joe Betts-LaCroix** — CEO, Retro Biosciences
6. **Sebastian Klaus** — Founder & CEO, ATMOS Space Cargo
7. **Timo Ketonen** — CEO, Entrepreneur & Impact Investor · Blue Economy
8. **Thérèse von Blixen-Finecke** — Co-Founder, Catalyst Co-Labs · Board, IRC Sweden
9. **Joe Russo** — Co-Founder, AGBO · Film Director (Russo Brothers)
10. **Johannes Gullichsen** — Board Member, A. Ahlström Oy · Family Enterprise Governance
11. **Harry Mead** — Founder & CEO, Augur Initiative · Security Expert
12. **André Noël Chaker** — Founder, MySpeaker · Keynote Speaker · Author
13. **Laurent-Frédéric Lohmann** *(Master of Ceremony)* — Chief of Staff & Investor, 4P Capital
14. **Kai-Pierre Thieß** — Managing Director, Juwelier Hilscher Munich · Cultural Patron
15. **Chris Brearton** — Partner, AGBO · Former Amazon MGM Studios Executive
16. **David Berry** — Managing Partner, Averin Capital · Scientist & Entrepreneur
17. **Dr. Philipp Kerth** — CEO & Co-Founder, Hypersonica · Defence Deep Tech
18. **Yuta Lee** — Founder & CEO, Accelerated Biosciences · Regenerative Medicine
19. **Stacey Lawson** — Co-Founder, Positive AI Labs · AI Governance Advocate
20. **Dr. Serenella Tolomeo** — Senior Scientist, A*STAR Singapore · Neuroscience
21. **Harri Hursti** — Cybersecurity Expert · Election Security Pioneer
22. **Satvinder Singh** — Deputy Secretary-General, ASEAN Economic Community
23. **Rolf Schumann** — Co-CEO, Schwarz Digits · CDO, Schwarz Group
24. **Yannick Sonnenberg** — General Partner, Emergence Ventures
25. **Carles Reina** — Go-To-Market Leader, ElevenLabs · AI Growth
26. **Chris Rynning** — Managing Partner, AMYP Ventures · Founder, Humanitech.AI
27. **Xavier Sarras** — Founding Partner, 4P Capital · Climate Tech Investor
28. **Chris Bruce** — Chair, Cambridge Tech Week · Telecom & Connectivity Expert
29. **Derek Hu** — Founder, TFA International · Partner, SUM Ventures
30. **Philip Wu** — Co-Founder & Secretariat, Family Office Alliance · CEO, Grid Synergy

Note: Laurent-Frédéric Lohmann carries an MC indicator (a small Brass star or asterisk next to his name) in the index. Maria Ahlström-Bondestam and Johannes Gullichsen appear on June 11 only.

**Speaker Detail Route** (`/speakers/[slug]`):

When a visitor taps a speaker, they go to a dedicated route (or a full-screen overlay if SPA architecture preferred). The detail view:

- Hero band at top: full-width Ink surface with the squared portrait centered, ~280px tall, with the speaker's name and role beneath in Saol Display Light Roman and Söhne Buch respectively
- A 32mm Brass hairline rule
- Below: full bio in Söhne Buch 16pt, Bone, max-width 640px (use bios from Speaker Profile.docx)
- A pull quote (single sentence from their bio that captures their thesis) in Saol Display Italic 24pt, Brass, hanging punctuation, mid-page
- Below the bio: a section titled `APPEARING IN` in tracked small caps Brass, listing the panel(s) they're on with a hairline Brass underline, clickable back to the programme
- LinkedIn link (where provided in source) as a single tracked-small-caps line at the bottom: `LINKEDIN ↗`
- Bottom of page: a row of three "Related Speakers" (their panel mates), each as a small squared portrait with name, clickable
- Footer line

Speaker detail pages are mobile-first single column with the same component pattern, just scaled.

### 4.5 Venues

**Intro block** (Bone surface):
- Eyebrow: `THE VENUES` in tracked small caps Ink
- Headline: **Two estates, one weekend** in Saol Display Light Roman, Ink, 56pt desktop / 32pt mobile
- 32mm Brass rule

**Ahlström Estate** (Ink surface with paper grain):
- Eyebrow: `JUNE 10–11 · MAIN SYMPOSIUM` in tracked small caps Brass
- Headline: **Ahlström Estate** in Saol Display Light Roman, Bone, 42pt
- Location: `NOORMARKKU, FINLAND` in tracked small caps Brass
- 24mm Brass rule
- Two-column layout (single column on mobile):
  - Left: large photograph of the estate (provided asset), full bleed within the column, 0.5px Brass hairline frame, 1px Brass rule beneath
  - Right: body description in Söhne Buch 15pt, Bone — write copy treating the estate as a heritage object: industrial-family legacy dating to 1851, architectural history, the role of the site for the symposium. Two paragraphs maximum.
- A row of three smaller supporting images beneath (provided), each with a caption in tracked small caps

**Villa Stenberg** (Bone surface):
- Eyebrow: `JUNE 9 · PRE-MIDSUMMER PARTY` in tracked small caps Ink
- Headline: **Villa Stenberg** in Saol Display Light Roman, Ink, 42pt
- Location: `LOHJA, FINLAND` in tracked small caps Ink
- 24mm Brass rule
- Two-column layout (single column on mobile):
  - Left: body description in Söhne Buch 15pt, Ink — write copy treating Villa Stenberg as the soft arrival: Nordic Midsummer traditions, garden and sauna, the warming-up moment of the gathering
  - Right: large photograph (provided), 0.5px Brass hairline frame, 1px Brass rule beneath
- A row of three smaller supporting images beneath

**Map element** at the end of the section (optional):
A stylized map showing both venues in Finland, drawn in Brass on Ink. Not Google Maps. A custom-feeling cartographic illustration generated via AI to spec (see 5.3 for prompt). Two pin markers, one for each venue, each with a tracked small caps label.

### 4.6 Inquiries / Footer

**Inquiries block** (Ink surface, paper grain, full viewport):

Centered composition (one of only two centered moments in the entire site, the other being the hero crest):

- Crest at Hero scale, foiled
- Below: `FOR INQUIRIES` in tracked small caps Brass
- 32mm Brass rule
- Below the rule: **Request an Invitation** in Saol Display Light Roman, Bone, 56pt
- Below: italic line in Saol Display Italic, Brass, 22pt: *A curated gathering. Limited capacity. Application reviewed personally.*
- Below: a single button-styled link (not a real `<button>`, an `<a>` styled minimally): `connect@familyofficealliance.org` in Söhne Kräftig 16pt, Brass, with a Brass hairline beneath
- Below the button: a small line in tracked small caps Brass: `REPLIES WITHIN 48 HOURS`

**Footer band** (Ink surface, narrow horizontal band ~120px tall):
- Crest at Mark scale, left
- Centered: `FOA SYMPOSIUM 2026 · AHLSTRÖM ESTATE · JUNE 10–11`
- Right: a minimal column of links in tracked small caps Söhne Buch 9pt Brass: `PROGRAMME · SPEAKERS · VENUES · INQUIRE · ↑ TOP`
- Bottom line: copyright notice in tracked small caps Söhne Buch 8pt Brass, dimmed: `© FAMILY OFFICE ALLIANCE · ALL RIGHTS RESERVED`

---

## 5. AI Image Generation Directives

Use built-in image generation to create all imagery NOT provided as a source asset (speaker portraits and estate photography are real assets, use as-is). All generated imagery must follow these rules:

**Universal rules for all AI generation:**
- No human faces, no human figures, no recognizable people
- No recognizable buildings or architecture (estate imagery is provided real)
- No tech clichés (data swirls, neural networks, glowing UI, holograms, digital sparkles)
- No literal symbolism (lightbulbs, rockets, chess pieces, handshakes, diamonds-as-clipart)
- No bright/saturated gold — antique Brass `#B8935A` only
- No neon, no electric blue, no high-saturation accents
- All imagery must read as photographic, even when abstract. Not illustration. Not 3D render. Not vector art.
- Cinematic grading: warm shadows, antique gold highlights, slight mid-tone desaturation
- Film grain 2–4% on every generated image
- Output at 2x resolution for retina displays, serve appropriate sizes via srcset

### 5.1 Atmospheric Textures (visual rhythm throughout the site)

Use these between sections as subtle transitional bands (~80–120px tall), as section background fills with a darkening overlay, and as decorative atmosphere within hero zones of subsections. Generate at least **6 unique atmospheric images** for rotation:

**Prompt 5.1.1 — Paper grain at extreme close-up:**
> Macro photograph of matte black textured cover stock paper, extreme close-up showing the natural fiber grain and slight cotton texture, raking warm directional light from upper-left catching the surface unevenness, deep blacks `#0B0907`, no other elements, no text, photographic realism, film grain, museum catalogue aesthetic.

**Prompt 5.1.2 — Gold foil edge catching light:**
> Macro photograph of an antique brass gold foil edge applied to deep black paper, extreme close-up at an angle, single directional warm light catching the foil's micro-texture creating subtle highlights and shadows, foil color is muted antique gold `#B8935A` not bright yellow, deep black surrounding, photographic realism, slight film grain, fine-press book aesthetic.

**Prompt 5.1.3 — Light and shadow architectural study:**
> Abstract photographic study of warm golden window light falling across a dark interior surface at a steep angle, no architecture visible, only the geometry of light and shadow, mood of late afternoon stillness, deep warm shadows, antique gold light, no people, no objects, cinematic Roger Deakins quality, slight film grain.

**Prompt 5.1.4 — Weathered stone surface:**
> Macro photograph of ancient weathered limestone or marble surface, extreme close-up texture, warm directional light catching the geological wear, color palette deep warm browns and antique gold, hint of mineral sparkle, no recognizable subject, photographic realism, museum textile catalogue aesthetic, slight film grain.

**Prompt 5.1.5 — Nordic summer light through trees:**
> Abstract photograph of late evening Nordic summer light filtering through dense forest, only the light geometry and blurred shadow forms visible, no recognizable trees, warm golden light against deep green-black darkness, painterly bokeh, mood of midsummer stillness, photographic realism, slight film grain.

**Prompt 5.1.6 — Wax seal close-up:**
> Macro photograph of a deep oxblood-red wax seal pressed into matte black paper, extreme close-up showing the wax texture and slight imperfections, single warm directional light from upper-left, the seal impression suggests a heraldic crest but not specifically readable, deep ember-red color `#5C1F1A`, no text visible, photographic realism, fine-press correspondence aesthetic.

These atmospheric images appear:
- As 1px-tall transitional bands between major sections (looping horizontally if needed)
- As darkened (~50% opacity) backgrounds behind intro blocks of subsections
- As decorative blocks within long sections to add visual rhythm
- Never as hero imagery, never larger than ~25% of viewport height

### 5.2 Conceptual Imagery for the Three Acts

Three signature images anchor the three-act narrative in the Theme section. Each is the visual conceptual representation of that act. Generate at higher resolution and care than the atmospheric work. These are the visual punctuation marks of the site.

**Prompt 5.2.1 — Act I: Born from Pressure**
> Photographic abstract conceptual image evoking geological time and compression. Imagine deep rock strata layered under immense pressure, captured in extreme close-up macro photography, warm golden directional light raking across the strata revealing texture and tension, deep warm blacks `#0B0907` with antique brass highlights `#B8935A`, no recognizable forms, no human elements, mood of latent strength held under weight, cinematic Roger Deakins / Christopher Doyle quality, photographic realism, slight film grain, fine art photography aesthetic. NOT illustration, NOT 3D render, NOT abstract digital art.

**Prompt 5.2.2 — Act II: Built to Last**
> Photographic abstract conceptual image evoking architectural permanence. Imagine a single weathered classical stone column detail or ancient masonry corner caught in late afternoon golden light, extreme angle so the structural geometry abstracts into pure form, the eye reads structure and time but no specific building, warm Brass `#B8935A` light against deep Ink `#0B0907` shadows, hints of warm Bone `#F2EBD9` mid-tones, mood of considered endurance, photographic realism, museum architectural photography aesthetic, slight film grain. NOT illustration, NOT 3D render, NOT vector art.

**Prompt 5.2.3 — Act III: Shine Bright**
> Photographic abstract conceptual image evoking brilliance emerging from darkness. Imagine the interior facets of a precious stone catching directional warm light, captured in extreme macro photography so the faceted geometry abstracts into pure prismatic refraction, deep Ink `#0B0907` field with antique Brass `#B8935A` light playing across the facets, hints of warm Bone `#F2EBD9` glow, mood of refined clarity, the moment when pressure resolves into brilliance, cinematic fine art photography quality, photographic realism, slight film grain. NOT illustration, NOT 3D render, NOT computer graphics.

These three images are full-bleed within their respective Act panel (50% of the viewport on desktop, full width on mobile). They should feel like museum-grade photographic studies, not stock or template imagery.

### 5.3 Custom Map (optional, for Venues section)

**Prompt 5.3.1 — Stylized cartographic illustration of southern Finland showing two venues:**
> Hand-drawn stylized cartographic illustration in antique brass `#B8935A` line work on a deep Ink `#0B0907` background, showing a simplified outline of southern Finland with the coastline, the Gulf of Finland, and Bay of Bothnia, with two small marker points labeled (one near Lohja in the south, one near Pori on the western coast), aesthetic inspired by 19th-century engraved travel maps but with modern minimal restraint, hairline antique gold lines only, no color fills, no compass rose, no decorative ornament, museum cartography aesthetic, vector-feeling but with subtle hand-drawn warmth.

If implementation proves difficult, fall back to a SVG hand-drawn rendering of the same.

### 5.4 What NOT to Generate

- No portraits of any kind (speaker photos are real)
- No architectural renderings of the estates (real photography provided)
- No "AI-feel" images: glowing particle effects, futuristic networks, abstract data swirls, light beams, neural network visuals
- No business clichés: handshakes, lightbulbs, gears, rockets, graphs, charts
- No people, no faces, no figures, no body parts
- No bright saturated gold or yellow tones
- No animations on the conceptual or atmospheric imagery — static only
- No watermarks, no signatures, no captions baked into the image

---

## 6. Mobile Responsiveness Requirements

Mobile is the primary experience. Family office attendees check from phones in transit. Mobile must be excellent, not an afterthought.

### 6.1 Breakpoints

- **Mobile**: 375px (iPhone SE baseline, supports up to ~430px)
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large desktop**: 1440px
- Test at each breakpoint for layout integrity

Build mobile-first. Desktop is an expansion of mobile, not a constraint applied to it.

### 6.2 Mobile-Specific Behaviors

- **Single column** for all section content
- **Touch targets** minimum 44x44px (per Apple HIG), prefer 48x48px
- **No hover-dependent interactions** — tap reveals replace hover effects
- **Disable parallax** on mobile (performance + UX)
- **Hamburger nav** opens full-screen Ink overlay with large tracked-small-caps menu items, each at least 56px tall, generous spacing
- **Programme accordion**: tap row to expand panel details inline, smooth 300ms ease-out
- **Speaker detail**: tap card opens dedicated route or full-screen slide-up overlay
- **Hero CTA**: at least 56px tall, with adequate finger area
- **Footer line wrapping**: if it doesn't fit on one mobile line, wrap to two with the dot separator dropped at the wrap point
- **Crest scaling**: 48px on mobile vs 64px on desktop in navigation, 240px on mobile vs 360px on desktop at hero scale
- **Type scaling**: aggressive scale-down on mobile, but maintain hierarchy. Display titles from 96pt → 48pt. Body from 16pt → 15pt (small reduction only, readability is paramount).

### 6.3 Performance Targets (mobile, on 4G)

- **Lighthouse Performance**: 90+ minimum
- **Lighthouse Accessibility**: 95+ minimum
- **Lighthouse Best Practices**: 90+ minimum
- **Lighthouse SEO**: 90+ minimum
- **Largest Contentful Paint**: under 2.5s
- **Time to Interactive**: under 3.5s
- **Total page weight above the fold**: under 3MB

### 6.4 Image Optimization

- All images served as **WebP with JPG fallback** via `<picture>` element
- All images use **srcset** with at least 3 widths for responsive serving
- All images **lazy-load** below the fold (`loading="lazy"`)
- Hero photography preloaded with `<link rel="preload">`
- Atmospheric textures served as **CSS background-image** when used as bands, separate `<img>` only when content-meaningful
- Maximum dimensions: 2400px wide for hero, 1600px for content, 800px for portraits and supporting imagery

### 6.5 Font Loading

- **Font subsetting**: Latin Extended subset only (must include Finnish/Nordic diacritics for "Ahlström," "Bondestam," "Hothum," "Thérèse," etc.)
- **font-display: swap** to avoid FOIT
- **Preload** the two primary fonts (Saol Display Light and Söhne Buch)
- Fallback stack defined in CSS for graceful degradation

---

## 7. Motion & Interaction

Restraint is the keynote. Motion exists to support reading, not to perform.

- **Scroll-triggered fade-ins** for sections: 200–400ms ease-out, opacity 0 → 1 with subtle 12px upward translate. Trigger when section enters viewport, once only.
- **Hero parallax**: 10% vertical drift maximum, desktop only.
- **Hover states** (desktop): hairline Brass underline appears under text links, animates from 0 to full width over 200ms ease-out. Hairline persists; underline retracts on un-hover.
- **Speaker index row hover** (desktop): subtle 8% lightening of the Ink surface, plus the small Brass arrow shifts 4px to the right. 150ms ease-out.
- **Programme accordion open/close**: 300ms ease-out height transition. Smooth, no bounce.
- **Speaker detail open**: fade in over 250ms with subtle 16px upward translate.
- **Loading states**: solid Ink placeholder for images. No skeleton screens, no spinners. Photography fades in when loaded (300ms ease-out).
- **CTA button hover** (desktop): the Brass hairline beneath the email link extends 30% to the right and back over 400ms ease-in-out, infinite loop. Halts on hover.

**Forbidden interactions:**
- No custom cursor
- No scroll-jacking (no forced scroll positions)
- No "wow" entrance animations on page load
- No carousels (anywhere)
- No popup modals (newsletter, cookie banners can be small bottom-edge bars)
- No animated backgrounds (no looping video, no animated gradients, no particle effects)
- No chat widgets

---

## 8. Technical Requirements

- **Framework**: Astro, Next.js (static export), or Hugo preferred for performance. React components where interactivity needed (accordion, speaker detail, mobile nav).
- **Semantic HTML** throughout. Proper heading hierarchy. Landmark elements. `<main>`, `<nav>`, `<article>`, `<section>` used correctly.
- **Accessibility**: WCAG AA minimum. Body text contrast must pass (Bone on Ink and Ink on Bone both pass). Brass on Ink passes for type only at 18pt+; do not use Brass for body. Brass for hairlines, ornaments, and large display type only.
- **ARIA labels** on icon-only buttons (hamburger, close, speaker arrows).
- **Keyboard navigation**: full tab support, visible focus states (a 2px Brass outline on focus, never a default blue ring).
- **Meta tags**: Open Graph + Twitter Card with the hero estate photograph as the social preview. Title: "FOA Symposium 2026 — From Resilience to Brilliance." Description: "An invitation-only gathering of family office principals, founders, and global leaders. Ahlström Estate, Finland. June 10–11, 2026."
- **Favicon**: the FOA crest, rendered in Brass at 32x32 and 192x192 and as Apple touch icon at 180x180.
- **Analytics**: privacy-respecting only (Plausible, Fathom, or similar). No Google Analytics. No Facebook Pixel.
- **Hosting**: optimized for static delivery via CDN (Vercel, Netlify, Cloudflare Pages all acceptable).

---

## 9. What This Site Is NOT

Explicit anti-patterns. If the build drifts into any of these, redesign.

- **No circular portrait crops anywhere.** Squared 4:5 rectangles only.
- **No AI-generated abstract imagery** that reads as "tech" or "data" (swirls, networks, particles, holograms).
- **No stock photography** of business meetings, handshakes, city skylines.
- **No bright/saturated gold.** Antique Brass `#B8935A` only.
- **No drop shadows on type.** Ever.
- **No card grids with elevation/shadows.** The speaker section is a typographic index, not a card grid.
- **No carousels.**
- **No mega-menus.**
- **No popup modals** for newsletter signup or anything else.
- **No chat widgets.**
- **No social share buttons.**
- **No video backgrounds with autoplay sound.** No autoplay video at all, in fact.
- **No emojis** in any deliverable.
- **No icon libraries** (Font Awesome, Material Icons, Heroicons). Where iconography is unavoidable (hamburger, arrows), use hairline custom marks consistent with the typography.
- **No glassmorphism, mesh gradients, 3D perspectives, skeuomorphic effects.**
- **No "back to top" floating button.** Footer has a `↑ TOP` link.
- **No multiple display fonts.** Saol Display does all display work.
- **No centered-everything composition** except for the Inquiries block and the hero crest.
- **No SaaS-conference language.** No "transformative," no "journey," no "unlock," no "game-changing," no "revolutionary." If the copy needs editorial restraint, write it in a register closer to an obituary or a museum wall text than a tech keynote.
- **No visible templates.** No Gamma defaults, no Canva tells, no Webflow stock layouts. If a section feels familiar from another tool, redesign it.

---

## 10. Acceptance Criteria

Before delivering v1, verify:

- [ ] All 30 speakers correctly displayed with bios, portraits, and panel affiliations
- [ ] Full v3 programme (per Section 4.3) correctly displayed with all timing and moderators
- [ ] All AI-generated imagery follows the directives in Section 5 (no faces, no buildings, no tech swirl)
- [ ] Hero photograph uses the provided Ahlström Estate aerial at golden hour
- [ ] Site is responsive across all four breakpoints (375, 768, 1024, 1440)
- [ ] Mobile Lighthouse scores: Performance 90+, Accessibility 95+, Best Practices 90+, SEO 90+
- [ ] All Finnish/Nordic diacritics render correctly (Ahlström, Bondestam, Thérèse, Hothum, Thieß)
- [ ] Speaker detail routes work and are linkable individually
- [ ] CTA `connect@familyofficealliance.org` is clickable and opens default mail client
- [ ] Footer line persists across all sections
- [ ] No hover-dependent interactions break on touch devices
- [ ] All photography lazy-loads correctly
- [ ] WebP served with JPG fallback
- [ ] Keyboard navigation works fully, focus states visible
- [ ] No console errors, no accessibility violations in Axe DevTools
- [ ] Total page weight above the fold under 3MB on mobile

---

## 11. Copy Tone

For all copy written by the designer (section descriptions, button labels, microcopy):

- **Editorial register, not corporate.** Short declarative sentences. Present tense.
- **Title Case** only on display headlines. Sentence case for body and supporting text.
- **Tracked small caps** create formality. Use generously for utility text.
- **No event-tech clichés.** None of: transformative, journey, unlock, game-changing, revolutionary, cutting-edge, leverage, ecosystem (used loosely), disruptive, paradigm, synergy.
- **Em dashes acceptable** in body editorial copy. **En dashes** for date and number ranges.
- **Real typographic quotes always.** No straight quotes.
- The site should read like the program notes of a serious cultural institution. Restrained. Considered. Confident without effort.

---

## 12. Deliverables

A fully responsive, production-ready website matching the specifications above. Delivered as:

- The full codebase (HTML/CSS/JS, or framework files)
- A deployment-ready build
- An asset library of all generated atmospheric and conceptual images at 2x resolution
- A short README explaining the architecture, build commands, and how to update content (programme, speakers, copy)

If any specification in this document is genuinely impossible to execute (specific font unavailable, technical constraint), note it explicitly in the README with the fallback decision and rationale. Do not silently substitute.

---

*This brief is the law. Every spread, every section, every detail should look like it belongs to the same expertly produced book. If something on the screen would not feel at home in a Phaidon monograph, a private bank annual report, or a fine-press correspondence catalogue, redesign it.*
