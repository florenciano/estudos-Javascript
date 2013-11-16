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
			return parseFloat(texto.replace("R$ ","",",","."));
		}
	};

	return retorno; // exportando nosso módulo
})();








