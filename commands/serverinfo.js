const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  try {
        const role = message.guild.roles.size;
        const online = message.guild.members.filter(m => m.presence.status != 'offline').size
        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
            .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
            .addField('Online', `${online}`, true)
            .addField('Server Region', message.guild.region)
            .addField('Created At', message.guild.createdAt.toLocaleString(), true)
            .addField("Verification Level: ", `${verificationLevels[message.guild.verificationLevel]}`)
            .addField('Voice Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size}`)
            .addField('Text Channels', `${message.guild.channels.filter(chan => chan.type === 'text').size}`, true)
            .addField('Roles', role, true)
        return message.channel.send(embed)
    } catch (err) {
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}
