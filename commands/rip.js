const Discord = module.require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (bot, message, args) => {
    const username = message.author.username;
    const canvas = Canvas.createCanvas(720, 1280);
    const ctx = canvas.getContext("2d");
  const user = message.mentions.users.first() || message.author;
  const user2 = user.avatarURL 

   const background = await Canvas.loadImage(`https://cdn.discordapp.com/attachments/564520348821749766/687972262510329856/rest-in-peace-rip-headstone-blank-template-imgflip-53245711.png`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);

   ctx.font = '65px Segoe Print'
   ctx.fillText(160, 1050)

   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 200,500,300, 300);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "rip.png"
      );

   message.channel.send(attachment);
};
