const message = require("../events/tavern/message")

module.exports = {
    name: 'embed',
    description: "Embeds",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is an embed for server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Test'}
        )
        .setImage('https://i.imgur.com/MV7SGgU.jpg')
        .setFooter('This is a footer!')

        message.channel.send(newEmbed)
    }
}