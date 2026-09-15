import { Experience } from '@/data/experience'
import Marker from './Marker'

/**
 * One role. Role and employer on the left, dates and place on the right;
 * a current role gets its dates highlighted instead of a badge.
 */
export default function ExperienceEntry({ exp }: { exp: Experience }) {
  return (
    <article className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-10">
      <div>
        <h3 className="font-serif text-lead font-medium text-ink">{exp.role}</h3>
        <p className="ui mt-1 text-ink">{exp.company}</p>
      </div>
      <div className="ui text-meta text-muted sm:text-right">
        <p>{exp.current ? <Marker>{exp.period}</Marker> : exp.period}</p>
        <p className="mt-1">{exp.location}</p>
      </div>

      <div className="sm:col-span-2">
        <ul className="max-w-measure list-disc space-y-2 pl-5 font-serif text-body text-ink marker:text-muted">
          {exp.description.map((point, i) => (
            <li key={i} className="pl-1">
              {point}
            </li>
          ))}
        </ul>
        <ul className="ui mt-4 flex flex-wrap gap-x-5 gap-y-1 text-meta text-muted">
          {exp.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
