const axios = require('axios');


//envia mensaje del clima
module.exports = (bot) => {
    bot.command(['clima', 'Clima', 'CLIMA'], async (ctx) => {
    let input = ctx.message.text.split(" ");
    if(input.length == 1){
        ctx.reply("¡Debes ingresar una ciudad luego de /clima!");
        return;
    }
    let cityInput = input[1];
    
    if(input.length >= 3){
        cityInput = [input[1], input[2]].join(" ");
    }

    if(cityInput != null){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=fd03338f2f895e34a934dc22cee50632&units=metric&lang=es`)
        .then(res => {
                console.log(res.data);
            bot.telegram.sendChatAction(ctx.chat.id, "typing");        
            ctx.reply('En ' + res.data.name + ' el día se encuentra con ' + res.data.weather[0].description + ', con una temperatura de ' + res.data.main.temp + '°C, a un maximo de ' + res.data.main.temp_max + '°C y un minimo de ' 
            + res.data.main.temp_min + '°C.\n'
            + 'La humedad se encuentra en un ' + res.data.main.humidity + '%.\n'
            + 'El viento se mueve a una velocidad de ' + res.data.wind.speed + 'm/s en dirección a ' + res.data.wind.deg + ' grados, con posibles rafas de viento a '
            + res.data.wind.gust + 'm/s.\n'
            + 'Hay una nubosidad del ' + res.data.clouds.all + '%.\nLa visibilidad se encuentra a ' + res.data.visibility + 'm.'

            
            );
            bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
            bot.telegram.sendPhoto(ctx.chat.id, `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@4x.png`);
            ctx.reply("Espero que te haya sido útil la información ;)");
        }).catch(e => {
            if(input.length >= 3){
                ctx.reply('No te he entendido, ¿podrias volverlo a intentar? \nHas escrito: ' + input[1] + ' ' + input[2]);
            }else{
                ctx.reply('No te he entendido, ¿podrias volverlo a intentar? \nHas escrito: ' + input[1]);
            }
            console.log(e);
            
        })
    }



})
}