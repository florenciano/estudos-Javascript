/* função como classe */


// Sacola.js
function Sacola() {
	"use strict";

	// disponivel somente nesta func
	var total = 0;

	// ENCAPSULAMENTO: para obter o valor da variavel total nos outros obj
	this.obterTotal = function() {

		return total;

	};

	// determinando o valor que gostariamos que tivesse o total
	// pense que é possível usar func para trabalhar este valor
	/*
		this.meuValorTotal = function(param) {

			total = param;
			return total;

		};
	*/

	// incrementando um valor e não deixando q o usuário determine um valor qualquer
	this.incrementarTotal = function() {
		total ++;
	};
}