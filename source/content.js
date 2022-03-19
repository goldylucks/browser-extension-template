import optionsStorage from './options-storage.js';
import * as classes from './my.module.css'

async function init() {
	const options = await optionsStorage.getAll();
	const color = 'rgb(' + options.colorRed + ', ' + options.colorGreen + ',' + options.colorBlue + ')';
	const text = options.text;
	const notice = document.createElement('div');
	notice.innerHTML = text;
	document.body.append(notice);
	notice.id = 'text-notice';
	notice.style.border = '2px solid ' + color;
	notice.style.color = color;
}

init();
