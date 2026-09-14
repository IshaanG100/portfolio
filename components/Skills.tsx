import { skills, skillCategories } from '@/data/skills'
import SkillBadge from './SkillBadge'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="What I work with" title="Skills" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, catIndex) => {
            const catSkills = skills.filter((s) => s.category === cat)
            if (!catSkills.length) return null
            return (
              <Reveal key={cat} delay={catIndex * 60} className="h-full">
                <div className="h-full rounded-xl border border-border bg-surface p-6 shadow-card">
                  <h3 className="text-eyebrow font-semibold uppercase tracking-wider text-muted">
                    {cat}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {catSkills.map((skill, i) => (
                      <Reveal key={skill.name} delay={i * 30}>
                        <SkillBadge name={skill.name} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
