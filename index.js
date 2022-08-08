const Discord = require('discord.js');
const { Intents } = require('discord.js');
const spawn = require("child_process").spawn;

const process = spawn('python', ['C:\\Users\\tudor\\OneDrive\\Desktop\\python_projects\\Send_an_email\\main.py']);

// let TOKEN = ' /';
// fs = require('fs')
// fs.readFile("token.txt", "utf8", (error, data) => {
//     TOKEN = data
//     console.log(TOKEN);
// })
// console.log(TOKEN);
// we need to use await for reading files to work in node but i am not sure how :(

const ps = require("prompt-sync");
const prompt = ps();
let TOKEN = prompt("Enter TOKEN : ");

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log("YAY");
    client.user.setActivity('mama ta', { type: 'WATCHING' });
    try {
        client.user.setAvatar('./emil.png');
        client.user.setUsername('DIA Discord Bot');
    } catch (e) {
        // we do nottin abt it
    }
});

const days = ["duminica", "luni", "marti", "miercuri my dudes", "joi", "vineri", "sambata"];

client.on("messageCreate", (message) => {



    let date = new Date();
    if (message.content == "hi")
        message.reply("hi!");
    else if (message.content == "Ce zi este azi?" || message.content == "Ce zi e azi?")
        message.reply("Este " + days[date.getDay()]);
    else if (message.content.startsWith("-n ")) {
        const args = message.content.split(" ");
        console.log(args[1]);
        switch (args[1]) {
            case "meow":
                break;
            case "become_me":
                //client.user.setUsername(message.author.username);
                message.guild.
                console.log(message.author.username);
                client.user.setAvatar(message.author.avatarURL());
                break;
        }
    }
});



client.login(TOKEN);