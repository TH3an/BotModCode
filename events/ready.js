
const config = require("../config.json");

module.exports = (client) => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

const activities = require("../database/status.json");
  const random = [`${client.guilds.size} server`, `${client.channels.size} channel`, `${client.users.size} users`];
client.setInterval(() => {
  const beksloy = random[Math.floor(Math.random() * activities.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${config.prefix}help | ${beksloy}`, {
      name: 'Bot bek sloy zin',
      type: activity.type,
    });
  }, 20000);


}
