$(function() {

	// criando experiência de uso com faq
	var textVer = $( "<a href='#' style='color:#666; text-decoration:none'>Ver respostas</a>" );

	$( "dd" ).css( "display","none" );
	$( "dt" ).after( textVer );

	// Ao clicar no link...
	$( "a[href='#']" ).click( function(e) {
		e.preventDefault();

		// só vai acontecer algo se o texto for igual a da var 'textVer'
		if( $( this ).text() == "Ver respostas" ) {

			// isto corresponde a linha do link 'Índice'
			$( this ).next().next().toggle();
			// mude o texto de 'Ver respostas' para 'Fechar'
			$( this ).text( "Fechar" );
			// estilizando a 'dd' que contém o conteúdo de texto
			$( this ).next().css({
				border: 		"1px solid #c8c8c8",
				padding: 		"5px 10px",
				background: 	"#e4e4e4"
				// fazendo aparecer no DOM
			}).slideToggle( "fast" );
		} else {
			$( this ).text( "Ver respostas" );
			// sumindo com o 'Fechar'
			$( this ).next().slideToggle( "slow" );
			// sumindo com o 'Índice'
			$( this ).next().next().toggle();
		}

	});

});