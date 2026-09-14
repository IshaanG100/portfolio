import { Experience } from '@/data/experience'
import Reveal from './Reveal'

interface Props {
  exp: Experience
  index: number
  /** Full-width highlight treatment for the current role */
  wide?: boolean
}

export default function ExperienceCard({ exp, index, wide = false }: Props) {
  return (
    <Reveal delay={index * 60} className={`h-full ${wide ? 'sm:col-span-2' : ''}`}>
      <article
        className={`flex h-full flex-col rounded-xl border bg-surface p-6 shadow-card transition-colors ${
          wide ? 'border-accent-weak' : 'border-border hover:border-accent-weak'
        }`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-h3 font-semibold text-fg">{exp.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-fg">{exp.company}</p>
          </div>
          <div className="shrink-0 text-xs text-muted sm:text-right">
            <p>{exp.period}</p>
            <p>{exp.location}</p>
          </div>
        </div>

        <ul className="mt-4 flex-1 space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-link" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
          {exp.current && (
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-link">
              Current
            </span>
          )}
        </div>
      </article>
    </Reveal>
  )
}
