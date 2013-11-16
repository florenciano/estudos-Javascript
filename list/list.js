// // Qtde de item na lista
// // (function() {
// 	var lista = document.querySelectorAll(".topicos");

// 	function mostrar(itens) {
// 		var display = document.querySelectorAll(".display");
// 		// display.textContent = itens;
// 		// console.log(display);
// 		for(j = 0; j < display.length; j++) {
// 			display[j].textContent = itens;
// 		}
// 	}
// 	for(i = 0; i < lista.length; i++) {
// 		var qtdeLista = lista[i].getElementsByTagName("li").length;
// 		mostrar(qtdeLista);
// 		// console.log(qtdeLista);
// 	}


// // })();

var qtdeUL = document.querySelectorAll(".topicos");

function inserir(item) {
	var display = document.querySelectorAll(".display");


	for( j=0 ; j<display.length ; j++) {
		// console.log(display[j]);
		display[j].textContent = item;
	}
}

for(i=0; i<qtdeUL.length; i++) {
	var qtdeLI = qtdeUL[i].getElementsByTagName("li");
	var ItensLista = qtdeLI.length;
	inserir(ItensLista);
}



