(function () {

	function id (el) {
		return document.getElementById(el);
	}

	function valueTextName (ev) {
		var numb = id('numb-name');
		var sorteio = Math.round(Math.random() * 10);

		if (sorteio == numb) {
			console.log("Acertou, ah miserável!");
		} else {
			console.log("Errou");
		}
		numb.value = '';
		ev.preventDefault();
	}

	var btn = id('btn-submit');
	btn.addEventListener( 'click', valueTextName );


})();