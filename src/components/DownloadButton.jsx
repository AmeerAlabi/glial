import { useState } from 'react'
import { Download } from 'lucide-react'
import { submitForm, formToObject } from '../lib/forms'
import Dialog from './ui/Dialog'
import Field from './ui/Field'
import { FormError } from './ui/FormStatus'

const STORAGE_KEY = 'glial-resources-unlocked'

function isUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function startDownload(href, filename) {
  const a = document.createElement('a')
  a.href = href
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

/**
 * Download link for a resource. The first download asks for an email address
 * (with an optional newsletter opt-in); later downloads on the same device go
 * straight through.
 */
export default function DownloadButton({ href, filename, label = 'Download', resourceName, className = 'btn-primary' }) {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({ status: 'idle', error: '' })

  if (isUnlocked()) {
    return (
      <a href={href} download={filename} className={className}>
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </a>
    )
  }

  async function onSubmit(e) {
    e.preventDefault()
    setState({ status: 'sending', error: '' })
    const data = formToObject(e.currentTarget)
    const result = await submitForm('Resource download', {
      ...data,
      newsletter: data.newsletter ? 'Yes' : 'No',
      resource: resourceName,
    })
    if (!result.ok) {
      setState({ status: 'idle', error: result.error })
      return
    }
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* storage unavailable: they will be asked again next visit */
    }
    setState({ status: 'idle', error: '' })
    setOpen(false)
    startDownload(href, filename)
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Download our free resources">
        <p className="t-body mb-5">
          Our materials are free to download and share. Tell us where to reach you so we can let you know when new
          translations and resources are published.
        </p>
        <form onSubmit={onSubmit} className="space-y-5">
          <Field label="Name" name="name" optional autoComplete="name" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="How will you use this resource?" name="use" optional as="select" defaultValue="">
            <option value="">Choose one</option>
            <option>Personal or family use</option>
            <option>Community outreach or teaching</option>
            <option>Healthcare work</option>
            <option>Research</option>
            <option>Other</option>
          </Field>
          <label className="flex items-start gap-3 text-[0.9375rem]">
            <input type="checkbox" name="newsletter" className="mt-1 h-5 w-5 shrink-0 accent-teal-600" />
            <span>Also send me the Glial Initiative newsletter. You can unsubscribe at any time.</span>
          </label>
          <FormError>{state.error}</FormError>
          <button type="submit" className="btn-primary w-full" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? 'Preparing download…' : 'Continue to download'}
          </button>
        </form>
      </Dialog>
    </>
  )
}
