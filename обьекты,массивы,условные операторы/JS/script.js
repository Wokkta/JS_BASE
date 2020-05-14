/*console.log('hello')
let masive = [1,2,3,4,5,6]
if(1===1){
	alert('true')
}
for (let i = 0 ;i<10;i++){
	console.log(i)
}*/
/*
const object = {
	first_parametr:'yes',
	second_parametr:'yes',
	func: function(parametr){
		console.log(parametr)
	}
}
console.log(object.first_parametr)
object.func('trully')
*/
class Person {
	static type = "Human"
	constructor(options){
		this.name = options.name
		this.age = options.age
		this.height = options.height
		this.diet = function(age,height){
			return (age + height)/2
		}
	}
}
const human = new Person({
	name:'red',
	age:10,
	height:165
})
console.log(human)