const Discord = require("discord.js")
const config = require("../config.json")

module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  run: async (client, message, args) => {
  if (!message.content.startsWith(config.prefix)) return;
    const command = args.shift();
    if (command == "autoplay") {
        let mode = distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    }}
}
