const { RichEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

   var footertext = [`🔹`, `💠`, `🔸`, `🔲`, `▪`, `🎉`, `➡️`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomstar = footertext[rand];
  
  invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${randomstar} ${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new RichEmbed()
        .setTitle(`**INVITELEADERBOARD** 📋`)
        .setColor(`RANDOM`)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp()
        .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
    message.channel.send(embed);
}

module.exports.conf = {
  aliases: ["topinv"],
  clientPerm: "",
  authorPerm: "EMBED_LINKS"
};

module.exports.help = {
  name: "topinvite",
  description: "show invite list",
  usage: "topinvite",
  example: []
};
