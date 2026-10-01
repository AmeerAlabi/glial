import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import StatusBadge from './ui/StatusBadge'
import Paragraphs from './ui/Paragraphs'
import MediaGallery from './MediaGallery'

function LogoSlot({ logo, name, shortName }) {
  if (logo) {
    return (
      <div className="flex h-16 w-28 items-center justify-center">
        <img src={logo} alt={`${name} logo`} className="max-h-16 max-w-full object-contain" loading="lazy" />
      </div>
    )
  }
  // Placeholder until the partner's logo is supplied
  const initials = shortName || name
    .replace(/[^A-Za-z\s-]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-50 font-serif text-xl font-semibold text-indigo-700" aria-hidden="true">
      {initials}
    </div>
  )
}

/**
 * Reusable collaboration card. Active partners with a write-up or media can be
 * expanded in place to show the full report.
 */
export default function PartnerCard({ collab, compact = false }) {
  const [open, setOpen] = useState(false)
  const comingSoon = collab.status === 'coming-soon'
  const hasDetail = !compact && !comingSoon && (collab.body || collab.stats?.length || collab.media?.length)
  const detailId = `collab-${collab.slug}`

  return (
    <article id={collab.slug} className={`card flex flex-col ${comingSoon ? 'bg-surface' : ''}`}>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <LogoSlot logo={collab.logo} name={collab.name} shortName={collab.shortName} />
          <StatusBadge status={collab.status} />
        </div>
        <h3 className="t-h3 mt-6">
          {collab.name}
          {collab.shortName && <span className="ml-2 font-normal text-ink-subtle">({collab.shortName})</span>}
        </h3>
        {collab.partner && <p className="t-small mt-1">With {collab.partner}</p>}
        <p className={`mt-4 ${comingSoon ? 'text-ink-subtle' : 't-body'}`}>{collab.summary}</p>
        {collab.since && <p className="t-small mt-4">Since {collab.since}</p>}

        {hasDetail && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={detailId}
            className="link-arrow mt-6 self-start"
          >
            {open ? 'Hide full report' : 'Read the full report'}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
        )}
        {comingSoon && <p className="mt-6 text-[0.9375rem] font-semibold text-ink-subtle">Details coming soon</p>}
      </div>

      {hasDetail && open && (
        <div id={detailId} className="border-t border-line p-6 md:p-8">
          {collab.stats?.length > 0 && (
            <dl className="mb-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
              {collab.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-ink">{s.value}</dd>
                  <dd className="t-small mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
          <Paragraphs text={collab.body} />
          {collab.media?.length > 0 && <MediaGallery items={collab.media} className="mt-8" />}
          {collab.link && (
            <a href={collab.link} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6">
              Visit {collab.shortName || collab.name}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
