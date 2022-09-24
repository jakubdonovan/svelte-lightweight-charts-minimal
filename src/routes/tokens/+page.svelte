<script>
	import { tokens } from '$lib/stores/tokens';
	import TokenCard from '$lib/components/TokenCard.svelte';
	import { isEmpty } from '$lib/utils/index';
</script>

<main class="h-screen bg-gray-100">
	<div class="max-w-7xl flex items-center justify-center p-4 h-full gap-2">
		{#if !isEmpty($tokens)}
			{#each Object.values($tokens) as token}
				{#if !isEmpty(token.coingecko_data || {})}
					<TokenCard id={token.coingecko_data.id} prices={token.coingecko_data.prices} />
				{/if}
			{/each}
		{/if}
	</div>
</main>
