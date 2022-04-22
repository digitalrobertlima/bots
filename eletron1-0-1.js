const ticker = "https://api.bitpreco.com/btc-brl/ticker";
const orderbook = "https://api.bitpreco.com/btc-brl/orderbook";
const trades = "https://api.bitpreco.com/btc-brl/trades";
let i = 0;
let history = [];

function getJSON(url) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send();

	let data = JSON.parse(request.responseText);

	return data;
}

function apagar() {
	history.splice(0, 1);

	return;
}

function getPrice() {
	let data = getJSON(ticker);
	let price = data.last;

	return price;
}

function getLow(historico) {

	let min = Math.min(...historico);

	return min;
}

function getHigh(historico) {

	let max = Math.max(...historico);

	return max;
}

function getMarket() {

	let data = getJSON(ticker);
	let menor24H = data.low;
	let maior24H = data.high;
	let price = parseFloat(data.last).toFixed(2);
	let anterior = history[history.length - 1];

	if (price !== anterior) {
		history.push(price);

		let menorPreco5M = getLow(history);
		let maiorPreco5M = getHigh(history);
		let timestamp = Date.now();

		console.log("Menor em 5 minutos: R$" + menorPreco5M);
		console.log("Maior em 5 minutos: R$" + maiorPreco5M);
		console.log("\nMenor em 24 horas: R$" + menor24H);
		console.log("Maior em 24 horas: R$" + maior24H);

		console.log(history);
		console.log("Timestamp: " + timestamp + "\n\nCarregando...\n");

		setInterval(apagar, 300000);
	}

	//for debug:
	//console.log(history);
	//console.log(history.length);
	//console.log('rodando...' + i++);

}

function main() {

	console.log("Test: " + i++);

	getMarket();
	
	setInterval(getMarket, 3000);

	return
}

main();
