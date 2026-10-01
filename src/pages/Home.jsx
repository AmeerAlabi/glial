import { Link } from 'react-router-dom'
import { ArrowRight, Check, HandHeart, Languages, Users } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { formatDate, byDateDesc, isUpcoming, byDateAsc } from '../lib/dates'
import { PROGRAMMES, PILLARS_SHORT, IMPACT } from '../data/strategy'
import collaborations from '../content/collaborations.json'
import outreach from '../content/outreach.json'
import events from '../content/events.json'
import resources from '../content/resources.json'
import SectionHeader from '../components/ui/SectionHeader'
import PartnerCard from '../components/PartnerCard'

const SUPPORTERS = [
  { name: 'mission:BRAIN, University of Ilorin', logo: '/images/partners/mission-brain-unilorin.png' },
  { name: 'Africa CDC', logo: '/images/partners/africa-cdc.png' },
  { name: 'Kei Strong Foundation', logo: '/images/partners/kei-strong-foundation.png' },
]

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="t-eyebrow mb-5">Youth-led &middot; Pan-African &middot; Evidence-based</p>
          <h1 className="t-display">Advancing neurotrauma prevention, care and recovery across Africa</h1>
          <p className="t-lead mt-6 max-w-xl">
            The Glial Initiative is a youth-led NGO reducing the burden of traumatic brain injury through prevention,
            multilingual education, research, survivor support and advocacy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/our-work" className="btn-primary">
              Explore our work
            </Link>
            <Link to="/get-involved" className="btn-secondary">
              Get involved
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-surface">
            <img
              src="/images/outreach/cgm-1-group.jpg"
              alt="Glial Initiative volunteers and commercial riders holding road-safety placards on a street in Ilorin"
              width="1800"
              height="1350"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="t-small mt-3">Volunteers and riders at CranioGuard Mission 1.0, Ilorin.</figcaption>
        </figure>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section aria-labelledby="impact-title" className="section-tight">
      <div className="container-page">
        <h2 id="impact-title" className="sr-only">
          Our impact so far
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {IMPACT.map((item) => (
            <div key={item.label} className="border-l-[3px] border-teal-400 pl-5">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-serif text-4xl font-semibold text-ink md:text-5xl">{item.value}</dd>
              <dd className="t-small mt-2 max-w-[16rem]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section aria-labelledby="why-title" className="section bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="t-eyebrow mb-3">Why it matters</p>
          <h2 id="why-title" className="t-h2">
            Traumatic brain injury is one of Africa&rsquo;s most neglected public health challenges
          </h2>
        </div>
        <div className="prose-glial lg:col-span-6 lg:col-start-7">
          <p>
            Road traffic collisions are the leading cause of traumatic brain injury in Africa. Most of these injuries
            are preventable, yet many communities have little access to prevention education, emergency care or
            rehabilitation, and health information is rarely available in the languages people speak.
          </p>
          <p>
            Neurotrauma does not end when emergency care does. We take a systems approach that spans prevention,
            emergency response, rehabilitation, research, policy and innovation.
          </p>
          <ul className="!mt-8 !list-none space-y-4 !pl-0">
            {PILLARS_SHORT.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-navy">
                  <Check className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
                </span>
                <span>
                  <strong>{p.title}.</strong> {p.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Programmes() {
  return (
    <section aria-labelledby="work-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="work-title"
          eyebrow="Our work"
          title="Seven programmes, one goal: fewer brain injuries and better recovery"
          action={
            <Link to="/our-work" className="link-arrow">
              All programmes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.slice(0, 6).map(({ id, name, pillar, summary, icon: Icon }) => (
            <li key={id} className="bg-white">
              <Link to={`/our-work#${id}`} className="group flex h-full flex-col p-6 text-ink no-underline hover:bg-surface md:p-8">
                <Icon className="h-7 w-7 text-teal-600" aria-hidden="true" strokeWidth={1.75} />
                <p className="t-small mt-5">{pillar}</p>
                <h3 className="t-h4 mt-1 group-hover:underline group-hover:underline-offset-4">{name}</h3>
                <p className="t-body mt-3 text-base">{summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Spotlight() {
  return (
    <section aria-labelledby="spotlight-title" className="section on-dark bg-navy text-white">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <figure className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/images/outreach/cgm-1-helmet-fitting.jpg"
              alt="A volunteer helps a man try on a motorcycle helmet at a busy market"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </figure>
        <div className="lg:col-span-6">
          <p className="t-eyebrow mb-3 !text-teal-400">Flagship programme</p>
          <h2 id="spotlight-title" className="t-h2 !text-white">
            CranioGuard Mission
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Commercial motorcycle riders and their passengers are among the road users most at risk of head injury.
            CranioGuard trains riders on safe riding and head protection in their own languages, and removes the cost
            barrier by giving out free helmets.
          </p>
          <ul className="mt-6 space-y-2.5 text-white/85">
            <li className="flex gap-3"><span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />80+ riders trained and given helmets in Ilorin (January 2024)</li>
            <li className="flex gap-3"><span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />Expanded to six locations across Kwara State (June 2025)</li>
            <li className="flex gap-3"><span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />Goal: 1,000 non-medical first responders trained by 2027</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/our-work#cranioguard" className="btn-on-dark">
              About CranioGuard
            </Link>
            <Link to="/outreach" className="btn-outline-on-dark">
              See our outreach
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Collaborations() {
  return (
    <section aria-labelledby="collab-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="collab-title"
          eyebrow="Collaborations"
          title="Working with partners to go further"
          action={
            <Link to="/collaborations" className="link-arrow">
              All collaborations <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {collaborations.collaborations.slice(0, 3).map((c) => (
            <PartnerCard key={c.slug} collab={c} compact />
          ))}
        </div>
      </div>
    </section>
  )
}

function Latest() {
  const recent = [...outreach.entries].sort(byDateDesc('date')).slice(0, 3)
  const upcoming = events.events.filter((e) => isUpcoming(e)).sort(byDateAsc('start')).slice(0, 2)
  return (
    <section aria-labelledby="latest-title" className="section bg-surface">
      <div className="container-page">
        <SectionHeader id="latest-title" eyebrow="From the field" title="Recent outreach and events" />
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="t-h4">Advocacy &amp; outreach</h3>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {recent.map((entry) => (
                <li key={entry.slug}>
                  <Link to={`/outreach#${entry.slug}`} className="group grid gap-1 py-5 text-ink no-underline sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <span className="t-small">{formatDate(entry.date, entry.datePrecision)}</span>
                    <span>
                      <span className="block font-semibold group-hover:underline group-hover:underline-offset-4">{entry.title}</span>
                      <span className="t-small mt-1 block">{entry.location}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link to="/outreach" className="link-arrow mt-6">
              Full outreach timeline <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="t-h4">Upcoming events</h3>
            {upcoming.length ? (
              <ul className="mt-4 space-y-4">
                {upcoming.map((e) => (
                  <li key={e.slug} className="card p-5">
                    <p className="t-small">{formatDate(e.start, e.datePrecision)}</p>
                    <p className="mt-1 font-semibold">{e.title}</p>
                    <p className="t-small mt-1">{e.location}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="card mt-4 p-5">
                <p className="t-body">No events are scheduled right now. Subscribe to our newsletter to hear about the next one first.</p>
              </div>
            )}
            <Link to="/events" className="link-arrow mt-6">
              Events and archive <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResourceCta() {
  const languages = resources.topics.find((t) => t.slug === 'tbi')?.infographics.map((i) => i.language) ?? []
  return (
    <section aria-labelledby="resources-title" className="section">
      <div className="container-page">
        <div className="grid gap-10 rounded-lg bg-indigo-50 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-3 !text-indigo-700">Resource hub</p>
            <h2 id="resources-title" className="t-h2">
              Brain-health education in the languages people speak
            </h2>
            <p className="t-body mt-4 max-w-prose">
              Free infographics on traumatic brain injury and Shaken Baby Syndrome, translated by our Language Corps
              volunteers. Download them, print them and share them in your community.
            </p>
            <Link to="/resources" className="btn-primary mt-8">
              Browse resources
            </Link>
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-5" aria-label="Available languages">
            {languages.map((l) => (
              <li key={l} className="rounded-full border border-indigo-600/25 bg-white px-3.5 py-1.5 text-[0.9375rem] font-semibold text-indigo-700">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const WAYS = [
  { icon: Users, title: 'Volunteer', text: 'Join outreaches, campaigns and research as a student, clinician or community volunteer.', to: '/get-involved#volunteer', cta: 'Volunteer with us' },
  { icon: Languages, title: 'Translate', text: 'Help us reach 50+ African languages by joining the Language Corps.', to: '/get-involved#translate', cta: 'Join the Language Corps' },
  { icon: HandHeart, title: 'Donate', text: 'Fund helmets, translated materials and community outreaches.', to: '/donate', cta: 'Support our work' },
]

function GetInvolved() {
  return (
    <section aria-labelledby="involved-title" className="section border-t border-line">
      <div className="container-page">
        <SectionHeader id="involved-title" eyebrow="Get involved" title="There is a place for you in this work" />
        <div className="grid gap-6 md:grid-cols-3">
          {WAYS.map(({ icon: Icon, title, text, to, cta }) => (
            <div key={title} className="card flex flex-col p-6 md:p-8">
              <Icon className="h-7 w-7 text-teal-600" aria-hidden="true" strokeWidth={1.75} />
              <h3 className="t-h4 mt-5">{title}</h3>
              <p className="t-body mt-2 flex-1 text-base">{text}</p>
              <Link to={to} className="link-arrow mt-6">
                {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Supporters() {
  return (
    <section aria-labelledby="supporters-title" className="section-tight border-t border-line">
      <div className="container-page">
        <h2 id="supporters-title" className="t-small text-center font-semibold uppercase tracking-[0.08em]">
          Organisations we have worked with
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {SUPPORTERS.map((s) => (
            <li key={s.name}>
              <img src={s.logo} alt={s.name} loading="lazy" className="h-16 w-auto object-contain md:h-20" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta(null)
  return (
    <>
      <Hero />
      <Impact />
      <WhyItMatters />
      <Programmes />
      <Spotlight />
      <Collaborations />
      <Latest />
      <ResourceCta />
      <GetInvolved />
      <Supporters />
    </>
  )
}
