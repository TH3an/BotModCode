const Discord = require("discord.js");

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('CUBEKHMER SERVER', "https://cdn.discordapp.com/attachments/765452616053424159/765631698414731314/image0.jpg")
  .addField('IP ADDRESS', "cubekhmer.ddns.net")
  .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
msg.channel.send(embed);
  
  
};
