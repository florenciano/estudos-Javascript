$(function() {

	$( "button:eq(0)" ).click( function() {

		$( "div" ).find( "p" ).css( "background","orange" );

	});

	/* com o método end() */

	// $( "button:eq(1)" ).click( function() {

	// 	// aqui ele pega todos os 'a'
	// 	$( "div" ).find( "li" ).children().css( "background","orange" );

	// 	// aqui ele pega todos os 'li'
	// 	$( "div" ).find( "li" ).children().end().css( "background","orange" );

	// });

	/* siblings() */
	$( "button:eq(1)" ).click( function() {

		$( "li.menu" ).siblings().css( "background","red" );

	});

	// reset
	$( "button:eq(2)" ).click( function() {
		$( "div" ).find( "p" ).css( "background","" );
		$( "div" ).css( "background","" );
	});


})