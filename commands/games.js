module.exports = {
    name: 'games',
    description: "Some fun recommended online games to pass time with.",
    execute(message, args) {
        message.channel.send('https://tetris.com/play-tetris');
        message.channel.send("https://www.chess.com/");
    }
}