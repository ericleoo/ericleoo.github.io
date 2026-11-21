import { defineConfig } from 'vite';
import { sitePlugin } from './scripts/vite-plugin-site.mjs';

export default defineConfig({
  appType: 'custom',
  plugins: [sitePlugin()],
  build: {
    rollupOptions: {
      input: {
        client: 'src/client.ts',
        styles: 'src/styles/main.css'
      }
    }
  }
});
