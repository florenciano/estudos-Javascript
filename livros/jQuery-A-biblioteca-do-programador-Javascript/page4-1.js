$(function() {

	$( "button" ).click( function() {

		// var corFundo = $( ".teste" ).css( "color" );

		// offset() pega as coordenadas top e left
		var corFundo = $( ".teste" ).offset();
		$( ".resp" ).html( "A coordenada left é: " + corFundo.left + " e a coordenada top é: " + corFundo.top );

	});

})