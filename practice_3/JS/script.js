 const background = prompt('Какой будет фон у страницы?')
 const text_color = prompt('Какой будет цвет текста на странице')
 const person = prompt('Как зовут человека, который вас вдохновляет')
 const img_adress = prompt('Введите адрес картинки')
 const text = prompt('Введите текст страницы')
 const page = document.getElementsByClassName('page')
const shortBio = document.querySelector('.shortBio')
document.body.style.backgroundColor = background
shortBio.innerHTML =text
document.body.style.color = text_color
const image = getElementsByTagName('img')
image.setAttribute('src',img_adress)
const person_div = querySelector('.name')
person_div.innerHTML = person