  
const Discord = module.require("discord.js");
const Canvas = require("canvas");
const leveling = require('discord-leveling');;

module.exports.run = async (client, message, args) => {
	
  const username = message.author.username;
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");
  const user = message.mentions.users.first() || message.author;
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let output = await leveling.Fetch(user.id)
  const user2 = user.avatarURL 
  
  if (user.bot) {
    return message.channel.send('Bot don`t Have level :/')
  }
  
  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

   const background = await Canvas.loadImage(`https://media.discordapp.net/attachments/701737512070283308/782179282989875250/1606556455314.png`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);
	
	ctx.font = '20px sans-serif';
	ctx.fillStyle = '#a3a3a3';
	ctx.fillText(`LEVEL: ${output.level}  XP: ${output.xp}`, canvas.width / 3.2, canvas.height / 1.5);

   ctx.font = applyText(canvas, member.user.tag);
   ctx.fillStyle = '#ffffff';
   ctx.fillText(member.user.tag, canvas.width / 3.2, canvas.height / 2.0);
  
  ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 57,57,136, 136);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "level.png"
      );

   message.channel.send(attachment);
};
