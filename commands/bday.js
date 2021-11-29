module.exports = {
    name: 'bday',
    description: "wishes a happy birthday",
    execute(message, args) {
        message.channel.send(':confetti_ball::tada: HAPPY :birthday: BIRTHDAY :tada::confetti_ball:');
    }
}