$(function() {
	// // scripts aqui
	// $('button:eq(0)').click(function(){
	// 	$('p.esconde').hide();
	// });

	// $('button:eq(1)').click(function(){
	// 	$('p.esconde').show();
	// });

	// para qdo o DOM carregar aparecer este texto
	$( "button:eq(2)" ).text( "Esconder" ).click(function(){
		if( $( this ).text() == "Mostrar" ) {
			$( this ).text( "Esconder" );

			$( "#tudo" ).fadeIn( 1000, function() {
				$( "body" ).css({
					color: 			"red",
					borderColor: 	"red"
				});
			});
		} else {
			$( this ).text( "Mostrar" );
			$( "#tudo" ).fadeOut( 1000, function() {
				$( "body" ).css({
					color: 			"green",
					borderColor: 	"green"
				});
			});
		};
	});

	// $('button:eq(3)').click(function(){
	// 	$('p').toggle();
	// });
});