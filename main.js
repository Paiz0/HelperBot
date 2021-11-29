const Discord = require('discord.js');
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_TYPING']});
const prefix = '~';                             //prefix for the commands
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('HelperBot is ready for action!');
});

client.on('messageCreate', message => {
	if (message.content.includes("hello helperbot") && !message.author.bot) {
		message.channel.send('Hello, I hope to be of service to you!');
    }
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'bday') {
		client.commands.get('bday').execute(message, args);
	} else if (command === 'commands') {
		client.commands.get('commands').execute(message, args, Discord);
	} else if (command === 'pizza') {
		client.commands.get('pizza').execute(message, args);
	} else if (command === 'dog') {
		client.commands.get('dog').execute(message, args, Discord);
	} else if (command === 'games') {
		client.commands.get('games').execute(message, args);
    }
});



client.login('OTE0NzA2OTc4MjY0MjA3NDMw.YaQ9Qg.40BtXVTevPIFyHzvffzcDB0BwOs'); //helper bot token


//Invite link to add HelperBot to your discord server:
//https://discord.com/api/oauth2/authorize?client_id=914706978264207430&permissions=8&scope=bot