import { timeline } from '../data/timeline'
import { linkClass } from './RichText'

// Newest first. Degrees and roles share one rail, so a role that belongs to no
// degree (the JVA fellowship) simply lands between them by date. Ties put the
// degree above the roles that began the same month.
function byRecency(a, b) {
  if (a.start !== b.start) return a.start < b.start ? 1 : -1
  return (b.type === 'education') - (a.type === 'education')
}

function ExternalLink({ href, children }) {
  if (!href) return children
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

function OrgLine({ entry }) {
  return (
    <p className="mt-0.5 text-sm text-lavender-deeper">
      <ExternalLink href={entry.organizationUrl}>{entry.organization}</ExternalLink>
      {entry.location && <span className="text-navy/40"> · {entry.location}</span>}
    </p>
  )
}

function Credits({ entry }) {
  const people = entry.instructors ?? entry.advisors
  if (!people?.length) return null
  const label = entry.instructors
    ? `${people.length > 1 ? 'Instructors' : 'Instructor'}: `
    : 'Advised by '

  return (
    <p className="mt-1 text-xs text-navy/40">
      {label}
      {people.map((person, i) => (
        <span key={person.name}>
          {i > 0 && ', '}
          <ExternalLink href={person.url}>{person.name}</ExternalLink>
        </span>
      ))}
    </p>
  )
}

function Bullets({ entry }) {
  if (!Array.isArray(entry.bullets)) {
    return entry.description
      ? <p className="mt-2.5 text-sm text-navy/60 leading-relaxed">{entry.description}</p>
      : null
  }
  return (
    <ul className="mt-2.5 space-y-1.5 text-sm text-navy/60 leading-relaxed">
      {entry.bullets.map((bullet, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-lavender" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

const railClass = 'ml-2 space-y-9 border-l border-lavender/25 pl-8 sm:ml-3 sm:pl-10'

export default function Timeline() {
  const entries = [...timeline].sort(byRecency)
  const earlier = entries.filter(entry => entry.earlier)

  return (
    <section id="timeline" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="section-heading mb-12">
        Experience<span className="accent-dot" />
      </h2>

      <ol className={railClass}>
        {timelineItems(entries.filter(entry => !entry.earlier))}
      </ol>

      {earlier.length > 0 && (
        <details className="group mt-10">
          <summary className="reveal-button list-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Show {earlier.length} earlier roles</span>
            <span className="hidden group-open:inline">Hide earlier roles</span>
            <span aria-hidden="true" className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <ol className={`mt-6 ${railClass}`}>
            {timelineItems(earlier)}
          </ol>
        </details>
      )}
    </section>
  )
}

function timelineItems(entries) {
  return entries.map(entry => {
    const isDegree = entry.type === 'education'

    return (
      <li key={entry.id} className="relative">
        {/* Degrees get the larger milestone node; roles get a small tick. */}
        <span
          className={
            isDegree
              ? 'absolute -left-8 top-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-lavender-dark bg-background ring-4 ring-background sm:-left-10'
              : 'absolute -left-8 top-[0.45rem] h-2 w-2 -translate-x-1/2 rounded-full bg-sky ring-4 ring-background sm:-left-10'
          }
        />

        {isDegree && (
          <p className="text-[0.7rem] font-medium uppercase tracking-widest text-lavender-dark">
            Education
          </p>
        )}

        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className={isDegree ? 'font-display text-lg text-navy' : 'font-medium text-navy'}>
            {entry.title}
          </h3>
          <p className="text-xs text-navy/40">{entry.period}</p>
        </div>

        {entry.subtitle && <p className="text-xs text-navy/40">{entry.subtitle}</p>}
        <OrgLine entry={entry} />
        <Credits entry={entry} />
        <Bullets entry={entry} />
      </li>
    )
  })
}
