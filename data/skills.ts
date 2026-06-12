export type SkillCategory = 'Languages' | 'Tools & Platforms' | 'Frameworks & Libraries' | 'Other'

export interface Skill {
  name: string
  category: SkillCategory
}

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'R', category: 'Languages' },

  { name: 'Power BI', category: 'Tools & Platforms' },
  { name: 'Tableau', category: 'Tools & Platforms' },
  { name: 'Git', category: 'Tools & Platforms' },
  { name: 'Azure', category: 'Tools & Platforms' },
  { name: 'AWS', category: 'Tools & Platforms' },
  { name: 'GCP', category: 'Tools & Platforms' },
  { name: 'Figma', category: 'Tools & Platforms' },

  { name: 'React.js', category: 'Frameworks & Libraries' },
  { name: 'Next.js', category: 'Frameworks & Libraries' },
  { name: 'Node.js', category: 'Frameworks & Libraries' },
  { name: 'Flask', category: 'Frameworks & Libraries' },
  { name: 'pandas', category: 'Frameworks & Libraries' },
  { name: 'scikit-learn', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },

  { name: 'Excel', category: 'Other' },
  { name: 'QuickBooks', category: 'Other' },
  { name: 'SmartSheet', category: 'Other' },
  { name: 'Trello', category: 'Other' },
]

export const skillCategories: SkillCategory[] = [
  'Languages',
  'Tools & Platforms',
  'Frameworks & Libraries',
  'Other',
]
