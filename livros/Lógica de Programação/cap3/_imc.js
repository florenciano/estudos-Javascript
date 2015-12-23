(function () {
	
	function pularLinha () {
		document.write("<br>");
	};
	
	var mostra = function (frase) {
		document.write(frase);
		pularLinha();
	};
	
	/*
		CALCULO DE IMC DE CADA AMIGO
		imc = peso / (altura * altura)
	*/
	function calcIMC (peso, altura) {
		return Math.round( peso / (altura * altura) );
	}

	var p1 = prompt("Qual o seu peso?");
	parseInt(p1);
	var a1 = prompt("Qual a sua altura?");
	var c = calcIMC(p1,a1);
	
	mostra( "Me IMC é: " + c );
	mostra( "Acima da magreza: " + (c - 18.5) );
	mostra( "Abaixo da obsesidade: " + (35 - c) );


})();