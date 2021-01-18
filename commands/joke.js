const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports.run = async (client, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke){
          let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(joke)
message.channel.send(embed);
    })
}
