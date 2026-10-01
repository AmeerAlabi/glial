import { useState } from 'react'
import { submitForm, formToObject } from '../lib/forms'
import { FormError, FormSuccess } from './ui/FormStatus'

/**
 * Wraps a set of fields with submit handling, error and success states.
 * `formName` labels the submission in the team inbox.
 */
export default function InterestForm({ formName, submitLabel, successTitle, successText, children }) {
  const [state, setState] = useState({ status: 'idle', error: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setState({ status: 'sending', error: '' })
    const form = e.currentTarget
    const result = await submitForm(formName, formToObject(form))
    if (result.ok) {
      form.reset()
      setState({ status: 'done', error: '' })
    } else {
      setState({ status: 'idle', error: result.error })
    }
  }

  if (state.status === 'done') {
    return (
      <FormSuccess title={successTitle} onReset={() => setState({ status: 'idle', error: '' })} resetLabel="Send another response">
        {successText}
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {children}
      <FormError>{state.error}</FormError>
      <button type="submit" className="btn-primary" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Sending…' : submitLabel}
      </button>
    </form>
  )
}
