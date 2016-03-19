import $ from 'jquery';

import learn, {initializeQueryArr, recognize, initialize} from '../neuralnet';

var learnImagesClassName = $('.learn');
var learnImages = $(learnImagesClassName);
var clearButtons = $('.clearLearnImage');
var queryImageClassName = $('.query');
var queryImage = $('#query');
var queryClearButton = $('#clearQueryImage');
var learnButton = $('#learnButton');
var recognizeButton = $('#recognizeButton');

learnImages.on("click", "td", function(e) {
		let element = $(this);
		element.hasClass('active') ? element.removeClass('active') : element.addClass('active');
		//get new values on every click
		initialize();
	}
);

learnButton.on("click", function(e) {
		learn();
	}
);

queryImage.on("click", "td", function(e) {
		let element = $(this);
		element.hasClass('active') ? element.removeClass('active') : element.addClass('active');
		//get new values on every click
		initializeQueryArr();
	}
);

recognizeButton.on("click", function(e) {
		recognize();
	}
);

export function getColoredElements() {
	let coloredElements = [];
	learnImages.each(function(key, value) {
		coloredElements[key] = [];
		coloredElements[key].push(1);
			$(value).find('tbody>tr').each(function(subKey, row) {
					$(row).find('td').each(function(subSubKey, cell) {
							let cellEl = $(cell);
							let cellValue = cellEl.hasClass('active') ? 1 : -1;
							coloredElements[key].push(cellValue);
						}
					);
				}
			);
		}
	);
	return coloredElements;
}

export function getColoredQueryElements() {
	let coloredElements = [];
	queryImage.find('tbody>tr').each(function(subKey, row) {
			$(row).find('td').each(function(subSubKey, cell) {
					let cellEl = $(cell);
					let cellValue = cellEl.hasClass('active') ? 1 : -1;
					coloredElements.push(cellValue);
				}
			);
		}
	);
	return coloredElements;
}
