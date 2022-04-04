const config = require('../../config');

//envia mensaje de ayuda
module.exports = (bot) => {
    bot.hears(['hola', 'HOLA', 'Hola'], (ctx) => {
    bot.telegram.sendChatAction(ctx.chat.id, "typing");  
    ctx.reply('¡Hola!');
    bot.telegram.sendMessage(ctx.from.id, config.helpMessage, {
        parse_mode: "markdown"
    })
})
}