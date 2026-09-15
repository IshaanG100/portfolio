import { experience } from '@/data/experience'
import ExperienceEntry from './ExperienceEntry'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="Where I've worked">
      <div className="-mt-8 divide-y divide-rule">
        {experience.map((exp, i) => (
          <ExperienceEntry key={`${exp.company}-${i}`} exp={exp} />
        ))}
      </div>
    </Section>
  )
}
