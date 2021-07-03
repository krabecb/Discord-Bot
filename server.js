const Discord = require('discord.js')
require('dotenv').config()

const token = process.env.TOKEN

//Creating an instance of a Discord bot and storing inside client
const client = new Discord.Client()

//Initiate a command with this prefix.
const prefix = '-'	


//'ready' is the event
client.once('ready', () => {
	console.log("Bot is online!")
})

client.on('message', message => {
	//1. If message has a prefix, then continue. Otherwise, ignore message.
	//2. Check if the bot initiated the command, stop process to avoid crashes.
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	//slice lets you have multiple commands
	const args = message.content.slice(prefix.length).split(/ +/) // / +/ is the same as ""
	const command = args.shift().toLowerCase()

	if(command === 'test') {
		message.channel.send('Hello! I am succesfully running! :3')
	}
})

//Log into Discord bot
client.login(token)