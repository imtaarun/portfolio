# TAARUN.DEV portfolio

Personal portfolio for Taarun, full-stack software developer. Built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # TypeScript
npm run lint       # oxlint
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Edit your content

All content lives in `src/data`. You never need to touch a component to update the site.

| What | File |
| --- | --- |
| Name, headline, bio, stats, email, links, availability | `src/data/profile.ts` (`profile`) |
| Resume file and download name | `src/data/profile.ts` (`resume`) and `public/resume.pdf` |
| Journey timeline, detailed jobs, education, certifications | `src/data/journey.ts` |
| Top 3 work, 2 challenges, skills | `src/data/highlights.ts` |
| Navigation | `src/data/navigation.ts` |
| Title, description, Open Graph, Twitter/X | `src/data/seo.ts` |

### Placeholders

The only placeholders left are `siteUrl` and `twitterHandle` in `src/data/seo.ts`. Anything starting with `[ADD` is ignored until you fill it in.

### Availability

`profile.availability.show` toggles the "Open to new opportunities" pill; `label` changes its text.

## Project structure

```
src/
  components/   one folder per section (Navbar, Hero, About, Journey, ExperienceDetail,
                Work, Challenges, Skills, Contact, Footer, BackToTop) plus shared ui/
  data/         all portfolio content
  hooks/        useActiveSection
  animations/   shared Framer Motion variants
  lib/          small helpers (placeholders, paths, scrolling)
  styles/       Tailwind entry and design tokens
  types/        content types
```

The journey timeline fills in as you scroll and each step links to its full entry. Animations respect `prefers-reduced-motion`.

## Deploy to GitHub Pages

`vite.config.ts` uses `base: './'`, so the build works at any path. Push the repo, then either:

- add a GitHub Actions workflow that runs `npm ci && npm run build` and deploys `dist/` with `actions/deploy-pages`, or
- run `npm run build` and publish `dist/` to a `gh-pages` branch.

Set `seo.siteUrl` in `src/data/seo.ts` to the final URL so Open Graph previews use absolute links.
