const ticker = "https://api.bitpreco.com/btc-brl/ticker";
const orderbook = "https://api.bitpreco.com/btc-brl/orderbook";
const trades = "https://api.bitpreco.com/btc-brl/trades";

function getJSON(url) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send();

	let data = JSON.parse(request.responseText);

	return data;
}

function getVariacao5M() {
	let dados = getJSON(trades);
	let lastPrice = dados[0].price;
	let precoAnterior = dados[1].price;

	if (lastPrice < precoAnterior) {
		console.log('Caindo...');
	}

	if (lastPrice > precoAnterior) {
		console.log('Subindo...')
	}
}

function getMarket() {
	let dadosTicker = getJSON(ticker);
	let dadosBook = getJSON(orderbook);
	let dadosTrades = getJSON(trades);
	let variacao24H = dadosTicker.var;
	let ultimoPreco = dadosTicker.last;
	let precoAnterior = dadosTrades[1].price;
	let variacao = ultimoPreco - precoAnterior;
	let variacao100 = (100 * ultimoPreco / precoAnterior) - 100;

	console.log("\nÚltimo: " + "R$" + parseFloat(ultimoPreco).toFixed(2));
	console.log("Variação desde o último: " + parseFloat(variacao).toFixed(2) + "$ " + parseFloat(variacao100).toFixed(2) + "%");
	console.log("24H: " + variacao24H + "%");

	return 
}

function main() {
	
	setInterval(getMarket, 3000);
	setInterval(getVariacao5M, 300000);

}

main();
