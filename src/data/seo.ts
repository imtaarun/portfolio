import type { SeoConfig } from '../types/content.ts'

/**
 * Injected into index.html at build time by the plugin in vite.config.ts
 * (title, description, Open Graph, Twitter/X and JSON-LD).
 */
export const seo: SeoConfig = {
  title: 'Taarun Dev Karthikeyan — Senior Full-Stack Developer (Java & Angular)',
  description:
    'Senior full-stack developer in Ottawa with 6+ years building enterprise systems in Java, Spring Boot and Angular, plus Go, Python and Node.js.',
  siteUrl: '[ADD SITE URL]',
  ogImage: 'og-image.png',
  twitterHandle: '[ADD X HANDLE]',
  themeColor: '#f7f7f5',
  keywords: ['Taarun', 'Full-Stack Developer', 'Java', 'Spring Boot', 'Angular', 'TypeScript', 'Go', 'Python', 'Node.js', 'Software Engineer', 'Ottawa'],
}
