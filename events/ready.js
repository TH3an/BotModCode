const config = require("../config.json");

module.exports = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.channels.get('763697490796609567').send('*Hello!*')

const activities = require("../database/status.json");
  const random = [
                  `Watchings ${client.users.size} Users!`,
                  `${client.guilds.size} servers`,
                  `in ${client.channels.size} Channels!`
                 ];
  
 client.setInterval(() => {
  const beksloy = random[Math.floor(Math.random() * activities.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${config.prefix}help | ${beksloy}`, {
      type: activity.type,
    });
  }, 20000);


}
