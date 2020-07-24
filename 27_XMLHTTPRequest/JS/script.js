const APIKey ='cc0fdd4b8c2f8c50d12262eed669fcf4'
const city = 'Miami'
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey+'';
let xhr = new XMLHttpRequest();
xhr.open('GET',url,false);
xhr.send();
if( xhr.status !==200){
	console.log(xhr.status);
console.log(xhr.statusText);
}
else{
let DATA = JSON.parse(xhr.responseText);
console.log(DATA);	
document.write(DATA.main.temp - 273);
/*document.write(DATA.main.temp );*/
}
