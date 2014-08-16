$(function() {

	// $( "p" ).click( function() {
	// 	if( $.boxModel == true ) {
	// 		console.log("Standard");
	// 	}
	// 	 else if( $.boxModel == false ) {
	// 		console.log("quebrado");
	// 	}
	// 	else {
	// 		console.log("Não se sabe qual o boxModel");
	// 	}
	// });

	/*  each() */
	var listas = $( "li" );
	var obj = [ ];

	listas.each( function(i, val) {
		obj.push( i, val );
	});

	$( ".display" ).html( "indice: " + obj.join( " - " ) );

});