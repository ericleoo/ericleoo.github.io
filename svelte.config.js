import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
/*
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};
export default config;
*/
/*
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md', '.svx']
    })
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
*/

const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [
        preprocess({
            postcss: true
        }),
        mdsvex(mdsvexConfig)
    ],
    kit: {
        adapter: adapter()
    }
};

export default config;
