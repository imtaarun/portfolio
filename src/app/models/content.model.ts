/**
 * Shapes for everything in src/app/data. Components only read these types,
 * so content can change without touching component logic.
 *
 * Any string that starts with "[ADD" is treated as a placeholder and is
 * rendered with a dashed "placeholder" style so it is easy to spot.
 */

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  fullName: string;
  logo: string;
  role: string;
  /** Short positioning line shown under the title, e.g. the kind of role you want. */
  focus: string;
  /** Small "currently" box in the hero. Remove rows to hide them. */
  now: Array<{ label: string; value: string }>;
  yearsExperience: string;
  location: string;
  email: string;
  links: { linkedin: string; github: string };
  availability: {
    /** Set to false to hide the status pill. */
    show: boolean;
    label: string;
  };
  hero: {
    headline: string;
    supporting: string;
  };
  about: {
    paragraphs: string[];
    stats: Stat[];
  };
  footerTagline: string;
  copyrightYear: number;
}

export interface ResumeConfig {
  /** Path relative to /public. Replace public/resume.pdf to update. */
  file: string;
  downloadName: string;
}

/** One stop on the journey timeline. `detailId` links to its full entry below. */
export interface Milestone {
  id: string;
  kind: 'work' | 'education';
  period: string;
  title: string;
  org: string;
  location: string;
  summary: string;
  detailId: string;
}

export interface Position {
  title: string;
  period: string;
}

export interface Job {
  id: string;
  company: string;
  context?: string;
  location: string;
  period: string;
  positions: Position[];
  highlights: string[];
  stack: string[];
}

export interface Degree {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface Work {
  id: string;
  title: string;
  org: string;
  summary: string;
  points: string[];
  /** `value` is optional: leave it out when the result isn't a number. */
  result: { value?: string; label: string };
  stack: string[];
}

export interface Challenge {
  id: string;
  title: string;
  org: string;
  problem: string;
  whyHard: string;
  solution: string[];
  result: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}
