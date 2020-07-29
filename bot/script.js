const express = require('express');

const bodyParser = require('body-parser');

const { Botact } = require('botact');

const server = express();

const bot = new Botact({
	token: 'none',
	confirmation: 'none'
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
