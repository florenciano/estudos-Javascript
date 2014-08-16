$(function() {

	$( "input[type = button]" ).click( function() {

		var valor = $( "input[type = number]" ).val();
		// diferente do 'heigth' o 'outerHeigth' leva em consideração
		// os paddings e as bordas definidas no CSS
		$( "div" ).outerHeight( valor );

		$( "span" ).html( " o novo valor da div é: " + valor + "px" );
	});

	/* ---- */

	$( "button" ).click( function() {
		$( this ).toggleClass( "verde" );
	});

})