const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async(client, msg, args) => {
        const rando_pnd_imgs = ['https://cdn.discordapp.com/attachments/535027866459701268/547938222919909404/china-pandas-eyes-turned-white-in-sichuan-2018-e1525405988661.jpg', 'https://cdn.discordapp.com/attachments/535027866459701268/547938218692313092/91026629_gettyimages-519508400.jpg', 'https://cdn.discordapp.com/attachments/535027866459701268/547938263659184149/Garuda-Panda-01.jpg', 'https://cdn.discordapp.com/attachments/535027866459701268/547938265102155785/magazine-rights-exempt-2016-08-departments-panda-mania-12.jpg', 'https://cdn.discordapp.com/attachments/535027866459701268/547938269451517966/Panda-Comp1.jpg', 'https://cdn.discordapp.com/attachments/535027866459701268/547938271729287218/panda-research-6-27-18-2.jpg'];
  
  
  let embed = new Discord.RichEmbed()
  .setDescription('<a:pandahappy:547937264999596053> The Panda has appear...' )
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('RANDOM')
        .setImage(rando_pnd_imgs[Math.floor(Math.random() * rando_pnd_imgs.length)])
        .setFooter(`Have image to submit? Send it to ${customisation.ownername}`)
    msg.channel.sendMessage(embed)
    .then(msg => {
    msg.react('🐼')});
}
