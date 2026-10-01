import site from '../content/site.json'

/**
 * Sends a form to Formspree and reports whether it actually succeeded.
 * `formName` is added to the email subject so the team can tell forms apart.
 */
export async function submitForm(formName, data) {
  const body = { ...data, form: formName, _subject: `Website: ${formName}` }
  try {
    const res = await fetch(site.forms.formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.ok) return { ok: true }
    const json = await res.json().catch(() => null)
    const message = json?.errors?.map((e) => e.message).join(' ') || 'The form could not be sent.'
    return { ok: false, error: message }
  } catch {
    return { ok: false, error: 'We could not reach the server. Check your connection and try again.' }
  }
}

/** Reads a <form> element into a plain object. */
export function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries())
}
