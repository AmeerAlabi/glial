import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { usePageMeta } from '../lib/usePageMeta'
import data from '../content/resources.json'
import Dialog from '../components/ui/Dialog'
import DownloadButton from '../components/DownloadButton'
import NotFound from './NotFound'

export default function ResourceTopic() {
  const { slug } = useParams()
  const topic = data.topics.find((t) => t.slug === slug)
  const [params, setParams] = useSearchParams()
  const [zoom, setZoom] = useState(false)
  usePageMeta(topic?.title, topic?.summary)

  if (!topic) return <NotFound />

  // The selected language is kept in the URL (?lang=yo) so it can be shared
  const current = topic.infographics.find((i) => i.code === params.get('lang')) ?? topic.infographics[0]
  const extension = current.file.split('.').pop()
  const filename = `glial-initiative-${topic.slug}-${current.language.toLowerCase().replace(/[^a-z]+/g, '-')}.${extension}`

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-14">
          <Link to="/resources" className="link-arrow text-[0.9375rem]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Resource hub
          </Link>
          <h1 className="t-h1 mt-5">{topic.title}</h1>
          <p className="t-lead mt-4 max-w-prose">{topic.description}</p>
        </div>
      </div>

      <section className="section" aria-label="Infographic">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <label htmlFor="language" className="field-label">
                Language
              </label>
              <select
                id="language"
                value={current.code}
                onChange={(e) => setParams({ lang: e.target.value }, { replace: true })}
                className="field-input"
              >
                {topic.infographics.map((i) => (
                  <option key={i.code} value={i.code}>
                    {i.language}
                  </option>
                ))}
              </select>
              <p className="field-hint">
                Available in {topic.infographics.length} {topic.infographics.length === 1 ? 'language' : 'languages'}.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <DownloadButton
                  href={current.file}
                  filename={filename}
                  label={`Download (${current.language})`}
                  resourceName={`${topic.title}, ${current.language}`}
                  className="btn-primary w-full"
                />
                <button type="button" className="btn-secondary w-full" onClick={() => setZoom(true)}>
                  <Maximize2 className="h-4 w-4" aria-hidden="true" /> View full size
                </button>
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <p className="t-small">
                  You are free to print and share these materials for non-commercial education. Please don&rsquo;t
                  alter them. If you spot a translation error,{' '}
                  <Link to="/contact">let us know</Link>.
                </p>
              </div>
            </div>
          </div>

          <figure className="lg:col-span-8">
            <img
              key={current.file}
              src={current.file}
              lang={current.code}
              alt={`${topic.title} infographic in ${current.language}`}
              className="mx-auto w-full max-w-2xl rounded-lg border border-line"
            />
            <figcaption className="t-small mt-3 text-center">
              {topic.title}, {current.language}
            </figcaption>
          </figure>
        </div>
      </section>

      <Dialog open={zoom} onClose={() => setZoom(false)} title={`${topic.title}, ${current.language}`} size="lg">
        <img src={current.file} alt={`${topic.title} infographic in ${current.language}`} className="w-full" />
      </Dialog>
    </>
  )
}
