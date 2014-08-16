$(function() {

	$( "button[type ^= 'butt']" ).click( function() {

		var
		rolVertical = $( "#rolagem" ).scrollTop(),
		rolHorizontal = $( "#rolagem" ).scrollLeft();

		$( "span" ).html( "scrollLeft: <b>" + rolHorizontal + "</b> scrollTop: <b>" + rolVertical + "</b>" );

	});

	$( "button[type ^= 'res']" ).click( function() {
		$( "#rolagem" ).scrollTop( 0 ).scrollLeft( 0 );
		$( "span" ).empty();

	});

})