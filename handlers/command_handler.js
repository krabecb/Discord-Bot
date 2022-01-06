const fs = require('fs')

//client and Discord are passed in from
//the forEach loop on server.js
module.exports = (client, Discord) => {
    //Filter out for only JS files
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

    for(const file of commandFiles) {
        const command = require(`../commands/${file}`)
        //If the command has a name key
        if(command.name) {
            client.commands.set(command.name, command)
        } else {
            continue
        }
    }
} 