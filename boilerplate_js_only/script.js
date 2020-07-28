const express = require('express');

const bodyParser = require('body-parser');

const { Botact } = require('botact');

const server = express();

const bot = new Botact({
	token: '220adb7dacfafd93738b592ebb1e3cc8bf8f0df42b40bcb199dd0174d993676145a2120a8ce1ed960a23c',
	confirmation: '9e2670ff'
});

bot.on(function(ctx){
	console.log(ctx.body);
	
})
bot.on(({ reply }) => {
  reply(' That is Russian?')
})
server.use(bodyParser.json())

server.post('/',bot.listen);

server.listen(80);