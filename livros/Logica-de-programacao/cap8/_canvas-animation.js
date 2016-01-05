(function () {

	var tela = document.getElementById('tela1');
	var c = tela.getContext('2d');
	var PI = Math.PI;

	// lousa
	c.fillStyle = "#ccc";
	c.fillRect(0,0,600,600);

	function coords (e) {
		var x = e.pageX - tela.offsetLeft; // page - a área do canvas
		var y = e.pageY - tela.offsetTop;
		console.log("Você clicou em: " + x + " & " + y + " coordenadas");
		drawCircle(x,y);
	}

	function drawCircle (coordX, coordY) {
		c.fillStyle = "blue";
		c.beginPath();
		c.arc(coordX, coordY, 10, 0, 2*PI);
		c.fill();
	}

	tela.onclick = coords;


})();