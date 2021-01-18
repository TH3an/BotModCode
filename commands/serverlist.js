const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  if (message.author.id !== '627717611853185026') return message.channel.sendMessage("<:WrongMark:552116790981951511> This command is only for bot creator!");
    message.delete();
 const Embeded = require('discord.js').RichEmbed;

    let number = bot.guilds.array().sort().map((x,i) => `\`${i+1}\` - ${x.toString()} -- (${x.id}) -- **${x.memberCount}** Members`)
    number = chunk(number, 10);

    let index = 0;
  const ge = new Embeded() //astaga
  .setColor("#FFD800")
  .setAuthor(`🌏 | Joined Guild List [${bot.guilds.size} servers]`)
  .setDescription(number[index].join('\n'))
  .setFooter(`Page ${index+1} of ${number.length}`)
    const m = await message.channel.send(ge);
    await m.react('⬅');
  await m.react('🚪');
    await m.react('➡');
    async function awaitReaction(){
    const filter =(rect, usr) => ['⬅', '🚪','➡' ].includes(rect.emoji.name) && usr.id === message.author.id
        const response = await m.awaitReactions(filter, {
            max: 1,
            time: 60000
        });
        if(!response.size){
			m.delete();
          return undefined;
        }
        const emoji = response.first().emoji.name;
        if(emoji === '⬅') 
        {
          index--;
          await response.first().remove(message.author.id);
        }
          if(emoji === '🚪')  m.delete();
        if(emoji === '➡') 
        {
          index++;
          await response.first().remove(message.author.id);
        }
        index = ((index % number.length) + number.length) % number.length;
        ge.setDescription(number[index].join('\n'))
    ge.setFooter(`Page ${index+1} of ${number.length}`)
        await m.edit(ge);
        return awaitReaction();
    }
    return awaitReaction();
}
function chunk(array, chunkSize) {
    const temp = [];
    for(let i = 0; i < array.length; i+= chunkSize){
      temp.push(array.slice(i, i+chunkSize));
    }
    return temp;
  }