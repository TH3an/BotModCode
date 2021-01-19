const Discord = require("discord.js");
const customisation = require('../customisation.json');

module.exports.run = (client, message, args) => {
      
      let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('Support our bot!', client.user.displayAvatarURL)
        .addField('FUN & MOD BOT', '[INVITE HERE](https://discord.com/api/oauth2/authorize?client_id=797721071788490802&permissions=1875378119&scope=bot)')
        .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
      
      message.channel.send(embed);

}

