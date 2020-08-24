

window.addEventListener('load', function() {
	class Person {
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}
		hasCat(){return this.happiness = this.happiness+1}
		hasRest(){return this.happiness = this.happiness+1}
		hasMoney(){return this.happiness = this.happiness+1}
		isSunny() {
				const APIKey ='cc0fdd4b8c2f8c50d12262eed669fcf4';
				const city = 'Москва';
				const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

				let xhr = new XMLHttpRequest();

				setTimeout(xhr.open('GET', url, false), 0);

				xhr.send();

				let DATA = JSON.parse(xhr.responseText);
				let Temp = DATA.main.temp - 273;

				if(Temp > 15) {return this.happiness = this.happiness+1}
				else {return this.happiness}
}}
const form = document.forms[0];
form.onsubmit = function(e){
	e.preventDefault();
	// everything is ok there
	var Human = new Person(form.elements.name.value);
	let userName = document.querySelector('.personName')
	let icon = document.querySelector('.icon')
	userName.innerHTML = form.elements.name.value;

	if(form.elements.cat.value == 'yes'){Human.hasCat()}
	if (form.elements.rest.value == 'yes'){Human.hasRest()}
	if (form.elements.money.value =='yes'){Human.hasMoney()}
	Human.isSunny()
	var icon = document.querySelector('.icon');
	if (Human.happiness == 4){
	icon.innerHtml = '&#128513';
}
else if(Human.happiness ==3 || Human.happiness ==2){
		icon.innerHtml ='&#128528';
	}
	else{
		// everything is ok there
		icon.innerHtml ='&#128577';
	}	
}
})