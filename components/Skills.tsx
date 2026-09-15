import { skills, skillCategories } from '@/data/skills'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" kicker="What I work with">
      <dl className="-mt-5 divide-y divide-rule">
        {skillCategories.map((cat) => {
          const names = skills.filter((s) => s.category === cat).map((s) => s.name)
          if (!names.length) return null
          return (
            <div key={cat} className="grid gap-1 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-8">
              <dt className="ui font-medium text-ink">{cat}</dt>
              <dd className="ui max-w-measure text-muted">{names.join(', ')}</dd>
            </div>
          )
        })}
      </dl>
    </Section>
  )
}
