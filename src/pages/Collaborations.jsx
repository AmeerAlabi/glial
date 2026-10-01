import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import data from '../content/collaborations.json'
import PageHeader from '../components/ui/PageHeader'
import PartnerCard from '../components/PartnerCard'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'coming-soon', label: 'Coming soon' },
]

export default function Collaborations() {
  usePageMeta('Our collaborations', 'The organisations and teams we work with to prevent neurotrauma and strengthen care across Africa.')
  const [filter, setFilter] = useState('all')

  const all = data.collaborations
  const shown = filter === 'all' ? all : all.filter((c) => c.status === filter)
  const count = (value) => (value === 'all' ? all.length : all.filter((c) => c.status === value).length)

  return (
    <>
      <PageHeader eyebrow="Collaborations" title="Our collaborations">
        We work with youth networks, technology teams and health organisations to extend our reach and build stronger
        neurotrauma systems across Africa.
      </PageHeader>

      <section className="section" aria-label="Collaborations">
        <div className="container-page">
          <div role="group" aria-label="Filter by status" className="mb-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className="min-h-[2.5rem] rounded-full border border-line px-4 text-[0.9375rem] font-semibold text-ink-muted hover:border-ink-subtle hover:text-ink aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
              >
                {f.label} <span className="font-normal opacity-75">({count(f.value)})</span>
              </button>
            ))}
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            {shown.map((c) => (
              <PartnerCard key={c.slug} collab={c} />
            ))}
          </div>

          <div className="mt-16 grid gap-6 rounded-lg border border-line bg-surface p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="t-h3">Work with us</h2>
              <p className="t-body mt-2 max-w-prose">
                We welcome collaborations with ministries of health, academic institutions, professional societies,
                youth organisations, patient advocacy groups and technology teams.
              </p>
            </div>
            <Link to="/get-involved#partner" className="btn-primary">
              Propose a collaboration
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
