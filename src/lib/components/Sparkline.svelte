<script>
	import { Chart, AreaSeries } from 'svelte-lightweight-charts';
	import { formatCurrency } from '@coingecko/cryptoformat';
	export let data;

	let priceData = data.reverse().map(([time, value]) => ({ time, value }));

	const chartOptions = {
		height: 60,
		width: 150,
		layout: {
			backgroundColor: 'rgba(255, 255, 255, 0)',
			textColor: '#71717A'
		},
		grid: {
			vertLines: {
				visible: false
			},
			horzLines: {
				visible: false
			}
		},
		crosshair: {
			mode: 0,
			horzLine: {
				visible: false
			},
			vertLine: {
				visible: false
			}
		},
		timeScale: {
			// https://github.com/tradingview/lightweight-charts/blob/master/docs/time-scale.md#time-scale
			rightOffset: 0,
			borderVisible: false,
			barSpacing: 5,
			fixLeftEdge: true,
			timeVisible: false,
			visible: false
		},
		priceScale: {
			// https://github.com/tradingview/lightweight-charts/blob/master/docs/customization.md#price-axis
			borderVisible: false,
			visible: false
		},
		rightPriceScale: {
			visible: false
		}
	};

	const seriesOptions = {
		// https://github.com/tradingview/lightweight-charts/blob/master/docs/area-series.md
		data: priceData,
		reactive: true,
		// lineColor: data[data.length - 1].value >= data[0].value ? '#57BD0D' : '#EE5465',
		lineColor: '#5472cc',
		lineWidth: 2,
		topColor: 'rgba(255, 255, 255, 0)',
		bottomColor: 'rgba(255, 255, 255, 0)',
		priceLineVisible: false,
		borderVisible: false
	};
</script>

<Chart {...chartOptions}>
	<AreaSeries {...seriesOptions} />
</Chart>
