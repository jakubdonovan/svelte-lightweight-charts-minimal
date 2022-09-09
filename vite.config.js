import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	kit: {
		prerender: { default: true },
		ssr: {
			noExternal: ['svelte-lightweight-charts', 'lightweight-charts']
		}
	}
};

export default config;
