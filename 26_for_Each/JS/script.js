const button = document.querySelector('button');
const divs = document.querySelectorAll('div');
button.onclick = ()=>{
	divs.forEach((div)=>{
		div.style.fontSize = '30px';
	})
}