# My Portfolio

[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://manishkumar0404.github.io/Portfolio/)

Portfolio site with precompiled React and Tailwind CSS assets. View the live site here:

- Live demo: https://manishkumar0404.github.io/Portfolio/

## Local development

Install dependencies:

```bash
npm install
```

Build static assets:

```bash
npm run build
```

Then open `index.html` with Live Server.

## Deploy

GitHub Pages (manual):

1. Ensure `npm run predeploy` produces a `dist/` folder.
2. Run:

```bash
npm run deploy
```

Vercel (recommended):

- Build Command: `npm run predeploy`
- Output Directory: `dist`

Or deploy with the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```
