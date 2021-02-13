const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('HELP COMMANDS - SAITAMA', "https://cdn.discordapp.com/attachments/758232552636022794/760514173535780964/illustration-logo-cartoon-Saitama-One-Punch-Man-brand-font-product-25409.jpg")
  .setDescription('If commands not working usage s!bug [report]')
  .addField(':smiley: Fun', '`hug`, `kiss`, `kill`, `slap`, `panda`, `rip`, `meter`, `saitama`, `hack`, `meme`, `rabbit`, `anime`, `cat`, `dog`, `marry`, `smoke`, `vote`, `votekick`, `joke`, `icon`, `what`, `bad`, `stonks`')
  .addField(':gear: General/Info', '`timer`, `ping`, `channelinfo`, `topinvite`, `botinfo`, `serverinfo`, `userinfo`, `serverinvite`, `guild`, `rolelist`, `level`, `avatar`')
  .addField(':cop: Moderative', '`kick`, `ban`, `unban`, `mute`, `unmute`, `addrole`, `removerole`, `say`, `leave`')
  .addField(':pray: Support', '`invite`')
  .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
msg.channel.send(embed);
  
  
};
