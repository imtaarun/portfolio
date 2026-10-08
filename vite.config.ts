import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { profile } from './src/data/profile.ts'
import { seo } from './src/data/seo.ts'

const isSet = (v: string) => !!v && !v.startsWith('[ADD')
const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Writes title, meta description, Open Graph, Twitter/X and JSON-LD tags from src/data/seo.ts. */
function seoTags(): Plugin {
  return {
    name: 'portfolio-seo',
    transformIndexHtml() {
      const site = isSet(seo.siteUrl) ? seo.siteUrl.replace(/\/$/, '') : ''
      const image = site ? `${site}/${seo.ogImage}` : seo.ogImage
      const sameAs = [profile.links.linkedin, profile.links.github].filter(isSet)
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.fullName,
        jobTitle: profile.role,
        email: `mailto:${profile.email}`,
        address: { '@type': 'PostalAddress', addressLocality: profile.location },
        ...(site && { url: site }),
        sameAs,
        knowsAbout: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST APIs', 'Microservices', 'SQL'],
      }
      const meta = (attr: 'name' | 'property', key: string, content: string) => ({
        tag: 'meta',
        attrs: { [attr]: key, content }, // Vite escapes attribute values itself
        injectTo: 'head' as const,
      })
      return [
        { tag: 'title', children: esc(seo.title), injectTo: 'head' as const },
        meta('name', 'description', seo.description),
        meta('name', 'keywords', seo.keywords.join(', ')),
        meta('name', 'theme-color', seo.themeColor),
        meta('name', 'author', profile.fullName),
        meta('property', 'og:type', 'website'),
        meta('property', 'og:title', seo.title),
        meta('property', 'og:description', seo.description),
        meta('property', 'og:image', image),
        ...(site ? [meta('property', 'og:url', site), { tag: 'link', attrs: { rel: 'canonical', href: site }, injectTo: 'head' as const }] : []),
        meta('name', 'twitter:card', 'summary_large_image'),
        meta('name', 'twitter:title', seo.title),
        meta('name', 'twitter:description', seo.description),
        meta('name', 'twitter:image', image),
        ...(isSet(seo.twitterHandle) ? [meta('name', 'twitter:site', seo.twitterHandle)] : []),
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(jsonLd), injectTo: 'head' as const },
      ]
    },
  }
}

// `base: './'` keeps asset paths relative, so the build works on GitHub Pages
// sub-paths and any static host without changes.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), seoTags()],
})
