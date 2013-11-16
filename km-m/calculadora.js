// converter km em m
(function(){
	var btnCalculo = document.querySelector("#calcular");

	btnCalculo.addEventListener("click", function(event) {
		event.preventDefault();
		var numeroDigitado = document.querySelector("#kmUnits").value;
		// numeroDigitado.replace(",",".");
		numeroDigitado = parseFloat(numeroDigitado) * 1000;

		var resultado = document.querySelector("#meterUnits");
		resultado.value = numeroDigitado;
		// console.log(resultado);
	});

})();