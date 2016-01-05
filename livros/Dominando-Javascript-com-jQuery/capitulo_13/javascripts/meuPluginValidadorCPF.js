;(function($){

	var validaCpf = function (text) {
		text = text.replace( /\D/g, "" ); // extraindo qualquer digito
		
		 if(text.length === 11) {
	      var digitos = [];

	      for(var pos = 0; pos < text.length; pos++) {
	        digitos[pos] = text.charCodeAt(pos) - 48;
	      }

	      // calcular o primeiro digito
	      var primeiroPasso = [];

	      var soma = 0;

	      for(var pos = 0; pos < 9; pos++) {
	        soma += digitos[pos] * (10 - pos);
	      }

	      var primeiroDigito = 11 - (soma % 11);

	      if(primeiroDigito > 9) {
	        primeiroDigito = 0;
	      }

	      if(digitos[9] !== primeiroDigito) {
	        return false;
	      }

	      // calcular o segundo digito
	      soma = 0;

	      for(var pos = 0; pos < 10; pos++) {
	        soma += digitos[pos] * (11 - pos);
	      }

	      var segundoDigito = 11 - (soma % 11);

	      if(segundoDigito > 9) {
	        segundoDigito = 0;
	      }

	      return digitos[10] === segundoDigito;
	    }

	    return false;

	}

	// para criar um plugin, antes de mais nada é necessário cirar
	// um método no objeto jQuery [fn = protoype]
	$.fn.validador = function (options) {

		// para garantir q o elemento retornado é apenas único e não uma lista
		var init = function () {
			var element = $(this);
			// definindo os parâmetros do plugin
			// o primeiro é o prório plugin
			// o segundo serão as opções passadas pelo usuário
			// $.extend é um método nativo do jQuery
			var settings = $.extend({
				"function" 	: 	validaCpf 	
			}, options );
		}

 		// para melhorar a legibilidade do código
 		var isValid = function(text) {
	    	return settings["function"](text);
	    };

	    // callback para quando perder o foco do elemento
	    var onElementBlur = function() {
	      	var texto = element.val();

	      	if(isValid(texto)) {
	          element.removeClass( "erro" );
	          element.addClass( "valido" );
	        } else {
	          element.removeClass( "valido" );
	          element.addClass( "erro" );
	        }

	    	element.bind( "blur.validador", onElementBlur);
	    }


		return this.each(init);
	}

})(jQuery);