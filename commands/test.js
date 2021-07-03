module.exports = {
    name: 'test',
    description: "This is a test command",
    execute(client, message, args) {
        message.channel.send('Testing . . . Test complete!')
    }
}