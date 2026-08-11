import { useState } from 'react'

const HERO_IMG = 'https://images.unsplash.com/photo-1637997840862-9aafaf835eed?w=1800&h=900&fit=crop&auto=format'
const WORKSHOP_IMG = 'https://images.unsplash.com/photo-1612353318597-702ae55258cb?w=900&h=600&fit=crop&auto=format'
const MACHINES_IMG = 'https://images.unsplash.com/photo-1637997840847-5e385c00a1a4?w=900&h=600&fit=crop&auto=format'

const stats = [
  { value: '4', label: 'Women trained', sub: 'Single mothers & low-income residents' },
  { value: '80', label: 'Training hours', sub: '20 hrs/week × 4 weeks' },
  { value: '4', label: 'Sewing machines', sub: 'Distributed as start-up kits' },
  { value: '~20', label: 'Families reached', sub: 'Indirect community impact' },
]

const timeline = [
  { date: '22 Dec 2025', title: 'Project launched', desc: 'Funding received and disbursed to initiate procurement.' },
  { date: '26 Dec 2025', title: 'Equipment secured', desc: 'Sewing machines, fabrics, spares, and tools purchased.' },
  { date: '26–31 Dec 2025', title: 'Recruitment', desc: '4 women selected from the Mukuru Kwa Njenga community.' },
  { date: '1–28 Jan 2026', title: 'Structured training', desc: 'Four weeks of daily instruction, observation, and independent practice at TailorSmart Training Centre.' },
]

const sdgs = [
  { num: 'SDG 1', label: 'No Poverty' },
  { num: 'SDG 5', label: 'Gender Equality' },
  { num: 'SDG 8', label: 'Decent Work' },
  { num: 'SDG 10', label: 'Reduced Inequalities' },
]

const lessons = [
  { title: 'Budget for overruns', body: 'Allocate a contingency for trainer fees, branding, and consumable materials — each ran over initial estimates.' },
  { title: 'Flexible scheduling works', body: 'Structuring mornings for instruction, midday for observation, and afternoons for practice respected domestic responsibilities without compromising learning.' },
  { title: 'Community anchors credibility', body: 'Early involvement of local leaders and the parish pastor accelerated recruitment and sustained trust throughout the program.' },
  { title: 'Market linkages are essential', body: 'Connecting graduates to school uniform contracts and community repair networks is what turns skills into livelihoods.' },
]

const recommendations = [
  { tag: 'Planning', text: 'Include a contingency allocation for trainer fees, branding, and consumables.' },
  { tag: 'Training', text: 'Extend training beyond four weeks to allow deeper mastery and more practice time.' },
  { tag: 'Monitoring', text: 'Introduce mid-training evaluations and post-training follow-ups for accountability.' },
  { tag: 'Partnerships', text: 'Strengthen links with local schools, churches, and businesses for uniform contracts.' },
  { tag: 'Mentorship', text: 'Engage experienced tailors and entrepreneurs as ongoing mentors for beneficiaries.' },
  { tag: 'Scaling', text: 'Empower the initial four graduates to train new cohorts — multiplying impact at low cost.' },
]

