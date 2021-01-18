
const Discord = require("discord.js");
const canvacord = require("canvacord");
const levels = require('discord-xp');

module.exports.run = async (client, message, args) => {
  const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;
  const target = message.author;

  const level = await levels.fetch(target.id, message.guild.id);
  
  const neededXp = levels.exFor(parseInt(level.level) + 1);
  
  if (!level) return message.reply("You dont have xp. try to send some message")

// v4 rank card
//   let img = await canvacord.rank({
//     username: user.username,
//     discrim: user.discriminator,
//     currentXP: exp.toString(),
//     neededXP: neededXP.toString(),
//     rank: rank.toString(),
//     level: level.toString(),
//     avatarURL: user.displayAvatarURL({ format: "png" }),
//     background: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&w=1000&q=80"
//   });
  
  // v5 rank card
  const card = new canvacord.Rank()
  .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
    .setUsername(message.author.username)
    .setDiscriminator(user.discriminator)
    .setCurrentXP(level.xp)
    .setRequiredXP(neededXp)
    .setProgressBar('#00b4f9', "COLOR")
    .setStatus(message.author.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();
  
  const attachment = new Discord.Attachment(img, 'rank.png')
  message.channel.send(attachment);
  
};
