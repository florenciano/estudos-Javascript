$(function() {

	/*
	$( "p" ).toggle(

	function() {
		$( "img" ).css( "display","block" ).attr({ "src": "2.gif" });
	},
	function() {
		$( "img" ).css( "display","block" ).attr({ "src": "3.gif" });
	},
	function() {
		$( "img" ).css( "display","block" ).attr({ "src": "4.gif" });
	},
	function() {
		$( "img" ).css( "display","block" ).attr({ "src": "1.gif" });
	})
	*/

	$( "img" ).hover(
	function() {
		$( this ).attr({ src: "2-over.gif" });
	},
	function() {
		$( this ).attr({ src: "2.gif" });
	});

	// bind(): agrega mais de um evento
	$( "button:eq(0)" ).bind( "click", "change", function() {
		console.log("botão 1");
	});

	// one(): só executa o evento uma vez
	$( "button:eq(1)" ).one( "click", function() {
		console.log("botão 2");
	});


});