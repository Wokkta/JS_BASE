 const background = prompt('Какой будет фон у страницы?');
  const text_color = prompt('Какой будет цвет текста на странице');
   const person = prompt('Как зовут человека, который вас вдохновляет');
    const img_adress = prompt('Введите адрес картинки');
     const text = prompt('Введите текст страницы');
     const page = document.getElementsByClassName('page');
     page.style.backgroundColor = "background";
     page.style.color = "text_color";
     const person_div = document.getElementsByClassName('name');
     person_div.innerHTML = "<h2>person</h2>";

     const img_div = document.getElementsByClassName('imageBlock');
     img_div.style.backgroundImage = 'img_adress';
     const shortBio = document.getElementsByClassName('shortBio');
     shortBio.innerHTML = '<h1>text</h1>';
     shortBio.className += ' animated'; 
