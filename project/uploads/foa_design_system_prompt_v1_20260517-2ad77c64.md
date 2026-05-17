# FOA Symposium 2026 — Design System Prompt

A single design system spanning presentation deck, website, printed program, signage, invitations, and supporting collateral for the Family Office Alliance Symposium 2026. Theme: **From Resilience to Brilliance**. Born from Pressure / Built to Last / Shine Bright. Ahlström Estate, Finland. June 10–11, 2026.

---

## 1. The Guiding Concept

The entire system behaves like a single, expertly produced hardcover book. Every deliverable is a "spread" inside that book.

Two registers alternate throughout:

- **Cinematic spreads** — full-bleed photography of the estate, the Nordic summer landscape, ceremony moments, and speakers. Deeply shadow-graded. Warm gold catching highlights. Type set against the photograph or on a small calm zone within it.
- **Tactile spreads** — solid surfaces (matte black with visible paper grain, or warm bone) that feel like the book's actual cover stock. Crest appears as if foiled and debossed. Type feels engraved into the surface rather than placed on top.

The two registers share typography, color, crest treatment, grid logic, and craft details. They are the same book, photographed inside vs. felt outside.

The website is this book translated to scroll. Hero is the cover. Sections alternate cinematic and tactile. Scroll-triggered fade-ins and slow photographic parallax simulate page turns.

---

## 2. Typography

One display family. One supporting family. No exceptions.

**Display family (headlines, titles, taglines, large quotes):**
Saol Display — *primary recommendation.* Substitute Editorial New, GT Alpina, or Canela if Saol is unavailable. Use the italic cut for taglines and pull quotes ("*From Resilience to Brilliance*"). Use the roman cut for titles. Set Light or Regular weight for display sizes 48pt and up. Never bold. Never condensed. Optical sizing matters — use the actual display cut for large type, not the text cut scaled up.

**Supporting family (body, navigation, labels, captions, dates, utility):**
Söhne — *primary recommendation.* Substitute GT America or Neue Haas Grotesk Text. Three weights in rotation: Buch (book), Kräftig (medium), and Halbfett (semibold) for emphasis only.

**Type roles:**

- Display Title (32–96pt depending on surface): Saol Display Light Roman
- Display Tagline (italic, 24–48pt): Saol Display Light Italic
- Subhead (16–22pt): Söhne Kräftig
- Body (10–14pt depending on surface): Söhne Buch, set 1.45 line-height
- Tracked small caps (labels, dates, captions, footers, navigation): Söhne Buch ALL CAPS, letter-spacing 0.18em, never larger than 11pt for body labels, never smaller than 8pt
- Quoted material: Saol Display Italic, hanging punctuation, large

**Numerals:** Oldstyle figures in body text. Lining figures in labels and dates. Use en dashes for date ranges (10–11, not 10-11). True typographic quotes (" " ' ') always.

**Optical kerning** on all display headlines. "Symposium" and "Resilience" both need attention.

---

## 3. Color Palette

Strict discipline. Four colors total.

| Role | Hex | Use |
|---|---|---|
| **Ink** (warm near-black) | `#0B0907` | Primary tactile surface. Body color on bone surfaces. |
| **Brass** (antique gold) | `#B8935A` | Crest. Hairline rules. Type accent on ink surfaces. Foil simulation. |
| **Bone** (warm cream) | `#F2EBD9` | Alternate surface for editorial relief. Type color on ink surfaces. |
| **Ember** (deep oxblood, sparing) | `#5C1F1A` | Accent only. Auction page, single emphasis moments, never structural. |

**Brass is matte and antique, not bright.** No yellow gold. No saturated gold. When Brass appears as type or rule lines, it can carry a very subtle vertical gradient (10% lightness shift top to bottom) to simulate foil catching light. Never use animated shine or sparkle effects.

**Ink is warm, not pure black.** It should read as printed black, slightly brownish in the shadow, never the flat #000000 of a default canvas.

Contrast: Bone on Ink and Ink on Bone are the two primary type pairings. Brass on Ink works for display and labels but should be sized large enough to read (24pt minimum for legibility). Brass on Bone is reserved for the crest and hairline rules only — too low contrast for type.

---

## 4. The Crest

The twin-lion shield is the single most important visual asset. Treat it accordingly.

**Three modes:**

