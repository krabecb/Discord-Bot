const Discord = require('discord.js')
require('dotenv').config()

const token = process.env.TOKEN

//Creating an instance of a Discord bot and storing inside client
const client = new Discord.Client()

//Initiate a command with this prefix.
const prefix = '-'

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
//Loop through files
for(const file of commandFiles) {
	const command = require(`./commands/${file}`)

	client.commands.set(command.name, command)
}


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

	//List as many commands with else if
	if(command === 'test') {
		client.commands.get('test').execute(message, args)
	}
})

//Log into Discord bot
client.login(token)