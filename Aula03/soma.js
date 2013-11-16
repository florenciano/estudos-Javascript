/* ============================================================================
	Exercicios
============================================================================ */

function obterNumerosDaString (frase) {
	// expressão regular que considera apenas digitos
	var padrao = /[0-9]+/;
	// a função match retorna um array com os números
	return frase.match(padrao);
}
function converterStringEmNumber (numero) {
	// a função retorna apenas a string convertida para número
	return parseInt(numero);
}

function soma (frase) {
	// numeros recebe um array de string's
	var numeros = obterNumerosDaString(frase);

	// variável que acumulurá o total
	var soma = 0;
	
	// precisamos varrer o array e processar cada número em string
	// convertendo-o em número
	for(var i = 0; i < numeros.length; i++) {
		soma+= converterStringEmNumber(numeros[i]);
	}

	return soma;
}

console.log(soma("Quanto é mais 10 mais 20 ?"));