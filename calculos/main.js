/*
	Formatando string
*/

console.log("--main.js--");
var texto = "R$ 120,45";
var textoNumber = parseFloat(texto.replace("R$ ","",",","."));
console.log(texto);

console.log(soma("Quanto é 10 mais 20?"));

/*
	Objetos
*/

console.log("--moeda.js--");

// nenhuma da duas vairáveis cairá no escopo global
// (function(fm) {
// 	var formatado = formatadorMoeda.numberParaReal(9.9);
// 	console.log(formatado);

// 	var numeroFormatado = formatadorMoeda.realParaNumber("235.3423,89");
// 	console.log(numeroFormatado);
// })(formatadorMoeda);