- **Hero** — cover spreads, section dividers. 80–120mm in print, 240–360px on screen. Always Brass on Ink, with a subtle foil gradient. Centered or upper-third.
- **Mark** — supporting spreads. 20–32mm in print, 60–96px on screen. Top-left or bottom-right corner. Small, calm, witness presence.
- **Inline** — section break ornament inside long-form text. 8–12mm in print, 24–36px on screen. Centered on its own line between paragraphs. Used sparingly, once or twice per long page.

**Never:** recolor it. Place it on busy photography. Stretch it. Set it against a competing graphic element. Combine it with other icons. Make it animated beyond a subtle one-time fade-in on web.

When the crest sits on photography (rare), the photograph must have a calm dark zone behind it. If no such zone exists, add a soft radial darkening (15% maximum) to create one.

---

## 5. Photography Direction

The estate photography is the system's most powerful asset. Treat it like a Magnum or Phaidon photo book, not stock library content.

**Subject priorities:**
1. Ahlström Estate at golden hour, aerial and exterior
2. Villa Stenberg at midsummer light, garden and waterfront
3. Interior architectural details at warm lamplight
4. Nordic summer landscape, water and forest
5. Speakers and ceremony moments (when available)
6. Texture details (wood, stone, fabric, paper, candlelight)

**Grading:**
- Shadows deep but never crushed — detail retained
- Highlights warm, gold-leaning (3200–4000K)
- Mid-tones slightly desaturated, never punchy
- Subtle film grain (2–4%) on every photographic surface
- Light vignette (10–15%) on full-bleed shots, edges only

**Crops:**
- Hero: cinematic 21:9 or 16:9 letterbox
- Supporting: 4:5 portrait or 3:2 landscape, held within a 0.5pt Brass hairline frame
- Never: square crops, full circles, awkward portrait fragments

**Forbidden:**
- Stock photography of any kind
- AI-generated abstract imagery (DNA helixes, robots, neon cities, the 2025 mistakes)
- Oversharpened HDR look
- Heavy color filters or "Instagram" presets
- Faces or compositions that don't match the editorial register

---

## 6. Speaker Portraits

Not circles. The single most consequential break from 2025.

**Treatment:**
- Squared rectangle, 4:5 portrait crop
- 0.5pt Brass hairline frame
- Warm-toned black & white conversion (sepia-leaning, never cold blue B&W)
- Subtle vignette consistent with photography grading
- Caption beneath in two lines: name in Saol Display Light 16pt, role in Söhne tracked small caps 9pt
- A 12mm Brass hairline rule beneath the caption block

When portraits group on a panel slide, they sit on a baseline grid, equally sized, with even gutters. Never offset, never staggered, never angled.

If a usable portrait is missing for a speaker, leave a placeholder rectangle in Ink with their name in Saol Display Italic. Never substitute clipart or an avatar.

---

## 7. Grid & Layout

**Deck:** 16:9 frames. 8-column grid. 64px outer margin. 32px gutter.

**Web:** 12-column grid. 8% outer margin. 24px gutter. Single column on mobile with same margin ratios.

**Print (program, signage):** A4 portrait or A5 landscape depending on piece. 8-column grid. 18mm outer margin.

**Universal principles:**
- Asymmetric balance is the default. Centered-everything compositions are reserved for hero spreads and section dividers only.
- Strong horizontal or vertical axes anchor every composition. Rule of thirds is the floor.
- Generous negative space, especially in tactile mode. The system should feel quiet, not packed.
- Type sits in defined invisible "boxes" within the grid even when there is no visible frame. Nothing floats.

---

## 8. The Craft Details

These are the small choices that signal senior-designer work. Without them the system collapses into generic luxury.

- **Tracked small caps** for every utility text moment. Dates, captions, navigation, footers, panel numbers, page numbers. 0.18em letter-spacing minimum.
- **Hairline Brass rules at 0.5pt** divide sections, sit beneath captions, lift photography. Never thicker.
- **Paper grain texture** on solid surfaces. 3–5% noise overlay, low frequency, mimics matte cover stock.
- **Photo captions** in two parts: subject line in Saol Display Italic 10pt, location/date in Söhne tracked small caps 8pt, separated by a 6mm Brass rule.
- **Page numbers** in deck and program, lower outer corner only, Söhne oldstyle figures, Brass on Ink or Ink on Bone, never larger than 9pt.
- **Footer line** persisting across all materials: `FOA SYMPOSIUM 2026 · AHLSTRÖM ESTATE · JUNE 10–11`. Söhne tracked small caps 8pt. Brass on Ink, Ink on Bone. Always present, always unobtrusive.
- **Section break ornament** for long-form text: tiny inline crest, centered, with breathing room above and below.
- **Hanging punctuation** in pull quotes. Quotation marks sit in the margin, not the text block.
- **Optical kerning** on every display headline.
- **A single 1pt Brass rule beneath photography** (not around) suggests the image sits on a physical surface. Subtle. Easy to miss. The kind of detail that registers subliminally.
- **Drop caps** on opening paragraphs of long-form web sections. Saol Display Light, 4-line height, Brass.

