const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let msg = await message.channel.send("Generating icon...");

if(!message.guild.iconURL) return msg.edit("No icon found!");

let iconembed = new Discord.RichEmbed()
.setColor("00ff00")
.setFooter("Searched by " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle("Server Icon")
.setDescription("[Icon URL link]("+message.guild.iconURL+")")

message.channel.send(iconembed)
    
    msg.delete();
 }
