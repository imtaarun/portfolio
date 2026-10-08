export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Top work' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavId = (typeof navItems)[number]['id']
