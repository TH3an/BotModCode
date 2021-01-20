const Discord = module.require("discord.js");
const Canvas = require("canvas");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    if (message.author.id !== `${config.owner_id}`) return message.channel.sendMessage("This command is only for bot creator!");
    const username = message.author.username;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");
  const user = message.mentions.users.first() || message.author;
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  const user2 = user.avatarURL 

  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
  
   const background = await Canvas.loadImage(`https://media.discordapp.net/attachments/701737512070283308/782993649226743808/1606750615762.png`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);

   ctx.font = applyText(canvas, member.user.tag);
	ctx.fillStyle = '#a7a7a7';
	ctx.fillText(member.user.tag, 290, 67, 151, 38);

   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 117,50,150, 150);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "weltest.png"
      );

   message.channel.send(attachment);
};
