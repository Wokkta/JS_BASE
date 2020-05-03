console.log('You are at ' +window.location);
const Colored = document.querySelector('.colored');
console.log(Colored);
console.log(Colored.style);
Colored.style.backgroundColor = "blue";
Colored.style['background-color'] = "green";
let quest = prompt('which color you want to see ?');
Colored.style.backgroundColor = quest;
