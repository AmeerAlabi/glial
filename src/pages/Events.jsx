import { useMemo, useState } from 'react'
import { usePageMeta } from '../lib/usePageMeta'
import { isUpcoming, byDateAsc, byDateDesc } from '../lib/dates'
import data from '../content/events.json'
import PageHeader from '../components/ui/PageHeader'
import EventCard from '../components/EventCard'

export default function Events() {
  usePageMeta('Events', 'Upcoming webinars, community outreaches and campaigns from The Glial Initiative, plus our past events archive.')

  // Events move to the archive automatically once their date has passed
  const { upcoming, past } = useMemo(() => {
    const now = new Date()
    return {
      upcoming: data.events.filter((e) => isUpcoming(e, now)).sort(byDateAsc('start')),
      past: data.events.filter((e) => !isUpcoming(e, now)).sort(byDateDesc('start')),
    }
  }, [])
  const [tab, setTab] = useState(upcoming.length ? 'upcoming' : 'past')
  const list = tab === 'upcoming' ? upcoming : past

  const tabs = [
    { value: 'upcoming', label: 'Upcoming', count: upcoming.length },
    { value: 'past', label: 'Past events', count: past.length },
  ]

  return (
    <>
      <PageHeader eyebrow="Events" title="Webinars, outreaches and campaigns">
        Join us online or in your community. Upcoming events are open for registration; past events stay here as an
        archive.
      </PageHeader>

      <section className="section" aria-label="Events">
        <div className="container-page">
          <div role="tablist" aria-label="Event lists" className="mb-10 flex gap-8 border-b border-line">
            {tabs.map((t) => (
              <button
                key={t.value}
                type="button"
                role="tab"
                id={`tab-${t.value}`}
                aria-selected={tab === t.value}
                aria-controls="events-panel"
                onClick={() => setTab(t.value)}
                className="-mb-px border-b-[3px] border-transparent pb-3 text-lg font-semibold text-ink-muted hover:text-ink aria-selected:border-teal-400 aria-selected:text-ink"
              >
                {t.label} <span className="font-normal text-ink-subtle">({t.count})</span>
              </button>
            ))}
          </div>

          <div id="events-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
            {list.length ? (
              <div className="space-y-6">
                {list.map((e) => (
                  <EventCard key={e.slug} event={e} upcoming={tab === 'upcoming'} />
                ))}
              </div>
            ) : (
              <div className="card p-8 md:p-10">
                <h2 className="t-h3">{tab === 'upcoming' ? 'No events scheduled right now' : 'No past events yet'}</h2>
                <p className="t-body mt-2 max-w-prose">
                  We announce webinars, outreaches and campaigns in our newsletter first. Subscribe at the bottom of this page and
                  we&rsquo;ll let you know when registration opens.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  )
}
