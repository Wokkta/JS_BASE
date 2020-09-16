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
	 setTimeout(()=>{
	console.log(`Preparing data ...`)


	const backendData = {
		server:'aws',
		port:'200',
		status:'1'
	}
	resolve(backendData)/// при успешном выполнении асинх setTime... resolve аналогичен break in python  и просто завершает Promice
},2000)/// u can remove ,2000 to do it as fast as can
})
p.then((data)=>{ /// working after ended asin func
console.log(`Promice resolved`,data)
})
p.then(data=>{
	console.log('second "then"')
	const p2 = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			backendData.modified = true
			console.log(`Data received ${backendData}`)
		},2000)
	})
})