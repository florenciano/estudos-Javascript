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

})();