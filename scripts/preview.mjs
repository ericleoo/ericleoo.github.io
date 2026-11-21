import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'dist');
const port = Number(process.env.PORT || 4173);

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function resolveFile(pathname) {
  const safePath = path.resolve(root, `.${pathname}`);

  if (!safePath.startsWith(root)) return null;
  if (fs.existsSync(safePath) && fs.statSync(safePath).isFile()) return safePath;

  if (!path.extname(safePath)) {
    if (fs.existsSync(`${safePath}.html`)) return `${safePath}.html`;
    const indexFile = path.join(safePath, 'index.html');
    if (fs.existsSync(indexFile)) return indexFile;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);
  const file = resolveFile(pathname);

  if (file) {
    const body = fs.readFileSync(file);
    res.statusCode = 200;
    res.setHeader('Content-Type', CONTENT_TYPES[path.extname(file)] || 'application/octet-stream');
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    res.end(body);
    return;
  }

  const notFound = path.join(root, '404.html');
  res.statusCode = 404;
  res.setHeader('Content-Type', CONTENT_TYPES['.html']);
  if (req.method === 'HEAD' || !fs.existsSync(notFound)) {
    res.end();
    return;
  }
  res.end(fs.readFileSync(notFound));
});

server.listen(port, () => {
  console.log(`Preview: http://localhost:${port}`);
});
