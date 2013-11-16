/* ============================================================================
* Regex
============================================================================ */
console.log("==> regex.js");

/*
METACARACTERES
^: inicio
$: fim
[]: lista [0-9] ou [a-z]
{}: qunantificador {n} qtos caracteres de intervalo
\: scape pra caracteres especiais ex \- para hífen
+: repetidor o caractere definido
\w: pega letras e numeros
(): grupos 
?: opcional
\d: representa so numeros
\s: espaço

~~~~~~~~ EXAMPLE FOR CEP
^[0-9]{5}\-[0-9]{3}$

~~~~~~~~ EXAMPLE FOR EMAIL
^[a-zA-Z0-9]+\@(\w+\.?)+$

florenciano23.rodrigo@sp-gmail.com.br
^(\w+(\.?\-?\_?))+\@(\w+(\.?\-?\_?))+$

~~~~~~~EXAMPLE FOR TEL
^\(?\d{2}\)?\s?9?\d{4}\-?\d{4}$

(11) 96316-1007
^\(?\d{2}\)?\s?[0-9]?\d{4}\-?\d{4}$

*/
// testando CEP
// console.log("-- validaCep --");
// var cepDigitado = prompt("Digite o seu cep:");
// var cepMask = /^[0-9]{5}\-?[0-9]{3}$/; //regex são inseridos dentro das barras
// console.log(cepMask.test(cepDigitado)); // test() verifica se o q vc digitou esta de acordo com o regpex
// console.log(cepMask.exec(cepDigitado)); //se tiver certo volta o cep digitado

// console.log("-- validaEmail() --");
// var emailInput = prompt("Digite o seu email camarada:");
// var validaEmail = /^(\w+(\.?\-?\_?))+\@(\w+(\.?\-?\_?))+$/;
// console.log(validaEmail.test(emailInput), "email digitado foi: " + emailInput);

var validaEmail = function (email) {
	var regexEmail = /^(\w+(\.?\-?\_?))+\@(\w+(\.?\-?\_?))+$/;
	regexEmail.test(email) == true ? console.log("Yahuuu!!!!") : console.log("errei porra!");
};
validaEmail("florenciano.rodrigo@gmail.com");