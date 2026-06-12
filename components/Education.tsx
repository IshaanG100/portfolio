'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const awards = [
  {
    name: 'Naomi Grigg Scholarship',
    description: 'Awarded for outstanding academic achievement and community leadership at UBC',
  },
  {
    name: 'Trek Excellence Scholarship',
    description: 'UBC merit scholarship recognizing exceptional academic performance',
  },
]

const stats = [
  { value: '4.33', label: 'Cumulative GPA' },
  { value: '4th', label: 'Year Student' },
  { value: "Dean's", label: 'Honour Roll' },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-[#F8FAFC] mb-12 flex items-center gap-6">
            Education
            <span className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                    University of British Columbia
                  </h3>
                  <p className="text-[#3B82F6] font-semibold mt-2 text-lg">
                    Bachelor of Commerce, Computer Science &amp; Business (BUCS)
                  </p>
                  <p className="text-[#94A3B8] text-sm mt-1">UBC Sauder School of Business</p>
                </div>
                <div className="text-sm text-[#94A3B8] lg:text-right shrink-0">
                  <p className="font-medium">Sep 2023 – May 2027</p>
                  <p className="text-[#94A3B8]/60 mt-0.5">Vancouver, BC</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px border-y border-[#1E293B] bg-[#1E293B]">
              {stats.map(({ value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-[#0A0F1E]/60 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-[#3B82F6] font-heading">{value}</p>
                  <p className="text-[#94A3B8] text-sm mt-1.5">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <div className="p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-5 font-heading">
                Scholarships &amp; Awards
              </h4>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#0A0F1E]/40 border border-[#1E293B]/50 hover:border-[#3B82F6]/30 transition-colors"
                  >
                    <span className="text-[#3B82F6] mt-0.5 text-base shrink-0">✦</span>
                    <div>
                      <p className="text-[#F8FAFC] font-semibold text-base">{award.name}</p>
                      <p className="text-[#94A3B8] text-sm mt-1 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
