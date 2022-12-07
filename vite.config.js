import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  resolve: {
    alias: {
      '@components': resolve('./src/lib/components'),
      '@lib': resolve('./src/lib'),
      '@icons': resolve('./src/lib/icons'),
    },
  },
};

export default config;
