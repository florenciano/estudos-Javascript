(function () {

	function id (el) {
		return document.getElementById(el);
	}

	var numb = id('numb-name');
	var sorteados = [];
	var btn = id('btn-submit');

	function addSorteio () {
		for (i = 0; i < sorteados.length; i++) {
			if (sorteados[i] == numb.value) {
				console.log("Número já sorteado!");
				return;
			}
		}
		sorteados.push(numb.value);
		console.log(sorteados);
	}

	btn.addEventListener( 'click', addSorteio );

})();
