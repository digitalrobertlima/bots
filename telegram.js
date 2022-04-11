const { Telegraf } = require('telegraf');
const bot = new Telegraf("TOKEN_HERE");
const chatID = "1932673610";
                                              function enviarMensagem() {
        console.log('Enviando... Por favor aguarde');
        let mensagem = "Hello World";                 bot.telegram.sendMessage(chatID, mensagem);                                         }
                                              function main() {

        enviarMensagem();
}

main();
setInterval(main, 15000);
