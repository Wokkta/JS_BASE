let a  = {
	age:40,
	name:"Tox",
	sayHello: function(){return "Hello " + this.name}
		
	
}
console.log(a.name);
console.log(a.sayHello());
a.cancode = function(){
	return "yes"
}
console.log(a.cancode());
console.log(a);
console.log(a['name']);
