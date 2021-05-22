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

//Log into Discord bot
client.login(token)