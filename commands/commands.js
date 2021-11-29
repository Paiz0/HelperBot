module.exports = {
    name: 'commands',
    description: "Discord embeded message of current command list for users to use.",
    execute(message, args, Discord) {
        const commands = new Discord.MessageEmbed()
            .setColor('#dd7bff')
            .setTitle('HelperBot\'s current commands.')
            .setDescription('This is a list of the commands available for use right now!')
            .addFields(
                { name: '~bday', value: 'Writes out a happy birthday message with some emojis attached.' },
                { name: '~pizza', value: 'Builds a wall of pizza to get you hungry.' },
                { name: '~dog', value: 'Cute picture of my dog.' },
                { name: '~games', value: 'Somes free games online to pass time with.'},
                { name: '~inspire', value: 'Generates a random inspirational quote.'}
            );
        message.channel.send({embeds:[commands]});
    }
}