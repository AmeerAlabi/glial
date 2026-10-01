import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { PROGRAMMES } from '../data/strategy'
import PageHeader from '../components/ui/PageHeader'

// Cross-links from a programme to the related part of the site
const RELATED = {
  cranioguard: { to: '/outreach', label: 'CranioGuard outreaches' },
  'content-studio': { to: '/resources', label: 'Browse the resource hub' },
  'language-corps': { to: '/get-involved#translate', label: 'Become a translator' },
  innovation: { to: '/collaborations#lucid', label: 'Our Lucid collaboration' },
  research: { to: '/get-involved#partner', label: 'Partner on research' },
  policy: { to: '/collaborations', label: 'Our collaborations' },
  'support-network': { to: '/contact', label: 'Get in touch' },
}

export default function OurWork() {
  usePageMeta('Our work', 'Seven programme pillars: CranioGuard Mission, the Glial Research Lab, Content Studio, Language Corps, Support Network, innovation and policy.')

  return (
    <>
      <PageHeader eyebrow="Our work" title="Seven pillars across prevention, care and recovery">
        Our programmes cover the whole journey of neurotrauma, from stopping injuries before they happen to supporting
        survivors and changing the systems around them.
      </PageHeader>

      <nav aria-label="Programmes" className="border-b border-line">
        <ul className="container-page flex flex-wrap gap-x-6 gap-y-2 py-5 text-[0.9375rem] font-semibold">
          {PROGRAMMES.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="no-underline hover:underline">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page">
        {PROGRAMMES.map((p, i) => {
          const Icon = p.icon
          const related = RELATED[p.id]
          return (
            <section
              key={p.id}
              id={p.id}
              aria-labelledby={`${p.id}-title`}
              className={`grid gap-10 py-14 md:py-20 lg:grid-cols-12 ${i > 0 ? 'border-t border-line' : ''}`}
            >
              <div className="lg:col-span-5">
                <p className="t-small font-semibold">
                  {String(i + 1).padStart(2, '0')} &middot; {p.pillar}
                </p>
                <h2 id={`${p.id}-title`} className="t-h2 mt-3 flex items-center gap-3">
                  <Icon className="h-8 w-8 shrink-0 text-teal-600" aria-hidden="true" strokeWidth={1.75} />
                  {p.name}
                </h2>
                <p className="t-lead mt-5">{p.summary}</p>
                {related && (
                  <Link to={related.to} className="link-arrow mt-6">
                    {related.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                {p.image && (
                  <div className="mb-8 aspect-[3/2] overflow-hidden rounded-lg">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                )}
                <h3 className="t-small font-semibold uppercase tracking-[0.08em]">What this includes</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {p.activities.map((a) => (
                    <li key={a} className="rounded border border-line px-4 py-3 text-ink">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
