module.exports = {
    name: 'test',
    description: "This is a test command",
    execute(message, args) {
        message.channel.send('Hello! I am succesfully running! :3')
    }
}