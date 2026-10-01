import { CheckCircle2, AlertCircle } from 'lucide-react'

/** Success panel shown in place of a form once it has been sent. */
export function FormSuccess({ title = 'Thank you', children, onReset, resetLabel = 'Send another' }) {
  return (
    <div role="status" className="rounded-lg border border-teal-600/30 bg-teal-50 p-6">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-teal-600" aria-hidden="true" />
        <div>
          <p className="t-h4">{title}</p>
          <div className="t-body mt-1">{children}</div>
          {onReset && (
            <button type="button" onClick={onReset} className="mt-4 font-semibold text-teal-600 underline underline-offset-[3px] hover:text-teal-700">
              {resetLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/** Inline error message for a failed submission. */
export function FormError({ children }) {
  if (!children) return null
  return (
    <div role="alert" className="flex items-start gap-2 rounded border border-red-700/30 bg-red-50 p-3 text-[0.9375rem] text-red-800">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>{children}</p>
    </div>
  )
}
