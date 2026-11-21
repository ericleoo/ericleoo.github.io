import { renderRoute, renderSite } from './site.mjs';

const OWN_ROUTES = new Set(['/', '/rss.xml', '/sitemap.xml', '/robots.txt', '/404', '/404.html']);

function isOwnRoute(pathname) {
  return OWN_ROUTES.has(pathname) || /^\/posts\/[^/]+\/?$/.test(pathname);
}

export function sitePlugin() {
  return {
    name: 'static-blog',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || (req.method !== 'GET' && req.method !== 'HEAD')) {
          next();
          return;
        }

        let pathname;
        try {
          pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        } catch {
          next();
          return;
        }

        if (!isOwnRoute(pathname)) {
          next();
          return;
        }

        const { status, type, body } = renderRoute(pathname, { dev: true });
        res.statusCode = status;
        res.setHeader('Content-Type', type);
        res.setHeader('Cache-Control', 'no-store');
        if (req.method === 'HEAD') {
          res.end();
          return;
        }
        res.end(body);
      });
    },
    generateBundle(_options, bundle) {
      const clientChunk = Object.values(bundle).find(
        (item) => item.type === 'chunk' && item.isEntry && item.name === 'client'
      );
      const cssAsset = Object.values(bundle).find(
        (item) => item.type === 'asset' && item.fileName.endsWith('.css')
      );

      const assets = {
        js: clientChunk ? `/${clientChunk.fileName}` : '',
        css: cssAsset ? `/${cssAsset.fileName}` : ''
      };

      const site = renderSite({ assets });

      for (const [fileName, source] of site.pages) {
        this.emitFile({ type: 'asset', fileName, source });
      }

      this.emitFile({ type: 'asset', fileName: 'rss.xml', source: site.rss });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: site.sitemap });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: site.robots });
      this.emitFile({ type: 'asset', fileName: '.nojekyll', source: '' });
    }
  };
}
