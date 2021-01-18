const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
        //if(message.author.id != '398845938816516096') return message.channel.sendMessage("<:WrongMark:524375774741135362> This command is under construction!");

        let user = message.mentions.users.first()
        let act = 'You have been hugged by'
        const rando_hug_imgs = ["https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-11.gif",
                               "https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-12.gif",
                               "https://data.whicdn.com/images/45718472/original.gif",
                               "https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif.gif",
                               "https://acegif.com/wp-content/uploads/anime-hug.gif",
                               "https://media3.giphy.com/media/IRUb7GTCaPU8E/giphy.gif?cid=ecf05e47ujoecpsw4xynj76rve75h12wysfquk3zbzi051o2&rid=giphy.gif",
                               "https://media4.giphy.com/media/GMFUrC8E8aWoo/giphy.gif?cid=ecf05e475c6f09356be306397b21acf585dd7c5e88864b83&rid=giphy.gif",
                               "https://media4.giphy.com/media/wnsgren9NtITS/giphy.gif?cid=ecf05e472899726402b210dba069f741bf1cf1b6c6901767&rid=giphy.gif"];
  if(!user || message.author.id === user.id)
  {
    let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: Hugs you`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
  
  else if(user.id === '627717611853185026')
  {
    let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: Awww... you're so sweet!`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('#FAFF00')
  .setDescription(`:hugging: ${user.username}#${user.discriminator}, ${act}${message.author.tag}`)
  .setImage(rando_hug_imgs[Math.floor(Math.random() * rando_hug_imgs.length)])
  .setFooter("Have image to submit? Send it to ʜᴍ-ᴠᴜᴛʜ#4416!!")
  message.channel.send(embed).then(msg => {
    msg.react('❤')});;
  }
}
