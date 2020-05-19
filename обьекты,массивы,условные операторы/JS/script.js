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
	constructor(options){
		this.name = options.name
		 this.id = options.id
		}
	voice = function(){
		 	console.log('my name is '+this.name +" my id is "+this.id)
		 }
	
}
/*let user = new User({
	name: 'Steve',
	id:12345
})
console.log(user)
*/class User_bot extends User{
	constructor(options){
		super(options)
		this.bot_log = options.bot_log
		this.bot_call = function(){
			return(this.name +" is a bot")
		}
	}
	voice(){
		super.voice()
		console.log(this.name +" is a bot")
	}
	get name_info(){
		return this.name + ' is  user'
	}
	set name_info_set(new_name){
		this.name = new_name
	}
}
/*super - link to mother class*/
 class Component{
 	constructor(selector){
 		this.$el = document.querySelector(selector)

 	}
 	hide(){
 		this.$el.style.display = 'none'
 	}
 	show(){
 		this.$el.style.display ='block'	
 	}
 	change(type){
 		this.$el.style.display = type
 	}
 }