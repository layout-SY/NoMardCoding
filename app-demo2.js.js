const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
	title.classList.toggle('clicked');
	// if (title.classList.contains(clickedClass) === clickedClass) {
	// 	title.classList.remove(clickedClass);
	// } else {
	// 	title.classList.add(clickedClass);
	// }

	// const currentColor = title.style.color;
	// let newColor;
	// if (currentColor === 'blue') {
	// 	newColor = 'tomato';
	// } else {
	// 	newColor = 'blue';
	// }
	// title.style.color = newColor;
}

title.addEventListener('click', handleTitleClick);
