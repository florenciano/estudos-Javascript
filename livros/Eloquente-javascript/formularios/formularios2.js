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

	/* 
		Select: 
		Extraindo valores a partir de um campo múltiplo
	*/
	var select = document.querySelector("select"),
		output2 = document.querySelector("#output");

	select.addEventListener("change", function (event){
		var number = 0;
		// iterando em cada item do select
		for (var i = 0; i < select.options.length; i++) {
			var option = select.options[i];
			// se houver algum item selecionado...
			if (option.selected) {
				number += Number(option.value);
			}
		}
		output2.textContent = number;
	});

	/* 
		file: 
		Lendo arquivos através do input type=file
	*/
	var inputfile = document.querySelector(".inputfile");
	inputfile.addEventListener("change", function (event){
		if (inputfile.files.length > 0) {
			var file = inputfile.files[0];
			console.log("You choose", file.name);
			if (file.type) {
				console.log("It has type", file.type);
			}
		}
	});

	/* file multiple */
	var inputfileMult = document.querySelector(".inputfileMult");
	inputfileMult.addEventListener("change", function (event){
		Array.prototype.forEach.call(inputfileMult.files, function (file){
			var reader = new FileReader();
			reader.addEventListener("load", function(){
				console.log("File", file.name);
			});
			reader.readAsText(file);
		});
	});

})();