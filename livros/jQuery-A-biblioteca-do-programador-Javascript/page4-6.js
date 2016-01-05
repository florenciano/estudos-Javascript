$(function() {

	$( "button:eq(0)" ).click( function() {

		$( "div" ).append( $( "input" ).map( function() {
			return $( this ).val();
		}).get().join( "\n<br> " ));

	});

	$( "button:eq(1)" ).click( function() {
		$( "div" ).empty();
	})

});