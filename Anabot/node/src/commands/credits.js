const config = require('../../config');

//envia mensaje de los creditos
module.exports = (bot) => {
    bot.command(['creditos', 'Creditos', 'CREDITOS'], ctx => {
    bot.telegram.sendMessage(ctx.from.id, config.credits, {
    parse_mode: "markdown"
    })
})
}
