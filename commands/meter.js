const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.channel.send();
                    const prog0 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473001727066142/progress-overall-0.png"];
                    const prog6 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472997247680532/progress-overall-6.png"];
                    const prog13 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472967191035904/progress-overall-13.png"];
                    const prog20 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472974417952768/progress-overall-20.png"];
                    const prog26 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472980671791114/progress-overall-26.png"];
                    const prog33 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472989458726932/progress-overall-33.png"];
                    const prog40 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472945762467850/progress-overall-40.png"];
                    const prog46 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472953228328980/progress-overall-46.png"];
                    const prog53 = ["https://cdn.discordapp.com/attachments/535027866459701268/545472960480280576/progress-overall-53.png"];
                    const prog60 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473028679532565/progress-overall-60.png"];
                    const prog66 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473035805917215/progress-overall-66.png"];
                    const prog73 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473045985493014/progress-overall-73.png"];
                    const prog80 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473054969561089/progress-overall-80.png"];
                    const prog86 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473021171728405/progress-overall-86.png"];
                    const prog93 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473008769433600/progress-overall-93.png"];
                    const prog100 = ["https://cdn.discordapp.com/attachments/535027866459701268/545473015895556126/progress-overall-100.png"];
 
                    var mat = Math.floor(Math.random() * 100);
                    var met = Math.floor(Math.random() * 9);
                    if(mat == '0' && met == '0')
                    {var nproc1 = prog0;}
                    else
                    if(mat >= '0' && mat <= '6')
                    {var nproc1 = prog6;}
                    else
                    if(mat > '6' && mat <= '13')
                    {var nproc1 = prog13;}
                    else
                    if(mat > '13' && mat <= '20')
                    {var nproc1 = prog20;}
                    else
                    if(mat > '20' && mat <= '26')
                    {var nproc1 = prog26;}
                    else
                    if(mat > '26' && mat <= '33')
                    {var nproc1 = prog33;}
                    else
                    if(mat > '33' && mat <= '40')
                    {var nproc1 = prog40;}
                    else
                    if(mat > '40' && mat <= '46')
                    {var nproc1 = prog46;}
                    else
                    if(mat > '46' && mat <= '53')
                    {var nproc1 = prog53;}
                    else
                    if(mat > '53' && mat <= '60')
                    {var nproc1 = prog60;}
                    else
                    if(mat > '60' && mat <= '66')
                    {var nproc1 = prog66;}
                    else
                    if(mat > '66' && mat <= '73')
                    {var nproc1 = prog73;}
                    else
                    if(mat > '73' && mat <= '80')
                    {var nproc1 = prog80;}
                    else
                    if(mat > '80' && mat <= '86')
                    {var nproc1 = prog86;}
                    else
                    if(mat > '86' && mat <= '99')
                    {var nproc1 = prog93;}
                    else
                    if(mat == '100')
                    {
                        met = '0';
                        var nproc1 = prog100;
                    }

  
let say = args.join(' ');
if (!say) return message.channel.send(":warning: Please specify a characteristic!");
let embed = new Discord.RichEmbed()
                        .setAuthor(say + ": " + mat +"." + met + "%", "https://cdn.discordapp.com/attachments/535027866459701268/535027933287415808/wide-right-arrow.png")
                        .setColor('#FFD800')
                        .setImage(`${nproc1}`)
 setTimeout(function()
             {
                       message.channel.send(embed).then(message => message.channel.stopTyping());
                        }, 500)
}
