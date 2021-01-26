const customisation = require('../customisation.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (message.author.id !== '597271012979113984') return message.channel.sendMessage("<:WrongMark:552116790981951511> This command is only for bot creator!");
    if (!args[0]) return message.reply("Please specify the update. Example:\n`s!update  punch commands`");
    if (args[0] === "update") return message.reply("Please specify the update. Example:\n`s!update  punch commands`");
    args = args.join(" ");
    message.reply("Update! <a:balancecheck:556017659419033653>");
    const content = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setDescription(`${args}`)
    client.channels.get(customisation.updatechannel).send(content)
}
