# Danila Sergejevič Anikin Portfolio

An interactive personal portfolio for **Danila Sergejevič Anikin**, a Prague-based software developer focused on AI engineering, automation, Linux systems, DevOps, and modern product software.

The project is built as a full portfolio product, not a static resume page. It combines multilingual content, era-based visual modes, animated project previews, a local portfolio copilot, terminal-style inspection, proof mode, architecture views, an interactive CV explorer, and a responsive design system.

## Live Site

```txt
https://danila-sergejevic-anikin-portfolio.vercel.app
```

## Repository Description

```txt
Interactive AI-era developer portfolio with multilingual content, proof mode, project architecture views, an interactive CV, and six design modes.
```

## Highlights

- Multilingual portfolio in English, Czech, Russian, German, Spanish, and French
- Dark and light themes across every design mode
- Six visual modes:
  - Modern AI-era interface
  - 1980s CRT terminal
  - 1990s early-web directory
  - 2000s glossy Web 2.0 launcher
  - 2010s flat dashboard
  - Windows 1-inspired desktop
- Mode-specific hero showcase on the right side of the hero section
- Animated rotating role text
- Selected project previews for Freio and GorillaType
- System status dashboard
- AI portfolio lab with local prompt matching
- Terminal mode with portfolio commands
- Proof mode with evidence signals
- Project architecture views
- Interactive CV explorer with filters
- Skill graph for connected engineering areas
- Scroll-triggered reveals and motion states
- Floating scroll-to-top button
- Persistent language and design-mode preferences
- Keyboard shortcuts for design modes
- SEO metadata, sitemap, robots file, and structured person data
- Responsive layout for desktop, wide monitors, tablets, and mobile
- Reduced-motion support

## Design Modes

| Shortcut | Mode | Direction |
| --- | --- | --- |
| `1` | Modern | AI-era console, system dashboard, sharp panels |
| `2` | 1980s | CRT terminal, scanlines, monochrome computing |
| `3` | 1990s | Early web links, counters, table-like structure |
| `4` | 2000s | Glossy product UI, bright badges, launcher panels |
| `5` | 2010s | Flat dashboard, restrained startup-style layout |
| `6` | Windows 1 | Monochrome desktop windows and file-like controls |

The selected mode is stored in `localStorage`, so returning visitors keep their preferred visual style.

## Interactive Sections

### System Status

A top-level dashboard summarizing the portfolio as a live engineering surface:

- portfolio OS
- Vercel and GitHub delivery
- AI automation focus
- Prague-based multilingual profile

### AI Portfolio Lab

A local, client-side portfolio intelligence panel. It does not call an external AI API. Instead, it uses structured prompt data from `src/data/portfolio.ts` to answer common questions about Danila's work, projects, AI signal, and technical range.

### Terminal Mode

A command-style inspection panel with predefined commands:

```txt
whoami
skills --ai
projects --best
experience --devops
proof --show
cv --interactive
```

### Proof Mode

An evidence-first toggle that surfaces proof signals such as:

- live products
- work range
- technical base
- multilingual communication

### Project Architecture

System-style breakdowns for:

- Freio
- GorillaType

Each project includes layers, flow, stack, and a direct live-site link.

### Interactive CV

The PDF CV remains available, but the website also includes a filterable CV explorer for:

- AI
- Frontend
- Infrastructure
- Product
- Teaching

### Skill Graph

An interactive graph connecting:

- AI Engineering
- Automation
- Software
- Linux
- DevOps
- Product
- Teaching

## Selected Projects

### Freio

```txt
https://www.freio.cz/
```

EdTech platform for entrance-exam and SCIO preparation with realistic tests, instant evaluation, student onboarding, analytics, and product flow.

### GorillaType

```txt
https://gorilla-type-orpin.vercel.app/
```

Typing-speed application with practice modes, settings, leaderboards, tournaments, clans, accounts, and competitive product mechanics.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Lucide React
- Vercel

## Project Structure

```txt
src/
  app/
    globals.css        Global design system, themes, modes, responsive styles
    layout.tsx         Metadata and structured data
    page.tsx           App entry
    robots.ts          Robots metadata
    sitemap.ts         Sitemap metadata
  components/
    portfolio-app.tsx  Main interactive portfolio application
    providers.tsx      Theme provider wrapper
  data/
    portfolio.ts       Content, translations, projects, CV filters, proof data
  lib/
    utils.ts           Utility helpers
public/
  cv/
    danila-anikin-cv.html
    danila-anikin-cv.pdf
  projects/
    freio.png
    gorillatype.png
  logo.svg
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the production server after building:

```bash
npm run start
```

## Content Editing

Most portfolio content lives in:

```txt
src/data/portfolio.ts
```

That file contains:

- languages
- visual modes
- social links
- selected projects
- experience
- skill groups
- system status cards
- copilot prompts
- terminal commands
- proof signals
- architecture views
- skill graph nodes
- CV filters
- translated UI copy

## CV

The downloadable PDF is stored at:

```txt
public/cv/danila-anikin-cv.pdf
```

The editable source is:

```txt
public/cv/danila-anikin-cv.html
```

To regenerate the PDF from the HTML source with Chromium:

```bash
chromium --headless --disable-gpu --no-sandbox \
  --print-to-pdf=public/cv/danila-anikin-cv.pdf \
  file://$PWD/public/cv/danila-anikin-cv.html
```

The CV includes the portfolio link:

```txt
danila-sergejevic-anikin-portfolio.vercel.app
```

## Project Preview Images

Project preview assets live in:

```txt
public/projects/freio.png
public/projects/gorillatype.png
```

When updating previews, capture the live project after the page has fully loaded. Freio may need several seconds before the screenshot is accurate.

## Deployment

This app is optimized for Vercel.

Recommended settings:

```txt
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

Deployment workflow:

1. Push changes to GitHub.
2. Vercel detects the push.
3. Vercel installs dependencies.
4. Vercel runs the production build.
5. The portfolio is deployed as a Next.js app.

## Quality Checks

Before pushing meaningful changes, run:

```bash
npm run lint
npm run build
```

For visual changes, also check:

- desktop hero
- mobile hero
- language selector
- design-mode selector
- proof mode
- project previews
- interactive CV
- navbar horizontal scrolling on mobile

## Accessibility And UX Notes

- The site supports reduced-motion user preferences.
- Navigation uses real anchor links.
- Interactive controls are implemented as buttons or links.
- Language and design-mode choices persist locally.
- Mobile navigation is horizontally scrollable because the portfolio exposes many sections.

## Design Notes

The design intentionally avoids being a generic portfolio template. The site behaves like an interactive engineering surface:

- the hero changes by design mode
- the portfolio can be inspected through terminal-style commands
- proof mode exposes evidence
- projects include architecture maps
- the CV exists both as a PDF and as an interactive explorer

The 1980s mode is interpreted as an authentic 1980s computing interface because public websites did not exist in the 1980s. The Windows 1 mode is inspired by early desktop UI and does not use protected Microsoft assets.

## License

Personal portfolio project. Personal content, CV content, and project previews belong to Danila Sergejevič Anikin unless stated otherwise.
