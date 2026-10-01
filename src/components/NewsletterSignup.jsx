import { useState } from 'react'
import site from '../content/site.json'
import { submitForm, formToObject } from '../lib/forms'
import { FormError } from './ui/FormStatus'

const substackUrl = site.newsletter.substackUrl?.replace(/\/$/, '')

/**
 * Site-wide newsletter signup. When a Substack URL is set in site.json it uses
 * Substack's official embed (Substack has no public signup API); otherwise
 * signups are sent to the team inbox via the site form handler.
 */
export default function NewsletterSignup({ tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <h2 className={`t-h3 ${dark ? 'text-white' : ''}`}>Get our newsletter</h2>
        <p className={`mt-2 ${dark ? 'text-white/75' : 't-body'}`}>
          Stories from our outreaches, new multilingual resources and upcoming events. Usually once a month.
        </p>
      </div>
      <div className="lg:col-span-7">{substackUrl ? <SubstackEmbed /> : <InboxForm dark={dark} />}</div>
    </div>
  )
}

function SubstackEmbed() {
  return (
    <div>
      <iframe
        src={`${substackUrl}/embed`}
        title="Subscribe to The Glial Initiative newsletter on Substack"
        className="h-[150px] w-full max-w-xl rounded-lg border border-line bg-white"
        loading="lazy"
      />
      <p className="mt-2 text-sm">
        <a href={substackUrl} target="_blank" rel="noopener noreferrer">
          Read past issues on Substack
        </a>
      </p>
    </div>
  )
}

function InboxForm({ dark }) {
  const [state, setState] = useState({ status: 'idle', error: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setState({ status: 'sending', error: '' })
    const form = e.currentTarget
    const result = await submitForm('Newsletter signup', formToObject(form))
    if (result.ok) {
      form.reset()
      setState({ status: 'done', error: '' })
    } else {
      setState({ status: 'idle', error: result.error })
    }
  }

  if (state.status === 'done') {
    return (
      <p role="status" className={`text-lg font-semibold ${dark ? 'text-white' : 'text-ink'}`}>
        Thank you for subscribing. You&rsquo;ll hear from us soon.
      </p>
    )
  }

  const labelClass = `mb-1.5 block text-[0.9375rem] font-semibold ${dark ? 'text-white' : 'text-ink'}`
  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_1.3fr_auto] sm:items-end">
      <div>
        <label htmlFor="nl-name" className={labelClass}>
          Name <span className={`font-normal ${dark ? 'text-white/60' : 'text-ink-subtle'}`}>(optional)</span>
        </label>
        <input id="nl-name" name="name" autoComplete="name" className="field-input" />
      </div>
      <div>
        <label htmlFor="nl-email" className={labelClass}>
          Email
        </label>
        <input id="nl-email" name="email" type="email" required autoComplete="email" className="field-input" />
      </div>
      <button type="submit" className={dark ? 'btn-on-dark' : 'btn-primary'} disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {state.error && (
        <div className="sm:col-span-3">
          <FormError>{state.error}</FormError>
        </div>
      )}
    </form>
  )
}
