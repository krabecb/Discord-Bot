module.exports = {
    name: 'help',
    description: "Displays available commands",
    execute(client, message, args) {
        message.channel.send('WEEU WEEU! Looks like you need some help! Here is a list of things I can do for you!\n -help: Displays available commands.\n -test: Reserved for testing new features!\n -kick: Checks if you have kick permissions.\n -ban: Checks if you have ban permissions.').catch(console.error)
    }
}