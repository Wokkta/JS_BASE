const button = document.querySelector('button');
var state = 'flex';
const x = document.querySelector('.closePopup');
const x_for_burger = document.querySelector('.closeMenu');
const burger = document.querySelector('.openMenu');
button.onclick =()=>{
  if (state=='flex'){
    document.querySelector('.popup').style.display = 'none';
    state = 'none';
  }
  else if (state =="none"){
    document.querySelector('.popup').style.display = 'flex';
    state='flex';
  }
}
x.onclick = ()=>{
  document.querySelector('.popup').style.display = 'none';
  state = 'none';
}
burger.onclick = ()=>{
  document.querySelector('.menu').style.left = 0;
}
x_for_burger.onclick = ()=>{
  document.querySelector('.menu').style.left = '-50vw';
}
/// at codepen works normal
