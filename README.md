# Taarun's portfolio (Angular)

A one-page portfolio built with **Angular 21**, **Tailwind CSS v4** and **Lucide icons**.
It uses standalone components, signals and the new control flow (`@if`, `@for`).
There are no NgModules, no router and no RxJS in the app code.

## Run it

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build into dist/
```

Node 20.19+ or 22.12+ is required. Vercel deploys it with the settings in `vercel.json`: it runs `npm run build` and serves `dist/`.

## Where things live

```
src/
├── index.html              Page title, SEO and link-preview tags, fonts
├── styles.css              Design tokens (colours, radius, shadow, easing) and shared classes
└── app/
    ├── app.ts / app.html   The page: navbar, the sections in order, footer
    ├── data/               ALL the text on the site — edit these to change content
    │   ├── profile.ts        name, role, hero, about, stats, email, links
    │   ├── journey.ts        timeline, jobs, education, certifications
    │   ├── highlights.ts     top work, challenges, skills
    │   └── navigation.ts     navbar links
    ├── models/             TypeScript interfaces for the data
    ├── core/
    │   ├── scroll.service.ts   scroll position signals, smooth scrolling, "open job details"
    │   └── active-section.ts   which section is on screen (highlights the navbar link)
    ├── shared/
    │   ├── reveal.directive.ts   appReveal — fade/lift in on scroll
    │   ├── section.component.ts  <app-section> — eyebrow, heading, intro, content
    │   ├── button.component.ts   a[appButton] — link styled as a button
    │   └── brand-icons.component.ts  GitHub / LinkedIn logos
    └── sections/           One folder per section of the page
        navbar, hero, about, journey, top-work, challenges,
        experience-detail, skills, contact, footer, back-to-top
```

To change text, edit `src/app/data/`. To change how something looks, edit that section's component.

## How the moving parts work

- **Scroll reveal.** Add `appReveal` to any element. The directive uses an `IntersectionObserver` and adds `.is-visible` once the element enters the screen; the CSS transition is in `styles.css`. `[revealDelay]="100"` staggers items (ms).
- **Timeline line.** `JourneyComponent.fill` is a `computed()` signal that reads `ScrollService.y()`. It works out how far the timeline has scrolled past and sets the blue line's `scaleY`.
- **"View details" on the timeline.** It calls `ScrollService.openDetail(id)`, which sets the `detailRequest` signal. `ExperienceDetailComponent` has an `effect()` that opens that job card, then the service scrolls to it.
- **Mobile menu and back-to-top button.** These use Angular's built-in `animate.enter` / `animate.leave` with the CSS classes `menu-enter`, `pop-enter` and so on.
- **Reduced motion.** If the visitor's system asks for less motion, the reveals only fade and smooth scrolling becomes instant.
- **Print.** Every reveal is shown and every job card is expanded when printing.

## Updating

- **Resume:** replace `public/resume.pdf`. It's the web copy with the phone number removed.
- **Link preview image:** replace `public/og-image.png` (1200×630).
- **Site address:** once you know the final URL, follow the comment in `src/index.html` to add the canonical and `og:url` tags.
