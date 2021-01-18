const Discord = require("discord.js")
//const { ms, s, m, h, d } = require('time-convert')

exports.run = async (client, message, args) => {
  //if (message.author.id !== '398845938816516096') return message.channel.sendMessage("<:WrongMark:552116790981951511> This command is only for bot creator!");
  
      if(!args[0] || args[0] == "-")
      {
        var server = message.guild;
        var id = message.guild.id;
        var age = 0;
        var use = 0;
      }
    else if(args[0] == "30m"){
      var server = message.guild;
        var id = message.guild.id;
      var age = 1800;
      if(!args[1] || args[1] == "-") var use = 0;
      else var use = parseInt(args[1]);
    }
    else if(args[0] == "1h"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 3600;
      if(!args[1] || args[1] == "-") var use = 0;
      else var use = parseInt(args[1]);
    }
    
    else if(args[0] == "6h"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 21600;
      if(!args[1] || args[1] == "-") var use = 0;
      else var use = parseInt(args[1]);
    }
    else if(args[0] == "12h"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 43200;
      if(!args[1] || args[1] == "-") var use = 0;
      else var use = parseInt(args[1]);
    }
    else if(args[0] == "1h"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 86400;
      if(!args[1] || args[1] == "-") var use = 0;
      else var use = parseInt(args[1]);
    }
    else if(args[0] == "1"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 1;
    }
  else if(args[0] == "5"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 5;
    }
  else if(args[0] == "10"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 10;
    }
   else if(args[0] == "25"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 25;
    }
   else if(args[0] == "50"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 50;
    }
  else if(args[0] == "100"){
      var server = message.guild;
      var id = message.guild.id;
      var age = 0;
      var use = 100;
    }
  
      else {  
        var id = args[0];
        var server = client.guilds.find(r => r.id === id);
        if(!server) return message.channel.sendMessage(`<:WrongMark:552116790981951511> No server found or invalid input data!

Example correct format: \u0060r!sinvite 123456789015894784 1d 100\u0060 or \u0060r!sinvite 30m -\u0060
Lifetime format only support: **30m, 1h, 6h, 12h, 1d, -**
Use limit only support: **1, 5, 10, 25, 50, 100, -**
\u0060-\u0060 or leave it blank will result unlimited.
`);
        if(!args[1] || args[1] == "-")
          {
          var age = 0;
        var use = 0;
          }
        else if(args[1] == "30m"){
          var age = 1800;
          if(!args[2] || args[2] == "-")
          var use = 0;
        else {
          var use = parseInt(args[2]);
        }
        }
        else if(args[1] == "1h")
          {
          var age = 3600;
            if(!args[2] || args[2] == "-")
          var use = 0;
        else {
          var use = parseInt(args[2]);
        }
          }
        else if(args[1] == "6h")
        {
          var age = 21600;
          if(!args[2] || args[2] == "-")
          var use = 0;
        else {
          var use = parseInt(args[2]);
        }
        }
        else if(args[1] == "12h")
          {
            var age = 43200;
            if(!args[2] || args[2] == "-")
          var use = 0;
        else {
          var use = parseInt(args[2]);
        }
          }
        else if(args[1] == "1h")
          {
            var age = 86400;
            if(!args[2] || args[2] == "-")
          var use = 0;
        else {
          var use = parseInt(args[2]);
        }
          }
        else if(args[1] == "1")
          {
          var age = 0;
          var use = 1;
          }
        else if(args[1] == "5")
          {
          var age = 0;
          var use = 5;
          }
        else if(args[1] == "10")
          {
          var age = 0;
          var use = 10;
          }
        else if(args[1] == "25")
          {
          var age = 0;
          var use = 25;
          }
        else if(args[1] == "50")
          {
          var age = 0;
          var use = 50;
          }
        else if(args[1] == "100")
          {
          var age = 0;
          var use = 100;
          }
      }
  
  //return message.channel.send(":warning: Please input it with ID number!");
  try{
      if(!server.me.hasPermission('CREATE_INSTANT_INVITE')) return message.channel.sendMessage("<:WrongMark:552116790981951511> I don't have Create Invite Link permission!");
      if(server.channels.random() == undefined) return message.channel.send("<:WrongMark:552116790981951511> Something wrong with creating invite link, please try again!")
      
      server.channels.random().createInvite({maxAge: age, maxUses: use}).then(invite => {
        
        var iconHD = '?size=1024'
  if(!server.iconURL)
     {
     iconHD = '';
     }
        
        if(invite.maxAge === 0) var lifeTime = "Permanent";
        else if(invite.maxAge === 1800) var lifeTime = "30 Minutes";
        else if(invite.maxAge === 3600) var lifeTime = "1 Hour";
        else if(invite.maxAge === 21600) var lifeTime = "6 Hours";
        else if(invite.maxAge === 43200) var lifeTime = "12 Hours";
        else if(invite.maxAge === 86400) var lifeTime = "1 Day";
        if(invite.maxUses === 0) var used = "Unlimited";
        else var used = invite.maxUses.toString();
        
        var online = server.members.filter(members => members.presence.status == 'online').size;
        var idle = server.members.filter(members => members.presence.status == 'idle').size;
        var dnd = server.members.filter(members => members.presence.status == 'dnd').size;
    let embed = new Discord.RichEmbed()
    .setColor("#FAFF00")
    .setAuthor(`Invite link for: ${server.name}`, server.iconURL)
    .setDescription(`Click the link to join: \n${invite}\n\nDetails:\n
<:online:504813930313547776> ${online+idle+dnd} Online
<:offline:504813929780871191> ${server.memberCount} Members\n
**ID:** ${id}
**Lifetime:** ${lifeTime}
**Use limit:** ${used}`)
    .setThumbnail(`${server.iconURL ? server.iconURL : ""}`+iconHD)
    .setFooter(`With using generated random invite link command, you will agree that Saitama Bot allow to use instant invite link as it has permission. But remind that, it will might prevent from their rules, because it cannot determine who use the command. Use it at own your risk!`)
    message.channel.send(embed);
        
      })
  return;
  }
  catch(error){
          message.channel.send("<:WrongMark:552116790981951511> Something wrong with creating invite link, please try again!");
    return;
  }
}