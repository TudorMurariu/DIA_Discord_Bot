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
});

var checkComplexity_open = false;

const days = ["duminica", "luni", "marti", "miercuri my dudes", "joi", "vineri", "sambata"];
client.on("messageCreate", (message) => {



    let date = new Date();
    if (message.content == "hi")
        message.reply("hi!");
    else if (message.content == "Ce zi este azi?" || message.content == "Ce zi e azi?")
        message.reply("Este " + days[date.getDay()]);
    else if (message.content == "checkComplexity") {
        checkComplexity_open = true;
        //message.reply("Enter the function :");
    } else if (checkComplexity_open == true) {
        const args = message.content.split("\n");
        for (let i = 0; i < args.length; i++) {
            message.channel.send(args[i]);
        }
    }
});

function complexity_cheker(mesaj) {
    const variabile = new Map();
    const args = mesaj.split("\n");


    for (let j = 0; j < args.length; j++) {
        let cuvinte = args[j].split(" ");
        for (let i = 0; i < cuvinte; i++) {
            switch (cuvinte[i]) {
                case "int":

                    break;
                case "float":

                    break;
                case "char":

                    break;
            }
        }
    }
}

client.login(TOKEN);