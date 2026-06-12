'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills, skillCategories } from '@/data/skills'
import SkillBadge from './SkillBadge'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-16 px-6 bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-[#F8FAFC] mb-12 flex items-center gap-6">
            Skills
            <span className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent" />
          </h2>

          <div className="space-y-8">
            {skillCategories.map((cat, catIndex) => {
              const catSkills = skills.filter((s) => s.category === cat)
              if (!catSkills.length) return null
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4 font-heading">
                    {cat}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {catSkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.02 }}
                      >
                        <SkillBadge name={skill.name} category={skill.category} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
