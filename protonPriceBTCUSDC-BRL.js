//PROGRAMA PROTON

const urlBTC = "https://api.bitpreco.com/btc-brl/";
const urlUSDC = "https://api.bitpreco.com/usdc-brl/";                                       

function getJSON(url) {
        const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        const request = new XMLHttpRequest();

        request.open('GET', url, false);              request.send();

        let data = JSON.parse(request.responseText);

        return data;
}

function getPriceBTC(urlBTC) {
        const endpoint = 'ticker';
        urlBTC = urlBTC + endpoint;
        let dados = getJSON(urlBTC);
        let price = dados.last;

        return price;
}

function getPriceUSDC(urlUSDC) {
        const endpoint = 'ticker';
        urlUSDC = urlUSDC + endpoint;
        let dados = getJSON(urlUSDC);
        let price = dados.last;

        return price;
}

function main(){
        let priceBTC = getPriceBTC(urlBTC);
        console.log('BTC: ' + parseFloat(priceBTC).toFixed(2));
        let priceUSDC = getPriceUSDC(urlUSDC);
        console.log('USDC: ' + priceUSDC);
}

main();
