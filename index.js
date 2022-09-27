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
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log("YAY");
    //client.user.setActivity('mama ta', { type: 'WATCHING' });
    // try {
    //     client.user.setAvatar('./emil.png');
    //     client.user.setUsername('DIA Discord Bot');
    // } catch (e) {
    // we do nottin abt it
    //}

    // checks once every 3 secconds if you are playing LOL
    // async function check_LOL() {



    //     await Sleep(3000); // we create a delay
    //     await check_LOL(); // we call the function again
    // }

    // check_LOL();
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
                // case "become_me":
                //     //client.user.setUsername(message.author.username);
                //     message.guild.
                //     console.log(message.author.username);
                //     client.user.setAvatar(message.author.avatarURL());
                //     break;

            case "getServerID":
                {
                    let server_id = message.guild.id;
                    message.reply(server_id + " ");
                }
                break;

            case "showUserCount":
                message.reply(String(message.guild.memberCount));
                break;

            case "showAllUsers":
                {
                    // const server_id = message.guild.id;
                    // const guild = client.guilds.resolve(server_id);
                    // let res = "";

                    //guild.members.fetch({ force: true })
                    //.then(console.log)
                    //.catch(console.error);

                    //guild.members.fetch()
                    //.then(console.log("member"))
                    //.catch(console.error("meow"));

                    message.guild.members.fetch()
                    .then(members => {
                        members.forEach(member => console.log(member.nickname));
                        console.log("hi");
                    });

                    message.guild.members.fetch().then(members => {
                        // Loop through every members
                        console.log("hi");
                        members.forEach(member => {
                            // Do whatever you want with the current member
                            console.log(member.nickname);
                        });
                    });

                    message.react("🤡");
                }
                break;
        }
    }
});



client.login(TOKEN);