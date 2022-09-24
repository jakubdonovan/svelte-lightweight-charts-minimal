<script>
	import { page } from '$app/stores';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Tokens', path: '/tokens' }
	];
</script>

<nav class="bg-brand-white-100 shadow-sm">
	<div class="flex h-14 items-center gap-4 px-8">
		{#each nav as { title, path }}
			<a data-sveltekit-prefetch href={path} class="rounded-md px-3 py-2 text-sm font-normal text-gray-500 hover:bg-gray-100" class:bg-gray-100={$page.url.pathname === `${path}`}>
				{title}
			</a>
		{/each}
	</div>
</nav>
