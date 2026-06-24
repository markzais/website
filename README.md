# Mark Zais — Professional Website

A stunning, single-page personal site for **Mark Zais, PhD, CAP-X** — Enterprise Analytics Executive, AI Strategist, and Operations Research leader. Designed with an "enterprise-meets-edgy" aesthetic: deep ink backgrounds, electric cyan/violet gradients, glassmorphism, animated grids, and tasteful motion.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Sections

- **Hero** — animated intro, headline, key stats
- **About** — leadership philosophy, career highlights, credentials, skills marquee
- **Career Journey** — alternating timeline of 20+ years (cockpit → C-suite)
- **Expertise** — six core capabilities + education
- **Recognition** — honors, awards, and selected publications
- **Work & Ventures** — links to the future portfolio and the [Zais Analytics](https://zaisanalytics.com) consulting practice
- **Contact** — CTAs and contact channels

## Getting Started

```bash
npm install      # install dependencies (already done)
npm run dev      # start the local dev server
```

Then open the URL printed in the terminal (typically [http://localhost:3000](http://localhost:3000), or the next free port such as 3001).

## Other Commands

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Editing Content

All profile content (summary, experience, skills, awards, publications, links) lives in a single file:

```
src/lib/content.ts
```

Update values there and the site reflects them everywhere. The portfolio link and `zaisanalytics.com` consulting link are defined as `profile.portfolio` and `profile.consulting`.

## Project Structure

```
src/
  app/
    layout.tsx      # fonts, SEO metadata
    page.tsx        # page assembly + JSON-LD structured data
    globals.css     # design system (theme tokens, utilities, animations)
  components/        # Navbar, Hero, About, Journey, Expertise, Recognition, Work, Contact, Footer
  lib/content.ts     # all editable content
public/
  linkedin.pdf       # source profile
```

## Notes

- Fully responsive (mobile → desktop) and respects `prefers-reduced-motion`.
- Includes Open Graph / Twitter metadata and Person JSON-LD for SEO.
- To deploy, push to a Git host and import into [Vercel](https://vercel.com) (zero-config for Next.js).
