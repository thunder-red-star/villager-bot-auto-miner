# villager-bot-auto-miner
Are you or do you:
* ~~tired of Iapetus11~~?
* needing to get a lot of emeralds fast and without effort?
* want to support me?

Well you've come to the right place!

This is a selfbot addon to send commands to Villager NOT and get quick emeralds!
\n**NOTE: THIS IS A SELFBOT, WHICH IS EXPLICITLY BANNED BY DISCORD'S TOS. I DIDN'T PERSONALLY TEST (THEREFORE I DIDN'T BREAK THE TOS) THIS SO IF THERE IS AN ISSUE PLEASE PUT IT INTO ISSUES. USE AT YOUR OWN RISK**

## How to use
0. Make sure you have node.js downloaded. This program runs on node.js.
1. Clone this repository, or download it, or run it on replit. [![Run on Repl.it](https://repl.it/badge/github/thunder-red-star/villager-bot-auto-miner)](https://repl.it/github/thunder-red-star/villager-bot-auto-miner).
2. Use `npm install discord.js-self` to download the required package.
3. Discord has recently made it harder to obtain your token. Make this a bookmark: ```javascript:(function()%7Blocation.reload()%3Bvar i %3D document.createElement('iframe')%3Bdocument.body.appendChild(i)%3Balert(i.contentWindow.localStorage.token)%7D)()``` and then save it.
4. Go onto Discord on your browser, and click the bookmark, then copy paste the thing in quotation marks. That's your token.
5. Invite Villager NOT into your server.
6. Get the channel id of the channel you want to send messages to by right-clicking the channel in the left sidebar and then pressing "copy id".
7. In config.json, put your token into `token`, the channelid into `channelid`, and optionally change the command in `command` and cooldown in `cooldown` (best to leave these things alone).
8. Use `node index.js` and watch it go!
9. Optionally in `setting` in index.js you can turn off the auto-miner by replacing `1` with `0`.

## Iapetus11, this isn't coming down until you unmute me.
