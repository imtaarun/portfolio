import type { Challenge, SkillGroup, Work } from '../types/content'

/** Top three pieces of work. Every claim comes from the resume or work history. */
export const topWork: Work[] = [
  {
    id: 'rocksdb',
    title: 'Disk-backed storage that ended out-of-memory failures',
    org: 'Asigra SaaSAssure',
    summary:
      'Large customer backups were failing because every item was held in memory. I replaced those collections with an embedded RocksDB store in the shared Java SDK used by every connector.',
    points: [
      'Generic disk-backed map and priority queue with pluggable codecs',
      'Item lists streamed from storage instead of loaded whole',
      'Thread-safe, with 44 unit tests including 100k-entry writes',
    ],
    result: { label: 'No more out-of-memory failures on large backups. Memory no longer grows with the number of items.' },
    stack: ['Java 17', 'RocksDB', 'Concurrency'],
  },
  {
    id: 'aws',
    title: 'Zero-downtime migration to AWS',
    org: 'Nanometrics Inc.',
    summary:
      'Delivered a cloud-native migration to AWS without taking the application down, improving its availability and fault tolerance.',
    points: [
      'Moved the application to a cloud-native AWS setup',
      'No downtime during the move',
      'Better availability and fault tolerance afterwards',
    ],
    result: { value: 'Zero', label: 'downtime during the migration' },
    stack: ['AWS', 'Cloud-native'],
  },
  {
    id: 'sita',
    title: 'Lead developer on SITA BagJourney',
    org: 'LTIMindtree for SITA',
    summary:
      'Led backend development on a global aviation baggage-tracking platform, working directly with SITA on requirements, design reviews and releases.',
    points: [
      'Redesigned backend microservices as lead developer',
      'Replaced the security stack with Spring Security and closed vulnerabilities in the statistics module',
      'Wrote high- and low-level design documents for the exposed REST APIs',
    ],
    result: { value: '25%', label: 'better application performance' },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Microservices'],
  },
]

/** Two hard problems and how they were solved. Taken from the resume and work history. */
export const challenges: Challenge[] = [
  {
    id: 'deadlock',
    title: 'A restore that hung on large SharePoint sites',
    org: 'Asigra SaaSAssure',
    problem:
      'Multi-threaded restores of large SharePoint sites with nested subsites would stop making progress, and one inaccessible library could stall the whole job.',
    whyHard:
      'It only happened under real concurrency on big sites. The cause was dependency ordering between restore threads, and subsites never received the signal that should have finished them.',
    solution: [
      'Found and fixed the deadlock between dependent restore threads.',
      'Rewrote nested-site restore to walk subsites breadth-first with a queue, with explicit finalization for each site.',
      'Isolated failures per library and per attachment, so one bad item no longer stops the rest.',
    ],
    result: 'Large, deeply nested sites now restore completely, and a single failure is reported instead of hanging the run.',
  },
  {
    id: 'sita-legacy',
    title: 'Slow, defect-prone legacy flows in a global platform',
    org: 'LTIMindtree for SITA',
    problem:
      'Parts of SITA BagJourney ran on legacy code and system flows that were slower, buggier and heavier on resources than they needed to be.',
    whyHard:
      'The platform was in production for a global client, so changes went through SITA\'s requirements, design reviews and release process rather than a quick rewrite.',
    solution: [
      'Refactored the legacy code and the system flows behind it.',
      'Worked directly with SITA stakeholders through design review and release.',
    ],
    result: '30% lower latency, 40% fewer defects and 20% less resource use.',
  },
]

/** Skills from the last two roles first, then earlier ones. */
export const skills: SkillGroup[] = [
  { name: 'Backend', items: ['Java 17', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'jOOQ', 'Vert.x', 'Dagger', 'REST APIs', 'Microservices'] },
  { name: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Also use', items: ['Go', 'Python', 'Node.js / Express'] },
  { name: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL query optimization', 'MongoDB', 'RocksDB', 'SQLite', 'Elasticsearch / ELK'] },
  { name: 'Cloud & build', items: ['AWS (Lambda, SAM, Batch, ECR, CloudWatch)', 'Docker', 'Kubernetes', 'Azure', 'Maven', 'Gradle', 'Git', 'Jenkins'] },
  { name: 'Integrations', items: ['OAuth 2.0', 'Microsoft Graph', 'SharePoint REST', 'HubSpot', 'Box', 'QuickBooks'] },
  { name: 'Testing', items: ['JUnit', 'Mockito', 'TestNG', 'Cypress', 'SonarQube'] },
]
