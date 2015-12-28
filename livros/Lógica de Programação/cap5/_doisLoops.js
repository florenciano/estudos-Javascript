(function () {

	function mostra (frase) {
		var p = document.createElement('p');
		var p_txt = document.createTextNode( frase );
		p.appendChild( p_txt );
		document.body.appendChild( p );
	};

	/*
		Escrever 3 linhas;
		Cada linha ter 25 caracteres iguais
	*/

	var asterisco = "*",
		count = 0,
		count2 = 0;

	for (i = 0; i < 3; i++) {
		for (c = 0; c < 25; c++) {
			document.write("*");
		}
		document.write("<br>");
	};

	document.write("-- brincando -- <br>");

	// brincando com loop
	for (a1 = 0; a1 < 10; a1++) {
		for (a2 = 0; a2 < 10; a2++) {
			if (a2.length == 1) {
				document.write("<br>");
			}
			if (a2.length == 2) {
				document.write("<br>");
			}
			document.write(asterisco);
			break;
		}
		document.write("<br>");
	}

})();