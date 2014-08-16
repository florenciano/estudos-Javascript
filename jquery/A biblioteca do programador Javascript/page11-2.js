$(function(){

	/* Desabilitando campos */

	// desabilitando todos os checkboxes
	// $( "#formulario input:checkbox" ).attr( "disabled", "disabled" );

	// $( "input:radio" ).click(function() {
	// 	// desabilita a(s) selecao(es) dos checkboxes qdo o usuario selecionar outro btn radio
	// 	$( "#formulario input:checkbox" ).removeAttr( "checked" ).removeAttr( "disabled" );
	// 	// desabilita os demais checkboxes
	// 	// repare aqui a navegacao no DOM
	// 	$( this ).parents( ".mudar" )
	// 		.siblings( ".mudar" )
	// 		.find( ":checkbox" )
	// 		.attr( "disabled", "disabled" );
	// });


	/* Revelar campos */
	$( "#formulario label:not(.fabricante)" ).hide();

	$( "input:radio" ).click( function() {
		// revela todos os checkboxes do btn clicado
		$( this ).parents( ".fabricante" ).siblings( "label" ).fadeIn( 400 );
		// esconde todos os checkboxes dos demais btns
		$( this ).parents( ".mudar" )
			.siblings( ".mudar" )
			.children( "label:not( .fabricante )" )
			.slideUp()
			.each(function() {
				// resetando cada label
				$( this ).find( ":checkbox" ).removeAttr( "checked" );
			});

	});


});