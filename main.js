const Discord = require('discord.js');
const intents = new Discord.Intents(32767);     //The value 32767 means ALL_INTENTS. 
const client = new Discord.Client({ intents }); //Updated client so that it has all intents.
const prefix = '~';                             //prefix for the commands
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const { MessageEmbed } = require('discord.js'); //Included MessageEmbed which represents an embed in a message (image/video preview, rich embed, etc.).

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('HelperBot is ready for action!');
});

client.on('guildMemberAdd', member => { //The guildMemberAdd event detects if there are new members.
	//Search for the "welcome" text channel.
	const channel = member.guild.channels.cache.find(channel => channel.name === "welcome" && channel.type === "GUILD_TEXT");
	//If the "welcome" text channel exists, create the custom embed and post it to the discord server.
	if (channel) {
		const welcome_embed = new MessageEmbed()
		.setColor('#3BA45B')
		.setTitle('A new member just joined the server!')
		.setDescription(`Welcome ${member}!`)
		.setTimestamp()
		channel.send({ embeds: [welcome_embed] })
	}
	//Otherwise, print an error message to the console.
	else {
		console.log("Text channel doesn't exist.");
	}
});

//
client.on('guildMemberRemove', member => { //The guildMemberRemove event detects if any members have left the guild.
	//Search for the "general" text channel.
	const channel = member.guild.channels.cache.find(channel => channel.name === "general" && channel.type === "GUILD_TEXT");
	//If the "general" text channel exists, create the custom embed and post it to the discord server.
	if (channel) {
		const leave_embed = new MessageEmbed()
		.setColor('#FF0000')
		.setTitle('A member just left the server!')
		.setDescription(`We will miss you ${member}!`)
		.setTimestamp()
		channel.send({ embeds: [leave_embed] })
	}
	//Otherwise, print an error message to the console.
	else {
		console.log("Text channel doesn't exist.");
	}
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
    } else if (command === 'inspire') {
		client.commands.get('inspire').execute(message, args);
	}
});



client.login('INSERT TOKEN HERE'); //helper bot token


