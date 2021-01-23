
const config = require("../config.json");
module.exports = (client) => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

const activities = require("../database/status.json");

client.setInterval(() => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${client.guilds.size} server`, {
      status: 'online',
      name: 'Bot bek sloy zin',
      type: activity.type,
    });
  }, 20000);


}
