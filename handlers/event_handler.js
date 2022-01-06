const fs = require('fs')

module.exports = (client, Discord) => {
    //Create a function that loads every event directory
    const loadDir = (dirs) => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'))

        for(const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`)
            const eventName = file.split('.')[0]
            client.on(eventName, event.bind(null, Discord, client))
        }
    }

    ['client', 'tavern'].forEach(e => loadDir(e))
}