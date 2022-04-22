const clc = require('cli-color');
const green = clc.green;
const red = clc.red;

function getAPI(url) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send();

	let data = JSON.parse(request.responseText);

	return data;
}

function imprimePrice(ticker, trades) {
	let last = parseFloat(ticker.last).toFixed(2);
	let anterior = parseFloat(trades[1].price).toFixed(2);

	console.log("Último: " + last);
	console.log("Anterior: " + anterior + "\n");

	if (last < anterior) {
		let price = red.bold(last);
		let diferenca = red(last - anterior);

		console.log(price + " " + diferenca);
		return price;

	} else if (last > anterior) {
		let price = green.bold(last);
		let diferenca = green(last - anterior);

		console.log(price + green(" +") + diferenca);
		return price;
	} else if (last == anterior) {
		let price = yellow(last);
	} else {
		console.log('err');
	}
}

function main() {
const ticker =  getAPI("https://api.bitpreco.com/btc-brl/ticker");

const orderbook = getAPI("https://api.bitpreco.com/btc-brl/orderbook");

const trades = getAPI("https://api.bitpreco.com/btc-brl/trades");
	imprimePrice(ticker, trades);
	//imprimeForça(orderbook);
	//imprimeTrades(trades);

	//console.log('ok');
}

main();

setInterval(main, 10000);
