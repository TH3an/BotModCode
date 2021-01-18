const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug! <a:balancecheck:556017659419033653>");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~★▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬★~~\n${args}\n~~-★▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬★~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.get(customisation.bugchannelid).send(content)
}
