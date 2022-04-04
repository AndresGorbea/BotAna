const axios = require('axios');

module.exports = (bot) => {
    bot.on('inline_query', async ctx => {
    let query = ctx.inlineQuery.query;
    let res = await axios.get(`https://es.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&limit=50`);
    console.log(res.data);
    let data = res.data;
    let allTitles = data[1];
    let allLinks = data[3];

    if(allTitles == undefined){
        return;
    }
    
    let results = allTitles.map((item, index) => {
        return {
            type: 'article',
            id: String(index),
            title: item,
            input_message_content : {
                message_text: `${item}\n${allLinks[index]}`
            },
            description : allLinks[index]
        }
    })

    ctx.answerInlineQuery(results);
})
}