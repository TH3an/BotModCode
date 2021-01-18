const Discord = module.require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (client, message, args) => {
    const username = message.author.username;
    const canvas = Canvas.createCanvas(480, 271);
    const ctx = canvas.getContext("2d");
   const user = message.mentions.users.first();
if(!user) return message.reply("Please mention User!")
  const user2 = user.avatarURL 

   const background = await Canvas.loadImage(`https://media.discordapp.net/attachments/701737512070283308/781459053565444096/1606384744266.png`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);

   ctx.font = '65px Segoe Print'
   ctx.fillText(160, 1050)

   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 46,20,138, 138);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "stonks.png"
      );

   message.channel.send(attachment);
};
