const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('HELP COMMANDS - TheanBot', "https://cdn.discordapp.com/avatars/797721071788490802/07b5f85c95dc00310fb61bf57db3b55f.png?size=2048")
  .setDescription('If commands not working usage *bug [report]')
  .addField(':smiley: Fun', '`hug`, `kiss`, `kill`, `slap`, `panda`, `rip`, `meter`, `saitama`, `hack`, `meme`, `rabbit`, `anime`, `cat`, `dog`, `marry`, `smoke`, `vote`, `votekick`, `joke`, `icon`, `what`, `bad`, `stonks`')
  .addField(':gear: General/Info', '`timer`, `ping`, `channelinfo`, `topinvite`, `botinfo`, `serverinfo`, `userinfo`, `serverinvite`, `guild`, `rolelist`, `level`, `avatar`')
  .addField(':cop: Moderative', '`kick`, `ban`, `unban`, `mute`, `unmute`, `addrole`, `removerole`, `say`, `leave`')
  .addField(':pray: Support', '`invite`')
  .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
msg.channel.send(embed);
  
  
};
