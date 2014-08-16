// forma reduzida de dizer: $( document ).ready(function(){ ... });
// também pode ser entendida como Callback
$(function() {

	$( "#diferente" ).css( "background","orange" );
	// passando um contexto.
	// pouco se usa hoje em dia devido ao selectores do css3
	$( "p", $( "#container" ) ).css( "background","violet" );

	// evitar o abuso de criação de conteúdo deste tipo
	$( "<p>Eu sou um 'p' criado via jQuery</p>" ).prependTo( "body" );

	// usando instruções Callback
	$( "button" ).click(function() {

		$( "p" ).each(function(i) {

			$( this ).css( "background","violet" );
			console.log(i);

		});

	});

});