import type { Degree, Job, Milestone } from '../models/content.model';

/**
 * The scroll timeline, newest first. Each milestone points at a detailed
 * entry (`detailId`) in `jobs` or `education` below.
 */
export const milestones: Milestone[] = [
  {
    id: 'm-asigra',
    kind: 'work',
    period: 'Oct 2025 – Present',
    title: 'Senior Software Engineer',
    org: 'Asigra SaaSAssure',
    location: 'Ottawa, ON',
    summary: 'Java 17 connector services and SDK for multi-tenant SaaS backup and restore.',
    detailId: 'job-asigra',
  },
  {
    id: 'm-nano',
    kind: 'work',
    period: 'Sep 2023 – Sep 2025',
    title: 'Software Engineer',
    org: 'Nanometrics Inc.',
    location: 'Ottawa, ON',
    summary: 'Full-stack Angular and REST work, a zero-downtime AWS migration and sensor firmware.',
    detailId: 'job-nano',
  },
  {
    id: 'm-windsor',
    kind: 'education',
    period: '2022 – 2023',
    title: 'MEng, Electrical & Computer Engineering',
    org: 'University of Windsor',
    location: 'Windsor, ON, Canada',
    summary: 'Graduate engineering degree after moving to Canada.',
    detailId: 'edu-windsor',
  },
  {
    id: 'm-lti',
    kind: 'work',
    period: 'Oct 2018 – Mar 2022',
    title: 'Trainee → Software Engineer → Senior Software Engineer',
    org: 'LTIMindtree',
    location: 'Bengaluru, India',
    summary:
      'Built SITA BagJourney, a global aviation baggage-tracking platform, and grew into its lead developer.',
    detailId: 'job-lti',
  },
  {
    id: 'm-anna',
    kind: 'education',
    period: '2014 – 2018',
    title: 'BE, Electronics & Communications',
    org: 'Anna University',
    location: 'Chennai, India',
    summary: 'Engineering foundations in electronics, communications and programming.',
    detailId: 'edu-anna',
  },
];

/** Detailed experience, most recent first. */
export const jobs: Job[] = [
  {
    id: 'job-asigra',
    company: 'Asigra SaaSAssure',
    context: 'Multi-tenant SaaS backup and restore',
    location: 'Ottawa, ON',
    period: 'Oct 2025 – Present',
    positions: [{ title: 'Senior Software Engineer', period: 'Oct 2025 – Present' }],
    highlights: [
      'Build and maintain data connectors for SharePoint, Box, HubSpot and Exchange as Java 17 microservices on Vert.x and Dagger, deployed with AWS Lambda and SAM across a multi-account AWS organization.',
      'Design backup, restore and export strategies for complex object graphs: dependency-ordered restores, incremental backup, and relationships that survive round trips through external APIs.',
      'Led storage and authentication work in the shared connector SDK: an embedded RocksDB store that kept memory flat on very large backups, and OAuth 2.0 token refresh that is safe across concurrent instances.',
      'Develop the Go storage and vault services that store backup data and serve tenant credentials to connector instances.',
      'Diagnose production failures from live logs across multi-tenant, multi-threaded runs, and document root causes so fixes hold.',
    ],
    stack: [
      'Java 17',
      'Vert.x',
      'Dagger',
      'Go',
      'AWS Lambda',
      'RocksDB',
      'SQLite',
      'OAuth 2.0',
      'Microsoft Graph',
    ],
  },
  {
    id: 'job-nano',
    company: 'Nanometrics Inc.',
    location: 'Ottawa, ON',
    period: 'Sep 2023 – Sep 2025',
    positions: [{ title: 'Software Engineer', period: 'Sep 2023 – Sep 2025' }],
    highlights: [
      'Built dynamic Angular front ends over backend REST services, and integrated RESTful APIs with Node.js and Express, owning features from UI through persistence.',
      'Owned key application modules end to end, from architecture through deployment, as the primary engineer.',
      'Delivered a cloud-native migration to AWS with zero downtime, improving availability and fault tolerance.',
      'Developed firmware that connects to multiple sensors concurrently and converts their data streams to TCP for downstream ingestion.',
      'Cut query execution times by up to 40% through query and schema optimization.',
      'Reduced test execution time by 40% while raising coverage with automated JUnit and Cypress frameworks.',
    ],
    stack: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'Java',
      'AWS',
      'SQL',
      'JUnit',
      'Cypress',
    ],
  },
  {
    id: 'job-lti',
    company: 'LTIMindtree',
    context: 'SITA BagJourney, global aviation baggage tracking',
    location: 'Bengaluru, India',
    period: 'Oct 2018 – Mar 2022',
    positions: [
      { title: 'Senior Software Engineer', period: 'Apr 2020 – Mar 2022' },
      { title: 'Software Engineer', period: 'Jan 2019 – Apr 2020' },
      { title: 'Trainee', period: 'Oct 2018 – Jan 2019' },
    ],
    highlights: [
      'Delivered a global baggage-tracking platform for SITA, working directly with client stakeholders on requirements, design reviews and releases.',
      'As lead developer, improved application performance by 25% by redesigning backend microservices.',
      'Cut system latency 30%, defects 40% and resource use 20% by refactoring legacy code and system flows.',
      'Replaced the security stack with Spring Security and closed out vulnerabilities in the statistics module.',
      'Wrote high- and low-level design documents for exposed REST APIs, and sped up debugging 50% by setting up the ELK stack.',
      'Joined through the Java full-stack trainee program (Spring Boot, Hibernate/JPA, Angular, Azure).',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate/JPA',
      'Angular',
      'Microservices',
      'ELK',
    ],
  },
];

export const education: Degree[] = [
  {
    id: 'edu-windsor',
    school: 'University of Windsor',
    degree: 'Master of Engineering, Electrical & Computer Engineering',
    period: '2022 – 2023',
    location: 'Windsor, ON, Canada',
  },
  {
    id: 'edu-anna',
    school: 'Anna University',
    degree: 'Bachelor of Engineering, Electronics & Communications Engineering',
    period: '2014 – 2018',
    location: 'Chennai, India',
  },
];

export const certifications = [
  'Microsoft Azure Developer Associate (AZ-204)',
  'DevOps Practitioner',
  'AWS Fundamentals: Going Cloud-Native',
  'Secure Delivery for Java Developers',
];
