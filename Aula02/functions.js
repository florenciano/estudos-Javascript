/* ============================================================================
	Functions
============================================================================ */
console.log("==> function.js");
// declaration of the function named
function getName() {
	return "Rodrigo";
}
console.log(getName()); // Rodrigo

// expression [equival function anonimous] So funciona qdo atribuida a uma variavel
var getAge = function() {
	return 33;
}
console.log(getAge());

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	FUNCTION PAR OU ÍMPAR
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
console.log("--parOuImpar()--");

function parOuImpar (numb1) {
	if (numb1 % 2 == 0 ) {
		var resp = "Par!";
	} else {
		var resp = "Ímpar!";
	}
	return resp + ": " + numb1;	
}
console.log(parOuImpar(438927));

/*
outher example function anonimous

	// EXAMPLE 1
	var soma = function(a,b) {
		return a + b;
	}
	console.log(soma(17,32));

*/


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	FUNCTION SOMANDO UMA LISTA DE VALORES
	// derivations example previous
	// add math paramteres ilimited
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
console.log("--somaListaValores()--");
// var soma = function() {
// 	// control repeat list total parameters
// 	var total = 0;
// 		// total += arguments[0];
// 		// return total;
// 	for( var pos = 0; pos < arguments.length; pos ++) {
// 		total += arguments[pos];
// 	}
// 	return total; 
// };
// console.log(soma(17,32,19,34,10,87,64,96,53,1));

var sumFile = function () {
	var total = 0;
	for ( i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
};
console.log(sumFile(100, 250, 100));


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	FUNCTION RAIZ QUADRADA
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
console.log("--raizQuadrada()--");

var raizQuadrada = function(numb) {
	console.log("Radicando é: " + numb);
	var total = numb * numb;
	console.log("Raiz quadrada é: " + total);
	var mega = total / 1024;
	return "Equivalente a: " + mega + " Mb";
};
console.log(raizQuadrada(384));