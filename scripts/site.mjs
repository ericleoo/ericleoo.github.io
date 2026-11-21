import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

export const SITE = {
  title: "Eric's Blog",
  shortTitle: 'Eric',
  description:
    'Essays on economics, markets, and monetary history, with a focus on gold, oil, and the institutions in between.',
  url: (process.env.SITE_URL || 'https://ericleoo.github.io').replace(/\/$/, ''),
  language: 'en',
  author: 'Eric'
};

const POSTS_DIR = path.resolve(process.cwd(), 'posts');
const WORDS_PER_MINUTE = 230;
const EXCERPT_LENGTH = 220;

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
  breaks: false
});

const defaultLinkOpen =
  md.renderer.rules.link_open ||
  ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const href = token.attrGet('href') || '';
  if (/^https?:\/\//i.test(href)) {
    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

const defaultImage =
  md.renderer.rules.image ||
  ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.image = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet('loading', 'lazy');
  tokens[idx].attrSet('decoding', 'async');
  return defaultImage(tokens, idx, options, env, self);
};

md.core.ruler.push('stable_heading_ids', (state) => {
  const used = new Map();

  for (let i = 0; i < state.tokens.length; i += 1) {
    const token = state.tokens[i];
    if (token.type !== 'heading_open') continue;

    const inline = state.tokens[i + 1];
    const base = slugify(inlineText(inline)) || 'section';
    const count = used.get(base) || 0;
    used.set(base, count + 1);
    token.attrSet('id', count === 0 ? base : `${base}-${count + 1}`);
  }
});

export function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatDate(value, style = 'long') {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat('en-US', {
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

export function readingTime(plainText) {
  const words = plainText.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function readingLabel(minutes) {
  return minutes >= 120 ? 'Long read' : `${minutes} min read`;
}

export function truncate(value, length = EXCERPT_LENGTH) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length <= length) return text;
  return `${text.slice(0, length).replace(/\s+\S*$/, '')}...`;
}

function inlineText(token) {
  if (!token) return '';
  if (token.type === 'text' || token.type === 'code_inline') return token.content;
  if (token.type === 'softbreak' || token.type === 'hardbreak') return ' ';
  if (token.children) return token.children.map(inlineText).join('');
  return token.content || '';
}

function extractToc(tokens) {
  const toc = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'heading_open') continue;

    const level = Number(token.tag.slice(1));
    if (level < 2 || level > 4) continue;

    toc.push({
      level,
      text: inlineText(tokens[i + 1]).trim(),
      id: token.attrGet('id')
    });
  }

  return toc;
}

function extractPlainText(tokens) {
  const parts = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'inline') continue;
    if (i > 0 && tokens[i - 1].type === 'heading_open') continue;
    const text = inlineText(token).replace(/\s+/g, ' ').trim();
    if (text) parts.push(text);
  }

  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function normalizeDate(value, fallback) {
  const date = value ? new Date(value) : new Date(fallback);
  if (Number.isNaN(date.getTime())) return fallback;
  return date.toISOString().slice(0, 10);
}

function readPost(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const attributes = parsed.data || {};
  const slug = path.basename(path.dirname(filePath));
  const body = parsed.content.trim();
  const env = {};
  const tokens = md.parse(body, env);
  const html = md.renderer.render(tokens, md.options, env);
  const plain = extractPlainText(tokens);
  const title = String(attributes.title || slug);
  const date = normalizeDate(attributes.date, fs.statSync(filePath).mtime.toISOString().slice(0, 10));
  const excerpt = truncate(attributes.excerpt || plain);
  const minutes = readingTime(plain);

  return {
    slug,
    title,
    date,
    published: attributes.published !== false,
    excerpt,
    description: truncate(excerpt, 160),
    html,
    plain,
    toc: extractToc(tokens),
    readingTime: minutes,
    readingLabel: readingLabel(minutes),
    url: `/posts/${slug}`,
    canonical: `${SITE.url}/posts/${slug}`
  };
}

let cache = null;

