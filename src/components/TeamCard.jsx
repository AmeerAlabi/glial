import { Linkedin } from 'lucide-react'

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function SocialLink({ href, label, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded text-ink-muted hover:bg-surface hover:text-ink"
    >
      {children}
    </a>
  )
}

export default function TeamCard({ member, size = 'lg' }) {
  const large = size === 'lg'
  return (
    <li className="flex flex-col">
      <div className={`${large ? 'aspect-[4/5]' : 'aspect-square'} w-full overflow-hidden rounded-lg bg-surface`}>
        {member.photo ? (
          <img src={member.photo} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-indigo-50 font-serif text-4xl font-semibold text-indigo-700" aria-hidden="true">
            {initials(member.name)}
          </div>
        )}
      </div>
      <h3 className={`mt-4 font-semibold text-ink ${large ? 'text-xl' : 'text-lg'}`}>{member.name}</h3>
      <p className="t-small">{member.role}</p>
      {large && member.bio && <p className="t-small mt-2">{member.bio}</p>}
      {(member.linkedin || member.x) && (
        <div className="-ml-2 mt-2 flex">
          <SocialLink href={member.linkedin} label={`${member.name} on LinkedIn`}>
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </SocialLink>
          <SocialLink href={member.x} label={`${member.name} on X`}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialLink>
        </div>
      )}
    </li>
  )
}
