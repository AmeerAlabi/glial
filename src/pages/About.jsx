import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { VISION, MISSION, VALUES, GOALS } from '../data/strategy'
import team from '../content/team.json'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import TeamCard from '../components/TeamCard'

const SUBNAV = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'vision-mission', label: 'Vision & mission' },
  { id: 'strategy', label: 'Strategy 2026–2030' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'governance', label: 'Governance' },
]

const BUILDING_BLOCKS = [
  { title: 'Leadership & governance', items: 'Policy advocacy, multi-sector partnerships, organisational governance' },
  { title: 'Health workforce', items: 'First responder training, youth leadership, capacity building' },
  { title: 'Health information systems', items: 'Roadside Injury Registry, community surveillance, research database' },
  { title: 'Service delivery', items: 'Survivor support, community outreach, referral strengthening' },
  { title: 'Medical products & technologies', items: 'Helmet initiatives, digital innovations, AI-enabled screening tools' },
  { title: 'Health financing', items: 'Resource mobilisation, grant-funded interventions, advocacy for equitable rehabilitation' },
]

const GOVERNANCE = [
  {
    title: 'Board of Trustees',
    text: 'Our highest governing body. It sets strategic direction, safeguards the mission and values, ensures legal, ethical and financial accountability, approves major policies, and appoints and oversees the Executive Director.',
  },
  {
    title: 'Advisory Board',
    text: 'Provides technical expertise in neurotrauma, public health, research, innovation and governance. It reviews major projects, mentors the Executive Team and helps build partnerships.',
  },
  {
    title: 'Executive Management Team',
    text: 'The Executive Director, Deputy Executive Director, Executive Secretary and Chief Financial Officer lead day-to-day operations and report to the Board.',
  },
  {
    title: 'Departments',
    text: 'Programmes (Research & Academic, Public Health & Community Outreach, Training & Capacity Building, Innovation & Development), Communications & Media, Administration, Finance & Resource Mobilisation, and Monitoring, Evaluation & Learning.',
  },
  {
    title: 'Volunteers & chapters',
    text: 'Student chapters and campus ambassadors, community volunteers, and a professional volunteer network of clinicians, researchers, designers and educators.',
  },
]

export default function About() {
  usePageMeta('About us', 'Who we are: a youth-led NGO reducing the burden of neurotrauma across Africa. Our vision, mission, strategy for 2026–2030, leadership and governance.')

  const executive = team.members.filter((m) => m.group === 'executive')
  const leads = team.members.filter((m) => m.group === 'leads')
  const members = team.members.filter((m) => m.group === 'team')

  return (
    <>
      <PageHeader eyebrow="About us" title="A youth-led organisation working to end preventable brain injury in Africa">
        We combine research, culturally responsive education and community action to prevent neurotrauma, support
        survivors and strengthen the health systems that care for them.
      </PageHeader>

      <nav aria-label="On this page" className="sticky top-[4.5rem] z-30 border-b border-line bg-white">
        <ul className="container-page flex gap-6 overflow-x-auto py-3 text-[0.9375rem] font-semibold">
          {SUBNAV.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="text-ink-muted no-underline hover:text-ink hover:underline">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="who-we-are" aria-labelledby="who-title" className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="t-eyebrow mb-3">Who we are</p>
            <h2 id="who-title" className="t-h2">
              Born out of mission:BRAIN, built for Africa
            </h2>
          </div>
          <div className="prose-glial lg:col-span-6 lg:col-start-7">
            <p>
              The Glial Initiative (TGI) is a youth-led, non-governmental organisation dedicated to reducing the burden of
              neurotrauma in Africa through prevention, education, research, innovation, advocacy and health systems
              strengthening.
            </p>
            <p>
              We grew out of the work of <strong>mission:BRAIN University of Ilorin</strong>, the first Nigerian
              chapter of the mission:BRAIN Foundation, and were founded by medical students Mubarak Jolayemi Mustapha and
              Adedoyin James to address one of Africa&rsquo;s most neglected public health challenges: traumatic brain
              injury (TBI).
            </p>
            <p>
              Neurotrauma extends far beyond acute care, so we take a whole-system approach that spans prevention,
              emergency response, rehabilitation, research, policy and innovation.
            </p>
          </div>
        </div>
      </section>

      <section id="vision-mission" aria-labelledby="vm-title" className="section bg-surface">
        <div className="container-page">
          <h2 id="vm-title" className="sr-only">
            Vision and mission
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 md:p-10">
              <p className="t-eyebrow mb-4">Our vision</p>
              <p className="font-serif text-2xl leading-snug text-ink md:text-[1.75rem]">{VISION}</p>
            </div>
            <div className="card p-8 md:p-10">
              <p className="t-eyebrow mb-4">Our mission</p>
              <p className="font-serif text-2xl leading-snug text-ink md:text-[1.75rem]">{MISSION}</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="t-h4">Our values</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {VALUES.map((v) => (
                <li key={v} className="rounded border border-line bg-white px-4 py-3 font-semibold text-ink">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="strategy" aria-labelledby="strategy-title" className="section">
        <div className="container-page">
          <SectionHeader id="strategy-title" eyebrow="Strategic framework 2026–2030" title="Five goals for the next five years">
            Our strategy is organised around five goals and seven programme pillars. See how each pillar works on the{' '}
            <Link to="/our-work">Our work</Link> page.
          </SectionHeader>
          <ol className="divide-y divide-line border-y border-line">
            {GOALS.map((g, i) => (
              <li key={g.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                <p className="font-serif text-3xl font-semibold text-teal-600 md:col-span-1">{String(i + 1).padStart(2, '0')}</p>
                <div className="md:col-span-5">
                  <h3 className="t-h3">{g.title}</h3>
                  <p className="t-body mt-2">{g.text}</p>
                </div>
                <ul className="space-y-2 text-[0.9875rem] text-ink-muted md:col-span-6">
                  {g.objectives.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <h3 className="t-h3">Aligned with the WHO health system building blocks</h3>
            <p className="t-body mt-2 max-w-prose">Our work contributes to all six building blocks of a strong health system.</p>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {BUILDING_BLOCKS.map((b) => (
                <li key={b.title} className="bg-white p-6">
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="t-small mt-2">{b.items}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="leadership" aria-labelledby="leadership-title" className="section bg-surface">
        <div className="container-page">
          <SectionHeader id="leadership-title" eyebrow="Leadership" title="The people leading our work">
            Our commitment: prevent, empower, advocate.
          </SectionHeader>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {executive.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </ul>

          {leads.length > 0 && (
            <div className="mt-16">
              <h3 className="t-h3">Department and unit leads</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {leads.map((m) => (
                  <li key={m.name} className="border-t border-line pt-4">
                    <p className="font-semibold text-ink">{m.name}</p>
                    <p className="t-small">{m.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {members.length > 0 && (
            <div className="mt-16">
              <h3 className="t-h3">Team</h3>
              <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {members.map((m) => (
                  <TeamCard key={m.name} member={m} size="sm" />
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section id="governance" aria-labelledby="governance-title" className="section">
        <div className="container-page">
          <SectionHeader id="governance-title" eyebrow="Governance" title="How we are organised">
            Every department and programme contributes to at least one of our three pillars: prevent, empower and
            advocate.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GOVERNANCE.map((g) => (
              <div key={g.title} className="card p-6">
                <h3 className="t-h4">{g.title}</h3>
                <p className="t-body mt-2 text-base">{g.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/get-involved" className="btn-primary">
              Join our team
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
