(function () {

	var tela = document.getElementById('tela1');
	var c = tela.getContext('2d');

	function flagColombia (color1, color2, color3) {
		c.fillStyle = color1;
		c.fillRect(0,0,600,300);

		c.fillStyle = color2;
		c.fillRect(0,300,600,150);

		c.fillStyle = color3;
		c.fillRect(0,450,600,150);

	}
	flagColombia("#FCD116", "#003893", "#CE1126");

	var tela = document.getElementById('tela2');
	var d = tela.getContext('2d');

	function flagMadagascar (color1, color2, color3) {
		d.fillStyle = color1;
		d.fillRect(0,0,200,600);

		d.fillStyle = color2;
		d.fillRect(200,0,400,300);

		d.fillStyle = color3;
		d.fillRect(200,300,400,300);

	}
	flagMadagascar("#fff", "#fc3d32", "#007e3a");


})();