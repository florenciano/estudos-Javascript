$(function(){

	// Ocultando os textos das matérias
	$( ".noticias :not(.tit)" ).hide();
	// criando o elemento 'Saiba mais'
	var btn = $( "<a>" );
		btn.attr({
			href: 	"#",
			class: 	"sm"
		}).text( " [Saiba mais...]" );
	// inserindo o btn após o título da matéria
	$( ".noticias .tit" ).after( btn );

	// criando o elemento 'fechar'
	var close = $( "<a>" );
		close.attr({
			href: 	"#",
			class: 	"fe"
		}).text( "Fechar X" );
	// inserindo o close após o container '.notícias'
	// '.prepend' insere o el como último elemento
	$( ".noticias" ).prepend( close );

	// pegando o inicio das matérias
	var a = [ ];
	$( "span" ).each(function (j) {
		a.push( $( this ).text() );
		$( ".noticias .tit:eq(" + j + ")" ).after( a[j] );
	});

	// Ao clicar no 'Saiba mais...'
	$( ".sm" ).click( function( event ) {
		event.preventDefault();

		// procure seu ancestral '.noticias' e revela todo o conteúdo de seus filhos
		$( this ).parents( ".noticias" ).children().fadeIn( "fast" );

		// para ocultar todas as demais notícias...
		$( this ).parents( ".noticias" ).siblings( ".noticias" ).children( "* :not(.tit, .sm)" ).hide();
		$( ".sm" ).text( " [Saiba mais...]" );

		// some com o texto do btn clicado
		$( this ).text( "" );
	});

	// Ao clicar no 'Fechar x'...
	$( ".fe" ).click( function( event ) {
		event.preventDefault();

		$( this ).parents( ".noticias" ).children( ":not(.tit, .sm)" ).hide();
		$( ".sm" ).text( " [Saiba mais...]" );
	});

});