const APIKey ='cc0fdd4b8c2f8c50d12262eed669fcf4'











var icon = document.querySelector('.icon');
const city = 'Москва'
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey+'';
	let xhr = new XMLHttpRequest();
	if( xhr.status !==200){
	console.log(xhr.status);
console.log(xhr.statusText);
}
else{
let DATA = JSON.parse(xhr.responseText);
console.log(DATA);
console.log('hi');
let Temp = DATA.main.temp - 273;
if(Temp > 15) {
				return this.happiness = this.happiness+1
			}else {
				return this.happiness
			}

}
class Person {
	constructor(name){
		this.name = name
		this.happiness = 0
	}
	hasCat(){
		this.happiness +=1

	}
	hasRest(){
		this.happiness +=1
	}
	hasMoney(){
		this.happiness +=1
	}
	isSunny(){
		//получает данные о погоде в Москве из API и в случае если температура в цельсиях больше 15 градусов. увеличивает this.happiness на 1 и возвращает this.happiness (всегда возвращается this.happiness, независимо, увеличили на 1 или нет).
	}
}
const form = document.querySelector('form');
form.onsubmit = function(e){
	e.preventDefault();
	// everything is ok there
	var Human = new Person(form.elements.name.value);
	document.querySelector('.personName').innerHtml = Human.name
	console.log('here')

	if(form.elements.cat.value == 'yes'){
		Human.hasCat()
		// everything is ok there
	}
	if (form.elements.rest.value == 'yes'){
		Human.hasRest()
		// everything is ok there
	}
	if (form.elements.money.value =='yes'){
		Human.hasMoney()
		// everything is ok there
	}


	if (Human.happiness == 4){
	icon.innerHtml = '&#128513'
}
else {
	// everything is ok there
	if(Human.happiness ==3 || Human.happiness ==2){
		icon.innerHtml ='&#128528'
	}
	else{
		// everything is ok there
		icon.innerHtml ='&#128577'
	}
}
	
}
