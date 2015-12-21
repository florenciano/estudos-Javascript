/*
	Organizando nossas funções em objetos
	Construindo módulos
*/

var formatadorMoeda = (function() {
	var simbolo = " R$ ";
	var retorno = {
		numberParaReal	: function (numero) {
			return simbolo + numero.toFixed(2).replace(".",",");
		},
		realParaNumber 	: function (texto) {
			return parseFloat(texto.replace("R$ ","",",",".")).toFixed(2);
		}
	};
	return retorno; // exportando nosso módulo
})();

// var x = formatadorMoeda.numberParaReal(12.6912);
// console.log(x);

(function(func) {

	var n = formatadorMoeda.numberParaReal(3644.58464);
	console.log(n);
	
	var r = formatadorMoeda.realParaNumber("R$ 365,25");
	console.log(r);
	
})(formatadorMoeda);





