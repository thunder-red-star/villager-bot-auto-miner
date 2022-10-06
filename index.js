const Discord = require('discord.js-self');
const client = new Discord.Client();
const math = require('math.js')
const config = require("./config.json")

const command = config.command
const cooldown = config.cooldown
const token = config.token
const channelid = config.channelid

setting = 1 // 0 = off, 1 = on

// Clean characters greater than 0xFF
function clean(text) {
	return text.replace(/[^ -~]+/g, '');
}

client.on('message', async (msg) => {
	if (msg.author.id === "639498607632056321" && msg.channel.id === channelid) {
		// Iapetus11 is trolling :sob:
		// wait 0.5 seconds
		sleep(500).then(async () => {
			// Fetch the message
			let message = await msg.channel.messages.fetch(msg.id)
			message.embeds.forEach((embed) => {
				try {
					if (embed.description.startsWith("Please solve this problem to continue")) {
						let problem = clean(embed.description).split("`").slice(1, 2).join("")
						console.log(problem)
						const answer = math.evaluate(problem)
						msg.channel.send(answer)
						console.log(answer)
					}
				} catch (err) {
					console.log("villager bot sent a meme, imagine")
				}
			});
		});
	}
});

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

client.on('ready', async () => {
	console.log("logged in as " + client.user.tag)
	const targetChannel = client.channels.cache.get(channelid)
	while (1 === setting) {
		await targetChannel.send(command).then(async () => {
			await console.log("sent " + command)
			await sleep(cooldown)
		})
	}
})

client.login(token);
