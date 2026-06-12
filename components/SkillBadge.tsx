'use client'

import { SkillCategory } from '@/data/skills'
import { useState } from 'react'

interface Props {
  name: string
  category: SkillCategory
}

export default function SkillBadge({ name }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-200 cursor-default ${
        isHovered
          ? 'bg-[#3B82F6] border-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30 scale-105'
          : 'bg-transparent border-[#3B82F6]/30 text-[#94A3B8] hover:border-[#3B82F6]/50'
      }`}
    >
      {name}
    </span>
  )
}
