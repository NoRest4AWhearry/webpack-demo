module.exports = function() {
	var element = document.createElement('h1');

	element.innerHTML = 'Hello World, My Name is Allen';
	element.style.color = 'white';
	element.style.backgroundColor = '#31abde';
	element.style.width = '33vw';
	element.style.height = element.style.width;
	element.style.minWidth = '100px';
	element.style.minHeight = element.style.minWidth

	return element;
};