 const background = prompt('Какой будет фон у страницы?');
 const text_color = prompt('Какой будет цвет текста на странице');
 const person = prompt('Как зовут человека, который вас вдохновляет');
 const img_adress = prompt('Введите адрес картинки');
 const text = prompt('Введите текст страницы');
 const page = document.getElementsByClassName('page');
const shortBio = document.getElementsByClassName('shortBio');
document.body.style.backgroundColor = background
shortBio.innerHTML =text
document.body.style.backgroundColor = text_color;
