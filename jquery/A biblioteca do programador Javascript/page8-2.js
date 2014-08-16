$(function() {
	// animate()

	$( "html" ).css( "height", "101%" );
	// criei um btn após 'h1'
	$( "h1" ).after( "<button type='button'>Esconder</button>" );
	var emAndamento = "<img src='carregando.gif' class='gif-andamento' />";
	var alturaJanela = $( window ).height();
	// pega a altura do obj incluindo padding + borda
	var alturaObjeto = $( "p" ).outerHeight();
	var posicaoObjeto = $( "p" ).position().top;
	var amplitudeDeslocamento = alturaJanela - alturaObjeto - posicaoObjeto;

	$( "button" ).click( function() {
		if( $( this ).text() == "Mostrar" ) {
			// mudar o texto do btn, esconde e após ele no DOM aparece a img carregando
			$( this ).text( "Esconder" ).hide().after( emAndamento );
			// surge o paragrafo, some a img e aparece o botão
			$( "p" ).show().animate({
				top: 		0,
				opacity: 	1,
			}, 2500, function() {
				$( ".gif-andamento" ).css( "display","none" );
				$( "button" ).show();
			});
		} else {
			$( this ).text( "Mostrar" ).hide().after( emAndamento );
			$( "p" ).css({ position: "relative" }).animate({
				top: 		amplitudeDeslocamento,
				opacity:  	0,
			}, 2500, function() {
				$( ".gif-andamento" ).css( "display","none" );
				$( "button" ).show();
			});
		}
	});

});