/* ============================================================================
* Regex
============================================================================ */
console.log("=============== regex.js ============");

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

~~~~~~~EXAMPLE FOR TEL
^\(?\d{2}\)?\s?9?\d{4}\-?\d{4}$

*/

// testando cep
var cepDigitado = prompt("Digite o seu cep:");
var cepMask = /^[0-9]{5}\-[0-9]{3}$/; //regex são inseridos dentro das barras
console.log(cepMask.test(cepDigitado)); // test() verifica se o q vc digitou esta de acordo com o regpex
console.log(cepMask.exec(cepDigitado)); //se tiver certo volta o cep digitado