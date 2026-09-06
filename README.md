# akshara-ns.github.io

Personal portfolio site. Live at **https://akshara-ns.github.io**.

Built with React 19, Vite, and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts: `npm run build` (production build to `dist/`), `npm run preview`
(serve the build), `npm run lint`.

## Editing content

Content is separated from presentation, so most updates are one-file edits under
`src/data/` and need no component changes.

| File | What it holds |
| --- | --- |
| `src/data/about.js` | Name, tagline, email and social links, resume path, shared `links` map, and the bio paragraphs |
| `src/data/timeline.js` | Education and work entries for the Experience section |
| `src/data/projects.js` | Project cards |
| `src/data/skills.js` | Skill categories |
| `src/theme.js` | Colour tokens, plus section order and visibility |

### Inline links

`bio` paragraphs and project `subtitle` fields support Markdown-style links:

```js
`Master's student at [Carnegie Mellon University](${links.cmu}).`
```

`src/components/RichText.jsx` renders these, so URLs stay in the data files
instead of the JSX. Reusable URLs live in the `links` object in `about.js`.

### Timeline ordering

Entries sort newest-first by their `start` key (`'YYYY-MM'`), so array position
in the file does not matter. Entries with `type: 'education'` render as larger
milestone nodes; everything else is a role. Optional per-entry fields:

- `organizationUrl` — links the organisation name
- `advisor: { name, url }` — renders an "Advised by" line
- `instructors: [{ name, url }]` — renders an "Instructor(s)" line

### Sections

`sectionConfig` in `src/theme.js` controls which sections appear and in what
order. Setting `enabled: false` hides a section and removes it from the navbar.

### Assets

Files in `public/` are served from the site root — the resume is `public/akshara.pdf`,
referenced as `/akshara.pdf` via `personal.resumeUrl`.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. No manual deploy step.
