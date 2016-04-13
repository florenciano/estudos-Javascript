(function(){

	/* 
		Campo de texto [textarea]: 
		inserindo uma string ao pressionar 'F2' no ponto que esta o cursor
	*/
	var textarea = document.querySelector("textarea");
	textarea.addEventListener("keydown", function (event) {
		// the key cor for F2 to be 113
		if (event.keyCode == 113) {
			replaceSelection(textarea, "Khasekhemwy");
			event.preventDefault();
		}

		function replaceSelection (field, word) {
			var from = field.selectionStart, to = field.selectionEnd;
			field.value = field.value.slice(0, from) + word + field.value.slice(to);
			// put the cursor after the word
			field.selectionStart = field.selectionEnd + from + word.length;
		}
	});

	/* 
		Campo de texto [type]: 
		Contador que mostra o comprimento do texto inserindo
	*/

	var text = document.querySelector("input[type='text']"),
		output = document.getElementById('length');

	text.addEventListener("input", function (event) {
		// event input é acionado para cada vez que o usuário digitar um caractere,
		// exclui do texto, ou de outra forma manipula o conteúdo do campo.
		output.textContent = text.value.length;
	});

	/* 
		Checkboxes e radio buttons: 
		Extraindo sua propriedade, que tem um valor booleano
	*/

	var checkbox = document.querySelector("#purple");
	checkbox.addEventListener("change", function (event) {
		document.body.style.background = checkbox.checked ? "mediumpurple" : "";
	});

	// -- -- --
	
	var buttons = document.getElementsByName("color");

	function setColor (event) {
		document.body.style.background = event.target.value;
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("change", setColor);
	}

})();