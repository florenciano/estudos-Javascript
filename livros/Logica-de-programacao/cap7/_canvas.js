(function () {

	var tela = document.getElementById('tela');
	var c = tela.getContext('2d');

	// flag
	function flagCowntry (color1, color2, color3) {
		c.fillStyle = color1;
		c.fillRect(0,0,200,600); // x, y, h, w

		c.fillStyle = color2;
		c.fillRect(200,0,200,600); // x, y, h, w

		c.fillStyle = color3;
		c.fillRect(400,0,200,600); // x, y, h, w
	}

	flagCowntry("#002B7F", "#FCD116", "#CE1126"); // color romenia


	// triangulo
	function testTriangulo (color) {
		c.fillStyle = color;
		c.beginPath();
		c.moveTo(300,300); // ponto central
		c.lineTo(200,600); // lado 1
		c.lineTo(400,600); // lado 2
		c.fill(); // preenche, automaticamente ele faz o lado 3
	}

	testTriangulo("#fff");

	// circulo
	function testCirculo (color1) {
		const PI = Math.PI;
		c.fillStyle = color1;
		c.beginPath();
		c.arc(300,300,50,0,2*PI); // x, y, r, angInicial, angFinal
		c.fill();
	}
	testCirculo("#0ABF2B");



})();