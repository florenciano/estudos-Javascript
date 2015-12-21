$(function(){

	/* Construindo o menu Maujor */
	$( "#menu" ).css( "height", "auto" );
	// escondeu todos os itens do menu
	$( "#menu ul" ).hide();

	// ao clicar em cada título...
	$( "#menu h3" ).click(function(){
		// abre/fecha os 'ul'
		$( this ).next().slideToggle( "fast" )
		// fecha os demais 'ul' aberto anteriormente
		.siblings( "ul:visible" ).slideUp( "fast" );
		// add a classe 'corrente'
		$( this ).toggleClass( "corrente" );
		// remove a classe 'corrente' dos add anteriormente
		$( this ).siblings( "#menu h3" ).removeClass( "corrente" );
	});

});