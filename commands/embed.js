const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  if(message.author.id !== "627717611853185026") return;

  const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor(cmd[1])
  .setDescription(cmd[2])
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();

    }
