const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async(client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('HELP COMMANDS - TheanBotSpport', "https://discord.com/api/oauth2/authorize?client_id=797721071788490802&permissions=0&scope=bot")
  .setDescription('If commands not working usage s!bug [report]')
  .addField(':smiley: Fun', '`hug`, `kiss`, `kill`, `slap`, `panda`, `rip`, `meter`, `saitama`, `hack`, `meme`, `rabbit`, `anime`, `cat`, `dog`, `marry`, `smoke`, `vote`, `votekick`, `joke`, `icon`, `what`, `bad`, `stonks`')
  .addField(':gear: General/Info', '`timer`, `ping`, `channelinfo`, `topinvite`, `botinfo`, `serverinfo`, `userinfo`, `serverinvite`, `guild`, `rolelist`, `level`, `avatar`')
  .addField(':cop: Moderative', '`kick`, `ban`, `unban`, `mute`, `unmute`, `addrole`, `removerole`, `say`, `leave`')
  .addField(':pray: Support', '`invite`')
  .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
msg.channel.send(embed);
  
  
};

//loop, lyrics, nowplaying, pause, play, playlist, pruning, queue, remove, resume, search, shuffle, skip, skipto, stop, volume
