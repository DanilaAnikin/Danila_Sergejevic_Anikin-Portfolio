# Danila Sergejevic Anikin Portfolio

Interactive developer portfolio for Danila Sergejevic Anikin, a Prague-based software developer focused on AI engineering, automation, Linux systems, DevOps, and modern web applications.

The site is built as a single polished portfolio experience with multilingual content, dark/light themes, real project previews, and multiple visual modes inspired by different eras of computing and web design.

## Live Site

The project is ready for Vercel deployment.

```txt
https://danila-sergejevic-anikin-portfolio.vercel.app
```

## Repository Description

```txt
Interactive developer portfolio with modern, retro, and Windows 1-inspired design modes.
```

## Features

- Modern AI-era portfolio interface
- Dark and light themes
- Six visual design modes:
  - Modern
  - 1980s terminal / CRT
  - 1990s early web
  - 2000s Web 2.0
  - 2010s flat portfolio
  - Windows 1-inspired desktop
- Multilingual content:
  - English
  - Czech
  - Russian
  - German
  - Spanish
  - French
- Real project previews for:
  - Freio
  - GorillaType
- CV-backed experience section with role history and technical impact
- Rotating hero role text inspired by modern agency/product sites
- Custom-designed language and design-mode controls
- Scroll-triggered section reveals and animated project preview treatments
- Floating scroll-to-top control
- Keyboard shortcuts for visual modes:
  - `1` Modern
  - `2` 1980s
  - `3` 1990s
  - `4` 2000s
  - `5` 2010s
  - `6` Windows 1
- Persistent language and visual mode preferences
- SEO metadata, sitemap, robots file, and JSON-LD person schema
- Responsive layout for desktop, tablet, and mobile
- Reduced-motion support

## Tech Stack

- Next.js
- React
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
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    portfolio-app.tsx
    providers.tsx
  data/
    portfolio.ts
  lib/
    utils.ts
public/
  cv/
    danila-anikin-cv.html
    danila-anikin-cv.pdf
  logo.svg
  projects/
    freio.png
    gorillatype.png
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

Open:

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

## CV File

The polished CV PDF is available here:

```txt
public/cv/danila-anikin-cv.pdf
```

The editable source for the PDF is:

```txt
public/cv/danila-anikin-cv.html
```

The portfolio links to the PDF from the hero section.

## Content Editing

Most personal content lives in:

```txt
src/data/portfolio.ts
```

That file contains:

- language translations
- visual mode labels
- project data
- social links
- skills
- education timeline

## Project Previews

The preview images are stored in:

```txt
public/projects/freio.png
public/projects/gorillatype.png
```

They were captured from the live project sites:

- `https://www.freio.cz/`
- `https://gorilla-type-orpin.vercel.app/`

## Deployment

The project is optimized for Vercel.

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

Recommended Vercel settings:

```txt
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: .next
```

## Notes

The 1980s mode is implemented as an authentic 1980s computing interface rather than an exact 1980s website, because the public web did not exist in the 1980s.

The Windows 1 mode is a custom Windows 1-inspired interface. It avoids using protected Microsoft assets while preserving the visual spirit of early desktop UI.

## License

Personal portfolio project. All personal content and project previews belong to Danila Sergejevic Anikin unless stated otherwise.
