'use client'

import { motion } from 'framer-motion'
import { Experience } from '@/data/experience'

interface Props {
  exp: Experience
  isLast: boolean
  index: number
  isInView: boolean
}

export default function ExperienceCard({ exp, isLast, index, isInView }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0 pt-2">
        <div
          className={`w-4 h-4 rounded-full transition-all ${
            exp.current
              ? 'bg-[#3B82F6] ring-4 ring-[#3B82F6]/30 shadow-lg shadow-[#3B82F6]/50'
              : 'bg-[#1E293B] ring-4 ring-[#0A0F1E]'
          }`}
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-[#3B82F6]/50 to-[#3B82F6]/10 mt-2 min-h-[3rem]" />
        )}
      </div>

      {/* Card content */}
      <div className={`pb-12 flex-1 ${isLast ? 'pb-0' : ''}`}>
        <div className="p-6 rounded-xl bg-[#0F172A]/50 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-[#F8FAFC] font-semibold text-xl leading-snug font-heading">
                {exp.role}
              </h3>
              <p className="text-[#3B82F6] font-medium text-base mt-1">{exp.company}</p>
            </div>
            <div className="sm:text-right shrink-0">
              <p className="text-[#94A3B8] text-sm">{exp.period}</p>
              <p className="text-[#94A3B8]/60 text-sm">{exp.location}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-5">
            {exp.description.map((point, i) => (
              <li
                key={i}
                className="text-[#94A3B8] text-sm flex items-start gap-3 leading-relaxed"
              >
                <span className="text-[#3B82F6] mt-1.5 shrink-0 text-xs">▸</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 hover:bg-[#3B82F6]/20 transition-colors"
              >
                {tag}
              </span>
            ))}
            {exp.current && (
              <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                Current
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
