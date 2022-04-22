const clc = require('cli-color');
const yellow = clc.yellow;
const green = clc.green;
const red = clc.red;
const blue = clc.blue;

class getAPI {
	constructor(url) {

		const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
		const request = new XMLHttpRequest();

		request.open('GET', url, false);
		request.send();

		let data = JSON.parse(request.responseText);

		return data;
	}
}

function imprimeUltimoPreco(precoAtual, precoAnterior) {
	if (precoAtual > precoAnterior) {
		console.log(green(precoAtual));
		return green(precoAtual);
	} else if (precoAtual < precoAnterior) {
		console.log(red(precoAtual));

		return red(precoAtual);
	} else {}

}

class bitcoin {
	constructor() {
		const ticker = new getAPI("https://api.bitpreco.com/btc-brl/ticker");
		//const orderbook = new getAPI("https://api.bitpreco.com/btc-brl/orderbook");
		const trades = new getAPI("https://api.bitpreco.com/btc-brl/trades");
		const welcome = "Este é um resumo do mercado: " + green(ticker.market) + ". Em " + yellow(ticker.timestamp);
		
		console.log(welcome);
		
		let pA = trades[1].price;
		let ultimo = ticker.last;

		let last = imprimeUltimoPreco(ultimo, pA);
		console.log(last);
	}
}

function main() {
	const btc = new bitcoin();
}

main();

setInterval(main, 10000);
