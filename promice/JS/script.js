const getData = new Promise((resolve,reject)=>{
	const data="Some data string"

	setTimeout(()=>{
		resolve(data)
	},1000)
})
getData
.then(result =>{
	return `test! ${result}`
})
.then(data=>{
	return data.toUpperCase()
})
.then(console.log)
.catch(err=>{//вывод ошибки
	console.log(err)
})