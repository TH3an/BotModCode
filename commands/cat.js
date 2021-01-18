const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle("My Cat")
    .setImage(body.file) 
    .setFooter(`Have image to submit? Send it to ${customisation.ownername}`)
    message.channel.send({embed})
    .then(message => {
    message.react('🐱')});
};
