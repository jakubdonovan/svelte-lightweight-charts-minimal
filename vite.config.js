import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	kit: {
		prerender: { default: true },
		ssr: {
			noExternal: ['charting_library']
		}
	}
};

export default config;
