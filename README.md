# Eric's Blog

A personal archive of essays on economics, markets, and monetary history.

The site is a small static site generator built on Vite. Every page is written to plain HTML at build time, so the essays work without JavaScript and can be read with `curl`.

## How it works

- `posts/<slug>/index.md` is the source of truth for each essay. Front matter holds the title, date, and published flag.
- `scripts/site.mjs` parses the Markdown, builds the table of contents, and renders the HTML templates.
- `scripts/vite-plugin-site.mjs` serves generated pages during development and writes `index.html`, `posts/<slug>.html`, `404.html`, `rss.xml`, `sitemap.xml`, and `robots.txt` during a build.
- `src/client.ts` is the only client-side JavaScript. It handles the theme switch and the active table-of-contents link.
- `src/styles/main.css` contains the full design. Fonts are self-hosted through Fontsource.

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

The dev server renders pages on demand, so `/posts/anothers-thoughts` is available without a browser.

## Build and preview

```bash
npm run build
npm run preview
```

Check that the raw HTML is complete:

```bash
curl -s http://localhost:4173/posts/anothers-thoughts | head
```

## Deploy

```bash
npm run deploy
```

This publishes `dist` to the `gh-pages` branch. The build emits a `.nojekyll` file so GitHub Pages serves the static pages as-is.

## Tests

```bash
npm run test:unit
```
