const ultimo = 194455;
const anterior = 194656;

function comparaVariacao(ultimoPreco, precoAnterior) {
	let variacao = ultimoPreco - precoAnterior;
	let porcentagem = (100 * ultimoPreco /  precoAnterior) - 100;

	return porcentagem;
}

function main() {

	let variacaoPorcento = comparaVariacao(ultimo, anterior);

	console.log(variacaoPorcento);
}

main();
