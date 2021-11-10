'use strict';

function showVerticalMessage(str) {
	if (str.startsWith('м')) {
		str = 'M' + str.slice(1);
	};
	for (let char of str.slice(0, 10)) {
		console.log(char);
	};
};

showVerticalMessage('марафон');