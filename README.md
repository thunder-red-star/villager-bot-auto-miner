this repo has an interesting history, reflecting years of pettiness on my part. haha we commit a minor amount of tomfoolery. the latest updates (10/06/22) have been untested but should work (because i am a good coder trust me 🤞)

*update 5: iapetus11 does a little trolling. i'm aware he's creating captchas now (real ones), so i'm not guaranteeing a 100% working bot.*

*update 4: iapetus11 starred this repo and got my attention congrats! updates have been created based on what i've seen in the villagerbot repo. keep in mind this is a joke repo and shouldn't actually be used it's a fRiEnDlY cOmPeTiTiOn*

*update 3: archived as part of github spring cleaning*

*update 2: dead project but if you want it to be revived please make an issue WITH WHAT YOU WANT TO BE REVIVED / UPDATED (cough Shwayz cough)*

*update: he botbanned me **and** banned me so this isn't coming down any time soon :)*

# villager-bot-auto-miner
This is a selfbot addon to send commands to Villager Bot and get quick emeralds!

(will be updated to beat the anti-bot mechanism every time Iapetus11 updates it)

**NOTE: THIS IS A SELFBOT, WHICH IS EXPLICITLY BANNED BY DISCORD'S TOS. I DIDN'T PERSONALLY TEST (THEREFORE I DIDN'T BREAK THE TOS) THIS SO IF THERE IS AN ISSUE PLEASE PUT IT INTO ISSUES. USE AT YOUR OWN RISK**

## How to use
0. Make sure you have node.js downloaded. This program runs on node.js.
1. Clone this repository, or download it, or run it on replit. [![Run on Repl.it](https://repl.it/badge/github/thunder-red-star/villager-bot-auto-miner)](https://replit.com/github/thunder-red-star/villager-bot-auto-miner).
2. Use `npm install` to download the required packages.
3. Discord has recently made it harder to obtain your token. Make this a bookmark: ```js
javascript:(function()%7Blocation.reload()%3Bvar i %3D document.createElement('iframe')%3Bdocument.body.appendChild(i)%3Balert(i.contentWindow.localStorage.token)%7D)()``` 
and then save it.
4. Go onto Discord on your browser, and click the bookmark, then copy paste the thing in quotation marks. That's your token.
5. Invite Villager Bot into your server.
6. Get the channel id of the channel you want to send messages to by right-clicking the channel in the left sidebar and then pressing "copy id", once you enable developer mode. (PLEASE DO THIS IN A PRIVATE SERVER!)
7. In config.json, put your token into `token`, the channelid into `channelid`, and optionally change the command in `command` and cooldown in `cooldown` (best to leave these things alone).
8. Use `npm start` and watch it go!
9. Optionally in `setting` in index.js you can turn off the auto-miner by replacing `1` with `0`.
