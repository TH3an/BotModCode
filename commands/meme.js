const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (client, message, args) => {
    const subReddits = ["meme", "me_irl", "dankmeme", "memes", "MemeEconomy", "wholesomememes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(img)

    message.channel.send(embed);

}
