<script>
	import Sparkline from '$lib/components/Sparkline.svelte';
	export let id, prices;
</script>

<div class="flex flex-col items-center gap-2 rounded-lg p-2 shadow-sm bg-white text-gray-600 text-xs">
	{id}
	<Sparkline data={prices} />
</div>
