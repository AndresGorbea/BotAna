require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

const axios = require('axios');

const startCommand = require('./src/commands/start');
startCommand(bot);

const holaCommand = require('./src/commands/hola');
holaCommand(bot);

const wikiHandler = require('./src/inlinehandlers/wiki');
wikiHandler(bot);

const climaCommand = require('./src/commands/clima');
climaCommand(bot);

const cotCommand = require('./src/commands/cotizacion');
cotCommand(bot);

const newsCommand = require('./src/commands/news');
newsCommand(bot);

const ayudaCommand = require('./src/commands/ayuda');
ayudaCommand(bot);

const creditsCommand = require('./src/commands/credits');
creditsCommand(bot);

const doubtCommand = require('./src/commands/doubt');
doubtCommand(bot);

//bot.launch();

exports.handler = (event, contextt, callback) => {
    const tmp = JSON.parse(event.body); //obtener datos 
    bot.handleUpdate(tmp); //telegraf procesa los datos
    return callback(null,{ //devuelve algo desde el webhook
        statusCode: 200,
        body: '',
    });
};

