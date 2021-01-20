const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor("DONATE THUNTHEAN BOT", client.user.displayAvatarUrl)
  .addField('ABA', '❌')
  .addField('PAYPAL', '❌')
  .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
msg.channel.send(embed);
  
  
};
