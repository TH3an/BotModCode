const Discord = require("discord.js");

module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  if (cmd) {
  cmd.run(client, message, args);
    
    console.log(`${message.author.name} used ${command} command`)
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} (${message.author.id}), message.author.displayAvatarURL`)
    .setDescription(`Has used ${command} command in ${message.guild.name}`)
    client.channels.get('798057888428982314').send(embed)
  }
};
