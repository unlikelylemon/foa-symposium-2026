/* ─────────────────────────────────────────────────────────────────────
   FOA Symposium 2026 — Speaker Data & Rendering
   ───────────────────────────────────────────────────────────────────── */

const FOA_SPEAKERS = [
  {
    id: "gerburg-hothum",
    name: "Gerburg Hothum",
    role: "Behavioral Expert & Communication Specialist",
    panel: "The Human Edge: Psychology of Leadership Under Pressure",
    act: "III",
    mc: false,
    photo: "uploads/Gerburg.jpg",
    bio: "Gerburg Hothum works at the intersection of behavioral science and high-stakes communication. Her practice serves family office principals and leadership teams navigating succession, organizational transformation, and public scrutiny. She brings forensic clarity to the invisible dynamics that determine how institutions succeed or fracture under pressure.",
    pullQuote: "The hardest conversations are the ones we refuse to name."
  },
  {
    id: "jennifer-wines",
    name: "Jennifer Wines",
    role: "Founder, Invisible Wealth® · Bestselling Author",
    panel: "The Human Edge: Psychology of Leadership Under Pressure",
    act: "III",
    mc: false,
    photo: "uploads/Jennifer.jpg",
    bio: "Jennifer Wines is the founder of Invisible Wealth® and the author of works exploring the hidden architecture of substantial wealth — identity, purpose, and the responsibilities that accompany capital across generations. She advises families on the psychological dimensions that balance sheets do not capture.",
    pullQuote: "Wealth without identity is a liability."
  },
  {
    id: "maria-bondestam-ahlstrom",
    name: "Maria Bondestam-Ahlström",
    role: "Co-Founder & Honorary Chair, Eva Ahlström Foundation",
    panel: "Heritage, Legacy & Long-Term Thinking",
    act: "I",
    mc: false,
    photo: "uploads/Maria.jpg",
    bio: "Maria Bondestam-Ahlström represents five generations of the Ahlström industrial dynasty and co-founded the Eva Ahlström Foundation to carry the family's cultural and philanthropic legacy into the twenty-first century. As steward of the Ahlström estate — the setting for this symposium — she brings a lived understanding of what multigenerational governance requires.",
    pullQuote: "The land teaches you what capital cannot."
  },
  {
    id: "alexandre-mars",
    name: "Alexandre Mars",
    role: "Founder & CEO, EPIC Foundation · Mission M · blisce/",
    panel: "Capital for Good: The Architecture of Impact",
    act: "II",
    mc: false,
    photo: "uploads/Alexandre.jpg",
    bio: "Alexandre Mars founded the EPIC Foundation to connect philanthropic capital with measurable social impact at scale. He has committed his career to closing the gap between good intention and structural change, building the tools and networks that make giving effective rather than aspirational. His venture fund blisce/ applies the same discipline to early-stage companies.",
    pullQuote: "Philanthropy without measurement is indulgence."
  },
  {
    id: "joe-betts-lacroix",
    name: "Joe Betts-LaCroix",
    role: "CEO, Retro Biosciences",
    panel: "Rewriting Human Resilience: Health & Longevity",
    act: "I",
    mc: false,
    photo: "uploads/JoeBetts.jpg",
    bio: "Joe Betts-LaCroix is the CEO of Retro Biosciences, a company pursuing the biological reversal of aging through cellular reprogramming. He has co-founded multiple biotechnology ventures and brings a founder's conviction that the question of human longevity is not speculative — it is the most consequential engineering problem of the coming decades.",
    pullQuote: "We are the first generation with the tools to fundamentally question aging."
  },
  {
    id: "sebastian-klaus",
    name: "Sebastian Klaus",
    role: "Founder & CEO, ATMOS Space Cargo",
    panel: "Defending Stability: Security in an Unstable World",
    act: "I",
    mc: false,
    photo: "uploads/Sebastian.jpg",
    bio: "Sebastian Klaus is the Founder and CEO of ATMOS Space Cargo, developing reentry vehicles for in-space manufacturing and orbital logistics. A deep-tech founder operating at the edge of European strategic autonomy, he brings a practitioner's perspective on the intersection of technological capability, geopolitical resilience, and defence.",
    pullQuote: "In orbit, there is no margin for idealism."
  },
  {
    id: "timo-ketonen",
    name: "Timo Ketonen",
    role: "CEO, Entrepreneur & Impact Investor · Blue Economy",
    panel: "Special Address",
    act: "I",
    mc: false,
    photo: "uploads/TimoK.jpg",
    bio: "Timo Ketonen is a CEO, entrepreneur, and impact investor focused on the blue economy — sustainable, ocean-based industries with the potential to reshape global resource systems. He champions the alignment of patient family capital with the long horizon that environmental systems require.",
    pullQuote: "The ocean will not wait for consensus."
  },
  {
    id: "therese-von-blixen-finecke",
    name: "Thérèse von Blixen-Finecke",
    role: "Co-Founder, Catalyst Co-Labs · Board, IRC Sweden",
    panel: "Capital for Good: The Architecture of Impact",
    act: "II",
    mc: false,
    photo: "uploads/Therese.jpg",
    bio: "Thérèse von Blixen-Finecke co-founded Catalyst Co-Labs to align philanthropic and institutional capital with structural solutions to displacement and humanitarian crisis. She serves on the board of IRC Sweden and brings a systemic perspective on what it means to build infrastructure for human dignity at scale.",
    pullQuote: "Solutions exist. The bottleneck is always will."
  },
  {
    id: "joe-russo",
    name: "Joe Russo",
    role: "Co-Founder, AGBO · Film Director (Russo Brothers)",
    panel: "Culture as Infrastructure: Storytelling & Influence",
    act: "II",
    mc: false,
    photo: "uploads/JoeR.jpg",
    bio: "Joe Russo co-founded AGBO with his brother Anthony to build narrative properties that cross cultures, geographies, and media. As co-director of the highest-grossing films in history, he has spent thirty years studying how stories shape behavior — and who bears responsibility when the audience is the world.",
    pullQuote: "Story is the most durable infrastructure civilization has ever built."
  },
  {
    id: "johannes-gullichsen",
    name: "Johannes Gullichsen",
    role: "Board Member, A. Ahlström Oy · Family Enterprise Governance",
    panel: "Heritage, Legacy & Long-Term Thinking",
    act: "I",
    mc: false,
    photo: "uploads/Johannes.jpg",
    bio: "Johannes Gullichsen sits on the board of A. Ahlström Oy and has spent decades practicing the craft of family enterprise governance. He represents the Finnish industrial tradition of multigenerational ownership — the discipline of building structures that survive individual lifetimes and the pressures that come with them.",
    pullQuote: "Governance is what lets love outlast a generation."
  },
  {
    id: "harry-mead",
    name: "Harry Mead",
    role: "Founder & CEO, Augur Initiative · Security Expert",
    panel: "Defending Stability: Security in an Unstable World",
    act: "I",
    mc: false,
    photo: "uploads/Harry.png",
    bio: "Harry Mead founded Augur Initiative to help institutions anticipate and navigate threats in the gray zone between conventional and hybrid conflict. A security expert with direct field and analytical experience, he brings a practitioner's map of the geopolitical terrain that now defines the operating environment for capital and governance alike.",
    pullQuote: "The most dangerous threats are the ones that don't look like threats."
  },
  {
    id: "andre-noel-chaker",
    name: "André Noël Chaker",
    role: "Founder, MySpeaker · Keynote Speaker · Author",
    panel: "Special Address",
    act: "I",
    mc: false,
    photo: "uploads/Andre.jpg",
    bio: "André Noël Chaker is the founder of MySpeaker, a bestselling author, and a keynote speaker who has advised governments, institutions, and leadership teams across four continents. His work sits at the intersection of cultural intelligence, institutional transformation, and the personal disciplines that sustain performance over time.",
    pullQuote: "The institutions that endure are the ones that know what they will not become."
  },
  {
    id: "laurent-frederic-lohmann",
    name: "Laurent-Frédéric Lohmann",
    role: "Chief of Staff & Investor, 4P Capital",
    panel: "Closing: From Insight to Action · Master of Ceremony",
    act: "III",
    mc: true,
    photo: "uploads/Laurent.jpg",
    bio: "Laurent-Frédéric Lohmann serves as Chief of Staff and Investor at 4P Capital and as Master of Ceremony for FOA Symposium 2026. He brings institutional discipline and rhetorical precision to the arc of the two days — translating conversation into consequence and ensuring that every session builds toward the symposium's larger purpose.",
    pullQuote: "Conversation is the substance of which strategy is made."
  },
  {
    id: "kai-pierre-thiess",
    name: "Kai-Pierre Thieß",
    role: "Managing Director, Juwelier Hilscher Munich · Cultural Patron",
    panel: "Welcome Dinner · Tuesday, June 10",
    act: "I",
    mc: false,
    photo: "uploads/Kai.jpg",
    bio: "Kai-Pierre Thieß is Managing Director of Juwelier Hilscher Munich and a cultural patron whose work connects fine craft with contemporary patronage networks. He brings an aesthetic and curatorial intelligence to the symposium, and to the opening dinner on Tuesday evening at the Ahlström estate.",
    pullQuote: "Culture is not decoration. It is load-bearing."
  },
  {
    id: "chris-brearton",
    name: "Chris Brearton",
    role: "Partner, AGBO · Former Amazon MGM Studios Executive",
    panel: "Moderator — Culture as Infrastructure: Storytelling & Influence",
    act: "II",
    mc: false,
    photo: "uploads/ChrisB.jpg",
    bio: "Chris Brearton is a partner at AGBO and a former senior executive at Amazon MGM Studios, where he oversaw global content strategy across intellectual property, streaming, and theatrical release. He brings a practitioner's understanding of how culture is produced, distributed, and how it shapes the institutional realities we treat as fixed.",
    pullQuote: "The story you tell about yourself is the ceiling you build for yourself."
  },
  {
    id: "david-berry",
    name: "David Berry",
    role: "Managing Partner, Averin Capital · Scientist & Entrepreneur",
    panel: "Rewriting Human Resilience: Health & Longevity",
    act: "I",
    mc: false,
    photo: "uploads/DavidB.jpg",
    bio: "David Berry is Managing Partner of Averin Capital and a scientist-entrepreneur who has founded companies in synthetic biology and therapeutics. He brings a rare combination of deep scientific literacy and long-duration capital perspective to the frontier question of how biological systems — including human ones — can be made to last.",
    pullQuote: "Biology is the oldest technology. We are only beginning to read it."
  },
  {
    id: "dr-philipp-kerth",
    name: "Dr. Philipp Kerth",
    role: "CEO & Co-Founder, Hypersonica · Defence Deep Tech",
    panel: "Defending Stability: Security in an Unstable World",
    act: "I",
    mc: false,
    photo: "uploads/Philipp.jpg",
    bio: "Dr. Philipp Kerth is the CEO and Co-Founder of Hypersonica, a defence deep-tech company developing hypersonic propulsion systems. He brings a founder's clarity to the geopolitical urgency now driving defence investment — and to the questions that European strategic autonomy must answer in the years ahead.",
    pullQuote: "Speed is now a strategic asset. Most institutions have not caught up."
  },
  {
    id: "yuta-lee",
    name: "Yuta Lee",
    role: "Founder & CEO, Accelerated Biosciences · Regenerative Medicine",
    panel: "Rewriting Human Resilience: Health & Longevity",
    act: "I",
    mc: false,
    photo: "uploads/Yuta.jpg",
    bio: "Yuta Lee is Founder and CEO of Accelerated Biosciences, focused on regenerative medicine and the development of therapeutic proteins using cell-free systems. He brings a scientist-founder's perspective on the convergence of longevity research and capital — and on what it means to make the body's regenerative capacity available at scale.",
    pullQuote: "The regenerative capacity of the human body is largely untapped."
  },
  {
    id: "stacey-lawson",
    name: "Stacey Lawson",
    role: "Co-Founder, Positive AI Labs · AI Governance Advocate",
    panel: "Systems of Resilience: Investing in the Future",
    act: "II",
    mc: false,
    photo: "uploads/Stacey.jpg",
    bio: "Stacey Lawson is Co-Founder of Positive AI Labs and a leading voice on AI governance. She advocates for the alignment of AI development with long-term human wellbeing — not as a constraint on progress, but as the precondition for it. Her work spans policy, capital, and the organizational structures that make responsible AI possible.",
    pullQuote: "Alignment is not a constraint on AI. It is AI's most important application."
  },
  {
    id: "dr-serenella-tolomeo",
    name: "Dr. Serenella Tolomeo",
    role: "Senior Scientist, A*STAR Singapore · Neuroscience",
    panel: "NextGen & Global Perspectives (ASEAN Panel)",
    act: "III",
    mc: false,
    photo: null,
    bio: "Dr. Serenella Tolomeo is a Senior Scientist at A*STAR Singapore specializing in neuroscience and cognitive aging. She brings a research perspective on the biological dimensions of human performance, longevity, and the mechanisms through which leadership capacity is sustained — or degraded — under sustained pressure.",
    pullQuote: "The brain is not a fixed object. It is a system under continuous revision."
  },
  {
    id: "harri-hursti",
    name: "Harri Hursti",
    role: "Cybersecurity Expert · Election Security Pioneer",
    panel: "NextGen & Global Perspectives (ASEAN Panel)",
    act: "III",
    mc: false,
    photo: "uploads/HarriH.jpg",
    bio: "Harri Hursti is a cybersecurity expert and pioneer of election security research whose work has reshaped how democratic institutions understand and defend their digital infrastructure. He brings a practitioner's map of the vulnerabilities that underlie the systems we have taken for granted — and a precise account of the threats that do not announce themselves.",
    pullQuote: "Every vulnerability in digital infrastructure is eventually exploited."
  },
  {
    id: "satvinder-singh",
    name: "Satvinder Singh",
    role: "Deputy Secretary-General, ASEAN Economic Community",
    panel: "NextGen & Global Perspectives (ASEAN Panel)",
    act: "III",
    mc: false,
    photo: "uploads/Satvinder.jpg",
    bio: "Satvinder Singh is Deputy Secretary-General of the ASEAN Economic Community. He brings the institutional perspective of Southeast Asian economic integration to questions of global resilience — and to the structural realignment of capital, supply chains, and governance that is reordering the world economy around new centers of gravity.",
    pullQuote: "Southeast Asia is not a market. It is the next chapter."
  },
  {
    id: "rolf-schumann",
    name: "Rolf Schumann",
    role: "Co-CEO, Schwarz Digits · CDO, Schwarz Group",
    panel: "AI at the Edge: Intelligence, Power & Responsibility",
    act: "I",
    mc: false,
    photo: "uploads/Rolf.jpg",
    bio: "Rolf Schumann is Co-CEO of Schwarz Digits and Chief Digital Officer of the Schwarz Group — one of Europe's largest retail organizations. He has led digital transformation at a scale few practitioners have managed, and brings an operational perspective on AI deployment, data sovereignty, and what responsible technological leadership looks like when it is not abstract.",
    pullQuote: "Digital transformation fails when it is treated as a technology project."
  },
  {
    id: "yannick-sonnenberg",
    name: "Yannick Sonnenberg",
    role: "General Partner, Emergence Ventures",
    panel: "AI at the Edge: Intelligence, Power & Responsibility",
    act: "I",
    mc: false,
    photo: "uploads/Yannick.jpg",
    bio: "Yannick Sonnenberg is General Partner at Emergence Ventures, focused on early-stage companies at the frontier of artificial intelligence and its applications across enterprise and society. He brings an investor's clarity to the question of which AI capabilities are transformative, which are overstated, and what the distribution of benefit and risk actually looks like.",
    pullQuote: "The most underestimated dimension of AI is its speed."
  },
  {
    id: "carles-reina",
    name: "Carles Reina",
    role: "Go-To-Market Leader, ElevenLabs · AI Growth",
    panel: "AI at the Edge: Intelligence, Power & Responsibility",
    act: "I",
    mc: false,
    photo: "uploads/Carles.jpg",
    bio: "Carles Reina leads go-to-market at ElevenLabs, the AI voice platform transforming how audio and speech are created, localized, and deployed at global scale. He brings a practitioner's view on the commercialization of generative AI — and on the moment when technology crosses the threshold from capability to cultural infrastructure.",
    pullQuote: "Voice is the most human interface ever built."
  },
  {
    id: "chris-rynning",
    name: "Chris Rynning",
    role: "Managing Partner, AMYP Ventures · Founder, Humanitech.AI",
    panel: "Systems of Resilience: Investing in the Future",
    act: "II",
    mc: false,
    photo: "uploads/ChrisRynning.jpg",
    bio: "Chris Rynning is Managing Partner of AMYP Ventures and founder of Humanitech.AI. He invests in technology ventures designed to strengthen social systems rather than displace them — bringing a capital allocator's discipline to the conviction that the most resilient investments are those that produce genuine human benefit alongside financial return.",
    pullQuote: "Technology that doesn't serve human flourishing is not progress."
  },
  {
    id: "xavier-sarras",
    name: "Xavier Sarras",
    role: "Founding Partner, 4P Capital · Climate Tech Investor",
    panel: "Moderator — Rewriting Human Resilience: Health & Longevity",
    act: "I",
    mc: false,
    photo: "uploads/Xavier.jpg",
    bio: "Xavier Sarras is Founding Partner of 4P Capital, investing in climate technology and the regeneration of natural systems. He approaches capital allocation as a question of civilizational responsibility — and brings a founding partner's discipline to the challenge of directing long-horizon resources toward the physical systems on which everything else depends.",
    pullQuote: "Climate is a capital allocation problem. It is solvable."
  },
  {
    id: "chris-bruce",
    name: "Chris Bruce",
    role: "Chair, Cambridge Tech Week · Telecom & Connectivity Expert",
    panel: "Moderator — AI at the Edge: Intelligence, Power & Responsibility",
    act: "I",
    mc: false,
    photo: "uploads/ChrisBruce.jpg",
    bio: "Chris Bruce chairs Cambridge Tech Week and has spent two decades building the connectivity infrastructure through which digital access reaches underserved populations. His work sits at the intersection of technology policy, network infrastructure, and the question of who benefits when the world becomes more connected.",
    pullQuote: "Connectivity is not a product. It is a right."
  },
  {
    id: "derek-hu",
    name: "Derek Hu",
    role: "Founder, TFA International · Partner, SUM Ventures",
    panel: "Moderator — Systems of Resilience: Investing in the Future",
    act: "II",
    mc: false,
    photo: "uploads/DerekH.jpg",
    bio: "Derek Hu founded TFA International and is a partner at SUM Ventures, connecting family capital across Asian and Western markets with particular focus on Southeast Asian investment structures. He brings a bridge-builder's clarity to the cross-cultural dimensions of trust, governance, and long-term partnership between family offices.",
    pullQuote: "Family capital in Asia is generational, patient, and deeply relational."
  },
  {
    id: "philip-wu",
    name: "Philip Wu",
    role: "Co-Founder & Secretariat, Family Office Alliance · CEO, Grid Synergy",
    panel: "Moderator — NextGen & Global Perspectives (ASEAN Panel)",
    act: "III",
    mc: false,
    photo: "uploads/PhilipW.jpg",
    bio: "Philip Wu is co-founder and secretariat of the Family Office Alliance and CEO of Grid Synergy. He designed the FOA model of curated, principal-to-principal exchange — and built the relationships of trust that make this symposium possible. His perspective on what family offices need, and what they are capable of when gathered with intent, shapes the design of every FOA event.",
    pullQuote: "The best conversations between principals happen without agendas."
  }
];