export function loadPosts({ fresh = false } = {}) {
  const files = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(POSTS_DIR, entry.name, 'index.md'))
    .filter((file) => fs.existsSync(file));

  const key = files
    .map((file) => `${file}:${fs.statSync(file).mtimeMs}`)
    .sort()
    .join('|');

  if (!fresh && cache && cache.key === key) return cache.posts;

  const posts = files
    .map(readPost)
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

  cache = { key, posts };
  return posts;
}

export function postsCacheKey() {
  loadPosts();
  return cache.key;
}

function metaSeparator() {
  return '<span class="meta-sep" aria-hidden="true"></span>';
}

function readLink(href, label) {
  return `<a class="read-link" href="${href}">${label}<span aria-hidden="true"> &rarr;</span></a>`;
}

function sectionHeading(title, note = '') {
  return `
    <div class="section-head">
      <h2>${escapeHtml(title)}</h2>
      ${note ? `<p>${escapeHtml(note)}</p>` : ''}
    </div>`;
}

function tocList(toc) {
  return toc
    .map(
      (item) =>
        `<li class="level-${item.level}"><a href="#${escapeHtml(item.id)}">${escapeHtml(
          item.text
        )}</a></li>`
    )
    .join('');
}

function renderHome(posts) {
  const [latest, ...rest] = posts;
  const totalLabel = posts.length === 1 ? '1 essay' : `${posts.length} essays`;

  const featured = latest
    ? `
      <section class="feature" aria-labelledby="latest-title">
        <div class="shell">
          <div class="section-head">
            <h2 id="latest-title">Latest essay</h2>
          </div>
          <article class="feature-post">
            <p class="meta">
              <time datetime="${latest.date}">${escapeHtml(formatDate(latest.date))}</time>
              ${metaSeparator()}
              ${latest.readingLabel}
            </p>
            <div class="feature-body">
              <h3><a href="${latest.url}">${escapeHtml(latest.title)}</a></h3>
              <p class="feature-excerpt">${escapeHtml(latest.excerpt)}</p>
              ${readLink(latest.url, 'Read the essay')}
            </div>
          </article>
        </div>
      </section>`
    : '';

  const archive = rest.length
    ? `
      <section class="archive" id="essays" aria-labelledby="archive-title">
        <div class="shell">
          ${sectionHeading('Archive', rest.length === 1 ? '1 essay' : `${rest.length} essays`)}
          <ol class="post-list">
            ${rest
              .map(
                (post) => `
              <li class="post-row">
                <article>
                  <time datetime="${post.date}">${escapeHtml(formatDate(post.date, 'short'))}</time>
                  <div class="post-row-main">
                    <h3><a class="post-row-link" href="${post.url}">${escapeHtml(
                  post.title
                )}</a></h3>
                    <p>${escapeHtml(post.excerpt)}</p>
                  </div>
                  <span class="post-row-arrow" aria-hidden="true">&#8599;</span>
                </article>
              </li>`
              )
              .join('')}
          </ol>
        </div>
      </section>`
    : '';

  const archiveHref = rest.length ? '#essays' : latest?.url || '/#about';
  const archiveLabel = rest.length ? 'Browse the archive' : 'Read the latest essay';

  const body = `
    <main id="main">
      <section class="masthead">
        <div class="shell">
          <p class="eyebrow">Personal archive</p>
          <h1>The machinery <em>beneath</em> money.</h1>
          <p class="lede">Essays on economics, markets, and monetary history, collected by Eric.</p>
          <div class="masthead-actions">
            <a class="text-link" href="${archiveHref}">${archiveLabel}</a>
            <span class="masthead-note">${escapeHtml(totalLabel)}</span>
          </div>
        </div>
      </section>
      ${featured}
      ${archive}
      <section class="about" id="about" aria-labelledby="about-title">
        <div class="shell about-grid">
          <h2 id="about-title">About</h2>
          <div class="about-copy">
            <p>Eric's Blog is a personal archive of essays and primary sources on economics, markets, and monetary history, with a particular focus on gold, oil, and the institutions in between.</p>
            <p>The archive is maintained by Eric. Long reads are the point.</p>
          </div>
        </div>
      </section>
    </main>`;

  return layout({
    title: `${SITE.title} - notes on money and markets`,
    description: SITE.description,
    canonical: SITE.url,
    body,
    bodyClass: 'home'
  });
}

