const Discord = require("discord.js");

exports.run = (client, message, Discord, prefix) => {
  message.delete(5000);

  message.channel.send({ embed: {
    color: 0x0f0f0f, //chang color
	author: {
		name: 'SAITAMA BOT',
		icon_url: 'https://cdn.discordapp.com/attachments/758232552636022794/760514173535780964/illustration-logo-cartoon-Saitama-One-Punch-Man-brand-font-product-25409.jpg',
	},
    fields: [
		{
			name: 'BONK! 👊',
			value: `Saitama (サイタマ, Saitama) is the main protagonist of the series and the titular One-Punch Man and the most powerful being to exist in the series. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle.[3]

Initially just a hero for fun,[4] Saitama later registers to be a professional hero for the Hero Association[5] and defends his home in Z-City from monsters, villains, and other threats.[6] Under the Hero Association, he is assigned the hero name Caped Baldy (ハゲマント, Hagemanto; Viz: Bald Cape)[7] and is currently ranked 7 in the B-Class.[8]`,
		},

 ]
   } });

 /* let embed = new Discord.RichEmbed()
  .setColor(`RANDOM`)
  .addField("Ping 📍" ,`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`);*/
  
}

