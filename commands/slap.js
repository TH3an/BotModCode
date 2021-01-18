const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
        //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");

        let user = message.mentions.users.first()
        let act = 'You have been slapped by'
        const rando_slap_imgs = ["https://media4.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif?cid=ecf05e4735437be3789238a80cbb49dcef6b9d06f02409c0&rid=giphy.gif",
                               "https://media0.giphy.com/media/a7HKjDb3UJ0kM/giphy.gif?cid=ecf05e470d527c34f37ba70020f8e77c69d24f9a57e97fbd&rid=giphy.gif",
                               "https://media2.giphy.com/media/Zau0yrl17uzdK/giphy.gif?cid=ecf05e479f9bdeafa12bd09a71045a956e55fe1f3c28e141&rid=giphy.gif",
                               "https://media.giphy.com/media/yfrwZqRvJ5WFy/giphy.gif",
                               "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif",
                               "https://pa1.narvii.com/5609/73312031bc4f5879b88ccd0892c22cead0f3a95f_hq.gif",
                               "http://animeoutsiders.com/wp-content/uploads/2016/06/pimp-slap.gif",
                               "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-12.gif",
                               "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif",
                               "https://media.giphy.com/media/bsfFiRaweLqBW/giphy.gif"];
  if(!user || message.author.id === user.id)
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`😂 slap you`)
  .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!!")
  message.channel.send(embed).then(msg => {
    msg.react('😂')});;
  }
  
  else if(user.id === '627717611853185026')
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('PANK 😂')
  .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!")
  message.channel.send(embed).then(msg => {
    msg.react('😂')});;
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`🖐 ${user.username}#${user.discriminator}, ${act}${message.author.tag}`)
  .setImage(rando_slap_imgs[Math.floor(Math.random() * rando_slap_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!!")
  message.channel.send(embed).then(msg => {
    msg.react('😂')});;
  }
}
