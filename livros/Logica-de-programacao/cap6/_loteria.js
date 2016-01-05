(function () {

	function id (el) {
		return document.getElementById(el);
	}

	var numb = id('numb-name');
	var sorteios = [2, 4, 7]; // valores da loteria

	function valueTextName (ev) {

		for (var i = 0; i < sorteios.length; i++) {
			if (sorteios[i] == numb.value) {
				console.log("Acertou, ah miserável!");
				return false;
			}
		}
		console.log("Errou");

		numb.value = '';
		ev.preventDefault();
	}

	var btn = id('btn-submit');
	btn.addEventListener( 'click', valueTextName );


})();