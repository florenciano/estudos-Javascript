(function () {
	
	function pularLinha () {
		document.write("<br>");
	};
	
	var mostra = function (frase) {
		document.write(frase);
		pularLinha();
	};

	function calcPontos (vitoria, empate) {
		return parseInt(vitoria * 3) + parseInt(empate);
	}

	var vit = prompt("Qtas vitórias?"),
		emp = prompt("Qtos empates?");

	var	pontos = calcPontos( vit, emp );

	mostra( "O time tem: " + pontos + " pontos!" );

	var vitAdversario = prompt("Qtas vitórias seu time tem?"),
		empAdversario = prompt("Qtos empates seu time tem?");

		var pontosAdversario = calcPontos( vitAdversario, empAdversario );

	mostra ( "O time adversário tem: " + pontosAdversario + " pontos!" );

	if (pontos > pontosAdversario) {
		mostra( "Nosso time tem mais pontos" );
	} else if (pontos = pontosAdversario) {
		mostra( "Empatados" );
	} else {
		mostra( "Nosso time tem menos pontos" );
	}


})();