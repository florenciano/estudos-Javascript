$(function() {


	// btn clickMe
	$( "button:eq(0)" ).click( function() {

		// grep() manipula array e filtra os resultados
		var arr = [ 4, 8, 15, 16, 23, 42 ];
		$( ".display" ).append( "<p>O Array normal é:\n&nbsp;<b>" + arr.join( " - " ) + "</b></p>" );

		// OCORRENCIA 1
		arr = $.grep( arr, function(val, i) {
			return (val != 4);
		});
		$( ".display" ).append( "<p>Excluindo a ocorrência do valor '4':\n&nbsp" + arr.join( " - " ) + "</p>" );


		// OCORRENCIA 2
		arr = $.grep( arr, function(val, i) {
			return (i < 1 || i > 2);
		}, true);
		$( ".display" ).append( "<p>Excluindo a ocorrência entre '2' e '4':\n&nbsp" + arr.join( " - " ) + "</p>" );



		// map() manipula array e constroi um novo array
		var arr2 = [ "eu", "tu", "ele", "nós", "vós" ];
		$( ".display" ).append( "<p>O Array normal é:\n&nbsp;<b>" + arr2.join( " - " ) + "</b></p>" );

		// OCORRENCIA 1
		arr2 = $.map( arr2, function(val, i) {
			return ( val + "*" + ( i / 5 ) );
		});
		$( ".display" ).append( "<p>Transformando em maiúscula:\n&nbsp;" + arr2.join( " - " ) + "</p>" );


		// inArray() verifica no array se contém um valor desejado.
		// Retorna '1' se verdadeiro
		// Retorna '-1' se falso
		var resUm = $.inArray( "tu", arr2 );
		$( ".display" ).append( "<p>Procura 'tu' na bagaça:\n&nbsp;" + resUm + "</p>" )


	});

	// btn Reset
	$( "button:eq(1)" ).click( function() {

		$( ".display" ).empty();

	});

});