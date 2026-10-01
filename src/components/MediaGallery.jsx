import { useState } from 'react'
import Dialog from './ui/Dialog'

function youTubeId(url) {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
  return m?.[1]
}

function Video({ item }) {
  const src = item.video || item.src
  const id = youTubeId(src)
  return (
    <figure>
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-navy">
        {id ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={item.caption || item.alt || 'Video'}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        ) : (
          <video src={src} controls preload="metadata" className="h-full w-full" />
        )}
      </div>
      {item.caption && <figcaption className="t-small mt-2">{item.caption}</figcaption>}
    </figure>
  )
}

/**
 * Grid of photos and videos. Photos open full size in a dialog.
 * Items: { src, alt, caption } for photos, or { video } (YouTube link or video file URL) for videos.
 */
export default function MediaGallery({ items = [], className = '' }) {
  const [active, setActive] = useState(null)
  if (!items.length) return null

  const videos = items.filter((i) => i.video)
  const photos = items.filter((i) => !i.video && i.src)

  return (
    <div className={className}>
      {videos.map((v) => (
        <div key={v.video} className="mb-6">
          <Video item={v} />
        </div>
      ))}
      {photos.length > 0 && (
        <ul className={`grid gap-3 ${photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
          {photos.map((p, i) => (
            <li key={p.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-lg"
                aria-label={`View larger: ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-opacity duration-150 group-hover:opacity-90"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={active !== null} onClose={() => setActive(null)} title={photos[active]?.caption || 'Photo'} size="lg">
        {active !== null && (
          <figure>
            <img src={photos[active].src} alt={photos[active].alt} className="mx-auto max-h-[65vh] w-auto rounded" />
            {photos.length > 1 && (
              <div className="mt-4 flex items-center justify-between gap-4">
                <button type="button" className="btn-secondary btn-sm" onClick={() => setActive((active - 1 + photos.length) % photos.length)}>
                  Previous
                </button>
                <span className="t-small">
                  {active + 1} of {photos.length}
                </span>
                <button type="button" className="btn-secondary btn-sm" onClick={() => setActive((active + 1) % photos.length)}>
                  Next
                </button>
              </div>
            )}
          </figure>
        )}
      </Dialog>
    </div>
  )
}
