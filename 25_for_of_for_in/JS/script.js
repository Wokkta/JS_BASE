const buttons = document.querySelectorAll('button');
/*for (button of buttons){
	button.style.backgroundColor = 'green';
}*/
for (key in buttons){
	buttons[key].style.backgroundColor = 'green';
}