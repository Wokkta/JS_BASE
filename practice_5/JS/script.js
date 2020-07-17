let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]
const divs = document.querySelectorAll('div');
divs[0].style.backgroundColor = 'red'
divs[1].style.backgroundColor = 'blue'
divs[2].style.backgroundColor = 'green'

divs[0].style.height = '100px'
divs[1].style.height = '100px'
divs[2].style.height = '100px'
for(i in crypto){
  divs[i].innerHTML = crypto[i].name +'<br>'+crypto[i].price+'</br>'
  divs[i].style.width = crypto[i].price+'px' 
}