function NavBar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Impact', 'Journey', 'Stories', 'Recommendations', 'Support']
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-sm border-b border-[#CEC8BC]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-[#1B4332]">TailorSmart</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-[#6B6455] hover:text-[#1B4332] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a href="#support"
          className="hidden md:inline-flex items-center gap-2 bg-[#C75B3E] text-[#F5F0E8] text-sm font-semibold px-4 py-2 rounded hover:bg-[#b04e34] transition-colors">
          Support Us
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-5 h-0.5 bg-[#1A1A14] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#1A1A14] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#1A1A14]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#F5F0E8] border-t border-[#CEC8BC] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#1A1A14]">{l}</a>
          ))}
          <a href="#support" className="text-sm font-semibold text-[#C75B3E]">Support Us →</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end grain-overlay">
      <img
        src={HERO_IMG}
        alt="Women working at sewing machines in a training workshop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1F]/90 via-[#0D2B1F]/40 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
        <p className="font-mono-data text-[#D6E4DC] text-xs tracking-widest uppercase mb-4">
          Mukuru Kwa Njenga · Nairobi, Kenya · 2025–2026
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#F5F0E8] leading-[1.05] max-w-3xl mb-6">
          From Grass<br /><em className="font-light text-[#8DC9A8]">to Grace.</em>
        </h1>
        <p className="text-[#D6E4DC] text-lg md:text-xl max-w-xl leading-relaxed mb-8">
          How four women in an informal Nairobi settlement gained the skills, tools,
          and confidence to build sustainable livelihoods through tailoring.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#impact" className="bg-[#1B4332] text-[#F5F0E8] px-6 py-3 font-semibold text-sm hover:bg-[#245c44] transition-colors rounded">
            Read the Report
          </a>
          <a href="#support" className="border border-[#F5F0E8]/50 text-[#F5F0E8] px-6 py-3 font-semibold text-sm hover:bg-[#F5F0E8]/10 transition-colors rounded">
            Support the Initiative
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div>
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            A community shaped by resilience
          </h2>
          <div className="w-12 h-0.5 bg-[#1B4332] mb-8" />
          <p className="text-[#6B6455] text-sm font-mono-data uppercase tracking-wider mb-2">Location</p>
          <p className="font-medium mb-6">Mukuru Kwa Njenga Slums — Embakasi South, Nairobi County, Kenya</p>
          <div className="flex gap-4 flex-col">
            {sdgs.map(s => (
              <div key={s.num} className="flex items-center gap-3">
                <span className="font-mono-data text-xs bg-[#1B4332] text-[#F5F0E8] px-2 py-1 rounded">{s.num}</span>
                <span className="text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-[#1A1A14] text-lg leading-relaxed">
            Mukuru Kwa Njenga is a densely populated informal settlement where economic activity
            is largely informal — small-scale trading, casual labor, and artisanal services. Unemployment,
            financial dependency, and limited access to vocational training define daily life for many residents.
          </p>
          <p className="text-[#4A4438] leading-relaxed">
            The TailorSmart Women Empowerment Initiative was designed to meet this challenge directly.
            Rather than charity, it offered a structured pathway: skills, equipment, mentorship, and
            a community network — everything a woman needs to build her own enterprise.
          </p>
          <p className="text-[#4A4438] leading-relaxed">
            The project focused on four women — prioritizing single mothers and those facing the
            greatest financial precarity. Each woman completed 80 hours of structured training and
            left with a sewing machine, a starter kit, and a certificate of completion.
          </p>
          <div className="bg-[#EDE7DA] border-l-4 border-[#1B4332] pl-6 py-5 rounded-r">
            <p className="font-display text-xl italic text-[#1B4332] leading-snug">
              "The initiative shifted them from vulnerability to self-sufficiency, instilling confidence,
              dignity, and hope for their families."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactStats() {
  return (
    <section id="impact" className="bg-[#1B4332] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-mono-data text-[#8DC9A8] text-xs tracking-widest uppercase mb-3">Quantitative Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8]">Impact in numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F0E8]/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#1B4332] p-8 text-center">
              <p className="font-display text-6xl md:text-7xl font-semibold text-[#8DC9A8] mb-2">{s.value}</p>
              <p className="text-[#F5F0E8] font-semibold text-sm mb-1">{s.label}</p>
              <p className="text-[#8DC9A8] text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="border border-[#F5F0E8]/10 rounded p-6">
            <p className="font-mono-data text-[#8DC9A8] text-xs mb-3">Training delivered</p>
            <div className="flex items-end gap-2">
              <span className="font-display text-4xl font-semibold text-[#F5F0E8]">4</span>
              <span className="text-[#8DC9A8] mb-1">business mentorship sessions</span>
            </div>
          </div>
          <div className="border border-[#F5F0E8]/10 rounded p-6">
            <p className="font-mono-data text-[#8DC9A8] text-xs mb-3">Certification</p>
            <div className="flex items-end gap-2">
              <span className="font-display text-4xl font-semibold text-[#F5F0E8]">4/4</span>
              <span className="text-[#8DC9A8] mb-1">certificates issued</span>
            </div>
          </div>
          <div className="border border-[#F5F0E8]/10 rounded p-6">
            <p className="font-mono-data text-[#8DC9A8] text-xs mb-3">Practice output</p>
            <div className="flex items-end gap-2">
              <span className="font-display text-4xl font-semibold text-[#F5F0E8]">18</span>
              <span className="text-[#8DC9A8] mb-1">garments produced during training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
        <div>
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Implementation</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-10">
            The journey, step by step
          </h2>
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-[#CEC8BC]" />
            {timeline.map((t, i) => (
              <div key={i} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 border-[#1B4332] bg-[#F5F0E8]" />
                <p className="font-mono-data text-[#6B6455] text-xs mb-1">{t.date}</p>
                <h3 className="font-display text-xl font-semibold mb-1">{t.title}</h3>
                <p className="text-[#4A4438] text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#EDE7DA] rounded p-6">
            <p className="font-mono-data text-[#6B6455] text-xs uppercase tracking-wider mb-3">Daily training routine</p>
            <div className="space-y-2">
              {[
                ['8:00 – 10:00 AM', 'Trainer instruction at the training centre'],
                ['10:00 AM – 12:00 PM', 'Learners observe trainer working on garments'],
                ['12:00 PM onward', 'Independent practice under supervision'],
              ].map(([time, desc]) => (
                <div key={time} className="flex gap-4 text-sm">
                  <span className="font-mono-data text-[#1B4332] w-36 shrink-0">{time}</span>
                  <span className="text-[#4A4438]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4 md:mt-16">
          <img
            src={WORKSHOP_IMG}
            alt="Person at sewing machine in training workshop"
            className="w-full aspect-[3/2] object-cover rounded bg-[#EDE7DA]"
          />
          <img
            src={MACHINES_IMG}
            alt="Sewing machine with thread — tools of the trade"
            className="w-full aspect-[3/2] object-cover rounded bg-[#EDE7DA]"
          />
        </div>
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section id="stories" className="bg-[#EDE7DA] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Success Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            From grass to grace
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F5F0E8] rounded p-8 border border-[#CEC8BC]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D6E4DC] flex items-center justify-center">
                <span className="font-display text-[#1B4332] font-semibold text-sm">B</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Before the program</p>
                <p className="text-[#6B6455] text-xs">Life before TailorSmart</p>
              </div>
            </div>
            <p className="text-[#4A4438] leading-relaxed">
              Participants struggled with unstable, unpredictable incomes. Many depended on casual labor —
              day-to-day work with no guarantee of tomorrow. Vocational skills were out of reach,
              and financial dependency was a cycle with no visible exit.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Unstable income', 'No vocational skills', 'Financial dependency', 'Casual labor'].map(t => (
                <span key={t} className="text-xs bg-[#EDE7DA] text-[#6B6455] px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#1B4332] rounded p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#245c44] flex items-center justify-center">
                <span className="font-display text-[#8DC9A8] font-semibold text-sm">A</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#F5F0E8]">After the program</p>
                <p className="text-[#8DC9A8] text-xs">Life as a TailorSmart graduate</p>
              </div>
            </div>
            <p className="text-[#D6E4DC] leading-relaxed">
              Each woman now owns a sewing machine and a starter kit. They hold a certificate of completion
              and the tailoring and business skills to run their own enterprise. They are connected to
              community markets, school uniform contracts, and a peer support network.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Owns equipment', 'Certified graduate', 'Business skills', 'Community network'].map(t => (
                <span key={t} className="text-xs bg-[#245c44] text-[#8DC9A8] px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: '🏛️', title: 'Community recognition', body: 'Local leaders and the parish pastor acknowledged TailorSmart as a model of empowerment in Mukuru Kwa Njenga.' },
            { icon: '🤝', title: 'Peer networks', body: 'Stronger peer support among graduates — regular check-ins, shared resources, and collective problem-solving.' },
            { icon: '🏪', title: 'Community hub', body: 'The TailorSmart Training Centre became a recognized shopfront and gathering point for women\'s empowerment in the area.' },
          ].map(c => (
            <div key={c.title} className="bg-[#F5F0E8] rounded p-6 border border-[#CEC8BC]">
              <p className="text-2xl mb-3">{c.icon}</p>
              <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-[#4A4438] text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Challenges() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        <div className="md:sticky md:top-24">
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Challenges & Lessons</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            What the project taught us
          </h2>
          <p className="text-[#4A4438] leading-relaxed mb-8">
            Every challenge encountered became a lesson carried forward — into future projects,
            future cohorts, and a stronger methodology for community-led empowerment.
          </p>
          <div className="bg-[#EDE7DA] rounded p-6 border border-[#CEC8BC] space-y-4">
            <p className="font-mono-data text-xs text-[#6B6455] uppercase tracking-wider">Key challenges</p>
            {['Trainer fees exceeded initial budget', 'Branding costs higher than planned', 'Domestic duties risked drop-outs', 'Market competition from established tailors', 'Higher fabric consumption during practice'].map(c => (
              <div key={c} className="flex gap-3 text-sm text-[#4A4438]">
                <span className="text-[#C75B3E] mt-0.5 shrink-0">—</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {lessons.map((l) => (
            <div key={l.title} className="bg-[#EDE7DA] rounded p-6 border border-[#CEC8BC] hover:border-[#1B4332] transition-colors">
              <h3 className="font-display text-lg font-semibold mb-2">{l.title}</h3>
              <p className="text-[#4A4438] text-sm leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Recommendations() {
  return (
    <section id="recommendations" className="bg-[#EDE7DA] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Looking ahead</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Recommendations for impact
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {recommendations.map((r) => (
            <div key={r.tag} className="bg-[#F5F0E8] rounded p-6 border border-[#CEC8BC]">
              <span className="font-mono-data text-xs bg-[#1B4332] text-[#F5F0E8] px-2 py-1 rounded inline-block mb-4">{r.tag}</span>
              <p className="text-[#1A1A14] text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#1B4332] rounded p-8 md:p-12">
          <p className="font-mono-data text-[#8DC9A8] text-xs tracking-widest uppercase mb-4">Scaling opportunities</p>
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#F5F0E8] mb-8">
            A model ready to grow
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Network expansion', body: 'Recruit more women across Mukuru Kwa Njenga and neighboring settlements into a cooperative model.' },
              { title: 'Microfinance linkages', body: 'Partner with Women Enterprise Fund and other institutions to provide small business loans to graduates.' },
              { title: 'Peer-to-peer training', body: 'Empower the first four graduates to train new cohorts — multiplying impact at minimal cost.' },
              { title: 'Shopfront visibility', body: 'Expand branding and signage to establish TailorSmart as a recognized hub for tailoring and women\'s empowerment.' },
            ].map(o => (
              <div key={o.title} className="flex gap-4">
                <div className="w-1 bg-[#8DC9A8] rounded shrink-0 mt-1" />
                <div>
                  <h4 className="text-[#F5F0E8] font-semibold mb-1">{o.title}</h4>
                  <p className="text-[#8DC9A8] text-sm leading-relaxed">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Support() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('0748052811')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="support" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">Support</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Be part of the next chapter
          </h2>
          <p className="text-[#4A4438] text-lg leading-relaxed mb-8">
            TailorSmart is ready to grow. Your support directly funds sewing machines, training materials,
            and mentorship for the next cohort of women in Mukuru Kwa Njenga. Every contribution moves
            a family closer to financial security.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { amount: 'KES 5,000', impact: 'Covers fabric and tools for one participant' },
              { amount: 'KES 15,000', impact: 'Funds a sewing machine for one graduate' },
              { amount: 'KES 50,000', impact: 'Sponsors one complete training cohort' },
            ].map(t => (
              <div key={t.amount} className="flex items-center justify-between border border-[#CEC8BC] rounded px-5 py-3">
                <span className="font-display font-semibold text-[#1B4332]">{t.amount}</span>
                <span className="text-[#6B6455] text-sm">{t.impact}</span>
              </div>
            ))}
          </div>
          <p className="text-[#6B6455] text-sm">
            All contributions are received via M-Pesa and go directly to program costs.
          </p>
        </div>
        <div>
          <div className="bg-[#1B4332] rounded p-8 md:p-10 text-center">
            <p className="font-mono-data text-[#8DC9A8] text-xs uppercase tracking-wider mb-2">Donate via M-Pesa</p>
            <p className="font-display text-6xl font-semibold text-[#F5F0E8] tracking-wide my-6">
              0748 052 811
            </p>
            <button
              onClick={handleCopy}
              className="w-full bg-[#C75B3E] hover:bg-[#b04e34] text-[#F5F0E8] font-semibold py-3 rounded transition-colors text-sm"
            >
              {copied ? 'Copied!' : 'Copy number'}
            </button>
            <div className="mt-8 pt-8 border-t border-[#F5F0E8]/10 text-left space-y-3">
              <p className="font-mono-data text-[#8DC9A8] text-xs uppercase tracking-wider">Also reach us</p>
              <p className="text-[#D6E4DC] text-sm">TailorSmart Training Centre</p>
              <p className="text-[#8DC9A8] text-sm">Mukuru Kwa Njenga, Embakasi South</p>
              <p className="text-[#8DC9A8] text-sm">Nairobi County, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#CEC8BC] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-semibold text-[#1B4332]">TailorSmart</p>
          <p className="text-[#6B6455] text-xs mt-1">Women Empowerment Initiative · Nairobi, Kenya</p>
        </div>
        <p className="text-[#6B6455] text-xs text-center md:text-right">
          Contributing to SDGs 1, 5, 8 & 10 · Impact Report 2025–2026
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <ImpactStats />
        <Journey />
        <Stories />
        <Challenges />
        <Recommendations />
        <Support />
      </main>
      <Footer />
    </div>
  )
}
