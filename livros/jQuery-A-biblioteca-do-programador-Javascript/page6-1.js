$(function() {

	/* efeitos básicos */
	$( "button:eq(0)" ).click( function() {
		$( "div" ).show( 400 );
	});

	$( "button:eq(1)" ).click( function() {
		$( "div" ).hide( "fast" );
	});

	$( "button:eq(2)" ).click( function() {
		$( "div" ).toggle( 400 );
	});

	/* efeitos corrediços */
	$( "button:eq(3)" ).click( function() {
		$( "div" ).slideDown( "slow" );
	});

	$( "button:eq(4)" ).click( function() {
		$( "div" ).slideUp( "slow" );
	});

	$( "button:eq(5)" ).click( function() {
		$( "div" ).slideToggle( "fast" );
	});

	/* efeitos opacidade */
	$( "button:eq(6)" ).click( function() {
		$( "div" ).fadeIn( "fast" );
	});

	$( "button:eq(7)" ).click( function() {
		$( "div" ).fadeOut( "slow" );
	});

	$( "button:eq(8)" ).click( function() {
		$( "div" ).fadeToggle( 400 );
	});

	// $( "button:eq(9)" ).click( function() {
	// 	$( "div" ).fadeTo( 400, 0.1 );
	// });

	/* efeitos personalizados */
	// $( "button:eq(10)" ).one("click", function() {
	// 	console.log("hola datevid");
	// 	$( "div" ).animate({
	// 		// width: 		"+=50",
	// 		width: 		[ "toggle", "swing" ],
	// 		height: 	[ "toggle", "swing" ],
	// 		opacity: 	0.5,
	// 		border: 	"5px solid #c8c8c8"
	// 	}, 800, "linear", function() {
	// 		$( this ).after( "<span class='teste'>Animação completa</span>" );
	// 	});
	// });

	// variação do exemplo acima
	$( "button:eq(10)" ).one("click", function() {

		$( "div" ).animate(
		{
			width: 		"toggle",
			height: 	"toggle",
			fontSize: 	"3em",
		},
		{
			duration: 	1000,
			specialEasing: {
				width: 		"linear",
				height: 	"linear"
			},

			complete: function() {
				$( this ).after( "<span class='teste'>Terminou a animação</span>" );
				if( $( this ).error() ) {
					$( this ).stop();
				}
			}

		});

	});




});