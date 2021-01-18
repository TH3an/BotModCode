const Discord = require("discord.js")

exports.run = async (client, message, args) => {

 const emoji = require('discord.js').RichEmbed;

	let number = message.guild.roles.array().map((x,i)=> `${i+1} - ${x.name} -- (${x.id})`)
	number = chunk(number, 10);
  
  if (!number) return message.channel.send("<:WrongMark:552116790981951511> Sorry, this server haven't roles!")

	let index = 0;
  
  try {
  const ge = new emoji()
  .setColor('#FFD800')
  .setAuthor(`Here is the Server Roles List - [${message.guild.roles.size} roles]`, message.guild.iconURL)
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
  catch(e){
    return message.channel.send(`<:WrongMark:552116790981951511> Sorry, this server hasn't roles!`)
  }

}
function chunk(array, chunkSize) {
    const temp = [];
    for(let i = 0; i < array.length; i+= chunkSize){
      temp.push(array.slice(i, i+chunkSize));
    }
    return temp;
  }
