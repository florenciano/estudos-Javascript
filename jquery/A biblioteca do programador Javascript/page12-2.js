$(function(){

	/* Efeito lightbox */

	// criando um elemento mascara qdo carregar a pag
	$( "<div>" )
	.attr( "id","mascara" )
	.css({
		opacity: 0.45,
		width: $( document ).width(), //attr( "width" )
		height: $( document ).height()
	})
	.appendTo( "body" )
	.hide();


	// ao clicar nas imagens aparece a mascara
	$( ".foto" ).click( function (event) {
		event.preventDefault();
		$( "#mascara" ).fadeIn( "slow" );

		// criando um img grande
		$( "<img>")
		.attr( "src", $( this ).attr( "src" ) )
		.addClass( "foto-ampliada" )
		.css({
			left: ($( document ).width() / 2 - 250 ), // 250: metade do width da img
			top: ($( document ).height() / 2 - 186 ) // 186: metade do height da img
		})
		.appendTo( "body" )
		// ao clicar nesta img criada
		.click( function () {
			$( this ).fadeOut( "fast" );
			$( "#mascara" ).fadeOut( "fast" );
		});

	});


	// atualizar o tamanho da mascara conforme redimensiona a janela
	$( window ).resize( function () {
		$( "#mascara" ).css({
			width: $( this ).width(),
			height: $( this ).height()
		});

		$( ".foto-ampliada" ).css({
			left: ($( document ).width() / 2 - 250 ),
			top: ($( document ).height() / 2 - 186 )
		});
	});

	// ao clicar na mascara fechar a imagem e desaparecer a sombra
	$( "#mascara" ).click( function () {
		$( this ).fadeOut();
		$( ".foto-ampliada" ).remove();
	});

});