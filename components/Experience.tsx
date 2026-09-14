import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// Each career step climbs this % of the container to the right.
const STEP = 7

export default function Experience() {
  const n = experience.length

  return (
    <section id="experience" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Where I've worked" title="Experience" />

        {/*
          The ascent: data is newest-first, so the top card sits at the summit
          (furthest right) and each card below steps down toward the base.
          Riser lines connect the steps. Offsets flatten on mobile.
        */}
        <div className="mt-12">
          {experience.map((exp, i) => {
            const stepsUp = n - 1 - i // oldest role = 0 steps up the mountain
            return (
              <div key={`${exp.company}-${i}`}>
                {i > 0 && (
                  <div
                    className="my-1 hidden h-8 w-px bg-border sm:block"
                    style={{ marginLeft: `calc(${(n - i) * STEP}% + 2.5rem)` }}
                    aria-hidden="true"
                  />
                )}
                {i > 0 && <div className="h-4 sm:hidden" />}
                <Reveal delay={i * 60}>
                  <div
                    className="exp-step"
                    style={
                      {
                        '--indent': `${stepsUp * STEP}%`,
                        '--width': `calc(100% - ${(n - 1) * STEP}%)`,
                      } as React.CSSProperties
                    }
                  >
                    <ExperienceCard exp={exp} summit={i === 0} />
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
