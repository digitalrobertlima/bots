const { Telegraf } = require('telegraf');
<<<<<<< HEAD
const tokenBOT = "5101473507:AAH7LpbUn4fKSPQ5B49rjc0MQGCM9Q2pvtU";
const chatID = "1932673610";
const bot = new Telegraf(tokenBOT);
const url = "https://api.bitpreco.com/btc-brl/ticker";
const formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

function getJSON(url) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send();

	let resposta = JSON.parse(request.responseText);

	console.log(resposta);
	return resposta;
}

function trabalharDados(data) {

	let market = data.market;
	let lastPrice = parseFloat(data.last).toLocaleString('pt-BR', formato);
	let high = parseFloat(data.high).toLocaleString('pt-BR', formato);
	let low = parseFloat(data.low).toLocaleString('pt-BR', formato);

	console.log(market + lastPrice + high + low);
	let mensagem = "Você está recebendo informações de: " + market + "\n\nO último preço registrado pela BitPreço foi: " + lastPrice + "\n\nO maior preço registrado em 24h é de: " + high + "\nO menor preço registrado em 24h é de: " + low;

	return mensagem
}

function enviarMensagem(dados) {
	console.log('Enviando... Por favor aguarde');
	let mensagem = "API BitPreço\n\n" + dados;
	bot.telegram.sendMessage(chatID, mensagem);
}

function main() {

	let objeto = getJSON(url);
	let dadosProcessados = trabalharDados(objeto);
	enviarMensagem(dadosProcessados);
}

main();

//setInterval(main, 3500);
=======
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
>>>>>>> refs/remotes/origin/main
