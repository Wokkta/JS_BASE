const form = document.forms[0] ;
const insert = document.querySelector('.total');
console.log(form)
form.onsubmit = (e)=>{
	e.preventDefault();
	insert.innerHTML = form.elements.quantility.value*Math.sin(form.elements.price.value)
}