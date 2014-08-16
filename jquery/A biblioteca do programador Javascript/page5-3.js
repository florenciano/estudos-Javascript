$(function() {

	$( "button:first" ).click( function() {

		atualizaClique($( ".displayAll" ));

	});

	$( "button:last" ).click( function() {

		$( "button:first" ).trigger( "click" );
		atualizaClique($( ".displayBtn2" ));

	});

	function atualizaClique (tag) {

		var n = parseInt( tag.text(),0 );
		tag.text( n + 1 );

	}

	 /* event.target */

	 $( "a[href^='http://rfdg.c']" ).click( function() {

	 	console.log(event.target, event.type, event.pageX, event.pageY);
	 	return false;

	 });

});