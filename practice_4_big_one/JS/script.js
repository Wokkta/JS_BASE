const button = document.querySelector('.popup');
const x = document.querySelector('.fas fa-times');
button.onclick = ()=>{
  button.style.display= 'flex';
}
x.onclick = ()=>{
  button.style.display = 'none';
}