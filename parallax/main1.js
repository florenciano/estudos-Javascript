;(function($){

	// identificando os elemets q serão aplicados o efeito
	// neste caso todo el q recebe as classes 'bgParallax'
	$( ".bgParallax" ).each(function(){
		var $obj = $(this);

		$( window ).scroll(function(){
			// rolagem da tela dividido pela velocidade do atributo data-speed add no el.
			// porque negativo? O back tem q rolar para cima
			var yPos = -($(window).scrollTop() / $obj.data( "speed" ));

			// o valor acima será aplicado no background-position: top
			var bgpos = "50% "+ yPos + "px";
			// atribuindo...
			$obj.css( "background-position", bgpos );
		});
		
	});

})(jQuery);