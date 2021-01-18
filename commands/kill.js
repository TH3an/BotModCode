const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
        //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");

        let user = message.mentions.users.first()
        let act = 'You have been kill by'
        const rando_kill_imgs = ["https://righthandofanime.files.wordpress.com/2015/12/top-anime-2015-one-punch-man-right-hand-of-anime-review-blog.gif?w=840",
                               "http://49.media.tumblr.com/3228ae5f781cd63c252863d0078ba4ba/tumblr_o30ckykyfR1v2y42bo1_500.gif",
                               "https://media.giphy.com/media/v2VORjxBAG3kc/giphy.gif",
                               "https://i.pinimg.com/originals/39/97/05/39970522eee53b96f4d4792418a67ad3.gif",
                               "https://static1.comicvine.com/uploads/original/11128/111284813/5239334-saitama%20serious%20punch.gif",
                               "https://i.pinimg.com/originals/e4/e3/b5/e4e3b572024468718f127240e46a58d0.gif"];
  if(!user || message.author.id === user.id)
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`🔪 Kill you`)
  .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!")
  message.channel.send(embed).then(msg => {
    msg.react('🔪')});;
  }
  
  else if(user.id === '627717611853185026')
  {
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`🔪 Kill you`)
  .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!")
  message.channel.send(embed).then(msg => {
    msg.react('🔪')});;
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`🔪 ${user.username}#${user.discriminator}, ${act}${message.author.tag}`)
  .setImage(rando_kill_imgs[Math.floor(Math.random() * rando_kill_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!!")
  message.channel.send(embed).then(msg => {
    msg.react('🔪')});;
  }
}
