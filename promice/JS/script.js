/*const getData = new Promise((resolve,reject)=>{
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






/*const getData = new Promise((resolve,reject)=>{
	const data = 'Some data string'
	setTimeout(()=>{
		resolve(data)
	},1000)
})*/




/*console.log(` Request data ...`)
setTimeout(()=>{
	console.log(`Preparing data ...`)


	const backendData = {
		server:'aws',
		port:'200',
		status:'1'
	}

	setTimeout(()=>{
		backendData.modified = true
		console.log(`Data received`,backendData)
	},2000)
},2000)*/
const p = new Promise((resolve,reject)=>{
	 
})