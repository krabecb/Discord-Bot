const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')

module.exports = {
	name: 'company',
	description: 'Joins voice channel',
	async execute(client, message, args) {
		const voiceChannel = message.member.voice.channel

		if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!')
		const permissions = voiceChannel.permissionsFor(message.client.user)
		if(!permissions.has('CONNECT')) return message.channel.send("You don't have the correct permissions")
		if(!permissions.has('SPEAK')) return message.channel.send("You don't have the correct permissions")
		// if(!args.length) return message.channel.send('You need to send the second argument') //Specific to a user querying YT

		const connection = await voiceChannel.join()

		const videoFinder = async (query) => {
			const videoResult = await ytSearch(query)
			return (videoResult.videos.length > 1) ? videoResult.videos[0] : null
		}

		const video = await videoFinder('lofi forest')

		if(video) {
			const stream = ytdl(video.url, {filter: 'audioonly'})
			connection.play(stream, {seek: 0, volume: 1})
			.on('finish', () => {
				voiceChannel.leave()
			})

			await message.reply(`WEEU! Now playing: ${video.title }`)
		} else {
			message.channel.send('No video results found!')
		}
	}
}