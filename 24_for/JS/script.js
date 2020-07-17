const divs = document.querySelectorAll('div');
console.log(divs);
for (var i = 0; i < divs.length; i++) {
	divs[i].style.backgroundImage = 'linear-gradient('+(45+i*5)+'deg, red, yellow)';
}