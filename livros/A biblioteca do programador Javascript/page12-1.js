$(function(){

	/* Ampliando imagens */

	var maxAlt, maxLar, minAlt, minLarg;
		maxAlt = 375, maxLar = 500, minAlt = 90, minLar = 120;

	// estilizando a legenda
	var abreFecha = $( "#galeria + span" )
	.addClass( "abre-fecha" )
	.css({
		opacity: 	0.6,
		width: 		minLar
	});
	// add no container a legenda
	$( "#galeria" ).prepend( abreFecha )
	// criando a interação...
	.click( function (event) {
		event.preventDefault();
		$( ".abre-fecha" ).hide();

		// gerando as condicionais
		if( $( ".foto" ).attr( "width" ) > minLar ) {
			$( ".foto" ).animate({
				width: 			minLar,
				height: 		minAlt
			}, 1000, function () {
				$( ".abre-fecha" )
				.show()
				.text( "clique para ampliar" )
				.css({
					width: 				$( ".foto" ).attr( "width" ),
					backgroundColor: 	"#add6ef",
					color: 				"#666",
					opacity: 			0.6
				});
			});
			$( ".abre-fecha" ).text( "Clique para ampliar" )
			.css({
				width: 				$( ".foto" ).attr( "width" )
			});
		} else {
			$( ".foto" ).animate({
				width: 		maxLar,
				height: 	maxAlt
			}, 1000, function () {
				$( ".abre-fecha" )
				.show()
				.text( "Clique para fechar" )
				.css({
					width: 				$( ".foto" ).attr( "width" ),
					backgroundColor: 	"#ff6600",
					color: 				"#fff",
					opacity: 			1
				});
			});
		};
	});

});