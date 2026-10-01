import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Check, HardHat, Languages, Users } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import site from '../content/site.json'
import PageHeader from '../components/ui/PageHeader'

const USES = [
  { icon: HardHat, title: 'Helmets for riders', text: 'Free helmets for commercial riders who attend CranioGuard training.' },
  { icon: Languages, title: 'Translated materials', text: 'Printing infographics and placards in the languages communities speak.' },
  { icon: Users, title: 'Community outreaches', text: 'Transport, logistics and supplies that get volunteers into communities.' },
]

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-4 last:border-0">
      <div>
        <dt className="t-small">{label}</dt>
        <dd className="mt-0.5 text-xl font-semibold tracking-wide text-ink">{value}</dd>
      </div>
      <button type="button" onClick={copy} className="btn-secondary btn-sm shrink-0" aria-label={`Copy ${label.toLowerCase()}`}>
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  )
}

export default function Donate() {
  usePageMeta('Donate', 'Support The Glial Initiative: fund helmets, translated health materials and community outreaches across Africa.')
  const { bankName, accountName, accountNumber, note } = site.donation
  const hasBankDetails = bankName && accountName && accountNumber

  return (
    <>
      <PageHeader eyebrow="Donate" title="Your support prevents brain injuries">
        Every gift goes directly into prevention and education in the communities we serve.
      </PageHeader>

      <section className="section" aria-label="How to give">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="t-h2">Give by bank transfer</h2>
            {hasBankDetails ? (
              <>
                <p className="t-body mt-3">Transfer any amount to our account below.</p>
                <dl className="card mt-6 px-6">
                  <CopyRow label="Account number" value={accountNumber} />
                  <div className="border-b border-line py-4">
                    <dt className="t-small">Account name</dt>
                    <dd className="mt-0.5 text-lg font-semibold text-ink">{accountName}</dd>
                  </div>
                  <div className="py-4">
                    <dt className="t-small">Bank</dt>
                    <dd className="mt-0.5 text-lg font-semibold text-ink">{bankName}</dd>
                  </div>
                </dl>
                {note && (
                  <p className="t-small mt-4">
                    {note} <a href={`mailto:${site.email}?subject=Donation`}>{site.email}</a>
                  </p>
                )}
              </>
            ) : (
              <div className="card mt-6 p-6">
                <p className="t-body">
                  Our donation account details are being finalised. To give now, or to discuss a larger gift or
                  sponsorship, email us at <a href={`mailto:${site.email}?subject=Donation`}>{site.email}</a> and we
                  will reply with the details.
                </p>
              </div>
            )}

            <div className="mt-10 border-t border-line pt-8">
              <h3 className="t-h4">Sponsor a programme</h3>
              <p className="t-body mt-2">
                Organisations can sponsor a CranioGuard outreach, a set of helmets or the translation of materials into a
                new language.
              </p>
              <Link to="/get-involved#partner" className="link-arrow mt-4">
                Talk to us about sponsorship
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="t-h4">What your gift supports</h2>
            <ul className="mt-6 space-y-6">
              {USES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-teal-50">
                    <Icon className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="t-small mt-1">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
