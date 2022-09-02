<script>
	import { onMount, onDestroy } from 'svelte';
	import { widget } from '$lib/charting_library';

	function getLanguageFromURL() {
		const regex = new RegExp('[\\?&]lang=([^&#]*)');
		const results = regex.exec(window.location.search);
		return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

	export let symbol = 'AAPL';
	export let interval = 'D';
	export let datafeedUrl = 'https://demo_feed.tradingview.com';
	export let libraryPath = '../../src/lib/charting_library/';
	export let chartsStorageUrl = 'https://saveload.tradingview.com';
	export let chartsStorageApiVersion = '22.032';
	export let clientId = 'tradingview.com';
	export let userId = 'public_user_id';
	export let fullscreen = false;
	export let autosize = true;
	export let studiesOverrides = {};

	let chartContainer;
	let tvWidget = null;

	onMount(() => {
		setTimeout(() => {
			new window.Datafeeds.UDFCompatibleDatafeed(datafeedUrl);
			const widgetOptions = {
				symbol,
				datafeed: new window.Datafeeds.UDFCompatibleDatafeed(datafeedUrl),
				interval: interval,
				container: chartContainer,
				library_path: libraryPath,
				locale: getLanguageFromURL() || 'en',
				disabled_features: ['use_localstorage_for_settings'],
				enabled_feeatures: ['study_templates'],
				charts_storage_url: chartsStorageUrl,
				charts_storage_api_version: chartsStorageApiVersion,
				client_id: clientId,
				user_id: userId,
				fullscreen: fullscreen,
				autosize: autosize,
				studies_overrides: studiesOverrides,
				debug: true
			};
			tvWidget = new widget(widgetOptions);

			console.log('WINDOW:', window);
			console.log('MOUNTED:', tvWidget);
			console.log('CHART CONTEINER:', chartContainer);
		}, 500);
	});
</script>

<svelte:head>
	<script src="../../src/lib/datafeeds/udf/dist/bundle.js"></script>
</svelte:head>

<div class="TVChartContainer h-screen" bind:this={chartContainer} />
