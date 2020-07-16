const form = document.forms[0].elements.quantility;
console.log(form)
form.onsubmit = (e)=>{
	e.preventDefault();
	console.log("Submitted");
}