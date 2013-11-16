/* ============================================================================
* Array
============================================================================ */
console.log("==> array.js");

// gerar alfabeto usando while
// function gerarAlfabeto () {
// 	var letras = [];
// 	var pos = 97;
// 	while (pos < 123) { //executed cod while for true
// 		letras.push(String.fromCharCode(pos)); //acrescenta no final do array push depois cria um array
// 		pos++;
// 	}
// 	return letras.join("-");
// }
// console.log(gerarAlfabeto());

function listUmACem () {
	var numbers = [];
	var index = 0;
	while (index < 101) {
		numbers.push(String.fromCharCode(index));
		index++;
	}
	return numbers.join("-");
}
console.log(listUmACem());
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* functionUNCTION GERAR NUMERO
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// gerar numero de 100 a 1
// function gerarNumeros () {
// 	var numb = []; //array
// 	var numbInit = 100; //limite numb
// 	while (numbInit > 0 ) {
// 		numb.push(numbInit); //acrescenta no array numb cada iteração
// 		numbInit--;
// 	}
// 	return numb;
// }
// console.log(gerarNumeros());