function renderPost(post, posts) {
  const index = posts.findIndex((item) => item.slug === post.slug);
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;
  const hasToc = post.toc.length >= 2;

  const toc = hasToc
    ? `
      <details class="toc-mobile">
        <summary>On this page</summary>
        <ol>${tocList(post.toc)}</ol>
      </details>`
    : '';

  const pager = `
    <nav class="post-pager" aria-label="More essays">
      ${
        newer
          ? `<a class="pager-newer" href="${newer.url}">
              <span class="pager-label">Newer essay</span>
              <span class="pager-title">${escapeHtml(newer.title)}</span>
            </a>`
          : '<span></span>'
      }
      ${
        older
          ? `<a class="pager-older" href="${older.url}">
              <span class="pager-label">Older essay</span>
              <span class="pager-title">${escapeHtml(older.title)}</span>
            </a>`
          : '<span></span>'
      }
    </nav>`;

  const body = `
    <main id="main" class="shell post-layout${hasToc ? '' : ' no-toc'}">
      <article class="post">
        <a class="back-link" href="/"><span aria-hidden="true">&larr;</span> All essays</a>
        <header class="post-header">
          <p class="meta">
            <time datetime="${post.date}">${escapeHtml(formatDate(post.date))}</time>
            ${metaSeparator()}
            ${post.readingLabel}
          </p>
          <h1>${escapeHtml(post.title)}</h1>
        </header>
        ${toc}
        <div class="post-body prose">
          ${post.html}
        </div>
        <footer class="post-footer">
          ${readLink('/', 'Back to all essays')}
          ${pager}
        </footer>
      </article>
      ${
        hasToc
          ? `<aside class="toc" aria-label="On this page">
              <p class="toc-title">On this page</p>
              <ol>${tocList(post.toc)}</ol>
            </aside>`
          : ''
      }
    </main>`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: SITE.author },
    publisher: { '@type': 'Organization', name: SITE.title },
    mainEntityOfPage: post.canonical,
    url: post.canonical
  };

  return layout({
    title: `${post.title} | ${SITE.title}`,
    description: post.description,
    canonical: post.canonical,
    body,
    bodyClass: 'post',
    ogType: 'article',
    publishedTime: post.date,
    jsonLd
  });
}

function render404() {
  const body = `
    <main id="main" class="shell notfound">
      <p class="eyebrow">404</p>
      <h1>This page isn't here.</h1>
      <p class="lede">The link may be old, or the essay may have moved.</p>
      ${readLink('/', 'Back to all essays')}
    </main>`;

  return layout({
    title: `Page not found | ${SITE.title}`,
    description: 'The page you were looking for could not be found.',
    canonical: `${SITE.url}/404`,
    body,
    bodyClass: 'not-found',
    noindex: true
  });
}

function renderRss(posts) {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeHtml(post.title)}</title>
      <link>${post.canonical}</link>
      <guid isPermaLink="true">${post.canonical}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeHtml(post.excerpt)}</description>
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeHtml(SITE.title)}</title>
    <link>${SITE.url}</link>
    <description>${escapeHtml(SITE.description)}</description>
    <language>${SITE.language}</language>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;
}

