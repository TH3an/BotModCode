const request = require('request');

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to give something to search!');
    
    request({
      'url': 'https://api.github.com/search/repositories?q=' + encodeURIComponent(args.join(' ')),
      'headers': {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + process.env.GITHUB_TOKEN,
        'User-Agent': 'CelestialCrafter'
      },
      'json': true
    }, async (req, res, json) => {
      if (!json.items[0]) return message.reply('I couldn\'t find anything for that!');
      
      let output = '';
      let i = 1;
      
      if (json.items.length > 5) json.items.length = 5;
      
      json.items.forEach((repo) => {
        let title = repo.name;
        output += '\n' + i + '. ' + title;
        i++;
      });
      
      let reponum = await client.awaitReply(message, `Please choose the repository you want.${output}`);
      if (isNaN(reponum)) return message.reply('That\'s not a number!');
      
      let repo = json.items[reponum - 1];
      
      request({
        'url': repo.url,
        'headers': {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token ' + process.env.GITHUB_TOKEN,
          'User-Agent': 'CelestialCrafter'
        },
        'json': true
      }, (req, res, json) => {
        let embed = new client.Embed('normal', {
          title: json.full_name,
          url: json.html_url,
          description: json.description,
          author: {
            name: json.owner.login,
            icon: json.owner.avatar_url,
            url: json.owner.html_url
          },
          fields: [
            {
              title: 'License',
              text: json.license ? json.license.name : 'No License',
              inline: true
            },
            {
              title: 'Open Issues',
              text: json.open_issues_count,
              inline: true
            },
            {
              title: 'Language',
              text: json.language || 'Not Specified',
              inline: true
            },
            {
              title: 'Homepage',
              text: json.homepage || 'None',
              inline: true
            }
          ]
        });
        message.channel.send(embed);
      });
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};
