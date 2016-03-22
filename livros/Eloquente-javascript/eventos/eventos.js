(function(){

	/*  Adicionando e Removendo eventos */

	var button = document.querySelector("button");

	function once() {
		console.log("Done!");
		button.removeEventListener("click", once);
		button.setAttribute("disabled","");
	}

	button.addEventListener("click", once);

	/////////////////////////////////////////////////////////////////
	// Detectando os objs dos eventos
	var button2 = document.getElementById('button2');

	button2.addEventListener("mousedown", function(event) {
		if (event.which == 1) {
			console.log("left button");
		} else if (event.which == 2) {
			console.log("middle button");
		} else if (event.which == 3) {
			console.log("right button");
		}
	});

	/////////////////////////////////////////////////////////////////
	// Propagação

	var para = document.getElementById('p');
	var button3 = para.querySelector('button');

	para.addEventListener("mousedown", function() {
		console.log("Evento do parágrafo");
	});
	button3.addEventListener("mousedown", function(event) {
		console.log("Evento do botão");
		if (event.which == 3) {
			event.stopPropagation(); // para o evento do parágrafo
		}
	});

	// // usando a propriedade de destino
	document.getElementById('p2').addEventListener("click", function(event) {
		if (event.target.nodeName == "BUTTON") {
			console.log("Clicked", event.target.textContent);
		}
	});

	/////////////////////////////////////////////////////////////////
	// Eventos de tecla

	addEventListener("keyup", function(event) {
		if (event.keyCode == 32 && event.ctrlKey) {
			console.log("Continuing!");
		}
	});

	// captura a tecla pressionada
	addEventListener("keypress", function(event) {
		console.log(String.fromCharCode(event.charCode));
	});

	/////////////////////////////////////////////////////////////////
	// Eventos de mouse
	var b = document.querySelector(".body"),
		x = b.getBoundingClientRect();

	addEventListener("click", function(event) {
		if ((event.clientX > x.left && event.clientX < x.right) && (event.clientY > x.top && event.clientY < x.bottom)) {
			var dot = document.createElement("div");
			dot.className = "dot";
			dot.style.left = (event.clientX - 4) + "px";
			dot.style.top = (event.clientY - 4) + "px";
			b.appendChild(dot);
		} else {
			console.log("Clicou fora!");
		}
	});

	// // movimento do mouse outher example
 	var lastX; // Tracks the last observed mouse X position
	var rect = document.querySelector(".bar");
	rect.addEventListener("mousedown", function(event) {
		if (event.which == 1) {
			lastX = event.pageX;
			addEventListener("mousemove", moved);
			event.preventDefault(); // Prevent selection
		}
	});

	function moved(event) {
	if (event.which != 1) {
		removeEventListener("mousemove", moved);
	} else {
		  var dist = event.pageX - lastX;
		  var newWidth = Math.max(10, rect.offsetWidth + dist);
		  rect.style.width = newWidth + "px";
		  lastX = event.pageX;
		}
	}

})();