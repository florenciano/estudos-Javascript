(function ($) {
	// $.fn();
	// pegar as func disponiveis do jquery...
	console.dir($.fn);
	// vamos construir uma funcao pra zebrar a tabela
	$.fn.zebraTable = function(userconfig) {
		// criar na lista de obj do jQuery a func "ZebraTable";
		// recomendavel criar um func por arquivo
		// console.dir($.fn);
		// $(this).find("tr:odd td").css("background", color || "#00F5FF");
		// console.log(this);
		// console.log(userconfig);

		// criando um obj com as cores
		var baseConfig = {
			odd: "#00F5FF",
			even: "#00E5EE",
			color: "#FFFFFF"
		};

		// sobrescrevendo os obj pelo parametro no momento da chamada
		$.extend(baseConfig, userconfig);

		// aplicando nossa base de cores
		$(this).find("tr:odd td").css("background", baseConfig.odd).end()
			.find("tr:odd td").css("color", "black").end()
			.find("tr:even td").css("background", baseConfig.even).end()
			.find("tr:even td").css("color", baseConfig.color);

		// serve de base para chamar outros comandos
		// por exemplo pra funcionar com isto:
		// $("td").zebraTable().css("border", "1px solid #fff")
		return $(this);
	};	


	// passo o jQuery como parâmetro de funcção, jogando pra dentro da função global
})(jQuery);