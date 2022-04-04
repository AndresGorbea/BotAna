const config = require('../../config');

//envia mensaje de bienvenida
module.exports = (bot) => {
    bot.command('start', ctx => {
    ctx.reply(ctx.from.first_name + " un gusto conocerte. Soy Ana, un bot multiuso.\n");
    bot.telegram.sendMessage(ctx.from.id, config.helpMessage, {
        parse_mode: "markdown"
    })
})
}