/* ─── Helpers ───────────────────────────────────────────────────────── */
function getInitials(name) {
  const parts = name.replace(/^Dr\.\s*/i, '').split(' ');
  return (parts[0][0] + (parts[parts.length - 1][0] || '')).toUpperCase();
}

function makePortrait(sp) {
  if (sp.photo) {
    return `<div class="sp-portrait-bg"></div>
      <img class="sp-portrait-img" src="${sp.photo}" alt="${sp.name}" loading="lazy">`;
  }
  return `<div class="sp-portrait-bg"></div>
    <div class="sp-initials" aria-hidden="true">${getInitials(sp.name)}</div>`;
}

function makeRelatedPortrait(sp) {
  if (sp.photo) {
    return `<div class="sp-portrait-bg"></div>
      <img class="sp-portrait-img" src="${sp.photo}" alt="${sp.name}" loading="lazy">`;
  }
  return `<div class="sp-portrait-bg"></div>
    <div class="sp-initials" aria-hidden="true" style="font-size:24px">${getInitials(sp.name)}</div>`;
}

/* ─── Speaker index rendering ───────────────────────────────────────── */
function renderSpeakerIndex() {
  const container = document.getElementById('speaker-index');
  if (!container) return;

  container.innerHTML = FOA_SPEAKERS.map((sp, i) => `
    <div class="speaker-row" role="button" tabindex="0"
         aria-label="View ${sp.name} profile"
         data-speaker-id="${sp.id}"
         data-fade="delay-${i % 4 === 0 ? '0' : i % 4 === 1 ? '1' : i % 4 === 2 ? '2' : '3'}">
      <div class="sp-portrait-wrap">${makePortrait(sp)}</div>
      <div>
        <div class="sp-name">${sp.name}${sp.mc ? '<span class="sp-mc-mark" title="Master of Ceremony">*</span>' : ''}</div>
        <div class="sp-role">${sp.role}</div>
      </div>
      <div class="sp-arrow" aria-hidden="true">View profile <span class="sp-arrow-glyph">→</span></div>
    </div>
  `).join('');

  container.querySelectorAll('.speaker-row').forEach(row => {
    row.addEventListener('click', () => openSpeakerOverlay(row.dataset.speakerId));
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSpeakerOverlay(row.dataset.speakerId); }
    });
  });
}

