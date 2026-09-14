import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Where I've worked" title="Experience" />

        {/* Current role gets a full-width highlight card; past roles sit in a 2-up grid. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {experience.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${i}`}
              exp={exp}
              index={i}
              wide={i === 0 && !!exp.current}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
