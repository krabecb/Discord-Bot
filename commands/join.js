module.exports = {
	name: 'join',
	description: 'Joins voice channel',
	async execute(client, message, args) {
		const voiceChannel = message.member.voice.channel

		if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!')
		const permissions = voiceChannel.permissionsFor(message.client.user)
		if(!permissions.has('CONNECT')) return message.channel.send("You don't have the correct permissions")
		if(!permissions.has('SPEAK')) return message.channel.send("You don't have the correct permissions")
		// if(!args.length) return message.channel.send('You need to send the second argument') //<--Might just be for YT

		const connection = await voiceChannel.join()
	}
}