export type SkillCategory =
  | 'Product & Research'
  | 'Data & Analysis'
  | 'Engineering'
  | 'Platforms & Tools'

export interface Skill {
  name: string
  category: SkillCategory
}

// Ordered product-first: the first thing a PM recruiter scans should be
// product and research practice, with engineering as the supporting cast.
export const skills: Skill[] = [
  { name: 'Roadmapping & prioritization', category: 'Product & Research' },
  { name: 'Agile / Scrum', category: 'Product & Research' },
  { name: 'A/B testing', category: 'Product & Research' },
  { name: 'User interviews', category: 'Product & Research' },
  { name: 'Figma', category: 'Product & Research' },
  { name: 'Jira', category: 'Product & Research' },
  { name: 'Notion', category: 'Product & Research' },

  { name: 'SQL', category: 'Data & Analysis' },
  { name: 'Excel', category: 'Data & Analysis' },
  { name: 'Power BI', category: 'Data & Analysis' },
  { name: 'Tableau', category: 'Data & Analysis' },
  { name: 'Jupyter / Colab', category: 'Data & Analysis' },
  { name: 'pandas', category: 'Data & Analysis' },
  { name: 'scikit-learn', category: 'Data & Analysis' },
  { name: 'R', category: 'Data & Analysis' },
  { name: 'Financial modeling (DCF)', category: 'Data & Analysis' },

  { name: 'Python', category: 'Engineering' },
  { name: 'JavaScript', category: 'Engineering' },
  { name: 'TypeScript', category: 'Engineering' },
  { name: 'Java', category: 'Engineering' },
  { name: 'C', category: 'Engineering' },
  { name: 'C++', category: 'Engineering' },
  { name: 'React.js', category: 'Engineering' },
  { name: 'Next.js', category: 'Engineering' },
  { name: 'Node.js', category: 'Engineering' },
  { name: 'Flask', category: 'Engineering' },
  { name: 'Tailwind CSS', category: 'Engineering' },
  { name: 'REST APIs', category: 'Engineering' },
  { name: 'Postman', category: 'Engineering' },

  { name: 'Git', category: 'Platforms & Tools' },
  { name: 'GitHub Actions / CI', category: 'Platforms & Tools' },
  { name: 'Azure', category: 'Platforms & Tools' },
  { name: 'AWS', category: 'Platforms & Tools' },
  { name: 'GCP', category: 'Platforms & Tools' },
  { name: 'QuickBooks', category: 'Platforms & Tools' },
  { name: 'SmartSheet', category: 'Platforms & Tools' },
  { name: 'Trello', category: 'Platforms & Tools' },
]

export const skillCategories: SkillCategory[] = [
  'Product & Research',
  'Data & Analysis',
  'Engineering',
  'Platforms & Tools',
]
