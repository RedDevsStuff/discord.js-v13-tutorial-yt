const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}
})

// ready event
Client.on('ready', () => {
    console.log('Ready!')
    Client.user.setPresence({ activities: [{name: "i am online!", type: "WATCHING"}]})
})

Client.login(token);