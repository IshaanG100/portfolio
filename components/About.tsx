'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const quickFacts = [
  { label: 'Degree', value: 'Bachelor of Commerce, BUCS' },
  { label: 'School', value: 'UBC Sauder School of Business' },
  { label: 'GPA', value: "4.33 · Dean's Honour Roll" },
  { label: 'Graduation', value: 'Expected May 2028' },
  { label: 'Location', value: 'Vancouver, BC' },
  { label: 'Open to', value: 'Internships & Full-time 2028' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-16 px-6 bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-[#F8FAFC] mb-10 flex items-center gap-6">
            About
            <span className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent" />
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-[#94A3B8] text-lg leading-relaxed"
            >
              <p>
                I&apos;m Ishaan, a fourth-year student at{' '}
                <span className="text-[#F8FAFC] font-medium">UBC Sauder</span> pursuing a combined
                major in Computer Science &amp; Business (BUCS). I&apos;m driven by the idea that
                the most impactful work happens at the intersection of rigorous engineering and
                sharp business thinking.
              </p>
              <p>
                BUCS gave me an unusual lens: I architect systems, write production code, and
                speak the language of finance and strategy, often in the same week. Whether
                I&apos;m building a full-stack application or modeling a DCF, I bring the same
                level of precision and curiosity.
              </p>
              <p>
                Outside the classroom, I&apos;m drawn to early-stage startups, product design,
                and the craft of building things people genuinely want. I&apos;m always open to
                new collaborations and conversations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              {quickFacts.map(({ label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0A0F1E]/60 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-200"
                >
                  <span className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider w-24 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-[#F8FAFC] text-sm font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
