(function () {

	var tela = document.getElementById('tela1');
	var c = tela.getContext('2d');

	// yellow
	c.fillStyle = "#FCD116";
	c.fillRect(0,0,600,600);

	function quadro (color, x, y) {
		c.fillStyle = color;
		c.fillRect(x, y, 100, 50);
	}

	function quadroCor (color, y) {
		for (var i = 0; i < 600; i += 50) {
			quadro(color, i, y);
		}
	}

	// blue
	quadroCor("#003893", 300);
	quadroCor("#003893", 350);
	quadroCor("#003893", 400);

	// red
	quadroCor("#CE1126", 450);
	quadroCor("#CE1126", 500);
	quadroCor("#CE1126", 550);


})();