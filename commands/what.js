const Discord = module.require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (client, message, args) => {
    const username = message.author.username;
    const canvas = Canvas.createCanvas(1000, 1200);
    const ctx = canvas.getContext("2d");
  const user = message.mentions.users.first() || message.author;
  const user2 = user.avatarURL 

   const background = await Canvas.loadImage(`https://media.discordapp.net/attachments/701737512070283308/781095111320535080/1606297929169.png?width=1000&height=1200`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);

   ctx.font = '65px Segoe Print'
   ctx.fillText(160, 1050)

   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 59,58,882, 882);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "what.png"
      );

   message.channel.send(attachment);
};
