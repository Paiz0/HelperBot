module.exports = {
    name: 'dog',
    description: "Embeded discord message of my dog.",
    execute(message, args, Discord) {
        const doge = new Discord.MessageEmbed()
            .setColor('#ffaaaa')
            .setDescription('Best dog ever.')
            .setImage('https://i.imgur.com/YWB0Hx9.jpg');
        message.channel.send({embeds:[doge]});
    }
}