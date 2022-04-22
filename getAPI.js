//Recebendo dados de API genérica:

/* Change market:
 *
 * abfy-brl, ada-brl, atlas-brl, axs-brl, bnb-brl, btc-brl, cake-brl, eth-brl, luna-brl, paxg-brl, polis-brl, sol-brl, uni-brl, usdt-brl, usdc-brl;
 */

let market = 'btc-brl'; //change this
let endpoint = 'trades' //ticker, orderbook or trades
function getJSON(url) {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	const request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send();

	let data = JSON.parse(request.responseText);

	return data;
}

function main() {
	const urlAPI = "https://api.bitpreco.com/" + market + "/" + endpoint;
	let dados = getJSON(urlAPI);

	console.log(dados);
}

main();
