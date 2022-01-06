module.exports = (Discord, client, message) => {
    //Initiate a command with this prefix.
    const prefix = '-'

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //slice and split below allows for multi-word commands such as "-check ban"
    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord);
}