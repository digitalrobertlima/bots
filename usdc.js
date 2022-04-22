//get price for USDC

//Declaração de variáveis:
const url = "https://api.bitpreco.com/usdc-brl/ticker";

//Requisição JSON Bit Preço:
function getJSON(url) {

	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send();

	let resposta = JSON.parse(request.responseText);

	return resposta;

}

function getPrice(objeto) {

	let ultimoPreco = objeto.last;
	
	return ultimoPreco;
}

function main() {
	let dados = getJSON(url);
	let price = getPrice(dados);

	console.log(price);
}

main();
