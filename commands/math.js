const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (client, msg, args) => 
{
  //if(msg.author.id != '398845938816516096') return msg.channel.send("<:WrongMark:524375774741135362> This command only for bot creator!");
  var num1 = Math.floor(Math.random() * 99);
  var num2 = Math.floor(Math.random() * 99);
  let sum = `${num1}+${num2}`;
  let sub = `${num1}-${num2}`;
  var quest = [sum, sub];
  let questrand = quest[Math.floor(Math.random() * quest.length)]
  let confirm = Math.eval(questrand)
  
  //var evaluate = Math.eval(args);
  //return msg.channel.send(evaluate);
  try {
         const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { maxMatches:1, time: 15000, errors: ['time'] });
        await msg.channel.send(`<@${msg.author.id}>, `+"answer this question in 15 seconds: \n**"+questrand+"=...** \n\nType `cancel` to cancel the operation!")
        collector.on('collect', msg => {
            if (msg.content.toLocaleLowerCase() == confirm) {
                return msg.channel.send(":white_check_mark: That was correct!");
            } else if (msg.content.toLocaleLowerCase() == "cancel") {
                return msg.channel.send("<:WrongMark:552116790981951511> Cancelled");
            } else if (msg.content.toLocaleLowerCase() != confirm && !isNaN(msg.content.toLocaleLowerCase()) ) {
                return msg.channel.send("<:WrongMark:552116790981951511> That was wrong, the correct is "+confirm);
            } else return msg.channel.send("<:WrongMark:552116790981951511> Whoops, type it in numeric...");
        }
        );
         collector.on('end', collected => {
              if (collected.size === 0) {
               msg.channel.send("<:WrongMark:552116790981951511> Too slow...");
                }
            });
          
        
  }
  catch(errors){
      console.error(errors);
      msg.channel.send("<:WrongMark:552116790981951511> Error...");
  }
 }