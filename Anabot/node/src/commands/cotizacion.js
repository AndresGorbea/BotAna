const axios = require('axios');

//envia mensaje de la cotizacion
module.exports = (bot) => {
    bot.command(['cotizacion', 'Cotizacion', 'COTIZACION'], async (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "typing");
        axios.get(`https://free.currconv.com/api/v7/convert?q=USD_UYU,EUR_UYU&compact=ultra&apiKey=bdc87362e375e0bcf838`)
        .then(res => {
            console.log(res);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");        
            ctx.reply( 'Dólar: ' + res.data.USD_UYU + '\n' + 'Euro: ' + res.data.EUR_UYU
            
            );
                
        }).catch(e => {
                    console.log(e);
            
        })
        
        axios.get(`https://free.currconv.com/api/v7/convert?q=ARS_UYU,GBP_UYU&compact=ultra&apiKey=bdc87362e375e0bcf838`)
        .then(res => {
            console.log(res);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");        
            ctx.reply( 'Peso Argentino: ' + res.data.ARS_UYU + '\n' + 'Libra Esterlina: ' + res.data.GBP_UYU 
            
            );
                
        }).catch(e => {
                    console.log(e);
            
        })

        axios.get(`https://free.currconv.com/api/v7/convert?q=PYG_UYU,CHF_UYU&compact=ultra&apiKey=bdc87362e375e0bcf838`)
        .then(res => {
            console.log(res);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");        
            ctx.reply( 'Guaraní: ' + res.data.PYG_UYU + '\n' + 'Franco Suizo: ' + res.data.CHF_UYU 
            
            );
                
        }).catch(e => {
                    console.log(e);
            
        })

        axios.get(`https://free.currconv.com/api/v7/convert?q=BRL_UYU,JPY_UYU&compact=ultra&apiKey=bdc87362e375e0bcf838`)
        .then(res => {
            console.log(res);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");        
            ctx.reply( 'Real: ' + res.data.BRL_UYU + '\n' + 'Yen: ' + res.data.JPY_UYU 
            
            );
                
        }).catch(e => {
                    console.log(e);
            
        })
        ctx.reply("Resultados en pesos.");
    })
}