function renderSitemap(posts) {
  const urls = [
    { loc: `${SITE.url}/`, lastmod: posts[0]?.date },
    ...posts.map((post) => ({ loc: post.canonical, lastmod: post.date }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
}

function layout({
  title,
  description,
  canonical,
  body,
  bodyClass = '',
  ogType = 'website',
  publishedTime,
  jsonLd,
  noindex = false
}) {
  const themeScript = `(function(){var r=document.documentElement;r.classList.remove('no-js');try{var p=localStorage.getItem('theme');if(p!=='light'&&p!=='dark'&&p!=='system'){p='system'}r.dataset.themePref=p;r.dataset.theme=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){r.dataset.theme='light';r.dataset.themePref='system'}})();`;

  return `<!doctype html>
<html lang="${SITE.language}" class="no-js" data-theme="light">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>${themeScript}</script>
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    ${noindex ? '<meta name="robots" content="noindex">' : ''}
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="${escapeHtml(SITE.title)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:locale" content="en_US">
    ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}">` : ''}
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#f4f1ea" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#141513" media="(prefers-color-scheme: dark)">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="alternate" type="application/rss+xml" title="${escapeHtml(SITE.title)}" href="/rss.xml">
    ${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>` : ''}
    ${'{{STYLES}}'}
  </head>
  <body id="top" class="${bodyClass}">
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="progress" aria-hidden="true"></div>
    <header class="site-header">
      <div class="shell header-inner">
        <a class="wordmark" href="/" aria-label="${escapeHtml(SITE.title)}, home">
          <span class="wordmark-mark" aria-hidden="true">E</span>
          <span class="wordmark-text">${escapeHtml(SITE.title)}</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="/#essays">Essays</a>
          <a href="/#about">About</a>
          <a href="/rss.xml">RSS</a>
        </nav>
        <div class="theme-switch" role="group" aria-label="Color theme">
          <button type="button" data-theme-value="system" aria-pressed="false">Auto</button>
          <button type="button" data-theme-value="light" aria-pressed="false">Light</button>
          <button type="button" data-theme-value="dark" aria-pressed="false">Dark</button>
        </div>
      </div>
    </header>
    ${body}
    <footer class="site-footer">
      <div class="shell footer-inner">
        <div>
          <p class="footer-brand">${escapeHtml(SITE.title)}</p>
          <p class="footer-note">Notes on money, markets, and monetary history.</p>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          <a href="/#essays">Essays</a>
          <a href="/#about">About</a>
          <a href="/rss.xml">RSS</a>
          <a href="#top">Back to top</a>
        </nav>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} ${escapeHtml(SITE.title)}</p>
      </div>
    </footer>
    ${'{{SCRIPTS}}'}
  </body>
</html>`;
}

function withAssets(html, assets) {
  const styles = assets.css ? `<link rel="stylesheet" href="${assets.css}">` : '';
  const scripts = assets.js ? `<script type="module" src="${assets.js}"></script>` : '';
  return html.replace('{{STYLES}}', styles).replace('{{SCRIPTS}}', scripts);
}

let siteCache = null;

export function renderSite({ assets, dev = false } = {}) {
  const posts = loadPosts();
  const assetSet = assets || (dev
    ? { css: '/src/styles/main.css?direct', js: '/src/client.ts' }
    : { css: '', js: '' });
  const cacheKey = `${postsCacheKey()}::${assetSet.css}::${assetSet.js}`;

  if (siteCache && siteCache.key === cacheKey) return siteCache.site;

  const pages = new Map();
  pages.set('index.html', withAssets(renderHome(posts), assetSet));

  for (const post of posts) {
    pages.set(`posts/${post.slug}.html`, withAssets(renderPost(post, posts), assetSet));
  }

  const notFound = withAssets(render404(), assetSet);
  pages.set('404.html', notFound);

  const site = {
    pages,
    notFound,
    posts,
    rss: renderRss(posts),
    sitemap: renderSitemap(posts),
    robots: renderRobots()
  };

  siteCache = { key: cacheKey, site };
  return site;
}

export function renderRoute(pathname, { assets, dev = false } = {}) {
  const site = renderSite({ assets, dev });

  if (pathname === '/' || pathname === '') {
    return { status: 200, type: 'text/html; charset=utf-8', body: site.pages.get('index.html') };
  }

  if (pathname === '/rss.xml') {
    return { status: 200, type: 'application/rss+xml; charset=utf-8', body: site.rss };
  }

  if (pathname === '/sitemap.xml') {
    return { status: 200, type: 'application/xml; charset=utf-8', body: site.sitemap };
  }

  if (pathname === '/robots.txt') {
    return { status: 200, type: 'text/plain; charset=utf-8', body: site.robots };
  }

  const match = pathname.match(/^\/posts\/([^/]+)\/?$/);
  if (match) {
    const page = site.pages.get(`posts/${match[1]}.html`);
    if (page) {
      return { status: 200, type: 'text/html; charset=utf-8', body: page };
    }
  }

  return { status: 404, type: 'text/html; charset=utf-8', body: site.notFound };
}
