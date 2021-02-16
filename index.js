const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on("ready", () => {
    client.user.setActivity( prefix+"help", { type: "PLAYING"})
})

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', async message => {
    /* C'est degueulasse oui oui  */
    let { prefix } = require('./config.json');
    client.user.setActivity( `${prefix}help`, { type: "PLAYING"})

    /*La ca va je pense */
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();

    if (!client.commands.has(command)) {
        message.channel.send("Cette commande n'existe pas");
    }else {
        try {
            client.commands.get(command).execute(message, args);
        } 
        catch (error) {
            console.error(error);
            message.reply("Pas de chance");
        }
    }
})

client.login(token);