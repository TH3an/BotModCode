const Discord = require("discord.js");

exports.run = async(client, msg, args) => 

{
    msg.channel.send("I'm in " + `${client.guilds.size}` + " servers!")
}
