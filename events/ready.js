const config = require("../config.json");

module.exports = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

const activities = require("../database/status.json");
  const random = [
                  `Watchings ${client.users.size} Users!`,
                  `in ${client.channels.size} Channels!`,
                  `On ${client.guilds.size} servers!`
                 ];
  
 client.setInterval(() => {
  const beksloy = random[Math.floor(Math.random() * activities.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${config.prefix}help | ${beksloy}`, {
      type: activity.type,
    });
  }, 20000);


}
