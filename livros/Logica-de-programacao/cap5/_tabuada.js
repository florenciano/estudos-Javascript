(function () {

	var numbTabuada = prompt("Qual o número da tabuada desejada?"),
		init = 0;

	if (isNaN(numbTabuada)) {
		console.log('Não foi digitado um número válido');
		return false;
	}
	while (init <= 10) {
		console.log( numbTabuada + ' X ' + init + ' = ' + (numbTabuada * init) ) ;
		init ++;
	}
	console.log("-----------");

	// faça o mesmo, usando o laço for
	for (var i = 0; i <= 10; i++) {
		console.log( numbTabuada + ' X ' + i + ' = ' + (numbTabuada * i) + ' for');
	};

})();