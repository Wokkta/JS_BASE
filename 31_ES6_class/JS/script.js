class User {
	constructor(name,mail,password){
		this.name = name;
		this.email = mail;
		this.password = password;
	}
	sayHi(){
		return 'Hello '+ this.name;
	}
}
class Female extends User {
	sayHi(){
		return 'Привет, '+this.name + '! ты зарегистрирована'
	}
}
const Man = new User('someone','1@mail.com','1111');
console.log(Man.sayHi())
const Anya = new Female('Anya','11@mail.com','qwerty')
console.log(Anya.sayHi()) 
