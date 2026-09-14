export interface Project {
  title: string
  subtitle: string
  context: string
  tags: string[]
  featured: boolean
  repo?: string
  // Featured cards use the four-part structure:
  problem?: string
  decision?: string
  outcome?: string
  // Compact cards use a single summary line:
  summary?: string
}

export const projects: Project[] = [
  {
    title: 'InsightUBC',
    subtitle: 'Course & classroom data query platform',
    context: 'CPSC 310, Intro to Software Engineering · paired, term-long',
    featured: true,
    problem:
      "Students can't answer concrete questions, like which sections fit a schedule, from UBC's raw course and building data.",
    decision:
      "We built a query engine and REST API over the data instead of a fixed set of reports, so it answers questions we didn't anticipate, not only the ones we hard-coded. We ran it as a real team: paired development, pull-request review on every change, and weekly Agile/Scrum check-ins with a TA.",
    outcome:
      'A full-stack app that serves custom queries through its own REST API, backed by unit tests.',
    tags: ['Node.js', 'Express', 'React', 'JavaScript', 'REST API', 'Agile'],
  },
  {
    title: 'GymApp',
    subtitle: 'Workout & physio tracker',
    context: 'Independent project · AI-assisted build',
    featured: true,
    repo: 'https://github.com/IshaanG100/GymApp',
    problem:
      'Gym logging happens on a dead or flaky connection, so anything that needs the network fails exactly when you need it.',
    decision:
      'I made it offline-first on purpose: everything persists locally via IndexedDB, so it works with no connection at all. I scoped it to the two things I actually do, logging workouts and holding physio compliance via due-date and streak logic, and used AI-assisted tooling to go from spec to working app fast.',
    outcome:
      'A PWA with a workout logger, physio tracker, and a dashboard of weekly volume and personal bests.',
    tags: ['React', 'Vite', 'Chart.js', 'IndexedDB', 'PWA'],
  },
  {
    title: 'Class Rating System',
    subtitle: 'Structured course ratings from student opinion',
    context: 'Independent project',
    featured: true,
    problem:
      "Honest course opinions already exist on Reddit, but scattered across threads they're impossible to compare.",
    decision:
      'Instead of making people keep reading threads, I turned the commentary into structured ratings: I pull comments through the Reddit API and use the GPT API to sort each into rating categories, so results are comparable across courses. I deliberately kept it to classifying opinion that already exists, not generating scores of my own.',
    outcome:
      'A pipeline that converts unstructured course chatter into structured, comparable ratings.',
    tags: ['Python', 'Reddit API', 'GPT API', 'Data pipeline'],
  },
  {
    title: 'Bike demand prediction model',
    subtitle: 'Climate-driven demand forecasting',
    context: 'CS 330 · independent academic project',
    featured: false,
    summary:
      'Forecasting how many bikes are needed where and when, using climate variables to predict bicycle demand. A Python/pandas model that reached 85% accuracy on the test set.',
    tags: ['Python', 'pandas', 'Forecasting'],
  },
  {
    title: 'Clash Royale relational database',
    subtitle: 'Schema design & data modelling',
    context: 'CPSC 304, Intro to Relational Databases · group project',
    featured: false,
    summary:
      'Deciding what the entities are and how they relate (characters, clans, cards, decks, and friendships), then enforcing it with a normalized schema and full CRUD across those entities.',
    tags: ['Java', 'JDBC', 'Oracle SQL'],
  },
]
