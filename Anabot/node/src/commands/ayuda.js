const config = require('../../config');

//envia mensaje de ayuda
module.exports = (bot) => {
    bot.command(['ayuda', 'AYUDA', 'Ayuda'], (ctx) => {
    bot.telegram.sendChatAction(ctx.chat.id, "typing");  
    bot.telegram.sendMessage(ctx.from.id, config.helpMessage, {
        parse_mode: "markdown"
    })
})
}