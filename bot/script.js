const express = require('express');

const bodyParser = require('body-parser');

const { Botact } = require('botact');

const server = express();

const bot = new Botact({
	token: '220adb7dacfafd93738b592ebb1e3cc8bf8f0df42b40bcb199dd0174d993676145a2120a8ce1ed960a23c',
	confirmation: 'e299dd84'
});

bot.on(function(ctx){
	console.log(ctx.body);
	
})


bot.event('group_join', ({ reply }) => {
  reply('Thanks!')
})
bot.command('start',(ctx)=>{
	ctx.reply('started ok')
})
bot.command('time',(ctx)=>{
	ctx.reply('no time to die')
})
bot.command('время',function(ctx){
	const date = new Date()
	const h = date.getHours()
	const m = date.getMinutes()
	const s = date.getSeconds()
	const time = 'Now is '+ h+':'+m+':'+s
	ctx.reply(time)
})
server.use(bodyParser.json())

server.post('/',bot.listen);

server.listen(80);