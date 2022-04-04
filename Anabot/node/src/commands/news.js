const axios = require('axios');


//envia mensaje de noticias
module.exports = (bot) => {
    bot.command(['noticias', 'Noticias', 'NOTICIAS'], async (ctx) => {
    let input = ctx.message.text.split(" ");
    if(input.length == 1){
        ctx.reply("¡Debes ingresar una palabra luego de /noticias!");
        return;
    }
    let newsInput = input[1];
    
    if(input.length >= 3){
        newsInput = [input[1], input[2]].join(" ");
    }

    if(newsInput != null){
        axios.get(`https://newsapi.org/v2/top-headlines?q=${newsInput}&pageSize=1&language=es&apiKey=c06cc0417b894098bc1175cfeff30f89`)
        .then(res => {
            console.log(res.data.articles);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");    
            bot.telegram.sendMessage(ctx.from.id, 
            `*${res.data.articles[0].title}*\n\n${res.data.articles[0].description}.\n\n${res.data.articles[0].url}
            

            
            
            
            `, {
        parse_mode: "markdown"
    })
            
        }).catch(e => {
            if(input.length >= 3){
                ctx.reply('¡No hay noticias sobre ' + input[1] + ' ' + input[2] + '!');
            }else{
                ctx.reply('¡No hay noticias sobre ' + input[1] + '!');
            }
            console.log(e);
            
        })
    }
})
}