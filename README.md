# vindy-portfolio-web

Personal portfolio site for **Vindy Bagus Prasetyo** — Mobile Developer (Flutter / Kotlin Multiplatform).

Production URL: <https://vindy-portfolio.vercel.app/>

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components enabled)
- **React 19**
- **Tailwind CSS v4** (CSS-first configuration in `src/app/globals.css`)
- **TypeScript**

No UI component library and no animation library — the styling is plain Tailwind utilities.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Content

**All copy lives in [`src/lib/content.ts`](src/lib/content.ts).** Components read from it and never
hardcode facts. To change a job, a project, a stat, or a contact detail, edit that one file.

The content is taken from `Personal/CV-Vindy-Bagus-Prasetyo-2026.docx`, which is the single source of
truth. A few points are deliberate and should not be "corrected" back:

| Item | Value | Note |
| --- | --- | --- |
| BisChat | Aug 2026 – Sep 2026 | 2-month contract, already ended |
| Kosify.id | Aug 2025 – May 2026 | Not "Present"; last commit 5 May 2026 |
| Kosify spelling | `Kosify.id` | With an "s", not "Kostify" |
| Second Kosify app | `Tenant` | Not "Customer" |
| Downloads | **700K+** | 500K + 100K + 100K, not 600K+ |
| MuatMuat Shipper | `com.azlogistik.muatmuat` | Not a separate app |
| ESENSI | Flagged as no longer published | `com.ta.esensi` is delisted |
| MuatMuat Driver | Omitted entirely | No longer on the Play Store |
| BisChat Backend | Described plainly | Built largely by directing AI tooling; not overstated |

## Structure

```
src/
  app/
    layout.tsx        metadata, fonts, JSON-LD
    page.tsx          section composition
    globals.css       design tokens + Tailwind theme
    icon.png          favicon (generated)
    apple-icon.png    iOS home screen icon
    not-found.tsx     404
    robots.ts         robots.txt
    sitemap.ts        sitemap.xml
  components/
    site-header.tsx   sticky nav + accessible mobile menu
    hero.tsx          name, role, three stats, CTAs
    about.tsx         summary + contact table
    skills.tsx        four skill groups
    experience.tsx    five roles + professional development
    projects.tsx      project grid section
    project-grid.tsx  cards, owns modal state
    project-modal.tsx accessible detail dialog
    credentials.tsx   education, languages, certifications, achievements
    contact.tsx       contact channels
    site-footer.tsx   footer
    section.tsx       Section / SectionHeading / Tag primitives
  lib/
    content.ts        ALL site content
public/
  images/<project>/   icons, headers, screenshots
  og.png              1200x630 social share image
```

## Images

Assets are copied from `Personal/portfolio-assets/`. Each project folder holds `icon.png`,
`header.png`, and `screen-NN.png`; Dandang Gula uses descriptive names
(`screen-01-dashboard.png`, …).

Next.js image optimization is on. Every `<Image>` has explicit `width`/`height` so there is no
layout shift, and cards use `sizes` so the browser fetches an appropriately sized file.

One thing to know: **`bischat/header.png` in the source assets is actually JPEG data** despite the
`.png` extension. It is stored here as `header.jpg`.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and a working skip link
- Heading order is `h1` → `h2` → `h3` with no skipped levels
- Every image has descriptive alt text
- Modal traps focus, closes on `Escape`, and restores focus and scroll on close
- Mobile menu closes on `Escape` and on link click
- Text contrast meets WCAG AA (muted `ink-400` was darkened to `#667283` for this reason)
- `prefers-reduced-motion` disables scrolling and transition animation

## SEO

- Title, description, canonical, and Open Graph / Twitter card metadata
- `og.png` (1200×630) for link previews in WhatsApp and LinkedIn
- JSON-LD `Person` + `WebSite` + `ItemList` graph, generated from `content.ts`
- `robots.txt` and `sitemap.xml`

## Deploying

The project is connected to the existing Vercel project **`vindy-portfolio`**, which owns the
production URL. Keep that project name — creating a new Vercel project would change the URL, and the
current link is already in use on job applications.

Every push to `main` triggers an automatic deploy.