These details are not optional decoration. They are the difference between a Phaidon monograph and a Canva template.

---

## 9. Component Specifications

### 9.1 Cover & Title Spreads
Full-bleed cinematic photograph (estate at golden hour preferred). Crest top-left at Mark scale, foiled Brass. Title bottom-left: "FOA Symposium 2026" in Saol Display Light Roman, Bone color, 64–84pt. Tagline beneath: "*From Resilience to Brilliance*" in Saol Display Italic, 32pt, Brass. A 24mm Brass hairline rule below the tagline. Dates and venue beneath the rule in tracked small caps, Brass, 11pt: `JUNE 10–11 · AHLSTRÖM ESTATE, FINLAND`. Footer line bottom-edge.

### 9.2 Section Dividers (Acts I, II, III)
Tactile mode. Ink surface with paper grain. Centered composition. Tiny foiled crest at top quarter. Below, in stack:
- `ACT I` in Söhne tracked small caps 14pt Brass
- Act title in Saol Display Light Roman, Bone, 56pt (e.g., "Born from Pressure")
- 24mm Brass hairline rule
- Italic tagline in Saol Display Italic, Brass, 22pt (e.g., "*Understanding the world as it is*")

Generous breathing room above and below the type block. The page should feel like a deliberate pause.

### 9.3 Panel Slides
Two layouts in rotation depending on panel character.

**Layout A (Photo-led, for atmospheric panels):**
Left 50% of frame: thematic full-bleed photograph (estate, landscape, or relevant texture). Right 50%: Ink surface with paper grain. Top of right panel: `PANEL 03` in tracked small caps Brass. Below: panel title in Saol Display Light Roman, Bone, 36pt. Below the title: 12mm Brass rule. Below: speaker portraits squared, 3-up or 4-up depending on count, each with name and role beneath. Moderator labeled in italic Saol Display.

**Layout B (Tactile, for type-driven panels):**
Full-frame Ink surface with paper grain. Crest at Mark scale, top-left. Panel number top-right in tracked small caps Brass. Center-left third: panel title in Saol Display Light Roman, Bone, 42pt, with a 16mm Brass rule beneath. Speaker block in right two-thirds: portraits and names in a clean 2x2 or 3x1 grid depending on count.

### 9.4 Speaker Slides (Solo Keynote or Fireside)
Squared 4:5 portrait at ~40% of frame width, left-aligned. Brass hairline frame. Right side: speaker name in Saol Display Light Roman, 48pt, Bone or Ink depending on surface. Role and affiliation beneath in Söhne Kräftig, 16pt. Below: 24mm Brass rule. Below the rule: a single pull quote from the speaker's bio or panel description in Saol Display Italic 20pt, hanging punctuation. Footer line. Crest at Mark scale, opposite corner from the portrait.

### 9.5 Break / Interval Slides
Tactile pause. Either Ink with paper grain, or a single atmospheric estate photograph deeply graded. Single line of type centered or lower-third: `INTERVAL · 20 MINUTES` in tracked small caps Brass. Footer line. Nothing else. The interval is a breath, not a placeholder.

### 9.6 Schedule / Agenda
Bone surface for editorial relief. Display anchor at top: date in Saol Display Light Roman, 40pt, Ink. Day name beneath in tracked small caps, Ink, 12pt. 24mm Brass rule. Schedule rows beneath in a two-column structure: time on the left (Söhne oldstyle figures, Ink, 14pt), event title on the right (Saol Display Light Roman, Ink, 16pt) with a sub-line in Söhne Buch 11pt for speakers/moderator if applicable. Hairline Brass rule between rows. Generous vertical leading (24pt minimum row height).

