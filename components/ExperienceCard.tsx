import { Experience } from '@/data/experience'

interface Props {
  exp: Experience
  /** Newest role: gets the summit flag */
  summit?: boolean
}

export default function ExperienceCard({ exp, summit = false }: Props) {
  return (
    <article
      className={`relative flex flex-col gap-4 rounded-xl border bg-surface p-5 shadow-card transition-colors sm:flex-row sm:items-start sm:gap-8 sm:p-6 ${
        exp.current ? 'border-accent-weak' : 'border-border hover:border-accent-weak'
      }`}
    >
      {summit && (
        <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full border border-accent-weak bg-surface px-2.5 py-0.5 text-xs font-semibold text-accent-link">
          <FlagIcon />
          Now
        </span>
      )}

      {/* Left column: role, employer, dates */}
      <div className="sm:w-60 sm:shrink-0">
        <h3 className={`text-h3 font-semibold ${exp.current ? 'text-accent-link' : 'text-fg'}`}>
          {exp.role}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-fg">{exp.company}</p>
        <p className="mt-1.5 text-xs text-muted">{exp.period}</p>
        <p className="text-xs text-muted">{exp.location}</p>
        {exp.current && !summit && (
          <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-accent-link">
            Current
          </span>
        )}
      </div>

      {/* Right column: what happened there */}
      <div className="flex-1">
        <ul className="space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                  exp.current ? 'bg-accent' : 'bg-accent-link'
                }`}
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function FlagIcon() {
  return (
    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 21V4m0 0h11l-2.5 3.5L16 11H5"
      />
    </svg>
  )
}
