const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {
  message.delete(5000);

  message.channel.send({ embed: {
    color: 0x0f0f0f, //chang color
	author: {
		name: 'THUNTHEAN BOT',
		icon_url: client.user.displayAvatarURL,
	},
    fields: [
		{
			name: 'Ping 📍',
			value: `Pong! Time took: **${Date.now() - message.createdTimestamp}** ms`,
		},

 ]
   } });

 /* let embed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .addField("Ping 📍" ,`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`);*/
  
}
