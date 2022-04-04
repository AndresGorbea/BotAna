const config = require('../../config');


//mensaje desconocido
module.exports = (bot) => {
bot.on("text",(ctx) => {
    bot.telegram.sendMessage(ctx.from.id, `No te he entendido, recuerda que:${config.helpMessage}`, {
        parse_mode: "markdown"
    })
})
}