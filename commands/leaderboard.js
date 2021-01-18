
const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
    .setDescription(`Level Leaderboard: \`!leaderboard levels\` || Message Leaderboard: \`!leaderboard messages\``)
    .setColor("RANDOM")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'levels') {
    let level = db.startsWith(`level_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < level.length; i++) {
        let user = client.users.get(level[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${level[i].data}\n`
    
      }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Level Leaderboard**\n\n${content}`)
    .setColor("RANDOM")

    message.channel.send(embed)
  } else if(args[0] == 'messages') {
    let messages = db.startsWith(`messages_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < messages.length; i++) {
        let user = client.users.get(messages[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${messages[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Messages Leaderboard**\n\n${content}`)
    .setColor("RANDOM")

    message.channel.send(embed)

  }
}
