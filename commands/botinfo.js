
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let inline = true
    let bicon = client.user.displayAvatarURL;
    let usersize = client.users.size
    let chansize = client.channels.size
    let uptimxd = client.uptime 
    let servsize = client.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .setDescription('i\'m from 🇰🇭')
    .addField("Bot Name", `<:small_orange_diamond:425631858265423883> ${client.user.username}`, inline)
    .addField("👑 Bot Owner", "<@597271012979113984>", inline )
    .addField("🛡 Servers", `${servsize}`, inline)
    .addField("📁 Channels", `${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", " :diamond_shape_with_a_dot_inside: Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: TheanWasTaken`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
