const Discord = require('discord.js')
const bot = new Discord.Client({
	token: 'CY0kh1OiYtXRSCQXd3aewoYW4kRhw2C7'
})
bot.on('message',async (msg) =>{
	if (msg.content =='!Hello'){
		await.msg.channel.send('Hello, '+msg.author.username +'!')
	}
})