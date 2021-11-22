const Discord = require('discord.js-self');
const client = new Discord.Client();
const math = require('math.js')
const config = require("./config.json")

const command = config.command
const cooldown = config.cooldown
const token = config.token
const channelid = config.channelid

setting = 1 // 0 = off, 1 = on

client.on('message', (msg) => {
    if (msg.author == 639498607632056321 && msg.channel.id == channelid) {
        msg.embeds.forEach((embed) => {
            try {
            if (embed.description.startsWith("Please solve this problem to continue")) {
                let problem = embed.description.split("`").slice(1, 2).join("")
                console.log(problem)
                const answer = math.evaluate(problem)
                msg.channel.send(answer)
                console.log(answer)
            } } catch (err) {console.log("villager bot sent a meme, imagine")}
        });
    }

});
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

client.on('ready', async () => {
    console.log("logged in as " + client.user.tag)
    const channell = client.channels.cache.get(channelid)
    while (1 == setting) {
        await channell.send(command).then(async () => {
            await console.log("sent " + command)
            await sleep(cooldown)
        })
    }
})

client.login(token);
