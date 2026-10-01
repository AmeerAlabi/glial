// Content from the Strategic Framework (2026–2030). It changes rarely, so it
// lives in code rather than the CMS.
import { HardHat, FlaskConical, Clapperboard, Languages, HeartHandshake, Cpu, Landmark } from 'lucide-react'

export const VISION =
  'An Africa where every person is protected from preventable neurotrauma and every survivor has access to timely, equitable and dignified care, regardless of where they live or their ability to pay.'

export const MISSION =
  'To reduce the burden of neurotrauma across Africa through youth-led advocacy, culturally responsive education, research, innovation and partnerships that strengthen health systems, empower communities and drive evidence-based policy.'

export const VALUES = [
  'Excellence',
  'Equity',
  'Innovation',
  'Collaboration',
  'Evidence-based action',
  'Integrity',
  'Compassion',
  'Youth leadership',
]

export const PILLARS_SHORT = [
  { title: 'Prevent', text: 'Reducing the incidence of neurotrauma through education, prevention and community engagement.' },
  { title: 'Empower', text: 'Building the capacity of individuals, communities, survivors and young leaders through knowledge, skills and support.' },
  { title: 'Advocate', text: 'Driving sustainable change through research, partnerships, innovation, policy engagement and health systems strengthening.' },
]

export const PROGRAMMES = [
  {
    id: 'cranioguard',
    pillar: 'Prevention & community engagement',
    name: 'CranioGuard Mission',
    icon: HardHat,
    summary: 'Our flagship prevention programme, reducing road traffic-related brain injury among commercial riders and their communities.',
    activities: ['Helmet promotion and distribution', 'Community outreaches', 'School campaigns', 'Road safety advocacy', 'First responder education'],
    image: '/images/outreach/cgm-1-helmet-fitting.jpg',
    imageAlt: 'A volunteer helps a man try on a motorcycle helmet at a busy market',
  },
  {
    id: 'research',
    pillar: 'Research & evidence generation',
    name: 'The Glial Research Lab',
    icon: FlaskConical,
    summary: 'Locally relevant evidence on brain injury in Africa. Every outreach is also an opportunity for ethical data collection and continuous improvement.',
    activities: ['TBI epidemiology', 'Helmet utilisation', 'Injury surveillance', 'Health systems research', 'Public health implementation', 'Community perception studies'],
  },
  {
    id: 'content-studio',
    pillar: 'Education & knowledge translation',
    name: 'The Glial Content Studio',
    icon: Clapperboard,
    summary: 'A dedicated platform for clear, accurate and engaging brain-health education.',
    activities: ['Infographics', 'Short educational videos', 'Animations', 'Patient education resources', 'Educational documentaries', 'Social media campaigns'],
  },
  {
    id: 'language-corps',
    pillar: 'African language initiative',
    name: 'Language Corps',
    icon: Languages,
    summary: 'A volunteer network translating neurotrauma resources into indigenous African languages, removing language barriers to health information.',
    activities: ['20+ African languages so far', 'Community-reviewed translations', 'Materials for low-literacy audiences'],
  },
  {
    id: 'support-network',
    pillar: 'Survivor support & rehabilitation',
    name: 'The Glial Support Network',
    icon: HeartHandshake,
    summary: 'Improving quality of life after neurotrauma through survivor support and rehabilitation advocacy.',
    activities: ['Peer-support groups', 'Caregiver education', 'Mental health support', 'Rehabilitation navigation', 'Vocational reintegration pathways'],
  },
  {
    id: 'innovation',
    pillar: 'Innovation & digital health',
    name: 'Innovation & Digital Health',
    icon: Cpu,
    summary: 'Scalable, low-cost technology for prevention, early recognition and care.',
    activities: ['AI-assisted neurotrauma screening tools', 'Digital education platforms', 'Community reporting systems', 'Low-cost safety innovations', 'Mobile health applications'],
  },
  {
    id: 'policy',
    pillar: 'Policy & health systems strengthening',
    name: 'Policy & Health Systems',
    icon: Landmark,
    summary: 'Working with governments, professional societies, civil society and international agencies to strengthen neurotrauma systems.',
    activities: ['Policy briefs', 'Technical consultations', 'Stakeholder dialogues', 'National advocacy campaigns', 'Capacity building'],
  },
]

export const GOALS = [
  {
    title: 'Prevent neurotrauma before it happens',
    text: 'Reduce preventable traumatic brain injuries through education, road safety advocacy and community engagement.',
    objectives: [
      'Train over 1,000 non-medical first responders (commercial riders, transport workers, teachers, security personnel, community volunteers) by 2027',
      'Scale CranioGuard to multiple African countries',
      'Promote helmet use and injury prevention policies',
      'Develop culturally adapted educational materials',
    ],
  },
  {
    title: 'Democratise neurotrauma education',
    text: 'Make sure life-saving neurotrauma education reaches every community, regardless of language or literacy.',
    objectives: [
      "Build Africa's largest open-access neurotrauma education repository",
      'Translate educational materials into 50+ African languages',
      'Produce multilingual infographics, animations, podcasts and documentaries',
      'Train community educators',
    ],
  },
  {
    title: 'Strengthen survivor recovery',
    text: 'Improve quality of life after neurotrauma through rehabilitation advocacy and survivor support.',
    objectives: [
      'Establish survivor support groups',
      'Develop caregiver education programmes',
      'Connect survivors with vocational rehabilitation services',
      'Advocate for equitable rehabilitation access',
    ],
  },
  {
    title: 'Generate evidence for better policy',
    text: 'Produce locally relevant evidence that informs national and continental neurotrauma policy.',
    objectives: [
      'Establish a Roadside Injury Registry, beginning in Kwara State',
      'Conduct helmet compliance studies',
      'Publish annual Neurotrauma Reports',
      'Support student-led neurotrauma research and publish in peer-reviewed journals',
    ],
  },
  {
    title: 'Strengthen neurotrauma health systems',
    text: 'Support stronger trauma systems through partnerships, innovation and policy engagement.',
    objectives: [
      'Produce policy briefs for governments',
      'Advocate for improved trauma systems',
      'Strengthen collaborations with ministries of health',
      'Engage in regional and global policy discussions, including the World Health Assembly',
    ],
  },
]

// Headline figures. The first three come from the Activity Recap; the
// World Epilepsy Day figure comes from the previous version of the site.
export const IMPACT = [
  { value: '20+', label: 'African languages our TBI materials have been translated into' },
  { value: '80+', label: 'commercial riders trained and given free helmets in CranioGuard 1.0' },
  { value: '11', label: 'rural communities reached through COBES brain-health outreaches' },
  { value: '1,000+', label: 'women and mothers reached through World Epilepsy Day outreach' },
]
