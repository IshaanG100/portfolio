'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-[#F8FAFC] mb-12 flex items-center gap-6">
            Experience
            <span className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent" />
          </h2>

          <div className="max-w-4xl">
            {experience.map((exp, i) => (
              <ExperienceCard
                key={`${exp.company}-${i}`}
                exp={exp}
                isLast={i === experience.length - 1}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
