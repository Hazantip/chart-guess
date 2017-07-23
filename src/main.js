// global css
import './theme/theme.scss';

import { Chart } from './App';

/**
 * entry
 */
function main() {
	const labels = ['2008', '09', '10', '11', '12', '13', '14', '15', '16', '2017'];
	const dataSize = labels.length;
	const dataArr = new Array(dataSize).fill(null).map(() => (+(Math.random() * 10000).toFixed(4)));
	const breakPoint = dataSize / 2;

	const data = {
		title: 'Under Mr. BiBi, {the number} of {violent crimes} per 1,000,000 people..',
		btnTitle: 'Show results',
		legend: {
			start: 'BiBi',
			final: 'Lo BiBi',
			user: 'Draw the line'
		},
		labels,
		series: [dataArr],
		breakPoint
	};
	const options = {
		// high: 100000, // max Y value, set here or will be automatically calculated by chart.init()
		showArea: true
	};

	const chart = new Chart('.ct-chart', data, options);
	chart.init();

	console.info(chart);
}

document.addEventListener('DOMContentLoaded', main);
