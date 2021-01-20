const Discord = require('discord.js');
const config = require('../config.json');


exports.run = (client, message, args) => {
     if (message.author.id !== `${config.owner_id}`) return message.channel.sendMessage("No, lol ❎");
     message.channel.send('Yes **Vuth** you Own the bot ✅');
}