### 9.7 Website — Hero Section
Full-viewport cinematic estate photograph, graded warm-shadow. Slow vertical parallax on scroll, ~10% drift, no more. Crest top-left at Mark scale. Title overlay bottom-left: "FOA Symposium 2026" in Saol Display Light Roman, Bone, responsive sizing topping out around 96pt on desktop. Tagline beneath in Saol Display Italic, Brass. Below the tagline: a 32mm Brass rule. Below the rule: dates and venue in tracked small caps. A single "View Programme" link in tracked small caps Brass with a hairline underline that lengthens on hover.

### 9.8 Website — Sections
Alternate Cinematic and Tactile registers down the page. Speakers section uses a typographic index: names listed in Saol Display Light Roman, set vertically with hairline Brass rules between, clicking expands to a detail view with squared portrait and bio. Programme section uses the agenda treatment from 9.6, set on Bone. Footer is full Ink surface with crest centered at Mark scale, all key info in tracked small caps. No card-grid components with shadows or rounded corners. No hover effects beyond a hairline appearing under links.

### 9.9 Navigation (Web)
Single horizontal row, top of page. Logo (Mark scale crest) left. Links right in Söhne tracked small caps, 11pt: `PROGRAMME · SPEAKERS · VENUES · CONTACT`. On scroll, navigation reduces in size by 25% and sits on a translucent Ink overlay (90% opacity, 4% backdrop blur). No mega-menus.

### 9.10 Print Program Cover
Tactile mode. Matte black cover stock (Ink). Foiled and debossed crest centered upper third at Hero scale. Title block lower third: "FOA Symposium 2026" in foiled Saol Display Light Roman, Brass. Tagline beneath in foiled italic. 24mm foiled rule. Dates and venue in foiled tracked small caps. The book metaphor made literal.

---

## 10. What This System Is Not

Explicit anti-patterns, almost all of them present in the 2025 materials:

- **No circular portrait crops, anywhere.** Squared rectangles only.
- **No AI-generated abstract panel imagery.** No DNA helixes for biotech, no robots for AI, no neon cities for geopolitics. If a panel needs a thematic image, it pulls from the estate, the landscape, or material textures.
- **No bright or saturated gold.** Antique Brass only. If it looks like yellow gold leaf, it is wrong.
- **No drop shadows on type.** Ever.
- **No gold shine gradients, sparkle effects, or animated foil.** A subtle static gradient simulating foil catching light is acceptable. Anything that moves or twinkles is not.
- **No more than one display font in rotation.** Saol Display does all the display work.
- **No centered-everything compositions** except on hero covers and section dividers.
- **No glassmorphism, 3D perspectives, mesh gradients, or skeuomorphic effects.** This is a printed-book aesthetic, not a SaaS dashboard.
- **No stock pictograms or icon libraries.** No lightbulbs, rockets, shields, handshakes, magnifying glasses, or generic SVG sets. Where iconography is unavoidable (web utility), use hairline custom marks consistent with the typography.
- **No emojis in any deliverable.** Including web copy.
- **No fake luxury textures.** No marble veining, faux wood grain, fabric overlays, or velvet. Paper grain is the only texture in the system.
- **No visible templates.** No Gamma defaults. No Canva tells. No Slidesgo. If a layout feels familiar from another tool, redesign it.
- **No more than one accent color per spread.** Brass and Ember never appear in the same composition unless Ember is being introduced as a specific section identifier (auction).

---

## 11. Copy Tone on Materials

Brief notes on writing that lives inside the design system:

- Tracked small caps for utility text creates formality. Use it for dates, locations, navigation, panel numbers, captions, footers.
- Body copy is editorial: short declarative sentences, present tense, no event-tech clichés. No "transformative," no "journey," no "unlock."
- Title Case only on display headlines. Sentence case for body and supporting text.
- Em dashes acceptable in body editorial copy. En dashes for date and number ranges.
- Real typographic quotes always. Apostrophes too.

---

## 12. Production Notes for the Designer

- All materials produced as a unified set. The deck, website, program, signage, and badges are members of the same family, not separate projects.
- Build a single component library that translates across deck and web. Same speaker card. Same panel header. Same agenda row. Same footer line. The system has to be portable.
- Version every export. File names follow `foa_2026_{deliverable}_v{n}_{YYYYMMDD}.{ext}` convention.
- When in doubt, remove. The system rewards restraint. Every additional element is a tax on the whole.

---

*This is a system, not a moodboard. Every spread should look like it belongs to the same expertly produced book.*
