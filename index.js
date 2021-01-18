const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const welcome = require("discord-welcome");
const leveling = require('discord-leveling');
const db = require('quick.db');

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
 
welcome(client, {
    "numericserverid1": {
        privatemsg : "thank for join saitama server",
        publicmsg : "welcome to my server",
        publicchannel : "758232502308438016"
    },
    "numericserverid2": {
        privatemsg : "thank for join cubekhmer server",
        publicmsg : "Welcome on the server",
        publicchannel : "770126986088808448"
    }
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 15);

    if(profile.xp + 15 > 150){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 0)
        message.channel.send(`Congratulations ${message.author.username}, you just advanced to level ${profile.level + 1}`)
    }
})

//console chatter
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.get("761111148300337172").send(x.join(" "));
});

client.login(config.token);
