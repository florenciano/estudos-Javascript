(function(){

	/* Evento de rolagem */
	var bar = document.querySelector(".progress div");
	addEventListener("scroll", function() {
		var max = document.body.scrollHeight - innerHeight; // tamanho do conteudo - tamanho da janela
		var percent = (pageYOffset / max) * 100; // qto rolou para baixo * pelo qto ainda falta
		bar.style.width = percent + "%"; // aplica no div
	});

	/* Evento de foco */
	var help = document.querySelector("#help");
	var fields = document.querySelectorAll("input");
	for (var i = 0; i < fields.length; i++) {
		fields[i].addEventListener("focus", function() {
			var text = event.target.getAttribute("data-help");
			help.textContent = text;
		});
		fields[i].addEventListener("blur", function() {
			help.textContent = "";
		});
	}

	/* Temporizadores */
	document.body.style.backgroundColor = "red";
	setTimeout(function () {
		document.body.style.backgroundColor = "green";
	}, 2000);
	setTimeout(function () {
		document.body.style.backgroundColor = "white";
	}, 4000);

	// // Juntando setInterval e clearInterval podemos definir times que se repete 
	// //  a cada X milisegundos
	var ticks = 0;
	var clock = setInterval(function() {
	  	console.log("tick", ticks++);
	  	if (ticks == 10) {
	    	clearInterval(clock);
	    	console.log("stop.");
	  	}
	}, 200);


})();