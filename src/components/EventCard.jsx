import { useState } from 'react'
import { CalendarDays, Clock, MapPin, Video, ExternalLink } from 'lucide-react'
import { formatDate, formatTimeRange } from '../lib/dates'
import { submitForm, formToObject } from '../lib/forms'
import StatusBadge from './ui/StatusBadge'
import Dialog from './ui/Dialog'
import Field from './ui/Field'
import { FormError, FormSuccess } from './ui/FormStatus'

function RsvpForm({ event }) {
  const [state, setState] = useState({ status: 'idle', error: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setState({ status: 'sending', error: '' })
    const result = await submitForm('Event RSVP', { event: event.title, eventDate: event.start, ...formToObject(e.currentTarget) })
    setState(result.ok ? { status: 'done', error: '' } : { status: 'idle', error: result.error })
  }

  if (state.status === 'done') {
    return (
      <FormSuccess title="You're registered">
        We&rsquo;ve received your RSVP for {event.title}. We&rsquo;ll email you the details before the event.
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full name" name="name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Organisation or institution" name="organisation" optional autoComplete="organization" />
      <Field label="Country" name="country" optional autoComplete="country-name" />
      <FormError>{state.error}</FormError>
      <button type="submit" className="btn-primary w-full" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Sending…' : 'Confirm RSVP'}
      </button>
    </form>
  )
}

export default function EventCard({ event, upcoming }) {
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const date = formatDate(event.start, event.datePrecision)
  const time = formatTimeRange(event.start, event.end, event.timezone)
  const online = event.mode === 'online'

  return (
    <article className="card grid gap-6 p-6 md:grid-cols-[9rem_1fr] md:p-8">
      <div className="flex items-start gap-4 md:flex-col">
        <StatusBadge status={upcoming ? 'upcoming' : 'past'} />
        <p className="t-small font-semibold uppercase tracking-[0.06em]">{event.type}</p>
      </div>
      <div>
        <h3 className="t-h3">{event.title}</h3>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-ink-muted">
          <li className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-teal-600" aria-hidden="true" />
            <time dateTime={event.start}>{date}</time>
          </li>
          {time && (
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-600" aria-hidden="true" />
              {time}
            </li>
          )}
          <li className="flex items-center gap-2">
            {online ? <Video className="h-4 w-4 text-teal-600" aria-hidden="true" /> : <MapPin className="h-4 w-4 text-teal-600" aria-hidden="true" />}
            {event.location}
          </li>
        </ul>
        <p className="t-body mt-4">{event.summary}</p>
        {event.description && <p className="t-body mt-3">{event.description}</p>}
        {event.speakers && (
          <p className="t-small mt-4">
            <span className="font-semibold text-ink">Speakers: </span>
            {event.speakers}
          </p>
        )}

        {upcoming && (
          <div className="mt-6 flex flex-wrap gap-3">
            {event.registrationUrl ? (
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              event.rsvp && (
                <button type="button" className="btn-primary" onClick={() => setRsvpOpen(true)}>
                  RSVP
                </button>
              )
            )}
            {event.joinUrl && (
              <a href={event.joinUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Join link
              </a>
            )}
          </div>
        )}
      </div>

      {upcoming && event.rsvp && (
        <Dialog open={rsvpOpen} onClose={() => setRsvpOpen(false)} title={`RSVP: ${event.title}`}>
          <p className="t-small mb-5">
            {date}
            {time && `, ${time}`} &middot; {event.location}
          </p>
          <RsvpForm event={event} />
        </Dialog>
      )}
    </article>
  )
}
