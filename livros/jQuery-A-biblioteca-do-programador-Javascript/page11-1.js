$(function(){

	/* pegando o label e inserindo como placeholder */

	// removendo o label
	// var textoBusca = $( "#formulario label" ).attr( "title" );

	// // inserindo no input
	// var placeholder = $( "input[type=search]" ).val( textoBusca ).css( "color","#999" );

	// placeholder.focus(function() {
	// 	if( $( this ).val() == textoBusca ) {
	// 		$( this ).val( "" );
	// 	}
	// });

	// placeholder.blur(function() {
	// 	if( $( this ).val() == "" ) {
	// 		$( this ).val( textoBusca ).css( "color","#999" );
	// 	}
	// });

	// ocultando as dicas via scripts e não por CSS
	$( "#formulario input + span" ).hide();

	// pegando os labels da página
	var textoLabel = $( "#formulario label" );

	// para cada label faça...
	textoLabel.each(function(n) {
		var text = $( this ).attr( "title" );
		$( this ).siblings( "input:eq(" + n + ")" ).val( text ).css( "color","#999" );
	});

	// pegando os inputs da página
	var inputs = $( "#formulario input" );

	// para cada input faça...
	inputs.each(function(n) {
		var valorLabel = $( this ).prev( "label" ).attr( "title" );

		// ao receber o focus
		$( this ).focus(function() {
			if( $( this ).val() == valorLabel ) {
				$( this ).val( "" );
			}
			$( this ).next().fadeIn( "fast" );
		});

		// ao perder o focus
		$( this ).blur(function() {
			if( $( this ).val() == "" ) {
				$( this ).val( valorLabel );
			}
			$( this ).next().fadeOut( "fast" );
		});
	});

	// contar elementos container
	// uso do seletor universal '*'
	$( "#container *" ).css( "border","1px solid red" );
	var numb = $( "#container *" ).length;
	$( "<span>Numero elementos: <b>"+ numb + "</b> encontrados</span>" ).appendTo( "#container" );

});