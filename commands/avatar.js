const { RichEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {


  let user = message.mentions.users.first() || message.author;
  var footertext = [
    `${client.user.username}: oof sexy`,
    `${client.user.username}: nice`,
    `${client.user.username}: 🔥`,
    `${client.user.username}: Someone's looking sharp today!`,
    `${client.user.username}: oof if i wasn't a bot...`,
    `${client.user.username}: looking sexier than a mug`
  ];
  var rand = Math.floor(Math.random() * footertext.length);
  var randomfooter = footertext[rand]; 

  message.channel.startTyping(); 

  let msg = await message.channel.send("``Generating that Avatar...``"); 

  let avatarURL = user.avatarURL;

  let avatarEmbed = new RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(`${user}\'s avatar`)
    .addField("Avatar location:", `[click here](${avatarURL})`)
    .setImage(avatarURL)

    .setFooter(`${randomfooter}`)
    .setTimestamp(); 

  await message.channel.send(avatarEmbed); 

  message.channel.stopTyping(true); 

  msg.delete(500);
  message.react("✅");
};