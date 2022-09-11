<script>
	import { CrosshairMode } from 'lightweight-charts';
	import { Chart, CandlestickSeries, PriceLine, PriceScale, TimeScale } from 'svelte-lightweight-charts';
	import { data } from '$lib/priceData.js';

	let observer;

	let ref = (element) => {
		if (observer) {
			observer.disconnect();
		}
		if (!element) {
			return;
		}
		observer = new ResizeObserver(([entry]) => {
			chartOptions.width = entry.contentRect.width;
			chartOptions.height = entry.contentRect.height;
		});
		observer.observe(element);
	};

	const chartOptions = {
		container: { ref },
		width: 600,
		height: 400,
		layout: {
			backgroundColor: 'rgba(255, 255, 255, 0)',
			textColor: '#ccc'
		},
		grid: {
			vertLines: {
				visible: true,
				color: 'rgba(35, 38, 59, 1)',
				style: 2
			},
			horzLines: {
				visible: true,
				color: 'rgba(35, 38, 59, 1)',
				style: 2
			}
		},
		crosshair: {
			horzLine: {
				color: '#aaa'
			},
			vertLine: {
				color: '#aaa'
			},
			mode: 0
		},
		timeScale: {
			// https://github.com/tradingview/lightweight-charts/blob/master/docs/time-scale.md#time-scale
			rightOffset: 5,
			borderVisible: false,
			barSpacing: 5,
			timeVisible: true,
			fixLeftEdge: true
		},
		priceScale: {
			// https://github.com/tradingview/lightweight-charts/blob/master/docs/customization.md#price-axis
			borderVisible: false
		}
	};

	const seriesOptions = {
		// https://github.com/tradingview/lightweight-charts/blob/master/docs/area-series.md
		reactive: true,
		lineColor: '#5472cc',
		topColor: 'rgba(49, 69, 131, 0.4)',
		bottomColor: 'rgba(42, 64, 103, 0.0)',
		lineWidth: 2,
		priceLineColor: '#3a3e5e',
		downColor: '#fa3c58',
		wickDownColor: '#fa3c58',
		upColor: '#0ecc83',
		wickUpColor: '#0ecc83',
		borderVisible: false
	};
</script>

<Chart {...chartOptions}>
	<CandlestickSeries {data} {seriesOptions} />
</Chart>
