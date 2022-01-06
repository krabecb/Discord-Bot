const Discord = require('discord.js')
require('dotenv').config()

const token = process.env.TOKEN

//Creating an instance of a Discord bot and storing inside client
const client = new Discord.Client()

//Access other JS files
const fs = require('fs')

//Modularity: Reads the commands and events directory
client.commands = new Discord.Collection()
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
	//Discord is passed in because some commands may need it
	require(`./handlers/${handler}`)(client, Discord)
})

//Log into Discord bot
client.login(token)