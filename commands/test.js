require('dotenv').config()

const tavernAdmin = process.env.TAVERN_ADMIN

module.exports = {
    name: 'test',
    description: "This is a test command",
    execute(client, message, args) {
        //Permissions: Check if user has appropriate role
        //More secure to check by ID than the role name as the name can change
        //!!! Store ID in .env !!!
        if(message.member.roles.cache.has(tavernAdmin)) {
            message.channel.send('Testing . . . Test complete!')
        } else {
            message.channel.send('You do not have permission to use this command.')
            //Depending on what you want to happen, roles can be added/removed:
            //message.member.roles.add(tavernAdmin).catch(console.error)
            //message.member.roles.remove(tavernAdmin).catch(console.error)
        }
    }
}