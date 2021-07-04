require('dotenv').config()

const tavernAdmin = process.env.TAVERN_ADMIN

module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute(client, message, args) {
        //Permissions: Check if user has appropriate role
        //More secure to check by ID than the role name as the name can change
        //!!! Store ID in .env !!!
        if(message.member.roles.cache.has(tavernAdmin)) {
           if(!args[0]) return message.reply("Please enter amount of messages you want to clear.");
           if(isNaN(args[0])) return message.reply("Please enter a number.");
           if(args[0] > 10) return message.reply("You cannot delete more than 10 messages.")
           if(args[0] < 1) return message.reply("You must delete at least one message.");

           //CANNOT DELETE MESSAGES THAT ARE OLDER THAN 14 DAYS - DISCORD RULE
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages)
            })
        } else {
            message.channel.send('You do not have permission to use this command.')
            //Depending on what you want to happen, roles can be added/removed:
            //message.member.roles.add(tavernAdmin).catch(console.error)
            //message.member.roles.remove(tavernAdmin).catch(console.error)
        }
    }
}