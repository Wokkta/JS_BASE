const APIKey ='cc0fdd4b8c2f8c50d12262eed669fcf4'
/*
let xhr = new XMLHttpRequest();
xhr.open('GET',url,false);
xhr.send();
if( xhr.status !==200){
	console.log(xhr.status);
console.log(xhr.statusText);
}*/
/*else{
let DATA = JSON.parse(xhr.responseText);
console.log(DATA);	
document.write(DATA.main.temp - 273);
document.write(DATA.main.temp );
} */
const form = document.forms[0] ;
const insert = document.querySelector('.total');
console.log(form)
form.onsubmit = (e)=>{
	e.preventDefault();
	const city = form.elements.city_temp.value
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
	insert.innerHTML = 'At'+city+' '+DATA.main.temp - 273+'градусов Цельсия'
}}