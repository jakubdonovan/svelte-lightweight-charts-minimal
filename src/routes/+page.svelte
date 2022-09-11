<script>
	import Chart from '$lib/components/chart.svelte';
</script>

<main class="h-screen bg-gray-900">
	<nav class="bg-green-700 text-center">NAVBAR</nav>

	<div class="max-w-7xl mx-auto p-4 grid grid-cols-[minmax(300px,1fr)_300px] gap-4">
		<div class="">
			<Chart />
		</div>
		<div class="bg-red-500 w-full h-[400px]">SOMETHING</div>
	</div>
</main>
