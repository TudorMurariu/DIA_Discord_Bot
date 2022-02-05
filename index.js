const Discord = require('discord.js');
const { Intents }  =  require('discord.js');

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const TOKEN = 'OTIwMDY3MDg1NTA0MjI1Mzgx.Ybe9Pw.MLyiui5gXKc6uLf5DeR3kvTQa0Q';

client.on('ready', () => {
    console.log("YAY");
});

const days = ["duminica", "luni", "marti", "miercuri my dudes", "joi", "vineri", "sambata"];
client.on("messageCreate",(message) => {
    let date = new Date();
    if(message.content == "hi")
        message.reply("hi!");
    else if(message.content == "Ce zi este azi?" || message.content == "Ce zi e azi?" )
        message.reply("Este " + days[date.getDay()]);
});

client.login(TOKEN);

