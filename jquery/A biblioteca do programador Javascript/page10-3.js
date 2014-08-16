$(function(){

	var mais = $( "<a href='#'><img src='mais.gif' alt='Revelar/ocultar cidades' class='maismenos'></a>" );
	$( "#horario tbody tr:not(.sub):even" ).addClass( "impar" );
	$( "#horario tbody tr:not(.sub)" ).hide();

	// inserindo a img na tabela
	$( ".sub th" ).prepend( mais );

	$( "img", $( ".sub th" ) ).click(function(event) {
		event.preventDefault();

		// trocando as img
		if( $( this ).attr( "src" ) == 'menos.gif' ) {
			$( this ).attr( "src", "mais.gif" )
			.parents( ".sub" )
			.siblings( "tr" ).hide();
		} else {
			$( this ).attr( "src", "menos.gif" )
			.parents( ".sub" )
			.siblings( "tr" ).show();
		}
	})
});