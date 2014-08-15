/* ============================================================================
* Callback
* Funções que servem de parâmetros para outra função para serem executadas
* dentro de seu contexto
============================================================================ */
console.log("==> callbacks.js");

function getList() {
	var	ordem = arguments[0].sort();
	if ( typeof arguments[1] == "function") {
		arguments[1](ordem);
	}
	return ordem.join("-");
}
console.log(getList(["palio", "gol", "fox", "corsa"], function (carros) {
	console.log(carros.reverse());
})); //insert colchetes transforma em array. Assim sort e join podemos usar.


// var nameList = function() {
// 	var lista = arguments[0].sort();
// 	return lista.sort();
// };
// console.log(nameList(["Tobias", "Guga", "Beatriz", "Francisca", "Ana"]));

