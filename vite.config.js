import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['svelte-lightweight-charts', 'lightweight-charts', 'fancy-canvas']
	}
};

export default config;
