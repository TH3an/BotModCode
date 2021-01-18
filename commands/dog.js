const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;
    
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle("My Dog")
    .setImage(body.url)
    .setFooter(`Have image to submit? Send it to ${customisation.ownername}`)
    message.channel.send({embed})
    .then(message => {
    message.react('🐶')});
};
