$(function() {

	$( "button[type='button']" ).click( function() {

		$( "p" ).filter( ".sumir" ).css( "color", "red" );

		// $( "div" ).not( ".nocor" ).css( "color", "violet" );

		$( "li" ).slice(1, 3).css( "backgroundColor","orange" );

		$( "div" ).add( ".cacau").css( "float", "left" );
		$( "div" ).children( "span" ).css( "color", "red" );
	});

	$( "input[type=text]" ).keyup( function() {

		var valorBusca = $( this ).val();
		// aqui é preciso chamar uma função
		$( "li" ).filter( valorBusca ).css( "color", "red" );

	});

	var resultados = ($( "div" ).is( ".cor" ));
	$( ".result" ).html( "O resultado é: <b>" + resultados + "</b>" );


})