# martingetscreative.com

Personal portfolio site for Martin Van Londen — motion designer and creative technologist.

Built with **Astro 5** + **Tailwind CSS v4**, deployed to **Netlify**.

---

## Quick Start

```bash
# 1. Install dependencies (do this once)
npm install

# 2. Start the dev server
npm run dev

# Open http://localhost:4321
```

---

## Adding a New Project

Drop a new `.md` file into `src/content/projects/`:

```
src/content/projects/my-new-project.md
```

Minimum frontmatter required:

```markdown
---
title: "My New Project"
description: "A one-sentence description shown in grids."
category: Motion          # Motion | Video | Design | Web3
cover: /images/projects/my-new-project.jpg
publishDate: 2025-03-01
---

Write your project body here in Markdown.
```

Put the cover image in: `public/images/projects/my-new-project.jpg`

The project will automatically appear at `/work/my-new-project`.

---

## Swapping Your Showreel

In `src/pages/index.astro`, find this line near the top and replace the ID:

```js
const SHOWREEL_VIMEO_ID = 'YOUR_SHOWREEL_VIMEO_ID';
```

---

## Customizing the Design

All brand colors and fonts live in one place: `src/styles/global.css`

```css
@theme {
  --color-accent:  #ccff00;   /* ← Change this to rebrand */
  --color-bg:      #070707;
  --color-text:    #f0efee;
  /* ... */
}
```

---

## Deploying to Netlify

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build settings are auto-detected from `netlify.toml`
5. Click **Deploy site**

That's it. Free SSL, global CDN, auto-deploys on `git push`.

---

## File Structure

```
src/
├── components/
│   ├── Nav.astro           — sticky navigation
│   ├── Footer.astro        — site footer
│   ├── ProjectCard.astro   — reusable project card
│   ├── ProjectGrid.astro   — filterable grid of cards
│   └── VideoEmbed.astro    — lazy Vimeo/YouTube player
├── content/
│   ├── config.ts           — defines project frontmatter schema
│   └── projects/           — one .md file = one project
├── layouts/
│   ├── BaseLayout.astro    — HTML shell, meta, nav+footer
│   └── ProjectLayout.astro — individual project page template
├── pages/
│   ├── index.astro         — home page
│   ├── work/
│   │   ├── index.astro     — /work — full portfolio grid
│   │   └── [slug].astro    — /work/:slug — dynamic project pages
│   ├── about.astro
│   └── contact.astro
└── styles/
    └── global.css          — design tokens + base styles
```
