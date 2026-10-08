import type { Profile, ResumeConfig } from '../models/content.model';

/**
 * Who you are. Edit this file to change your name, bio, links, email,
 * availability or the hero copy.
 */
export const profile: Profile = {
  name: 'Taarun',
  fullName: 'Taarun Dev Karthikeyan',
  logo: 'TAARUN.DEV',
  role: 'Senior Software Engineer',
  focus: 'Full-stack · Java, Spring Boot and Angular',
  now: [
    { label: 'Currently', value: 'Senior Software Engineer at Asigra' },
    { label: 'Main stack', value: 'Java 17, Spring Boot, Angular, TypeScript' },
    { label: 'Also use', value: 'Go, Python, Node.js' },
    { label: 'Looking for', value: 'Senior full-stack roles' },
  ],
  yearsExperience: '6+',
  location: 'Ottawa, ON, Canada',
  email: 'imtaarun@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/taarun-dev',
    github: 'https://github.com/imtaarun',
  },
  availability: {
    show: true,
    label: 'Open to new opportunities',
  },
  hero: {
    headline:
      'I build enterprise systems end to end in Java and Angular, from the UI down to the data.',
    supporting:
      '6+ years delivering enterprise systems for aviation, sensor and SaaS platforms. Java and Spring Boot services with Angular and TypeScript front ends, plus Go, Python and Node.js where they fit.',
  },
  about: {
    paragraphs: [
      'I build full-stack systems in Java and Angular: Spring Boot services and REST APIs, the SQL and NoSQL data underneath, and Angular and TypeScript front ends on top. I own modules end to end, from the design document to production, and use Go, Python or Node.js when they fit the job.',
      'I spent 3+ years delivering a global aviation platform for SITA, two years building cloud-connected sensor software at Nanometrics, and now build multi-tenant SaaS backup and restore at Asigra. I like the hard problems in the middle of a system: memory, concurrency and third-party APIs, and I fix them in a way the next engineer can understand.',
    ],
    stats: [
      { value: '6+', label: 'Years of experience' },
      { value: '~58 MB', label: 'Cut from every service image' },
      { value: '40%', label: 'Faster test runs with JUnit and Cypress' },
      { value: 'AZ-204', label: 'Azure Developer Associate' },
    ],
  },
  footerTagline: 'Java • Spring Boot • Angular • TypeScript • AWS',
  copyrightYear: 2026,
};

/** Replace public/resume.pdf (or change `file`) to update the resume. */
export const resume: ResumeConfig = {
  file: 'resume.pdf',
  downloadName: 'Taarun_Karthikeyan_Resume.pdf',
};
