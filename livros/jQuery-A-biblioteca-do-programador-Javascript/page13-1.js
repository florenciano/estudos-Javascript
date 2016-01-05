$(function(){

	/* Usando plug-ins Caroussel 'http://sorgalla.com/jcarousel/' */

	function mycarousel_initCallback(carousel) {
	    // Desabilita o autoscroll se for clicada uma seta manual.
	    carousel.buttonNext.bind('click', function() {
	        carousel.startAuto(0);
	    });
	    carousel.buttonPrev.bind('click', function() {
	        carousel.startAuto(0);
	    });

	    // Desabilita o autoscroll com o mouse sobre uma imagem.
	    carousel.clip.hover(function() {
	        carousel.stopAuto();
	    }, function() {
	        carousel.startAuto();
	    });
	};

	$( "#chorizontal" ).jcarousel({
		auto: 1,
		wrap: "last",
		buttonNextHTML: null,
		buttonPrevHTML: null,

		initCallback: mycarousel_initCallback
	});


	$( "#cvertical" ).jcarousel({
		vertical: true
	});

	// testano outras paradas
	if( navigator.geolocation ) {
		console.log("yes");
	} else {
		console.log("no");
	}

});