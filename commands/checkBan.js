module.exports = {
    name: 'ban',
    description: "Verify if you have ban permissions",
    execute(client, message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send('You have permission to ban members!').catch(console.error)
        } else {
            message.channel.send('You do not have permission to ban members.').catch(console.error)
        }
    }
}