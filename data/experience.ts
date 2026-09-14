export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tags: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    company: 'Kensington Tours (Range Group)',
    role: 'Financial Intern',
    period: 'Sep 2026 – Present',
    location: 'Toronto, ON (hybrid)',
    description: [
      'Supporting an enterprise ERP replacement going live in 2027 by executing test scripts, isolating defects and documenting process steps',
      'Reconciling financial data between the legacy system and its replacement, tracing variances to the point of entry',
    ],
    tags: ['ERP', 'Financial Reconciliation', 'Testing'],
    current: true,
  },
  {
    company: 'University of British Columbia',
    role: 'Teaching Assistant, COMM 394',
    period: 'May 2026 – Present',
    location: 'Vancouver, BC',
    description: [
      'Supported 200+ students in environmental policy, corporate governance, and stakeholder management',
      'Maintained grading standards and consistency across all assessments',
    ],
    tags: ['Corporate Governance', 'Environmental Policy', 'Instruction'],
    current: true,
  },
  {
    company: 'University of British Columbia',
    role: 'Teaching Assistant, COMM 205',
    period: 'Sep 2025 – May 2026',
    location: 'Vancouver, BC',
    description: [
      'Supported 450+ students weekly on management information systems and Excel',
      'Improved marking efficiency and consistency course-wide',
    ],
    tags: ['MIS', 'Excel', 'Instruction'],
  },
  {
    company: 'Occasio Fine Homes Inc.',
    role: 'Accountant / Bookkeeper',
    period: 'Jan 2023 – May 2024',
    location: 'North Vancouver, BC',
    description: [
      'Increased financial record accuracy by 25% through improved reconciliation processes',
      'Automated invoicing workflow in QuickBooks, reducing manual entry time',
    ],
    tags: ['QuickBooks', 'Bookkeeping', 'Accounting'],
  },
  {
    company: 'OSI Maritime Systems',
    role: 'Data Warehouse Intern',
    period: 'Jul 2022 – Sep 2022',
    location: 'Burnaby, BC',
    description: [
      'Reduced inventory discrepancies through Sage 500 and PDX data validation',
      'Improved data consolidation efficiency by 20%',
    ],
    tags: ['Sage 500', 'PDX', 'Data Warehousing'],
  },
]
