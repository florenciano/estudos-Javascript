(function(){
	
	function time(name, action) {
	    var start = Date.now(); // Tempo atual milissegundos
	    action();
	    console.log(name, "levou", Date.now() - start, "ms");
  	}

  	time("naive", function() {
	    var target = document.getElementById("one");
	    while (target.offsetWidth < 890) {
      		target.appendChild(document.createTextNode("X"));
      	}
  	});

  	time("clever", function() {
	    var target = document.getElementById("two");
	    target.appendChild(document.createTextNode("XXXXX"));
	    var total = Math.ceil(890 / (target.offsetWidth / 5));
	    for (var i = 5; i < total; i++) {
	      	target.appendChild(document.createTextNode("X"));
	    }
  	});

  	/* Seletores de busca */
  	function count(selector) {
  		return document.querySelectorAll(selector).length;
  	}
  	console.log(count("p"));
  	console.log(count("span"));
  	console.log(count("body"));

  	/* 	Animações
		Se nós apenas atualizássemos o DOM em um loop, a página iria congelar
		e nada seria mostrado na tela. Navegadores não fazem atualizações do
		que mostram enquanto um programa JavaScript está rodando e também não
		permitem qualquer interação com a página durante esse período.
  	*/
  	var cat = document.querySelector("img");
  	var angle = 0, lastTime = 0;
  	function animate (time) {
  		if (lastTime != null) {
  			angle += (time - lastTime) * 0.001;
  		}
  		lastTime = time;
  		cat.style.top = (Math.sin(angle) * 20) + "px";
  		cat.style.left = (Math.cos(angle) * 200) + "px";
  		requestAnimationFrame(animate);
  	}
  	requestAnimationFrame(animate);

})();