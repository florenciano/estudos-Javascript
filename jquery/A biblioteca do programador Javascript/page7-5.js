$(function(){

	// Realizando o mesmo exemplo usando só jQuery
	(function( $ ) {

		$( "select" ).change( function() {
			// para cada item da lista selecionado
			$( "option:selected" ).each( function() {
				// armazena o valor do item
				var cor = $( this ).val();

				// chamar a função para mudar a cor do texto
				$.corTexto = function( e ) {
					// aplica no elemento a propriedade css desejada
					$( e ).css( "color", cor );
				}
			});
		});

	})( jQuery );

	// paragráfos
	$( "button:eq(0)" ).click( function() {
		$.corTexto( "p" );
	});

	// cabeçalhos
	$( "button:eq(1)" ).click( function() {
		$.corTexto( "h2" ); // aqui é exclusivamente o 'h2'
	});

	// listas
	$( "button:eq(2)" ).click( function() {
		$.corTexto( "li" );
	});

	// tudo
	$( "button:eq(3)" ).click( function() {
		$.corTexto( "*" );
	});




});

