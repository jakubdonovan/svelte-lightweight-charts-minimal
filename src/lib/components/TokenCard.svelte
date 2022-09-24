<script>
	import Sparkline from '$lib/components/Sparkline.svelte';
	export let prices;
</script>

<div class="flex justify-between rounded-lg p-3 shadow-sm bg-white">
	<Sparkline data={prices} />
</div>
