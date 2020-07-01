const button = document.querySelector('button');
 const par = document.querySelector('p');
 let state = 'none';
 button.addEventListener('click',function(){
 	if (state =='none'){
 		par.style.display = 'block';
 		button.innerHTML = 'Hide';
 		state = 'block';
 	}
 	else{
 	
 	par.style.display = 'none';
 		button.innerHTML = 'Show';
 	state = 'none';
 }
})