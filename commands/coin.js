const Discord = require("discord.js");
const customisation = require('../customisation.json');
const mongoose = require('mongoose');

exports.run = async (client, message, args) => {
  const Coins = require('../models/coins.js');
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) user = message.author;
Coins.findOne({
  userID: user.id
}, (err, coins) => {
  if (err) console.error(err);
  if (!coins) {
    return message.channel.send("This user has no coins on record.")
  }else{
    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .addField(`COINSSS!`,`${user} have ${coins.coins} coins!`)
    .setFooter(`Saitama Bot by ${customisation.ownername}`);
    
    message.channel.send({embed})
  }
})
};
