function getPrice() { };

getPrice.prototype.JSON = function() {
	this.data = "JSON";

  return data;
}

getPrice.USDC = function() {
	this.dolar = "4.7";

  return dolar;
}

let obj = new getPrice();
let JSON = obj.JSON;
JSON(); // objeto global

let USDC = getPrice.USDC;
USDC(); // objeto global

console.log(USDC());
