console.log('hi '+ this);
const button  = document.querySelector('button');
button.onclick = function(){
	console.log('button '+this);
	this.style.color = 'orange';
	this.style.width =this.style.width**10;
	this.style.height  = this.style.height**10;
}
window.addEventListener('load',()=>{
	console.log('window '+ this);
})
///при стрелочной функции this всегда равен window
 