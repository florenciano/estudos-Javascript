(function () {

	var tela = document.getElementById('tela1');
	var c = tela.getContext('2d');
	var PI = Math.PI;

	// lousa
	c.fillStyle = "#eee";
	c.fillRect(0,0,600,600);


	function drawCircle (x, y, raio) {

		/*  Draw circle */
		c.fillStyle = "red";
		c.beginPath();
		c.arc(x, y, raio, 0, 2*PI);
		c.fill();
	}

	function clearTela () {
		c.clearRect(0,0,600,600);
	}

	// animation
	var x = 1;
	function draw () {
		clearTela();
		drawCircle(x, 100, 10); // coordX, coordY, raio
		x++;
		if (x > 590) {
			clearInterval(a);
		}
	}

	var a = setInterval(draw, 30);


	// tela.onclick = drawCircle;


})();