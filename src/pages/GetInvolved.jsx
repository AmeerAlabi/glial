import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Field from '../components/ui/Field'
import InterestForm from '../components/InterestForm'

const PRIVACY_NOTE = (
  <p className="field-hint">
    We use your details only to respond to you. See our <Link to="/privacy">privacy notice</Link>.
  </p>
)

function Block({ id, eyebrow, title, intro, points, children, tinted }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section ${tinted ? 'bg-surface' : ''}`}>
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="t-eyebrow mb-3">{eyebrow}</p>
          <h2 id={`${id}-title`} className="t-h2">
            {title}
          </h2>
          <p className="t-body mt-4">{intro}</p>
          {points && (
            <ul className="mt-6 space-y-2.5 text-ink-muted">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card p-6 md:p-8 lg:col-span-6 lg:col-start-7">{children}</div>
      </div>
    </section>
  )
}

export default function GetInvolved() {
  usePageMeta('Get involved', 'Volunteer, translate health materials into your language, partner with us or donate to The Glial Initiative.')

  return (
    <>
      <PageHeader eyebrow="Get involved" title="Help us prevent brain injury and support recovery">
        Whether you are a student, clinician, translator, researcher or organisation, there is a way to contribute.
      </PageHeader>

      <nav aria-label="Ways to get involved" className="border-b border-line">
        <ul className="container-page grid gap-px sm:grid-cols-4">
          {[
            ['#volunteer', 'Volunteer'],
            ['#translate', 'Translate'],
            ['#partner', 'Partner with us'],
            ['/donate', 'Donate'],
          ].map(([href, label]) => (
            <li key={href}>
              {href.startsWith('#') ? (
                <a href={href} className="link-arrow py-5">
                  {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <Link to={href} className="link-arrow py-5">
                  {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <Block
        id="volunteer"
        eyebrow="Volunteer"
        title="Join our volunteers and student chapters"
        intro="Our work is powered by young people. Volunteers deliver community education, support prevention campaigns, collect field data and help run events."
        points={[
          'Community volunteers for outreaches and campaigns',
          'Student chapters and campus ambassadors',
          'Professional volunteers: clinicians, researchers, designers and educators',
        ]}
      >
        <InterestForm
          formName="Volunteer application"
          submitLabel="Send application"
          successTitle="Thank you for volunteering"
          successText="We've received your application. Our team will be in touch about upcoming opportunities."
        >
          <Field label="Full name" name="name" required autoComplete="name" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone or WhatsApp" name="phone" type="tel" optional autoComplete="tel" />
            <Field label="City and country" name="location" required />
          </div>
          <Field label="How would you like to help?" name="interest" as="select" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            <option>Community outreach</option>
            <option>Student chapter or campus ambassador</option>
            <option>Research and data</option>
            <option>Design, media and communications</option>
            <option>Clinical or professional expertise</option>
            <option>Something else</option>
          </Field>
          <Field label="Tell us a little about yourself" name="message" as="textarea" rows={4} optional />
          {PRIVACY_NOTE}
        </InterestForm>
      </Block>

      <Block
        id="translate"
        tinted
        eyebrow="Language Corps"
        title="Translate life-saving information into your language"
        intro="Our volunteer translators have already adapted our materials into more than 20 African languages. Our goal is 50+. If you are fluent in English and an African language, we would love your help."
        points={['Certificate of recognition', 'Networking with health professionals', 'Opportunities to join outreaches']}
      >
        <InterestForm
          formName="Translator application"
          submitLabel="Join the Language Corps"
          successTitle="Welcome to the Language Corps"
          successText="Thank you. We'll send you our translation guide and the next materials that need your language."
        >
          <Field label="Full name" name="name" required autoComplete="name" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Language(s) you can translate into" name="languages" required hint="For example: Yoruba, Tiv, Kikuyu" />
          <Field label="Country" name="country" required autoComplete="country-name" />
          <Field label="Relevant experience" name="experience" as="textarea" rows={3} optional />
          {PRIVACY_NOTE}
        </InterestForm>
      </Block>

      <Block
        id="partner"
        eyebrow="Partnerships"
        title="Partner with us"
        intro="We collaborate with ministries of health, academic institutions, professional societies, youth organisations, patient advocacy groups and technology teams on prevention, research, education and policy."
        points={['Joint outreaches and campaigns', 'Research and data collaborations', 'Technology pilots', 'Sponsorship of helmets and materials']}
      >
        <InterestForm
          formName="Partnership enquiry"
          submitLabel="Send enquiry"
          successTitle="Thank you for reaching out"
          successText="We've received your enquiry and will reply within a few working days."
        >
          <Field label="Full name" name="name" required autoComplete="name" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Organisation" name="organisation" required autoComplete="organization" />
          <Field label="What would you like to work on together?" name="message" as="textarea" rows={5} required />
          {PRIVACY_NOTE}
        </InterestForm>
      </Block>

      <section aria-labelledby="donate-title" className="section on-dark bg-navy text-white">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 id="donate-title" className="t-h2 !text-white">
              Fund the next outreach
            </h2>
            <p className="mt-3 max-w-prose text-lg text-white/80">
              Donations pay for helmets, printed and translated materials, and the logistics that get our volunteers into
              communities.
            </p>
          </div>
          <Link to="/donate" className="btn-on-dark">
            Donate
          </Link>
        </div>
      </section>
    </>
  )
}
