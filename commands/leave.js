const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You do not have permission to do this command!")
    let id = args[0];
    if (!id) id = message.guild.id;
    message.react("✅");
    client.guilds.get(id).leave()
    .then(g => console.log(`Left ${g}`))
    }
