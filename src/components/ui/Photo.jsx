import { ImageIcon } from 'lucide-react'

const RATIOS = {
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '16/9': 'aspect-video',
  '4/5': 'aspect-[4/5]',
}

/**
 * Image with a fixed aspect ratio (no layout shift). When `src` is empty it
 * shows a neutral placeholder so cards keep their shape until assets arrive.
 */
export default function Photo({ src, alt = '', ratio = '3/2', className = '', label, eager = false }) {
  const box = `${RATIOS[ratio] ?? ratio} w-full overflow-hidden bg-surface ${className}`
  if (!src) {
    return (
      <div className={`${box} flex items-center justify-center`} role={label ? 'img' : undefined} aria-label={label}>
        <div className="flex flex-col items-center gap-2 text-ink-subtle">
          <ImageIcon className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
          {label && <span className="text-sm">{label}</span>}
        </div>
      </div>
    )
  }
  return (
    <div className={box}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
