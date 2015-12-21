$(document).ready(function(){

	// (function($) {

	// 	// função para mudar a cor do texto: example de function personalizada
	// 	$.corTexto = function(e, cor) {

	// 		var el = document.getElementsByTagName(e);
	// 		for (var i = 0; i < el.length; i++) {
	// 			el[i].style.color = cor;
	// 		}
	// 	}

	// })(jQuery);


	(function($) {

		// a mesma função anterior só q adaptada para o select
		$.corTexto = function(e) {

			// pega o select
			var selecaoCor = document.getElementById( "selecionaCor" );
			// armazena o índice do item selecionado
			var indiceSelecCor = selecaoCor.selectedIndex;
			// pega o 'value' do indice selecionado
			var selCor = selecaoCor.options[indiceSelecCor].value;

			var selecaoElement = document.getElementById( "selecionaEl" );
			var indiceSelecElement = selecaoElement.selectedIndex;
			var selElement = selecaoElement.options[indiceSelecElement].value;


			// seleciona o elemento do DOM passado pela função
			var el = document.getElementsByTagName( selElement );

			for (var i = 0; i < el.length; i++) {
				// para cada item encontrado no HTML aplica a cor
				el[i].style.color = selCor;
			}
		}

	})(jQuery);

	// chamada da função pelo 'select'
	// $( "#selecionaCor" ).change( function() {
	// 	$.corTexto( "li" );
	// });

	// chamada da função pelo 'select do elemento'
	$( "#aplication" ).click( function() {
		$.corTexto();
	});

	// chamada da função pelos novos btns
	/*
	$( "#paragrafos" ).click( function() {
		$.corTexto( "p" );
	});

	$( "#header" ).click( function() {
		$.corTexto( "h2" );
	});

	$( "#list" ).click( function() {
		$.corTexto( "li" );
	});

	$( "#all" ).click( function() {
		$.corTexto( "*" );
	});
	*/




	/* chmando a função para uso
	$( "button:eq(0)" ).click( function() {
		$.corTexto( "p", "#ffcc00");
	});

	$( "button:eq(1)" ).click( function() {
		$.corTexto( "p", "#ccff00");
	});

	$( "button:eq(2)" ).click( function() {
		$.corTexto( "p", "#cc00ff");
	});

	$( "button:eq(3)" ).click( function() {
		$.corTexto( "p", "#fc00cf");
	});

	$( "button:eq(4)" ).click( function() {
		$.corTexto( "p", "");
	}); */

});

