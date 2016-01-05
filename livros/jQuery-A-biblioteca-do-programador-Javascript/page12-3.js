$(function(){

	/* Slide Show */

	// Criando uma nova legenda
	$( ".abre-fecha" ).text( "Clique nas imagens para visualizar em tamanho maior" );

	// mudando o tamanho da galeria
	$( "#galeria" ).css({
		position		: 		"relative",
		width 			: 		"500px",
		height 			: 		"375px"
	});

	// muda o tamanho das imgs dentro da galeria
	// e add a função do click
	$( ".foto" ).css({
		position 		: 		"absolute",
		left 			: 		0,
		zIndex 			: 		1
	}).attr({
		width 			: 		"500px",
		height 			: 		"375px"
	}).click( function ( event ) {
		event.preventDefault();

		// criando uma 'transição de saída' ao clicar na img
		// qdo terminar a transição pega esta img clicada e add no final da galeria
		// isto permite ela voltar em loop
		// $( this ).fadeOut( "fast", function () {
		// 	$( this ).show().prependTo( "#galeria" ).css( "cursor","pointer" );
		// });

		// criando animações randomicas
		var r = Math.floor( (Math.random())*3 );

		if ( r == 0 ) {
			$( this ).fadeOut( "fast", function () {
				$( this ).show().prependTo( "#galeria" ).css( "cursor","pointer" );
			});
		} else if ( r == 1 ) {
			$( this ).hide( "fast", function () {
				$( this ).show().prependTo( "#galeria" ).css( "cursor","pointer" );
			});
		} else {
			$( this ).slideUp( "fast", function () {
				$( this ).show().prependTo( "#galeria" ).css( "cursor","pointer" );
			});
		}


	});

});