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
*//*
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
console.log(human)*/
class User {
	constructor(data){
		this.name = data.name
		 this.id = data.id
		 this.voice = function(){
		 	return('my name is '+this.name +" my id is "+this.id)
		 }
	}
}
let user = new User({
	name: 'Steve',
	id:12345
})
console.log(user)
class User_bot extends User{}
let bot = new User_bot({
	
})