const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (message.author.id !== '627717611853185026') return message.channel.sendMessage("No, lol ❎");
     message.channel.send('Yes **Vuth** you Own the bot ✅');
}
