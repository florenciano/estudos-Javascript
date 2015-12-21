$(function(){

	/* Slide Show com pagination e texto legenda */

	// Arrumando alinhamento do Título [firula]
	$( "h1" ).css( "textAlign", "center" );

	//esconde a legenda
	$( ".abre-fecha" ).hide();


	// o parâmetro i equivale o 'lenght'
	$( ".foto" ).each( function (i) {
		// substituiremos cada imagem por um 'span' com o texto igual ao 'lenght'
		$( this ).replaceWith( "<span title='" + $( this ).attr( "alt" ) + "'>" + (i+1) + "</span>" );
	});

	// criando o container com e mostrando a primeira img
	var div = $( "<div>" ).attr( "id", "tela" );
	var img = $( "<img>" ).attr({
			src		: 	"1.jpg",
			alt 	: 	"Descrição da imagem"
		});
	div.prepend( img ).insertBefore( "#galeria" );
	$( "#tela" ).append( "<p class='legenda'>" + $( "#galeria a[href='1.jpg'] span" ).attr( "title" ) + "</p>");
	$( ".legenda" ).css( "opacity", 0.6 );

	// mudando as img conforme o click
	$( "#galeria a" ).click( function (event) {
		event.preventDefault();

		if ( !$( "#tela img" ).is( ":animated" ) ) {

			$( ".legenda" ).remove();
			var legenda = $( this ).children( "span" ).attr( "title" );

			// retira css dos demais itens selecionados
			$( "#galeria a " ).removeClass( "corrente" );

			// add css no item selecionado
			$( this ).addClass( "corrente" );

			// aplicando transição na img
			$( "#tela img" )
			.attr( "src", $( this ).text() + ".jpg" )
			.css( "opacity", 0.6 )
			.animate({ opacity 	: 	1 }, "fast", function() {
				$( "#tela" ).append( "<p class='legenda'>" + legenda + "</p>" );
				$( ".legenda" ).css( "opacity", 0.6 );
			});

		}

	});

});