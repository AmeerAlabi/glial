import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/**
 * Modal built on the native <dialog> element, which provides focus trapping,
 * Escape-to-close and an inert background. Clicking the backdrop also closes it.
 */
export default function Dialog({ open, onClose, title, children, size = 'md' }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const width = size === 'lg' ? 'max-w-4xl' : 'max-w-lg'

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-title"
      className={`w-[calc(100%-2rem)] ${width} rounded-lg p-0 text-ink backdrop:bg-navy/60`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
        <h2 id="dialog-title" className="t-h4">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded text-ink-muted hover:bg-surface hover:text-ink"
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="max-h-[75vh] overflow-y-auto px-6 py-5">{open && children}</div>
    </dialog>
  )
}
