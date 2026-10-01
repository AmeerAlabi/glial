import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Users } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import { formatDate, parseDate, byDateDesc } from '../lib/dates'
import data from '../content/outreach.json'
import PageHeader from '../components/ui/PageHeader'
import Paragraphs from '../components/ui/Paragraphs'
import MediaGallery from '../components/MediaGallery'

function EntryDate({ entry }) {
  return (
    <>
      <p className="font-semibold text-ink">
        <time dateTime={entry.date}>{formatDate(entry.date, entry.datePrecision)}</time>
      </p>
      <p className="t-small mt-0.5">{entry.category}</p>
    </>
  )
}

function Entry({ entry }) {
  return (
    <li id={entry.slug} className="grid md:grid-cols-[11rem_1fr]">
      <div className="hidden pr-8 text-right md:block">
        <EntryDate entry={entry} />
      </div>
      <article className="relative border-l border-line pb-14 pl-8 md:pl-10">
        <span className="absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-teal-600 ring-1 ring-teal-600" aria-hidden="true" />
        <div className="mb-3 md:hidden">
          <EntryDate entry={entry} />
        </div>
        <h3 className="t-h3">{entry.title}</h3>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] text-ink-muted">
          <li className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-teal-600" aria-hidden="true" />
            {entry.location}
          </li>
          {entry.partners && (
            <li className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-teal-600" aria-hidden="true" />
              With {entry.partners}
            </li>
          )}
        </ul>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">{entry.summary}</p>
        <Paragraphs text={entry.body} className="prose-glial mt-4" />
        {entry.highlights?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.highlights.map((h) => (
              <li key={h} className="rounded-full bg-teal-50 px-3 py-1 text-[0.9375rem] font-semibold text-teal-700">
                {h}
              </li>
            ))}
          </ul>
        )}
        <MediaGallery items={entry.photos} className="mt-6 max-w-3xl" />
      </article>
    </li>
  )
}

export default function Outreach() {
  usePageMeta('Advocacy & outreach', 'Our community outreaches, campaigns and advocacy: CranioGuard Mission, COBES brain-health outreaches, World TBI Day and more.')

  const entries = useMemo(() => [...data.entries].sort(byDateDesc('date')), [])
  const years = useMemo(() => [...new Set(entries.map((e) => parseDate(e.date)?.getFullYear()).filter(Boolean))], [entries])
  const categories = useMemo(() => [...new Set(entries.map((e) => e.category).filter(Boolean))], [entries])
  const [year, setYear] = useState('all')
  const [category, setCategory] = useState('all')

  const shown = entries.filter(
    (e) => (year === 'all' || parseDate(e.date)?.getFullYear() === Number(year)) && (category === 'all' || e.category === category),
  )

  // Group by year for the timeline headings
  const groups = shown.reduce((acc, e) => {
    const y = parseDate(e.date)?.getFullYear() ?? 'Undated'
    ;(acc[y] ||= []).push(e)
    return acc
  }, {})

  return (
    <>
      <PageHeader eyebrow="Advocacy & outreach" title="Taking brain-health education to communities">
        From market squares in Ilorin to rural health sessions and online campaigns, here is the work we have done so
        far, with the people who made it happen.
      </PageHeader>

      <section className="section" aria-label="Outreach timeline">
        <div className="container-page">
          <div className="mb-12 flex flex-wrap items-end gap-4">
            <div>
              <label htmlFor="filter-year" className="field-label">
                Year
              </label>
              <select id="filter-year" value={year} onChange={(e) => setYear(e.target.value)} className="field-input w-40">
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filter-type" className="field-label">
                Type
              </label>
              <select id="filter-type" value={category} onChange={(e) => setCategory(e.target.value)} className="field-input w-56">
                <option value="all">All types</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <p className="t-small pb-3" aria-live="polite">
              Showing {shown.length} of {entries.length}
            </p>
          </div>

          {Object.entries(groups)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([y, list]) => (
              <div key={y}>
                <h2 className="t-h2 pb-8 md:ml-[11rem] md:border-l md:border-line md:pl-10">{y}</h2>
                <ol>
                  {list.map((e) => (
                    <Entry key={e.slug} entry={e} />
                  ))}
                </ol>
              </div>
            ))}

          {shown.length === 0 && <p className="t-body">No outreach matches these filters.</p>}

          <div className="mt-6 grid gap-6 rounded-lg bg-surface p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h2 className="t-h3">Bring an outreach to your community</h2>
              <p className="t-body mt-2 max-w-prose">
                We partner with schools, transport unions, health centres and community leaders. Tell us about your
                community and what you need.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
