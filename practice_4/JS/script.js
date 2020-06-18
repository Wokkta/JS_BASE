const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player<computer && (computer - 2)!=player , player === (computer+2),player === (computer - 1)){
alert('player won')
}
else if (player>computer && (player - 2)!=computer , computer === (player - 1)){
alert('computer won')
}
else if(player===computer){
alert('no winner')
}

