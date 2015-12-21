/*
	Trabalhando com expressões regulares
*/

function obterNumerosString (frase) {
	// regexp q considera apenas digitos
	var padrao = /[0-9]+/g; //g de global para pegar todas as ocorrencias de numero

	// função math retorna um array de números
	return frase.match(padrao);
}

function converterStringEmNumber (numero) {
	// a funcao retorna apenas a string convertida para número
	return parseInt(numero);
}

function soma (frase) {
	// numeros recebe um array de string's
	var numero = obterNumerosString(frase);

	// variável que acumulará o total
	var soma = 0;

	// precisamos varrer o array e processar cada número em string
	// convertendo em número
	for(i = 0; i < numero.length; i++) {
		soma += converterStringEmNumber(numero[i]);
	}

	return soma;
}

var a = soma("Eu tenho 2 laranjas, ganhei 4 laranjas. Quantas tenho?");
console.log(a);

