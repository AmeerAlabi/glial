import { useId } from 'react'

/** Labelled form control. Pass `as="textarea"` or `as="select"` for other controls. */
export default function Field({ label, hint, as = 'input', optional, className = '', children, ...props }) {
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  const Control = as
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-subtle">(optional)</span>}
      </label>
      <Control id={id} aria-describedby={hintId} className="field-input" {...props}>
        {children}
      </Control>
      {hint && (
        <p id={hintId} className="field-hint">
          {hint}
        </p>
      )}
    </div>
  )
}
