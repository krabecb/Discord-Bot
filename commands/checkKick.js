module.exports = {
    name: 'kick',
    description: "Verify if you have kick permissions",
    execute(client, message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send('You have permission to kick members!').catch(console.error)
        } else {
            message.channel.send('You do not have permission to kick members.').catch(console.error)
        }
    }
}