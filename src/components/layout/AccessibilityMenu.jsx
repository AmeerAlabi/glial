import { useEffect, useRef, useState } from 'react'
import { Accessibility } from 'lucide-react'
import { A11Y_STORAGE_KEY, readA11yPrefs } from '../../lib/a11yPrefs'

const SIZES = [
  { value: 'normal', label: 'Default' },
  { value: 'large', label: 'Large' },
  { value: 'larger', label: 'Larger' },
]

/** Small menu for text size and contrast. Settings persist per browser. */
export default function AccessibilityMenu({ align = 'right' }) {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(readA11yPrefs)
  const ref = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.textSize = prefs.textSize || 'normal'
    root.dataset.contrast = prefs.contrast || 'normal'
    try {
      localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      /* storage unavailable: settings still apply for this visit */
    }
  }, [prefs])

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="inline-flex h-10 items-center gap-2 rounded px-2.5 text-[0.9375rem] font-semibold text-ink-muted hover:bg-surface hover:text-ink"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only xl:not-sr-only">Accessibility</span>
      </button>
      {open && (
        <div
          id="a11y-panel"
          className={`absolute top-12 z-50 w-72 rounded-lg border border-line bg-white p-5 shadow-[0_8px_24px_rgba(23,22,44,0.12)] ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          <fieldset>
            <legend className="mb-2 text-[0.9375rem] font-semibold">Text size</legend>
            <div className="grid grid-cols-3 gap-2">
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  aria-pressed={(prefs.textSize || 'normal') === s.value}
                  onClick={() => setPrefs((p) => ({ ...p, textSize: s.value }))}
                  className="min-h-[2.5rem] rounded border border-line text-sm font-semibold aria-pressed:border-teal-600 aria-pressed:bg-teal-50 aria-pressed:text-teal-700"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="mt-5 flex cursor-pointer items-center justify-between gap-3 text-[0.9375rem] font-semibold">
            High contrast
            <input
              type="checkbox"
              className="h-5 w-5 accent-teal-600"
              checked={prefs.contrast === 'high'}
              onChange={(e) => setPrefs((p) => ({ ...p, contrast: e.target.checked ? 'high' : 'normal' }))}
            />
          </label>
          <p className="mt-4 text-sm text-ink-subtle">These settings are saved on this device.</p>
        </div>
      )}
    </div>
  )
}