/* ─── Speaker overlay ───────────────────────────────────────────────── */
function openSpeakerOverlay(id) {
  const sp = FOA_SPEAKERS.find(s => s.id === id);
  if (!sp) return;
  const overlay = document.getElementById('speaker-overlay');

  // Portrait
  overlay.querySelector('.overlay-portrait').innerHTML = makePortrait(sp);

  // Text fields
  overlay.querySelector('.overlay-name').textContent = sp.name;
  overlay.querySelector('.overlay-role-text').textContent = sp.role;
  overlay.querySelector('.overlay-bio').textContent = sp.bio;
  overlay.querySelector('.overlay-pullquote').textContent = '\u201C' + sp.pullQuote + '\u201D';
  overlay.querySelector('.overlay-panel-item').textContent = sp.panel;

  // Related speakers (same act)
  const related = FOA_SPEAKERS.filter(s => s.id !== id && s.act === sp.act).slice(0, 3);
  const relatedContainer = overlay.querySelector('.overlay-related-grid');
  relatedContainer.innerHTML = related.map(r => `
    <div class="related-speaker" role="button" tabindex="0" data-speaker-id="${r.id}">
      <div class="related-portrait">${makeRelatedPortrait(r)}</div>
      <div class="related-name">${r.name}</div>
      <div class="related-role">${r.role.split('·')[0].trim()}</div>
    </div>
  `).join('');

  relatedContainer.querySelectorAll('.related-speaker').forEach(el => {
    el.addEventListener('click', () => openSpeakerOverlay(el.dataset.speakerId));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSpeakerOverlay(el.dataset.speakerId); }
    });
  });

  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.overlay-close').focus();
}

function closeSpeakerOverlay() {
  document.getElementById('speaker-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
