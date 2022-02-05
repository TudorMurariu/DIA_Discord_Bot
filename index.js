const Discord = require('discord.js');
const { Intents } = require('discord.js');

// let TOKEN = ' /';
// fs = require('fs')
// fs.readFile("token.txt", "utf8", (error, data) => {
//     TOKEN = data
//     console.log(TOKEN);
// })
// console.log(TOKEN);
// we need to use async for reading files to work in node but i am not sure how :(

const ps = require("prompt-sync");
const prompt = ps();
let TOKEN = prompt("Enter TOKEN : ");
console.log(TOKEN);

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log("YAY");
});

const days = ["duminica", "luni", "marti", "miercuri my dudes", "joi", "vineri", "sambata"];
client.on("messageCreate", (message) => {
    let date = new Date();
    if (message.content == "hi")
        message.reply("hi!");
    else if (message.content == "Ce zi este azi?" || message.content == "Ce zi e azi?")
        message.reply("Este " + days[date.getDay()]);
});

client.login(TOKEN);