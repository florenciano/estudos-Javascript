$(function() {


	// btn clickMe
	$( "button:eq(0)" ).click( function() {

		function rfdg() { };
		var obj = [ "1º pessoa", "2º pessoa", "3º pessoa" ];
		$( ".display" ).append( "<p>O Array é: " + obj.join( " - " ) + "</p>" );

		$.each(obj, function(i) {
			var result = $.isFunction( obj[i] );
			$( "<span>").appendTo( ".display" ).html( "&nbsp;" + result + "&nbsp;" );
		});

	});

	// btn Reset
	$( "button:eq(1)" ).click( function() {

		$( ".display" ).empty();

	});

	/* trim()= remove os espaços em branco antes e depois do array */
	var teste = [ "  Lorem ipsum dolor simet       "];
	console.log( teste );
	console.log( "-----------------------------------" );
	teste = $.trim( teste );
	console.log( teste );

});