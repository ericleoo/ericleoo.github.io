import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import * as path from 'path';
import readingTime from 'remark-reading-time'
import relativeImages from 'mdsvex-relative-images'
import remarkExternalLinks from 'remark-external-links'

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
    extensions: ['.md', '.svx'],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [
      relativeImages,
      // external links open in a new tab
      [remarkExternalLinks, { target: '_blank', rel: 'noopener' }],
    ],
});

export default config;
